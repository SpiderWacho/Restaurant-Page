function appendHome() {
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
    titleH1.textContent = "Medrinesas";
    titleDiv.append(titleH1);
    
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    newDiv.append(cardContent);
    const firstP = document.createElement("p");
    const secondP = document.createElement("p");
    const thirdP = document.createElement("p");
    firstP.textContent = "We are a family restaurant created en 1980";
    secondP.textContent = "Our focus is on flavour and family"
    thirdP.textContent = "Come and eat one of our tasty plates"
    cardContent.append(firstP,secondP,thirdP);

    return newDiv;
};

export {appendHome}

