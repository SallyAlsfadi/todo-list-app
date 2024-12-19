import React, { useState } from "react";

interface AddTaskModalProps {
  onClose: () => void;
  onAddTask: (taskName: string) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-purple-600 text-xl font-bold mb-4">New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full border p-2 rounded-lg mb-4"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
