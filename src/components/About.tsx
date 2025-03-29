function About() {
  return (
    <>
      <div className="flex px-64 py-24 justify-between w-screen">
        <div className="max-w-2xl h-auto flex flex-col items-start justify-center">
          <h2 className="text-3xl font-bold text-start text-blue-300 mb-4">
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
        </div>
        <img
          className="size-125 rounded-2xl"
          src="profile_pic.jpg"
          alt="Profile Picture"
        />
      </div>
    </>
  );
}

export default About;
