import React from 'react';
import Icons from './icons.svg'
import styles from './icon.scss';

interface IIcons {
    name?: string,
    color?: string,
    size?: number,
    className?: string
}

export function Icon({name, color, size, className}: IIcons) {
    return (
        <svg className={`icon icon-${name} ${className}`} fill={color} width={size} height={size}>
            <use xlinkHref={`${Icons}#icon-${name}`}/>
        </svg>
    );
}
