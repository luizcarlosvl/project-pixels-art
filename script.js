let numeros = [];
function _sortear(quantidade, maximo) {
    
    // Preenche um array com os números de 1 ao maximo
    for (var numero = 1; numero <= maximo;  numero++) {
      numeros.push(numero);
    }
    
    numeros.sort(function randomizar(a, b) {
      return Math.random() * 2 - 1; // Ordena randomicamente
    });
  
    return numeros.splice(0, quantidade);
}

let cor1 = 'rgb(0, 0 ,0)';
let cor2 = '';
let cor3 = '';
let cor4 = '#4D1AE8';

for (c2=0; c2<3; c2+=1){
  _sortear(3, 255);
  cor2 = 'rgb('+numeros[0]+', '+numeros[1]+', '+numeros[2]+')';
}

for (c3=0; c3<3; c3+=1){
  _sortear(3, 255);
  cor3 = 'rgb('+numeros[0]+', '+numeros[1]+', '+numeros[2]+')';
}

for (c4=0; c4<3; c4+=1){
  _sortear(3, 255);
  cor4 = 'rgb('+numeros[0]+', '+numeros[1]+', '+numeros[2]+')';
}


let boxColor = document.querySelector('#selectedColor');
boxColor.style.background = cor1;

let color1 = document.getElementById('palette1');
color1.style.background = cor1;
color1.classList.add('selected');
color1.addEventListener('click', colorA);

function colorA (){
boxColor.style.background = cor1;
cleanClass();
color1.classList.add('selected');
}

let color2 = document.getElementById('palette2');
color2.style.background = cor2;
color2.addEventListener('click', colorB);


function colorB (){
boxColor.style.background = cor2;
cleanClass();
color2.classList.add('selected');
}

let color3 = document.getElementById('palette3');
color3.style.background = cor3;
color3.addEventListener('click', colorC);


function colorC (){
boxColor.style.background = cor3;
cleanClass();
color3.classList.add('selected');
}

let color4 = document.getElementById('palette4');
color4.style.background = cor4;
color4.addEventListener('click', colorD);


function colorD (){
boxColor.style.background = cor4;
cleanClass();
color4.classList.add('selected');
}

function paint(event){
    let x = event.target
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

numeros = [];

function autoPaint (){
    for(index = 0; index < cells.length; index += 1) {
    _sortear(1, 4);
    if (numeros[0]==1){ 
      cells[index].style.background = cor1;
    } else if (numeros[0]==2){
      cells[index].style.background = cor2;
    } else if (numeros[0]==3){
      cells[index].style.background = cor3;
    }  else if (numeros[0]==4){
      cells[index].style.background = cor4;  
    }
}
}

let auto = document.getElementById('auto-paint');
auto.addEventListener('click', autoPaint);
    
