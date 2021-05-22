import React from 'react'
// import {topAboutUs} from './FooterStyles'
import  styles from  '../styles/footer.module.scss'


const list1=[
    "Hotel near me",
    "Manali",
    "Nainital",
    "Mount Abu",
    "Agra",
    "Hardiwar",
    "Gurgaon",
    "Coimbatore"
];

const list2=[
    "Goa",
    "Udaipur",
    "Lonvala",
    "Kodaikanal",
    "Gantok",
    "Kolkata",
    "Mandarmoni",
    "Kasauli",
]

const list3=[
    "Puri",
    "Mussoorie",
    "Munnar",
    "Hyderabad",
    "Coorg",
    "Ahmedabad",
    "Daman",
    "Dehradun",
]

const list4=[
    "Mahabaleshwar",
    "Pondicherry",
    "Bangalore",
    "Pune",
    "Chennai",
    "Shillong",
    "Yercaud",
    "Brasil"
]

const list5=[
    "Jaipur",
    "Delhi",
    "Mysore",
    "Chandigarh",
    "Tirupati",
    "Rishikesh",
    "Amritsar",
    
]

const list6=[
    "Shimla",
    "Mumbai",
    "Darjeeling",
    "Shirdi",
    "Dalhousie",
    "Varanasi",
    "Madurai",
]
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container0}>
                <div>
                    <span className={styles.name}>OYO</span>
                    <span className={styles.tag}>
                    The World's Fastest Growing Chain
                    </span>
                </div>
                <div className={styles.second}>
                    <h4>
                         Join our network and grow your business
                    </h4>
                </div>

            </div>
            
            <div className={styles.container1}>
                <div className={styles.sec1}>
                    <h2>Download OYO App for exciting Offers</h2>
                </div>
                <hr />
                <div className={styles.sec2}>
                    <ul>
                        <li>
                            About Us
                        </li>
                        <li>
                            Terms / Career
                        </li>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Support
                        </li>
                        </ul>
                        <ul>
                        <li>
                            Official OYO Blog
                        </li>
                        <li>
                            Press Kit
                        </li>
                        <li>
                            OYO Circle
                        </li>
                        <li>
                            OYO Frames
                        </li>
                    </ul>
                </div>
                <hr />
                <div className={styles.sec3}>

                    <ul>
                        <li>
                            Terms and Conditions
                        </li>
                        <li>
                            Guest Policies
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Responsible Disclosure
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className={styles.container2}>
                <div>
                    <h1>OYO Townhouse</h1>
                    <h2>Your friendly Neighborhood Hotel</h2>
                </div>
                <div>
                    <h1>
                        OYO Silver Key
                    </h1>
                    <h2>
                        Executive Stay
                    </h2>
                </div>
                <div>
                    <h1>
                        OYO Home
                    </h1>
                    <h2>
                        Unlocking Homes
                    </h2>
                </div>
            </div>
            <div>
                <h4>OYO Hotels</h4>
            </div>
            <div className={styles.container3}>
                <ul>
                    <li>Hotel Near Me</li>
                    {list1.map(item=>(<li>Hotels in {item}</li>))}
                </ul>
                <ul>
                    {list2.map(item=>(<li>Hotels in {item}</li>))}
                    <li>OYO Hotel USA</li>
                </ul>
                <ul>
                    {list3.map(item=>(<li>Hotels in {item}</li>))}
                    <li>OYO Hotel Mexico</li>
                </ul>
                <ul>
                    {list4.map(item=>(<li>Hotels in {item}</li>))}
                    <li>Travel Guide</li>

                </ul>
                <ul>
                    {list5.map(item=>(<li>Hotels in {item}</li>))}
                    <li>All Cities Hotels</li>
                    <li>OYO </li>

                </ul>
                <ul>
                    {list6.map(item=>(<li>Hotels in {item}</li>))}
                    <li>Coupons</li>
                    <li>OYO Hotels Indonesia</li>

                </ul>
            </div>
        </footer>
    )
}
