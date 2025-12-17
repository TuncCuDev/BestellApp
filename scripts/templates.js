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

function getBasketTemplate(basketItem){
    return `<section class="basketRow">
            <section class="basketInfo">
            <div class="basket-Item-Name"> ${dishesItem.name} </div>
            <div> class="basket-pls-button">+</div>
            <div class="basket-Item-Amount"                   </div>
            <div class="basket-mns-button">-</div>
            <div class="basket-Item-Price" ${dishesItem.price} </div>
            <img src="./Favicon/mulleimer.png" class="delete-button"> alt="Delete Button">
            </section>
            </section>` 
}