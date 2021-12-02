import pasta from './pasta.jpg'
import tacos from './tacos.jpg'
import sushi from './sushi.jpeg'

function appendMenu() {

    const card = document.querySelector(".card") 
    if ( card !== null) {
        card.remove();
    }

    content = document.querySelector(".content");
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");
    content.append(newDiv);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    newDiv.append(titleDiv);

    const titleH1 = document.createElement("h1");
    titleH1.textContent = "Our card";
    titleDiv.append(titleH1);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    cardContent.id = "menu-card"
    newDiv.append(cardContent);


    const pastaImg = new Image();
    pastaImg.src = pasta;
    pastaImg.classList.add("menu-img");
    pastaImg.id = "pastaImg"

    const pastaText = document.createElement("p")
    pastaText.textContent = "Our famous black pasta, with sea weed"
    pastaText.classList.add("menuTxt");
    pastaText.id = "pastaTxt"

    const tacosImg = new Image();
    tacosImg.src = tacos;
    tacosImg.classList.add("menu-img");
    tacosImg.id = "tacosImg";

    const tacosText = document.createElement("p");
    tacosText.textContent = "We have an option for the meat enjoyers, our tacos with differents topping, make it on your own style";
    tacosText.classList.add("menuTxt");
    tacosText.id = "tacosTxt";

    const sushiImg = new Image();
    sushiImg.src = sushi;
    sushiImg.classList.add("menu-img");
    sushiImg.id = "sushiImg";

    const sushiText = document.createElement("p");
    sushiText.textContent = "Our sushi rolls crafted by the most skilled sushi-man of don torcuato";
    sushiText.classList.add("menuTxt");
    sushiText.id = "sushiTxt";
    
    cardContent.append(pastaImg, pastaText, tacosImg, tacosText, sushiImg, sushiText);
    
    
    return newDiv;
};

export {appendMenu}
