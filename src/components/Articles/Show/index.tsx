import React, { useState } from 'react';
import ArticleType from '../../../types/ArticleType';
import { useParams } from 'react-router-dom';

const Index: React.FC = () => {
  const [article, setArticle] = useState<ArticleType>()

  const { id } = useParams();

  return (
    <div>
      show
    </div>
  )
}

export default Index;
