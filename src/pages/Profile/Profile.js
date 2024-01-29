import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScrollToTop from '../../components/shared/ScrollToTop'
import PostInFeed from '../../components/feed/PostInFeed'
import axios from "axios";
import { MyContext } from '../../context/myContext';
import { useState, useEffect, useContext } from 'react';
import "C:/Users/ICSISTEM/Desktop/VoyagesFE/voyagesFE/src/styles/profile.css"

const getAllDiariesByUserId = async (userId) => {
  try {
    const diaries = await (await axios.get(`http://elacuric-001-site1.ctempurl.com/api/Diaries/user/${userId}`)).data;
    console.log(diaries);
    return diaries;
  } catch (error) {
    console.log(error);
  }
}
const deleteUserHandler = async (userId) => {
  try {
      await axios.delete(`http://elacuric-001-site1.ctempurl.com/api/Users/delete/${userId}`);
      localStorage.removeItem('user');
      window.location.href = '/home';
  } catch (error) {
      console.error('Error deleting user:', error);
  }
}


const Profile = () => {
  const { user, setUserFunction } = useContext(MyContext);
  const [diaries, setDiaries] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userId = storedUser?.user?.id;
  const navigate = useNavigate(); 
  useEffect(() => {
    if (userId) {
      getAllDiariesByUserId(userId).then(diaries => setDiaries(diaries));
    }
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
                <h2>Welcome to Your Unique Travel Log</h2>
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
                        <li className='menuItem'><Link to="/home" onClick={deleteUserHandler} >Delete Account</Link></li>
                    </ul>
                </div>
                <div className='diaries'>
                {
                    diaries && Array.isArray(diaries) && diaries.length > 0 &&
                    diaries.slice().reverse().map((diary, index) => (
                    <PostInFeed key={index} data={diary}/>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile