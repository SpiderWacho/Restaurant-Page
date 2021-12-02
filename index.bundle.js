/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comforter&family=Lobster&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: #1a4863;\n}\n\n.background {\n    background-repeat: repeat;\n}\n\n.tabs {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 10vh;\n    min-height: 100px;\n    border-bottom: 5px solid black;\n}\n\n.tab-btns {\n    width: 20%;\n    height: 50%;\n    color: black;\n    font-size: 1em;\n    text-align: center;\n    box-shadow: 0px 0px 1px 1px black;\n    min-height: 50px;   \n    transition: all 0.1s ease-in-out;\n}\n\n\n.tab-btns:hover {\n    transform: scale(1.1);\n    opacity: 0.8;\n    box-shadow: 0px 0px 10px 1px black;\n    color: white;\n    background-color: black;\n    border: none;\n}\n\n\n.content {\n    height: 90vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.card {                \n    padding: 1%;\n    height: 90%;\n    width: 90vw;\n    background-color: rgba(190, 190, 190, 0.233);  \n    backdrop-filter: blur(5px);\n    max-width: 1200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    border-radius: 5px;\n    box-shadow: 0px 0px 3px 5px black;   \n    \n}\n\n.title {\n    height: 20%;\n    width: 100%;\n    font-size: 2em;\n    color: #000000;\n    align-self: flex-start;\n    justify-self: flex-start;\n    text-align: center;\n    font-family: 'Comforter', cursive;\n}\n\n.card-content {\n    height: 80%;\n    color: #202020;\n    font-size: 2em;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    font-family: 'Lobster', cursive;\n}\n\n\n\n.textDiv {\n    width: 100%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.logoImg {\n    width: 100px;\n    height: 100px;\n    justify-self: flex-end;\n    margin-top: auto;\n}\n\n#menu-card {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-self: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n    font-size: 1.5em;\n}\n\n.menu-img {\n    min-height: 100px;\n    min-width: 150px;\n    height: 20%;\n    width: 25%;\n    object-fit: contain;\n}\n\n\n\n#contact-info {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n}\n\n\nlabel {\n    display: inline-block;\n    width: 100%;\n    margin: 10px;\n}\n\n.contactField {\n    min-width: 200px;\n    width: 30%;\n    background-color: transparent;\n    border: none;\n    border-bottom: white solid 2px;\n    color: black;\n    transition: all 0.2s ease-in-out;\n    font-size: 0.5em;\n}\n\n.contactField:focus {\n    width: 35%;\n    min-width: 250px;\n}\n\n.submitDiv {\n    width: 100%;\n    justify-self: flex-end;\n    align-self: flex-end;\n\n}\n\n#submit {\n    width: 20%;\n    height: 35px;\n    background-color: rgb(77, 77, 77);\n    color: white;\n    border: none;\n    transition: all 0.2s ease-in-out;\n    box-shadow: 0px 1px 5px 0.1px black;\n}\n\n#submit:hover {\n    transform: scale(1.2);\n    background-color: rgb(126, 126, 126);\n}\n\ninput:focus {outline: none; }\n\n\n@media (min-width: 1200px) and (min-height: 600px) {\n    #menu-card {\n        height: 100%;\n        display: grid;\n        grid-template-rows: repeat(3, 140px);\n        grid-template-columns: repeat(2, 300px);\n        grid-template-areas: \"img1 text1\"\n                           \"text2  img2\"\n                           \"img3  text3\";\n        justify-self: center;\n        font-size: 2em;\n    }\n    \n    .menu-img {\n        width:  250px;\n        height: 250px;\n        object-fit: contain;\n    }\n    \n    #pastaTxt {\n        grid-area: text1;\n        font-size: 0.7em;\n    }\n    \n    #pastaImg {\n        grid-area: img1;\n        justify-self: center;\n    }\n    \n    #sushiTxt {\n        grid-area: text2;\n        font-size: 0.7em;\n    }\n    \n    #sushiImg {\n        grid-area: img2;\n        justify-self: center;\n    }\n    \n    #tacosTxt {\n        grid-area: text3;\n        font-size: 0.7em;\n    }\n    \n    #tacosImg {\n        grid-area: img3;\n        justify-self: center;\n    }\n\n    .contactField {\n        width: 40%\n    }\n\n    .contactField:focus {\n        width: 45%;\n    }\n}\n\n@media (max-height: 600px) {\n\n    body {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n    }\n\n    .tabs {\n        width: 10vw;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n        border: none;\n        border-right: black 5px solid;\n    }\n\n    .tab-btns {\n        width: 80%;\n        height: 15%;\n    }\n    \n    .card {          \n        width: 85vw;\n    }\n\n\n    #menu-card {\n        align-items: center;\n        justify-self: center;\n        flex-wrap: wrap;\n        flex-direction: row;\n        font-size: 1em;\n    }\n\n    .menu-img {\n        min-height: 100px;\n        min-width: 150px;\n        height: 20%;\n        width: 20%;\n        object-fit: contain;\n    }\n\n    .menuTxt {\n        width: 70%;\n    }\n\n    #contact-info {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n    }\n\n    label {\n        margin: 0px;\n        width: 20%;\n    }\n\n    .contactField {\n        width: 70%\n    }\n\n    .contactField:focus {\n        width: 75%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comforter&family=Lobster&display=swap');\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: #1a4863;\n}\n\n.background {\n    background-repeat: repeat;\n}\n\n.tabs {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 10vh;\n    min-height: 100px;\n    border-bottom: 5px solid black;\n}\n\n.tab-btns {\n    width: 20%;\n    height: 50%;\n    color: black;\n    font-size: 1em;\n    text-align: center;\n    box-shadow: 0px 0px 1px 1px black;\n    min-height: 50px;   \n    transition: all 0.1s ease-in-out;\n}\n\n\n.tab-btns:hover {\n    transform: scale(1.1);\n    opacity: 0.8;\n    box-shadow: 0px 0px 10px 1px black;\n    color: white;\n    background-color: black;\n    border: none;\n}\n\n\n.content {\n    height: 90vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.card {                \n    padding: 1%;\n    height: 90%;\n    width: 90vw;\n    background-color: rgba(190, 190, 190, 0.233);  \n    backdrop-filter: blur(5px);\n    max-width: 1200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    border-radius: 5px;\n    box-shadow: 0px 0px 3px 5px black;   \n    \n}\n\n.title {\n    height: 20%;\n    width: 100%;\n    font-size: 2em;\n    color: #000000;\n    align-self: flex-start;\n    justify-self: flex-start;\n    text-align: center;\n    font-family: 'Comforter', cursive;\n}\n\n.card-content {\n    height: 80%;\n    color: #202020;\n    font-size: 2em;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    font-family: 'Lobster', cursive;\n}\n\n\n\n.textDiv {\n    width: 100%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n}\n\n.logoImg {\n    width: 100px;\n    height: 100px;\n    justify-self: flex-end;\n    margin-top: auto;\n}\n\n#menu-card {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-self: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n    font-size: 1.5em;\n}\n\n.menu-img {\n    min-height: 100px;\n    min-width: 150px;\n    height: 20%;\n    width: 25%;\n    object-fit: contain;\n}\n\n\n\n#contact-info {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n}\n\n\nlabel {\n    display: inline-block;\n    width: 100%;\n    margin: 10px;\n}\n\n.contactField {\n    min-width: 200px;\n    width: 30%;\n    background-color: transparent;\n    border: none;\n    border-bottom: white solid 2px;\n    color: black;\n    transition: all 0.2s ease-in-out;\n    font-size: 0.5em;\n}\n\n.contactField:focus {\n    width: 35%;\n    min-width: 250px;\n}\n\n.submitDiv {\n    width: 100%;\n    justify-self: flex-end;\n    align-self: flex-end;\n\n}\n\n#submit {\n    width: 20%;\n    height: 35px;\n    background-color: rgb(77, 77, 77);\n    color: white;\n    border: none;\n    transition: all 0.2s ease-in-out;\n    box-shadow: 0px 1px 5px 0.1px black;\n}\n\n#submit:hover {\n    transform: scale(1.2);\n    background-color: rgb(126, 126, 126);\n}\n\ninput:focus {outline: none; }\n\n\n@media (min-width: 1200px) and (min-height: 600px) {\n    #menu-card {\n        height: 100%;\n        display: grid;\n        grid-template-rows: repeat(3, 140px);\n        grid-template-columns: repeat(2, 300px);\n        grid-template-areas: \"img1 text1\"\n                           \"text2  img2\"\n                           \"img3  text3\";\n        justify-self: center;\n        font-size: 2em;\n    }\n    \n    .menu-img {\n        width:  250px;\n        height: 250px;\n        object-fit: contain;\n    }\n    \n    #pastaTxt {\n        grid-area: text1;\n        font-size: 0.7em;\n    }\n    \n    #pastaImg {\n        grid-area: img1;\n        justify-self: center;\n    }\n    \n    #sushiTxt {\n        grid-area: text2;\n        font-size: 0.7em;\n    }\n    \n    #sushiImg {\n        grid-area: img2;\n        justify-self: center;\n    }\n    \n    #tacosTxt {\n        grid-area: text3;\n        font-size: 0.7em;\n    }\n    \n    #tacosImg {\n        grid-area: img3;\n        justify-self: center;\n    }\n\n    .contactField {\n        width: 40%\n    }\n\n    .contactField:focus {\n        width: 45%;\n    }\n}\n\n@media (max-height: 600px) {\n\n    body {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-around;\n    }\n\n    .tabs {\n        width: 10vw;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n        border: none;\n        border-right: black 5px solid;\n    }\n\n    .tab-btns {\n        width: 80%;\n        height: 15%;\n    }\n    \n    .card {          \n        width: 85vw;\n    }\n\n\n    #menu-card {\n        align-items: center;\n        justify-self: center;\n        flex-wrap: wrap;\n        flex-direction: row;\n        font-size: 1em;\n    }\n\n    .menu-img {\n        min-height: 100px;\n        min-width: 150px;\n        height: 20%;\n        width: 20%;\n        object-fit: contain;\n    }\n\n    .menuTxt {\n        width: 70%;\n    }\n\n    #contact-info {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n    }\n\n    label {\n        margin: 0px;\n        width: 20%;\n    }\n\n    .contactField {\n        width: 70%\n    }\n\n    .contactField:focus {\n        width: 75%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendHome": () => (/* binding */ appendHome)
/* harmony export */ });
/* harmony import */ var _foodLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodLogo.png */ "./src/foodLogo.png");


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

    const textDiv = document.createElement("div");
    textDiv.classList.add("textDiv");
    cardContent.append(textDiv);

    const firstP = document.createElement("p");
    const secondP = document.createElement("p");
    const thirdP = document.createElement("p");
    firstP.textContent = "We are a family restaurant created in 1980";
    secondP.textContent = "Our focus is on flavour and family"
    thirdP.textContent = "Come and eat one of our tasty plates"
    textDiv.append(firstP,secondP,thirdP);

    const logo = new Image();
    logo.src = _foodLogo_png__WEBPACK_IMPORTED_MODULE_0__;
    logo.classList.add("logoImg");

    cardContent.append(logo);

    return newDiv;
};





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendMenu": () => (/* binding */ appendMenu)
/* harmony export */ });
/* harmony import */ var _pasta_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasta.jpg */ "./src/pasta.jpg");
/* harmony import */ var _tacos_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tacos.jpg */ "./src/tacos.jpg");
/* harmony import */ var _sushi_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sushi.jpeg */ "./src/sushi.jpeg");




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
    pastaImg.src = _pasta_jpg__WEBPACK_IMPORTED_MODULE_0__;
    pastaImg.classList.add("menu-img");
    pastaImg.id = "pastaImg"

    const pastaText = document.createElement("p")
    pastaText.textContent = "Our famous black pasta, with sea weed"
    pastaText.classList.add("menuTxt");
    pastaText.id = "pastaTxt"

    const tacosImg = new Image();
    tacosImg.src = _tacos_jpg__WEBPACK_IMPORTED_MODULE_1__;
    tacosImg.classList.add("menu-img");
    tacosImg.id = "tacosImg";

    const tacosText = document.createElement("p");
    tacosText.textContent = "We have an option for the meat enjoyers, our tacos with differents topping, make it on your own style";
    tacosText.classList.add("menuTxt");
    tacosText.id = "tacosTxt";

    const sushiImg = new Image();
    sushiImg.src = _sushi_jpeg__WEBPACK_IMPORTED_MODULE_2__;
    sushiImg.classList.add("menu-img");
    sushiImg.id = "sushiImg";

    const sushiText = document.createElement("p");
    sushiText.textContent = "Our sushi rolls crafted by the most skilled sushi-man of don torcuato";
    sushiText.classList.add("menuTxt");
    sushiText.id = "sushiTxt";
    
    cardContent.append(pastaImg, pastaText, tacosImg, tacosText, sushiImg, sushiText);
    
    
    return newDiv;
};




