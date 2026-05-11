// src/pages/Home.tsx
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import { textAccentColor } from "../assets/accentColor";

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
                  I am an incoming first-year M.S. in Computer Science student
                  at UMass Amherst, with a concentration in Data Science, and a
                  current NASA JPL intern. My research interests focus on
                  multimodal foundation models, computer vision, embodied AI,
                  agentic AI, and applied machine learning systems. I am
                  especially interested in problems that connect perception,
                  reasoning, and real-world deployment.
                  <br />
                  <br />
                  My recent work spans applied AI research in smart
                  manufacturing, remote sensing, and computer vision. At CSUN, I
                  have worked on projects involving vision-language models for
                  industrial waste detection, OCR-to-knowledge-graph pipelines
                  for facility analytics, multimodal retrieval-augmented
                  generation, agentic AI assistants, and digital twin systems
                  for safer and more efficient material recovery facilities. I
                  have also conducted GIS and remote sensing research using
                  satellite data to study environmental patterns across marine
                  protected areas.
                  <br />
                  <br />
                  More broadly, I enjoy building AI systems that are not only
                  technically strong, but also practical, reliable, and useful
                  in real-world settings. I am motivated by research that
                  bridges machine learning, perception, reasoning, and
                  deployment, and I hope to contribute to AI systems that can
                  reason across modalities and support meaningful
                  decision-making in complex environments.
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
                  <h2 className="text-3xl text-white font-bold">Hi, I'm</h2>
                  <h2 className={`text-3xl ${textAccentColor} font-bold`}>
                    Johnathan Aguilar
                  </h2>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={300} translateBefore="translate-x-1/2">
                <p className={"max-w-lg text-lg text-white mt-4 mb-4"}>
                  I am an incoming first-year M.S. in Computer Science student
                  at UMass Amherst, with a concentration in Data Science, and a
                  current NASA JPL intern. My research interests focus on
                  multimodal foundation models, computer vision, embodied AI,
                  agentic AI, and applied machine learning systems. I am
                  especially interested in problems that connect perception,
                  reasoning, and real-world deployment.
                  <br />
                  <br />
                  My recent work spans applied AI research in smart
                  manufacturing, remote sensing, and computer vision. At CSUN, I
                  have worked on projects involving vision-language models for
                  industrial waste detection, OCR-to-knowledge-graph pipelines
                  for facility analytics, multimodal retrieval-augmented
                  generation, agentic AI assistants, and digital twin systems
                  for safer and more efficient material recovery facilities. I
                  have also conducted GIS and remote sensing research using
                  satellite data to study environmental patterns across marine
                  protected areas.
                  <br />
                  <br />
                  More broadly, I enjoy building AI systems that are not only
                  technically strong, but also practical, reliable, and useful
                  in real-world settings. I am motivated by research that
                  bridges machine learning, perception, reasoning, and
                  deployment, and I hope to contribute to AI systems that can
                  reason across modalities and support meaningful
                  decision-making in complex environments.
                </p>
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
