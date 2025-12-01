// SidebarPage.jsx
import React from 'react';
import Sidebar from './Sidebar';

const SidebarPage = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content-area">
        {/* Your main content if needed, or leave empty */}
      </div>
    </div>
  );
};

export default SidebarPage;
