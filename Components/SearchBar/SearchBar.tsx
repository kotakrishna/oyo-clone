import React from 'react'
import styles from '../styles/SearchBar.module.scss'
export default function SearchBar() {
    return (
        <div className={styles.container}>
            <div className={styles.input_box}>
                <input type="text" className={styles.Input} placeholder="Search by City, hotel, or neighborhood"/>
                <button className={styles.btn_nearMe}> <span>III</span> Near Me</button>
            </div>
            
            <div className={styles.dates}>
                Dates
            </div>
            
            <div className={styles.rooms}>
            Rooms Slider
            </div>
            
            <div className={styles.Button}>
                    <button>Search</button>
            </div>
        </div>
    )
}
