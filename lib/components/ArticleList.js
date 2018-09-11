import React from 'react';

import Article from './article';

const ArticleList = (props) => {

  // for testing, have to know dependencies
  // e.g. props.articles

  return(
    <div>
      {Object.values(props.articles).map(article =>
        <Article
          key={article.id}
          article={article}
          store={props.store}
        />
      )}
    </div>
  );
};

export default ArticleList;
