import React from "react";
import styles from '../App.module.scss'
import logo from '../images/logo.svg'
import cancel from '../images/cancel.svg'

function Form(props) {
    return <section className={styles.formSection}>
        <img src={cancel} className={styles.ogaCancel} alt='cancel' onClick={props.formHiding}></img>
        <div className={styles.formSections}>
       <div className={styles.formText}>
        <div className={styles.logos}>
        <img src={logo} className={styles.logoImg} alt='logo'></img>
        <img src={cancel} className={styles.ogaCancel2} alt='cancel' onClick={props.formHiding}></img>
        </div>
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
        <form className={styles.form} action="https://formsubmit.co/buildairgo@gmail.com" method="POST">
            <input type='text' name="name" placeholder='Name' className={styles.inputName}></input>
            <input type='email' name="email" placeholder='Email' className={styles.inputName}></input>
            <button type='submit' className={styles.inputBtn}>Get Early Access</button>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="http://myairgo.co"></input>
        </form>
       </div>
       </div>
    </section>
}

export default Form