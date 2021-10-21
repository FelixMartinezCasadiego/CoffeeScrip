// Segunda Entrega

// Pedir número mediante prompt y si es mayor a 1000 mostrar un alert

var CantidadPedido = prompt('Cuantas bebidas deseas?');
console.log('La cantidad de bebida que pediste es: ' + CantidadPedido);

if((CantidadPedido >= 1000)){
    alert('No crees que ' + CantidadPedido + ' es demasiado, take it easy');
}else{
    console.log('Gracias por la compra de ' + CantidadPedido + ' cafes');
};

// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola

var NombreCliente = prompt('Cual es el Nombre de la persona que recibe la bebida?');
console.log('El nombre del cliente es: ' + NombreCliente);

if((NombreCliente == 'Hola') || (NombreCliente == 'hola')){
     alert('Coloca un nombre correcto, estas salundo');
}else{
     console.log('Gracias por realizar tu compra ' + NombreCliente);
};

// Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert

var TiempoEspera = prompt('Cuantos minutos duraste esperando tu bebida?');

if(( TiempoEspera >= 10 && TiempoEspera <= 50)){
    alert('Disculpa por tanto tiempo de demora');
}else{
    console.log('Los minutos de espera fue: ' + TiempoEspera);
};