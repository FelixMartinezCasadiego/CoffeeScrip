// Class modeladora de objetos
/*
class Venta{
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Objetos - Productos a ofrecer

const producto0 = new Venta (0, 'capuchino', 3);
const producto1 = new Venta (1, 'Latte Coffee', 2);
const producto2 = new Venta (2, 'Milk Coffee', 1);

let arrayProductos = [producto0, producto1, producto2];
*/

// Zona del carrito

const addShoppingCarrito = document.querySelectorAll('.AddCarrito');

addShoppingCarrito.forEach( (addToCarButton) => {
    addToCarButton.addEventListener('click', addToCarClicked);
});

const shoppingCarItemsContainer = document.querySelector('.shoppingCarItemsContainer');

function addToCarClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-Title').textContent;
    const itemPrice = item.querySelector('.item-Price').textContent;
    const itemImg = item.querySelector('.item-Img').src;

    addItemToShoppingCar(itemTitle, itemPrice, itemImg);
}

function addItemToShoppingCar(itemTitle, itemPrice, itemImg){
    const shoppingCarRow = document.createElement('div');
    const shoppingCartContent = 
}
