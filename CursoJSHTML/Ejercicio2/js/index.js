function Persona(nombre, apellido, edad) {
    this.nombre =  nombre;
    this.apellido = apellido; 
    this.edad = edad ;
    this.saludar = saludar;
}

function saludar(){
    console.log("Hola, soy " + this.nombre + " " + this.apellido );
}  

var x = new Persona("Juan", "Perez", 23);
var y = new Persona("Lucia", "Garcia", 30);
var z = new Persona("Andrea", "Vazquez", 31);

x.saludar();

//x.genero = "Masculino";

//
Persona.prototype.correr = function (){ console.log("Corre");} ;

console.log(x);
console.log(y);
console.log(z);

console.log(x.saludar());
x.correr();






