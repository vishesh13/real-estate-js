import React from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './stylesheet.css';

const ContactFormView = (props) => {
    const { displayContactForm, handleDisplayContactForm, handleInputChange, handleSendEmail } = props;
    return (
        <React.Fragment>
            <Dialog header="Enquiry Form" visible={displayContactForm} modal={false} style={{
                width: '35vw',
                border: "2px solid black"
            }}
                onHide={() => handleDisplayContactForm(false)}>
                <div className="p-field p-grid">
                    <div className="p-col">
                        <InputText id="name" type="text" onChange={handleInputChange} placeholder="Your Name" />
                    </div>
                </div>
                <div className="p-field p-grid">
                    <div className="p-col">
                        <InputText id="email" type="text" onChange={handleInputChange} placeholder="Email" />
                    </div>
                </div>
                <div className="p-field p-grid">
                    <div className="p-col">
                        <InputText id="phone" type="text" onChange={handleInputChange} placeholder="Phone" />
                    </div>
                </div>
                <div className="p-field p-grid">
                    <div className="p-col">
                        <InputText id="project" type="text" onChange={handleInputChange} placeholder="Project" />
                    </div>
                </div>
                <div className="p-field p-grid">
                    <div className="p-col">
                        <InputTextarea id="message" type="text" onChange={handleInputChange} placeholder="Message" rows={5} cols={30} autoResize/>
                    </div>
                </div>
                <div className="p-field p-grid">
                    <div className="p-col" className="form-send-btn">
                        <Button type="button" label="Send" onClick={handleSendEmail} style={{ marginLeft: "10%" }}/>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    )
}

export default ContactFormView;