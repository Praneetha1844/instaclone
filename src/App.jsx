// App.jsx
import React, { useState } from 'react'; 
import ScrollableImageDiv from './components/scroll';
import ImagePost from './components/ImagePost';
import ProfileCard from './components/ProfileCard';
import './App.css';


function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="app-container flex ml-[300px]">
      

      {/* Main Content Section */}
      <div className="w-[700px] justify-center z-10 ">
        {/* Scrollable Image Section */}
      <div className="h-32 w-[700px] px-[42px] py-[25px]">
        <ScrollableImageDiv />
      </div>
        {/* Image Posts */}
        <div className="image-posts px-[120px]">
          <ImagePost
            profilePicture="/img1.png"
            profileName="user1"
            postImage="/img1.png"
            likesCount={100}
          />
          <ImagePost
            profilePicture="/img2.png"
            profileName="user2"
            postImage="/img2.png"
            likesCount={200}
          />
          <ImagePost
            profilePicture="/img3.png"
            profileName="user3"
            postImage="/img3.png"
            likesCount={300}
          />
          <ImagePost
            profilePicture="/img4.png"
            profileName="user4"
            postImage="/img4.png"
            likesCount={400}
          />
          <ImagePost
            profilePicture="/img5.png"
            profileName="user5"
            postImage="/img5.png"
            likesCount={500}
          />
        </div>

      </div>

        {/* Profile Cards */}
        <div className=" w-[370px]  ml-[20px] px-[25px] mt-[6px] ">
          <div className="py-[20px]">
          <ProfileCard
            profilePicture="/img1.png"
            profileName="User1"
            username="1"
          />
          <div className=" flex text-sm mt-[4px] mt-[10px] ">
           <div className=" text-gray-400 mr-[100px] mt-[5px]  font-bold ">Suggested for you </div>
           <div className=" text-xs ml-[20px] font-bold ">See All </div>
           </div>
          </div>
          <ProfileCard
            profilePicture="/img2.png"
            profileName="User2"
            username="2"
          />
          <ProfileCard
            profilePicture="/img3.png"
            profileName="User3"
            username="3"
          />
          <ProfileCard
            profilePicture="/img4.png"
            profileName="User4"
            username="4"
          />
           <ProfileCard
            profilePicture="/img5.png"
            profileName="User5"
            username="5"
          />
         <div className="mt-[70px] px-[9px] text-xs text-gray-400 ">About . Help . Press . API . Jobs . Privacy . Terms .</div>
         <div className="mt-[7px] px-[9px] text-xs text-gray-400">Locations . Laguage . Meta Verified</div>
        </div>
    </div>
  );
}

export default App;
