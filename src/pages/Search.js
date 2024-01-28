import React, { useState } from 'react'
import PostInFeed from "../components/feed/PostInFeed"
import ScrollToTop from "../components/shared/ScrollToTop";
import "C:/Users/ICSISTEM/Desktop/VoyagesFE/voyagesFE/src/styles/feed.css"
import sortByProperty from "../additionals/utils";

const sortOptions = [
    { title: "Number of Likes", property: "likes" },
    { title: "Rating", property: "rating" }
  ];

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [sortType, setSortType] = useState(sortOptions[0]);
    const [actBtn, setActBtn] = useState(sortOptions[0])

    const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
        };
      
  return (
    <div>
        <ScrollToTop/>
        <div className='feed'>
            <div className='header'> 
                <h2>Uncover Hidden Gems</h2>      
            </div>
            <div className="searchContainer">
                <input 
                className="searchInput" 
                type="text" 
                placeholder="Search"
                onChange={handleChange}
                value={searchInput}/>

            </div>
            <PostInFeed/>
            <PostInFeed/>
        </div>
    </div>
  )
}

export default Search