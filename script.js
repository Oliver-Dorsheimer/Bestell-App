function renderElements(){
    setIds();
    renderElementsFromCategory("burger_and_sandwiches_content");
    renderElementsFromCategory("pizza_content");
    renderElementsFromCategory("salad_content");
};

function setIds(){
    for(let i = 0; i < dishes.length; i++){
        dishes[i].id = i;
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
function renderElementFromBasket(basketIndex){
    document.getElementById("basket_content").innerHTML += basketContentTemplate(basketIndex);
};

function regenerateElementFromBasket(basketIndex){
    basket[basketIndex].amount = Number(basket[basketIndex].amount) + 1;
    document.getElementById(`title_amount${basketIndex}`).innerHTML = basketTitleTemplate(basketIndex);
    document.getElementById(`add_and_remove_amount${basketIndex}`).innerHTML = basket[basketIndex].amount;
};

function addToBasket(index, menuID){
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
    };
};

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