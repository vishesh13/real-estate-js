import React, { useState, useEffect } from 'react';
import './stylesheet.css';

/**
 * Header View component of LoggedIn Page
 * @param originalsData
 * @param img_base_url
 */
const TopView = ({ originalsData = [], img_base_url }) => {
    const [displayScrollEffect, handleScrollEffect] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? handleScrollEffect(true) : handleScrollEffect(false);
        })
        return () => {
            window.removeEventListener("scroll", null);
        }
    }, []);
    return (
        <div className={`app-bar ${displayScrollEffect && "container"}`}>
            <label className="app-bar-labels" >
                {"New Howrah Constructions"}
            </label>
            <label style={{ right: "20px" }} className="app-bar-labels">
                {"9836009826"}
            </label>
        </div>
    )
}

export default TopView;