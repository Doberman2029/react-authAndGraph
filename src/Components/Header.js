import React from "react";
import { Link } from "react-router-dom";

export default function Header({ log, logOut }) {
  return (
    <header className="d-flex justify-content-between align-items-center line">
      <nav className="nav">
        <Link className="btn btn-primary" to="/">
          Главная
        </Link>
        <Link className="btn btn-primary" to="/graph">
          График
        </Link>
      </nav>
      {log ? (
        <button className="btn btn-primary d-block" onClick={logOut}>
          Выйти
        </button>
      ) : (
        <Link to="/auth" className="btn btn-primary d-block">
          Войти
        </Link>
      )}
    </header>
  );
}
