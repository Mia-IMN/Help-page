import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className="Search">
            <input type="text" name="search" id="search" placeholder="Search help topics or articles" />
            <SearchIcon className="searchicon"/>
        </div>
    )
}

export default Search
