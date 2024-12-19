import React from "react";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button style={styles.addButton} onClick={onClick}>
      +
    </button>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  addButton: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#619BFC",
    color: "white",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
  },
};

export default AddButton;
