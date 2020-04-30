import React from 'react';

import styles from './Modal.module.css';
import cx from 'classnames';

const handleChildClick = (e) => {
    e.stopPropagation();
}

const Modal = (props) => {
    return (
        <div onClick={props.onClose} className={cx(styles.backDrop, styles[props.open])}>
            <div onClick={handleChildClick} className={styles.modal}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;