import React from 'react';

import styles from './TextBox.module.css';

const TextBox = (props) => {
    return (
        <input type={props.type} placeholder={props.default} className={styles.textBox}/>
    )
}

export default TextBox;