import React from 'react';
import styles from './Specification.module.scss';

const Specification = (props) => {
    const {details, specifications} = props;
  return (
    <div className={styles.main}>
        <h1 className={styles.header}>Specifications</h1>
        <div className={styles.specifications}>
            <p>Specification: Specification</p>
            <p>Specification: Specification</p>
            <p>Specification: Specification</p>
            <p>Specification: Specification</p>
            <p>Specification: Specification</p>
        </div>
    </div>
  )
}

export default Specification