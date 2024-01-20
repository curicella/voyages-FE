import React from 'react'
import PostInFeed from "../components/feed/PostInFeed"

const Feed = () => {
  return (
    <div className='feed'>
      <div className='header'> 
        <h2>Feed</h2>      
      </div>
      <PostInFeed/>
      <PostInFeed/>
    </div>
  )
}

export default Feed