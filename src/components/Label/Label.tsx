import React, { useState } from 'react'

export const Label = ({
  labelText
}) => {
  const [valor, setValor] = useState('')

  return (
    <div className="form-control">
      <label className="input-group">
        <span>{labelText}</span>
        <input
          type="text"
          onChange={(e) => setValor(e.target.value)}
          value={valor}
          placeholder="..."
          className="input input-bordered"
        />

      </label>
    </div>
  )
}
