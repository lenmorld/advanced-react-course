import React from 'react';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';

import StoreContext from './StoreContext';

class App extends React.Component {

  state = this.props.store.getState();

  // SUBSCRIBE TO STORE: when state changes

  onStoreChange = () => {
    // pass setState as a callback since the store doesn't need to know component lifecycle, etc
    this.setState(
      this.props.store.getState()
    );
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);

    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, appSearchTerm } = this.state;

    const searchRE = new RegExp(appSearchTerm, 'i');

    if (appSearchTerm) {
      articles = Object.values(articles).filter(article => article.body.match(appSearchTerm) || article.title.match(appSearchTerm));
    }

    return( 
      <div>
        <h1>LENNY1</h1> 
        <StoreContext.Provider value={this.props.store}>
          <TimeStamp />

          <SearchBar />
          <ArticleList
            articles={articles}
            store={this.props.store}
          />
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;
