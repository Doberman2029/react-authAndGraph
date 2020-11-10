import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <>
      <Link className="btn btn-primary m-2" to="/">
        Главная
      </Link>
      <Link className="btn btn-primary m-2" to="/graph">
        График
      </Link>
    </>
  );
}
