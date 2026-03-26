function dishTemplate(index){
    return `
        <article class = "dish_card">
            <img class = "dish_img" src = "./assets/img/${getFromDishesJSON("picture", index)}.jpg">
            <div class = "dish_info">
                <h4>${getFromDishesJSON("name", index)}</h4>
                <p>${getFromDishesJSON("description", index)}</p>
            </div>
            <div class = "dish_price_and_order">
                <h4>${getFromDishesJSON("price", index)}€</h4>
                <button class = "dish_order_button" onclick = "addToBasket(${index}, ${getFromDishesJSON("id", index)})">Add to Basket</button>
            </div>
        </article>
    `
};

function basketContentTemplate(basketIndex, ){
    return `<div class = "order_element_container">
        <div class = "order_element_title">
            <p class = "order_title" id = "title_amount${basketIndex}">${basket[basketIndex].amount} x <span>${basket[basketIndex].name}</span></p>
        </div/
        <div class = "order_element_price">
            <div class = "price_control">
                <div class = "add_and_remove_container">
                    <img id = "order_element_delete_icon${basketIndex}" onclick = "" src = "./assets/icon/delete_icon.png">
                    <img id = "order_element_subtract_icon${basketIndex}" onclick = "subtractFromBasket(${basketIndex})" src = "./assets/icon/minus_icon.png">
                    <p id = "add_and_remove_amount${basketIndex}">${basket[basketIndex].amount}</p>
                    <img class = "order_element_delete_icon" src = ./assets/icon/add_icon.png>
                </div>
                <p>${Number(basket[basketIndex].price) * Number(basket[basketIndex].amount)}€</p>
            </div>
        </div>
    </div>
    `
};

function basketTitleTemplate(basketIndex){
    return `${basket[basketIndex].amount} x <span>${basket[basketIndex].name}</span>`
}