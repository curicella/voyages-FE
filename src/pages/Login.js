import React, { useContext, useState } from "react";
import "../styles/auth.css";
import axios from "axios";
import { MyContext } from "../context/my-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUserFunction } = useContext(MyContext);
  const navigate = useNavigate();

  const loginUserHandler = async () => {
    setError(null);

    try {
      setLoading(true);

      const response = await axios.post(
        "https://localhost:7137/api/Users/login",
        {
          userName: userName,
          password: password,
        }
      );

      const responseData = response.data;

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${responseData.token}`;

      setUserFunction(responseData);

      localStorage.setItem("user", JSON.stringify(responseData));
      setUserName("");
      setPassword("");
      navigate("/home");
    } catch (e) {
      console.log("Error", e);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="authPage">
      <div className="authDiv" id="regLeft">
      <div className="cover">
          <h1>Log in</h1>
          <h2>Type in your credentials</h2>
        </div>
      </div>
      {loading && 
      <div className="loading">
          <h1>Loading...</h1>
      </div>}
      {!loading && (
      <div className="authDiv" id="regRight">
        <form>
          <div className="authInput">
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <div className="authInput">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {error && (
            <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
          )}
          <div className="authButton">
            <button onClick={loginUserHandler}>Login</button>
          </div>
        </form>
        <div className="googleLog">

        </div>
      </div>
      )}
    </div>
  );
};

export default Login;