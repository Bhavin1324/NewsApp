import apiKey from './apiKey.js'
let container = document.querySelector('.container');
let loader = document.querySelector('.loader-bg');
window.addEventListener('load', ()=>{
    loader.style.display = 'none';
});

async function getNews() {
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${apiKey}`);
    const { articles } = await response.json();
    console.log(articles);
    articles.forEach((article, index) => {
        container.innerHTML += `<div class="collapse">
                <button class="collapsible"><b>Breaking news ${index + 1}: </b>${article.title}</button>
            <div class="content">
                <p>${article.content} <a href=${article.url}>Read More</a></p>
                </div>`;
        let collapse = document.querySelectorAll('.collapsible');
        collapse.forEach(col => {
            col.addEventListener('click', function () {
                col.parentElement.classList.toggle('active');
                let content = col.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            })
        })
    });
}
getNews();
