// Creación de objeto

function Cliente1(var1, var2){ 
    

    this.cliente = var1;
    this.bienvenida = var2;

}; 

const Persona1 = new Cliente1(prompt('Ingrese su Nombre: '), alert('Welcome to CoffeeScrip!') );

console.log(Persona1);

var cantidadCafe = prompt('cuantos cafes quieres? ')
alert('Estará en 2min ! Gracias por tu compra !')

// Metodo

class Vaso {
    constructor (nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
    }

    iva() {
        this.precio = this.precio * 1.21;
    }
};

const venta1 = new Vaso(prompt('Que nombre quieres en el vaso?'), 2 );
console.log(venta1);

venta1.iva();
console.log(venta1);


