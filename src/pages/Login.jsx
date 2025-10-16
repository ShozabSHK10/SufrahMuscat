import React, { useState } from "react";
import "../css/Login.css"; // keep your existing styles

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={`container ${isRegister ? "active" : ""}`}>
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className='bx bxl-google'></i></a>
            <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="icons"><i className='bx bxl-github'></i></a>
            <a href="#" className="icons"><i className='bx bxl-linkedin'></i></a>
          </div>
          <span>Register with E-mail</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className='bx bxl-google'></i></a>
            <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="icons"><i className='bx bxl-github'></i></a>
            <a href="#" className="icons"><i className='bx bxl-linkedin'></i></a>
          </div>
          <span>Login With Email & Password</span>
          <input type="email" placeholder="Enter E-mail" />
          <input type="password" placeholder="Enter Password" />
          <a href="#">Forget Password?</a>
          <button type="button">Sign In</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome To <br />Code with Patel</h1>
            <p>Sign in With ID & Password</p>
            <button className="hidden" onClick={() => setIsRegister(false)}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hii Coder's</h1>
            <p>Join "Code With Patel" to Improve Your Coding Skills</p>
            <button className="hidden" onClick={() => setIsRegister(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