/***/ }),

/***/ "./src/food-tile.png":
/*!***************************!*\
  !*** ./src/food-tile.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f136eecae2b17ff36441.png";

/***/ }),

/***/ "./src/foodLogo.png":
/*!**************************!*\
  !*** ./src/foodLogo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f1a6eae6803fefb15c3.png";

/***/ }),

/***/ "./src/pasta.jpg":
/*!***********************!*\
  !*** ./src/pasta.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "872129527477a811cae1.jpg";

/***/ }),

/***/ "./src/sushi.jpeg":
/*!************************!*\
  !*** ./src/sushi.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "304cd9de2603f028827a.jpeg";

/***/ }),

/***/ "./src/tacos.jpg":
/*!***********************!*\
  !*** ./src/tacos.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0870ef90991726ba3403.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _food_tile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-tile.png */ "./src/food-tile.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






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
backgroundImg.src = _food_tile_png__WEBPACK_IMPORTED_MODULE_1__;
backgroundImg.classList.add("background");

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_2__.appendHome);

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_3__.appendMenu);

const contactBtn = document.querySelector("#contact");
contactBtn.addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_4__.appendContact);

(0,_home__WEBPACK_IMPORTED_MODULE_2__.appendHome)();





  


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysc0lBQXNJO0FBQ3RJO0FBQ0EsNkNBQTZDLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEdBQUcsVUFBVSxnQ0FBZ0MsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsV0FBVyxrQkFBa0Isb0JBQW9CLG9DQUFvQywwQkFBMEIsbUJBQW1CLHdCQUF3QixxQ0FBcUMsR0FBRyxlQUFlLGlCQUFpQixrQkFBa0IsbUJBQW1CLHFCQUFxQix5QkFBeUIsd0NBQXdDLDBCQUEwQix1Q0FBdUMsR0FBRyx1QkFBdUIsNEJBQTRCLG1CQUFtQix5Q0FBeUMsbUJBQW1CLDhCQUE4QixtQkFBbUIsR0FBRyxnQkFBZ0IsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsMkJBQTJCLGtCQUFrQixrQkFBa0Isa0JBQWtCLHFEQUFxRCxpQ0FBaUMsd0JBQXdCLG9CQUFvQiw2QkFBNkIsa0NBQWtDLDBCQUEwQix5QkFBeUIsMkNBQTJDLFNBQVMsWUFBWSxrQkFBa0Isa0JBQWtCLHFCQUFxQixxQkFBcUIsNkJBQTZCLCtCQUErQix5QkFBeUIsd0NBQXdDLEdBQUcsbUJBQW1CLGtCQUFrQixxQkFBcUIscUJBQXFCLHlCQUF5QixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHNDQUFzQyxHQUFHLGtCQUFrQixrQkFBa0Isa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixLQUFLLGNBQWMsbUJBQW1CLG9CQUFvQiw2QkFBNkIsdUJBQXVCLEdBQUcsZ0JBQWdCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDJCQUEyQixzQkFBc0IsNkJBQTZCLHVCQUF1QixHQUFHLGVBQWUsd0JBQXdCLHVCQUF1QixrQkFBa0IsaUJBQWlCLDBCQUEwQixHQUFHLHVCQUF1QixvQkFBb0IsNkJBQTZCLHNCQUFzQixrQ0FBa0MsR0FBRyxhQUFhLDRCQUE0QixrQkFBa0IsbUJBQW1CLEdBQUcsbUJBQW1CLHVCQUF1QixpQkFBaUIsb0NBQW9DLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHVDQUF1Qyx1QkFBdUIsR0FBRyx5QkFBeUIsaUJBQWlCLHVCQUF1QixHQUFHLGdCQUFnQixrQkFBa0IsNkJBQTZCLDJCQUEyQixLQUFLLGFBQWEsaUJBQWlCLG1CQUFtQix3Q0FBd0MsbUJBQW1CLG1CQUFtQix1Q0FBdUMsMENBQTBDLEdBQUcsbUJBQW1CLDRCQUE0QiwyQ0FBMkMsR0FBRyxpQkFBaUIsZ0JBQWdCLDBEQUEwRCxrQkFBa0IsdUJBQXVCLHdCQUF3QiwrQ0FBK0Msa0RBQWtELHNJQUFzSSwrQkFBK0IseUJBQXlCLE9BQU8sdUJBQXVCLHdCQUF3Qix3QkFBd0IsOEJBQThCLE9BQU8sdUJBQXVCLDJCQUEyQiwyQkFBMkIsT0FBTyx1QkFBdUIsMEJBQTBCLCtCQUErQixPQUFPLHVCQUF1QiwyQkFBMkIsMkJBQTJCLE9BQU8sdUJBQXVCLDBCQUEwQiwrQkFBK0IsT0FBTyx1QkFBdUIsMkJBQTJCLDJCQUEyQixPQUFPLHVCQUF1QiwwQkFBMEIsK0JBQStCLE9BQU8sdUJBQXVCLDJCQUEyQiw2QkFBNkIscUJBQXFCLE9BQU8sR0FBRyxnQ0FBZ0MsY0FBYyx3QkFBd0IsOEJBQThCLDBCQUEwQiw4QkFBOEIsd0NBQXdDLE9BQU8sZUFBZSxzQkFBc0Isd0JBQXdCLHdCQUF3QixpQ0FBaUMsd0NBQXdDLDhCQUE4Qix1QkFBdUIsd0NBQXdDLE9BQU8sbUJBQW1CLHFCQUFxQixzQkFBc0IsT0FBTyw2QkFBNkIsc0JBQXNCLE9BQU8sc0JBQXNCLDhCQUE4QiwrQkFBK0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsT0FBTyxtQkFBbUIsNEJBQTRCLDJCQUEyQixzQkFBc0IscUJBQXFCLDhCQUE4QixPQUFPLGtCQUFrQixxQkFBcUIsT0FBTyx1QkFBdUIsd0JBQXdCLDhCQUE4QiwwQkFBMEIsc0NBQXNDLE9BQU8sZUFBZSxzQkFBc0IscUJBQXFCLE9BQU8sdUJBQXVCLDJCQUEyQiw2QkFBNkIscUJBQXFCLE9BQU8sR0FBRyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sc0JBQXNCLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8s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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEVuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNvQjtBQUNNO0FBQ0E7QUFDUzs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwyQ0FBVTtBQUM5Qjs7QUFFQTtBQUNBLGtDQUFrQyw2Q0FBUzs7QUFFM0M7QUFDQSxrQ0FBa0MsNkNBQVM7O0FBRTNDO0FBQ0EscUNBQXFDLG1EQUFZOztBQUVqRCxpREFBUzs7Ozs7O0FBTVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0ZXImZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTQ4NjM7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG59XFxuXFxuLnRhYnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhYi1idG5zIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4OyAgIFxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuLnRhYi1idG5zOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCB7ICAgICAgICAgICAgICAgIFxcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuMjMzKTsgIFxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCA1cHggYmxhY2s7ICAgXFxuICAgIFxcbn1cXG5cXG4udGl0bGUge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGVyJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBjb2xvcjogIzIwMjAyMDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG59XFxuXFxuXFxuXFxuLnRleHREaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4ubG9nb0ltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuI21lbnUtY2FyZCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLm1lbnUtaW1nIHtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG5cXG5cXG4jY29udGFjdC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdEZpZWxkIHtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGUgc29saWQgMnB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBmb250LXNpemU6IDAuNWVtO1xcbn1cXG5cXG4uY29udGFjdEZpZWxkOmZvY3VzIHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuXFxuLnN1Ym1pdERpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXG59XFxuXFxuI3N1Ym1pdCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDAuMXB4IGJsYWNrO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XFxufVxcblxcbmlucHV0OmZvY3VzIHtvdXRsaW5lOiBub25lOyB9XFxuXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xcbiAgICAjbWVudS1jYXJkIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxNDBweCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzMDBweCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaW1nMSB0ZXh0MVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwidGV4dDIgIGltZzJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltZzMgIHRleHQzXFxcIjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51LWltZyB7XFxuICAgICAgICB3aWR0aDogIDI1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIH1cXG4gICAgXFxuICAgICNwYXN0YVR4dCB7XFxuICAgICAgICBncmlkLWFyZWE6IHRleHQxO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Bhc3RhSW1nIHtcXG4gICAgICAgIGdyaWQtYXJlYTogaW1nMTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICAjc3VzaGlUeHQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiB0ZXh0MjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XFxuICAgIH1cXG4gICAgXFxuICAgICNzdXNoaUltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IGltZzI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgI3RhY29zVHh0IHtcXG4gICAgICAgIGdyaWQtYXJlYTogdGV4dDM7XFxuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjdGFjb3NJbWcge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBpbWczO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3RGaWVsZCB7XFxuICAgICAgICB3aWR0aDogNDAlXFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3RGaWVsZDpmb2N1cyB7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpIHtcXG5cXG4gICAgYm9keSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgfVxcblxcbiAgICAudGFicyB7XFxuICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogYmxhY2sgNXB4IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC50YWItYnRucyB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiAxNSU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5jYXJkIHsgICAgICAgICAgXFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgfVxcblxcblxcbiAgICAjbWVudS1jYXJkIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgfVxcblxcbiAgICAubWVudS1pbWcge1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgfVxcblxcbiAgICAubWVudVR4dCB7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0RmllbGQge1xcbiAgICAgICAgd2lkdGg6IDcwJVxcbiAgICB9XFxuXFxuICAgIC5jb250YWN0RmllbGQ6Zm9jdXMge1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDOzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOzs7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBLGFBQWEsYUFBYSxFQUFFOzs7QUFHNUI7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isb0NBQW9DO1FBQ3BDLHVDQUF1QztRQUN2Qzs7d0NBRWdDO1FBQ2hDLG9CQUFvQjtRQUNwQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7OztJQUdBO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxVQUFVO1FBQ1YsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0ZXImZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTQ4NjM7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG59XFxuXFxuLnRhYnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhYi1idG5zIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4OyAgIFxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuLnRhYi1idG5zOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCB7ICAgICAgICAgICAgICAgIFxcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuMjMzKTsgIFxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCA1cHggYmxhY2s7ICAgXFxuICAgIFxcbn1cXG5cXG4udGl0bGUge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGVyJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBjb2xvcjogIzIwMjAyMDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG59XFxuXFxuXFxuXFxuLnRleHREaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4ubG9nb0ltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuI21lbnUtY2FyZCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLm1lbnUtaW1nIHtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG5cXG5cXG4jY29udGFjdC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdEZpZWxkIHtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGUgc29saWQgMnB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBmb250LXNpemU6IDAuNWVtO1xcbn1cXG5cXG4uY29udGFjdEZpZWxkOmZvY3VzIHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuXFxuLnN1Ym1pdERpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXG59XFxuXFxuI3N1Ym1pdCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDAuMXB4IGJsYWNrO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XFxufVxcblxcbmlucHV0OmZvY3VzIHtvdXRsaW5lOiBub25lOyB9XFxuXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xcbiAgICAjbWVudS1jYXJkIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxNDBweCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzMDBweCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaW1nMSB0ZXh0MVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwidGV4dDIgIGltZzJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImltZzMgIHRleHQzXFxcIjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51LWltZyB7XFxuICAgICAgICB3aWR0aDogIDI1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIH1cXG4gICAgXFxuICAgICNwYXN0YVR4dCB7XFxuICAgICAgICBncmlkLWFyZWE6IHRleHQxO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Bhc3RhSW1nIHtcXG4gICAgICAgIGdyaWQtYXJlYTogaW1nMTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICAjc3VzaGlUeHQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiB0ZXh0MjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XFxuICAgIH1cXG4gICAgXFxuICAgICNzdXNoaUltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IGltZzI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgI3RhY29zVHh0IHtcXG4gICAgICAgIGdyaWQtYXJlYTogdGV4dDM7XFxuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjdGFjb3NJbWcge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBpbWczO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3RGaWVsZCB7XFxuICAgICAgICB3aWR0aDogNDAlXFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3RGaWVsZDpmb2N1cyB7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpIHtcXG5cXG4gICAgYm9keSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgfVxcblxcbiAgICAudGFicyB7XFxuICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogYmxhY2sgNXB4IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC50YWItYnRucyB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiAxNSU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5jYXJkIHsgICAgICAgICAgXFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgfVxcblxcblxcbiAgICAjbWVudS1jYXJkIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgfVxcblxcbiAgICAubWVudS1pbWcge1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgfVxcblxcbiAgICAubWVudVR4dCB7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0RmllbGQge1xcbiAgICAgICAgd2lkdGg6IDcwJVxcbiAgICB9XFxuXFxuICAgIC5jb250YWN0RmllbGQ6Zm9jdXMge1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFwcGVuZENvbnRhY3QoKSB7XG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpIFxuICAgIGlmICggY2FyZCAhPT0gbnVsbCkge1xuICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY29udGVudC5hcHBlbmQobmV3RGl2KTtcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgbmV3RGl2LmFwcGVuZCh0aXRsZURpdik7XG5cbiAgICBjb25zdCB0aXRsZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlSDEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVIMSk7XG5cbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNhcmQtY29udGVudFwiKTtcbiAgICBjYXJkQ29udGVudC5pZCA9IFwiY29udGFjdEluZm9cIlxuICAgIG5ld0Rpdi5hcHBlbmQoY2FyZENvbnRlbnQpO1xuXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmQoY29udGFjdEZvcm0pO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIG5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcbiAgICBuYW1lLmlkID0gXCJuYW1lXCJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0RmllbGRcIik7XG5cbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XG4gICAgbGFiZWxOYW1lLmh0bWxGb3IgPSBuYW1lO1xuICAgIGxhYmVsTmFtZS50ZXh0Q29udGVudD1cIk5hbWVcIjtcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZW1haWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZW1haWxcIik7XG4gICAgZW1haWwuaWQgPSBcImVtYWlsXCJcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEZpZWxkXCIpO1xuXG4gICAgY29uc3QgbGFiZWxFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBsYWJlbEVtYWlsLmh0bWxGb3IgPSBlbWFpbDtcbiAgICBsYWJlbEVtYWlsLnRleHRDb250ZW50PVwiRS1tYWlsXCI7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgIG1lc3NhZ2UuaWQgPSBcIm5hbWVcIlxuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RGaWVsZFwiKTtcblxuICAgIGNvbnN0IGxhYmVsTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBsYWJlbE1lc3NhZ2UuaHRtbEZvciA9IG1lc3NhZ2U7XG4gICAgbGFiZWxNZXNzYWdlLnRleHRDb250ZW50PVwiTWVzc2FnZVwiO1xuXG4gICAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdWJtaXREaXYuY2xhc3NMaXN0LmFkZChcInN1Ym1pdERpdlwiKTtcbiAgICBcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJzdWJtaXRcIik7XG4gICAgc3VibWl0QnRuLmlkID0gXCJzdWJtaXRcIlxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEZpZWxkXCIpO1xuICAgIHN1Ym1pdEJ0bi52YWx1ZSAgPSBcIlN1Ym1pdFwiXG4gICAgc3VibWl0RGl2LmFwcGVuZChzdWJtaXRCdG4pO1xuXG4gICAgY29udGFjdEZvcm0uYXBwZW5kKGxhYmVsTmFtZSwgbmFtZSwgbGFiZWxFbWFpbCwgZW1haWwsIGxhYmVsTWVzc2FnZSwgbWVzc2FnZSwgc3VibWl0RGl2KTtcbiAgICBcblxuICBcbiAgICByZXR1cm4gbmV3RGl2O1xufTtcblxuZXhwb3J0IHthcHBlbmRDb250YWN0fVxuIiwiaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi9mb29kTG9nby5wbmcnXG5cbmZ1bmN0aW9uIGFwcGVuZEhvbWUoKSB7XG5jb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpIFxuICAgIGlmICggY2FyZCAhPT0gbnVsbCkge1xuICAgIGNhcmQucmVtb3ZlKCk7XG59XG4gICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBjb250ZW50LmFwcGVuZChuZXdEaXYpO1xuICAgXG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIG5ld0Rpdi5hcHBlbmQodGl0bGVEaXYpO1xuXG4gICAgY29uc3QgdGl0bGVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZUgxLnRleHRDb250ZW50ID0gXCJNZWRyaW5lc2FzXCI7XG4gICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlSDEpO1xuICAgIFxuICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jb250ZW50XCIpO1xuICAgIG5ld0Rpdi5hcHBlbmQoY2FyZENvbnRlbnQpO1xuXG4gICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dERpdlwiKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmQodGV4dERpdik7XG5cbiAgICBjb25zdCBmaXJzdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzZWNvbmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgdGhpcmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlyc3RQLnRleHRDb250ZW50ID0gXCJXZSBhcmUgYSBmYW1pbHkgcmVzdGF1cmFudCBjcmVhdGVkIGluIDE5ODBcIjtcbiAgICBzZWNvbmRQLnRleHRDb250ZW50ID0gXCJPdXIgZm9jdXMgaXMgb24gZmxhdm91ciBhbmQgZmFtaWx5XCJcbiAgICB0aGlyZFAudGV4dENvbnRlbnQgPSBcIkNvbWUgYW5kIGVhdCBvbmUgb2Ygb3VyIHRhc3R5IHBsYXRlc1wiXG4gICAgdGV4dERpdi5hcHBlbmQoZmlyc3RQLHNlY29uZFAsdGhpcmRQKTtcblxuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29JbWc7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb0ltZ1wiKTtcblxuICAgIGNhcmRDb250ZW50LmFwcGVuZChsb2dvKTtcblxuICAgIHJldHVybiBuZXdEaXY7XG59O1xuXG5leHBvcnQge2FwcGVuZEhvbWV9XG5cbiIsImltcG9ydCBwYXN0YSBmcm9tICcuL3Bhc3RhLmpwZydcbmltcG9ydCB0YWNvcyBmcm9tICcuL3RhY29zLmpwZydcbmltcG9ydCBzdXNoaSBmcm9tICcuL3N1c2hpLmpwZWcnXG5cbmZ1bmN0aW9uIGFwcGVuZE1lbnUoKSB7XG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpIFxuICAgIGlmICggY2FyZCAhPT0gbnVsbCkge1xuICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY29udGVudC5hcHBlbmQobmV3RGl2KTtcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgbmV3RGl2LmFwcGVuZCh0aXRsZURpdik7XG5cbiAgICBjb25zdCB0aXRsZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlSDEudGV4dENvbnRlbnQgPSBcIk91ciBjYXJkXCI7XG4gICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlSDEpO1xuXG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNvbnRlbnRcIik7XG4gICAgY2FyZENvbnRlbnQuaWQgPSBcIm1lbnUtY2FyZFwiXG4gICAgbmV3RGl2LmFwcGVuZChjYXJkQ29udGVudCk7XG5cblxuICAgIGNvbnN0IHBhc3RhSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcGFzdGFJbWcuc3JjID0gcGFzdGE7XG4gICAgcGFzdGFJbWcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICAgIHBhc3RhSW1nLmlkID0gXCJwYXN0YUltZ1wiXG5cbiAgICBjb25zdCBwYXN0YVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHBhc3RhVGV4dC50ZXh0Q29udGVudCA9IFwiT3VyIGZhbW91cyBibGFjayBwYXN0YSwgd2l0aCBzZWEgd2VlZFwiXG4gICAgcGFzdGFUZXh0LmNsYXNzTGlzdC5hZGQoXCJtZW51VHh0XCIpO1xuICAgIHBhc3RhVGV4dC5pZCA9IFwicGFzdGFUeHRcIlxuXG4gICAgY29uc3QgdGFjb3NJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB0YWNvc0ltZy5zcmMgPSB0YWNvcztcbiAgICB0YWNvc0ltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gICAgdGFjb3NJbWcuaWQgPSBcInRhY29zSW1nXCI7XG5cbiAgICBjb25zdCB0YWNvc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YWNvc1RleHQudGV4dENvbnRlbnQgPSBcIldlIGhhdmUgYW4gb3B0aW9uIGZvciB0aGUgbWVhdCBlbmpveWVycywgb3VyIHRhY29zIHdpdGggZGlmZmVyZW50cyB0b3BwaW5nLCBtYWtlIGl0IG9uIHlvdXIgb3duIHN0eWxlXCI7XG4gICAgdGFjb3NUZXh0LmNsYXNzTGlzdC5hZGQoXCJtZW51VHh0XCIpO1xuICAgIHRhY29zVGV4dC5pZCA9IFwidGFjb3NUeHRcIjtcblxuICAgIGNvbnN0IHN1c2hpSW1nID0gbmV3IEltYWdlKCk7XG4gICAgc3VzaGlJbWcuc3JjID0gc3VzaGk7XG4gICAgc3VzaGlJbWcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICAgIHN1c2hpSW1nLmlkID0gXCJzdXNoaUltZ1wiO1xuXG4gICAgY29uc3Qgc3VzaGlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc3VzaGlUZXh0LnRleHRDb250ZW50ID0gXCJPdXIgc3VzaGkgcm9sbHMgY3JhZnRlZCBieSB0aGUgbW9zdCBza2lsbGVkIHN1c2hpLW1hbiBvZiBkb24gdG9yY3VhdG9cIjtcbiAgICBzdXNoaVRleHQuY2xhc3NMaXN0LmFkZChcIm1lbnVUeHRcIik7XG4gICAgc3VzaGlUZXh0LmlkID0gXCJzdXNoaVR4dFwiO1xuICAgIFxuICAgIGNhcmRDb250ZW50LmFwcGVuZChwYXN0YUltZywgcGFzdGFUZXh0LCB0YWNvc0ltZywgdGFjb3NUZXh0LCBzdXNoaUltZywgc3VzaGlUZXh0KTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gbmV3RGl2O1xufTtcblxuZXhwb3J0IHthcHBlbmRNZW51fVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4vZm9vZC10aWxlLnBuZyc7XG5pbXBvcnQge2FwcGVuZEhvbWUgYXMgYnVpbGRIb21lfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHthcHBlbmRNZW51IGFzIGJ1aWxkTWVudX0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7YXBwZW5kQ29udGFjdCBhcyBidWlsZENvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnRhYkRpdi5jbGFzc0xpc3QuYWRkKFwidGFic1wiKVxuZG9jdW1lbnQuYm9keS5hcHBlbmQodGFiRGl2KTtcblxuY29uc3QgYnV0dG9uSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbmJ1dHRvbkhvbWUuY2xhc3NMaXN0LmFkZChcInRhYi1idG5zXCIpO1xuYnV0dG9uSG9tZS5pZCA9IFwiaG9tZVwiO1xuYnV0dG9uSG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xudGFiRGl2LmFwcGVuZChidXR0b25Ib21lKTtcblxuY29uc3QgYnV0dG9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbmJ1dHRvbk1lbnUuY2xhc3NMaXN0LmFkZChcInRhYi1idG5zXCIpO1xuYnV0dG9uTWVudS5pZCA9IFwibWVudVwiO1xuYnV0dG9uTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xudGFiRGl2LmFwcGVuZChidXR0b25NZW51KTtcblxuY29uc3QgYnV0dG9uQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5idXR0b25Db250YWN0LmNsYXNzTGlzdC5hZGQoXCJ0YWItYnRuc1wiKTtcbmJ1dHRvbkNvbnRhY3QuaWQgPSBcImNvbnRhY3RcIjtcbmJ1dHRvbkNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbnRhYkRpdi5hcHBlbmQoYnV0dG9uQ29udGFjdCk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGVudFwiKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50KTtcblxuY29uc3QgYmFja2dyb3VuZEltZyA9IG5ldyBJbWFnZSgpO1xuYmFja2dyb3VuZEltZy5zcmMgPSBiYWNrZ3JvdW5kO1xuYmFja2dyb3VuZEltZy5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1aWxkSG9tZSk7XG5cbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidWlsZE1lbnUpO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVpbGRDb250YWN0KTtcblxuYnVpbGRIb21lKCk7XG5cblxuXG5cblxuICBcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9