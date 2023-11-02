"use client";
import React from "react";

interface ResumeBtnProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const ResumeBtn = ({ onClick, className, text }: ResumeBtnProps) => {
  return (
    <>
      {/* Button for downloading the project manager resume */}
      <button onClick={onClick} className={className}>
        {text}
      </button>
    </>
  );
};

export default ResumeBtn;
