import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {useStateValue } from '../StateProvider.jsx';
import {actionTypes} from '../reducer';

function Search({hidebuttons}) {

    const[{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");

    const history = useHistory();

    const search=(e)=>{
        e.preventDefault();
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        history.push("/search")
    }

    return(
        <form className="search">
            <div className="search__input">
                <SearchIcon className="searchIcon" />
                <input value={input} onChange={e=>setInput(e.target.value)} />
                <MicIcon />
            </div> 
        {
            !hidebuttons ? (<div className="search__buttons">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>) : (<div className="search__buttons" style={{display:'none'}}>
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            </div>)
        }
               
        </form>

    )
}

export default Search;