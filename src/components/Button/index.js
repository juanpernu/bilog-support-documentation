import React from 'react';

import styles from './styles.module.scss';

const Button = ({ children, onClick, fullWidth }) => {
  const buttonFullWidth = fullWidth && styles["button--full_width"];

  return (
    <button aria-label={`Button ${children}`} onClick={onClick} className={`${styles["button"]} ${styles["button--filled"]} ${buttonFullWidth} ${styles["login-button"]}`}>
      <p>{children}</p>
    </button>
  )
}

export default Button;
