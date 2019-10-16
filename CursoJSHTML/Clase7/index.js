//console.log(autos);

window.addEventListener('load', function () {
    let divTabla = document.getElementById('divTabla');
    let tabla = crearTabla(autos);//se crea la tabla autos
    divTabla.appendChild(tabla);
})


function crearTabla( arr ) {
    let tabla = document.createElement('table');
    let encabezado = document.createElement('tr');
    for (prop in arr[0]) {
        let th = document.createElement('th'); //creo un elemento th
        th.setAttribute('style', 'background: rgb(35,205,108); padding: 5px');
        th.textContent = prop; //le agrego al th el valor de la propiedad del array
        encabezado.appendChild(th); // agrego el th en el tr
    }
    tabla.appendChild(encabezado);//agrego la fila encabezado a la tabla

    //una vez resuelto el encabezado armo el cuerpo de la tabla
    for (let i = 0; i < arr.length; i++) {//con este for recorremos persona

        let tr = document.createElement('tr');//creo un elemento fila

        for (prop in arr[i]) {//con este for recorremos los atributos de la persona
            let td = document.createElement('td');//creo un elemento celda 
            td.textContent = arr[i][prop]; //agrego el valor del contenido de cada atributo
            tr.appendChild(td); //  agregamos las celdas a la fila         
        }
        tabla.appendChild(tr);//agregamos la fila a la tabla
    }

    tabla.setAttribute('border', '1px solid black');
    tabla.setAttribute('style', 'border-collapse: collapse');
    

    return tabla;
    
}

