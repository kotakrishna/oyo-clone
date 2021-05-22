import React from 'react'
import styles from '../styles/Card.module.scss'
export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.Image}>
                <div className={styles.InnerImg}>
                <img className={styles.img} src="https://res.cloudinary.com/bookit/image/upload/v1618590762/bookit/rooms/1_bzynlv.jpg" alt="Room" />
                </div>
                <div className={styles.otherImages}>
                <img className={styles.OthImg} src="https://res.cloudinary.com/bookit/image/upload/v1618590762/bookit/rooms/1_bzynlv.jpg" alt="Room" />
                <img className={styles.OthImg} src="https://res.cloudinary.com/bookit/image/upload/v1618590762/bookit/rooms/1_bzynlv.jpg" alt="Room" />
                <img className={styles.OthImg} src="https://res.cloudinary.com/bookit/image/upload/v1618590762/bookit/rooms/1_bzynlv.jpg" alt="Room" />
                <img className={styles.OthImg} src="https://res.cloudinary.com/bookit/image/upload/v1618590762/bookit/rooms/1_bzynlv.jpg" alt="Room" />                
                </div>
            </div>
            <div className={styles.details}>
                <div>
                <h2>Hotel Name</h2>
                <p className={styles.address}>Near SBI, Mahesh Nagar, Hyderabad</p>
                </div>
                <div className={styles.rating}>
                    <span>Rating</span>
                    <span>Rating</span>
                    <span>Rating</span>
                </div>
                <div className={styles.facilities}>
                    <p>
                    facilities
                    </p>
                    <p>
                    facilities
                    </p>
                    <p>
                    facilities
                    </p>
                    <p>
                    facilities
                    </p>
                </div>
                <div className={styles.Sanitation}>
                    <span>
                    Sanitation
                    </span>
                    <span>
                    Sanitation
                    </span>
                    <span>
                    Sanitation
                    </span>
                </div>
                <div className={styles.priceAndBooking}>
                    <div className={styles.price}>
                        Price
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.viewDetails}>
                            View Details
                        </button>
                        <button className={styles.bookNow}>
                            Book Now
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
