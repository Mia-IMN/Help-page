import React from 'react';
import Navigation from './Navigation';
import Navbar from './Navbar';
import Search from './Search';

const Homepage = () => {
    return (
        <div className="Homepage">
            <Navigation />
            <Navbar />
            <div className="headText">
                <h3>Hi There, <br /> <span>How can we help?</span></h3>
            </div>
            <Search />
            <p>Common troubleshooting topics: <u>Buy,</u> <u> sell, </u> <u>Advertisement</u></p>
        </div>
    )
}

export default Homepage
