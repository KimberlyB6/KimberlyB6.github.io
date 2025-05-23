/* When button clicked write to a paragraph */

/*
const writeParagraph = () => {
    console.log("Hello Everyone!");
};

document.getElementById("btn-write").onclick = writeParagraph;
*/
/*
document.getElementById("btn-write").onclick = () => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    document.getElementById("btn-write").innerHTML = "done!";
};
*/

document.getElementById("btn-write").onclick = (event) => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    event.target.innerHTML = "done";
};

document.getElementById("btn-start").onclick = (event) => {
    event.target.innerHTML = "Started";
    document.getElementById("startstopp").innerHTML += "<strong>Starting</strong>";
}

document.getElementById("btn-end").onclick = (event) => {
    event.target.innerHTML = "Ended";
    document.getElementById("startstopp").innerHTML += "Ending";
}

document.getElementById("txt-name").onkeyup = (event) => {
    const userName = event.target.value;
    document.getElementById("welcomep").innerHTML = `Welcome ${userName}!`;
}


document.getElementById("btn-happy").onclick = () => {
    const moodImage = document.getElementById("image-mood");
    moodImage.src = "images/happyface.jpg";
    moodImage.classList.remove("hidden");
};

document.getElementById("btn-sad").onclick = () => {
    const moodImage = document.getElementById("image-mood");
    moodImage.src = "images/sadface.jpg";
    moodImage.classList.remove("hidden");
};

document.getElementById("btn-sad").onclick = () => {
    const moodImage = document.getElementById("image-mood");
    moodImage.classList.add("image-bold");
    
};

document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("writep").innerHTML = "Toggle";
};