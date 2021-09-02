import React, { useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

const TextField = ({
  hint,
  password,
  onChange,
  placeholder,
  textValue,
  disabled,
  refTarget,
}) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const onChangeHandler = (evt) => onChange(evt);
  const valueChange = (evt) => setValue(evt.target.value);
  const isFocused = () => setFocused(!focused);
  const focusedClass = classNames(focused && "focused");

  return (
    <label onFocus={isFocused} onBlur={isFocused} ref={refTarget}>
      <div className={styles["textfield-control"]}>
        <div className={styles["login-textfield"]}>
          <input
            disabled={disabled}
            className={styles["login-textbox"]}
            onChange={onChange ? onChangeHandler : valueChange}
            placeholder={placeholder}
            type={password ? "password" : "text"}
            value={value ? value : textValue}
          />
        </div>
      </div>
      {hint && (
        <span className={`${styles["textfield-hint"]} ${styles[focusedClass]}`}>
          {hint}
        </span>
      )}
    </label>
  );
};

export default TextField;
