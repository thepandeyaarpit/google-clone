import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import './Home.css';
import Search from './Search';

const Home = () => {
  return (
    <div className="home">
        <div className="home__header">
            <div className="home__headerLeft">
                <p>About</p>
                <p>Store</p>
            </div>
            <div className="home__headerRight">
                <p>Gmail</p>
                <p>Images</p>
                <AppsIcon />
                <Avatar />
            </div>
        </div>

        <div className="home__body">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />

            <div className="home__inputContainer">
                <Search />
            </div>
        </div>
    </div>
  )
}

export default Home;