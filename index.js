const URL = "https://favqs.com/api/qotd";

function fetchQoute(url) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const qouteElement = document.querySelector(".qoute_containter");
      createParagraph(data.quote.body, qouteElement);
    });
}

function createParagraph(text, parentElement) {
  const p = document.createElement("p");
  p.innerHTML = text;
  parentElement.appendChild(p);
}

window.addEventListener("onload", fetchQoute(URL));
