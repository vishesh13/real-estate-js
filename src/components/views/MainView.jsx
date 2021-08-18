import React from 'react';
import { requests } from '../../helpers/utilities';
import TopView from './TopView';
import HeaderView from './HeaderView';
import ProjectInfoView from './ProjectInfoView';
import './stylesheet.css';

/**
 * Component returning categorised movie rows
 * @param details 
 */
const MainView = (props) => {
    const img_base_url = 'https://image.tmdb.org/t/p/original';
    return (
        <div className="container">
            <TopView />
            <HeaderView img_base_url={img_base_url} />
            <ProjectInfoView />
        </div>
    )
}

export default MainView;