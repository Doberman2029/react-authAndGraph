import React from "react";

import HeaderLog from "./header/HeaderLog";
import HeaderNav from "./header/HeaderNav";

export default function Header({ log, logOut }) {
  return (
    <header className="d-flex justify-content-between align-items-center line border-bottom">
      <nav className="nav">
        <HeaderNav />
      </nav>
      <HeaderLog log={log} logOut={logOut} />
    </header>
  );
}
