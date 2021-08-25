import React from 'react';

import styles from './styles.module.scss';

const Hint = (props) => {
  const { show, children, warning } = props;
  const customClass = warning && "hint--warning";
  if (show) return <span className={`${styles.hint, styles[customClass]}`}>{children}</span>;
  return null;
}

export default Hint;
