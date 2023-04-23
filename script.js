function encriptar() {
	let copiar = document.querySelector("button#copiar")
	let texto = document.querySelector('textarea').value;
	let titulo = document.querySelector("h2");
	let descripcion = document.querySelector("p");
	let imagen = document.querySelector("div img");
	let textoCifrado = texto
	.replace(/e/gi, "enter")
	.replace(/i/gi, "imes")
	.replace(/a/gi, "ai")
	.replace(/o/gi, "ober")
	.replace(/u/gi, "ufat");
	if (texto.length > 0) {
		document.querySelector('textarea').value = textoCifrado;
		titulo.innerText = "Texto encriptado correctamente:";
		descripcion.innerText = textoCifrado;
		imagen.style.display = "none";
		copiar.style.display = "block";
	}
	else{
		imagen.style.display = "block";
		copiar.style.display = "block";
		titulo.innerText = "Ningún mensaje fue encontrado.";
		descripcion.innerText = "Ingresa el mensaje que deseas encriptar o desencriptar.";
		alert("Debes ingresar al menos un caracter.");
	}
}
function desencriptar() {
	let texto = document.querySelector('textarea').value;
	let titulo = document.querySelector("h2");
	let descripcion = document.querySelector("p");
	let imagen = document.querySelector("div img");
	let textoCifrado = texto
	.replace(/enter/gi, "e")
	.replace(/imes/gi, "i")
	.replace(/ai/gi, "a")
	.replace(/ober/gi, "o")
	.replace(/ufat/gi, "u");
	if (texto.length > 0) {
		document.querySelector('textarea').value = textoCifrado;
		titulo.innerText = "Texto desencriptado correctamente:";
		descripcion.innerText = textoCifrado;
		imagen.style.display = "none";
	}
	else{
		imagen.style.display = "block";
		titulo.innerText = "Ningún mensaje fue encontrado.";
		descripcion.innerText = "Ingresa el mensaje que deseas encriptar o desencriptar.";
		alert("Debes ingresar al menos un caracter.");
	}
}

document.getElementById("copiar").onclick = function() {
    var copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.textContent = document.querySelector('textarea').value;
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
    document.querySelector('textarea').value = "";
}