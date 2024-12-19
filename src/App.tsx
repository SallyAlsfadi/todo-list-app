import React, { useState } from "react";
import Header from "./components/Header";
import DateDisplay from "./components/DateDisplay";
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";
import AddTaskButton from "./components/AddTaskbutton";
import "./index.css";

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, task: "Send wireframes", completed: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (taskName: string) => {
    const newTask: Task = {
      id: Date.now(),
      task: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
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
    <div className="w-full min-h-screen flex flex-col items-center bg-purple-50 p-6">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <Header />
        <DateDisplay />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleComplete={toggleCompleteTask}
        />
        <AddTaskButton onClick={() => setIsModalOpen(true)} />
        {isModalOpen && (
          <AddTaskModal
            onClose={() => setIsModalOpen(false)}
            onAddTask={addTask}
          />
        )}
      </div>
    </div>
  );
};

export default App;
