import React from 'react';
import styles from './Avatar.module.css';
import cx from 'classnames';

const Avatar = (props) => {
    return (
        <div className={cx(styles.avatar, styles[props.size], styles[props.color])}>
            {props.children}
        </div>
    )
}

export default Avatar;