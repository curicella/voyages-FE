import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScrollToTop from '../components/shared/ScrollToTop'
import PostInFeed from '../components/feed/PostInFeed'
import "C:/Users/ICSISTEM/Desktop/VoyagesFE/voyagesFE/src/styles/profile.css"

const Profile = () => {
    const navigate = useNavigate();
  return (
    <div>
        <ScrollToTop/>
        <div className='feed'>
            <div className='header'>
                <h2>My Profile</h2>
            </div>
            <div className='profileHeader'> 
                <div className='showDiaries' onClick={() => (
                    navigate("/profile/myDiaries")
                )}>
                    <Link>My Diaries</Link>
                </div>
                <div className='showDiaries'>
                    <Link>Liked Diaries</Link>
                </div>
            </div>
            <PostInFeed/>
            <PostInFeed/>
        </div>
    </div>
  )
}

export default Profile