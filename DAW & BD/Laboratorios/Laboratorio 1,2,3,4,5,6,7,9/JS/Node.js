//Ejercicio 1
let arr = [5, 15, 35, 45, 55, 65, 75, 85 ,95, 100];
function promedio(arr){
    let sum = 0;
    for(let i = 0; i < 9; i++){
        sum += arr[i];
    }
    let promedio = sum / 10;
    console.log(promedio);
}
promedio(arr);

//Ejercio 2
function archivo(str){
    const file_system = require('fs');
    file_system.writeFileSync('ejercicio.txt',str);
}
archivo('Hola :)');

//Ejercicio 3
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
  readline.question('Quien eres? ', name => {
    console.log(`Hola ${name}!`);
    readline.close();
});