function getMainTemplate(dishes, index){
    return `<section class="dishInfo">
            <div class="mainDish">
            <h3> ${dishes.name} </h3>
            <p>${dishes.description} </p>
            <span>${dishes.price.toFixed(2)} € </span>
            </div>
            <div class="addToBasket" onclick="moveToBasket(${index})">+</div>
            </section>`
}

function getBasketTemplate(dishes){
    return `<section class="basketRow">
            <section class="basketInfo">
            <div class="basket-Item-Name"> ${dishes.name} </div>
            <div class="basket-pls-button">+</div>
            <div class="basket-Item-Amount"> ${dishes.amount} </div>
            <div class="basket-mns-button">-</div>
            <div class="basket-Item-Price"> ${dishes.price} </div>
            <img src="./Favicon/mulleimer.png" class="delete-button" alt="Delete Button">
            </section>
            </section>` 
}