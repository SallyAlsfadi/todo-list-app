import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#2d3e50",
        color: "#fff",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h3>Sally Alsafadi</h3>
      <ul>
        <li>Templates</li>
        <li>Categories</li>
        <li>Analytics</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
