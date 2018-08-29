import React from 'react';

import Article from './article';

const ArticleList = (props) => {

  // acts as a relay from App to Article : actions
  // ArticleList is oblivious to changes in articleActions

  return(
    <div>
      {Object.values(props.articles).map(article =>
        <Article
          key={article.id}
          article={article}
          actions={props.articleActions}
        />
      )}
    </div>
  );
};

export default ArticleList;
