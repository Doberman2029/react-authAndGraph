import React, { useState, useEffect } from "react";
import FormGroup from "./FormGroup";
import {
  addNewUserInLOcalStorage,
  authCheck,
} from "./loginInfo/loginAndPasswords";

export const CountStateContext = React.createContext();

export default function LoginPage({ log, logHandler, nameHandler, userName }) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [logError, setLogError] = useState(false);

  const registrationHandler = (name, pass) => {
    addNewUserInLOcalStorage(name, pass);

    logInHandler();

    clearInputs();
  };

  useEffect(() => {
    if (logError) {
      setTimeout(() => setLogError(false), 3500);
    }
  }, [logError]);

  const clearInputs = () => {
    setName("");
    setPass("");
  };

  const checkInputsForValue = () => {
    if (name.length > 0 && pass.length > 0) {
      return false;
    }
    return true;
  };

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };
  const passInputHandler = (e) => {
    setPass(e.target.value);
  };

  const logInHandler = () => {
    let logIn = authCheck(name, pass);

    if (logIn) {
      logHandler();
      nameHandler(name);
      clearInputs();
    } else {
      setLogError(true);
    }
  };

  if (log) {
    return <h2 className="text-center pt-2">Вы уже вошли, {userName}!</h2>;
  }

  return (
    <>
      {logError ? (
        <div className="alert alert-danger" role="alert">
          <p className="text-center mb-0">
            Имя или пароль введены не правильно, попробуйте снова
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="login">
        <FormGroup
          value={name}
          placeholder="Имя"
          id="nameLabel"
          handler={nameInputHandler}
        />
        <FormGroup
          type="password"
          value={pass}
          placeholder="Пароль"
          id="passLabel"
          handler={passInputHandler}
        />
        <button
          type="submit"
          className="btn btn-primary login-btn"
          onClick={logInHandler}
          disabled={checkInputsForValue()}
        >
          Войти
        </button>
        <button
          type="submit"
          className="btn btn-primary login-btn"
          onClick={() => registrationHandler(name, pass)}
          disabled={checkInputsForValue()}
        >
          Зарегестрироваться
        </button>
      </div>
    </>
  );
}
