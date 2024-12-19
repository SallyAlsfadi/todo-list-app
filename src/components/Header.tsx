import React from "react";

const Header: React.FC = () => {
  return (
    <div style={styles.container}>
      <button style={styles.button}>Monthly</button>
      <button style={{ ...styles.button, ...styles.active }}>Daily</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  button: {
    background: "#f0f0f0",
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  active: {
    background: "#619BFC",
    color: "white",
  },
};
export default Header;
