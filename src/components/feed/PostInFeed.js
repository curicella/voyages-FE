import React from "react";
import { useState, useEffect } from "react";
import "C:/Users/ICSISTEM/Desktop/VoyagesFE/voyagesFE/src/styles/post.css"
import StarRating from "./StarRating";
import Heart from "react-animated-heart";

const PostInFeed = ({ data }) => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [overrated, setOverrated]= useState('');
  const [underrated, setUnderrated]= useState('');
  const [rating, setRating] = useState('');
  const [likes, setLikes] = useState(0);
  const [isClick, setClick] = useState(false);


  if (!data) return <p>Loading</p>;

  return (
    <div className="postFrame">
        <div className="postImg">
            <img src={data.imageUrl} alt="Post"/> 
            {/* src={img} */}
        </div>
        <div className="postContent">
            <div className="postDesc">
                <h3>{data.title}</h3>
                <div className="desc">
                    <p>{data.description}</p>
                    </div>
                <div className="our">
                    <h4>Overrated spots: {data.overratedSpots}</h4>
                    <h4>Underrated spots: {data.underratedSpots}</h4>
                </div>
                
            </div>
            <div className="interaction">
                <div className="rating">
                    <StarRating rating={data.rating} onRatingChange={() => {}}/>
                    <span className="displayRating">{data.rating}/5</span>
                </div>

                <div className="like">
                    <Heart isClick={isClick} onClick={() => { 
                        setClick(!isClick); 
                        setLikes(likes + 1); 
                        if (isClick) 
                            setLikes(likes-1);
                        }} />
                        {/* isClick={isClick} 
                            onClick={() => { 
                            setClick(!isClick); 
                            setLikes(prevLikes => (isClick ? prevLikes - 1 : prevLikes + 1)); */}
                    <span>{likes}</span>
                </div> 
            </div>
        </div>
    </div>
  );
};

export default PostInFeed;