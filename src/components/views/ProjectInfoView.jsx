import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { COMPLETED_PROJS_DETAILS, ONGOING_PROJS_DETAILS } from "../../constants";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './stylesheet.css';

/**
 * Component returning categorised movie rows
 * @param details 
 */
const ProjectInfoView = () => {

    return (
        <div className="info-block-container">
            <div className="info-header-container">
                <h2>Our Projects</h2>
            </div>
            <div className="card">
                <TabView>
                    <TabPanel header="Ongoing Projects">
                        <div style={{ display: 'flex', flexDirection: 'space-between' }}>
                            {ONGOING_PROJS_DETAILS.map(item => {
                                return (
                                    <Card title={item.name} subTitle={item.type} className="card-image" style={{ marginRight: "2%" }}
                                        header={<img alt="Error" src={item.img_path} />}
                                    >
                                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>
                                            {item.description}
                                        </p>
                                    </Card>
                                )
                            })
                            }
                        </div>
                    </TabPanel>
                    <TabPanel header="Upcoming Projects">
                        <Card title="Project 1" subTitle="Howrah" className="card-image"
                            // footer={footer} 
                            // header={header}
                            >
                            <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                        </Card>
                    </TabPanel>
                    <TabPanel header="Completed Projects">
                        <div style={{ display: 'flex', flexDirection: 'space-between' }}>
                            {COMPLETED_PROJS_DETAILS.map(item => {
                                return (
                                    <Card title={item.name} subTitle={item.type} className="card-image" style={{ marginRight: "2%" }}
                                        header={<img alt="Error" src={item.img_path} />}
                                    >
                                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>
                                            {item.description}
                                        </p>
                                    </Card>
                                )
                            })
                            }
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}

export default ProjectInfoView;