let listaPersonas = [];

function Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais) {
    this.nombre = nombre;
    this.apellido= apellido;
    this.edad = edad;
    this.genero = genero;
    this.maneja = maneja;
    this.nada = nada;
    this.bicicleta = bicicleta;
    this.pais = pais;
}

window.addEventListener('load', function() {
    //distintas formas de llamar los formularios
    //var frm = document.getElementById('frmPersona');
    //var frm = document.getElementsByTagName('form')[0];
    var frm = document.forms[0];
    frm.addEventListener('submit', manejarSubmit);
});

function manejarSubmit(e) {
    e.preventDefault();
    var frm = e.target;
    //alert("Capture el evento submit");
    //Crear una persona
    var nuevaPersona = new Persona();

    listaPersonas.push(nuevaPersona);
}
