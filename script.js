function renderElements(){
    renderElementsFromCategory("burger_and_sandwiches_content");
    renderElementsFromCategory("pizza_content");
    renderElementsFromCategory("salad_content");
};

function renderElementsFromCategory(category){
    for(let i = 0; i < dishes.length; i++){
        if(dishes[i].category == category){
            document.getElementById(category).innerHTML += dishTemplate(i);
        }else{

        };
    };
};

