import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { confirmSignOut } from '@/components/pages/pro/SignOut';

export const useSignOutDialog = () => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleConfirmSignOut = useCallback(async () => {
    setShowLogoutDialog(false);
    setCountdown(5);
    await confirmSignOut();
  }, []);

  useEffect(() => {
    let timer: any;
    if (showLogoutDialog && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev: number) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && showLogoutDialog) {
      handleConfirmSignOut();
    }
    return () => clearInterval(timer);
  }, [showLogoutDialog, countdown, handleConfirmSignOut]);

  const handleSignOut = () => {
    setShowLogoutDialog(true);
    setCountdown(5);
  };

  const handleCancel = () => {
    setShowLogoutDialog(false);
    setCountdown(5);
  };

  const SignOutDialog = () => {
    if (!showLogoutDialog || typeof window === 'undefined') return null;

    const dialogContent = (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
        <div className="bg-white dark:bg-slate-900 rounded-lg p-6 w-96 shadow-xl">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Sign Out Confirmation
            </h3>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            You will be signed out of <strong>all Hexmos apps</strong> in{' '}
            {countdown}...
          </p>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleConfirmSignOut}>Sign Out Now</Button>
          </div>
        </div>
      </div>
    );

    // Render to document body to escape any parent positioning constraints
    return createPortal(dialogContent, document.body);
  };

  return {
    handleSignOut,
    SignOutDialog,
  };
};

