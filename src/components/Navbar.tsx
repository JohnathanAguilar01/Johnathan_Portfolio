import { useState, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Hamburger from "hamburger-react";
import { textAccentColor } from "../assets/accentColor";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const links = [
    { link: "#home", label: "Home" },
    { link: "#news", label: "News" },
    { link: "#education", label: "Education & Research" },
    { link: "#pubs", label: "Publications & Presentations" },
    { link: "#resume", label: "Resume" },
  ];

  const items = links.map((link) => (
    <li>
      <a href={link.link} onClick={() => setOpen(false)}>
        {link.label}
      </a>
    </li>
  ));

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
      <div className="fixed z-9000">
        <nav
          className={`flex justify-center top-0 left-0 w-screen transition-all duration-300 ${
            isScrolled
              ? "bg-white dark:bg-zinc-900 bg-opacity-100 shadow-md h-12"
              : "bg-transparent bg-opacity-0 h-16 backdrop-blur-md"
          }`}
        >
          <div className="flex w-7xl justify-between items-center font-bold p-6">
            <h2 className={`text-2xl ${textAccentColor}`}>
              &lt;Johnathan Aguilar/&gt;
            </h2>
            <ul className="hidden items-center space-x-4 md:flex">{items}</ul>
            <div className="block md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </nav>
        <div
          className={`sticky flex justify-center items-center top-0 w-screen md:hidden p-6 origin-top
          ${isOpen ? "scale-y-100 opacity-100 h-auto transition-all duration-500 ease-in-out" : "scale-y-0 opacity-0 h-0"}
          ${isScrolled ? "bg-white dark:bg-zinc-900 bg-opacity-100 shadow-md h-12" : "bg-transparent text-white bg-opacity-0 h-16 backdrop-blur-md"}
          `}
        >
          <ul className="text-center space-y-6 font-extrabold">{items}</ul>
        </div>

        <div className="fixed bottom-0 flex w-full justify-center">
          {!isScrolled && (
            <IoIosArrowDropdown className="size-10 m-3 animate-bounce text-white" />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
