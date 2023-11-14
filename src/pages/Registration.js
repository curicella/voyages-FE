import React, { useState } from "react";
import "../styles/registration.css";

const Registration = () => {
  const [falName, setFalName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  return (
    <div className="registrationPage">
      <div className="registrationDiv" id="left">
        <div className="regOpening">
          <h1>Create an account</h1>
          <h3>Let's get started</h3>
        </div>
        <div className="registrationInput">
          <label>First and Last Name</label>
          <input
          type="text"
          placeholder="Enter your full name"
          onChange={(e) => setFalName(e.target.value)}
          value={falName}/>
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
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
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
            onClick={() =>console.log("NAME, USERNAME, EMAIL, PASSWORD", falName, userName, mail, password)}>
            Sign up
          </button>
        </div>
      </div>

      <div className="registrationDiv" id="right">
      <img src={"./stackPhoto.jpg"} alt='Shape stack'></img>
      </div>
    </div>
  );
};

export default Registration;