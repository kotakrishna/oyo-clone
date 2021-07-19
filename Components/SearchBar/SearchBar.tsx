import React from 'react'
import styles from '../styles/SearchBar.module.scss';
// import offerBanner from "../../public/offerBanner.webp";
export default function SearchBar() {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                World fastest Growing Hotel Chain.
            </div>
            <div className={styles.search_bar}>

                <div className={styles.input_box}>
                    <input type="text" className={styles.Input} placeholder="Search by City, hotel, or neighborhood" />
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
            {/* <picture className={styles.banner}>
                <source srcSet="../../public/offerBanner.webp" />
                <img src="https://assets.oyoroomscdn.com/cmsMedia/7700e1f2-3d24-41e8-8c71-f4336c625a88.jpg" alt="" />
            </picture> */}
        </section>
    )
}
