import React from "react";

interface TaskItemProps {
  task: string;
  time: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  time,
  completed,
  onDelete,
  onToggle,
}) => {
  return (
    <div style={styles.container}>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span
        style={{
          ...styles.text,
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {task}
      </span>
      <span>{time}</span>
      <button style={styles.deleteButton} onClick={onDelete}>
        ❌
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  text: {
    flex: 1,
    marginLeft: "10px",
  },
  deleteButton: {
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px",
  },
};

export default TaskItem;
