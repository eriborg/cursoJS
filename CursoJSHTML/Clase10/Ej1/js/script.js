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
    
    xhr.open('GET', 'pagina1.php'+ traerDatos());//abrimos la peticion
    xhr.send();//enviamos 
};

function traerDatos() {
    let nombre = document.getElementById('txtNombre').value;
    let edad = document.getElementById('txtEdad').value;

    return '?nombre='+ nombre + '&edad='+ edad;//representa parte del get de la pagina
}

function crearSpinner() {
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './img/spinner.gif');

    return spinner;
}