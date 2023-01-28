import React from "react";
import styles from '../App.module.scss'
import cancel from '../images/cancel.svg'
import rosebox from '../images/rosebox.svg'

function Menu(props) {
    return  <nav className={styles.navDiv}>
    <img src={cancel} alt='cancel' className={styles.cancel} onClick={props.fnc2}></img>
    <a href='/app'>Home</a>
    <a href='#work'>How it works</a>
    <a href='#footer'>Contact us</a>
    <button className={styles.waitBtn2} onClick={props.menuFnc}>Send now</button>
    <div className={styles.subHead2}>
            <p>Simple, easy deliveries</p>
            <img src={rosebox} alt='delivery'></img>
    </div>
</nav>
}

export default Menu