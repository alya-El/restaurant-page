import loadMenu from "./menu";

const tabs = document.createElement("div");

window.addEventListener('resize', resize);

function resize() {
    if (window.innerWidth >= 1050) {
        tabs.classList.remove("hide");
    }
    else{
        tabs.classList.add("hide");
    }
}

function createHeader(){
    const header = document.createElement("header");
    header.classList.add("top-nav");

    const resturantName = document.createElement("h1");
    resturantName.textContent = "Piazza";
    
    header.appendChild(resturantName);
    header.appendChild(createToggle());
    header.appendChild(createMainNav());

    return header;
};

function createToggle(){
    const toggle = document.createElement("a");

    toggle.href = "#";
    toggle.classList.add("toggle-button");

    const bar = document.createElement("span");
    bar.classList.add("bar");

    for(let i = 0; i < 3; i++){
        toggle.appendChild(bar.cloneNode(true));
    }

    toggle.addEventListener("click", (e)=>{
        if(!tabs.classList.contains("hide")){
            tabs.classList.add("hide");
        }
        else{
            tabs.classList.remove("hide");
        }
    });

    return toggle;
};

function createMainNav(){
    tabs.classList.add("nav-links");

    const about = document.createElement("a");
    const menu = document.createElement("a");
    const contact = document.createElement("a");

    about.href = "#";
    menu.href = "#menu-nav";
    contact.href = "#";

    menu.classList.add("active");

    about.textContent = "About";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    tabs.appendChild(about);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    return tabs;
};

function initializeWebsite(){
    const content = document.getElementById("content");
    
    content.appendChild(createHeader());

    loadMenu();
};

export default initializeWebsite;