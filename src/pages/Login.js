import React, { useState } from "react";
import "../styles/registration.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registrationPage">
      <div className="registrationDiv" id="left">
        <div className="regOpening">
          <h1>Log in</h1>
          <h3>Type in your credentials</h3>
        </div>
        <div className="registrationInput">
          <label>Username</label>
          <input
            type="text"
            placeholder="Pick a username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
         
        <div className="registrationInput">
          <label>Password</label>
          <input
            type="password"
            placeholder="Choose your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="regButton">
          <button
            onClick={() =>console.log("USERNAME, PASSWORD", userName, password)}>
            Log in
          </button>
        </div>
      </div>

      <div className="registrationDiv" id="right">
      <img src={"./stackPhoto.jpg"} alt='Shape stack'></img>
      </div>
    </div>
  );
};

export default Login;