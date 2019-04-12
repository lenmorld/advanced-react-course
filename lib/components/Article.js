import React from 'react';
import PropTypes from 'prop-types';

import storeProvider from './storeProvider';
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

const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

// combines store data with props, tp isolate Article from store
const extraProps = (store, originalProps) => {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
};

const Article = (props) => {
  const { article } = props;

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

export default storeProvider(extraProps)(Article);
