import React from 'react';
import PropTypes from 'prop-types';

import StoreContext from './StoreContext';

const styles = {
  article: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    padding: '21px',
  },
  title: {},
  date: {},
  author: {},
  body: {}
};

// only instantiate once
const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const ArticleContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => (
          <Article {...props} store={store} />
        )
      }
    </StoreContext.Consumer>
  );
}

const Article = (props) => {
  // const { article, actions } = props;
  const { article, store } = props;

  const author = store.lookupAuthor(article.authorId);

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};

export default ArticleContainer;
