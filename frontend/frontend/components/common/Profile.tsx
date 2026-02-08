import React, { useEffect, useState, useRef } from 'react';
import { LogOut } from 'lucide-react';
import { getLicences, getProStatusFromCookie } from '@/lib/api';
import { useSignOutDialog } from '@/hooks/useSignOutDialog';

// Get JWT from localStorage
function getJWT(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('hexmos-one');
}

// Get JWT from cookie
function getJWTFromCookie(): string | null {
  if (typeof window === 'undefined') return null;

  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'hexmos-one' && value) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

// Extract user ID from JWT payload
function extractUserIdFromJWT(jwt: string): string | null {
  try {
    const parts = jwt.split('.');
    if (parts.length !== 3) return null;

    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    return payload.uId || payload.parseUserId || payload.userId || payload.sub || null;
  } catch (e) {
    console.error('Failed to extract user ID from JWT:', e);
    return null;
  }
}

// User info interface
interface UserInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
}

// Get user info from localStorage
function getUserInfo(): UserInfo | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('hexmos-user-info');
  if (!stored) return null;
  try {
    return JSON.parse(stored) as UserInfo;
  } catch {
    return null;
  }
}

// Set user info in localStorage
function setUserInfo(info: UserInfo | null): void {
  if (typeof window === 'undefined') return;
  if (info) {
    localStorage.setItem('hexmos-user-info', JSON.stringify(info));
  } else {
    localStorage.removeItem('hexmos-user-info');
  }
}

// Format user display name
function formatUserName(info: UserInfo | null): string {
  if (!info) return '';

  if (info.firstName && info.lastName) {
    return `${info.firstName} ${info.lastName}`;
  } else if (info.firstName) {
    return info.firstName;
  } else if (info.email) {
    return info.email;
  }

  return '';
}

// Set JWT in localStorage and cookies
function setJWT(jwt: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('hexmos-one', jwt);

  // Extract user ID and set hexmos-one-id cookie (avoids decoding JWT on every request)
  const userId = extractUserIdFromJWT(jwt);

  // Set cookies for SSR compatibility and cross-domain access
  const isSecure = window.location.protocol === 'https:';
  const isProduction = window.location.hostname.includes('hexmos.com');
  const domain = isProduction ? '.hexmos.com' : 'localhost';
  const sameSite = isProduction ? 'None' : 'Lax';

  // Set hexmos-one cookie (for auto-login compatibility across all hexmos.com subdomains)
  const hexmosCookieOptions = `path=/; SameSite=${sameSite}${isSecure ? '; Secure' : ''}${domain ? `; domain=${domain}` : ''}`;
  document.cookie = `hexmos-one=${jwt}; ${hexmosCookieOptions}`;

  // Set hexmos-one-id cookie (for fast user ID lookup)
  if (userId) {
    const pIdCookieOptions = `path=/; SameSite=${sameSite}${isSecure ? '; Secure' : ''}${domain ? `; domain=${domain}` : ''}`;
    document.cookie = `hexmos-one-id=${userId}; ${pIdCookieOptions}`;
  }

  window.dispatchEvent(new Event('jwt-changed')); // Dispatch custom event
}

// Handle signin callback - parse ?data= parameter
function handleSigninCallback(): string | null {
  if (typeof window === 'undefined') return null;

  const urlParams = new URLSearchParams(window.location.search);
  const dataParam = urlParams.get('data');

  if (dataParam) {
    try {
      const decoded = decodeURIComponent(dataParam);
      const parsed = JSON.parse(decoded);
      const jwt = parsed?.result?.jwt;
      const userData = parsed?.result?.data;

      if (jwt) {
        setJWT(jwt);

        // Extract and store user info (name/email)
        if (userData) {
          const userInfo: UserInfo = {};
          if (userData.first_name) userInfo.firstName = userData.first_name;
          if (userData.last_name) userInfo.lastName = userData.last_name;
          if (userData.email) userInfo.email = userData.email;

          // Only set if we have at least one field
          if (userInfo.firstName || userInfo.lastName || userInfo.email) {
            setUserInfo(userInfo);
          }
        }

        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, '', cleanUrl);
        return jwt;
      } else {
        console.error('JWT not found in signin callback data');
      }
    } catch (e) {
      console.error('Failed to parse signin callback data:', e);
      console.error('Raw data param:', dataParam);
    }
  }
  return null;
}

