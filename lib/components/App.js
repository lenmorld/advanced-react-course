import React from 'react';
import axios from 'axios';

// import DataApi from '../DataApi';

import DataApi from 'state-api';
import ArticleList from './ArticleList';

// import { data } from '../testData';
// const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();

    // two possible solutions, init to {} or return Loading when !artciles in render()
    this.state = {
      articles: {},
      authors: {},
    };
  }

  async componentDidMount() {
    const resp = await axios.get('/data');
    // debugger;
    const api = new DataApi(resp.data);

    this.setState({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    });
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
