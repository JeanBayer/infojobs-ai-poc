import React, { useState } from 'react'
type  LabelProps = {
  labelText: string
}
export const Label = ({
  labelText
}: LabelProps) => {
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
