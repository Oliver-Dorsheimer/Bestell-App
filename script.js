function renderElements(){
    setIds();
    renderElementsFromCategory("burger_and_sandwiches_content");
    renderElementsFromCategory("pizza_content");
    renderElementsFromCategory("salad_content");
    renderDefaultBasket();
};

function setIds(){
    for(let i = 0; i < dishes.length; i++){
        dishes[i].id = i + 2;
    };
};

function renderElementsFromCategory(category){
    for(let i = 0; i < dishes.length; i++){
        if(dishes[i].category == category){
            document.getElementById(category).innerHTML += dishTemplate(i);
        };
    };
};

function reRenderBasket(id){
    if(basketArray.length == 0){
        
    }else{
        setInDishesJSON("amount", 1, findJSONIndexById(id));
        document.getElementById("basket_content").innerHTML = "";
        for(let i =0; i <basketArray.length; i++){
            createElementInBasket(basketArray[i], findJSONIndexById(basketArray[i]));
        };
    };
};

function createElementInBasket(id, indexJSON){
    document.getElementById("basket_content").innerHTML += basketContentTemplate(id, indexJSON);
    setDnoneStates(indexJSON);
    refreshPriceCalculation();
};

function refreshElementInBasket(indexJSON){
    let currentPriceOfElement = getPriceInCent(getFromDishesJSON("price", indexJSON)) * getFromDishesJSON("amount", indexJSON);
    document.getElementById(`title_amount${indexJSON}`).innerHTML = basketTitleTemplate(indexJSON);
    document.getElementById(`add_and_remove_amount${indexJSON}`).innerHTML = getFromDishesJSON("amount", indexJSON);
    document.getElementById(`current_price_of_element${indexJSON}`).innerHTML = `${calculateEuro(currentPriceOfElement, parseInt(0))},${calculateCents(currentPriceOfElement, parseInt(0))}€`;
    setDnoneStates(indexJSON);
    refreshPriceCalculation();
};

function refreshPriceCalculation(bool){
    if(basketArray.length === 0){
        document.getElementById("subtotal_amount").innerHTML = "";
        document.getElementById("total_price").innerHTML = "";
        document.getElementById(`basket_order_button_price`).innerHTML = "";
    }else{
        let value = 0;
        let priceInCent = 0;
        for (let i = 0; i< basketArray.length; i++){
            let indexJSON = findJSONIndexById(basketArray[i]);
            priceInCent += getPriceInCent(getFromDishesJSON("price", indexJSON)) * getFromDishesJSON("amount", indexJSON);
        };
        document.getElementById("subtotal_amount").innerHTML = `${calculateEuro(priceInCent, parseInt(0))},${calculateCents(priceInCent, parseInt(0))}€`;
        priceInCent = priceInCent + getPriceInCent([4,99]);
        document.getElementById("total_price").innerHTML = `${calculateEuro(priceInCent, parseInt(0))},${calculateCents(priceInCent, parseInt(0))}€`;
        document.getElementById(`basket_order_button_price`).innerHTML = ` ${calculateEuro(priceInCent, parseInt(0))},${calculateCents(priceInCent, parseInt(0))}`;
    };
};

function getPriceInCent(price){
    return price[0] * 100 + price[1] % 100;
};

function calculateEuro(priceInCent, deliveryFeeInCents){
    return parseInt(priceInCent / 100 + deliveryFeeInCents / 100);
};

function calculateCents(priceInCent, deliveryFeeInCents){
    return parseInt(priceInCent % 100 + deliveryFeeInCents % 100);
};

function buyBasket(){
    if(basketArray.length === 0){
    }else{
        removeAllElementsFromBasket();
    refreshPriceCalculation();
    openPurchaseConfirmDialog();
    renderDefaultBasket();
    };
};

