import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neon/10 shadow-lg backdrop-blur-lg">
      <div className="container mx-8 py-1 flex items-center justify-between">
        <a
          href="/freedevtools/t"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
        >
          <img src="https://hexmos.com/freedevtools/t/favicon.png" alt="Free DevTools Logo" className="w-8 h-8 flex-shrink-0" />
          {/* Text */}
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold text-neon dark:text-neon-light leading-tight">
              Free DevTools
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-tight">
              Essential tools for developers
            </p>
          </div>
        </a>

        {/* Theme Switcher */}
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
