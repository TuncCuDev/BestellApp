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
        basketDishesRef.innerHTML += getBasketTemplate(basket[j], j);
    }
    renderPrice();
}

function moveToBasket(index){
    let dish = dishes[index];

    let sameDish = basket.find(item => item.name === dish.name)
    // Prüft, ob das Item vorhanden ist/identisch ist?!

    if (sameDish){
        sameDish.amount++;
    }
    else {
        basket.push({
            name: dish.name,
            price: dish.price,
            amount: 1
        });
    }
         renderBasket();
         renderPrice();
    }

function addToAmount(i){
    basket[i].amount++;
    renderBasket();
}

function removeFromAmount(i){

    if (basket[i].amount > 1){
    basket[i].amount--;
    }
    else {
        basket.splice(i, 1);
    }
    renderBasket();
}

function deleteDish(i){
    basket.splice(i, 1);
    renderBasket();
}

function renderPrice(){
    let delivery = 5.00 
    let subTotal = 0.00

    for (let i = 0; i < basket.length; i++) {
        subTotal += basket[i].price * basket[i].amount
    }

    document.getElementById('subTotal').innerHTML = subTotal.toFixed(2);
    document.getElementById('deliveryCost').innerHTML = delivery.toFixed(2);
    document.getElementById('total').innerHTML = (subTotal + delivery).toFixed(2);
}