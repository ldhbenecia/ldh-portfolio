import React from "react";

import DarkModeButton from "../Main/darkModeButton";

type HeaderProps = {
  mainRef: React.RefObject<HTMLDivElement>;
  introRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<HeaderProps> = ({ mainRef, introRef, projectsRef }) => {
  const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed w-full z-10 dark:bg-slate-800 text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-gray-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">DongHyeok Lim</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button
            onClick={() => handleClick(mainRef)}
            className="header-button mr-5 hover:text-gray-900 dark:hover:text-slate-50"
          >
            Main
          </button>
          <button
            onClick={() => handleClick(introRef)}
            className="header-button mr-5 hover:text-gray-900 dark:hover:text-slate-50"
          >
            Introduce
          </button>
          <button
            onClick={() => handleClick(projectsRef)}
            className="header-button mr-5 hover:text-gray-900 dark:hover:text-slate-50"
          >
            Projects
          </button>
        </nav>
        {/* 다크모드 버튼 작업 */}
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;
