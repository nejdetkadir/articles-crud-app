import React, { useState } from 'react';
import ArticleType from '../../../types/ArticleType';
import { useParams } from 'react-router-dom';

const Index: React.FC = () => {
  const [articleForm, setArticleForm] = useState<ArticleType>()

  const { id } = useParams();

  return (
    <div>
      edit
    </div>
  )
}

export default Index;
