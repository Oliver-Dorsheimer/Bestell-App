function dishTemplate(index){
    return `
        <article class = "dish_card">
            <img class = "dish_img" src = "./assets/img/${dishes[index].picture}.jpg">
            <div class = "dish_info">
                <h4>${dishes[index].name}</h4>
                <p>${dishes[index].description}</p>
            </div>
            <div class = "dish_price_and_order">
                <h4>${dishes[index].price}</h4>
                <button class = "dish_order_button" onclick = "addToBasket(${index}, ${dishes[index].id})">Add to Basket</button>
            </div>
        </article>
    `
};

function basketContentTemplate(index){
    return `<div class = "order_element_container">
        <div class = "order_element_title">
            <p class = "order_title" id = "title_amount${index}">${dishes[index].amount} x <span>${dishes[index].name}</span></p>
        </div/
        <div class = "order_element_price">
            <div class = "price_control">
                <div class = "add_and_remove_container">
                    <img id = "order_element_delete_icon${index}">
                    <p id = "add_and_remove_amount${index}">${dishes[index].amount}</p>
                    <img class = "order_element_delete_icon" src = "./assets/icon/add_icon.png">
                </div>
                <p>${Number(dishes[index].price) * Number(dishes[index].amount)}€</p>
            </div>
        </div>
    </div>
    `
};

function basketTitleTemplate(index){
    return `${dishes[index].amount} x <span>${dishes[index].name}</span>`
}