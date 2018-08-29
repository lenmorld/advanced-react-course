import React from 'react';

// Javascript API for working with CSS styles
// global top-level since if inside the Article object,
// it will be created every single time
// an instance is created
const styles = {
  article: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    padding: '20px',
  },
  title: {

  },
  date: {

  },
  author: {

  },
  body: {

  }
};

// since this does not depend on any component data,
// its ok for it to be here
const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();


const Article = (props) => {
  const { article, actions } = props;

  const author = actions.lookupAuthor(article.authorId);

  // !!! EVERYTIME this instace is rendered, re-rendered
  // function is created here!
  // const dateDisplay = (dateString) =>
  //   new Date(dateString).toDateString();

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
};

export default Article;
