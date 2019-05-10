import React from 'react';
// import Perf from 'react-addons-perf';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';

import StoreContext from './StoreContext';

class App extends React.PureComponent {

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }

  // state = this.props.store.getState();
  state = this.appState();

  // SUBSCRIBE TO STORE: when state changes

  onStoreChange = () => {
    // pass setState as a callback since the store doesn't need to know component lifecycle, etc
    // this.setState(
    //   this.props.store.getState()
    // );
    this.setState(
      this.appState()
    );
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);

    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextState.articles !== this.state.articles
  //     || nextState.searchTerm !== this.state.searchTerm
  //   )
  // }

  render() {
    let { articles, appSearchTerm } = this.state;

    const searchRE = new RegExp(appSearchTerm, 'i');

    if (appSearchTerm) {
      articles = Object.values(articles).filter(article => article.body.match(searchRE) || article.title.match(searchRE));
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
