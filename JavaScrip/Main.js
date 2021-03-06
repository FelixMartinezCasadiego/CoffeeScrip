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

    // (DUPLICADO)
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTittle');

    for(let i = 0; i < elementsTitle.length; i++){
        if (elementsTitle[i].innerText === itemTitle){
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            elementQuantity.value++;
            updateShoppingCartTotal();
            return;
        }; 
    };

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">

        <div class="col-6">
            <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImg} width="100px">
                <h6 class="shoppingCartItemTittle text-truncate ml-3 mb-0 ms-3 text-white fs-4">${itemTitle}</h6>
            </div>
        </div>

        <div class="col-2">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice text-white fs-4">${itemPrice}</p>
            </div>
        </div>

        <div class="col-4">
            <div class=" d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shoppingCartItemQuantity" type="number" value="1">
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
    alert('Thanks! Enjoy your order!');
    location.assign('../index.html');
};

// Formulario

    // Parte de pagos

var pagoForm = ['Cash', 'Debit card', 'Credit card'];

function cargaPagos(pagoForm) {
    var selectPagoForm = $('#Pago-Form');

    for (let pagosForm of pagoForm){
        selectPagoForm.append("<option value='"+ pagosForm +"'>" + pagosForm + "</option>");
    }
};

cargaPagos (pagoForm);

    // Parte de servicios

var servicioForm = ['Bring to the table', 'Take away'];

function cargaServicios(servicioForm){
    var selectServicios = $('#Serv-Form');

    for (let serviciosForm of servicioForm){
        selectServicios.append("<option value='"+ serviciosForm+"'>" + serviciosForm + "</option>");
    } 
};

cargaServicios(servicioForm);

    // Validaci??n formulario

function validarForm() {

        // Validaci??n "Nombre"
    var nombreForm = $('#Nombre-Form');
    var textoNombre = $('#Texto-Form');

    if (nombreForm.val() == ''){
        let mensajeNombreForm = '<p class="bg-warning text-black fw-bold">Please write your name</p>';
        textoNombre.html(mensajeNombreForm);
        nombreForm.focus();
        return false;
    } else {
        textoNombre.html('');
    }    


        // Validaci??n "Consideraciones adicionales"
    var ConsiForm = $('#Consi-Form');
    var textoConsi = $('#TextConsi-Form');

    if (ConsiForm.val() == ''){
        let mensajeConsiForm = '<p class="bg-warning text-black fw-bold">Please enter information for your order .. such as: use lactose-free milk, place table number, others</p>';
        textoConsi.html(mensajeConsiForm);
        ConsiForm.focus();
        return false;
    } else {
        textoConsi.html('');
    }
};

// Zona de animaci??n
function mostrarCafe() {
    $('#Mostrar-cafe').fadeIn(1000);
};

function mostrarCafe2() {
    $('#Mostrar-cafe2').fadeIn(1000);
};

function mostrarCafe3() {
    $('#Mostrar-cafe3').fadeIn(1000);
};

function ocultarForm() {
    $('#Ocultar-Form').fadeOut(1000);
};

// Validaci??n de datos del form

    //Aplicando API

$('#verif-Nombre').click(()=>{
    $.ajax({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: ()=>{
            validarForm();
            ocultarForm();
            mostrarCafe();
            mostrarCafe2();
            mostrarCafe3();
        },
        error: ()=>{
            alert('Error! Could not load');
        } 
    });
})

$('#Nombre-Form').focusout(function(){
    validarForm();
});










