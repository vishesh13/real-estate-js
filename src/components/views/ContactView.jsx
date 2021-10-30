import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './stylesheet.css';

const ContactView = () => {
    return (
        <div className="contact-block-container">
            <div className="contact-header-container">
                <h2>
                    Connect With Us
                </h2>
            </div>
            <React.Fragment>
                <div className="form-col">
                    <InputText id="NAME_INLINE" type="text" placeholder="Your Name" style={{ marginRight: "2%" }} />
                    <InputText id="EMAIL_INLINE" type="text" placeholder="Email" />
                </div>
                <div className="form-col">
                    <InputText id="PHONE_INLINE" type="text" placeholder="Phone" style={{ marginRight: "2%" }} />
                    <InputText id="PROJECT" type="text" placeholder="Project" />
                </div>
                <div className="form-col">
                    <InputTextarea id="MESSAGE" type="text" placeholder="Message" rows={5} cols={30} autoResize />
                    <Button type="button" label="Send" id="SEND_QUERY_BTN" />
                </div>
            </React.Fragment>
        </div>
    );
}

export default ContactView;