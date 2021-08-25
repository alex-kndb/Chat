import { REQUEST_STATUS } from "../../const";

export const selectArticles = (state) => state.articles.data;
export const selectArticlesLoading = (state) => state.articles.request.status === REQUEST_STATUS.PENDING;
export const selectArticlesError = (state) => state.articles.request.error;
