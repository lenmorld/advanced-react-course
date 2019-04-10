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


const Article = (props) => {
  // const { article, actions } = props;
  const { article, store } = props;



  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const author = store.lookupAuthor(article.authorId);

          return (
            <div style={styles.article}>
              <div style={styles.title}>{article.title}</div>
              <div style={styles.date}>
                {dateDisplay(article.date)}
              </div>
              <div style={styles.author}>
                <a href={author.website}>
                  {author.firstName} {author.lastName}
                </a>
              </div>
              <div style={styles.body}>{article.body}</div>
            </div>
          );
        }
      }
    </StoreContext.Consumer>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};


export default Article;
