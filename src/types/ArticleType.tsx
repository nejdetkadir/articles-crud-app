export interface ArticleType {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  url: string;
}

export interface ArticleFormType {
  title: string;
  content: string;
}

export interface ArticleResponseType {
  data: ArticleType | null | ArticleType[] | string[];
  status: number;
}

export default ArticleType;
