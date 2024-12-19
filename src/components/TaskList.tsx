import React from "react";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: {
    completed: boolean;
    id: number;
    task: string;
    time: string;
  }[];
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDeleteTask,
  onToggleComplete,
}) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((item) => (
          <TaskItem
            key={item.id}
            task={item.task}
            time={item.time}
            completed={item.completed}
            onDelete={() => onDeleteTask(item.id)}
            onToggle={() => onToggleComplete(item.id)}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
