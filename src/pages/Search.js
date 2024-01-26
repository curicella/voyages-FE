import React, { useState } from 'react'
import PostInFeed from "../components/feed/PostInFeed"
import ScrollToTop from "../components/shared/ScrollToTop";

const Search = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
        };
      
  return (
    <div>
        <ScrollToTop/>
        <div className='feed'>
            <div className='header'> 
                <h2>Search</h2>      
            </div>
            <input className='searchField' 
                type='text' 
                placeholder='Search...'
                onChange={handleChange}
                value={searchInput}/>
            <PostInFeed/>
            <PostInFeed/>
        </div>
    </div>
  )
}

export default Search