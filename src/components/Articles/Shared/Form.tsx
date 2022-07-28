import React from 'react';
import { ArticleFormType } from '../../../types/ArticleType';

interface Props {
  articleForm: ArticleFormType
  setArticleForm: (articleForm: ArticleFormType) => void;
  onSubmitForm: () => void;
}

const Form: React.FC<Props> = ({ articleForm, setArticleForm, onSubmitForm }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitForm();
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArticleForm({ ...articleForm, [name]: value });
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="title"
          value={articleForm.title}
          onChange={onChange}
        />

        <textarea
          name="content"
          value={articleForm.content}
          onChange={onChange}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div >
  )
}

export default Form;
