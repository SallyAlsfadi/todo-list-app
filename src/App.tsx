import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Daily meeting with team", completed: false },
    { id: "2", title: "Check emails", completed: true },
    { id: "3", title: "Lunch with Emma", completed: false },
  ]);
  const toggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "20px", flex: 1 }}>
        <h1>Welcome to the To-Do List App</h1>
        <TaskList tasks={tasks} onToggleComplete={toggleComplete} />
      </main>
    </div>
  );
};

export default App;
