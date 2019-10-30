window.addEventListener('load',function() {
    let boton = this.document.getElementById('btn'); 
    boton.addEventListener('click', traerTexto);
});

function traerTexto() {
    let xhr = new XMLHttpRequest();
    //maneja 4 estados, el 4 es cuando la peticiòn està lista
    xhr.onreadystatechange = function() {
        document.getElementById('loader').innerHTML = "";
        if (xhr.readyState == 4) {
            //tabla de los errores del http
            if (xhr.status == 200) {
                let info = document.getElementById('info');
                info.innerText = xhr.responseText;
            } else{
                //console.error(xhr.status + " : " + xhr.statusText);
                console.warn(xhr.status + " : " + xhr.statusText);
            } 
        } else {
            let span = document.getElementById('loader');
            span.innerHTML = "<img src='./img/463.gif' ></img>";
        }

    };
    //hay 2 maneras de pedir una peticiòn GET (SELECT) y POST(CREATE UPDATE DELETE) so es consulta
    xhr.open('GET', './documento1.txt', true);
    //informaciòn por post se carga en el send
    xhr.send();
}

