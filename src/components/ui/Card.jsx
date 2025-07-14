import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full bg-white  p-4 shadow-md rounded-xl">{children}</div>
  );
};

export default Card;
