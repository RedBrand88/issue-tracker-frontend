import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
    return (
    <button type={props.type} onClick={props.onClick} className={styles.btn}>{props.text}</button>
    )
}

export default Button;