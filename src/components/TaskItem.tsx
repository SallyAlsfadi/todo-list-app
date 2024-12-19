import React from "react";
import { FiTrash2 } from "react-icons/fi";

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDeleteTask,
  onToggleComplete,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-3 mb-2 rounded-lg ${
        task.completed ? "bg-purple-100 line-through text-gray-500" : "bg-white"
      } border`}
    >
      <div className="flex items-center">
        <input
          type="radio"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="mr-3"
        />
        <span>{task.task}</span>
      </div>
      <button onClick={() => onDeleteTask(task.id)}>
        <FiTrash2 className="text-purple-500 hover:text-purple-700" />
      </button>
    </div>
  );
};

export default TaskItem;
