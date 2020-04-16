import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainFooter.module.css';

const MainFooter = () => {
    return (
        <footer>
            <span className={styles.footerLogo}>PF</span>
            <nav className={styles.footerNav}>
                <ul>
                    <li><Link to='#' className={styles.navSpacing}>Instagram</Link></li>
                    <li><Link to='#' className={styles.navSpacing}>Facebook</Link></li>
                    <li><Link to='#'>Contact Us</Link></li>
                </ul>
            </nav>
        </footer>
    )
}

export default MainFooter;