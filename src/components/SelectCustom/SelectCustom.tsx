"use client"
import React, { useState } from 'react'
type SelectProps = {
  labelText: string,
  list: string[]
}
const SelectCustom = ({
  labelText,
  list
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  }
    return (
      <select
        className="select w-full max-w-xs"
        value={selectedOption}
        onChange={handleChange}
      >
        <option disabled value="">{labelText}</option>
        {list.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    );

  
}
export default SelectCustom