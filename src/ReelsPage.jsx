import React from 'react';
import Reel from './components/reel';

function ReelsPage() {
  return (
    <div className="p-8 border border-white flex flex-col items-center justify-center px-[610px]  ">
      {/* Main content of ReelsPage */}
        <div className=" mb-4 rounded-lg overflow-hidden shadow-lg  ">
        <Reel
        video="/Video1.mp4"
        username="john_doe"
        likes="12.3K"
      />
        </div>
        <div className=" mb-4 rounded-lg overflow-hidden shadow-lg ">
        <Reel
        video="/Video2.mp4"
        username="doe_john"
        likes="12.3K"
      />
        </div>
        <div className=" mb-4 rounded-lg overflow-hidden shadow-lg ">
        <Reel
        video="/Video5.mp4"
        username="johny_doey"
        likes="12.3K"
      />
        </div>
    </div>
  );
}

export default ReelsPage;