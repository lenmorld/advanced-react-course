import React from 'react';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

import StoreContext from './StoreContext';

class App extends React.Component {

  state = this.props.store.getState();

  setSearchTerm = (appSearchTerm) => {
    this.setState({
      appSearchTerm
    })
  }

  render() {
    let { articles, appSearchTerm } = this.state;
    if (appSearchTerm) {
      articles = Object.values(articles).filter(article => article.body.includes(appSearchTerm.toLowerCase()) || article.title.includes(appSearchTerm.toLowerCase())   );
    }

    return( 
      <div>
        <h1>LENNY1</h1> 
        <StoreContext.Provider value={this.props.store}>
          <SearchBar doSearch={this.setSearchTerm}/>
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
