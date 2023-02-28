import React from "react";
import { ManVoid } from "../../assets/images";
import styles from "./EmptyVoid.module.scss";

const EmptyVoid = () => {
  return (
    <>
      <div className={styles.manVoid}>
        <ManVoid />
        <p className={styles.text}>Sorry! There is nothing to see here.</p>
      </div>
    </>
  );
};

export default EmptyVoid;
