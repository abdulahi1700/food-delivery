import { useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets";

const LoginPop = ({ setShowLogin }) => {
  const [curState, setCurState] = useState("Login");
  return (
    <div className="login-pop">
      <form className="login-pop-container">
        <div className="login-pop-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-pop-inputs">
          {curState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{curState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-pop-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the term of use & privacy policy</p>
        </div>
        {curState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Allready have an account?{" "}
            <span onClick={() => setCurState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
