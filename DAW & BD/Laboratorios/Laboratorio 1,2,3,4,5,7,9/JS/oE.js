//Actividad 1
function contrasena(){
	let pass = document.getElementById("pass").value;
	let ver = document.getElementById("ver").value;

	if(pass == ""){
		document.getElementById("con").innerHTML="<dl>Escriba la Contrasena</dl>";
	}

	else if(pass.length < 4){
		document.getElementById("con").innerHTML="<dl>La Contrasena debe ser Mayor a 4 Digitos</dl>";
	}

	else if(pass != ver){
		document.getElementById("con").innerHTML="<dl>La Contrasena es Incorrecta</dl>";
	}

	else if(pass == ver){
		alert( "Felicidades! - La Contrasena Coincide!" );
		document.getElementById("con").innerHTML="";
	}
}

//Actividad 2
let total = 0;

function lisa(){
    total += 850000000;
    document.getElementById("total").innerHTML= total;
}

function ermine(){
    total += 330000000;
    document.getElementById("total").innerHTML= total;
}

function rene(){
    total += 500000000;
    document.getElementById("total").innerHTML= total;
}

function vaciar(){
	total = 0;
	document.getElementById("total").innerHTML= "";
}