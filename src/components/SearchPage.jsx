import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import './SearchPage.css';
import {useStateValue} from '../StateProvider.jsx';
import useGoogleSearch from '../useGoogleSearch.jsx';

function SearchPage(){

    const [{term}] = useStateValue();
    
    const { data } = useGoogleSearch(term);
    console.log(term);

    return(
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to="/">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
                </Link>

                <div className="searchPage__headerBody">
                    <Search hidebuttons />

                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className='searchPage_option'>
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage_option'>
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div className='searchPage_option'>
                                <ImageIcon />
                                <Link to="/all">Images</Link>
                            </div>
                            <div className='searchPage_option'>
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className='searchPage_option'>
                                <RoomIcon />
                                <Link to="/all">Maps</Link>
                            </div>
                            <div className='searchPage_option'>
                                <MoreVertIcon />
                                <Link to="/all">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className='searchPage_option'>
                                <Link to="/settings">Setting</Link>
                            </div>
                            <div className='searchPage_option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                term &&(

            <div className='searchPage__results'>
                <p className='searchPage__resultCount'>
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
                </p>


                {
                    data?.items.map((item)=>(
                         <div className="searchPage__result">
                            <a href={item.link} className="searchPage__resultLink">
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                <img src={item.pagemap?.cse_image[0]?.src} className='searchPage__resultImage' />
                            )}
                                
                                {item.displayLink}
                            </a>
                            <a href={item.link} className="searchPage__resultTitle" >
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultdescription">{item.snippet}</p>
                        </div>
                    ))
                }

            </div>)
            }
        </div>
    )
}

export default SearchPage;