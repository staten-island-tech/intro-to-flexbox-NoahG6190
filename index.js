const sneakers =[
{
  name: "YU-GI-OH! AIR MAX MUSCLES 95 QS 'JOEYY'",
  display:"Screenshot_17-9-2025_103626_www.flightclub.com.jpeg" alt="YU-GI-OH",
  price: "$199.99"
}

{
  name: "CONCEPTS X DUNK LOW SB 'ORANGE LOBSTER'",
  display: "Screenshot 2025-09-18 103748.png" alt="ORANGE LOBSTER",
  price: "$499.99"
}
{
  name: "JORDAN 5 RETRO 'FIRE RED' 2025",
  display: "Screenshot 2025-09-17 105516.png" alt=" FIRE RED",
  price: "$199.99",
}
{
  name: "SUPREME X DUNK LOW SB 'BLACK'",
  display: "Screenshot_17-9-2025_104834_www.flightclub.com.jpeg" alt="SUPREME",
  price: "$299.99",
}
{
  name: "TRAVIS SCOTT X JORDAN 1 RETRO LOW OG SP'BLACK PHANTOM'",
  display: "Screenshot 2025-09-17 105752.png" alt="BALCK PHANTOM",
  price: "$999.99",
}
{
  name:"JORDAN 4 RETRO 'BRED REIMAGINED'",
  display: "Screenshot 2025-09-17 105841.png" alt="BRED REIMAGINED",
  price:"$199.99",
}
{
name: "THE POWERPUFF GIRLS X BUNK LOW PRO SB QS 'BUTTERCUP'",
display:"Screenshot_17-9-2025_105042_www.flightclub.com.jpeg" alt="BUTTERCUP",
price:"$399.99",
}
{
  name:"AIR FORCE 1'07 'TRIPLE WHITE'",
  display:"Screenshot 2025-09-17 105815.png" alt="TRIPLE WHITE",
  price:"$89.99",
}
{
  name:" ZOOM KOBE 5 PROTRO 'X-RAY'",
  display:"Screenshot 2025-09-18 104205.png" alt="X-RAY",
  price: "$499.99",
}
{
  name:"CACTUS PLANT FLEA MARKET X AIRFORCE 1 LOW PREMIUM",
  display:"Screenshot 2025-09-18 104352.png" alt="CACTUS PLANT",
  price:"$199.99",
}
{
  name:"OFF-WHITE X AIR FORCE 1 LOW 'LEMONADE'",
  display:"Screenshot 2025-09-18 104608.png" alt="LEMONADE",
  price: "$199.99",
}
{
  name: "AUNT PEARL X DUNK LOW SB 'AUNT PEARL'",
  display: "Screenshot 2025-09-18 105747.png" alt="AUNT PEARL",
  price: "$199.99",
}
]



const DOMSelectors = {
  name: document.getElementById("name"),
  display: document.getElementById("display"),
  price: document.getElementById("price"),
};

function inject(sneakers) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <img src="${display}">
      <h3>${name}</h3>
      <h4>${price}</h4>
    </div>`
  );
}
