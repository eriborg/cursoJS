window.addEventListener('load', function () {
    let form = this.document.forms[0];    
    form.addEventListener('submit', function(e) {
        e.preventDefault();//se saca el get del http para que no muestre los datos en la url

        enviarDatos();
    });
});

function enviarDatos() {
    let xhr = new XMLHttpRequest(); //crear la peticion
    let info = document.getElementById('info');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            
            if (xhr.status == 200) {
                let persona = JSON.parse(xhr.responseText);

                while(info.hasChildNodes()){
                    info.removeChild(info.firstChild);
                }

                info.appendChild(crearTabla(persona));
            } else{
                info.innerText = xhr.status + ' : ' + xhr.statusText;
            }

        } else {
            info.appendChild(crearSpinner());
                                    
        }
    };
    
    xhr.open('POST', 'pagina1.php');//abrimos la peticion a un post que no se vea en la cabecera de la url

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //que le estamos enviando al servidor con el formato puede ser text/plain o json etc urlencoded resuelve los caracteres raros

    xhr.send();//enviamos solo se hace para el  post
};

function crearSpinner() {
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './img/spinner.gif');

    return spinner;
}

function crearTabla( arr ){

    let tabla = document.createElement('table');

    let encabezado = document.createElement('tr');


    for( prop in arr[0]){

        let th = document.createElement('th'); // creo un elemento th
        th.setAttribute('style', 'background: rgb(35,205,188); padding: 0 20px;');
       // th.setAttribute('style', 'padding: 0 5px');

        //let texto = document.createTextNode(prop);
        //th.appendChild(texto);

         th.textContent = prop; // le cargo al th el valor de la propiedad
         encabezado.appendChild(th); // inyecto el th en el tr        
    }

    tabla.appendChild(encabezado); // agrego la fila encabezado a la tabla

    // Una vez resuelto el encabezado armo el cuerpo de la tabla
    
    for( let i=0; i < arr.length; i++){ // con este for recorro el array de personas
        let fila = document.createElement('tr'); // para cada persona creo una fila
        for( prop in arr[i]){ // con este for in recorro los atributos de la persona
            let celda = document.createElement('td');// para cada atributo creo una celda
            celda.textContent = arr[i][prop];// cargo en la celda el valor del atributo
            fila.appendChild(celda);// agrego a la fila la celda
        }
        tabla.appendChild(fila);// una vez que termine de recorrer la persona agrego la fila a la tabla
    }

    //tabla.setAttribute('border', '1px solid black');
    //tabla.setAttribute('class', 'table table-striped table-hover');
    tabla.className = "table table-striped table-hover";

    return tabla;

}
