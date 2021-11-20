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


const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCarClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-Title').textContent;
    const itemPrice = item.querySelector('.item-Price').textContent;
    const itemImg = item.querySelector('.item-Img').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImg);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImg){

    // PROBLEMA (DUPLICADO)
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('.shoppingCartItemTittle');

    for(let i = 0; i < elementsTitle.length; i++){
        if (elementsTitle[i].innerText === itemTitle){
            const elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
        };
        elementQuantity.value++;
        return;
    };

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">

        <div class="col-6">
            <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImg} width="100px">
                <h6 class="shoppingCartItemTittle text-truncate ml-3 mb-0 ms-3">${itemTitle}</h6>
            </div>
        </div>

        <div class="col-2">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>

        <div class="col-4">
            <div class=" d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input type="number" class="shoppingCartItemQuantity" value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div> `;

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    shoppingCartRow.querySelector('.shoppingCartItemQuantity');
    addEventListener('change', quantityChanged);

    updateShoppingCartTotal();

};

function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach(shoppingCartItem => {

        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');

        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));

        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');

        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });

    shoppingCartTotal.innerHTML = `$ ${total}`;
};

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
};

function quantityChanged(event) {
    const input = event.target;
    if (input.value <= 0){
        input.value = 1;
    };
    updateShoppingCartTotal();
};

function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
};