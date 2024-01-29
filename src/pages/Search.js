import React, { useState, useEffect, useMemo } from 'react';
import PostInFeed from "../components/feed/PostInFeed";
import ScrollToTop from "../components/shared/ScrollToTop";
import axios from 'axios';

const getAllDiaries = async () => {
    try {
        const diaries = await (await axios.get('http://elacuric-001-site1.ctempurl.com/api/Diaries')).data;
        return diaries;
    } catch (error) {
        console.log(error);
        return [];
    }
}

const sortOptions = [
    { title: "Most Recently Added", property: "most_recent" },
    { title: "Least Recently Added", property: "least_recent" },
    { title: "Number of Likes", property: "likes" },
    { title: "Rating", property: "rating" }
];

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [sortType, setSortType] = useState("Most Recently Added");
    const [diaries, setDiaries] = useState(null);

    useEffect(() => {
        (
            async () => {
                const data = await getAllDiaries();
                setDiaries(data);
            }
        )()
    }, []);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const changeSortType = (e) => {
        setSortType(e.target.value);
    };

    const sortDiaries = (prop, filteredDiaries) => {
        if (!Array.isArray(filteredDiaries)) {
            console.error('filteredDiaries is not an array');
            return [];
        }

        const sortedDiaries = [...filteredDiaries];
        switch(prop) {
            case 'Most Recently Added':
                sortedDiaries.sort((a, b) => b.id - a.id);
                break;
            case 'Least Recently Added':
                sortedDiaries.sort((a, b) => a.id - b.id);
                break;
            case 'Number of Likes':
                sortedDiaries.sort((a, b) => b.likes - a.likes);
                break;
            case 'Rating':
                sortedDiaries.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }
        return sortedDiaries;
    };

    const filteredAndSortedDiaries = useMemo(() => {
        let filteredDiaries = diaries || [];
        if (searchInput) {
            const searchQuery = searchInput.toLowerCase();
            filteredDiaries = filteredDiaries.filter(diary => {
                const beginningOfTitle = diary.title.slice(0, searchQuery.length).toLowerCase();
                return beginningOfTitle === searchQuery;
            });
        }
        return sortDiaries(sortType, filteredDiaries);
    }, [diaries, searchInput, sortType]);
    
    return (
        <div>
            <ScrollToTop/>
            <div className='feed'>
                <div className='header'> 
                    <h2>Uncover Hidden Gems</h2>      
                </div>
                <div className="searchContainer">
                    <div className='searchBox'>
                        <input 
                            className="searchInput" 
                            type="text" 
                            placeholder="What are you looking for"
                            onChange={handleChange}
                            value={searchInput}
                        />
                    </div>
                    <div className='sortBtn'>
                        <p>Sort: </p>
                        <select value={sortType} onChange={changeSortType}>
                            {sortOptions.map(({ title }, index) => (
                                <option key={index} value={title}>{title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='results'>
                    {filteredAndSortedDiaries.length === 0 ? (
                        <p>No results found</p>
                    ) : (
                        filteredAndSortedDiaries.map((diary, index) => (
                            <PostInFeed key={index} data={diary}/>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
