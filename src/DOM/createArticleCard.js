export function createArticleCard(
  author,
  title,
  description,
  url,
  urlToImage,
  datePublished
) {
  const cardContainer = document.getElementById("article-cards-container");
  const fragment = document.createDocumentFragment();

  const articleCard = document.createElement("div");
  articleCard.classList.add("article-card");
  articleCard.addEventListener("click", () => {
    window.open(url, "_blank");
  });

  const articleTitle = document.createElement("h2");
  articleTitle.classList.add("article-title");
  articleTitle.textContent = title;

  articleCard.append(articleTitle);

  if (urlToImage !== null) {
    const articleImage = document.createElement("img");
    articleImage.classList.add("article-card-image");
    articleImage.setAttribute("src", `${urlToImage}`);

    articleCard.append(articleImage);
  }

  const articleDescription = document.createElement("article");
  articleDescription.classList.add("article-card-description");
  articleDescription.textContent = description;

  articleCard.append(articleDescription);

  if (author !== null) {
    const articleAuthor = document.createElement("span");
    articleAuthor.classList.add("article-card-author");
    articleAuthor.textContent = `-- ${author}`;

    articleCard.append(articleAuthor);
  }

  const articleDatePublished = document.createElement("span");
  articleDatePublished.classList.add("article-card-date-published");
  const shortDate = datePublished.substring(0, 10);
  articleDatePublished.textContent = shortDate;

  articleCard.append(articleDatePublished);

  fragment.append(articleCard);
  cardContainer.append(fragment);
}
