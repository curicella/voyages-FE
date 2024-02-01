import React, { useState, useEffect } from "react";
import "./post.css";
import StarRating from "./StarRating";
import axios from "axios";
import Heart from "react-animated-heart";

const PostInFeed = ({ data }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(data.likeCount);

  useEffect(() => {
    let ls = JSON.parse(localStorage.getItem("user"));
    if (ls) setCurrentUser(ls.user);
  }, [localStorage.getItem("user")]);

  useEffect(() => {
    setLiked(data.likedDiaries?.some((l) => l.userId === currentUser?.id));
  }, [data, currentUser]);

  const handleLike = async () => {
    try {
      if (liked) {
        await axios.delete(
          `https://localhost:7030/api/DiaryLikes/${
            data.likedDiaries.find((ld) => ld.userId === currentUser.id)?.id
          }`
        );
        setLiked(false);
        setLikeCount((prevCount) => prevCount - 1); // Decrease like count
      } else {
        const response = await axios.post(
          "https://localhost:7030/api/DiaryLikes",
          {
            userId: currentUser.id,
            diaryId: data.id,
          }
        );
        setLiked(true);
        setLikeCount((prevCount) => prevCount + 1); // Increase like count
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postFrame">
      <div className="postImg">
        <img src={data.imageUrl} alt="Post" />
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
            <StarRating rating={data.rating} onRatingChange={() => {}} />
            <span className="displayRating">{data.rating}/5</span>
          </div>
          <div className="like">
            <Heart isClick={liked} onClick={() => handleLike()} />
            <span>{likeCount}</span> {/* Display like count */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInFeed;
