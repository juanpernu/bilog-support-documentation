import React from "react";
import Logo from "../components/Logo";
import Card from "../components/Card";
import TextField from "../components/Textfield";
import Hint from "../components/Hint";
import Button from "../components/Button";

import styles from "./styles.module.scss";

function Index() {
  return (
    <form className={styles["login-view"]}>
      <div className={styles["wrap"]}>
        <Logo />
        <Card>
          <p className={styles["text"]}>¡Hola! Ingresá tu usuario y contraseña para continuar</p>
          <TextField placeholder="Usuario" />
          <TextField type="password" placeholder="Contraseña" />
          <Hint warning>
            Usuario o contraseña incorrecto, por favor volvé a intentarlo.
          </Hint>
          <Button fullWidth>
            Continuar
          </Button>
        </Card>
      </div>
    </form>
  )
}

export default Index;
