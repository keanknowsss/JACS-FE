import React, { useState } from "react";
import { ArrowNavigation } from "../../assets/icons";
import styles from "./Select.module.scss";

const Select = ({ label, options, getSelected }) => {
  const [selected, setSelected] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.main}>
      <span className={styles.selector}>
        {selected.length < 1 ? label : selected}
        <ArrowNavigation
          className={styles.arrow}
          onClick={() => setToggle(!toggle)}
          fill={"#f66b0e"}
        />
      </span>

      {toggle ? (
        <div className={styles.options}>
          {options?.map((option, index) => (
            <div
              key={index}
              className={styles.option}
              onClick={() => {
                setSelected(option);
                getSelected(option);
                setToggle(!toggle);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Select;
