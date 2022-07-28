import React, { useState, useEffect } from 'react';
import { ArticleFormType } from '../../../types/ArticleType';
import { useParams } from 'react-router-dom';
import { getArticle, updateArticle } from '../../../api';
import ArticleForm from '../Shared/Form';

const Index: React.FC = () => {
  const [articleForm, setArticleForm] = useState<ArticleFormType>()

  const { id } = useParams();

  useEffect(() => {
    getArticle(id).then(res => { setArticleForm(res.data)});
  }, [id])

  const onSubmitForm = () => {
    updateArticle(id, articleForm as ArticleFormType).then(res => {
      setArticleForm(res.data as ArticleFormType)
    })
  }

  return (
    <div>
      {
        articleForm &&
        <ArticleForm
          articleForm={articleForm as ArticleFormType}
          setArticleForm={setArticleForm}
          onSubmitForm={onSubmitForm}
        />
      }
    </div>
  )
}

export default Index;
