import React from "react";
import styles from "../styles/login.module.scss";

export default function Login() {
  return (
    <section className={styles.Section}>
      <div>
        <h1 className={styles.title}>
          Hotels and Homes across 800 cities, 24+ countries
        </h1>
      </div>
      <div className={styles.middle}>
        <div className={styles.subTitle}>
          <h1>There’s a smarter way to OYO around</h1>
          <h6>
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </h6>
        </div>
        <section className={styles.paper}>
          <div className={styles.top}>Sign Up and Get 500 OYO Money</div>
          <div className={styles.second}>
            <div className={styles.LoginSign}>
              <h1>Login / Signup</h1>
            </div>
            <div>
              <h3>Please Enter your phone number to continue</h3>
            </div>
            <div>
              <input className={styles.input} type="number" name="" id="" />
            </div>
            <div>
              <button className={styles.verify}>Verify Number</button>
            </div>
            <div>
              <h4>
                Prefer to Sign in with password instead?
                <span className={styles.red}>Click here</span>
              </h4>
            </div>
            <div>Sign UP</div>
          </div>
        </section>
      </div>
    </section>
  );
}
