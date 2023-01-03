import React from "react";
import styles from '../App.module.scss'

function SubWork(props) {
    return<div className={styles.Subwork}>
        <div className={styles.divImg}>
        <img src={props.img} alt='description' className={styles.img}></img>
        </div>
        <h5>{props.upText}</h5>
        <p className={styles.pText}>{props.downText}</p>
    </div>
}
export default SubWork