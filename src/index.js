import "./style.css";
import { createArticleCard } from "./DOM/createArticleCard.js";

const topHeadlinesBtn = document.getElementById("top-headlines-button");
const searchTextInput = document.getElementById("search-box");
const articleContainer = document.getElementById("article-cards-container");

searchTextInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    removeAllChildNodes(articleContainer);
    let searchQuery = searchTextInput.value;

    for (let i = 0; i < searchQuery.length; i++) {
      searchQuery = searchQuery.replace(" ", "+");
    }

    let url =
      "https://newsapi.org/v2/everything?" +
      `q=${searchQuery}&` +
      `apiKey=d3f6e8d0d03449b2b689c73f9c368402`;

    let req = new Request(url);

    fetch(req)
      .then((a) => a.json())
      .then((response) => {
        for (let i = 0; i < response.articles.length; i++) {
          let currentArticle = response.articles[i];
          createArticleCard(
            currentArticle.author,
            currentArticle.title,
            currentArticle.description,
            currentArticle.url,
            currentArticle.urlToImage,
            currentArticle.publishedAt
          );
        }
        console.log(response.articles);
      });
  }
});

topHeadlinesBtn.addEventListener("click", showTopHeadlines);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function showTopHeadlines() {
  removeAllChildNodes(articleContainer);

  let url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=za&" +
    `apiKey=d3f6e8d0d03449b2b689c73f9c368402`;

  let req = new Request(url);

  fetch(req)
    .then((a) => a.json())
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.articles.length; i++) {
        let currentArticle = response.articles[i];
        createArticleCard(
          currentArticle.author,
          currentArticle.title,
          currentArticle.description,
          currentArticle.url,
          currentArticle.urlToImage,
          currentArticle.publishedAt
        );
      }
    });
}

showTopHeadlines();
