import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScrollToTop from '../../components/shared/ScrollToTop'
import PostInFeed from '../../components/feed/PostInFeed'
import axios from "axios";
import { useState, useEffect } from 'react';
import "C:/Users/ICSISTEM/Desktop/VoyagesFE/voyagesFE/src/styles/profile.css"

const getAllDiaries = async () => {
    try {
      const diaries = await (await axios.get('https://localhost:7030/api/Diaries')).data
      console.log(diaries);
      return diaries;
    } catch (error) {
      console.log(error);
    }
  }

const LikedDiaries = () => {
    const [diaries, setDiaries] = useState(null);

    useEffect(() => {
      (
        async () => {
          const data = await getAllDiaries();
          setDiaries([...data]);
        }
      )()
    }, []);
    const navigate = useNavigate();
  return (
    <div>
        <ScrollToTop/>
        <div className='feed'>
            <div className='header'>
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
                        <li className='menuItem'><Link to='/editProfile'>Edit profile</Link></li>
                    </ul>
                </div>
                <div className='diaries'>
                {
                    diaries?.map((diary, index) => (
                    <PostInFeed key={index} data={diary}/>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default LikedDiaries