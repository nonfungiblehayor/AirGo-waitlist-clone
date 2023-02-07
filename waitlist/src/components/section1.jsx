import React from "react";
import styles from '../App.module.scss'

function Section1(props) {
    return <section className={styles.section1}>
        <div className={styles.div2}>
            <div className={styles.txtDiv}>
            <div className={styles.divTxt}>
            <p>Get paid while flying </p>
            </div>
            </div>
            {/* <button className={styles.waitBtn2} onClick={props.sectionFnc}>Deliver for us</button> */}
        </div>
        <button className={styles.waitBtn2} onClick={props.sectionFnc}>Deliver for us</button>
        <div className={styles.div1}>
            <h3>Join us in providing easy delivery</h3>
            <p>
               Accept a request on the AirGo app to deliver an item on your next flight and get paid!
            </p> 
            <button className={styles.waitBtn} onClick={props.sectionFnc}>Deliver for us</button>
        </div>  
    </section>
}

export default Section1