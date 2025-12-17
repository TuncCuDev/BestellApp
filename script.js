
function renderMenu(){
    let mainDishesRef = document.getElementById('mainDishes');
    mainDishesRef.innerHTML = "";

    for (let index = 0; index < dishes.length; index++) {
        const dishesItem= dishes[index]
        mainDishesRef.innerHTML += getMainTemplate(dishesItem);
    }
}    

function basketOrder (){
    let basketDishesRef = document.getElementById('basketOrder')
    basketDishesRef.innerHTML = "";

    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        const basketItem = basket[basketIndex];
        basketDishesRef += getBasketTemplate(basketItem); 
    }
}

function moveToBasket(){
    document.getElementById('basketOrder').innerHTML += getBasketTemplate(basketItem);
}