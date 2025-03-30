// src/pages/Home.tsx
import React from "react";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="flex font-poppins justify-center items-center bg-[url('/desk.jpg')] bg-cover bg-center w-screen h-screen max-w-screen overflow-x-hidden p-4 rounded-b-4xl">
        <div className="flex flex-col">
          <div
            className={`transition-all duration-2000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-40 opacity-0"
            }`}
          >
            <div className="hidden md:block">
              <h1
                className="text-sm inline-flex
              animate-wiggle"
              >
                👋
              </h1>
              <h1 className="text-sm text-white font-bold inline ml-4">
                Hi, I'm
              </h1>
              <h1 className="text-sm text-blue-300 font-bold md:inline ml-4">
                Johnathan Aguilar
              </h1>
              <h2
                className={`max-w-lg text-2xl text-white transition-all duration-2000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"} `}
              >
                I'm a senior Computer Science student at California State
                University, Northridge, passionate about web development and
                crafting user-friendly applications.
              </h2>
            </div>
            <div className="md:hidden m-4">
              <h2
                className="text-3xl inline-flex
              animate-wiggle"
              >
                👋
              </h2>
              <h2 className="text-3xl text-white font-bold inline ml-4">
                Hi, I'm
              </h2>
              <h2 className="text-3xl text-blue-300 font-bold md:inline ml-4">
                Johnathan Aguilar
              </h2>
              <h3
                className={`max-w-lg text-xl text-white transition-all duration-2000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"} `}
              >
                I'm a senior Computer Science student at California State
                University, Northridge, passionate about web development and
                crafting user-friendly applications.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
