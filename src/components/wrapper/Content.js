import React from "react";

const Content = ({ children, className }) => {
  return (
    <div className={`max-w-[1400px] h-full mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Content;
