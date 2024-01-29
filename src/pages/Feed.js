import React from 'react'
import 'C:/Users/ICSISTEM/Desktop/VoyagesFE/voyagesFE/src/styles/feed.css'
import PostInFeed from "../components/feed/PostInFeed"
import ScrollToTop from "../components/shared/ScrollToTop";
import axios from 'axios';
import { useState, useEffect } from 'react';

const getAllDiaries = async () => {
  try {
    const diaries = await (await axios.get('http://elacuric-001-site1.ctempurl.com/api/Diaries')).data
    console.log(diaries);
    return diaries;
  } catch (error) {
    console.log(error);
  }
}

const Feed = () => {
  const [diaries, setDiaries] = useState(null);

  useEffect(() => {
    (
      async () => {
        const data = await getAllDiaries();
        setDiaries([...data]);
      }
    )()
  }, []);

  return (
    <>
    <ScrollToTop/>
    <div className='feed'>
      <div className='header'> 
        <h2>Never Miss a Beat: Feed Edition</h2>      
      </div>

      {
        diaries && Array.isArray(diaries) && diaries.length > 0 &&
        diaries.slice().reverse().map((diary, index) => (
          <PostInFeed key={index} data={diary} />
        ))
      }
    </div>
    </>
  )
}

export default Feed