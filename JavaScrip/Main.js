// Prompt de Saludo

/*var IngresoCliente = prompt('Ingrese su Nombre:');
console.log('Mi nombre es: ' + IngresoCliente);
alert('Welcome to CoffeeScrip' + " " + IngresoCliente + " !");*/

// Creación de objeto

function Cliente1(var1, var2, var3){ 
    

    this.cliente = var1;
    this.cafe = var2;
    this.despedida = var3;

}; 

const Persona1 = new Cliente1(prompt('Cual es tu nombre? '), prompt('cuantos cafes quieres? '), alert('Estará en 2min ! Gracias por tu compra !'));

console.log(Persona1);

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
console.log();
