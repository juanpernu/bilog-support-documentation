import React from 'react';

import styles from './styles.module.scss';

const Hint = ({ show, children, warning }) => {
  const customClass = warning && styles["hint--warning"];
  if (show) return <span className={`${styles.hint, customClass}`}>{children}</span>;
  return null;
}

export default Hint;
