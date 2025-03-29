import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaWindows,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiLatex,
  SiExpress,
  SiJira,
  SiNeovim,
  SiQt,
} from "react-icons/si";

const skillsData = [
  {
    title: "Languages",
    skills: [
      { name: "C/C++", icon: <SiCplusplus size={40} /> },
      { name: "Java", icon: <FaJava size={40} /> },
      { name: "Python", icon: <FaPython size={40} /> },
      { name: "JavaScript", icon: <SiJavascript size={40} /> },
      { name: "SQL", icon: <SiMysql size={40} /> },
      { name: "HTML", icon: <FaHtml5 size={40} /> },
      { name: "CSS", icon: <FaCss3Alt size={40} /> },
      { name: "LaTeX", icon: <SiLatex size={40} /> },
    ],
  },
  {
    title: "Libraries/Frameworks/Runtimes",
    skills: [
      { name: "React", icon: <FaReact size={40} /> },
      { name: "Express.js", icon: <SiExpress size={40} /> },
      { name: "PyQt5", icon: <SiQt size={40} /> },
      { name: "Node.js", icon: <FaNodeJs size={40} /> },
    ],
  },
  {
    title: "Technologies/Systems",
    skills: [
      { name: "Linux", icon: <FaLinux size={40} /> },
      { name: "Windows", icon: <FaWindows size={40} /> },
    ],
  },
  {
    title: "Software/Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={40} /> },
      { name: "GitHub", icon: <FaGithub size={40} /> },
      { name: "JIRA", icon: <SiJira size={40} /> },
      { name: "Neovim", icon: <SiNeovim size={40} /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="py-12 px-6 sm:px-12 lg:px-24 dark:bg-zinc-900 bg-zinc-100 rounded-4xl mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="gap-6">
        {skillsData.map((category, index) => (
          <div key={index} className="m-4">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-2 w-20 h-20"
                >
                  {skill.icon}
                  <span className="mt-2 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
