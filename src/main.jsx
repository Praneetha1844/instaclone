import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ExplorePage from './ExplorePage';
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
          <Route index element={<App />} />  {/* Default route */}
          <Route path="explore" element={<ExplorePage />} />  {/* Explore route */}
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
