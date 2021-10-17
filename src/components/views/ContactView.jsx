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
            <div className="contact-header-container" style={{ marginBottom: "3%" }}>
                <h2>
                    Connect With Us
                </h2>
            </div>
            <div className="p-formgroup-inline">
                <div className="p-field">
                    <InputText id="NAME_INLINE" type="text" placeholder="Your Name" />
                </div>
                <div className="p-field">
                    <InputText id="EMAIL_INLINE" type="text" placeholder="Email" />
                </div>
                <div className="p-field">
                    <InputText id="PHONE_INLINE" type="text" placeholder="Phone" />
                </div>
                {/* </div> */}
                {/* <div className="p-formgroup-inline"> */}
                <div className="p-field p-grid">
                    <div className="p-col">
                        <InputText id="PROJECT" type="text" placeholder="Project" />
                    </div>
                </div>
                <div className="p-field p-grid">
                    <div className="p-col">
                        <InputTextarea id="MESSAGE" type="text" placeholder="Message" rows={5} cols={30} autoResize />
                    </div>
                </div>
            </div>
            <Button type="button" label="Send" style={{ backgroundColor: "#2fbd80", border: "none" }} />
        </div>
    );
}

export default ContactView;