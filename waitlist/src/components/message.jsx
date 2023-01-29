import React from "react"; 
import styles from '../App.module.scss'

function Message() {
    return <section className={styles.msgSection}>
        <h1 className={styles.hText}>
            Thank you for joining AirGo waitlist 
        </h1>
    </section>
}

export default Message