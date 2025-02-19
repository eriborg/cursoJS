
function Avenger(nombre, nombreReal, poder){
    this.nombre = nombre;
    this.nombreReal = nombreReal;
    this.salud = 100;
    this.poder = poder;
}

this.status = function(){
    if(this.salud > 0){
        console.log(this.nombre + " Salud: " + this.salud + " Energia: " + this.poder);
    } else{
        console.log("Estoy muerto");
    }
}

this.curar = function(amigo){
    if(this.poder > 40){
        amigo.salud += 20;
        this.poder -=40;
    }
}

this.atacar = function(malo){
    malo.salud -= 50;
}

var Ironman = new Avenger("Ironman", "Tony", 1000);
var Capitan = new Avenger("Capitan America", "Steve", 500);
var Thanos = new Avenger("Thanos", "Thanos", 1500);

Capitan.status();
Thanos.atacar(Ironman);
Ironman.status();