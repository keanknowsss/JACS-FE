import React from 'react';
import styles from './Specification.module.scss';

const Specification = (props) => {
    const {details, specifications} = props;
    
    let specification = [];
    let toString = obj => Object.entries(obj).map((([k, v]) => `${k}: ${v}`)).join(', ');
  return (
    <div className={styles.main}>
        <h1 className={styles.header}>Specifications</h1>
        <div className={styles.specifications}>
            <p>{toString(specifications)}</p>
        </div>
    </div>
  )
}

export default Specification