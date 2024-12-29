// Sidebar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Sidebar({ isCollapsed, toggleSidebar }) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        console.log('Navigating to /explore'); // Check if this is printed in the console
        navigate('/explore'); 
      }; 
    return (
        <div className="relative">
            {/* Sidebar */}
            <div
                className={`fixed ${isCollapsed ? 'w-[72px]' : 'w-1/6'
                    } justify-center border-r  border-grey transition-all duration-300 z-10 `}
            >
                <img
                    src={isCollapsed ? "/logo.png" : "/Instagram_logo.svg.png"}
                    alt="Instagram Logo"
                    className={`h-10 mt-8 ${isCollapsed ? 'h-[20px] ml-7' : 'ml-5 mr-20'}`}
                />
                <div
                    className={`space-y-1.5 border border-white h-[460px] mt-7 mb-10 ${isCollapsed ? 'items-center' : ''
                        }`}
                >
                    <div
                        className={`m-2 flex py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : ''
                            }`}
                    >
                        <img src="/home.png" alt="Home" className="h-6 w-6 ml-3 mr-4" />
                        {!isCollapsed && <span>Home</span>}
                    </div>

                    <button
                        className={`m-2 flex w-full py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : 'items-center'
                            }`}
                        onClick={toggleSidebar}
                    >
                        <img
                            src="/search-interface-symbol.png"
                            alt="Search"
                            className="h-6 w-6 ml-3 mr-4"
                        />
                        {!isCollapsed && <span>Search</span>}
                    </button>



                    {/* Other Sidebar Items */}
                    <button
                        className={`m-2 flex w-full py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : 'items-center'
                            }`}
                        onClick={handleNavigate}
                    >
                        <img
                            src="/compass.png"
                            alt="Compass"
                            className="h-6 w-6 ml-3 mr-4"
                        />
                        {!isCollapsed && <span>Explore</span>}
                    </button>

                    <div
                        className={`m-2 flex py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : ''
                            }`}
                    >
                        <img src="/image.png" alt="Reels" className="h-6 w-6 ml-3 mr-4" />
                        {!isCollapsed && <span>Reels</span>}
                    </div>

                    <div
                        className={`m-2 flex py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : ''
                            }`}
                    >
                        <img src="/mess.png" alt="Messages" className="h-6 w-6 ml-3 mr-4" />
                        {!isCollapsed && <span>Messages</span>}
                    </div>

                    <div
                        className={`m-2 flex py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : ''
                            }`}
                    >
                        <img src="/heart.png" alt="Notifications" className="h-6 w-6 ml-3 mr-4" />
                        {!isCollapsed && <span>Notifications</span>}
                    </div>

                    <div
                        className={`m-2 flex py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : ''
                            }`}
                    >
                        <img src="/create.png" alt="Create" className="h-6 w-6 ml-3 mr-4" />
                        {!isCollapsed && <span>Create</span>}
                    </div>

                    <div
                        className={`m-2 flex py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg mb-8 ${isCollapsed ? 'justify-center' : ''
                            }`}
                    >
                        <img src="/profile.jpg" alt="Profile" className="h-6 w-6 ml-3 mr-4 rounded-full" />
                        {!isCollapsed && <span>Profile</span>}
                    </div>

                    <div
                        className={`m-2 flex py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : ''
                            }`}
                    >
                        <img src="/profile.jpg" alt="AI Studio" className="h-6 w-6 ml-3 mr-4 rounded-full" />
                        {!isCollapsed && <span>AI Studio</span>}
                    </div>

                    <div
                        className={`m-2 flex py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : ''
                            }`}
                    >
                        <img src="/threads.png" alt="Threads" className="h-6 w-6 ml-3 mr-4" />
                        {!isCollapsed && <span>Threads</span>}
                    </div>

                    <div
                        className={`m-2 flex py-3 border border-white cursor-pointer hover:bg-gray-100 rounded-lg ${isCollapsed ? 'justify-center' : ''
                            }`}
                    >
                        <img src="/more.png" alt="More" className="h-6 w-6 ml-3 mr-4" />
                        {!isCollapsed && <span>More</span>}
                    </div>
                </div>
            </div>

            {/* Conditionally render div beside the sidebar when isCollapsed is true */}
            {isCollapsed && (
                <div
                    className="fixed  left-[72px] h-[1000px] p-4 border border-grey w-[400px] shadow-lg z-20 bg-white rounded-lg "        >
                    {/* Your content here */}
                    <p className="ml-[10px] py-[8px] mb-[20px] font-bold text-2xl ">Search</p>
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 rounded-lg w-[370px] mb-[30px] p-2"></input>
                    <p className="ml-[8px] py-[8px] mb-[20px] font-bold ">Recent</p>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
