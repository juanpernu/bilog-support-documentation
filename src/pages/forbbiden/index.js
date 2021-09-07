import React from "react";
import Logo from "../../components/Logo";

import styles from "./styles.module.scss";

function Forbbiden() {
  return (
    <section className={styles["forbbiden-view"]}>
      <div className={styles["wrap"]}>
        <Logo />
        <div className={styles["content"]}>
          <h2 className={styles["content-title"]}>Ups! Pareciera que no tenés permisos.</h2>
          <p className={styles["content-text"]}>
            Por favor, ponete en contacto con el equipo de desarrollo web para solicitarlos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Forbbiden;
