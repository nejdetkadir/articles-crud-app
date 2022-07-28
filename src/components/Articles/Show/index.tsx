import React, { useState, useEffect } from 'react';
import { ArticleType } from '../../../types/ArticleType';
import { useParams } from 'react-router-dom';
import { getArticle } from '../../../api';

const Index: React.FC = () => {
  const [article, setArticle] = useState<ArticleType>()

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getArticle(id).then(res => { setArticle(res.data as ArticleType)});
  }, [id])

  return (
    <div>
      <pre>
        {JSON.stringify(article, null, 2)}
      </pre>
    </div>
  )
}

export default Index;
