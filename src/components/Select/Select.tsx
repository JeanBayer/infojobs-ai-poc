import React from "react";
type SelectProps = {
  labelText: string;
  list: string[];
};
export const Select = ({ labelText, list }: SelectProps) => {
  return (
    <select className="select w-full max-w-xs">
      <option disabled selected>
        {labelText}
      </option>
      {list.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
