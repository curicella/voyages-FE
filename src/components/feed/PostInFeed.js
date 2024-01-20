import React from "react";
import { useState } from "react";
import "C:/Users/ICSISTEM/Desktop/ReactApp/voyagesFE/src/styles/post.css"
import StarRating from "./StarRating";
import Heart from "react-animated-heart";

const PostInFeed = ({ initialImg, initialTitle, initialDesc, initialOR, initialUR, initialRating}) => {
  const [img, setImg] = useState(initialImg);
  const [title, setTitle] = useState(initialTitle);
  const [desc, setDesc] = useState(initialDesc);
  const [overrated, setOverrated]= useState(initialOR);
  const [underrated, setUnderrated]= useState(initialUR);
  const [rating, setRating] = useState(initialRating);
  const [likes, setLikes] = useState(0);
  const [isClick, setClick] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="postFrame">
        <div className="postImg">
            <img src={"./santoriniCrop.jpeg"} alt="Post"/> 
            {/* src={img} */}
        </div>
        <div className="postContent">
            <div className="postDesc">
                <h3>{title}Title</h3>
                <div className="desc">
                    <p>{desc}Inspect the internal state handling of the react-animated-heart component. 
                    It might be managing the click state internally and toggling the like status incorrectly. 
                    If the library provides any callbacks or event handlers, check if they are being used correctly.</p>
                    </div>
                <div className="our">
                    <h4>Overrated spots: {overrated}House of cards</h4>
                    <h4>Underrated spots: {underrated}Lords boutique</h4>
                </div>
                
            </div>
            <div className="interaction">
                <div className="rating">
                    <StarRating rating={rating} onRatingChange={handleRatingChange}/>
                    <span className="displayRating">{rating}/5</span>
                </div>

                <div className="like">
                    <Heart isClick={isClick} onClick={() => { 
                        setClick(!isClick); 
                        setLikes(likes + 1); 
                        if (isClick) 
                            setLikes(likes-1);
                        }} />
                    <span>{likes}</span>
                </div> 
            </div>
            <div className="signature">
                <p>by: User</p>
            </div>
        </div>
    </div>
  );
};

export default PostInFeed;