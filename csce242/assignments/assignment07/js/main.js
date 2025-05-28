// Draw Houses
document.getElementById("draw-btn").onclick = () => {
  const container = document.getElementById("houses");
  container.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const house = document.createElement("div");
    house.classList.add("house");
    
    const door = document.createElement("div");
    door.classList.add("door");

    house.appendChild(door);
    container.appendChild(house);
  }
  
  document.getElementById("stick-area").style.display = "block";

};

// Stick Figure Animation
document.getElementById("exercise-btn").onclick = () => {
  const stick = document.getElementById("stick-person");
  const stretches = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png"
  ];
  let index = 0;

  setInterval(() => {
    stick.src = stretches[index];
    index = (index + 1) % stretches.length;

    if (index >= stretches.length) {
      clearInterval(interval);
    }
  }, 1000);
};