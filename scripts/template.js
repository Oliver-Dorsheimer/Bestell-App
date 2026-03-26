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

function basketContentTemplate(id, indexJSON){
    return `<div class = "order_element_container">
        <div class = "order_element_title">
            <p class = "order_title" id = "title_amount${indexJSON}">${getFromDishesJSON("amount", indexJSON)} x <span>${getFromDishesJSON("name", indexJSON)}</span></p>
        </div/
        <div class = "order_element_price">
            <div class = "price_control">
                <div class = "add_and_remove_container">
                    <img id = "order_element_delete_icon${indexJSON}" onclick = "removeElementFromBasket(${id})" src = "./assets/icon/delete_icon.png">
                    <img id = "order_element_subtract_icon${indexJSON}" onclick = "subtractFromElementInBasket(${indexJSON})" src = "./assets/icon/minus_icon.png">
                    <p id = "add_and_remove_amount${indexJSON}">${getFromDishesJSON("amount", indexJSON)}</p>
                    <img id = "order_element_add_icon" class = "order_element_delete_icon" onclick = "addToElementInBasket(${indexJSON})" src = ./assets/icon/add_icon.png>
                </div>
                <p id = "current_price_of_element${indexJSON}">${getFromDishesJSON("price", indexJSON) * getFromDishesJSON("amount", indexJSON)}€</p>
            </div>
        </div>
    </div>
    `
};

function basketTitleTemplate(indexJSON){
    return `${getFromDishesJSON("amount", indexJSON)} x <span>${getFromDishesJSON("name", indexJSON)}</span>`
};