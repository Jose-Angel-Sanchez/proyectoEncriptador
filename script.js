function encriptar() {
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
	if (document.querySelector('textarea').value.length > 0) {
		document.querySelector('textarea').value = textoCifrado;
		titulo.innerText = "Texto encriptado correctamente:";
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