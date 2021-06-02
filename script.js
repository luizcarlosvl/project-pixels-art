let paleta = document.querySelector(".color-palette");
let pixelBoard = document.querySelector("#pixel-board");
let color = '';

let boxColor = document.querySelector('#selectedColor');
boxColor.style.background = '#000000'

let color1 = document.getElementById('palette1');
color1.classList.add('selected');
color1.addEventListener('click', colorA);

function colorA (){
boxColor.style.background = '#000000';
cleanClass();
color1.classList.add('selected');
}

let color2 = document.getElementById('palette2');
color2.addEventListener('click', colorB);

function colorB (){
boxColor.style.background = '#E8B331';
cleanClass();
color2.classList.add('selected');
}

let color3 = document.getElementById('palette3');
color3.addEventListener('click', colorC);

function colorC (){
boxColor.style.background = '#4D1AE8';
cleanClass();
color3.classList.add('selected');
}

let color4 = document.getElementById('palette4');
color4.addEventListener('click', colorD);

function colorD (){
boxColor.style.background = '#8FE802';
cleanClass();
color4.classList.add('selected');
}

function paint(event){
    var x = event.target
    console.log(x);
    x.style.background = boxColor.style.background;
}

function cleanClass(){
    color1.className = 'color';
    color2.className = 'color';
    color3.className = 'color';
    color4.className = 'color';
}

let button = document.getElementById('clear-board');
let cells = document.getElementsByClassName('pixel');
button.addEventListener('click', buttonClear);

function buttonClear (){
    for(index = 0; index < cells.length; index += 1) {
    cells[index].style.background = '#ffffff';
    }
}