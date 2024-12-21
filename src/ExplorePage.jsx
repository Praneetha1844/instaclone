// ExplorePage.jsx
import React from 'react';
import ProfileCard from './components/ProfileCard';

function ExplorePage() {
  return (
    <div className="w-full ml-[20.6667%] justify-center z-10">
      <div className="px-[120px] text-gray-500">
        <h2 className="text-xl font-semibold">Explore Page</h2>
        {/* Add the content for the Explore page */}
        {/* Example of suggested profiles */}
        <ProfileCard profilePicture="/img6.png" profileName="User6" />
        <ProfileCard profilePicture="/img7.png" profileName="User7" />
        <ProfileCard profilePicture="/img8.png" profileName="User8" />
      </div>
    </div>
  );
}

export default ExplorePage;
