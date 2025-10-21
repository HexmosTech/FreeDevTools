import React from 'react';

interface CreditsButtonProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const CreditsButton: React.FC<CreditsButtonProps> = ({
  href,
  className = 'inline-flex items-center px-4 py-2 text-sm font-medium dark:text-slate-600 text-slate-300 dark:bg-slate-50 bg-slate-800 rounded-lg dark:hover:bg-slate-100 hover:bg-slate-700 transition-colors',
  children = 'Credits & Acknowledgments',
}) => {
  return (
    <a href={href} className={className}>
      🙏 &nbsp;
      {children}
    </a>
  );
};

export default CreditsButton;
