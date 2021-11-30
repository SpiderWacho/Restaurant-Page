import './style.css';
import background from './food-tile.png';
import {appendHome as buildHome} from './home';
import {appendMenu as buildMenu} from './menu';
import {appendContact as buildContact} from './contact';

const tabDiv = document.createElement("div")
tabDiv.classList.add("tabs")
document.body.append(tabDiv);

const buttonHome = document.createElement("button")
buttonHome.classList.add("tab-btns");
buttonHome.id = "home";
buttonHome.textContent = "Home";
tabDiv.append(buttonHome);

const buttonMenu = document.createElement("button")
buttonMenu.classList.add("tab-btns");
buttonMenu.id = "menu";
buttonMenu.textContent = "Menu";
tabDiv.append(buttonMenu);

const buttonContact = document.createElement("button");
buttonContact.classList.add("tab-btns");
buttonContact.id = "contact";
buttonContact.textContent = "Contact";
tabDiv.append(buttonContact);

const content = document.createElement("content");
content.classList.add("content");
document.body.append(content);

const backgroundImg = new Image();
backgroundImg.src = background;
backgroundImg.classList.add("background");

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", buildHome);

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", buildMenu);

const contactBtn = document.querySelector("#contact");
contactBtn.addEventListener("click", buildContact);

buildHome();





  

