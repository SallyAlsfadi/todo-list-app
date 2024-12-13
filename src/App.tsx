import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import AddTaskPage from "./components/AddTaskPage";
import styles from "./styles/App.module.css";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // State to store tasks
  const navigate = useNavigate();

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className={styles.header}>
                  <h1>What's up, Sally!</h1>
                </header>
                <TaskList
                  tasks={tasks}
                  onToggleComplete={toggleComplete}
                  onDeleteTask={deleteTask}
                />
                <button
                  className={styles.floatingButton}
                  onClick={() => navigate("/add-task")}
                >
                  +
                </button>
              </>
            }
          />

          <Route path="/add-task" element={<AddTaskPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
