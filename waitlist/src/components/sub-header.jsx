import React from "react";
import styles from '../App.module.scss'
import rosebox from '../images/rosebox.svg'

function SubHeader() {
    return <section className={styles.subHeader}>
        <div className={styles.subHead1}>
            <h2>
            The <span>easier</span> way to <span>send</span> stuff
            </h2>
            <p>
            We match you with a traveller to deliver your parcel on the next available flight
            </p>
            <button type="submit" className={styles.waitBtn}>Join waitlist</button>
        </div>
        <div className={styles.subHead2}>
            <p>Simple, easy deliveries</p>
            <img src={rosebox} alt='delivery'></img>
        </div>
    </section>
}

export default SubHeader