let dishes = [
    {
        "id": "0",
        "category" : "burger_and_sandwiches_content",
        "picture" : "mushroom_burbur",
        "name" : "Veggie mushroom black burger",
        "description" : "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        "price" : {"euro" : "16",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "burger_and_sandwiches_content",
        "picture" : "meat_burbur",
        "name" : "All meat burger",
        "description" : "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse",
        "price" : {"euro" : "15",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "burger_and_sandwiches_content",
        "picture" : "red_burbur",
        "name" : "Beef red burger",
        "description" : "Beef, Cheese, Tomatoes, Lettuce, Onion",
        "price" : {"euro" : "14",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "burger_and_sandwiches_content",
        "picture" : "chicken_burbur",
        "name" : "BIg chicken burger",
        "description" : "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper, ",
        "price" : {"euro" : "15",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "pizza_content",
        "picture" : "margherita_pizza",
        "name" : "Pizza Margherita",
        "description" : "Tomato Sauce, Mozzarella",
        "price" : {"euro" : "11",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "pizza_content",
        "picture" : "chorizo_pizza",
        "name" : "Pizza Chorizo",
        "description" : "Tomato slices, Mozzarella, Chorizo",
        "price" : {"euro" : "13",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "pizza_content",
        "picture" : "funghi_pizza",
        "name" : "Funghi",
        "description" : "Red onion, Olives, Button Mushrooms, Mozzarella",
        "price" : {"euro" : "12",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "pizza_content",
        "picture" : "formaggi_pizza",
        "name" : "Quattro Formaggi with Chicken ",
        "description" : "Chicken, Mozzarella, Gorgonzola, Fontina,  Parmigiano Reggiano",
        "price" : {"euro" : "15",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "salad_content",
        "picture" : "arugular_salad",
        "name" : "Warm beef arugula salad",
        "description" : "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing",
        "price" : {"euro" : "16",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "salad_content",
        "picture" : "mini_salad",
        "name" : "Mini green Salad",
        "description" : "Green salad, Cucumber, Carrots, Parsley, Radishes ",
        "price" : {"euro" : "7",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "salad_content",
        "picture" : "sea_food_salad",
        "name" : "Green Salad with sea food",
        "description" : "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
        "price" : {"euro" : "16",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
    {
        "id": "0",
        "category" : "salad_content",
        "picture" : "vegan_salad",
        "name" : "Vegan green salad with tofu",
        "description" : "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts",
        "price" : {"euro" : "14",
                   "cents" : "90",
                },
        "amount" : "1",
        "inBasket" : "false",
    },
];

function getFromDishesJSON(variable, index){
    let returnValue = 0;
    switch(variable){
        case "id": returnValue = Number(dishes[index].id);
            break;
        case "category" : returnValue = dishes[index].category;
            break;
        case "picture" : returnValue = dishes[index].picture;
            break;
        case "name" : returnValue = dishes[index].name;
            break;
        case "description" : returnValue = dishes[index].description;
            break;
        case "price" : returnValue = [parseInt(parseInt(dishes[index].price["euro"])), parseInt(dishes[index].price["cents"])];
            break;
        case "euro" : returnValue = parseInt(dishes[index].price["euro"]);
            break;
        case "cents" : returnValue = parseInt(dishes[index].price["cents"]);
            break;
        case "amount" : returnValue = Number(dishes[index].amount);
            break;
        case "inBasket" :
            if(dishes[index].inBasket === "true"){
                returnValue = true;
            }else if(dishes[index].inBasket === "false"){
                returnValue = false;
            }else{
                returnValue = "could not determine bool value"
            };
            break;
        default : returnValue = "could not find data in dishesJSON";
    };
    return returnValue;
};

function setInDishesJSON(variableToSet, value, index){
    switch(variableToSet){
        case "id": dishes[index].id = `${value}`;
            break;
        case "category" : dishes[index].category = `${value}`;
            break;
        case "picture" : dishes[index].picture = `${value}`;
            break;
        case "name" : dishes[index].name = `${value}`;
            break;
        case "description" : dishes[index].description = `${value}`;
            break;
        case "price" : //no implementation for now;
            break;
        case "amount" : dishes[index].amount = `${value}`;
            break;
        case "inBasket" : dishes[index].inBasket = `${value}`;
            break;
        default : returnValue = "could not set variable in JSON";
    };
};

let basketArray = [];

let basketVisible = false;