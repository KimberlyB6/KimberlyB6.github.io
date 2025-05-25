function toggleMenu() {
  const items = document.getElementById("menuItems");
  const arrow = document.getElementById("arrow");

  if (items.style.display === "block") {
    items.style.display = "none";
    arrow.textContent = "▼";
  } else {
    items.style.display = "block";
    arrow.textContent = "▲";
  }
}

let bike = document.getElementById("bike");
let interval = null;

function showSection(section) {
  document.getElementById("speed").style.display = section === "speed" ? "block" : "none";
  document.getElementById("art").style.display = section === "art" ? "block" : "none";
}
function startBike() {
  let speed = document.getElementById("speedRange").value;
  let position = 0;

  clearInterval(interval);

  interval = setInterval(function () {
    position += parseInt(speed);
    if (position > 550) position = -80; // Loops
    bike.style.left = position + "px";
  }, 30);
}

function stopBike() {
  clearInterval(interval);
}

function showArt(name) {
  let box = document.getElementById("artBox");
  box.innerHTML = "";

  let img = document.createElement("img");
  img.style.width = "100px";

  if (name === "moon") {
    img.src = "images/moon.webp";
  } else if (name === "star") {
    img.src = "images/star.png";
  } else if (name === "cloud") {
    img.src = "images/cloud.png";
  }

  box.appendChild(img);
}
