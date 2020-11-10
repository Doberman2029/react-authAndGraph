import React from "react";
import "./HeaderWrapper.css";

export default function HeaderWrapper({ children }) {
  return (
    <header className="d-flex justify-content-between align-items-center line">
      {children}
    </header>
  );
}
