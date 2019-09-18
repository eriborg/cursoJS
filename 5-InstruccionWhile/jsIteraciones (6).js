function mostrar()
{
	var contador = 0;
	var acumulador=0;
	var numero;

	/*
	Utilizando el FOR
	for (let i = 0; i < 5; i++) {
		
		numero = parseInt(prompt("Ingrese un numero "));
		acumulador += numero; 		
		
	}
	*/

	/*
	Utilizando el while
	*/
	
	while (contador < 5) {
		numero = parseInt(prompt("Ingrese un numero "));
		acumulador += numero; 
		contador++;
	}
	

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/contador;

}//FIN DE LA FUNCIÓN