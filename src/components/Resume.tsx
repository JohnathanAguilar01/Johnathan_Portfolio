import { AiOutlineDownload } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const Resume = () => {
  // Function to handle download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your PDF in the public folder
    link.download = "Johnathan_Aguilar_Resume.pdf"; // File name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col px-4 py-24 justify-between items-center w-screen xl:flex-row 2xl:px-200 xl:px-32 ">
      <ul className="flex flex-col items-start">
        <ScrollAnimation delay={200} translateBefore="-translate-x-1/2">
          <h2 className="text-3xl font-bold text-start text-blue-300 mb-4 ">
            Contact
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={250} translateBefore="-translate-x-1/2">
          <a href="mailto:johnathangaguilar@gmail.com">
            <li className="flex justify-center items-center">
              <MdEmail size={40} />
              <div className="m-2">
                <h3 className=" text-lg font-bold leading-6 text-primary-text">
                  Email
                </h3>
                <p>johnathangaguilar@gmail.com</p>
              </div>
            </li>
          </a>
        </ScrollAnimation>
        <ScrollAnimation delay={300} translateBefore="-translate-x-1/2">
          <a href="https://github.com/JohnathanAguilar01">
            <li className="flex justify-center items-center">
              <FaGithub size={40} />
              <div className="m-2">
                <h3 className=" text-lg font-bold leading-6 text-primary-text">
                  GitHub
                </h3>
                <p>github.com/JohnathanAguilar01</p>
              </div>
            </li>
          </a>
        </ScrollAnimation>
        <ScrollAnimation delay={350} translateBefore="-translate-x-1/2">
          <a href="https://www.linkedin.com/in/johnathangaguilar/">
            <li className="flex justify-center items-center">
              <FaLinkedin size={40} />
              <div className="m-2">
                <h3 className=" text-lg font-bold leading-6 text-primary-text">
                  LinkedIn
                </h3>
                <p>linkedin.com/in/johnathangaguilar/</p>
              </div>
            </li>
          </a>
        </ScrollAnimation>
      </ul>
      <ScrollAnimation delay={300} translateBefore="translate-x-1/2">
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-300 shadow-xl font-bold rounded-lg hover:brightness-75 hover:scale-125 transition delay-150 duration-300 ease-in-out my-10">
          <AiOutlineDownload className="size-6" />
          Resume
        </button>
      </ScrollAnimation>
    </div>
  );
};

export default Resume;
