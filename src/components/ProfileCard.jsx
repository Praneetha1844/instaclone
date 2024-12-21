import React from 'react';

function ProfileCard({ profilePicture, profileName, username }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 w-full w-[320px]">
      {/* Profile Picture, Name, and Username */}
      <div className="flex items-center space-x-2">
        <img
          src={profilePicture}
          alt="Profile"
          className="h-12 w-12 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{profileName}</span>
          {/* Username below the profile name */}
          <span className="text-sm text-gray-500">{`@${username}`}</span>
        </div>
      </div>

      {/* Follow Button */}
      <button className="py-2 text-blue-500 hover:text-black transition-colors duration-300 text-xs font-bold">
        Follow
      </button>
    </div>
  );
}

export default ProfileCard;
