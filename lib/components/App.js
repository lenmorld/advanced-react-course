import React from 'react';

// import DataApi from '../DataApi';
import DataApi from 'state-api';
import { data } from '../testData';

import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  // "bridge" from App to Article
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }

  render() {

    const { articles } = this.state;

    return(
      <ArticleList
        articles={articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
