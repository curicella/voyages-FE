import React, { useContext, useState } from "react";
import "../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/my-context";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState(0);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUserFunction } = useContext(MyContext);
  const navigate = useNavigate();

  const [firstNameMessage, setFirstNameMessage] = useState(null);
  const [lastNameMessage, setLastNameMessage] = useState(null);
  const [mailMessage, setMailMessage] = useState(null);
  const [ageMessage, setAgeMessage] = useState(null);
  const [userNameMessage, setUserNameMessage] = useState(null);
  const [passwordMessage, setPasswordMessage] = useState(null);

  const registerUserHandler = async () => {
    setError(null);

    try {
      setLoading(true);

      const response = await axios.post(
        "https://localhost:7137/api/Users/register",
        {
          firstName,
          lastName,
          mail,
          age,
          userName,
          password,
        }
      );

      const responseData = response.data;

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${responseData.token}`;

      setUserFunction(responseData);
      
      setFirstName("");
      setLastName("");
      setMail("");
      setAge(0);
      setUserName("");
      setPassword("");
      localStorage.setItem("user", JSON.stringify(responseData));
      navigate("/home");
    } catch (e) {
      console.log("Error", e);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setFirstNameMessage(null);
    setLastNameMessage(null);
    setMailMessage(null);
    setAgeMessage(null);
    setUserNameMessage(null);
    setPasswordMessage(null);

    if (firstName.trim().length === 0) {
      setFirstNameMessage("Please enter valid first name!");
      return;
    }

    if (lastName.trim().length === 0) {
      setLastNameMessage("Please enter valid last name!");
      return;
    }

    if (mail.trim().length === 0) {
      setMailMessage("Please enter valid mail!");
      return;
    }

    if (age < 18 || age > 150) {
      setAgeMessage("Please enter correct age!");
      return;
    }

    if (userName.trim().length === 0) {
      setUserNameMessage("Please enter valid username!");
      return;
    }

    if (password.trim().length === 0) {
      setPasswordMessage("Please enter valid password!");
      return;
    }

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
      console.log(response.data)
    } catch(e) {
      console.log("ERROR", e)
    }
    console.log(firstName, lastName, mail, age, userName, password);
  };

  return (
    <div className="authPage">
      <div className="authDiv" id="regLeft">
        <div className="cover">
          <h1>Your diaries await</h1>
          <h2>Along with endless inspiration</h2>
        </div>
      </div>
      {loading && <div className="loading">
        <h1>Loading...</h1>
        </div>}
      {!loading && (
      <div className="authDiv" id="regRight">
        <form onSubmit={onSubmitHandler}>
          <div className="name">
            <div id="authInput">
              <label>First Name</label>
              <input
                type="text"
                placeholder="ex. John"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              {firstNameMessage && (
                <p className="input-alert">{firstNameMessage}</p>
              )}
            </div>
            <div id="authInput">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="ex. Doe"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              {lastNameMessage && (
                <p className="input-alert">{lastNameMessage}</p>
              )}
            </div>
          </div>
          <div className="authInput">
            <label>Email</label>
            <input
              type="text"
              placeholder="ex. example@mail.com"
              onChange={(e) => setMail(e.target.value)}
              value={mail}
            />
            {mailMessage && <p className="input-alert">{mailMessage}</p>}
          </div>
          <div className="authInput">
            <label>Age</label>
            <input
              type="number"
              placeholder="ex. 18"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            {ageMessage && <p className="input-alert">{ageMessage}</p>}
          </div>
          <div className="authInput">
            <label>Username</label>
            <input
              type="text"
              placeholder="ex. johndoe123"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            {userNameMessage && (
              <p className="input-alert">{userNameMessage}</p>
            )}
          </div>
          <div className="authInput">
            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {passwordMessage && (
              <p className="input-alert">{passwordMessage}</p>
            )}
          </div>
          {error && (
            <p style={{ color: "red", fontSize: "11px", marginBottom: "5px" }}>{error}</p>
          )}
          <div className="authButton">
            <button onClick={registerUserHandler}>Register</button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
};

export default Registration;