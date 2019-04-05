import React from 'react';

import ArticleList from './ArticleList';

class App extends React.Component {

  state = {
      articles: this.props.initialData.articles,
      authors: this.props.initialData.authors,
  };

  // "bridge" from App to Article
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }

  render() {
    const { articles } = this.state;

    return( 
      <div>
        <h1>LENNY1</h1> 
        <ArticleList
          articles={articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;
