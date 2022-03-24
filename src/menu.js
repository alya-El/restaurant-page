function createMenuNav(){
    const navDiv = document.createElement("div");
    navDiv.classList.add("menu-nav");
    navDiv.id = "menu-nav";

    navDiv.appendChild(menuNavLink("pizza"));
    navDiv.appendChild(menuNavLink("pasta"));
    navDiv.appendChild(menuNavLink("salad"));

    return navDiv;
};

function menuNavLink(name){
    const nameLink = document.createElement("a");
    nameLink.classList.add(name);
    nameLink.href = `#${name}`;

    const foodName = document.createElement("h2");
    foodName.textContent = name.charAt(0).toUpperCase() + name.slice(1);

    nameLink.appendChild(appendImg(name));
    nameLink.appendChild(foodName);

    return nameLink;
};

function appendImg(name){
    const img = document.createElement("img");
    img.classList.add("logo");
    img.src = `./dist/images/${name}-logo.svg`;
    img.alt = `${name} logo`;

    return img;
};

function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");

    //pizza items
    const pizzaHeader = document.createElement("h2");
    pizzaHeader.appendChild(appendImg("pizza"));
    
    pizzaHeader.append("Pizza");

    menu.appendChild(pizzaHeader);

    const pizzaGroup = document.createElement("div");
    pizzaGroup.classList.add("menu-group");
    pizzaGroup.id = "pizza";

    pizzaGroup.appendChild(
        createMenuItem(
          "pizza",
          "Burrata",
          "$18/$28",
          "Tomato Sauce, burrata, garlic, basil"
        )
    );
    pizzaGroup.appendChild(
        createMenuItem(
          "pizza",
          "Guancia",
          "$19/$31",
          "Tomato sauce, fresh mozzarella, guanciale, shaved onion, pecorino"
        )
    );
    pizzaGroup.appendChild(
        createMenuItem(
          "pizza",
          "La Rossa",
          "$15/$24",
          "Tomato sauce, garlic, basil (no cheese)"
        )
    );
    pizzaGroup.appendChild(
        createMenuItem(
          "pizza",
          "Margherita",
          "$17/$26",
          "Tomato sauce, fresh mozzarella, basil, sea salt, California extra virgin olive oil"
        )
    );
    pizzaGroup.appendChild(
        createMenuItem(
          "pizza",
          "Pepperoni",
          "$19/$32",
          "Tomato Sauce, burrata, garlic, basil"
        )
    );
    pizzaGroup.appendChild(
        createMenuItem(
          "pizza",
          "Panna",
          "$18/$28",
          "Tomato sauce, fresh mozzarella, grass-fed PA cow’s cream, arugula, parmigiano"
        )
    );
    menu.appendChild(pizzaGroup);

    //pasta items
    const pastaHeader = document.createElement("h2");
    pastaHeader.appendChild(appendImg("pasta"));
    
    pastaHeader.append("Pasta");

    menu.appendChild(pastaHeader);

    const pastaGroup = document.createElement("div");
    pastaGroup.classList.add("menu-group");
    pastaGroup.id = "pasta";

    pastaGroup.appendChild(
        createMenuItem(
          "pasta",
          "Alla Tarantina",
          "$32",
          "Spaghetti alla chitarra, white wine, olive oil, cream"
        )
    );
    pastaGroup.appendChild(
        createMenuItem(
          "pasta",
          "Caprese",
          "$28",
          "Angel hair pasta, fresh mozzarella, garlic, grape tomato, olive oil"
        )
    );
    pastaGroup.appendChild(
        createMenuItem(
          "pasta",
          "Alla vodka",
          "$23",
          "Tomato sauce, penne, cream, red pepper flakes, butter"
        )
    );
    menu.appendChild(pastaGroup);

    //salad items
    const saladHeader = document.createElement("h2");
    saladHeader.appendChild(appendImg("salad"));
    
    saladHeader.append("Salad");
    
    menu.appendChild(saladHeader);

    const saladGroup = document.createElement("div");
    saladGroup.classList.add("menu-group");
    saladGroup.id = "salad";

    saladGroup.appendChild(
        createMenuItem(
          "salad",
          "Caprese",
          "$23",
          "Balsamic vinegar, fresh mozzarella, olive oil, fresh basil, tomatoes"
        )
    );
    saladGroup.appendChild(
        createMenuItem(
          "salad",
          "Ceaser",
          "$19",
          "Anchovy paste, romaine lettuce, Dijon, parmigiano reggiano"
        )
    );
    menu.appendChild(saladGroup);

    return menu;
};

function createMenuItem(group, name, price, description){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const img = document.createElement("img");
    img.classList.add("menu-item-image");
    img.src = `./dist/images/menu-items/${group}/${name.replace(/%20/g, " ")}.png`;
    img.alt = `${name.replace(/%20/g, " ")} ${group}`;

    const menuItemText = document.createElement("div");
    menuItemText.classList.add("menu-item-text");

    const menuItemHeading = document.createElement("h3");
    menuItemHeading.classList.add("menu-item-heading");

    const itemName = document.createElement("span");
    itemName.classList.add("menu-item-name");
    itemName.textContent = `${name}`;

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("menu-item-price");
    itemPrice.textContent = `${price}`;

    menuItemHeading.appendChild(itemName);
    menuItemHeading.appendChild(itemPrice);

    const menuDescription = document.createElement("p");
    menuDescription.textContent = `${description}`;

    menuItemText.appendChild(menuItemHeading);
    menuItemText.appendChild(menuDescription);

    menuItem.appendChild(img);
    menuItem.appendChild(menuItemText);

    return menuItem;
};

function loadMenu() {
    const content = document.querySelector("#content");
    content.appendChild(createMenuNav());
    content.appendChild(createMenu());
}
  
export default loadMenu;
