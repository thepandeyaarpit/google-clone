import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';

function Search({hidebuttons}) {
    return(
        <form className="search">
            <div className="search__input">
                <SearchIcon className="searchIcon" />
                <input />
                <MicIcon />
            </div> 
        {
            !hidebuttons && <div className="search__buttons">
                <Button type="submit" variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        }
               
        </form>

    )
}

export default Search;