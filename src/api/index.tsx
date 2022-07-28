import axios from "axios";
import { ArticleFormType, ArticleType, ArticleResponseType } from "../types/ArticleType";

axios.defaults.baseURL = 'https://fe-article-api.herokuapp.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';


export const getArticles = async () : Promise<ArticleResponseType> => {
  const response = await axios.get('/articles');
  return { data: response.data, status: response.status }
}

export const getArticle = async (id: string) => {
  const response = await axios.get(`/articles/${id}`);
  return { data: response.data, status: response.status }
}

export const createArticle = async (article: ArticleFormType) : Promise<ArticleResponseType> => {
  const response = await axios.post('/articles', article);
  return { data: response.data, status: response.status }
}

export const updateArticle = async (id: string, article: ArticleFormType) : Promise<ArticleResponseType> => {
  const response = await axios.patch(`/articles/${id}`, article);
  return { data: response.data, status: response.status }
}

export const deleteArticle = async (id: string) : Promise<ArticleResponseType> => {
  const response = await axios.delete(`/articles/${id}`);
  return response.data;
}  
