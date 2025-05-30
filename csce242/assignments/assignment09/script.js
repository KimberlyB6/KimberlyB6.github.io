class Ramen {
  constructor(name, broth, noodles, toppings, spiceLevel, imageURL) {
    this.name = name;
    this.broth = broth;
    this.noodles = noodles;
    this.toppings = toppings;
    this.spiceLevel = spiceLevel;
    this.imageURL = imageURL;
  }

  getSectionHTML() {
    return `
      <div class="ramen-card" onclick="showModal('${this.name}')">
        <img src="${this.imageURL}" alt="${this.name}" />
        <div class="overlay">${this.name}</div>
      </div>
    `;
  }
}

const ramens = [
  new Ramen("Tonkotsu", "Pork", "Thin", ["Chashu", "Scallions", "Egg"], "Medium", "images/Tonkotsu.jpg"),
  new Ramen("Shoyu", "Soy Sauce", "Wavy", ["Bamboo", "Nori", "Fish Cake"], "Mild", "images/Shoyu.jpg"),
  new Ramen("Miso", "Miso", "Thick", ["Corn", "Butter", "Chashu"], "High", "images/Miso.jpg"),
  new Ramen("Spicy Tantanmen", "Sesame", "Straight", ["Ground Pork", "Chili Oil", "Bok Choy"], "Very High", "images/Spicy Tantanmen.jpg"),
];

const ramenGallery = document.getElementById("ramenGallery");
ramens.forEach(ramen => {
  ramenGallery.innerHTML += ramen.getSectionHTML();
});

function showModal(name) {
  const ramen = ramens.find(r => r.name == name);
  document.getElementById("modalTitle").innerText = ramen.name;
  document.getElementById("modalBroth").innerText = ramen.broth;
  document.getElementById("modalNoodles").innerText = ramen.noodles;
  document.getElementById("modalToppings").innerText = ramen.toppings.join(", ");
  document.getElementById("modalSpice").innerText = ramen.spiceLevel;
  document.getElementById("modalImage").src = ramen.imageURL;
  document.getElementById("ramenModal").style.display = 'block';
}

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("ramenModal").style.display = "none";
});