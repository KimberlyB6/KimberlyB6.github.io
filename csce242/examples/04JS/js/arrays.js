document.getElementById("btn-show-toys").onclick = () => {
    let toys = ["drum", "ball", "hula-hoop", "barbie", "truck"];
    let ul = document.getElementById("toy-list");
    
    //Iterate over using a for loop
    /*for (let i = 0; i < toys.length; i++) {
        console.log(toys[i]);
    }*/

    //i parameter is optional
    toys.forEach((toy, i) => {
        li = document.createElement("li");
        li.innerHTML = toy;
        ul.appendChild(li);
    });
}

document.getElementById("btn-show-toy-table").onclick = () => {
    let toys = [];
    toys["drum"] = 20.99
    toys["Barbie"] = 9.89
    toys["Truck"] = 50.99
    toys["Sticker"] = 1.99
    toys["Doll"] = 3.99

    const table = document.getElementById("toy-table");

    for (const toy in toys) {
        const price = toys[toy];
        let tr = document.createElement("tr");
        table.append(tr);
        let td1 = document.createElement("td");
        tr.append(td1);
        let td2 = document.createElement("td");
        tr.append(td2);
        td1.innerHTML = toy;
        td2.innerHTML = price;
    }
}