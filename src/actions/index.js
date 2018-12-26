import axios from "axios";

//const URL = `http://chetor.com/wp-json/wp/v2/posts?_embed&page=1`;

export function articlesListAll(URL) {
  const request = axios.get(`${URL}`).then(response => response.data);

  return {
    type: "GET_ARTICLES_ALL",
    payload: request
  };
}

export function articlesListMore(URL) {
  const request = axios.get(`${URL}`).then(response => response.data);

  return {
    type: "GET_ARTICLES_MORE",
    payload: request
  };
}

export function latestURL(URL) {
  return {
    type: "LATEST_URL",
    payload: URL
  };
}

export function loadFalser() {
  return {
    type: "LOAD_FALSER",
    payload: null
  };
}

export function loadMoreFalser() {
  return {
    type: "LOAD_MORE_FALSER",
    payload: null
  };
}

export function incrementLoadedPage(pageNum) {
  return {
    type: "INCREMENT_LOADED_PAGE",
    payload: pageNum + 1
  };
}

export function getSingleArticle(URL) {
  const request = axios.get(`${URL}`).then(response => response.data);

  return {
    type: "GET_SINGLE_ARTICLE",
    payload: request
  };
}

export function singleLoadFalser() {
  return {
    type: "SINGLE_LOAD_FALSER",
    payload: null
  };
}

export function headerTitle(headerName) {
  return {
    type: "HEADER_TITLE",
    payload: headerName
  };
}

export function loadFontTruth() {
  const fontStatus = { fontIsLoaded: true };

  return {
    type: "LOAD-FONT",
    payload: fontStatus
  };
}
