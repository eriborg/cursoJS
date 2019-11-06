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
                info.innerText = xhr.responseText; //response text te devuelve la info de la peticion                
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

    xhr.send(traerDatos());//enviamos solo se hace para el  post
};

function traerDatos() {
    let nombre = document.getElementById('txtNombre').value;
    let edad = document.getElementById('txtEdad').value;

    return 'nombre=' + encodeURIComponent(nombre) + '&edad='+ encodeURIComponent(edad);
    //representa parte del post de la pagina encodeURIComponent los acentos etc cuando hay un texto que no lo puede procesar el html lo representa
}

function crearSpinner() {
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './img/spinner.gif');

    return spinner;
}