import React, { useState, useEffect } from 'react';
import './stylesheet.css';

/**
 * Header View component of LoggedIn Page
 * @param originalsData
 * @param img_base_url
 */
const TopView = () => {
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
        <React.Fragment>
            <div className={`app-bar ${displayScrollEffect && "container"}`}>
                <div>
                    <img className="app-bar-home-icon"
                        src="/images/icons/homeicon.png" alt="Home" />
                    <label className="app-bar-labels" >
                        {"New Howrah Constructions"}
                    </label>
                </div>
                <div>
                    <img className="app-bar-call-icon"
                        src="/images/icons/call.png" alt="Home" />
                    <label style={{ right: "20px" }} className="app-bar-labels">
                        {"9836009826"}
                    </label>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TopView;