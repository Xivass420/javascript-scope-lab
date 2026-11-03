// Global scope
const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake";

// Function declaration
function addBurger() {
  // Function-scoped variable
  const newBurger = "Flatburger";
  // Add new burger to the array
  burgers.push(newBurger);
}

if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    //console.log(anotherNewBurger);
    burgers.push(anotherNewBurger);
}

function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}

// console.log(burgers)
