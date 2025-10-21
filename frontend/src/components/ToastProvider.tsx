import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Export toast function for use in other components
export { toast };

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // Force light theme for consistent styling
        toastClassName="!bg-white !text-slate-800 !border !border-slate-200 dark:!bg-slate-800 dark:!text-slate-200 dark:!border-slate-600"
        progressClassName="!bg-blue-500"
        closeButton={false}
        className="!z-50"
      />
    </>
  );
};

export default ToastProvider;
