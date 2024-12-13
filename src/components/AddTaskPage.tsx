import React, { useState } from "react";
import styles from "./AddTaskPage.module.css";

const AddTaskPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSave = () => {
    if (title.trim()) {
      alert(`Task Saved: ${title}, Date: ${date}`);
    } else {
      alert("Task title cannot be empty!");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Create a New Task</h1>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.options}>
        <label>
          <span>Date</span>
          <input
            type="date"
            className={styles.dateInput}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.actions}>
        <button className={styles.saveButton} onClick={handleSave}>
          Save
        </button>
        <button
          className={styles.cancelButton}
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTaskPage;
