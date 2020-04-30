import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingView.module.css';
import '../../assets/logo512.png';
import WatchIcon from '../../assets/watch_yellow.svg';
import CompassIcon from '../../assets/compass_yellow.svg';
import CalendarIcon from '../../assets/calendar_yellow.svg';

class LandingView extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={styles.heroSection}>
                    <img src='#' alt='Placeholder Art' className={styles.topImg} />
                    <h1>Track Your Teams Project With The Code Forge</h1>
                    <p className={styles.subHeading}>
                        Create custom work flows to notify you
                    <br />
                    when the job gets done
                    </p>
                    <Link to='/sign-up' className={styles.btn}>Try It Free</Link>
                </div>
                <div className={styles.intro}>
                    <img src='logo512.png' alt='Forge hammer hitting red hot ingot'/>
                        <p className={styles.about}>
                            The Project Forge has several features geared toward graphic
                            designers and event planners. Create custom workflows that 
                            inform your coworkers and clients that you are done and require
                            approval to go to the next stage of the project. Whether you
                            need to get your task done tomorrow or Friday use The Project 
                            Forge to get it done and stay organized!
                        </p>
                </div>
                <div className={styles.features}>
                    <div className={styles.iconColumn}>
                        <img src={CalendarIcon} alt='calendar icon'/>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                    </div>
                    <div className={styles.iconColumn}>
                        <img src={CompassIcon} alt='compass icon'/>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                    </div>
                    <div className={styles.iconColumn}>
                        <img src={WatchIcon} alt='watch icon'/>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                    </div>
                </div>
                <div className={styles.examples}>
                    <img src='#' alt='Placeholder img'/>
                    <div className={styles.columnParagraphs}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                        </p>
                    </div>
                    <div className={styles.signupForm}>
                        <form action='' method='post'>
                            <h2>Are you ready to get started?</h2>
                            <input type='text' placeholder='First Name' className={styles.textboxForm}/>
                            <input type='text' placeholder='Last Name' className={styles.textboxForm}/>
                            <input type='text' placeholder='Email' className={styles.textboxForm}/>
                            <input type='text' placeholder='Password' className={styles.textboxForm}/>
                            <input type='text' placeholder='Re-Type Password' className={styles.textboxForm}/>
                            <input type='button' value='Sign Up' className={styles.btn}/>
                        </form>
                    </div>
                </div>
                <div className={styles.buffer}>

                </div>
            </Fragment>
        );
    }
}

export default LandingView;