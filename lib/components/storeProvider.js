// HoC that returns a container component

import React from 'react';
import StoreContext from './StoreContext';

// function that returns another function
const storeProvider = (extraProps) => (Component) => {

    // class WithStore extends React.Component {

    // time stops if PureComponent: no change in state/props
    class WithStore extends React.PureComponent {

        static contextType = StoreContext;

        onStoreChange = () => {
            // this.setState
            
            this.forceUpdate();
        }

        componentDidMount() {
            // this.context = store
            this.subscriptionId = this.context.subscribe(this.onStoreChange);
        }
    
        componentWillUnmount() {
            this.context.unsubscribe(this.subscriptionId);
        }

        render() {
            // this.props
            // this.context : thanks to contextType
            return(
                <Component 
                    {...this.props} 
                    {...extraProps(this.context, this.props)}
                    store={this.context} />
            );
        }
    }

    // const WithStore = (props) => (
    //     <StoreContext.Consumer>
    //         {
    //             (store) => (
    //                 <Component 
    //                     {...props} 
    //                     {...extraProps(store, props)}
    //                     store={store} />
    //             )
    //         }
    //     </StoreContext.Consumer>
    // )
    return WithStore;
};

export default storeProvider;

