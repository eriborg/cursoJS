const apiKey= "6ab02296761724ee463a8debcc55db77";


window.addEventListener('load',function () {
    //cuando cambia en el select llamar a traerPronostico 
    document.getElementById('selCiudades').addEventListener('change', traerPronostico);
    document.getElementById('btnRecargar').addEventListener('click', traerPronostico);
    cargarSelectCiudades();
   // traerPronostico();
});

function cargarSelectCiudades() {
    traerCiudades();    
}

function traerCiudades() {
    //ajax json city.list
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            
            if (xhr.status == 200) {
                let datos = JSON.parse(xhr.responseText);
              //  console.log(datos);
                let ciudades = parsearArgentinas(datos);   

              // console.log(ciudades);
               actualizarSelect(ciudades);               
            }                                       
        }
    }
    xhr.open('GET', 'city.list.json');//abrimos la peticion a un post que no se vea en la cabecera de la url

    xhr.send();
}

function parsearArgentinas(arr) {
    
    return arr.filter(ciudad => ciudad.country === "AR")
            .map(ciudad =>({id: ciudad.id,  nombre:  ciudad.name + ", " + ciudad.country}));    
}

function traerPronostico() {
    let xhr = new XMLHttpRequest();
    let divActualizacion = document.getElementById('act');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            
            if (xhr.status == 200) {
                let pronostico = JSON.parse(xhr.responseText);                
               console.log(pronostico);  
               actualizarPronostico(pronostico); 
               
            }           
                                    
        }else{
            
            divActualizacion.innerHTML = '<img src="./images/anemometro.gif"/>'
        }

    }
    xhr.open('GET', armarURL(), true);

    xhr.send();
}

function actualizarSelect(ciudades){

    let selCiudades = document.getElementById('selCiudades');
    for (ciudad of ciudades) {
        let opcion = document.createElement('option');
        opcion.setAttribute('value', ciudad.id);
        let texto = document.createTextNode(ciudad.nombre);
        opcion.appendChild(texto);
        selCiudades.appendChild(opcion);        
    }
}

function armarURL() {
    let idciudad= document.getElementById('selCiudades').value;

    console.log(idciudad);
    let url="http://api.openweathermap.org/data/2.5/weather?id="+idciudad+"&APPID="+ apiKey; 
    return url;
}

function actualizarPronostico(pronostico) {
    document.getElementById('temperatura').innerText = "Temperatura: " + (pronostico.main.temp).toFixed(1) + " ºF";
    document.getElementById('humedad').innerText = "Humedad: " + pronostico.main.humidity + " %";
    document.getElementById('presion').innerText = "Presión: " + pronostico.main.pressure + " hPa";
    document.getElementById('viento').innerText = "viento: " + (pronostico.wind.speed * 3.6).toFixed(0) + " Km/h";
    document.getElementById('descripcion').innerText = "Se espera: " + pronostico.weather[0].description ;
    document.getElementById('minmax').innerText = "Máxima: "+ pronostico.main.temp_max+ "°C / Minima:"+ pronostico.main.temp_min + "°C";
    document.getElementById('imagen').setAttribute('src', "http://openweathermap.org/img/w/"+ pronostico.weather[0].icon + ".png");
    document.getElementById('imagen').setAttribute('style', "width: 70px");
    document.getElementById('ciudad').textContent = pronostico.name; 
    let fecha = traerFecha();
    document.getElementById('act').innerText = fecha.toLocaleDateString()+ " " +fecha.toLocaleTimeString();

    
}

function traerFecha() {
    let fecha = new Date();
    return fecha;
}