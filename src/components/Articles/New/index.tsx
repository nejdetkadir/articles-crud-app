import React, { useState } from 'react';
import ArticleType from '../../../types/ArticleType';
import { createArticle } from '../../../api';
import { ArticleFormType } from '../../../types/ArticleType';
import ArticleForm from '../Shared/Form';

interface Props {
  articles: ArticleType[];
  setArticles: (articles: ArticleType[]) => void;
}

const initialArticleForm: ArticleFormType = { title: '', content: '' }

const Index: React.FC<Props> = ({ articles, setArticles }) => {
  const [articleForm, setArticleForm] = useState<ArticleFormType>(initialArticleForm)

  const onSubmitForm = () => {
    createArticle(articleForm as ArticleFormType).then(res => {
      setArticles([...articles, res.data as ArticleType]);
      setArticleForm(initialArticleForm);
    }).catch(err => {
      console.log(err.response.data);
    })
  }

  return (
    <div>
      <ArticleForm
        articleForm={articleForm as ArticleFormType}
        setArticleForm={setArticleForm}
        onSubmitForm={onSubmitForm}
      />
    </div>
  )
}

export default Index;
