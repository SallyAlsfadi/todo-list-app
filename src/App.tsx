import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import { Task } from "./types/Task";
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
      completed: false,
    };
    setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);
  };

  const toggleComplete = (id: string) => {
    setTasks((prevTasks: Task[]) =>
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
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onToggleComplete={toggleComplete} />
      </main>
    </div>
  );
};

export default App;
