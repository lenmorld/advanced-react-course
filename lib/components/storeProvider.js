// HoC that returns a container component

import React from 'react';
import StoreContext from './StoreContext';

// function that returns another function
// extraProps optional, provide an empty function as default
const storeProvider = (extraProps = () => ({})) => (Component) => {
    class WithStore extends React.PureComponent {

        static contextType = StoreContext;

        onStoreChange = () => {
            this.forceUpdate();
        }

        componentDidMount() {
            this.subscriptionId = this.context.subscribe(this.onStoreChange);
        }
    
        componentWillUnmount() {
            this.context.unsubscribe(this.subscriptionId);
        }

        render() {
            // this.context : thanks to contextType
            return(
                <Component 
                    {...this.props} 
                    {...extraProps(this.context, this.props)}
                    store={this.context} />
            );
        }
    }
    return WithStore;
};

export default storeProvider;

