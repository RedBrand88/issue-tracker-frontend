import React from 'react';

import styles from './Modal.module.css';
import cx from 'classnames';

const Modal = (props) => {
    return (
        <div className={cx(styles.backDrop, styles[props.open])}>
            <div className={cx(styles.modal)}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;