
import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <Oval height={80} width={80} color="#4fa94d" visible={true} />
  </div>
);

export default Loader;
