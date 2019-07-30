const URL = 'https://favqs.com/api/qotd';

function fetchQoute(url) {
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
        const qouteElement = document.querySelector('.qoute_containter');
        createParagraph(data.quote.body, qouteElement);
    });
}

function createParagraph(text, appendTo, htmlParagraphElement = document.createElement("p"), htmlParagraphElement1 = htmlParagraphElement, ixmldomNode = appendTo.appendChild(p), ixmldomNode1 = ixmldomNode) {
    const p = htmlParagraphElement1;
    p.innerHTML = text;
    ixmldomNode1;
}

window.addEventListener('onload', fetchQoute(URL));
