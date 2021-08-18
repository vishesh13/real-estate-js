import React from 'react';
import MainView from '../views/MainView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as netflixActions from '../../actions/netflixAction';

/**
 * Container class having rendered movie rows 
 * and action calls to fetch required data
 */
class RealStateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
    }


    componentDidMount() {
        const { netflixActions } = this.props;
            netflixActions.loadMovieDetails();
    }

    /**
     * handler method to make login request
     */
    handleLoginRequest() {
        const { netflixActions } = this.props;
        netflixActions.loginUser();
    }

    render() {
        const { isLoading, details = [] } = this.props;
        let content = <MainView  />;
        return (
            content
        );
    }
}

const mapStateToProps = state => {
    return {
        details: state.details,
        isLoading: state.isLoading,
    }
};

const mapDispatchToProps = dispatch => ({
    netflixActions: bindActionCreators(netflixActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RealStateContainer);