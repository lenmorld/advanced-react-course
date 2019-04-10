import React from 'react';

import ArticleList from './ArticleList';

import StoreContext from './StoreContext';

class App extends React.Component {

  // state = {
  //     articles: this.props.initialData.articles,
  //     authors: this.props.initialData.authors,
  // };

  state = this.props.store.getState();

  render() {
    return( 
      <div>
        <h1>LENNY1</h1> 
        <StoreContext.Provider value={this.props.store}>
          <ArticleList
            articles={this.state.articles}
            store={this.props.store}
          />
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;
