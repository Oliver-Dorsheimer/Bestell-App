function dishTemplate(index){
    return `
        <article class = "dish_card">
            <img class = "dish_img" src = "./assets/img/${dishes[index].picture}.jpg">
            <div class = "dish_info">
                <h4>${dishes[index].name}</h4>
                <p>${dishes[index].description}</p>
            </div>
            <div class = "dish_price_and_order">
                <h4>${dishes[index].price}€</h4>
                <button class = "dish_order_button" onclick = "addToBasket(${index}, ${dishes[index].id})">Add to Basket</button>
            </div>
        </article>
    `
};

function basketContentTemplate(menuID, ){
    return `<div class = "order_element_container">
        <div class = "order_element_title">
            <p class = "order_title" id = "title_amount${menuID}">${dishes[menuID].amount} x <span>${dishes[menuID].name}</span></p>
        </div/
        <div class = "order_element_price">
            <div class = "price_control">
                <div class = "add_and_remove_container">
                    <img id = "order_element_delete_icon" onclick = "" src = "./assets/icon/delete_icon.png">
                    <img id = "order_element_subtract_icon" onclick = "suptractFromBasket(${menuID})" src = "./assets/icon/minus_icon.png">
                    <p id = "add_and_remove_amount${menuID}">${dishes[menuID].amount}</p>
                    <img class = "order_element_delete_icon" src = ./assets/icon/add_icon.png>
                </div>
                <p>${Number(dishes[menuID].price) * Number(dishes[menuID].amount)}€</p>
            </div>
        </div>
    </div>
    `
};

function basketTitleTemplate(index){
    return `${dishes[index].amount} x <span>${dishes[index].name}</span>`
}