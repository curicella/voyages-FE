import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScrollToTop from '../../components/shared/ScrollToTop'
import PostInFeed from '../../components/feed/PostInFeed'
import axios from "axios";
import { MyContext } from '../../context/myContext';
import { useState, useEffect, useContext } from 'react';
import "./profile.css"

const fetchLikedDiaries = async (userId) => {
  try {
    const likedDiaries = await (await axios.get(`http://elacuric-001-site1.ctempurl.com/api/DiaryLikes/user/${userId}`)).data;      return likedDiaries;
  } catch (error) {
      console.error('Error fetching liked diaries:', error);
      return []; // Return empty array in case of error
  }
};

const LikedDiaries = () => {
  const { user, setUserFunction } = useContext(MyContext);
  const navigate = useNavigate();
  const [likedDiaries, setLikedDiaries] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userId = storedUser?.user?.id;

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        const likedDiaries = await fetchLikedDiaries(userId);
        setLikedDiaries(likedDiaries);
        console.log(likedDiaries);
      }
    };

    fetchData();
  }, [userId]);

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
    <div>
        <ScrollToTop/>
        <div className='feed'>
            <div className='pHeader'>
                <h2>Inspiration, currated by you</h2>
            </div>
            <div className='profileMain'>
                <div className='sideBar'> 
                    <ul>
                        <li className='menuTitle'><p>Diaries</p></li>
                        <li className='menuItem'><Link to='/profile'>My Diaries</Link></li>
                        <li className='menuItem'><Link to='/likedDiaries'>Liked Diaries</Link></li>
                    </ul>

                    <ul>
                        <li className='menuTitle'><p>Account settings</p></li>
                        <li className='menuItem'><Link to="/home" onClick={logoutUserHandler} >Log Out</Link></li>
                        <li className='menuItem'><Link to="/home" >Delete account</Link></li>
                    </ul>
                </div>
                <div className='diaries'>
                {
                  likedDiaries && likedDiaries.length > 0 &&
                  likedDiaries.map((item, index) => (
                    <PostInFeed 
                      key={index} 
                      data={item.diary}
                    />
                  ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default LikedDiaries