import React from 'react';
import 'typeface-roboto';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../Store/Actions/auth';

import styles from './MainHeader.module.css';

class MainHeader extends React.Component {
    render() {
        return (
            <header>
                <Link to='/' className={styles.logo}>The Project Forge</Link>
                <nav className={styles.mainNav}>
                    <ul>
                        <li className={styles.navSpacing}><Link to='/view-tickets'>Tickets</Link></li>
                        <li className={styles.navSpacing}><Link to='#'>Services</Link></li>
                        <li className={styles.navSpacing}><Link to='/sign-up'>Sign Up</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(MainHeader);