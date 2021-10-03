import React from 'react';
import TopView from './TopView';
import HeaderView from './HeaderView';
import OurMissionView from './OurMissionView';
import ProjectInfoView from './ProjectInfoView';
import ContactView from './ContactView';
import ContactFormView from './ContactFormView';
import './stylesheet.css';

/**
 * Component returning categorised movie rows
 * @param details 
 */
const MainView = (props) => {
    const { displayContactForm, handleDisplayContactForm } = props;
    return (
        <div className="container">
            <TopView />
            <HeaderView handleDisplayContactForm={handleDisplayContactForm} />
            <OurMissionView />
            <ProjectInfoView />
            <ContactView />
            <ContactFormView displayContactForm={displayContactForm} handleDisplayContactForm={handleDisplayContactForm} />
        </div>
    )
}

export default MainView;