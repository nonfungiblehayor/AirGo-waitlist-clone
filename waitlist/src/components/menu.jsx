import React from "react";
import styles from '../App.module.scss'
import cancel from '../images/cancel.png'
import rosebox from '../images/rosebox.svg'

function Menu(props) {
    return  <nav className={styles.navDiv}>
    <img src={cancel} alt='cancel' className={styles.cancel} onClick={props.fnc2}></img>
    <a href='/app'>Home</a>
    <a href='/app'>How it works</a>
    <a href='/app'>Contact us</a>
    <button className={styles.waitBtn2}>Join waitlist</button>
    <div className={styles.subHead2}>
            <p>Simple, easy deliveries</p>
            <img src={rosebox} alt='delivery'></img>
    </div>
</nav>
}

export default Menu