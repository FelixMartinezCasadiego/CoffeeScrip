// Prompt de Saludo

var IngresoCliente = prompt('Ingrese su Nombre:');
console.log('Mi nombre es: ' + IngresoCliente);
alert('Welcome to CoffeeScrip' + " " + IngresoCliente + " !");

// Creación de objeto
/*
function Cliente1(var1, var2, var3){ 
    

    this.cliente = var1;
    this.cafe = var2;
    this.despedida = var3;

}; 

const Persona1 = new Cliente1(prompt('Cual es tu nombre? '), prompt('cuantos cafes quieres? '), alert('Estará en 2min ! Gracias por tu compra !'));

console.log(Persona1);*/

// Array con entradas
/*
var concurso1 = prompt('Quieres participar tu y 2 amigos en un concurso? (cupos limitados)') 
const concursoNombres = [];
var cantidadConcurso = 3;

function concursantes1(){


    while (concursoNombres.length < cantidadConcurso){
        let entradaConcurso = prompt('Nombre del concursante:');
        concursoNombres.push(entradaConcurso.toLowerCase());
    }

    console.log('Total concursantes: ' + concursoNombres)
};

if ( (concurso1 == 'Si') || (concurso1 == 'si') || (concurso1 == 'SI')){
    concursantes1();       
}else{
    console.log('Cliente no quiere participar')
};*/

// Orden de objetos

const tiposCafes = [
    {nombre: 'Capuchino', costo: 3},
    {nombre: 'Latte Coffee', costo: 1},
    {nombre: 'Milk Coffee', costo: 2}
];

const cafeOrdenados = tiposCafes.sort((ca1, ca2) => {
    return ca1.costo - ca2.costo
});

console.log(cafeOrdenados);

// Array con objetos

const informacionCli = [
    {id:1, nombre:IngresoCliente},
    {id:2, nombre: 'cafe'},
];

for (var informacionCli1 of informacionCli) {
    console.log('ID: ' + informacionCli1.id + ' - Información pedido: ' + informacionCli1.nombre);
}














