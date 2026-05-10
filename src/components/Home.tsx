// src/pages/Home.tsx
import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const Home: React.FC = () => {
  return (
    <>
      <div className="relative flex font-poppins justify-center items-center w-screen h-screen max-w-screen overflow-x-hidden p-4">
        <div className="absolute inset-0 bg-[url('/bg_image.jpg')] bg-cover bg-center opacity-20"></div>

        <div className="relative flex font-poppins justify-center items-center z-10">
          <ScrollAnimation delay={500} translateBefore="-translate-x-1/2">
            <img
              className="size-100 rounded-2xl md:size-125 object-cover"
              src="profile_pic.jpg"
              alt="Profile Picture"
            />
          </ScrollAnimation>
          <div className="flex flex-col ml-8">
            <div className="hidden md:block">
              <ScrollAnimation delay={500} translateBefore="translate-x-1/2">
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
              </ScrollAnimation>
              <ScrollAnimation delay={500} translateBefore="translate-y-1/2">
                <h2 className={"max-w-lg text-2xl text-white"}>
                  I'm a senior Computer Science student at California State
                  University, Northridge, passionate about web development and
                  crafting user-friendly applications.
                </h2>
              </ScrollAnimation>
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
              <ScrollAnimation delay={300} translateBefore="translate-y-1/2">
                <h3 className={"max-w-lg text-xl text-white"}>
                  I'm a senior Computer Science student at California State
                  University, Northridge, passionate about web development and
                  crafting user-friendly applications.
                </h3>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
