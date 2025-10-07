const DOMSelectors = {
  title: document.getElementById("title"),
  name: document.getElementById("name"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};

function inject(album) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <img src="${display}">
      <h3>${name}</h3>
    </div>`
  );
}
