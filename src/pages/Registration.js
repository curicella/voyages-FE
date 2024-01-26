import React, { useContext, useState } from "react";
import "../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/myContext";
import ScrollToTop from "../components/shared/ScrollToTop";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUserFunction } = useContext(MyContext);
  const navigate = useNavigate();

  const [firstNameMessage, setFirstNameMessage] = useState(null);
  const [lastNameMessage, setLastNameMessage] = useState(null);
  const [emailMessage, setEmailMessage] = useState(null);
  const [ageMessage, setAgeMessage] = useState(null);
  const [userNameMessage, setUserNameMessage] = useState(null);
  const [passwordMessage, setPasswordMessage] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setFirstNameMessage(null);
    setLastNameMessage(null);
    setEmailMessage(null);
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

    if (email.trim().length === 0) {
      setEmailMessage("Please enter valid email!");
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
      const response = await axios.post(
        "https://localhost:7030/api/Users/register",
        {
          firstName,
          lastName,
          email,
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

      setFirstName('');
      setLastName('');
      setEmail('');
      setAge(0);
      setUserName('');
      setPassword('');

      localStorage.setItem('user', JSON.stringify(responseData))

      navigate('/feed')
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <>
    <ScrollToTop />
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
                  placeholder="ex. example@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {emailMessage && <p className="input-alert">{emailMessage}</p>}
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
                <button onClick={onSubmitHandler}>Register</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Registration;