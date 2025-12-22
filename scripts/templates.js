function getMainTemplate(dish, index){
    return `<section class="dishInfo">
            <div class="mainDish">
            <h3> ${dish.name} </h3>
            <p>${dish.description} </p>
            <span>${dish.price.toFixed(2)} € </span>
            </div>
            <div class="addToBasket" onclick="moveToBasket(${index})">+</div>
            </section>`
}

function getBasketTemplate(dish, i){
    return `<section class="basketRow">
            <section class="basketInfo">
            <div class="basket-Item-Name"> ${dish.name} </div>
            <div class="basket-amount-counter">
            <div class="basket-pls-button" onclick="addToAmount(${i})">+</div>
            <div class="basket-Item-Amount" id="amountNumber"> ${dish.amount} </div>
            <div class="basket-mns-button" onclick="removeFromAmount(${i})">-</div>
            </div>
            <div class="basket-Item-Price" id="amountPrice"> ${(dish.price * dish.amount).toFixed(2)} €</div>
            <img src="./Favicon/mulleimer.png" class="delete-button" onclick="deleteDish(${i})" alt="Delete Button">
            </section>
            </section>` 
}