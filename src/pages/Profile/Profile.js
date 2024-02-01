import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ScrollToTop from "../../components/shared/ScrollToTop";
import PostInFeed from "../../components/feed/PostInFeed";
import { MyContext } from "../../context/myContext";
import "./profile.css";

const getAllDiariesByUserId = async (userId) => {
  try {
    const diaries = await (
      await axios.get(`https://localhost:7030/api/Diaries/user/${userId}`)
    ).data;
    return diaries;
  } catch (error) {
    console.log(error);
  }
};
const deleteUserHandler = async (userId) => {
  try {
    await axios.delete(`https://localhost:7030/api/Users/delete/${userId}`);
    localStorage.removeItem("user");
    window.location.href = "/home";
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
const getAllUsers = async () => {
  try {
    const users = await (
      await axios.get("https://localhost:7030/api/Users/GetAll")
    ).data;
    return users;
  } catch (error) {
    console.log(error);
  }
};

const Profile = () => {
  const { user, setUserFunction } = useContext(MyContext);
  const [diaries, setDiaries] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.user?.id;
  const navigate = useNavigate();
  useEffect(() => {
    if (userId) {
      getAllDiariesByUserId(userId).then((diaries) => setDiaries(diaries));
    }
  }, [userId]);
  const logoutUserHandler = () => {
    setUserFunction(null);
    localStorage.removeItem("user");
    axios.defaults.headers.common["Authorization"] = "";
    navigate("/home");
  };

  return (
    <div>
      <ScrollToTop />
      <div className="feed">
        <div className="pHeader">
          <h2>Welcome to Your Unique Travel Log</h2>
        </div>
        <div className="profileMain">
          <div className="sideBar">
            <ul>
              <li className="menuTitle">
                <p>Diaries</p>
              </li>
              <li className="menuItem">
                <Link to="/profile">My Diaries</Link>
              </li>
              <li className="menuItem">
                <Link to="/likedDiaries">Liked Diaries</Link>
              </li>
            </ul>

            <ul>
              <li className="menuTitle">
                <p>Account settings</p>
              </li>
              <li className="menuItem">
                <Link to="/home" onClick={logoutUserHandler}>
                  Log Out
                </Link>
              </li>
              <li className="menuItem">
                <Link to="/home" onClick={deleteUserHandler}>
                  Delete Account
                </Link>
              </li>
            </ul>
            {user && user.role === "Admin" && (
              <ul>
                <li className="menuTitle">
                  <p>Admin Center</p>
                </li>
                <li className="menuItem">
                  <Link to="/admin">Manage Users</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="diaries">
            {diaries &&
              Array.isArray(diaries) &&
              diaries.length > 0 &&
              diaries
                .slice()
                .reverse()
                .map((diary, index) => <PostInFeed key={index} data={diary} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
