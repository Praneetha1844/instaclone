// Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      {/* Main content */}
      <div className="flex-1 bg-white-100">
        <Outlet />
      </div>
   
    </div>
  );
};

export default Layout;