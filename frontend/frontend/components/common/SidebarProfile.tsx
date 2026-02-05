import { useSignOutDialog } from '@/hooks/useSignOutDialog';
import { getLicences } from '@/lib/api';
import React, { useEffect, useState } from 'react';

// Get pro status from cookie
function getProStatusFromCookie(): boolean {
  if (typeof window === 'undefined') return false;
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name.trim() === 'hexmos-one-fdt-p-status' && value === 'true') {
      return true;
    }
  }
  return false;
}

// Get JWT from localStorage
function getJWT(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('hexmos-one');
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

  // Extract user ID and set hexmos-one-id cookie
  const userId = extractUserIdFromJWT(jwt);

  // Set cookies for SSR compatibility and cross-domain access
  const isSecure = window.location.protocol === 'https:';
  const isProduction = window.location.hostname.includes('hexmos.com');
  const domain = isProduction ? '.hexmos.com' : 'localhost';
  const sameSite = isProduction ? 'None' : 'Lax';

  // Set hexmos-one cookie
  const hexmosCookieOptions = `path=/; SameSite=${sameSite}${isSecure ? '; Secure' : ''}${domain ? `; domain=${domain}` : ''}`;
  document.cookie = `hexmos-one=${jwt}; ${hexmosCookieOptions}`;

  // Set hexmos-one-id cookie
  if (userId) {
    const pIdCookieOptions = `path=/; SameSite=${sameSite}${isSecure ? '; Secure' : ''}${domain ? `; domain=${domain}` : ''}`;
    document.cookie = `hexmos-one-id=${userId}; ${pIdCookieOptions}`;
  }

  window.dispatchEvent(new Event('jwt-changed'));
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

        // Extract and store user info
        if (userData) {
          const userInfo: UserInfo = {};
          if (userData.first_name) userInfo.firstName = userData.first_name;
          if (userData.last_name) userInfo.lastName = userData.last_name;
          if (userData.email) userInfo.email = userData.email;

          if (userInfo.firstName || userInfo.lastName || userInfo.email) {
            localStorage.setItem('hexmos-user-info', JSON.stringify(userInfo));
          }
        }

        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, '', cleanUrl);
        return jwt;
      }
    } catch (e) {
      console.error('Failed to parse signin callback data:', e);
    }
  }
  return null;
}

function handleAutoLogin(): void {
  if (typeof window === 'undefined') return;
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name.trim() === 'hexmos-one') {
      const cookieJWT = decodeURIComponent(value);
      if (cookieJWT) {
        setJWT(cookieJWT);
      }
    }
  }
}

function getInitials(userName: string): string {
  if (!userName) return '';
  const parts = userName.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return userName.substring(0, 2).toUpperCase();
}

const SidebarProfile: React.FC = () => {
  const [hasJWT, setHasJWT] = useState<boolean>(false);
  const [isPro, setIsPro] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const { handleSignOut, SignOutDialog } = useSignOutDialog();

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
        console.error('[SidebarProfile] Error fetching licences after signin:', error);
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

      // Only fetch from API if cookie is missing
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
          console.error('[SidebarProfile] Error fetching licences:', error);
          setIsPro(false);
        });
      }
    } else {
      // No JWT, definitely not pro
      setIsPro(false);
    }
  }, []);

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
            console.error('[SidebarProfile] Error fetching licences on JWT change:', error);
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
  }, []);

  const handleSignIn = () => {
    const currentUrl = window.location.href;
    const signinUrl = `https://hexmos.com/signin?app=livereview&appRedirectURI=${encodeURIComponent(currentUrl)}`;
    window.location.href = signinUrl;
  };

  return (
    <div className="flex items-center justify-between gap-3">
      {hasJWT ? (
        <>
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-8 h-8 rounded-full bg-neon/20 dark:bg-neon-light/20 flex items-center justify-center flex-shrink-0">
              <div className="text-neon dark:text-neon-light font-semibold text-xs">
                {getInitials(userName)}
              </div>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                {userName || 'User'}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">
                {isPro ? 'PRO' : 'FREE'}
              </div>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
            aria-label="Sign Out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m16 17 5-5-5-5"></path>
              <path d="M21 12H9"></path>
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            </svg>
          </button>
        </>
      ) : (
        <button
          onClick={handleSignIn}
          className="w-full flex items-center justify-start hover:opacity-80 transition-opacity duration-200"
          style={{ gap: '0.5rem' }}
        >
          <img
            src="https://hexmos.com/freedevtools/svg_icons/productivity/hexmos.svg"
            alt="Hexmos Logo"
            className="flex-shrink-0 rounded-full"
            style={{ width: '2rem', height: '2rem' }}
            loading="lazy"
          />
          <div className="flex flex-col">
            <p className="text-left text-neon dark:text-neon-light leading-tight font-semibold" style={{ fontSize: '0.875rem' }}>
              Sign In
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-tight" style={{ fontSize: '0.55rem' }}>
              <span>Enjoy benefits with Pro</span>
            </p>
          </div>
        </button>
      )}
      <SignOutDialog />
    </div>
  );
};

export default SidebarProfile;

