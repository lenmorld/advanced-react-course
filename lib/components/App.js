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

  render() {

    const { articles, authors } = this.state;

    return(
      <ArticleList
        articles={articles}
        authors={authors}
      />
    );
  }
}

export default App;
