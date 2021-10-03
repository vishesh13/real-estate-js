import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './stylesheet.css';

/**
 * Header View component of LoggedIn Page
 * @param originalsData
 * @param img_base_url
 */
const HeaderView = (props) => {
    const { handleDisplayContactForm } = props;
    return (
        <header className="header-container">
            <div className="header-contents">
                <h1 className="header-content-title">New Howrah Constructions</h1>
                <div className="header-content-buttons">
                    <button className="header-content-button" onClick={() => handleDisplayContactForm(true)}>
                        Contact US
                    </button>
                    <button className="header-content-button">Projects</button>
                </div>
                <h1 className="header-content-description">
                    We all know Housing is one the important and developing sector all over the world. Most of the
                    developing nations is yet to build housing for all, but our company is focusing on Affordability, low
                    cost and housing for all since its incorporation. These 3 pillars have been the foundation of the
                    company. It became huge success when company implemented it and incorporated into ongoing
                    projects.
                    Today, Ishanika Developers Pvt Ltd has become a household name in South Howrah. With our 3+
                    ongoing projects in South Howrah, it has gained popularity and created a huge demand for low-cost
                    housing.
                </h1>
            </div>
        </header>
    )
}

export default HeaderView;