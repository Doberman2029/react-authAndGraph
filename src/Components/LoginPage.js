import React, { useState, useEffect } from "react";

import Button from "./Button";
import FormGroup from "./FormGroup";
import LogInError from "./login pages/LogInError";
import LogInForm from "./login pages/LogInForm/LogInForm";
import {
  addNewUserInLOcalStorage,
  authCheck,
} from "./loginInfo/loginAndPasswords";

export const CountStateContext = React.createContext();

export default function LoginPage({ logHandler, nameHandler }) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [logError, setLogError] = useState(false);

  const registrationHandler = (name, pass) => {
    addNewUserInLOcalStorage(name, pass);

    logInHandler();

    clearInputs();
  };

  useEffect(() => {
    let timeout;
    if (logError) {
      timeout = setTimeout(() => setLogError(false), 3500);
    }
    return () => clearTimeout(timeout);
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

  return (
    <>
      {logError ? <LogInError /> : ""}
      <LogInForm>
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

        <Button
          type="submit"
          className="w-100 mb-2"
          onClick={logInHandler}
          disabled={checkInputsForValue()}
        >
          Войти
        </Button>
        <Button
          type="submit"
          className="w-100"
          onClick={() => registrationHandler(name, pass)}
          disabled={checkInputsForValue()}
        >
          Зарегестрироваться
        </Button>
      </LogInForm>
    </>
  );
}
