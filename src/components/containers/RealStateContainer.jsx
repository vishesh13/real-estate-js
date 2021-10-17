import React from 'react';
import emailjs from 'emailjs-com';
import MainView from '../views/MainView';

/**
 * Container class having rendered movie rows 
 * and action calls to fetch required data
 */
class RealStateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDisplayContactForm = this.handleDisplayContactForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSendEmail = this.handleSendEmail.bind(this);
        this.state = {
            displayContactForm: false,
            emailDetails: {},
            // name: '',
            // email: '',
            // phone: '',
            // project: '',
            // message: '',
        };
    }

    handleInputChange(e) {
        if (e) {
            this.setState(({
                emailDetails: {
                    ...this.state.emailDetails,
                    [e.target.id]: e.target.value,
                },
            }));
        }
    }

    handleDisplayContactForm(value) {
        this.setState({
            displayContactForm: value,
        });
    }

    handleSendEmail(e) {
        e.preventDefault();

        emailjs.send('service_cgburhe', 'template_pqqfakc', this.state.emailDetails, 'user_EpUgqoDGBiiBVCZ4UnLYP')
            .then((result) => {
                // console.log(result.text);
                this.setState({
                    displayContactForm: false,
                });
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {

        return (
            <MainView
                displayContactForm={this.state.displayContactForm}
                handleDisplayContactForm={this.handleDisplayContactForm}
                handleInputChange={this.handleInputChange}
                handleSendEmail={this.handleSendEmail}
            />
        );
    }
}

export default RealStateContainer;