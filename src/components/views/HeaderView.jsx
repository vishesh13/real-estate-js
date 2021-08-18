import React from 'react';
import './stylesheet.css';

/**
 * Header View component of LoggedIn Page
 * @param originalsData
 * @param img_base_url
 */
const HeaderView = ({ originalsData = [], img_base_url }) => {
    const displayData = originalsData[Math.floor(Math.random() * originalsData.length - 1)];
    return (
        <header className="header-container">
            <div className="header-contents">
                <h1 className="header-content-title">Constructions</h1>
                <div className="header-content-buttons">
                    <button className="header-content-button">Contact US</button>
                    <button className="header-content-button">Projects</button>
                </div>
                <h1 className="header-content-description">We believe a house is not mere bricks and mortar. Neither is it a place
                    where you just live encased in four walls. We believe in homes. The special place that helps you discover the real you. Your life’s focal point beckoning you time and again. Our aim is to partner you in this art of homemaking. Since inception in 1986, we have been creating home and work spaces with a difference,
                    to make good living affordable in Kolkata and Jaipur – now in Mumbai and Bangalore as well.</h1>
            </div>
        </header>
    )
}

export default HeaderView;