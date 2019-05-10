// HoC that returns a container component

import React from 'react';
import StoreContext from './StoreContext';

// function that returns another function
// extraProps optional, provide an empty function as default
const storeProvider = (extraProps = () => ({})) => (Component) => {
    class WithStore extends React.PureComponent {

        static contextType = StoreContext;

        usedState = () => {
            return extraProps(this.context, this.props);
        }

        state = this.usedState();

        onStoreChange = () => {
            if (this.subscriptionId) {
                // this.forceUpdate();
                this.setState(this.usedState());
            }
        }

        componentDidMount() {
            this.subscriptionId = this.context.subscribe(this.onStoreChange);
        }
    
        componentWillUnmount() {
            this.context.unsubscribe(this.subscriptionId);
            this.subscriptionId = null;
        }

        // inspect what changes in state
        // to find out why the container components are re-rendering
        componentWillUpdate(nextProps, nextState) {
            console.log(this.state, nextState);
        }

        render() {
            // this.context : thanks to contextType
            return(
                <Component 
                    {...this.props} 
                    {...this.usedState()}
                    store={this.context} />
            );
        }
    }
    return WithStore;
};

export default storeProvider;

