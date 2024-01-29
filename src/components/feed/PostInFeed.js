import React, { useState, useEffect } from "react";
import "C:/Users/ICSISTEM/Desktop/VoyagesFE/voyagesFE/src/styles/post.css";
import StarRating from "./StarRating";
import axios from "axios";
import Heart from "react-animated-heart";

const PostInFeed = ({ data }) => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [overrated, setOverrated]= useState('');
  const [underrated, setUnderrated]= useState('');
  const [rating, setRating] = useState('');
  const [likes, setLikes] = useState(14);
  const [isClick, setClick] = useState(false);
  const [currentUser, setCurrentUser] = useState(null)
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    let ls = JSON.parse(localStorage.getItem('user'));
    if (ls) setCurrentUser(ls.user);
    console.log(data);
  }, [localStorage.getItem('user')]);

  useEffect(() => {
    setLiked(data.likedDiaries?.some(l => l.userId === currentUser?.id));
  }, [data, currentUser]);

  const handleLike = async () => {
    try {
      if (data.likedDiaries?.some(l => l.userId === currentUser?.id)) {
        await axios.delete(`http://elacuric-001-site1.ctempurl.com/api/diarylikes/${data.likedDiaries.find(ld => ld.userId === currentUser.id)?.id}`);
        data.likedDiaries.filter(ld => ld.id !== data.likedDiaries.find(ld => ld.userId === currentUser.id)?.id);
      } else {
        const response = await axios.post("http://elacuric-001-site1.ctempurl.com/api/diarylikes", {
          userId: currentUser.id,
          diaryId: data.id
        })
        data.likedDiaries.push(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
          <Heart isClick={liked} onClick={() => handleLike()} 
          />
          <span>{data.likeCount}</span>
                
        </div>
      </div>
    </div>
</div>
  );
};

export default PostInFeed;
