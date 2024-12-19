import React from "react";

const DateDisplay: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.date}>16th December 2024</h2>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    margin: "20px 0",
  },
  date: {
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default DateDisplay;
