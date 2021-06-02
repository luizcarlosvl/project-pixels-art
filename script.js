let paleta = document.querySelector(".color-palette");
let table = document.querySelector("#table");

let lines = 5;
let column = 10;

function createbox(name){
let box = document.createElement("div");
box.className = name;
document.body.insertBefore(box, paleta);
table.appendChild(box);
}


//for (let index = 0; index = column; index += 1){

createbox('box');
//}




