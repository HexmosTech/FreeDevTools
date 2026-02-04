import React, { useEffect, useState } from 'react';

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

// User info interface
interface UserInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
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

// Redirect to signin page
function redirectToSignin(): void {
  if (typeof window === 'undefined') return;
  const currentUrl = window.location.href;
  const signinUrl = `https://hexmos.com/signin?app=livereview&appRedirectURI=${encodeURIComponent(currentUrl)}`;
  window.location.href = signinUrl;
}

const Signin: React.FC = () => {
  const [hasJWT, setHasJWT] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for signin callback first
    const jwt = handleSigninCallback();
    if (jwt) {
      setHasJWT(true);
      setIsLoading(false);
      return;
    }

    // Check if already signed in via localStorage
    const existingJWT = getJWT();
    if (existingJWT) {
      setHasJWT(true);
      setIsLoading(false);
      return;
    }

    // Check if cookie exists (user logged in from different subdomain)
    const cookieJWT = getJWTFromCookie();
    if (cookieJWT) {
      // Cookie exists, automatically trigger sign-in button
      // This will redirect to signin page which will handle the login
      redirectToSignin();
      return;
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleJWTChange = () => {
      const jwt = getJWT();
      setHasJWT(!!jwt);
    };

    // Listen for custom event (dispatched from other components)
    window.addEventListener('jwt-changed', handleJWTChange);

    // Also listen for storage event (for cross-tab sync)
    window.addEventListener('storage', handleJWTChange);

    return () => {
      window.removeEventListener('jwt-changed', handleJWTChange);
      window.removeEventListener('storage', handleJWTChange);
    };
  }, []);

  // Don't show the card if user is signed in (JWT exists)
  // Signin works normally - users can sign in regardless of pro status
  if (isLoading || hasJWT) {
    return null;
  }

  return (
    <div className="w-full max-w-96 mx-auto">
      {/* Already Paid Plan Card */}
      <div>
        <div className="relative w-full max-w-96 rounded-xl bg-white p-6 shadow-sm border border-gray-200 dark:border-slate-800 dark:bg-slate-900">
          {/* Logo and Title */}
          <div id="header-inner" className="flex items-center justify-between relative"  >
					<a
						href="/freedevtools/"
						id="header-logo"
						className="flex items-center hover:opacity-80 transition-opacity duration-200 flex-shrink-0 mobile-search-hide"
						aria-label="Free DevTools - Go to homepage"
					>
            <img
              src="/freedevtools/public/freedevtools-logo_32.webp"
              alt="Free DevTools Logo"
							className="flex-shrink-0"
            />
						<div className="flex flex-col">
							<p id="logo-title" className="text-neon dark:text-neon-light leading-tight font-semibold" >
								Free DevTools
							</p>
							<p id="logo-subtitle" className="hidden md:block text-slate-800 dark:text-slate-400 leading-tight" >
								<span>3,50,000+ Free Dev Resources</span>
							</p>
            </div>
					</a>
          </div>

          {/* Sign in text */}
          <p className="mb-2 text-gray-600 dark:text-gray-300 mt-6">
          Already a pro user? Sign in  
          </p>

          {/* Sign in button */}
          <button
            onClick={redirectToSignin}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-100 bg-white px-6 py-3 font-medium text-gray-00 transition-all hover:bg-blue-100 hover:border-gray-200 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700"
          >
            {/* Hexmos logo */}
            <img
              src="https://hexmos.com/freedevtools/svg_icons/productivity/hexmos.svg"
              alt="Hexmos Logo"
              className="h-6 w-6"
              loading="lazy"
            />
            <span >Sign in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
