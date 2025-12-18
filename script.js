
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
}

function moveToBasket(index){
    let dish = dishes[index];

    let sameDish = basket.find(item => item.name === dish.name)
    // Prüft, ob vorhanden

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
    }


function deleteDish(i){
    basket.splice(i, 1);
    renderBasket();
}