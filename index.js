const sneakers = [
  {
    name: "YU-GI-OH! AIR MAX MUSCLES 95 QS 'JOEYY'",
    display: "YU GIO OH.jpeg",
    price: "$199.99",
  },
  {
    name: "CONCEPTS X DUNK LOW SB 'ORANGE LOBSTER'",
    display: "ORANGE LOBSTERS.png",
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
    name: "TRAVIS SCOTT X JORDAN 1 RETRO LOW OG SP 'BLACK PHANTOM'",
    display: "BLACK PHANTOM.png",
    price: "$999.99",
  },
  {
    name: "JORDAN 4 RETRO 'BRED REIMAGINED'",
    display: "JORDAN 4 REIMAGINED.png",
    price: "$199.99",
  },
  {
    name: "THE POWERPUFF GIRLS X, DUNK LOW PRO SB QS 'BUTTERCUP'",
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
    display: "purple af1.png",
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
  {
    name: "JORDAN 4 RETRO 'RARE AIR-WHITE LETTERING'",
    display: "jordan 4 rare air.png",
    price: "$249.99",
  },
  {
    name: "JORDAN 4 RETRO 'WHITE THUNDER'",
    display: "jordan 4 white thunder.png",
    price: "$249.99",
  },
  {
    name: "JORDAN 1 RETRO HIGH OG 'CHICAGO LOST&FOUND'",
    display: "jordan 1 lost and found.png",
    price: "$399.99",
  },
  {
    name: "TRAVIS SCOTT X JORDAN 1 RETRO HIGH OG 'MOCHA'",
    display: "travis scott mocha.png",
    price: "$899.99",
  },
];

const sneakerContainer = document.getElementById("sneakercontainer");
const cartContainer = document.getElementById("cartcontainer");
const totalPriceEl = document.getElementById("totalprice");

let cartItems = [];
let filteredSneakers = sneakers;

function injectCard(sneaker) {
  sneakerContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card">
<img src="${sneaker.display}" alt="${sneaker.name}">
<h3>${sneaker.name}</h3>
<h4>${sneaker.price}</h4>
<button class="cart-button">Add to Cart</button>

</div>`
  );
}
sneakers.forEach(injectCard);

function addToCart(event) {
  if (event.target.classList.contains("cart-button")) {
    const sneakerCard = event.target.closest(".card");
    const sneakerName = sneakerCard.querySelector("h3").textContent;
    const sneaker = sneakers.find((s) => s.name === sneakerName);

    if (sneaker) {
      cartItems.push(sneaker);
      rendercart();
    }
  }
}
function rendercart() {
  cartContainer.innerHTML = "";
  cartItems.forEach((sneaker) => {
    cartContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="cart-item">
<h3>${sneaker.name}</h3>
<h4>${sneaker.price}</h4>
<button class="remove-button">Remove</button>
</div>`
    );
  });

  const total = cartItems.reduce((sum, sneaker) => {
    const price = Number(sneaker.price.replace("$", ""));
    return sum + price;
  }, 0);
  totalPriceEl.textContent = `Total: $${total.toFixed(2)}`;
}

sneakerContainer.addEventListener("click", addToCart);

cartContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-button")) {
    const name = event.target.parentElement.querySelector("h3").textContent;
    cartItems = cartItems.filter((sneaker) => sneaker.name !== name);
    rendercart();
  }
});

function renderSneakers(list) {
  sneakerContainer.innerHTML = "";
  list.forEach(injectCard);
}

renderSneakers(filteredSneakers);

document.getElementById("filter-jordans").addEventListener("click", () => {
  filteredSneakers = sneakers.filter((sneaker) =>
    sneaker.name.toLowerCase().includes("jordan")
  );
  renderSneakers(filteredSneakers);
});

document.getElementById("filter-others").addEventListener("click", () => {
  filteredSneakers = sneakers;
  renderSneakers(filteredSneakers);
});

document.getElementById("filter-all").addEventListener("click", () => {
  filteredSneakers = sneakers;
  renderSneakers(filteredSneakers);
});
