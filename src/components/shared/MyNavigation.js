import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../context/my-context";
import axios from "axios";

const MyNavigation = () =>
 {
  const { user, setUserFunction } = useContext(MyContext);

  const logoutUserHandler = () =>
   {
    setUserFunction(null);
    localStorage.removeItem("user");
    axios.defaults.headers.common[
      "Authorization"
    ] = '';
  };


  return (
    <>
      <>
        {!user && (
          <div className="navigation">
            <div className="navigation-link">
              <NavLink to="/about">About</NavLink>
            </div>
        
            <div className="navigation-link">
              <NavLink to="/contact">Contact</NavLink>
            </div>
        
            <div className="navigation-link">
              <NavLink to="/home"><img className="logo" src="./logo.png" alt="logo"/></NavLink>
            </div>
        
            {!user && (
              <div className="navigation-link">
                <NavLink to="/login">Log In</NavLink>
              </div>
            )}
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
          <div className="navigation">
            <div className="navigation-link">
              <NavLink to="/feed"><img className="logo" src="./logo.png" alt="logo"/></NavLink>
            </div>
            <div className="navigation-link">
              <NavLink to="/search">Search</NavLink>
            </div>
            <div className="navigation-link">
              <button onClick={logoutUserHandler}>Log Out</button>
            </div>
          </div>
        )}    
      </>
    </>
  );
};

export default MyNavigation;