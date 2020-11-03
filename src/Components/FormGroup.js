import React from "react";

export default function FormGroup({ value, placeholder, id, handler }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{placeholder}</label>
      <input
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handler(e)}
      />
    </div>
  );
}
