let paleta = document.querySelector(".color-palette");
let pixelBoard = document.querySelector("#pixel-board");
let color = '';

let boxColor = document.querySelector('#selectedColor');


let color1 = document.getElementById('palette1');
color1.addEventListener('click', colorA);

function colorA (){
boxColor.style.background = '#000000';
}

let color2 = document.getElementById('palette2');
color2.addEventListener('click', colorB);

function colorB (){
boxColor.style.background = '#E8B331';
}

let color3 = document.getElementById('palette3');
color3.addEventListener('click', colorC);

function colorC (){
boxColor.style.background = '#4D1AE8';
}

let color4 = document.getElementById('palette4');
color4.addEventListener('click', colorD);

function colorD (){
boxColor.style.background = '#8FE802';
}

let test = document.getElementById('test');
test.style.background = '#8FE802'



