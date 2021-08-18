import React from 'react';
import RealStateContainer from '../components/containers/RealStateContainer';
import { Provider } from 'react-redux';
import configureStore from '../store/NetflixStore';

const store = configureStore();
/**
 * Netflix Application class rendering the container
 */
class NetflixApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RealStateContainer />
            </Provider>
        );
    }
}

export default NetflixApplication;