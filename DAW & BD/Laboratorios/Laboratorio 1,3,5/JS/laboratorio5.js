// Actividad 1
let numero = window.prompt('Introduce un numero: ');

document.write('<strong>Numeros del 1 al ' + numero + ': </strong><table><tr>');
for(let i = 1; i <= numero; i++){
    document.write('<td>' + i + ' </td>');
}

document.write('</tr></table><strong>Numeros Cuadrados del 1 al ' + numero + ': </strong><table><tr>');
for(let i = 1; i <= numero; i++){
    document.write('<td>' + (i*i) + '</td>');
}

document.write('</tr></table><strong>Numeros Cubos del 1 al ' + numero + ': </strong><table><tr>');
for(let i = 1; i <= numero; i++){
    document.write('<td>' + (i*i*i) + '</td>');
}
document.write('</tr></table>');

// Actividad 2
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

let suma1 = getRandomInt(10);
let suma2 = getRandomInt(10);

var t0 =performance.now();
let respuesta = window.prompt('Cuanto es ' + suma1 + ' + ' + suma2 + '? ');
var t1 = performance.now();

document.write('<strong>Te tardaste: ' + (t1 - t0) + ' milisegundos en responder.</strong>');

var r = suma1 + suma2;

if(respuesta == r){
    document.write('<strong> Pero tu respuesta fue Correcta.</strong>');
}
else{
    document.write('<strong> Y tu respuesta fue Incorrecta.</strong>');
}

// Actividad 3
const arregloNum = [-1, -2, -3, -4, -5, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function contadorDeNumeroNegativos(arr){
    let negativos = 0
    for(let nu of arr){
        if(nu < 0){
            negativos += 1;
        }
    }
    return negativos;
}

document.write('<div></div><strong> Hay ' + contadorDeNumeroNegativos(arregloNum) + ' numeros negativos.</strong>');

function contadorDe0s(arr){
    let zeros = 0;
    for(let nu of arr){
        if(nu == 0){
            zeros += 1;
        }
    }
    return zeros;
}

document.write('<strong> Hay ' + contadorDe0s(arregloNum) + ' numeros ceros.</strong>');

function contadorDeReales(arr){
    let reales = 0;
    for(let nu of arr){
        if(nu > 0){
            reales += 1;
        }
    }
    return reales;
}

document.write('<strong> Hay ' + contadorDeReales(arregloNum) + ' numeros reales.</strong>');

// Actividad 4