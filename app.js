let container = document.querySelector(".main-bucket");
let loader = document.querySelector(".loader-bg");
const apiKey = "c0f766c5639a6d789215ce923430af67";

window.addEventListener("load", () => {
  loader.style.display = "none";
});

async function getNews() {
  const response = await fetch(
    `https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${apiKey}`
  );
  const { articles } = await response.json();
  console.log(articles);
  articles.forEach((article, index) => {
    container.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card mx-auto mb-4 border-0 shadow" style="width: 20rem;">
                    <img src="${
                      article.image === null || article.image === ""
                        ? "./images/blank.jpg"
                        : article.image
                    }"
                        class="card-img-top" alt="image" height="200px" width="200px">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.content}</p>
                        <div class="mb-2" style="width: fit-content;margin-left: auto"><a href="${
                          article.url
                        }" class="link-violet">Read more</a></div>
                    </div>
                </div>
            </div>`;
  });
}
getNews();
