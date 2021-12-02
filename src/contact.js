function appendContact() {

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
    titleH1.textContent = "Contact Us";
    titleDiv.append(titleH1);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    cardContent.id = "contactInfo"
    newDiv.append(cardContent);

    const contactForm = document.createElement("form");
    cardContent.append(contactForm);

    const name = document.createElement("input")
    name.setAttribute("type","text");
    name.id = "name"
    name.classList.add("contactField");

    const labelName = document.createElement("Label");
    labelName.htmlFor = name;
    labelName.textContent="Name";

    const email = document.createElement("input")
    email.setAttribute("type","email");
    email.id = "email"
    email.classList.add("contactField");

    const labelEmail = document.createElement("Label");
    labelEmail.htmlFor = email;
    labelEmail.textContent="E-mail";

    const message = document.createElement("input")
    message.setAttribute("type","text");
    message.id = "name"
    message.classList.add("contactField");

    const labelMessage = document.createElement("Label");
    labelMessage.htmlFor = message;
    labelMessage.textContent="Message";

    const submitDiv = document.createElement("div");
    submitDiv.classList.add("submitDiv");
    

    const submitBtn = document.createElement("input")
    submitBtn.setAttribute("type","submit");
    submitBtn.id = "submit"
    submitBtn.classList.add("contactField");
    submitBtn.value  = "Submit"
    submitDiv.append(submitBtn);

    contactForm.append(labelName, name, labelEmail, email, labelMessage, message, submitDiv);
    

  
    return newDiv;
};

export {appendContact}
