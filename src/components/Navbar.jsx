import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center justify-between bg-gray-900 text-white rounded-full shadow-lg px-3 py-2 border border-gray-700 md:flex md:justify-center md:space-x-6 md:px-8 md:py-4">
        {/* Mobile: Name */}
        <div className="font-bold text-base md:hidden mr-20">Sinu Kumar</div>

        {/* Links for larger screens */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#education"
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Education
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#project"
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#technologies"
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Technologies
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/sinu-kumar-6788902a8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./src/images/linkdin.png"
              alt="linkedin"
              className="w-6 h-6 filter invert"
            />
          </a>
          <a
            href="https://github.com/SinuKumar069"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./src/images/github.png"
              alt="github"
              className="w-6 h-6 filter invert"
            />
          </a>
        </div>

        {/* Hamburger Icon for small screens */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-4 p-6 md:hidden">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <a
            href="#home"
            onClick={toggleMenu}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#education"
            onClick={toggleMenu}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            Education
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#project"
            onClick={toggleMenu}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#technologies"
            onClick={toggleMenu}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            Technologies
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/sinu-kumar-6788902a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SinuKumar069"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
