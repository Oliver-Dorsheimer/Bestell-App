function dishTemplate(index){
    return `
        <article class = "dish_card">
            <img class = "dish_img" src = "./assets/img/${dishes[index].picture}.jpg">
            <div class = "dish_info">
                <h3>${dishes[index].name}</h3>
                <p>${dishes[index].description}</p>
            </div>
            <div class = "dish_price_and_order">
                <h3>${dishes[index].price}</h3>
                <button class = "dish_order_button">Add to Basket</button>
            </div>
        </article>    
    `
};