// HoC that returns a container component

import React from 'react';
import StoreContext from './StoreContext';

const storeProvider = (Component) => {
    const WithStore = (props) => (
        <StoreContext.Consumer>
            {
                (store) => (
                    <Component {...props} store={store} />
                )
            }
        </StoreContext.Consumer>
    )

    // WithStore.contextTypes

    return WithStore;
};

/*
also possible to do this with Class component

why? - possibility to use lifecyle methods

const storeProvider = (Component) => {
    return class extends React.Component {
        ...
        render() {
            return(
                <StoreContext.Consumer>
                ...
            )
        }
    }

*/


export default storeProvider;

