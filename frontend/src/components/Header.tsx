import React from "react";
import ThemeSwitcher from "./theme/ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-2 md:px-6 pt-6">
        <header className="bg-neon/1 shadow-sm backdrop-blur-lg rounded-b-lg">
          <div className=" py-1 flex items-center justify-between">
            <a
              href="/freedevtools/t"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/freedevtools/t/freedevtool-logo.webp"
                alt="Free DevTools Logo"
                className="w-8 h-8 flex-shrink-0"
              />
              {/* Text */}
              <div className="flex flex-col">
                <p className="text-lg text-neon dark:text-neon-light leading-tight font-semibold">
                  Free DevTools
                </p>
                <p className="text-xs md:text-sm text-slate-800 dark:text-slate-400 leading-tight">
                  Essential tools for developers
                </p>
              </div>
            </a>

            {/* Theme Switcher - ensure it doesn't extend beyond banner edge */}
            <div className="flex-shrink-0">
              <ThemeSwitcher />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
