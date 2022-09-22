import React from 'react';
import styles from './CreateEvent.module.css'
import {Link} from "react-router-dom";
// Event name, Host name, Start and End time/date, Location and Event photo.

const CreateEvent = () => {
    return (
        <div className={styles.formContainer}>
            <p className={styles.title}>Create your own event</p>
            <div className="form-group">
                <label htmlFor="eventName" className={styles.label}>Event Name</label>
                <input type="text" className={'form-control'} placeholder={'Event name'}/>
            </div>
            <div className="form-group">
                <label htmlFor="eventName" className={styles.label}>Host Name</label>
                <input type="text" className={'form-control'} placeholder={'Host name'}/>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="eventName" className={styles.label}>Start date</label>
                        <input type="date" className={'form-control'}/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="eventName" className={styles.label}>End date</label>
                        <input type="date" className={'form-control'}/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="eventName" className={styles.label}>Location</label>
                <select name="location" id="" className={'form-select'}>
                    <option value="">Australia</option>
                    <option value="">Canada</option>
                    <option value="">Bangladesh</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="eventName" className={styles.label}>Event photo</label>
                <input type="file" className={'form-control'} placeholder={'Host name'}/>
            </div>
            <br/><br/>

            <Link className={styles.nextButton} to={'/event'}>Next</Link>
        </div>
    );
};

export default CreateEvent;