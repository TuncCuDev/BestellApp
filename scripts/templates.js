function getMenuTemplate(continentalMenu, menuItem){

     for (let j = 0; j < continentalMenu.length; j++) {
        const menuItem = continentalMenu[j];
        menuItemHTNL += `<p> `
    
    }
    return `<div class="menuList">
    <p> ${menus.name} </p>
    <p> ${menus.description} </p>
    <p> ${menus.price} </p>
    </div>`
}