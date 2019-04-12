// HoC that returns a container component

import React from 'react';
import StoreContext from './StoreContext';

// function that returns another function
const storeProvider = (extraProps) => (Component) => {
    const WithStore = (props) => (
        <StoreContext.Consumer>
            {
                (store) => (
                    <Component 
                        {...props} 
                        {...extraProps(store, props)}
                        store={store} />
                )
            }
        </StoreContext.Consumer>
    )
    return WithStore;
};

export default storeProvider;

