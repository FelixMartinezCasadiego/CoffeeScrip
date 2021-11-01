// Saludo

function Saludo1(){
    var IngresoCliente = prompt('Ingrese su nombre:');
    console.log('Nombre del cliente es: ' + IngresoCliente);
    alert('Gracias por vistarnos ' + IngresoCliente);
};

Saludo1 ();

// Pedido

function Pedido(){
    let PedidoCliente1 = prompt('Quieres tomar café capuchino? El costo es 2$ c/u.')
    if ((PedidoCliente1 == 'si') || (PedidoCliente1 == 'Si')){
        console.log('El cliente quiere café capuchino');
        let CompraCliente1 = prompt('Cuantos cafes deseas?');
        console.log('El cliente quiere ' + CompraCliente1 + ' capuchino');
    } else{
        console.log('El cliente no quiere café capuchino')
    };

    let PedidoCliente2 = prompt('Quieres tomar café latte? El costo es 1$ c/u.')
    if ((PedidoCliente2 == 'Si') || (PedidoCliente2 == 'si')){
        console.log('El cliente quiere café latte');
        let CompraCliente2 = prompt('Cuantos cafes deseas?');
        console.log('El cliente quiere ' + CompraCliente2 + ' café latte');
    } else{
        console.log('El cliente no quiere café latte')
    };

    let PedidoCliente3 = prompt('Quieres tomar café con leche? El costo es 1$ c/u.')
    if ((PedidoCliente3 == 'Si') || (PedidoCliente3 == 'si')){
        console.log('El cliente quiere café con leche')
        let CompraCliente3 = prompt('Cuantos cafes deseas?');
        console.log('El cliente quiere ' + CompraCliente3 + ' café con leche');
    } else{
        console.log('El cliente no quiere café con leche')
    };
    };

Pedido();

// Suma de pedidos

var resultado = 0;

function sumar(param1, param2, param3){
    resultado = param1*2 + param2 + param3;
};

sumar(2, 1, 1);

console.log('Lo que se debe cobrar es: ' + resultado + ' $');


