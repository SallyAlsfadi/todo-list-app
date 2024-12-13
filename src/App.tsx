import React from "react";
import Sidebar from "./components/Sidebar";
const App: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "20px", flex: 1 }}>
        <h1>Welcome to the To-Do List App</h1>
      </main>
    </div>
  );
};

export default App;
