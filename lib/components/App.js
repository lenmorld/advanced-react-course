import React from 'react';

import ArticleList from './ArticleList';

class App extends React.Component {
  constructor(props) {
    super(props);

    // must get data as props from dom and server rendering
    this.state = this.props.store.getState();
    // this.state = {
    //   articles: this.props.initialData.articles,
    //   authors: this.props.initialData.authors,
    // };
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
