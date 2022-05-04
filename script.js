const apiKey = "40f962e9c9464e7d8fde541fc132bd2a";
const source = "bbc-news"
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    let articles = JSON.parse(this.responseText).articles;
    console.log(articles);
    let container = document.querySelector('.container');
    let nsource = document.querySelector('.src');
    nsource.textContent = source
    articles.forEach((article, index) => {
        container.innerHTML += `<div class="collapse">
                <button class="collapsible"><b>Breaking news ${index+1}: </b>${article.title}</button>
            <div class="content">
                <p>${article.content} <a href=${article.url}>Read More</a></p>
                </div>`;
        let collapse = document.querySelectorAll('.collapsible');
        collapse.forEach(col => {
            col.addEventListener('click', function () {
                col.parentElement.classList.toggle('active');
                // let content = col.lastElementChild;
                let content = col.nextElementSibling;
                console.log(content);
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            })
        })
    });
}
xhr.send();