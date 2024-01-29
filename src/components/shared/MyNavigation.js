import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/myContext";
import './nav.css'
import axios from "axios";

const MyNavigation = () =>
 {
  const { user, setUserFunction } = useContext(MyContext);
  const navigate = useNavigate();
  const logoutUserHandler = () =>
   {
    setUserFunction(null);
    localStorage.removeItem("user");
    axios.defaults.headers.common[
      "Authorization"
    ] = '';
    navigate("/home");
  };


  return (
    <>
      <>
        {!user && (
          <div className="navigation">
            {!user && (
              <div className="navigation-link">
                <NavLink to="/login">Log In</NavLink>
              </div>
            )}

            <div className="navigation-link">
              <NavLink to="/home"><img className="logo" src="./logo.png" alt="logo"/></NavLink>
            </div>

            {!user && (
              <div className="navigation-link">
                <NavLink to="/registration">Register</NavLink>
              </div>
            )}
          </div>
        )}
      </>
            
      <>
        {user && (
          <div className="navmenu">
            <div className="leftSide">
              <div className="navLink">
                <NavLink to="/feed"><img className="logo" src="./logo.png" alt="logo"/></NavLink>
              </div>
              <Link to="/create"><button className="createNew button">Create new Diary</button></Link>
            </div>

            <div className="rightSide">
              <div className="basicLinks">
              <div className="navLink">
                  <NavLink to="/feed">Feed</NavLink>
                </div>
                <div className="navLink">
                  <NavLink to="/search">Search</NavLink>
                </div>
                <div className="navLink">
                  <NavLink to="/profile">Profile</NavLink>
                </div>
              </div>
            </div>
            
          </div>
        )}    
      </>
    </>
  );
};

export default MyNavigation;