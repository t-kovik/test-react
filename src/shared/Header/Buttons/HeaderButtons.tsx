import React from 'react';
import styles from './buttons.scss';
import {Icon} from "../../Icon";

export function HeaderButtons() {
    const handlerClickPagination = () => {
        const charts = document.querySelectorAll<HTMLElement>('.chart');
        const pagination = document.querySelectorAll<HTMLElement>('.buttons');
       for(let i = charts.length - 1; i >= 3; i--) {
           charts[i].style.display = 'none';
           pagination[0].style.opacity = '1';
       }
    }

    const handlerClick = () => {
        const charts = document.querySelectorAll<HTMLElement>('.chart');
        const pagination = document.querySelectorAll<HTMLElement>('.buttons');
        charts.forEach(i => {
            i.style.display = 'block';
        })
        pagination[0].style.opacity = '0';

    }

  return (
      <>
         <div className={styles.box}>
             <button className={styles.btn} onClick={handlerClickPagination}>
                 <Icon name={'heart'} size={20} />
                 <span>1 x 3</span>
             </button>
             <button className={styles.btn} onClick={handlerClick}>
                 <Icon name={'heart'} size={20} />
                 <span>2 x 3</span>
             </button>
         </div>
      </>
  );
}
