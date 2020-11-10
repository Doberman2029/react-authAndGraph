import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function HeaderLog({ log, logOut }) {
  if (log) {
    return (
      <Button className="d-block m-2" onClick={logOut}>
        Выйти
      </Button>
    );
  }
  return (
    <Link to="/auth" className="btn btn-primary d-block m-2">
      Войти
    </Link>
  );
}
