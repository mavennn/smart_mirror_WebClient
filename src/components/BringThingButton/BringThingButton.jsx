import React from 'react';
import styles from './BringThingButton.css';
import sockets from '../../constants/sockets';

// TODO: make one component for all buttons
const BringThingButton = ({ getConsultant }) => (
  <div>
    <button
      className={styles.user_button}
      onClick={() => getConsultant(sockets.BRING_THING)}
    >
      Принести
    </button>
  </div>
);

export default BringThingButton;
