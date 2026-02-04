import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useSignOutDialog } from '@/hooks/useSignOutDialog';

// Get JWT from localStorage
function getJWT(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('hexmos-one');
}

// Export confirmSignOut function for use in other components
export const confirmSignOut = async () => {
  const jwt = getJWT();
  const url = 'https://parse.apps.hexmos.com/parse/functions/logout';
  
  try {
    if (jwt) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('[SignOut] Logout response:', data);
    }
  } catch (error) {
    console.error('[SignOut] Logout error:', error);
  }

  // Remove JWT from localStorage
  localStorage.removeItem('hexmos-one');
  
  // Remove user info from localStorage
  localStorage.removeItem('hexmos-user-info');
  
  // Dispatch event to notify other components
  window.dispatchEvent(new Event('jwt-changed'));

  // Remove cookies (similar to purchases)
  if (typeof document !== 'undefined') {
    const isProduction = window.location.hostname.includes('hexmos.com');
    const domain = isProduction ? '.hexmos.com' : 'localhost';
    
    // Remove hexmos-one cookie from both current domain and .hexmos.com
    document.cookie = 'hexmos-one=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    if (isProduction) {
      document.cookie = 'hexmos-one=; path=/; domain=.hexmos.com; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
    
    // Remove hexmos-one-id cookie
    document.cookie = `hexmos-one-id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain ? `; domain=${domain}` : ''}`;
    
    // Remove hexmos-one-fdt-p-status cookie
    document.cookie = `hexmos-one-fdt-p-status=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain ? `; domain=${domain}` : ''}`;
    if (isProduction) {
      document.cookie = `hexmos-one-fdt-p-status=; path=/; domain=.hexmos.com; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }

  // Reload the page to reflect the logout state
  window.location.reload();
};

const SignOut: React.FC = () => {
  const [hasJWT, setHasJWT] = useState<boolean>(false);
  const { handleSignOut, SignOutDialog } = useSignOutDialog();

  useEffect(() => {
    // Check if JWT exists
    const jwt = getJWT();
    setHasJWT(!!jwt);
  }, []);

  useEffect(() => {
    // Listen for JWT changes
    const handleJWTChange = () => {
      const jwt = getJWT();
      setHasJWT(!!jwt);
    };

    window.addEventListener('jwt-changed', handleJWTChange);
    window.addEventListener('storage', handleJWTChange);

    return () => {
      window.removeEventListener('jwt-changed', handleJWTChange);
      window.removeEventListener('storage', handleJWTChange);
    };
  }, []);

  // Don't show button if no JWT
  if (!hasJWT) {
    return null;
  }

  return (
    <>
      {/* Sign Out Button - Fixed bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleSignOut}
          variant="outline"
          className="shadow-lg hover:shadow-xl transition-shadow"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>

      {/* Logout Confirmation Dialog */}
      <SignOutDialog />
    </>
  );
};

export default SignOut;

