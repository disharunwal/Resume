function About() {
  return (
    <section
      name="About"
      className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20 py-10 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white ">
            About <span className="text-[#800020]">Me</span>
          </h1>
          <div className="w-20 h-1 bg-[#800020] mb-6"></div>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8 ">
            Hello, I'm Disha Runwal, a MERN stack developer with a strong foundation in computer science. I specialize in building full-stack web applications that combine robust functionality with elegant user experiences.
            I build scalable web applications that solve real-world problems while delivering exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-[#800020]">
                Education & Training
              </h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>
                    <strong>B.Tech (CSE)</strong> - Walchand Institute of Technology, Solapur<br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">9.32 CGPA | 2021-2025</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>
                    <strong>12th</strong> - Tungal PU Science College<br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">88% | 2019-2021</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>
                    <strong>10th</strong> - BLDE CBSE School<br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">90% | 2018-2019</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-[#800020]">
                Internship
              </h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>
                    <strong>Frontend Development</strong> - Technohack<br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">2 months</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>
                    <strong>Full Stack Development</strong> - Octanet<br />
                    <span className="text-sm text-gray-500 dark:text-gray-400">4 months</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-[#800020]">
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {['JAVA', 'C', 'CPP', 'HTML', 'CSS', 'JavaScript', 'React', 
                  'Bootstrap', 'Tailwind', 'MySQL', 'Express.js', 'Node.js', 
                  'MongoDB'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-[#800020]/10 text-[#800020] dark:bg-[#800020]/20 dark:text-white rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Excellent problem-solving skills. Effective communicator and collaborator.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-[#800020]">
                Achievements & Awards
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Winner of G20 PPT Presentation</strong> - Walchand Institute of Technology (2022-2023)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#800020]">
            Mission Statement
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            My mission is to leverage my skills and creativity to deliver innovative solutions 
            that exceed client expectations and contribute positively to the digital landscape. 
            I am committed to continuous learning and growth, always seeking new challenges 
            and opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;