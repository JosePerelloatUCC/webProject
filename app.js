let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=> {
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        images: '1.jpg',
        price: 95.000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        images: '2.jpg',
        price: 95.000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        images: '3.jpg',
        price: 95.000
    },
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("item")
        newDiv.innerHTML = `
            <img src="images/${value.images}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onClick="addToCard(${key})">Add To Card</button>
            `;
            list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="images/${value.images}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
                <button onClick="ChangeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onClick="ChangeQuantity(${key}, ${value.quantity + 1})"></button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innterText = count;
}

function ChangeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price; 
    }
    reloadCard();
}

//<div>${value.quantity}</div>