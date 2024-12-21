// App.jsx
import React, { useState } from 'react'; // Add useState here
import ScrollableImageDiv from './components/scroll';
import ImagePost from './components/ImagePost';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Example of useState usage

  return (
    <div>
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={() => setIsCollapsed(prev => !prev)} />
      <div className="w-3/6 ml-[20.6667%] justify-center z-10">
        <div className="h-32 w-full px-[42px] py-[25px]">
          <ScrollableImageDiv />
        </div>
        <div className="px-[120px]">
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
    </div>
  );
}

export default App;