function addToBasket(indexJSON, id){
    if(basketArray.length === 0){
        document.getElementById("basket_content").innerHTML = "";
        document.getElementById("price_and_delivery_table").classList.remove("color_dark");
        document.getElementById("basket_total").classList.remove("color_dark");
        document.getElementById("basket_price_bar").classList.remove("color_dark");
        if(isInBasket(indexJSON)){
            setInDishesJSON("amount", getFromDishesJSON("amount", indexJSON) + 1, indexJSON);
            refreshElementInBasket(indexJSON);
        }else{
            basketArray.push(getFromDishesJSON("id", indexJSON));
            createElementInBasket(id, findJSONIndexById(id));
        };
    }else{
        if(isInBasket(indexJSON)){
            setInDishesJSON("amount", getFromDishesJSON("amount", indexJSON) + 1, indexJSON);
            refreshElementInBasket(indexJSON);
        }else{
            basketArray.push(getFromDishesJSON("id", indexJSON));
            createElementInBasket(id, findJSONIndexById(id));
        };
    }
    
};

function addToElementInBasket(indexJSON){
    setInDishesJSON("amount", getFromDishesJSON("amount", indexJSON) + 1, indexJSON);
    refreshElementInBasket(indexJSON);
};

function subtractFromElementInBasket(indexJSON){
    let currentAmount = getFromDishesJSON("amount", indexJSON);
    setInDishesJSON("amount", currentAmount - 1, indexJSON);
    refreshElementInBasket(indexJSON);
};

function removeAllElementsFromBasket(){
    basketArray = [];
    document.getElementById("basket_content").innerHTML = "";
    for(let i = 0; i < dishes.length; i++){
        setInDishesJSON("amount", 1, i);
    };
};

function removerAllElementsFromBasket(){
    for(let i = 0; i < basketArray.length; i++){
        basketArray.splice(i, 1);
    };
};

function removeElementFromBasket(id){
    if(basketArray >= 1){
        removeAllElementsFromBasket();
        renderDefaultBasket();
    }else{
        let indexArray = basketArray.indexOf(id);
        basketArray.splice(indexArray, 1);
        reRenderBasket(id);
    };
};

function setDnoneStates(indexJSON){
    if(getFromDishesJSON("amount", indexJSON) == 1){
        document.getElementById(`order_element_subtract_icon${indexJSON}`).classList.add("dNone");
        document.getElementById(`order_element_delete_icon${indexJSON}`).classList.remove("dNone");
        document.getElementById(`order_element_delete_element_button${indexJSON}`).classList.add("dNone");
    }else if(getFromDishesJSON("amount", indexJSON) > 1){
        document.getElementById(`order_element_delete_icon${indexJSON}`).classList.add("dNone");
        document.getElementById(`order_element_subtract_icon${indexJSON}`).classList.remove("dNone");
        document.getElementById(`order_element_delete_element_button${indexJSON}`).classList.remove("dNone");
    };
};

function isInBasket(indexJSON){
    if(basketArray.indexOf(getFromDishesJSON("id", indexJSON)) == -1){
        return false;
    }else{
        return true;
    };
};

function findJSONIndexById(id){
    return dishes.findIndex(dishElement => Number(dishElement.id) == id);
};

function openPurchaseConfirmDialog(){
    document.getElementById("dialog_purchase_confirmed").showModal();
    setTimeout(closePurchaseConfirmDialog, 2500);
};

function closePurchaseConfirmDialog(){
    document.getElementById("dialog_purchase_confirmed").close();
};

function toggleBasketVisibility(){
    if(mobileBasketVisible){
        document.getElementById("basket_wrapper").classList.add("dNone");
        mobileBasketVisible = false;
    }else{
        document.getElementById("basket_wrapper").classList.remove("dNone");
        mobileBasketVisible = true;
    }
};

function openMobileBasket(){

    if(mobileBasketVisible){
        document.getElementById("mobile_basket_dialog").close();
        mobileBasketVisible = false;
    }else{
        document.getElementById("mobile_basket_dialog").showModal();
        mobileBasketVisible = true;
    };
};

function setMobileBasket(){
    document.getElementById("mobile_basket_dialog")
};

function renderDefaultBasket(){
    document.getElementById("basket_content").innerHTML = defaultBasketTemplate();
    document.getElementById("price_and_delivery_table").classList.add("color_dark");
    document.getElementById("basket_total").classList.add("color_dark");
    document.getElementById("basket_price_bar").classList.add("color_dark");
    
};