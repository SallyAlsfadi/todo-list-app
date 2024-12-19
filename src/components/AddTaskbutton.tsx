import React from "react";

interface AddTaskButtonProps {
  onClick: () => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-purple-500 text-white p-3 mt-4 rounded-full shadow-lg w-full text-center hover:bg-purple-600"
      onClick={onClick}
    >
      + New Task
    </button>
  );
};

export default AddTaskButton;
