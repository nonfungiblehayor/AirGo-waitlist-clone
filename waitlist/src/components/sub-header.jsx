import React from "react";
import { useState } from "react";
import styles from '../App.module.scss'
import rosebox from '../images/rosebox.svg'
import Form from "./form";

function SubHeader() {
    const [formState, formControl] = useState(false)

    const displayForm = () => {
        formControl(!formState)
    }

    const hideForm = () => {
        formControl(!formState)
    }
    return <section className={styles.subHeader}>
        <div className={styles.subHeads}>
        <div className={styles.subHead1}>
            <h2>
            The <span>easier</span> way to <span>send</span> stuff
            </h2>
            <p>
            We match you with a traveller to deliver your parcel on the next available flight
            </p>
            <button type="submit" className={styles.waitBtn} onClick={displayForm}>Join waitlist</button>
        </div>
        <div className={styles.subHead2}>
            <p>Simple, easy deliveries</p>
            <img src={rosebox} alt='delivery'></img>
        </div> 
        </div>
        {formState ? <Form formHiding={hideForm}/> : ''}
    </section>
    
}

export default SubHeader