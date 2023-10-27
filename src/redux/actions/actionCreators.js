import { ActionTypes } from "../constants";

const setNews = (news) => ({
  type: ActionTypes.SET_NEWS,
  payload: news,
});

const setLoading = (loading) => ({
  type: ActionTypes.SET_LOADING,
  payload: loading,
});

const setArticleBookmarks = (articleBookmarks) => ({
  type: ActionTypes.SET_ARTICLE_BOOKMARKS,
  payload: articleBookmarks,
});

export function removeArticleBookmarks(article) {
  // ...
}

export { setNews, setLoading, setArticleBookmarks };
