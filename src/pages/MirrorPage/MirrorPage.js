import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MirrorPage.css';

import backIcon from '../../assets/icons/back.svg';

const MirrorPage = props => (
  <div id="mirror" className={styles.container}>
    <Link to="" className={styles.item}>
      <img src={backIcon} onClick={() => props.history.goBack()} className={styles.item__icon} />
    </Link>
  </div>
);

export default MirrorPage;
