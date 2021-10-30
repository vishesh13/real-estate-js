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
            <img style={{ position: "fixed", objectFit: "contain", right: "20px", width: "30px" }}
                src="/images/icons/homeicon.jpeg" alt="Home" />
                <label className="app-bar-labels" >
                    {"New Howrah Constructions"}
                </label>
                <label style={{ right: "20px" }} className="app-bar-labels">
                    {"9836009826"}
                </label>
            </div>
            {/* <hr style={{ border: "1px solid black" }} /> */}
        </React.Fragment>
    )
}

export default TopView;