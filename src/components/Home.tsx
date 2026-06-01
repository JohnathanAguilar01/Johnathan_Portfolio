// src/pages/Home.tsx
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import { textAccentColor } from "../assets/accentColor";
import introduction from "../assets/introduction";

const Home: React.FC = () => {
  return (
    <>
      <div className="relative flex font-poppins justify-center items-start md:items-center w-screen min-h-screen max-w-screen overflow-x-hidden p-4">
        <div className="absolute inset-0 bg-[url('/bg_image.jpg')] bg-cover bg-center opacity-10"></div>

        <div className="relative flex flex-col md:flex-row font-poppins justify-start md:justify-center items-center z-10 pt-20 md:pt-0">
          <ScrollAnimation delay={500} translateBefore="-translate-x-1/2">
            <img
              className="w-[200px] h-auto rounded-2xl md:w-[400px]"
              src="Johnathan_Aguilar_Photo.jpg"
              alt="Profile Picture"
            />
          </ScrollAnimation>
          <div className="flex flex-col mt-6 md:mt-0 md:ml-8">
            <div className="hidden md:block">
              <ScrollAnimation delay={500} translateBefore="-translate-y-40">
                {/*
                <h1
                  className="text-sm inline-flex
                  animate-wiggle"
                >
                  👋
                </h1>
                */}
                <h1 className="text-sm font-bold inline">Hi, I'm</h1>
                <h1
                  className={`text-sm ${textAccentColor} font-bold md:inline ml-4`}
                >
                  Johnathan Aguilar
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delay={500} translateBefore="translate-x-1/2">
                <p className={"max-w-5xl text-lg font-bold mt-4 mb-4"}>
                  {introduction}
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={500} translateBefore="translate-y-40">
                <div className="flex gap-4">
                  <a href="mailto:johnathangaguilar@gmail.com">
                    <MdEmail size={40} />
                  </a>
                  <a href="https://github.com/JohnathanAguilar01">
                    <FaGithub size={40} />
                  </a>
                  <a href="https://www.linkedin.com/in/johnathangaguilar/">
                    <FaLinkedin size={40} />
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            <div className="md:hidden m-4 text-left">
              <ScrollAnimation delay={500} translateBefore="-translate-x-1/2">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold">Hi, I'm</h2>
                  <h2 className={`text-3xl ${textAccentColor} font-bold`}>
                    Johnathan Aguilar
                  </h2>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={300} translateBefore="translate-x-1/2">
                <p className={"max-w-lg text-lg mt-4 mb-4"}>{introduction}</p>
              </ScrollAnimation>
              <ScrollAnimation delay={300} translateBefore="translate-y-1/2">
                <div className="flex gap-4">
                  <a href="mailto:johnathangaguilar@gmail.com">
                    <MdEmail size={40} />
                  </a>
                  <a href="https://github.com/JohnathanAguilar01">
                    <FaGithub size={40} />
                  </a>
                  <a href="https://www.linkedin.com/in/johnathangaguilar/">
                    <FaLinkedin size={40} />
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
