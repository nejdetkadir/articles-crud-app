import React, { useEffect} from 'react';
import { ArticleType } from '../../../types/ArticleType';
import { getArticles } from "./../../../api"

interface Props {
  articles: ArticleType[];
  setArticles: (articles: ArticleType[]) => void;
}

const Index: React.FC<Props> = ({ articles, setArticles }) => {
  useEffect(() => {
    getArticles().then(res => { setArticles(res.data as ArticleType[])});
  }, []);

  return (
    <div>
      <pre>
        {JSON.stringify(articles, null, 2)}
      </pre>
    </div>
  )
}

export default Index;
