import React from 'react';

import DataApi from '../DataApi';
import { data } from '../testData';

import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    }
    console.log(this.state);
  }

  // create "bridge" object that defines the actions passed
  // from parent (doing the API fetch, logic) to the child (presentation)
  // lookupAuthor, updateRating
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }

  render() {

    const { articles, authors } = this.state;

    return(
      <ArticleList
        articles={articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
