import React from 'react';

function ExplorePage() {
  const videoSources = [
    { src: "/Video1.mp4", poster: "/img2.png", shape: "vertical" },
    { src: "/Video2.mp4", poster: "/img1.png", shape: "square" },
    { src: "/Video3.mp4", poster: "/img3.png", shape: "square" },
    { src: "/Video3.mp4", poster: "/img4.png", shape: "square" }, 
    { src: "/Video5.mp4", poster: "/img5.png", shape: "square" },
    { src: "/Video1.mp4", poster: "/img6.png", shape: "vertical" }, 
    { src: "/Video1.mp4", poster: "/img2.png", shape: "square" },
    { src: "/Video2.mp4", poster: "/img1.png", shape: "square" },
    { src: "/Video3.mp4", poster: "/img3.png", shape: "square" },
    { src: "/Video3.mp4", poster: "/img4.png", shape: "square" },
    { src: "/Video5.mp4", poster: "/img5.png", shape: "vertical" },
    { src: "/Video1.mp4", poster: "/img6.png", shape: "square" },
  ];

  return (
    <div className="ml-[20.6667%] justify-center">
      <div className="border border-white p-4">
       
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {videoSources.map((video, index) => (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${
                video.shape === "square" ? "w-[370px] h-[370px]" : "w-[370px] h-[760px] row-span-2"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
