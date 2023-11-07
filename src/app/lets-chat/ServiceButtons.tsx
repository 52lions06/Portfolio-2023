import React from "react";

interface Props {
  setSelectedButton: (button: string) => void;
}

const ServiceButtons: React.FC<Props> = ({ setSelectedButton }) => {
  return (
    <>
      <button onClick={() => setSelectedButton("Make")}>Make</button>
      <button onClick={() => setSelectedButton("Markup")}>Markup</button>
      <button onClick={() => setSelectedButton("Manage")}>Manage</button>
    </>
  );
};

export default ServiceButtons;
