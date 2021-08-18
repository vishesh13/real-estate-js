import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './stylesheet.css';

/**
 * Component returning categorised movie rows
 * @param details 
 */
const ProjectInfoView = (props) => {
    const img_base_url = 'https://image.tmdb.org/t/p/original';
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const header = (
        <img alt="Card" src="showcase/demo/images/usercard.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );

    return (
        <div className="proj-block-container">
            <div className="proj-info-container">
                <h2>Our Projects</h2>
            </div>
            <div className="card">
                <TabView>
                    <TabPanel header="Ongoing Projects">
                        <div style={{ display: 'flex', flexDirection: 'space-between' }}>
                            <Card title="Project 1" subTitle="Howrah" className="card-image" style={{ marginRight: "2%" }}
                                // footer={footer} 
                                header={header}>
                                <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            </Card>
                            <Card title="Project 2" subTitle="Howrah" className="card-image" style={{ marginRight: "2%" }}
                                // footer={footer} 
                                header={header}>
                                <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            </Card>
                            <Card title="Project 3" subTitle="Howrah" className="card-image" style={{ marginRight: "2%" }}
                                // footer={footer} 
                                header={header}>
                                <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                            </Card>
                        </div>
                    </TabPanel>
                    <TabPanel header="Upcoming Projects">
                        <Card title="Project 1" subTitle="Howrah" className="card-image"
                            // footer={footer} 
                            header={header}>
                            <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                        </Card>
                    </TabPanel>
                    <TabPanel header="Completed Projects">
                        <Card title="Project 1" subTitle="Howrah" className="card-image"
                            // footer={footer} 
                            header={header}>
                            <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                        </Card>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}

export default ProjectInfoView;