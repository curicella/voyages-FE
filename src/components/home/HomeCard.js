import React from "react";
import './home.css';

const HomeCard = () => {
  return (
    <div classNameName="content-header-div  content-header-div-two">
      <div classNameName="intro">
        <div data-aos='fade-up' className="card">
          <div className="card-image">
            <img src="map.jpg" alt="Card"/>
          </div>
          <div className="card-content">
          <h1>Travel inspiration at your fingertips</h1>
          <p>Unlock a world of wanderlust with our curated collection of travel stories and breathtaking images. 
            From hidden gems to iconic landmarks, find the inspiration you need for your next adventure —
            all in one place, at your fingertips.</p>
          </div>
        </div>
        <div className="card card-right">
          <div className="card-content">
            <h1>Keep track of all your trips, no hasle</h1>
            <p>Capture the essence of your adventures effortlessly. 
              Our app simplifies the art of preserving memories — turn your travel experiences into special diaries through easy-to-create posts. 
              No more hassles, just seamless recording of your journey, one memory at a time.</p>
          </div>
          <div className="card-image">
            <img src="rio.jpeg" alt="Card"/>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src="happyLady.jpg" alt="Card"/>
          </div>
          <div className="card-content">
          <h1>Give your thoughts and join the community</h1>
          <p>Share your travel experiences, insights, and tips with a vibrant community of fellow explorers. 
            Discover hidden gems and contribute to a collective treasure trove of travel knowledge. 
            Your thoughts matter — be part of a community that celebrates the joy of exploration.</p>
          </div>
        </div>              
      </div>
    </div>
  );
};

export default HomeCard;