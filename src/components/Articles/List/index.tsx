import React from 'react';
import ArticleType from '../../../types/ArticleType';

interface Props {
  articles: ArticleType[];
}

const Index: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      list
      <pre>
        {JSON.stringify(articles, null, 2)}
      </pre>
    </div>
  )
}

export default Index;
