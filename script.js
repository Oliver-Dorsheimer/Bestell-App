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
function renderElementFromBasket(menuID){
    document.getElementById("basket_content").innerHTML += basketContentTemplate(menuID);
};

function regenerateElementFromBasket(index){
    dishes[index].amount = Number(dishes[index].amount) + 1;
    document.getElementById(`title_amount${index}`).innerHTML = basketTitleTemplate(index);
    document.getElementById(`add_and_remove_amount${index}`).innerHTML = dishes[index].amount;
};

function addToBasket(index, menuID){
    if(dishes[index].inBasket == false){
        dishes[index].inBasket = true;
        basket.push(dishes[index]);
        renderElementFromBasket(menuID);
        document.getElementById("order_element_subtract_icon").classList.add("dNone");
        console.log(basket);
    }else{
        let currentElementIndex = basket.findIndex(basketElement => basketElement.id == menuID);
        document.getElementById("order_element_delete_icon").classList.add("dNone");
        document.getElementById("order_element_subtract_icon").classList.remove("dNone");
        regenerateElementFromBasket(index);
    };
};

function suptractFromBasket(menuID){
    let index = basket.findIndex(basketElement => basketElement.id == menuID);
    basket[index].amount--;
    clearElement("basket_content");
    renderElementFromBasket(menuID);
};

function removeFromBasket(){

};

function clearElement(id){
    document.getElementById(id).innerHTML = "";
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