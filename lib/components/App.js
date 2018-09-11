import React from 'react';
import axios from 'axios';

// import DataApi from '../DataApi';

import DataApi from 'state-api';
import ArticleList from './ArticleList';

// import { data } from '../testData';
// const api = new DataApi(data);

class App extends React.Component {
  constructor(props) {
    super(props);

    // two possible solutions, init to {} or return Loading when !artciles in render()
    // this.state = {
    //   articles: {},
    //   authors: {},
    // };

    // must get data as props from dom and server rendering
    this.state = {
      articles: this.props.initialData.articles,
      authors: this.props.initialData.authors,
    };
  }

  //--> avoid fetching twice
  // handle in dom.js renderer

  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data);

  //   this.setState({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors(),
  //   });
  // }

  // "bridge" from App to Article
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }

  render() {
    // !!! render() is called 2 times, first with empty, second with the fetched articles

    debugger;
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
