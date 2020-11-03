import React from "react";

export default function FormGroup({
  value,
  placeholder,
  id,
  handler,
  type = "text",
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{placeholder}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handler(e)}
      />
    </div>
  );
}
