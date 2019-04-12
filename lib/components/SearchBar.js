import React from 'react';

const debounce = (fn, delay, ...args) => {
    let timeout;

    return () => {
        const fnCall = () => fn.apply(this, args);

        clearTimeout(timeout);
        timeout = setTimeout(fnCall, delay);
    }
}

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    doSearch = debounce(() => {
        console.log(this.state.searchTerm);
        // perform the doSearch passed by parent

        this.props.doSearch(this.state.searchTerm);
    }, 1000);

    handleSearch(event) {
        // console.log(this.searchInput.value);

        this.setState({
            searchTerm: event.target.value
        }, () => {  // execute async after setState
            this.doSearch();
        });
    }

    // callback ref
    // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs

    /*
           eventHandler() {
               do something with this.searchInput
               console.log(this.searchInput.value);
           }

            <input 
                ref={(element) => this.searchInput = element}
                ...
    */

    // but let's just make it a Controlled component for now
    // instead of a ref

    render() {
        return(
            <input 
                type="search"
                placeholder="Enter search item"
                onChange={this.handleSearch}
                value={this.state.searchTerm}
            />
        );
    }
}

export default SearchBar;