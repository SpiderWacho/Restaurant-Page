/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendContact": () => (/* binding */ appendContact)
/* harmony export */ });
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImZ1bmN0aW9uIGFwcGVuZENvbnRhY3QoKSB7XG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpIFxuICAgIGlmICggY2FyZCAhPT0gbnVsbCkge1xuICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY29udGVudC5hcHBlbmQobmV3RGl2KTtcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgbmV3RGl2LmFwcGVuZCh0aXRsZURpdik7XG5cbiAgICBjb25zdCB0aXRsZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlSDEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVIMSk7XG5cbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNhcmQtY29udGVudFwiKTtcbiAgICBjYXJkQ29udGVudC5pZCA9IFwiY29udGFjdEluZm9cIlxuICAgIG5ld0Rpdi5hcHBlbmQoY2FyZENvbnRlbnQpO1xuXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmQoY29udGFjdEZvcm0pO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIG5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcbiAgICBuYW1lLmlkID0gXCJuYW1lXCJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0RmllbGRcIik7XG5cbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XG4gICAgbGFiZWxOYW1lLmh0bWxGb3IgPSBuYW1lO1xuICAgIGxhYmVsTmFtZS50ZXh0Q29udGVudD1cIk5hbWVcIjtcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZW1haWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZW1haWxcIik7XG4gICAgZW1haWwuaWQgPSBcImVtYWlsXCJcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEZpZWxkXCIpO1xuXG4gICAgY29uc3QgbGFiZWxFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBsYWJlbEVtYWlsLmh0bWxGb3IgPSBlbWFpbDtcbiAgICBsYWJlbEVtYWlsLnRleHRDb250ZW50PVwiRS1tYWlsXCI7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgIG1lc3NhZ2UuaWQgPSBcIm5hbWVcIlxuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RGaWVsZFwiKTtcblxuICAgIGNvbnN0IGxhYmVsTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBsYWJlbE1lc3NhZ2UuaHRtbEZvciA9IG1lc3NhZ2U7XG4gICAgbGFiZWxNZXNzYWdlLnRleHRDb250ZW50PVwiTWVzc2FnZVwiO1xuXG4gICAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdWJtaXREaXYuY2xhc3NMaXN0LmFkZChcInN1Ym1pdERpdlwiKTtcbiAgICBcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJzdWJtaXRcIik7XG4gICAgc3VibWl0QnRuLmlkID0gXCJzdWJtaXRcIlxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEZpZWxkXCIpO1xuICAgIHN1Ym1pdEJ0bi52YWx1ZSAgPSBcIlN1Ym1pdFwiXG4gICAgc3VibWl0RGl2LmFwcGVuZChzdWJtaXRCdG4pO1xuXG4gICAgY29udGFjdEZvcm0uYXBwZW5kKGxhYmVsTmFtZSwgbmFtZSwgbGFiZWxFbWFpbCwgZW1haWwsIGxhYmVsTWVzc2FnZSwgbWVzc2FnZSwgc3VibWl0RGl2KTtcbiAgICBcblxuICBcbiAgICByZXR1cm4gbmV3RGl2O1xufTtcblxuZXhwb3J0IHthcHBlbmRDb250YWN0fVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9