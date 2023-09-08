import React from 'react';

const Dropdown = ({ options, selected, setSelected }:any) => {
  const handleChange = (event:any) => {
    setSelected(event.target.value);
  };

  return (
    <select
    className="p-2 text-black w-full outline-none border-2 shadow-sm rounded-md transition-colors hover:bg-gray-300 focus:bg-white"
    value={selected}
    onChange={handleChange}
  >
    {options.map((option:any) => (
      <option className="text-black" key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
  
  );
};

export default Dropdown;












