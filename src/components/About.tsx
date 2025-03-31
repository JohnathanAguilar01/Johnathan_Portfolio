import ScrollAnimation from "./ScrollAnimation";

function About() {
  return (
    <>
      <div className="flex flex-col px-4 py-24 justify-between items-center w-screen xl:flex-row 2xl:px-64 xl:px-32 ">
        <ScrollAnimation
          className="max-w-2xl h-auto flex flex-col items-center text-center xl:text-start xl:items-start xl:justify-center mb-10 xl:mb-0 xl:mr-10"
          delay={200}
          translateBefore="-translate-x-1/2"
        >
          <h2 className="text-3xl font-bold text-start text-blue-300 mb-4 ">
            About Me
          </h2>
          <p className="text-lg font-bold">
            I'm a senior at California State University, Northridge, where I've
            built a strong foundation in computer science, from data structures
            and algorithms to software engineering and operating systems. My
            academic journey has been enriched by a minor in data science,
            equipping me with essential skills in probability, statistical
            modeling, and machine learning. Alongside my studies, I’ve explored
            practical applications through personal projects in web development
            and database implementation using technologies like React, Node.js,
            Express.js, MySQL, and AWS.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={200} translateBefore="translate-x-1/2">
          <img
            className="size-100 rounded-2xl md:size-125"
            src="profile_pic.jpg"
            alt="Profile Picture"
          />
        </ScrollAnimation>
      </div>
    </>
  );
}

export default About;
