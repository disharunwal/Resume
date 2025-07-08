import  { useState } from "react";
import html from "/html.png";
import css from "/css.jpg";
import java from "/java.png";
import javascript from "/javascript.png";
import reactjs from "/reactjs.png";
import express from "/express.png";
import mongodb from "/mongodb.jpg";

function Experience() {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const techStack = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: reactjs, name: "React.js" },
    { id: 6, logo: express, name: "Express.js" },
    { id: 7, logo: mongodb, name: "MongoDB" },
  ];

  const projectVideos = [
    {
      id: 1,
      title: "My Amazing Journey",
      url: "../../vdo.mp4", // Replace with your actual video path
      thumbnail: "../../thumbnail.jpg", // Add a thumbnail image path
      description: "A demonstration of my experience in Gemburg Company through video."
    },
  ];

  const openFullscreenVideo = (video) => {
    setFullscreenVideo(video);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when video is open
  };

  const closeFullscreenVideo = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section 
      id="experience"
      name="Experience"
      className="w-full py-20 bg-gradient-to-b from-gray-100 to-white relative"
    >
      {/* Fullscreen Video Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            onClick={closeFullscreenVideo}
            className="absolute top-4 right-4 text-white text-2xl z-50 hover:text-indigo-400 transition-colors"
            aria-label="Close video"
          >
            &times;
          </button>
          <div className="w-full max-w-6xl h-full max-h-[90vh] relative">
            <video 
              controls 
              autoPlay
              className="w-full h-full object-contain"
              src={fullscreenVideo.url}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">
                {fullscreenVideo.title}
              </h3>
              <p className="text-gray-300">
                {fullscreenVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            My <span className="text-indigo-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies I've worked with and project demonstrations
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {techStack.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-24 h-24 mb-4 rounded-full bg-white p-2 shadow-md flex items-center justify-center group-hover:bg-indigo-50 transition-colors duration-300">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Project Videos */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            My Journey Demonstrations
          </h3>
          <div className="grid grid-cols-1 gap-10">
            {projectVideos.map((video) => (
              <div 
                key={video.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openFullscreenVideo(video)}
              >
                {/* Video Thumbnail with Play Button */}
                <div className="relative pt-[56.25%] bg-black"> {/* 16:9 Aspect Ratio */}
                  {video.thumbnail ? (
                    <>
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-indigo-600 bg-opacity-80 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center">
                      <span className="text-white">Video Preview</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;