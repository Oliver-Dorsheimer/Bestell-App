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
    return `<div class = "basket_element_container">
        <section class = "basket_section_element_title_and_priceControl">
            <p class = "basket_title" id = "title_amount${indexJSON}">${getFromDishesJSON("amount", indexJSON)} x <span>${getFromDishesJSON("name", indexJSON)}</span></p>
            <div class = "add_and_remove_container">
                    <button id = "order_element_delete_icon${indexJSON}" class = "order_element_delete_icon basket_buttons" onclick = "removeElementFromBasket(${id})">
                        <img  src = "./assets/icon/delete_icon.png">
                    </button>
                    <button id = "order_element_subtract_icon${indexJSON}" class = "basket_buttons" onclick = "subtractFromElementInBasket(${indexJSON})">
                        <img  src = "./assets/icon/minus_icon.png">
                    </button>
                    <p id = "add_and_remove_amount${indexJSON}">${getFromDishesJSON("amount", indexJSON)}</p>
                    <button id = "order_element_add_icon" class = "order_element_delete_icon basket_buttons" onclick = "addToElementInBasket(${indexJSON})">
                        <img  src = ./assets/icon/add_icon.png>
                    </button>
            </div>
        </section>
        <section class = "basket_section_price_and_delete">
            <button id = "order_element_delete_element_button${indexJSON}" class = "order_element_delete_icon basket_buttons" onclick = "removeElementFromBasket(${id})">
                <img  src = "./assets/icon/delete_icon.png">
            </button>
            <p id = "current_price_of_element${indexJSON}">${parseInt(getFromDishesJSON("euro", indexJSON))},${getFromDishesJSON("cents", indexJSON)}€</p>
        </section>
    </div>
    `
};

function basketTitleTemplate(indexJSON){
    return `${getFromDishesJSON("amount", indexJSON)} x <span>${getFromDishesJSON("name", indexJSON)}</span>`
};