import React from 'react'

export const TextArea = ({labelText}) => {
  return (
    <div className="form-control">
      <label className="input-group">
        <span>{labelText}</span>
        <textarea className="textarea w-96" placeholder="Bio"></textarea>
      </label>
    </div>
  )
}
