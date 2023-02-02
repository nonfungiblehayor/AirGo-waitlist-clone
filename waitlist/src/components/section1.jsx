import React from "react";
import styles from '../App.module.scss'
import frame from '../images/Frame.svg'

function Section1(props) {
    return <section className={styles.section1}>
        <div className={styles.div2}>
            <img src={frame} alt='frame img'></img>
            <button className={styles.waitBtn2}>Deliver for us</button>
        </div>
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