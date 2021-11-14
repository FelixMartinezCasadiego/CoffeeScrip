/* 

Arrays -> Stock // carrito (producto elegido por el usuario)
Objetos -> Instanciar los distintos productos que tiene la tienda
Clases -> moldeadores de los objetos
Funciones -> Agregar items al carrito
Ciclos -> se podrá sumar items al carrito

*/

// Class moldeadora de objetos

class producto{
    constructor (id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    // metodo del objeto para restar stock

    restarStock(){
        this.stock = this.stock - 1;

        console.log(`El stock de ${this.nombre} ha sido actualizado`);
    }
}

// Objetos instanciar manualmente

const producto0 = new producto (0, 'capuchino', 3, 100);
const producto1 = new producto (1, 'café latte', 2, 100);
const producto2 = new producto (2, 'cafe con leche', 2, 100);
const producto3 = new producto (3, 'Torta de zanahoria', 3, 100);

let arrayProductos = [producto0, producto1, producto2, producto3];

console.log(arrayProductos);

console.table(arrayProductos);

let carrito = [];

let productosOfrecidos = 'Buenas! Tenemos para ofrecerle: ';

// Muestra via prompt con productos

function agregarCarrito(){
    // Recorremos arrayProductos y por cada elemento que tenga se suma el item

    for (item of arrayProductos){

        productosOfrecidos += ` \n ${item.id} - ${item.nombre} a $ ${item.precio} la unidad `
    }

productosOfrecidos += '\n Ingrese el número de item que desea agregar al carrito. Para finalizar ingrese 99.'

let respuestaUsuario = parseInt(prompt(productosOfrecidos))

while(isNaN(respuestaUsuario)){
    alert('Por favor, ingrese solo números');
    respuestaUsuario = parseInt(prompt(productosOfrecidos))
}

while(respuestaUsuario != 99){

    switch(respuestaUsuario){

        case 0:
            carrito.push(arrayProductos[0])
            alert(`Agregamos al carrito ${arrayProductos[0].nombre}`)
            arrayProductos[0].restarStock()
            break;

        case 1:
            carrito.push(arrayProductos[1])
            alert(`Agregamos al carrito ${arrayProductos[1].nombre}`)
            arrayProductos[1].restarStock()
            break;

        case 2:
            carrito.push(arrayProductos[2])
            alert(`Agregamos al carrito ${arrayProductos[2].nombre}`)
            arrayProductos[2].restarStock()
            break;

        case 3:
        carrito.push(arrayProductos[3])
        alert(`Agregamos al carrito ${arrayProductos[3].nombre}`)
        arrayProductos[3].restarStock()
        break;

        default: 
        console.log('No tenemos el id elegido') 
        break;
    }

    respuestaUsuario = parseInt(prompt(productosOfrecidos))
    };

    // Finalización de compra

    console.log('Su pedido fue concluido');
    mostrarCarrito()

};

let productosCarrito = 'Su compra es: ';
let precioCarrito = 0;

function mostrarCarrito(){
    for (itemsSeleccionados of carrito){
        productosCarrito += ` \n - ${itemsSeleccionados.nombre} `
        precioCarrito += itemsSeleccionados.precio
    }

    alert(` \n ${productosCarrito} \n por un total de $ ${precioCarrito} ` )
};


agregarCarrito();







