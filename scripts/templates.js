function getMainTemplate(dishesItem){
    return `<section class="dishInfo">
            <div class="mainDish">
            <h3> ${dishesItem.name} </h3>
            <p>${dishesItem.description} </p>
            <span>${dishesItem.price.toFixed(2)} € </span>
            </div>
            <div class="addToBasket" onclick="moveToBasket()">+</div>
            </section>`
}