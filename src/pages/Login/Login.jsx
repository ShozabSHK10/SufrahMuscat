import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={styles.loginPage}>
      <div className={`${styles.container} ${isRegister ? styles.active : ""}`}>
        {/* Sign Up Form */}
        <div className={`${styles.formContainer} ${styles.signUp}`}>
          <form>
            <h1 className={styles.createAccount}>Create Account</h1>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icons}>
                <i className="bx bxl-google"></i>
              </a>
              <a href="#" className={styles.icons}>
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className={styles.icons}>
                <i className="bx bxl-github"></i>
              </a>
              <a href="#" className={styles.icons}>
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <span>Register with E-mail</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Enter E-mail" />
            <input type="password" placeholder="Enter Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <form>
            <h1 className={styles.createAccount}>Sign In</h1>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icons}>
                <i className="bx bxl-google"></i>
              </a>
              <a href="#" className={styles.icons}>
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className={styles.icons}>
                <i className="bx bxl-github"></i>
              </a>
              <a href="#" className={styles.icons}>
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <span>Login With Email & Password</span>
            <input type="email" placeholder="Enter E-mail" />
            <input type="password" placeholder="Enter Password" />
            <a href="#">Forget Password?</a>
            <button type="button">Sign In</button>
          </form>
        </div>

        {/* Toggle Panels */}
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
              <h1>
                Welcome To <br />
                Sufrah Muscat
              </h1>
              <p>Sign in With ID & Password</p>
              <button
                className={styles.hidden}
                onClick={() => setIsRegister(false)}
              >
                Sign In
              </button>
            </div>
            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
              <h1>Hi fellow food enthusiasts</h1>
              <p>
                Sign-Up to Sufrah Muscat to discuss your favourite spots in
                Muscat
              </p>
              <button
                className={styles.hidden}
                onClick={() => setIsRegister(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
