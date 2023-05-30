import React from "react";

type LabelProps = {
  labelText: string;
};
export const TextArea = ({ labelText }: LabelProps) => {
  return (
    <div className="form-control">
      <label className="input-group">
        <span>{labelText}</span>
        <textarea className="textarea w-96" placeholder="Bio"></textarea>
      </label>
    </div>
  );
};
