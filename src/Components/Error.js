import React from "react";

export default function Error({ children }) {
  return (
    <div className="alert alert-danger" role="alert">
      <p className="text-center mb-0">{children}</p>
    </div>
  );
}
