import ScrollAnimation from "./ScrollAnimation";

function Education() {
  return (
    <ScrollAnimation delay={200} translateBefore="translate-y-1/2">
      <div className="flex flex-col px-4 py-24 justify-between items-center w-screen xl:flex-row 2xl:px-64 xl:px-32 ">
        <img
          className="object-scale-down size-auto"
          src="csun.png"
          alt="Profile Picture"
        />
        <div className="max-w-2xl h-auto flex flex-col items-center text-center xl:text-start xl:items-start xl:justify-center mt-10 xl:mb-0 xl:ml-10">
          <h2 className="text-3xl font-bold text-start text-blue-300 mb-4">
            Education
          </h2>
          <p className="text-lg font-bold">
            Throughout my time at CSUN, I consistently demonstrated academic
            excellence, as evidenced by being named to the Dean's List every
            year. I pursued a rigorous course of study, majoring in Computer
            Science while also completing a minor in Data Science. This dual
            focus allowed me to develop a strong foundation in programming,
            software engineering, and algorithm design, complemented by a deep
            understanding of data analysis, statistical modeling, and machine
            learning techniques. My academic journey was defined by a commitment
            to excellence, both in the classroom and through hands-on projects,
            positioning me well for future challenges in the technology and data
            fields.{" "}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Education;
