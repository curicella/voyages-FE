import React from 'react'
import PostInFeed from "../components/feed/PostInFeed"
import ScrollToTop from "../components/shared/ScrollToTop";

const Feed = () => {
  return (
    <>
    <ScrollToTop/>
    <div className='feed'>
      <div className='header'> 
        <h2>Feed</h2>      
      </div>
      <PostInFeed/>
      <PostInFeed/>
    </div>
    </>
  )
}

export default Feed