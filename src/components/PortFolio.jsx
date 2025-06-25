

function PortFolio() {
  const projects = [
    {
      title: "Weather Application",
      description:
        "User can check humidity, weather, and temperature details of any city.",
      techStack: "HTML, CSS, JavaScript",
      link: "https://wethersearch.netlify.app",
    },
    {
      title: "Music App",
      description:
        "My music player consist of my own Music Album.",
      techStack: "HTML,CSS,Javascript",
      link: "https://playmus.netlify.app/",
    },
    {
      title: "Movie Review App",
      description:
        "User can add,delete,edit ratings and review .All the movies fetched through OMDB API",
      techStack: "React.js,Bootstrap",
      link: "",
    },
    {
      title: "Noble Giving",
      description:
        "As a member of the development team, I contributed to the design, development of Noble Giving's official website. My responsibilities included creating a responsive and visually appealing user interface, implementing key functionalities, and ensuring seamless user experience.",
      techStack: "Complete MERN ",
      link: "http://noblegiving.in/",
    },
    {
      title: "Cryptomous Funding App",
      description:
        "This is Funding Site for Cryptocurrency",
      techStack: "Complete MERN Stack",
      link: "https://cryptomus-n8rbqflil-disharunwals-projects.vercel.app/",
    },
    {
      title: "Gemburg Website",
      description:
        "This is Company's Official Website",
      techStack: "Complete MERN Stack",
      link: "https://gemburg.com/",
    }

  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center ">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
            >
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-500 mb-4">Tech Stack: {project.techStack}</p>
              <div className="flex justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Visit My Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
