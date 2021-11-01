import React from 'react';
import {PieListItem} from "../PieListItem";
import styles from "./pielist.scss";
import {Icon} from "../Icon";

export function PieList() {
    const handlerClickPageOne = () => {
        const charts = document.querySelectorAll<HTMLElement>('.chart');
        for(let i = charts.length - 1; i >= 3; i--) {
            charts[i].style.display = 'none';
        }
        for(let i = 0; i < 3; i++) {
            charts[i].style.display = 'block';
        }
    }

    const handlerClickPageTwo = () => {
        const charts = document.querySelectorAll<HTMLElement>('.chart');
        for(let i = charts.length - 1; i >= 3; i--) {
            charts[i].style.display = 'block';
        }
        for(let i = 0; i < 3; i++) {
            charts[i].style.display = 'none';
        }
    }
    
    return (
        <>
            <div className={styles.pielist}>
                <PieListItem region={'asia'} title={'Asia'}  />
                <PieListItem region={'europe'} title={'Europe'} />
                <PieListItem region={'africa'} title={'Africa'}  />
                <PieListItem region={'ame'} title={'America'}  />
                <PieListItem region={'oceania'} title={'Oceania'}  />
            </div>
            <div className={`${styles.buttons} buttons`}>
                <button className={styles.btn} onClick={handlerClickPageOne}>
                    <Icon name={'pagination'} size={40} />
                    <span className={styles.btnText}>1</span>
                </button>
                <button className={styles.btn} onClick={handlerClickPageTwo}>
                    <Icon name={'pagination'} size={40} />
                    <span className={styles.btnText}>2</span>
                </button>
            </div>
        </>
    );
}
