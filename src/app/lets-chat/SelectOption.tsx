import React, { ChangeEvent } from "react";

interface Props {
  setSelectedOption: (option: string) => void;
}

const SelectOption: React.FC<Props> = ({ setSelectedOption }) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select onChange={handleSelectChange}>
      <option disabled selected>
        Select an option
      </option>
      <option>Potential Job</option>
      <option>Would you like my services</option>
      <option>Want to buy me a coffee</option>
    </select>
  );
};

export default SelectOption;