// Handle auto-login from cookies
function handleAutoLogin(): void {
  if (typeof window === 'undefined') return;

  // Check if already signed in via localStorage
  const existingJWT = getJWT();
  if (existingJWT) {
    return;
  }

  // Check if cookie exists (user logged in from different subdomain)
  const cookieJWT = getJWTFromCookie();
  if (cookieJWT) {
    // Store JWT from cookie to localStorage
    setJWT(cookieJWT);
  }
}

interface ProfileProps {
  isPro?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ isPro: backendIsPro = false }) => {
  const [hasJWT, setHasJWT] = useState<boolean>(false);
  // Initialize with false - we'll check actual licence status in useEffect
  const [isPro, setIsPro] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { handleSignOut, SignOutDialog } = useSignOutDialog();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.command === 'login-success' && event.data?.token) {
        setJWT(event.data.token);
        // If user data included in message, store it
        if (event.data.user) {
          const userData = event.data.user;
          const userInfo: UserInfo = {};
          if (userData.first_name) userInfo.firstName = userData.first_name;
          if (userData.last_name) userInfo.lastName = userData.last_name;
          if (userData.email) userInfo.email = userData.email;
          // Fallback for username (from user's pasted data)
          if (!userInfo.email && userData.username) userInfo.email = userData.username;

          if (userInfo.firstName || userInfo.lastName || userInfo.email) {
            setUserInfo(userInfo);
            setUserName(formatUserName(userInfo));
          }
        }
      }
      if (event.data?.command === 'logout') {
        handleSignOut();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    // Load user info on mount
    const userInfo = getUserInfo();
    setUserName(formatUserName(userInfo));

    // Check for signin callback first
    const jwt = handleSigninCallback();
    if (jwt) {
      setHasJWT(true);
      // Update user name after signin callback
      const updatedUserInfo = getUserInfo();
      setUserName(formatUserName(updatedUserInfo));

      // Fetch licence status after signin to set cookie and update pro status
      getLicences().then((result) => {
        if (result.success) {
          // getLicences() automatically sets the cookie
          // Check the cookie for pro status
          const proStatus = getProStatusFromCookie();
          setIsPro(proStatus);
        } else {
          setIsPro(false);
        }
      }).catch((error) => {
        console.error('[Profile] Error fetching licences after signin:', error);
        setIsPro(false);
      });
      return;
    }

    // Handle auto-login from cookies
    const autoLoginJWT = getJWT();
    if (!autoLoginJWT) {
      handleAutoLogin();
    }

    // Check if already signed in
    const existingJWT = getJWT();
    setHasJWT(!!existingJWT);

    // Load user info if already signed in
    if (existingJWT) {
      const userInfo = getUserInfo();
      setUserName(formatUserName(userInfo));
    }

    if (existingJWT) {
      // Check cookie first - this is the source of truth, no API call needed
      const proStatusFromCookie = getProStatusFromCookie();
      setIsPro(proStatusFromCookie);

      // Only fetch from API if cookie is missing (first time or cookie expired)
      // This handles the case where user was already signed in but cookie wasn't set
      if (!proStatusFromCookie) {
        getLicences().then((result) => {
          if (result.success) {
            // getLicences sets the cookie, so check it again
            const proStatus = getProStatusFromCookie();
            setIsPro(proStatus);
          } else {
            setIsPro(false);
          }
        }).catch((error) => {
          console.error('[Profile] Error fetching licences:', error);
          setIsPro(false);
        });
      }
    } else {
      // No JWT, definitely not pro
      setIsPro(false);
    }
  }, [backendIsPro]);

  useEffect(() => {
    const handleJWTChange = async () => {
      const jwt = getJWT();
      setHasJWT(!!jwt);

      // Update user name when JWT changes
      const userInfo = getUserInfo();
      setUserName(formatUserName(userInfo));

      if (jwt) {
        // When JWT changes (e.g., after sign-in), check cookie first
        const proStatusFromCookie = getProStatusFromCookie();
        setIsPro(proStatusFromCookie);

        // Only fetch from API if cookie is missing
        if (!proStatusFromCookie) {
          try {
            const result = await getLicences();
            if (result.success) {
              // getLicences sets the cookie, so check it again
              const proStatus = getProStatusFromCookie();
              setIsPro(proStatus);
            } else {
              setIsPro(false);
            }
          } catch (error) {
            console.error('[Profile] Error fetching licences on JWT change:', error);
            setIsPro(false);
          }
        }
      } else {
        // No JWT, definitely not pro
        setIsPro(false);
      }
    };

    const handleLicenceChange = () => {
      // Check cookie when licence changes
      const proStatus = getProStatusFromCookie();
      setIsPro(proStatus);
    };

    // Listen for custom events
    window.addEventListener('jwt-changed', handleJWTChange);
    window.addEventListener('active-licence-changed', handleLicenceChange);
    window.addEventListener('storage', handleJWTChange);

    return () => {
      window.removeEventListener('jwt-changed', handleJWTChange);
      window.removeEventListener('active-licence-changed', handleLicenceChange);
      window.removeEventListener('storage', handleJWTChange);
    };
  }, [backendIsPro]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isDropdownOpen]);

  // Profile icon - inline SVG that adapts to dark mode
  const ProfileIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-full h-full text-gray-600 dark:text-gray-400"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );

  return (
    <div className="flex-shrink-0 mobile-search-hide relative">
      <button
        ref={buttonRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 cursor-pointer transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Profile menu"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2" style={{ fontSize: '0.875rem' }}>{isPro ? 'PRO' : 'FREE'}</span>
        <div className="relative rounded-full cursor-pointer transition-all duration-200 w-9 h-9 flex items-center justify-center bg-white ring ring-gray-950/10 dark:bg-gray-600 dark:ring-white/10">
          <ProfileIcon />
        </div>
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-56 rounded-md border dark:border-gray-700 border-gray-300 bg-slate-50 dark:bg-slate-900 shadow-lg z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1">
            {hasJWT ? (
              <>
                {userName && (() => {
                  const userInfo = getUserInfo();
                  return (
                    <>
                      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          Welcome, {userName}
                        </div>
                        {userInfo?.email && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {userInfo.email}
                          </div>
                        )}
                      </div>
                      <div className="border-t border-gray-200 dark:border-gray-700"></div>
                    </>
                  );
                })()}
                {isPro ? (
                  <a
                    href="/freedevtools/pro/"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span>💎</span>
                    <span>View Pro Plan</span>
                  </a>
                ) : (
                  <a
                    href="/freedevtools/pro/"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span>💎</span>
                    <span>Enjoy Benefits with Pro</span>
                  </a>
                )}
                <div className="border-t border-gray-200 dark:border-gray-700 "></div>
                <a
                  href="/freedevtools/pro/bookmarks/"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  role="menuitem"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <span>🔖</span>
                  <span>My Bookmarks</span>
                </a>
                <div className="border-t border-gray-200 dark:border-gray-700 "></div>
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    handleSignOut();
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  role="menuitem"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <a
                  href="/freedevtools/pro/"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  role="menuitem"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <span>💎</span>
                  <span>Enjoy Benefits with Pro</span>
                </a>
                <div className="border-t border-gray-200 dark:border-gray-700 "></div>
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    // Check if running in VS Code
                    if (window.location.search.includes('vscode=true') || window.location.hash.includes('vscode=true')) {
                      window.parent.postMessage({ command: 'login' }, '*');
                    } else {
                      const currentUrl = window.location.href;
                      const signinUrl = `https://hexmos.com/signin?app=freedevtools&appRedirectURI=${encodeURIComponent(currentUrl)}`;
                      window.location.href = signinUrl;
                    }
                  }}
                  className="flex w-full items-center justify-start gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  role="menuitem"
                >
                  <img
                    src="https://hexmos.com/freedevtools/svg_icons/productivity/hexmos.svg"
                    alt="Hexmos Logo"
                    className="h-4 w-4"
                    loading="lazy"
                  />
                  <span>Sign in</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
      <SignOutDialog />
    </div>
  );
};

export default Profile;

