import React from "react";

const DateDisplay: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return <p className="text-gray-500 mt-1">{today}</p>;
};

export default DateDisplay;
