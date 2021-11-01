import React from 'react';
import styles from './logo.scss';
import {Icon} from "../../Icon";

export function Logo() {
  return (
      <>
          <a href="#" className={styles.logo}>
              <span>World’s</span> Population
              <Icon className={styles.icon} name={'globe'} size={20}/>
          </a>
      </>
  );
}
