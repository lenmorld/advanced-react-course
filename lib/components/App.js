import React from 'react';
import axios from 'axios';

import DataApi from './StateApi';
// import { data } from '../testData';
// const api = new DataApi(data);

import ArticleList from './ArticleList';

class App extends React.Component {

  state = {
      articles: this.props.initialData.articles,
      authors: this.props.initialData.authors,
  };

  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(() => {
      return {
        articles: api.getArticles(),
        authors: api.getAuthors()
      }
    })
  }

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
