function encriptar() {
	let texto = document.querySelector('textarea').value;
	let titulo = document.querySelector("h2");
	let descripcion = document.querySelector("p");
	let imagen = document.querySelector("img");
	let textoCifrado = texto
	.replace(/e/gi, "enter")
	.replace(/i/gi, "imes")
	.replace(/a/gi, "ai")
	.replace(/o/gi, "ober")
	.replace(/u/gi, "ufat");
	if (document.querySelector('textarea').value.length > 0) {
		document.querySelector('textarea').value = textoCifrado;
		document.querySelector("h2").innerText = "Texto encriptado correctamente.";
		document.querySelector("p").innerText = textoCifrado;
	}
	else{
		document.getElementsByClassName("imagen").display = "hide";
		alert("Debes ingresar al menos un caracter.")
	}
}