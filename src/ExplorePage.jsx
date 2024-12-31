// ExplorePage.jsx
import React from 'react';

function ExplorePage() {
  const videoSources = [
    { src: "/Video1.mp4", poster: "/img2.png", shape: "vertical" },
    { src: "/Video2.mp4", poster: "/img1.png", shape: "vertical" },
    { src: "/Video2.mp4", poster: "/img3.png", shape: "vertical" },
    { src: "/Video4.mp4", poster: "/img4.png", shape: "square" }, // Corrected spelling
    { src: "/Video5.mp4", poster: "/img5.png", shape: "square" },
    { src: "/Video1.mp4", poster: "/img6.png", shape: "square" }, // Corrected spelling
    { src: "/Video1.mp4", poster: "/img2.png", shape: "vertical" },
    { src: "/Video2.mp4", poster: "/img1.png", shape: "vertical" },
    { src: "/Video2.mp4", poster: "/img3.png", shape: "vertical" },
    { src: "/Video4.mp4", poster: "/img4.png", shape: "square" },
    { src: "/Video5.mp4", poster: "/img5.png", shape: "square" },
    { src: "/Video1.mp4", poster: "/img6.png", shape: "square" },
  ];

  return (
    <div className="ml-[20.6667%] justify-center z-10">
      <div className="border border-black p-4">
        <h2 className="text-center text-xl font-bold mb-4">Explore Videos</h2>
        <div className="grid grid-cols-3 gap-4">
          {videoSources.map((video, index) => (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-lg shadow-lg ${
                video.shape === "square" ? "aspect-w-1 aspect-h-1" : "aspect-w-2 aspect-h-4"
              }`}
              style={{ zIndex: 1 }}
            >
              <video
                src={video.src}
                poster={video.poster}
                muted
                loop
                tabIndex="0"
                className="relative w-full h-full object-cover"
                style={{ zIndex: 2 }}
                onMouseEnter={(e) => {
                  console.log("Playing video");
                  e.target.play();
                }}
                onMouseLeave={(e) => {
                  console.log("Pausing video");
                  e.target.pause();
                }}
              />
              {/* Optional Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
