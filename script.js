function renderElements(){
    setIds();
    renderElementsFromCategory("burger_and_sandwiches_content");
    renderElementsFromCategory("pizza_content");
    renderElementsFromCategory("salad_content");
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
        }else{

        };
    };
};
/*
function renderBasketContents(index){
    if(basket.length != null){
        for(let i = 0; i < basket.length; i++){
          document.getElementById("basket_content").innerHTML +=  basketContentTemplate(i);
        };
    }else{

    };
};
*/
/*
function renderElementFromBasket(basketIndex){
    document.getElementById("basket_content").innerHTML += basketContentTemplate(basketIndex);
};

function regenerateElementFromBasket(basketIndex){
    basket[basketIndex].amount = Number(basket[basketIndex].amount) + 1;
    document.getElementById(`title_amount${basketIndex}`).innerHTML = basketTitleTemplate(basketIndex);
    document.getElementById(`add_and_remove_amount${basketIndex}`).innerHTML = basket[basketIndex].amount;
};
*/
function reRenderBasket(id){
    setInDishesJSON("amount", 1, findJSONIndexById(id));
    document.getElementById("basket_content").innerHTML = "";
    for(let i =0; i <basketArray.length; i++){
        createElementInBasket(basketArray[i], findJSONIndexById(basketArray[i]));
    };
};

function createElementInBasket(id, indexJSON){
    document.getElementById("basket_content").innerHTML += basketContentTemplate(id, indexJSON);
    setDnoneStates(indexJSON);
    refreshPriceCalculation();
};

function refreshElementInBasket(indexJSON){
    document.getElementById(`title_amount${indexJSON}`).innerHTML = basketTitleTemplate(indexJSON);
    document.getElementById(`add_and_remove_amount${indexJSON}`).innerHTML = getFromDishesJSON("amount", indexJSON);
    document.getElementById(`current_price_of_element${indexJSON}`).innerHTML = `${getFromDishesJSON("amount", indexJSON) * getFromDishesJSON("price", indexJSON)}€`;
    
    setDnoneStates(indexJSON);
    refreshPriceCalculation();
};

function refreshPriceCalculation(){
    let value = 0;
    for (let i = 0; i< basketArray.length; i++){
        let indexJSON = findJSONIndexById(basketArray[i]);
        value += getFromDishesJSON("amount", indexJSON) * getFromDishesJSON("price", indexJSON);
    };
    document.getElementById("subtotal_amount").innerHTML = `${value}€`;
    document.getElementById("total_price").innerHTML = `${value + 4.99}€`;
    document.getElementById(`basket_order_button_price`).innerHTML = ` ${value + 4.99}`;
};

function buyBasket(){
    removeAllElementsFromBasket();
};

function addToBasket(indexJSON, id){
    
    if(isInBasket(indexJSON)){
        setInDishesJSON("amount", getFromDishesJSON("amount", indexJSON) + 1, indexJSON);
        refreshElementInBasket(indexJSON);
    }else{
        basketArray.push(getFromDishesJSON("id", indexJSON));
        createElementInBasket(id, findJSONIndexById(id));
    };

    console.log(dishes)
    console.log(basketArray)
    /*
    if(isArticleInBasket(index)){
        let basketIndex = basket.findIndex(basketElement => basketElement.id == menuID);
        if(basket[basketIndex].amount > 1){
            document.getElementById(`order_element_delete_icon${basketIndex}`).classList.add("dNone");
            document.getElementById(`order_element_subtract_icon${basketIndex}`).classList.remove("dNone");
        };
        regenerateElementFromBasket(basketIndex);
    }else{
        dishes[index].inBasket = true;
        basket.push(dishes[index]);
        let basketIndex = basket.findIndex(basketElement => basketElement.id == menuID);
        renderElementFromBasket(basketIndex);
        document.getElementById(`order_element_subtract_icon${basketIndex}`).classList.add("dNone");
        console.log(dishes);
        console.log(basket);
        console.log(basket[basketIndex].amount);
    };*/
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
    for(let i = 0; i < dishes.length; i++){
        setInDishesJSON("amount", 1, i);
    };
     document.getElementById("basket_content").innerHTML = "";
};

function removerAllElementsFromBasket(){
    for(let i = 0; i < basketArray.length; i++){
        basketArray.splice(i, 1);
    };
};

function removeElementFromBasket(id){
    let indexArray = basketArray.indexOf(id);
    basketArray.splice(indexArray, 1);
    reRenderBasket(id);
};

function setDnoneStates(indexJSON){
    if(getFromDishesJSON("amount", indexJSON) == 1){
        document.getElementById(`order_element_subtract_icon${indexJSON}`).classList.add("dNone");
        document.getElementById(`order_element_delete_icon${indexJSON}`).classList.remove("dNone");
    }else if(getFromDishesJSON("amount", indexJSON) > 1){
        document.getElementById(`order_element_delete_icon${indexJSON}`).classList.add("dNone");
        document.getElementById(`order_element_subtract_icon${indexJSON}`).classList.remove("dNone");
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
    console.log(dishes.findIndex(dishElement => dishElement.id == id))
    return dishes.findIndex(dishElement => Number(dishElement.id) == id);
};
/*
function subtractFromBasket(basketIndex){
    if(basket[basketIndex].amount > 1){
        clearElement(basketIndex);
        basket[basketIndex].amount--;
        regenerateElementFromBasket(basketIndex);
    }else{

    };
};

function removeFromBasket(){

};

function clearElement(id){
    document.getElementById("basket_content").innerHTML = "";
};

function isArticleInBasket(index){
    if(dishes[index].inBasket == true){
        return true;
    }else{
        return false;
    };
};

function setDnoneToArticleIcons(){

};
*/

/*
if(dishes[index].inBasket == false){
        dishes[index].inBasket = true;
        document.getElementById("basket_content").innerHTML += basketContentTemplate(index);
        document.getElementById(`order_element_delete_icon${index}`).setAttribute("src","./assets/icon/delete_icon.png")
    }else if (Number(dishes[index].amount) > 0){
        document.getElementById(`order_element_delete_icon${index}`).setAttribute("src", "./assets/icon/minus_icon.png")
        regenerateElementFromBasket(index);
    }else{
        regenerateElementFromBasket(index);
    };

*/