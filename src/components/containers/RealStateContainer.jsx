import React from 'react';
import MainView from '../views/MainView';

/**
 * Container class having rendered movie rows 
 * and action calls to fetch required data
 */
class RealStateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleDisplayContactForm = this.handleDisplayContactForm.bind(this);
        this.state = {
            displayContactForm: false,
        }
    }

    handleDisplayContactForm(value) {
        this.setState({
            displayContactForm: value,
        });
    }

    render() {

        return (
            <MainView displayContactForm={this.state.displayContactForm}
                handleDisplayContactForm={this.handleDisplayContactForm} />
        );
    }
}

export default RealStateContainer;