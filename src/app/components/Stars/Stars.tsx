import React from "react";

const Stars = () => {
  return (
    <div className="stars">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 3}s`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
