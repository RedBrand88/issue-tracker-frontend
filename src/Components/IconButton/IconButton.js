import React from 'react';
import styles from './IconButton.module.css';

const IconButton = (props) => {
    return (
        <button type='button' onClick={props.onClick} className={styles.iconBtn}>
            {props.children}
        </button>
    )
}

export default IconButton;