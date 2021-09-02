import React, { useState } from "react";
import styles from "./styles.module.scss";

import Logo from "../components/Logo";
import Card from "../components/Card";
import TextField from "../components/Textfield";
import Hint from "../components/Hint";
import Button from "../components/Button";

import { login } from "../utils";

function Index() {
  const [loginData, setLoginData] = useState({});
  const loginHandler = (e) => {
    e.preventDefault();
    const { success, user } = login(loginData);
    if (success) {
      sessionStorage.setItem("userData", JSON.stringify(user));
      return (window.location = "/home");
    }

    return (window.location = "/forbbiden");
  };

  const onChangeHandler = (type) => (e) => {
    setLoginData({
      ...loginData,
      [type]: e.target.value,
    });
  };

  return (
    <form className={styles["login-view"]}>
      <div className={styles["wrap"]}>
        <Logo />
        <Card>
          <p className={styles["text"]}>
            ¡Hola! Ingresá tu usuario y contraseña para continuar
          </p>
          <TextField placeholder="Usuario" onChange={onChangeHandler("user")} />
          <TextField
            password
            placeholder="Contraseña"
            onChange={onChangeHandler("pass")}
          />
          <Hint warning>
            Usuario o contraseña incorrecto, por favor volvé a intentarlo.
          </Hint>
          <Button fullWidth onClick={loginHandler}>
            Continuar
          </Button>
        </Card>
      </div>
    </form>
  );
}

export default Index;
