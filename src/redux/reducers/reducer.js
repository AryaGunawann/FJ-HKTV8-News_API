import { combineReducers } from "redux";

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_NEWS":
      return action.payload || state; 
    default:
      return state;
  }
};

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return action.payload;
    default:
      return state;
  }
};

const articleBookmarksReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ARTICLE_BOOKMARKS":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  news: newsReducer,
  loading: loadingReducer,
  articleBookmarks: articleBookmarksReducer,
});

export default rootReducer;
