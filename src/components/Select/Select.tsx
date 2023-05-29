import React from 'react'

export const Select = ({
  labelText,
  list
}) => {
  return (
    <select className="select w-full max-w-xs">
      <option disabled selected>{labelText}</option>
      {
        list.map(item =>
        (
          <option value={item}>{item}</option>
        ))
      }
    </select>
  )
}
