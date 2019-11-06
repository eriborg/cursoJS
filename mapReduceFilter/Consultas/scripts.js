//console.log(data);

/*
    realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
  */

 // Retornar un array con los nombres de los usuarios femeninos

 let usuariosFemeninos = data.filter(p => p.genero === 'Female').map(p => p.nombre);
 //console.log(usuariosFemeninos);
 
 // Retornar un array de strings (el email de los usuarios de sexo masculino)
 let emailVarones = data
                    .filter(function(usuario) {
                        return usuario.genero === 'Male'; 
                    })
                    .map(function(usuario) {
                        return usuario.email;
                    });

//console.log(emailVarones);

let emailVarones2 = data.filter(p => p.genero === 'Male').map(p => p.email);
console.log(emailVarones2);
 
 // Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'

 let edad = 40;
 let usuario = data;

 //let usuarioMayor = data.filter(p => p.edad > edad).map(d => {"nombre": d.nombre, "genero": d.genero});
 
 let usuarioMasGrande = data
                    .filter(function(arr) {
                        return arr.edad > edad;
                    })
                    .map(function(a) {
                        return {nombre: a.nombre, genero: a.email, edad: a.edad};
                    });

 console.log(usuarioMasGrande);

 // Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.
 
 
 
 //console.log(soluciones.usuarioMasGrande(data));
 
 // Retornar el promedio de edad de los usuarios (number)
 
 soluciones.promedio = function(usuarios){
   
 
     return (acumEdad /cantidad).toFixed(2);
 }
 
 //console.log("Promedio edad usuarios " + soluciones.promedio(data));
 
 // Retornar el promedio de edad de los usuarios hombres (number)
 
 soluciones.promedioVarones = function(usuarios){
    
    
 }
 
 //console.log("Promedio edad Varones " + soluciones.promedioVarones(data));
 
  // Retornar el promedio de edad de los usuarios mujeres (number)
 
 soluciones.promedioMujeres = function(usuarios){
    
 }
 
 //console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data));