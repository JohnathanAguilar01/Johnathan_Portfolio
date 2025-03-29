import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function FooterCentered() {
  const links = [
    { link: "#home", label: "Home" },
    { link: "#about", label: "About" },
    { link: "#skills", label: "Skills" },
    { link: "#education", label: "Education" },
    { link: "#projects", label: "Projects" },
    { link: "#resume", label: "Resume" },
  ];

  const items = links.map((link) => (
    <li>
      <a href={link.link}>{link.label}</a>
    </li>
  ));

  return (
    <>
      <footer className="mt-[120px] w-screen">
        <div
          className="
          flex justify-between items-center border-t border-t-[1px] h-32 m-10 w-auto"
        >
          <div className="flex space-x-4">
            <a
              href="https://github.com/JohnathanAguilar01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/johnathangaguilar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <ul className="hidden items-center space-x-4 md:flex">{items}</ul>
        </div>
      </footer>
    </>
  );
}
