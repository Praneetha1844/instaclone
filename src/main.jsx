import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ExplorePage from './ExplorePage';
import ReelsPage from './ReelsPage';
import Layout from './Layout';
import React, { useState } from 'react';

function Main() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />}>
          <Route index element={<App />} />  {/* Default route */}
          <Route path="explore" element={<ExplorePage />} />  {/* Explore route */}
          <Route path="reels" element={<ReelsPage />} />  {/* Reels route */}
        </Route>
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
