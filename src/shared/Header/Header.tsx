import React from 'react';
import styles from './header.scss';
import {Icon} from "../Icon";
import {Logo} from "./Logo";
import {HeaderButtons} from "./Buttons";



export function Header() {
    return (
        <header className={styles.header}>
           <Logo />
            <HeaderButtons />
        </header>
    );
}
