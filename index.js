const sneakers = [
  {
    name: "YU-GI-OH! AIR MAX MUSCLES 95 QS 'JOEYY'",
    display: "YU GIO OH.jpeg",
    price: "$199.99",
  },
  {
    name: "CONCEPTS X DUNK LOW SB 'ORANGE LOBSTER'",
    display: "ORANGE LOBSTER.png",
    price: "$499.99",
  },
  {
    name: "JORDAN 5 RETRO 'FIRE RED' 2025",
    display: "JORDAN 4 23.png",
    price: "$199.99",
  },
  {
    name: "SUPREME X DUNK LOW SB 'BLACK'",
    display: "supreme.jpeg",
    price: "$299.99",
  },
  {
    name: "TRAVIS SCOTT X JORDAN 1 RETRO LOW OG SP'BLACK PHANTOM'",
    display: "BLACK PHANTOM.png",
    price: "$999.99",
  },
  {
    name: "JORDAN 4 RETRO 'BRED REIMAGINED'",
    display: "JORDAN 4 BLACK.png",
    price: "$199.99",
  },
  {
    name: "THE POWERPUFF GIRLS X BUNK LOW PRO SB QS 'BUTTERCUP'",
    display: "powerpuff.jpeg",
    price: "$399.99",
  },
  {
    name: "AIR FORCE 1'07 'TRIPLE WHITE'",
    display: "AIR FORCE ONE.png",
    price: "$89.99",
  },
  {
    name: " ZOOM KOBE 5 PROTRO 'X-RAY'",
    display: "XRAY.png",
    price: "$499.99",
  },
  {
    name: "CACTUS PLANT FLEA MARKET X AIRFORCE 1 LOW PREMIUM",
    display: "PURPLE.png",
    price: "$199.99",
  },
  {
    name: "OFF-WHITE X AIR FORCE 1 LOW 'LEMONADE'",
    display: "OFF-WHITE YELLOW.png",
    price: "$199.99",
  },
  {
    name: "AUNT PEARL X DUNK LOW SB 'AUNT PEARL'",
    display: "AUNT MAY.png",
    price: "$199.99",
  },
  {
    name: "ZOOM LEBRON NXXT GENISUS EP 'IRIDESCENT PINK'",
    display: "LEBRON PINK.png",
    price: "$199.99",
  },
];

const DOMSelectors = {
  name: document.getElementById("name"),
  display: document.getElementById("display"),
  price: document.getElementById("price"),
};

function inject(sneakers) {
  const sneakerContainer = document.querySelector(".container");
  sneakerContainer.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
<img src="${sneakers.display}">
<h3>${sneakers.name}</h3>
<h4>${sneakers.price}</h4>
</div>`
  );
}

sneakers.forEach((sneakers) => {
  inject(sneakers);
});

document.querySelector(".btns");
cart.btn.addEventListener("click", function () {
