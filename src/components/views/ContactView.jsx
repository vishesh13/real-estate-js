import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './stylesheet.css';

const ContactView = () => {
    return (
        <div className="conatct-block-container">
            <label className="p-col-fixed" style={{ width: '100px' }}>
                Connect With Us
            </label>
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
            <Button type="button" label="Send" />
        </div>
    );
}

export default ContactView;