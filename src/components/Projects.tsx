import ScrollAnimation from "./ScrollAnimation";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-6 w-screen dark:bg-zinc-900 bg-zinc-100 rounded-4xl mt-8 bg-gradient-to-t from-blue-300/10 to-transparent">
      <ScrollAnimation delay={200} translateBefore="-translate-y-10">
        <h2 className="text-3xl font-bold text-start text-blue-300 mb-4 ">
          Projects
        </h2>
      </ScrollAnimation>
      <ScrollAnimation delay={200}>
        <img
          className="hidden dark:block w-1/2 object-cover mx-auto"
          src="comming_soon_white.webp"
          alt="Comming Soon dark"
        />
        <img
          className="dark:hidden w-1/2 object-cover mx-auto"
          src="comming_soon_not_white.webp"
          alt="Comming Soon light"
        />
      </ScrollAnimation>
    </div>
  );
}

export default Projects;
