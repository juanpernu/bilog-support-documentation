import React from 'react';
import CardContent from './CardContent';

import styles from './styles.module.scss';

const Card = (props) => {
  const { children } = props;
  return (
    <div className={`${styles["card"]} ${styles["center-card__body"]}`}>
      <CardContent>
        {children}
      </CardContent>
    </div>
  )
}

export default Card;
