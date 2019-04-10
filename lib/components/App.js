import React from 'react';

import ArticleList from './ArticleList';

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
        <ArticleList
          articles={this.state.articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;
