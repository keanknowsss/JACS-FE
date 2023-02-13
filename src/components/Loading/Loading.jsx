import React from 'react';
import { CircleLoading, TextLoading } from '../../assets/images';

import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
        <img src={CircleLoading} alt="" />
        <TextLoading/>
    </div>
  )
}

export default Loading