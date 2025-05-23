/*Ice Cream*/
document.getElementById("iceCreamColumn").onclick = () => {
    document.getElementById("iceCreamList").innerHTML += "<p><strong>I like IceCream!</strong></p>";
};

/*Slider*/
document.getElementById("numberSlider").oninput = (event) => {
    const value = event.target.value;
    document.getElementById("sliderOutput").innerHTML = `I want ${value} ice cream!`;
};

/*Image*/
document.getElementById("showImageBtn").onclick = (event) => {
    document.getElementById("iceCreamImage").style.display = 'block';
    event.target.style.display = 'none';
};