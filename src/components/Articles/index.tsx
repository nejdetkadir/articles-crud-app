import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import List from './List';
import New from './New';
import Edit from './Edit';
import Show from './Show';
import ArticleType from '../../types/ArticleType';

const Index: React.FC = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={<List articles={articles} />} />
        <Route
          path='/new'
          element={<New articles={articles} setArticles={setArticles} />} />
        <Route
          path=':id'
          element={<Show />}
          />
        <Route
          path=':id/edit'
          element={<Edit />}
          />
      </Route>
    </Routes>)
}

export default Index;
