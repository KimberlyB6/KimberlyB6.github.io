class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const dogSection = document.createElement("section");

        //Images
        const imageDiv = document.createElement("div");
        const image = document.createElement("img");
        image.src = `images/classes/${this.pic}`;
        imageDiv.append(image);
        dogSection.append(imageDiv)

        //Text
        const textDiv = document.createElement("div");
        dogSection.append(textDiv);

        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        textDiv.append(h3);

        //Breed
        textDiv.append(this.paragraph("Breed", this.breed));

        //Color
        textDiv.append(this.paragraph("Color", this.color));

        //Age
        textDiv.append(this.paragraph("Age", this.age));

        //Size
        textDiv.append(this.paragraph("Size", this.size));

        image.onclick = () => {
            document.getElementById("modal").classList.remove("hidden");
            document.querySelector("#modal img").src = `images/classes/${this.pic}`
        };

        return dogSection;

    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

document.getElementById("close").onclick = () => {
    document.getElementById("modal").classList.add("hidden");
}
const dogs = [];
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "Med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "Large", "pitt-bull.jpg"));

dogs.forEach((dog) => {
    document.getElementById("dog-house").append(dog.item);
});