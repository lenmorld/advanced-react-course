import React from 'react';

import Article from './Article';

const ArticleList = (props) => {

  // for testing, have to know dependencies
  // e.g. props.articles

  // moved actions={props.articleActions} to store

  return(
    <div>
      {Object.values(props.articles).map(article =>
        <Article
          key={article.id}
          article={article}
        />
      )}
    </div>
  );
};

export default ArticleList;
