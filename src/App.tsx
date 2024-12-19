import React, { useState } from "react";
import Header from "./components/Header";
import DateDisplay from "./components/DateDisplay";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import AddButton from "./components/AddTaskbutton";

interface Task {
  id: number;
  task: string;
  time: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, task: "Reading Book", time: "12 pm", completed: false },
  ]);

  const addTask = () => {
    const newTaskName = prompt("Enter task name:");
    const newTaskTime = prompt("Enter task time (e.g., 2 pm):");

    if (newTaskName && newTaskTime) {
      const newTask = {
        id: Date.now(),
        task: newTaskName,
        time: newTaskTime,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  const toggleCompleteTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.appContainer}>
      <Header />

      <DateDisplay />

      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleCompleteTask}
      />
      <AddButton onClick={addTask} />
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    width: "360px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
};
export default App;
