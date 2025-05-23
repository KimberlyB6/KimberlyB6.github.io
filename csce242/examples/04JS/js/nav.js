document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("hide-small");
}

document.getElementById("txt-color").onclick = (event) => {
    const color = event.target.value;
    document.getElementById("colorp").innerHTML = color;
} 