import React from 'react';
import styles from './Home.module.css'
import landing from '../../assets/images/landing.svg'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.customContainer}>
            <div className={styles.titleSection}>
                <p className={styles.title}>Imagine if</p>
                <p className={styles.focusTitle}>Snapchat</p>
                <p className={styles.title}>had events.</p>
                <p className={styles.subtitle}>Easily host and share events with your friends <br/> across any social media.</p>
            </div>
            <div className={styles.imageSection}>
                <img src={landing} alt="" className={styles.bannerImage}/>
            </div>

            <div className={styles.buttonSection}>
                <Link className={styles.createButton} to={'/create'}>🎉 Create my event</Link>
            </div>
        </div>
    );
};

export default Home;