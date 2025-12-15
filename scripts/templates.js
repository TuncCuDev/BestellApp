function getMainTemplate(dishesItem){
    return `<h3> ${dishesItem.name} </h3>
            <p>${dishesItem.description} </p>
            <span>${dishesItem.price.toFixed(2)} € </span>`
}