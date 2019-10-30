window.addEventListener('load', ()=>{

    let selPaises = document.getElementById('selPaises');
    let selCiudades = document.getElementById('selCiudades');

    selPaises.addEventListener('change', ()=>{
        cargarSelect(selCiudades, obtenerCiudades(datos, selPaises.value));
    });

    cargarSelect(selPaises, obtenerPaises(datos));
    cargarSelect(selCiudades, obtenerCiudades(datos, selPaises.value));
});

function cargarSelect(select, arr) {
    let opcion;
    limpiarSelect(select);

    arr.forEach(element => {
        opcion = document.createElement('option');
        let texto = document.createTextNode(element);
        opcion.appendChild(texto);
        opcion.setAttribute('value', element);

        select.appendChild(opcion);
    });    
}
//genera un array, donde con el unique extraigo solos los pasies unicos y ordenados con el sort
//esto es otra forma de armar la función
let obtenerPaises = arr => arr.map(p => p.pais)
                              .unique()
                              .sort();    

let obtenerCiudades = (arr,pais) => arr.filter(c => c.pais === pais)
                        .map(f => f.ciudad)
                        .unique()
                        .sort();    

Array.prototype.unique = function () {
    //operator ... evita hacer un vector 
    //y recorrerlo paara poder construir un array con los elementos filtrados
    //set sirve para filtrar los valor es unicos como filtrar los paises
    return [... new Set(this)];
}
//funcion para limpiar el select
function limpiarSelect(select) {
    while (select.hasChildNodes()) {
        select.removeChild(select.firstElementChild);
    }
}