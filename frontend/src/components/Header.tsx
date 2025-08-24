import React from "react";
import ThemeSwitcher from "./theme/ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="dark:bg-neon/1 light:bg-white shadow-sm backdrop-blur-lg">
        <div className="px-2 md:px-6 lg:px-8 py-1 flex items-center justify-between">
          <a
            href="/freedevtools/t"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <img src="https://hexmos.com/freedevtools/t/favicon.png" alt="Free DevTools Logo" className="w-8 h-8 flex-shrink-0" />
            {/* Text */}
            <div className="flex flex-col">
              <h3 className="text-neon dark:text-neon-light leading-tight font-semibold">
                Free DevTools
              </h3>
              <p className="text-xs md:text-sm text-slate-800 dark:text-slate-400 leading-tight">
                Essential tools for developers
              </p>
            </div>
          </a>

          {/* Theme Switcher */}
          <div className="flex-shrink-0">
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
