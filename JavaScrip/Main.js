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

    restarstock(){
        this.stock = this.stock - 1;

        console.log(`El stock de ${this.nombre} ha sido actualizado`);
    }
}

// Objetos instanciar manualmente

const producto0 = new producto (0, 'cafe', 350, 100);
const producto1 = new producto (1, 'capuchino', 88, 20);
const producto2 = new producto (2, 'cafe con leche', 85, 50);
const producto3 = new producto (3, 'cafe latte', 200, 90);

let arrayProductos = [producto0, producto1, producto2, producto3];

console.log(arrayProductos);

console.table(arrayProductos);

let carrito = [];

let productosOfrecidos = 'Tenemos para ofrecerle: ';

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
            arrayProductos[0].restarstock()
            break;

        case 1:
            carrito.push(arrayProductos[1])
            alert(`Agregamos al carrito ${arrayProductos[1].nombre}`)
            arrayProductos[1].restarstock()
            break;

        case 2:
            carrito.push(arrayProductos[2])
            alert(`Agregamos al carrito ${arrayProductos[2].nombre}`)
            arrayProductos[2].restarstock()
            break;

        case 3:
        carrito.push(arrayProductos[3])
        alert(`Agregamos al carrito ${arrayProductos[3].nombre}`)
        arrayProductos[3].restarstock()
        break;

        default: 
        console.log('No tenemos el id elegido')
        break;
    }
}

respuestaUsuario = parseInt(prompt(productosOfrecidos))

};

agregarCarrito();





