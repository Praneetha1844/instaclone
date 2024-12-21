import React, { useRef } from 'react';

function ScrollableImageDiv() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full flex items-center">
      {/* Left Icon */}
      <button
        className="absolute left-0 z-10 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
        onClick={scrollLeft}
      >
        <img src="/left.png" alt="Scroll Left" className="h-4 w-4" />
      </button>

      {/* Scrollable Image Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll space-x-4 px-8 scrollbar-hide"
      >
        {/* Images and Usernames */}
        {[...Array(10).keys()].map((i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <img
              src={`https://via.placeholder.com/100?text=${i + 1}`}
              alt={`Profile ${i + 1}`}
              className="h-[60px] w-[60px] rounded-full border border-gray-300"
            />
            <span className="text-xs text-gray-500">
              Username{i + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Right Icon */}
      <button
        className="absolute right-0 z-10 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
        onClick={scrollRight}
      >
        <img src="/right.png" alt="Scroll Right" className="h-4 w-4" />
      </button>
    </div>
  );
}

export default ScrollableImageDiv;
