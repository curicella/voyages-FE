import React from "react";
import { Link } from "react-router-dom";

const MyNavigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-link">
        <Link to='/home'>Home</Link>
      </div>
      <div className="navigation-link">
        <Link to='/login'>Login</Link>
      </div>
      <div className="navigation-link">
        <Link to='/registration'>Registration</Link>
      </div>
      <div className="navigation-link">
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
};

export default MyNavigation;