import React from "react";
import styles from '../App.module.scss'
import logo from '../images/logo.svg'
import cancel from '../images/cancel.svg'

function Form(props) {
    return <section className={styles.formSection}>
        <img src={cancel} className={styles.ogaCancel} alt='cancel' onClick={props.formHiding}></img>
        <div className={styles.formSections}>
       <div className={styles.formText}>
        <img src={logo} className={styles.logoImg} alt='logo'></img>
        <h2 className={styles.logoTxt}>
        AirGo is coming soon
        </h2>
        <p className={styles.ptxt}> 
        Join us and be the first to know when we launch    
        </p>
        <span className={styles.spanTxt}>
        With AirGo, you can <span className={styles.exSpan}>connect</span> with travelers worldwide to <span className={styles.exSpan}>send</span> to your 
        loved ones in the most <span className={styles.exSpan}>affordable</span> and simple way possible
        </span>
       </div>
       <div className={styles.formInput}>
        <p>
        Become an AirGoer today
        </p>
        <form className={styles.form}>
            <input type='text' placeholder='Name' className={styles.inputName}></input>
            <input type='email' placeholder='Email' className={styles.inputName}></input>
            <input type='button' value="Get Early Access" className={styles.inputBtn}></input>
        </form>
       </div>
       </div>
    </section>
}

export default Form