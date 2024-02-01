import React from "react";
import { Link } from "react-router-dom";
import HomeCard from "../components/home/HomeCard";
import "../styles/home.css";
import ScrollToTop from "../components/shared/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <div className="content">
        <div className="content-header">
          <div className="content-header-div content-header-div-one">
            <div class="image-container">
              <img className="landing" src="./heading.jpeg" alt="Landing" />
              <div className="overlay"></div>
            </div>
          </div>
        </div>
        <HomeCard data-aos="fade-down" />
        <div className="content-header-div content-header-div-three">
          <h1>Join our app for an endless library of inspiration</h1>
          <p>
            Embark on a journey of discovery with our app and unlock a treasure
            trove of inspiration. Join us today to turn your wanderlust into
            reality and be part of a global network of adventurers. Your next
            unforgettable adventure is just a click away.
          </p>
          <Link
            to="/registration"
            className="btn-flip"
            data-back="today"
            data-front="Register"
          ></Link>
        </div>
        <Link to="/feed"></Link>
      </div>
    </>
  );
};

export default Home;
