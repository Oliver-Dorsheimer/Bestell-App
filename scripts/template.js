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
                <button class = "dish_order_button">Add to Basket</button>
            </div>
        </article>    
    `
};