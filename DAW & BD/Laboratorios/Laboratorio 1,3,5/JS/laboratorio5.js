
// Actividad 1
function conteo(){
    let numero = window.prompt('Introduce un numero: ');

    document.write('<h3>Actividad 1:</h3><br>Numeros del <strong>1 al ' + numero + ': </strong></br><table border="1"><tr>');
    for(let i = 1; i <= numero; i++){
        document.write('<td>' + i + ' </td>');
    }

    document.write('</tr></table><br>Numeros Cuadrados del <strong>1 al ' + numero + ': </strong></br><table border="1"><tr>');
    for(let i = 1; i <= numero; i++){
    document.write('<td>' + (i*i) + '</td>');
    }

    document.write('</tr></table><br>Numeros Cubos del <strong>1 al ' + numero + ': </strong></br><table border="1"><tr>');
    for(let i = 1; i <= numero; i++){
    document.write('<td>' + (i*i*i) + '</td>');
    }
    document.write('</tr></table>');
};


// Actividad 2
function tiempoParaSumar(){
    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    let rnd1 = getRandomInt(10);
    let rnd2 = getRandomInt(10);
    
    var t0 =performance.now();
    let respuesta = window.prompt('Cuanto es ' + rnd1 + ' + ' + rnd2 + '? ');
    var t1 = performance.now();
    
    document.write('<h3>Actividad 2:</h3><br>Te tardaste: <strong>' + (t1 - t0) + ' milisegundos</strong> en responder.</br>');
    
    var ans = rnd1 + rnd2;
    
    if(respuesta == ans){
        document.write('<p> Pero tu respuesta fue <strong>Correcta.</strong></p>');
    }
    else{
        document.write('<p> Y tu respuesta fue <strong>Incorrecta.</strong></p>');
    }
}


// Actividad 3
function contador(){
    let numeros = (window.prompt("Dame numeros para un arreglo separados por ,"));
    let arregloNum = numeros.split(',');

    function contadorDeNumeroNegativos(arr){
        let negativos = 0
        for(let nu of arr){
            if(nu < 0){
                negativos += 1;
            }
        }
        return negativos;
    }

    document.write('<h3>Actividad 3:</h3><br> Hay <strong>' + contadorDeNumeroNegativos(arregloNum) + ' </strong>numeros <strong>negativos.</strong></br>');

    function contadorDe0s(arr){
        let zeros = 0;
        for(let nu of arr){
            if(nu == 0){
                zeros += 1;
            }
        }
        return zeros;
    }

    document.write('<br> Hay <strong>' + contadorDe0s(arregloNum) + ' </strong>numeros <strong>ceros.</strong></br>');

    function contadorDeReales(arr){
        let reales = 0;
        for(let nu of arr){
            if(nu > 0){
                reales += 1;
            }
        }
        return reales;
    }

    document.write('<br> Hay <strong>' + contadorDeReales(arregloNum) + ' </strong>numeros <strong>reales.</strong></br>');
}


// Actividad 4
function promedioArr(){
    document.write('<h3>Actividad 4:</h3>');
    function promedios(array){
        let tmp = 0;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                tmp += array[i][j];
            }
            document.write('<p>El <strong>promedio</strong> del reglon <strong>' + (i+1) + '</strong> del arreglo es: <strong>' + (tmp / 3) + '.</strong> </p>');
        }
    }
    /*
    let reglones = (window.prompt("Dame la matriz 3x3 separada con : por reglon. Y con , por numero. Eje: 3,4,5:3,4,7:0,0,0"));
    reglones = reglones.split(':');
    let arr = reglones.map((value) => value.split(','));
    */

    let arr = [[1,2,3], [4,5,6], [7,8,9]];
    document.write("Arreglo a promediar: " + arr);
    promedios(arr);

    let arra = [[10,20,30], [40,50,60], [70,80,90]];
    document.write("Segundo Arreglo a promediar: " + arra);
    promedios(arra);
}


// Actividad 5
function inverso(){
    document.write('<h3>Actividad 5</h3>');
    let inverso = window.prompt('Dame un Numero: ');

    document.write('Numeros <strong>inversos</strong> de ' + inverso + ' son: ');
    function inversos(inv){
        for(let i = (inv - 1); i > 0; i--){
            document.write(i + ', ');
        }
        document.write('0');
    }
    inversos(inverso);
}

