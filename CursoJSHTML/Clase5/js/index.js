
//objeto literal Persona
var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 35,
    domicilio: {
        pais: "Argentina",
        localidad: "Avellaneda",
        direccion:{
            calle: "Av. Mitre",
            numero: 750
        }
    }
};

//a traves de su punto
console.log(persona.nombre);
console.log(persona.domicilio.pais);//Argentina
console.log(persona.domicilio.direccion.calle); // Av. Mitre

// a traves de su propiedad
console.log(persona['nombre']); // Juan
console.log(persona['domicilio'].direccion.calle); // Av. Mitre
console.log(persona['domicilio'] ['direccion'] ['calle']); // Av. Mitre

var x = "edad";
console.log(persona[x]);

//recorre el objeto prop son los atributos del objeto
for (prop in persona) {
    console.log(prop + " : " + persona[prop]);
    
}


for (prop in persona.domicilio) {
    console.log(prop + " : " + persona.domicilio[prop]);
    
}

for (prop in persona.domicilio.direccion) {
    console.log(prop + " : " + persona.domicilio.direccion[prop]);
    
}








