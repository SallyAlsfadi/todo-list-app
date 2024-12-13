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
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <li style={{ marginBottom: "10px", cursor: "pointer" }}>Templates</li>
        <li style={{ marginBottom: "10px", cursor: "pointer" }}>Categories</li>
        <li style={{ marginBottom: "10px", cursor: "pointer" }}>Analytics</li>
        <li style={{ marginBottom: "10px", cursor: "pointer" }}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
