function renderMenu(){
    let mainDishesRef = document.getElementById('mainDishes')
    mainDishesRef.innerHTML = "";
    for (let index = 0; index < dishes.length; index++) {
        const dishesItem= dishes[index]
        mainDishesRef.innerHTML += getMainTemplate(dishesItem)
    }
}    

funciton moveToBasket(){
    let orderDishes = dishes
}