import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../context/myContext";
import "./profile.css";
import User from "../../components/User";
import "../../components/userCard.css";
import ScrollToTop from "../../components/shared/ScrollToTop";

const Admin = () => {
  const { user, setUserFunction } = useContext(MyContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === "Admin") {
      getAllUsers().then((users) => setUsers(users));
    } else {
      navigate("/home"); // Redirect if the user is not an admin
    }
  }, [user, navigate]);

  const getAllUsers = async () => {
    try {
      const users = await (
        await axios.get(`https://localhost:7030/api/Users/getAll`)
      ).data;
      return users;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserHandler = async (userId) => {
    try {
      await axios.delete(`https://localhost:7030/api/Users/delete/${userId}`);
      setUsers(users.filter((user) => user.id !== userId)); // Update state after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const logoutUserHandler = () => {
    setUserFunction(null);
    localStorage.removeItem("user");
    axios.defaults.headers.common["Authorization"] = "";
    navigate("/home");
  };

  return (
    <div>
        <ScrollToTop/>
      <div className="feed">
        <div className="pHeader">
          <h2>Admin Center - Manage Users</h2>
        </div>
        <div className="profileMain">
          <div className="sideBar">
            <ul>
              <li className="menuTitle">
                <Link to="/profile">Back to Profile</Link>
              </li>
              <li className="menuItem">
                <Link to="/admin">Manage Users</Link>
              </li>
              <li className="menuItem">
                <Link to="/home" onClick={logoutUserHandler}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
          <div className="allUsers">
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <User user={user} />
                  <button
                    className="delUser"
                    onClick={() => deleteUserHandler(user.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
