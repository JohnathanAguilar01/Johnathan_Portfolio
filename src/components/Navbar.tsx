import { useState, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-center fixed top-0 left-0 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-zinc-900 bg-opacity-100 shadow-md h-12"
            : "bg-transparent text-white bg-opacity-0 h-16"
        }`}
      >
        <div className="flex w-7xl justify-between items-center font-bold">
          <h2 className="text-2xl text-blue-300">&lt;Johnathan Aguilar/&gt;</h2>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="fixed bottom-0 flex w-full justify-center">
        {!isScrolled && (
          <IoIosArrowDropdown className="size-10 m-3 animate-bounce text-white" />
        )}
      </div>
    </>
  );
}

export default Navbar;
