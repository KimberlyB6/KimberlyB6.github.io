/*When button clicked write to a paragraph*/

/* Way 1
const writeParagraph = () => {
    console.log("Hello Everyone!")
}

document.getElementById("btn-write").onclick = writeParagraph;
*/

/* Way 2
document.getElementById("btn-write").onclick = () => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    Change the button text to say done
    document.getElementById("btn-write").innerHTML = "Done!";
}
*/

/*
document.getElementById("btn-write").onclick = (event) => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    event.target.innerHTML = "Done!";
}
*/

document.getElementById("btn-start").onclick = (event) => {
    document.getElementById("writeSE").innerHTML = "Starting...";
    event.target.innerHTML = "Started";
}
document.getElementById("btn-end").onclick = (event) => {
    document.getElementById("writeSE").innerHTML = "Ending...";
    event.target.innerHTML = "Ended";
}

document.getElementById("txt-name").onkeyup = (event) => {
    const userName = event.target.value;
    document.getElementById("welcomep").innerHTML =`Welcome ${userName} !`;   
}
