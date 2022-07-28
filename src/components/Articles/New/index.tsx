import React from 'react';
import ArticleType from '../../../types/ArticleType';

interface Props {
  articles: ArticleType[];
  setArticles: (articles: ArticleType[]) => void;
}

const Index: React.FC<Props> = ({ articles, setArticles }) => {
  return (
    <div>
      new
    </div>
  )
}

export default Index;
