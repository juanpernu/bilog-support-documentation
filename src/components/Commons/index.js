import React from 'react';
import Card from "../Card";
import { Permits } from "../../data/permits";

import styles from './styles.module.scss';

const Commons = ({ permits }) => {
  const Item = ({ title, text, link, index }) =>
    <Card className={styles["version-card"]} key={index}>
      <div className={styles["card-content"]}>
        <h3 className={styles["title"]}>{title}</h3>
        <p className={styles["text"]}>{text}</p>
      </div>
      <a
        className={styles["version-link"]}
        href={link}
      >
        <p>MAS INFO</p>
      </a>
    </Card>

  return (
    <div className={styles["commons"]}>
      <div className={styles["commons-header"]}>
        <h2 className={styles["subtitle"]}>Explorá nuestras versiones</h2>
        <p className={styles["copy"]}>
          Descubrí nuestras cuatro versiones pensadas y diseñadas para que se
          ajusten a tu medida.
        </p>
      </div>
      <div className={styles["commons-container"]}>
        {permits.map((permit, i) => {
          const { title, text, link } = Permits[permit]
          return <Item title={title} text={text} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Commons;
