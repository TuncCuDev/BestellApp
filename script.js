
function renderMenu(){
    let mainDishesRef = document.getElementById('mainDishes');
    mainDishesRef.innerHTML = "";

    for (let index = 0; index < dishes.length; index++) {
        mainDishesRef.innerHTML += getMainTemplate(dishes[index], index);
    }
}    

function renderBasket(){
    let basketDishesRef = document.getElementById('basketOrder');
    basketDishesRef.innerHTML = "";

    for (let j = 0; j < basket.length; j++) {
        basketDishesRef.innerHTML += getBasketTemplate(basket[j]);
    }
}

function moveToBasket(index){
    basket.push({
        name: dishes[index].name,
        price: dishes[index].price,
        amount: 1
    })

    renderBasket();
}