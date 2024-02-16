"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/GT-Walsheim-Light-Oblique.otf */ "./src/assets/GT-Walsheim-Light-Oblique.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/GT-Walsheim-Light.otf */ "./src/assets/GT-Walsheim-Light.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/GT-Walsheim-Medium-Oblique.otf */ "./src/assets/GT-Walsheim-Medium-Oblique.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/GT-Walsheim-Medium.otf */ "./src/assets/GT-Walsheim-Medium.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/GT-Walsheim-Regular-Oblique.otf */ "./src/assets/GT-Walsheim-Regular-Oblique.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/GT-Walsheim-Regular.otf */ "./src/assets/GT-Walsheim-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-bg-color: #333533;
    --secondary-bg-color: #242423
}

@font-face {
    font-family: 'Walsheim-Light-Oblique';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
    font-family: 'Walsheim-Light';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
@font-face {
    font-family: 'Walsheim-Medium-Oblique';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
@font-face {
    font-family: 'Walsheim-Medium';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
@font-face {
    font-family: 'Walsheim-Regular-Oblique';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
@font-face {
    font-family: 'Walsheim-Regular';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-width: 100vw;
    display: grid;
    grid-template-rows: minmax(120px, 10vh) 90vh;
    grid-template-columns: 100%;
    overflow: hidden;
    justify-content: start;
    align-items: center;
    
    background-color: var(--main-bg-color);
}

header {
    grid-area: 1/1/2/2;
    height: 120px;
    width: 100%;
    align-content: center;
    justify-content: center;
    background-color: var(--secondary-bg-color);
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: minmax(304px, 50vw) minmax(400px, 50vw);
    box-shadow: 0px 10px 16px 16px var(--secondary-bg-color);
}

header img {
    grid-area: 1/1/2/2;
    align-self: center;
    margin-left: 10px;
}

nav {
    max-width: 718px;
    grid-area: 1/2/2/3;
    display: grid;
    min-width: 400px;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: end;
    margin-right: 50px;
}

nav button {
    height: 60px;
    min-width: 160px;
    max-width: 160px;
    background-color: transparent;
    color: white;
    outline: 1px solid transparent;
    box-shadow: 0 0 1px rgba(255,255,255,0);
    font-family: 'GT-Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;
    font-size: 28px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid white;
    transform: skewX(-8deg);
}

nav button:hover {
    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;
    border: 1px solid #FFC117;
    color: #FFC117;
    font-size: 30px;
}

nav button:not(:hover) {
    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;
    border: 1px solid white;
    color: white;
    font-size: 28px;
}

nav button:active {
    transition: background-color .3s ease-in-out, color .3s ease-in-out;
    background-color: #FFC117;
    color: black;
}

#container.home {
    grid-area: 2/1/3/2;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(304px, 20vw) minmax(980px, 80vw);
    grid-template-rows: auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    mask-image: linear-gradient(to bottom left, rgba(0, 0, 0, 1), rgba(0, 0, 0, .5) ); 
}

#about-section {
    grid-area: 1/1/2/2;
    height: 100%;
    width: 100%;
    align-content: center;
    justify-content: center;
    width: auto;
    display: flex;
    flex-direction: column;
}

#about-wrapper {
    align-self: center;
    justify-self: center;
    width: 70%;
    color: white;
}

#about-wrapper h2 {
    font-family: 'Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;
    font-weight: lighter;
    margin-top: -30%;
    max-width: 230px;
    letter-spacing: 2px;
    font-size: 40px;
}

h2 span {
    font-size: 32px;
}

.gold {
    color: #FFC117;
    font-weight: bold;
    font-family: 'Walsheim-Regular-Oblique', Arial, Helvetica, sans-serif, monospace;
    font-size: 40px;
}

#sushi-holder {
    grid-area: 1/2/2/3;
    min-height: 100%;
    min-width: 100%;
    
}

#container.menu {
    height: 90vh;
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
    overflow-x: scroll;
    white-space: nowrap;
    background-color: #333533;
}

#container.menu div {
    /* border: 1px solid red; */
}

#menu {
    flex: 0 0 auto;
    margin-top: 40px;
    margin-bottom: 60px;
    width: 1000px;
    min-height: 1500px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    justify-content: center;
    font-family: 'Walsheim-Medium', Arial, Helvetica, sans-serif, monospace;
}

#menu-left {
    height: 100%;
    width: 100%;
    grid-area: 1/1/2/2;
}



#specials {
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: stretch;
    grid-template-rows: 2% 90%;
    grid-template-columns: 90%;
    background-color: #CFDBD5;
}

#sashimi {
    grid-area: 2/1/3/3;
    display: grid;
    grid-template-columns: 90%;
    justify-content: center;
    grid-template-rows: repeat(9, 140px);
    height: 100%;
    width: 470px;
    margin-top: 10px;
}

#sashimi-head {
    grid-area: 1/1/2/2;
    font-size: 38px;
    color: #242423;
    align-self: flex-start;
    margin-top: 30px;
    margin-left: 20px
}

.menu-item {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 100%;
}

.menu-item-title {
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    color: #393b3a;
}

.menu-item-title h3 {
    margin: 0;
}

.menu-info-dark {
    color: #292929;
    font-size: 16px;
    text-wrap: wrap;
}

#hamachi {
    grid-area: 1/1/2/2;
}

#crudo {
    grid-area: 2/1/3/2;
}

#carpaccio {
    grid-area: 3/1/4/2;
}

#zuke {
    grid-area: 4/1/5/2;
}

#kanpachi {
    grid-area: 5/1/6/2;
}

#albacore {
    grid-area: 6/1/7/2;
}

#shiso {
    grid-area: 7/1/8/2;
}

#tataki {
    grid-area: 8/1/9/2;
}

#tiradito {
    grid-area: 9/1/10/2;
}

#menu-right {
    height: 100%;
    width: 100%;
    grid-area: 1/2/2/3;
    background-color: #E8EDDF;
}

#right-wrapper {
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: stretch;
    grid-template-rows: 2% 56% 2% 36%;
    grid-template-columns: 90%;
}

#plates-head {
    grid-area: 1/1/2/2;
    font-size: 38px;
    align-self: flex-start;
    margin-top: 30px;
}

#plates {
    grid-area: 2/1/3/2;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(5, 140px);
    grid-template-columns: 100%;
    margin-top: 10px;
}

#maitake {
    grid-area: 1/1/2/2;
}
#octopus {
    grid-area: 2/1/3/2;
}
#cod {
    grid-area: 3/1/4/2;
}
#chicken {
    grid-area: 4/1/5/2;
}
#saba {
    grid-area: 5/1/6/2;
}

#dessert-head {
    grid-area: 3/1/4/2;
    font-size: 38px;
    color: #242423;
    margin-top: -10px;
}

#dessert{
    grid-area: 4/1/5/2;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(3, 140px);
    grid-template-columns: 100%;
    margin-top: -20px;
}

#matcha {
    grid-area: 1/1/2/2;
}

#sesame {
    grid-area: 2/1/3/2;
}

#mochi {
    grid-area: 3/1/4/2;
}

#container.contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100vw;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    mask-image: linear-gradient(to bottom left, rgb(0, 0, 0), rgba(0, 0, 0, .8) ); 
}

#contact-main-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 80px;
    gap: 40px;
}
#contact-message {
    font-family: 'Walsheim-Medium', Arial, Helvetica, sans-serif, monospace;
    color: whitesmoke;
    font-size: 18px;
}

#contact-message h2 {
    font-family: 'Walsheim-Regular-Oblique', Arial, Helvetica, sans-serif, monospace;
    color: #D39E0D;
    font-size: 58px;
}

#contact-message a {
    font-family: 'Walsheim-Regular-Oblique', Arial, Helvetica, sans-serif, monospace;
    color: #D39E0D;
    margin-right: 110px;
}

#contact-message p {
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 24px;
}

#form-wrapper {
    background-color: rgba(0, 0, 0, .3);
    border-radius: 8px;
}

form {
    height: 458px;
    width: 445px;
    display: flex;
    flex-flow: column;
    font-family: 'Walsheim-Light', Arial, Helvetica, sans-serif, monospace;
    color: whitesmoke;
    font-weight: lighter;
    padding: 20px;
}

form h3 {
    margin-top: 0;
    font-size: 22px;
}

form input {
    border-radius: 18px;
    height: 24px;
    background-color: rgba(0, 0, 0, .6);
    color: whitesmoke;
    border: none;
    padding: 8px;
}

form input:focus {
    outline: 1px solid #D39E0D;
    
}

form textarea {
    height: 80px;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 18px;
    background-color: rgba(0, 0, 0, .6);
    color: whitesmoke;
    border: none;
    padding: 8px;
    font-family: 'Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;
}

form textarea:focus {
    outline: 1px solid #D39E0D;
}

#submit {
    height: 50px;
    min-width: 140px;
    max-width: 140px;
    background-color: transparent;
    color: white;
    outline: 1px solid transparent;
    box-shadow: 0 0 1px rgba(255,255,255,0);
    font-family: 'GT-Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;
    font-size: 28px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid white;
    transform: skewX(-8deg);
    margin-top: 14px;
}

#submit:hover {
    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;
    border: 1px solid #FFC117;
    color: #FFC117;
    font-size: 30px;
}

#submit:not(:hover) {
    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;
    border: 1px solid white;
    color: white;
    font-size: 28px;
}

#submit:active {
    transition: background-color .3s ease-in-out, color .3s ease-in-out;
    background-color: #FFC117;
    color: black;
}

#first-name, #last-name, label {
    width: 240px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --main-bg-color: #333533;\n    --secondary-bg-color: #242423\n}\n\n@font-face {\n    font-family: 'Walsheim-Light-Oblique';\n    src: url(./assets/GT-Walsheim-Light-Oblique.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Light';\n    src: url(./assets/GT-Walsheim-Light.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Medium-Oblique';\n    src: url(./assets/GT-Walsheim-Medium-Oblique.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Medium';\n    src: url(./assets/GT-Walsheim-Medium.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Regular-Oblique';\n    src: url(./assets/GT-Walsheim-Regular-Oblique.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Regular';\n    src: url(./assets/GT-Walsheim-Regular.otf);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-rows: minmax(120px, 10vh) 90vh;\n    grid-template-columns: 100%;\n    overflow: hidden;\n    justify-content: start;\n    align-items: center;\n    \n    background-color: var(--main-bg-color);\n}\n\nheader {\n    grid-area: 1/1/2/2;\n    height: 120px;\n    width: 100%;\n    align-content: center;\n    justify-content: center;\n    background-color: var(--secondary-bg-color);\n    display: grid;\n    grid-template-rows: 100%;\n    grid-template-columns: minmax(304px, 50vw) minmax(400px, 50vw);\n    box-shadow: 0px 10px 16px 16px var(--secondary-bg-color);\n}\n\nheader img {\n    grid-area: 1/1/2/2;\n    align-self: center;\n    margin-left: 10px;\n}\n\nnav {\n    max-width: 718px;\n    grid-area: 1/2/2/3;\n    display: grid;\n    min-width: 400px;\n    grid-template-rows: auto;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    justify-items: end;\n    margin-right: 50px;\n}\n\nnav button {\n    height: 60px;\n    min-width: 160px;\n    max-width: 160px;\n    background-color: transparent;\n    color: white;\n    outline: 1px solid transparent;\n    box-shadow: 0 0 1px rgba(255,255,255,0);\n    font-family: 'GT-Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;\n    font-size: 28px;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid white;\n    transform: skewX(-8deg);\n}\n\nnav button:hover {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid #FFC117;\n    color: #FFC117;\n    font-size: 30px;\n}\n\nnav button:not(:hover) {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid white;\n    color: white;\n    font-size: 28px;\n}\n\nnav button:active {\n    transition: background-color .3s ease-in-out, color .3s ease-in-out;\n    background-color: #FFC117;\n    color: black;\n}\n\n#container.home {\n    grid-area: 2/1/3/2;\n    height: 100%;\n    display: grid;\n    grid-template-columns: minmax(304px, 20vw) minmax(980px, 80vw);\n    grid-template-rows: auto;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    mask-image: linear-gradient(to bottom left, rgba(0, 0, 0, 1), rgba(0, 0, 0, .5) ); \n}\n\n#about-section {\n    grid-area: 1/1/2/2;\n    height: 100%;\n    width: 100%;\n    align-content: center;\n    justify-content: center;\n    width: auto;\n    display: flex;\n    flex-direction: column;\n}\n\n#about-wrapper {\n    align-self: center;\n    justify-self: center;\n    width: 70%;\n    color: white;\n}\n\n#about-wrapper h2 {\n    font-family: 'Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;\n    font-weight: lighter;\n    margin-top: -30%;\n    max-width: 230px;\n    letter-spacing: 2px;\n    font-size: 40px;\n}\n\nh2 span {\n    font-size: 32px;\n}\n\n.gold {\n    color: #FFC117;\n    font-weight: bold;\n    font-family: 'Walsheim-Regular-Oblique', Arial, Helvetica, sans-serif, monospace;\n    font-size: 40px;\n}\n\n#sushi-holder {\n    grid-area: 1/2/2/3;\n    min-height: 100%;\n    min-width: 100%;\n    \n}\n\n#container.menu {\n    height: 90vh;\n    width: 100vw;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    overflow: scroll;\n    overflow-x: scroll;\n    white-space: nowrap;\n    background-color: #333533;\n}\n\n#container.menu div {\n    /* border: 1px solid red; */\n}\n\n#menu {\n    flex: 0 0 auto;\n    margin-top: 40px;\n    margin-bottom: 60px;\n    width: 1000px;\n    min-height: 1500px;\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: 100%;\n    justify-content: center;\n    font-family: 'Walsheim-Medium', Arial, Helvetica, sans-serif, monospace;\n}\n\n#menu-left {\n    height: 100%;\n    width: 100%;\n    grid-area: 1/1/2/2;\n}\n\n\n\n#specials {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n    align-content: stretch;\n    grid-template-rows: 2% 90%;\n    grid-template-columns: 90%;\n    background-color: #CFDBD5;\n}\n\n#sashimi {\n    grid-area: 2/1/3/3;\n    display: grid;\n    grid-template-columns: 90%;\n    justify-content: center;\n    grid-template-rows: repeat(9, 140px);\n    height: 100%;\n    width: 470px;\n    margin-top: 10px;\n}\n\n#sashimi-head {\n    grid-area: 1/1/2/2;\n    font-size: 38px;\n    color: #242423;\n    align-self: flex-start;\n    margin-top: 30px;\n    margin-left: 20px\n}\n\n.menu-item {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: 100%;\n}\n\n.menu-item-title {\n    width: 100%;\n    display: flex;\n    align-items: flex-end;\n    flex-direction: row;\n    justify-content: space-between;\n    color: #393b3a;\n}\n\n.menu-item-title h3 {\n    margin: 0;\n}\n\n.menu-info-dark {\n    color: #292929;\n    font-size: 16px;\n    text-wrap: wrap;\n}\n\n#hamachi {\n    grid-area: 1/1/2/2;\n}\n\n#crudo {\n    grid-area: 2/1/3/2;\n}\n\n#carpaccio {\n    grid-area: 3/1/4/2;\n}\n\n#zuke {\n    grid-area: 4/1/5/2;\n}\n\n#kanpachi {\n    grid-area: 5/1/6/2;\n}\n\n#albacore {\n    grid-area: 6/1/7/2;\n}\n\n#shiso {\n    grid-area: 7/1/8/2;\n}\n\n#tataki {\n    grid-area: 8/1/9/2;\n}\n\n#tiradito {\n    grid-area: 9/1/10/2;\n}\n\n#menu-right {\n    height: 100%;\n    width: 100%;\n    grid-area: 1/2/2/3;\n    background-color: #E8EDDF;\n}\n\n#right-wrapper {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n    align-content: stretch;\n    grid-template-rows: 2% 56% 2% 36%;\n    grid-template-columns: 90%;\n}\n\n#plates-head {\n    grid-area: 1/1/2/2;\n    font-size: 38px;\n    align-self: flex-start;\n    margin-top: 30px;\n}\n\n#plates {\n    grid-area: 2/1/3/2;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(5, 140px);\n    grid-template-columns: 100%;\n    margin-top: 10px;\n}\n\n#maitake {\n    grid-area: 1/1/2/2;\n}\n#octopus {\n    grid-area: 2/1/3/2;\n}\n#cod {\n    grid-area: 3/1/4/2;\n}\n#chicken {\n    grid-area: 4/1/5/2;\n}\n#saba {\n    grid-area: 5/1/6/2;\n}\n\n#dessert-head {\n    grid-area: 3/1/4/2;\n    font-size: 38px;\n    color: #242423;\n    margin-top: -10px;\n}\n\n#dessert{\n    grid-area: 4/1/5/2;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(3, 140px);\n    grid-template-columns: 100%;\n    margin-top: -20px;\n}\n\n#matcha {\n    grid-area: 1/1/2/2;\n}\n\n#sesame {\n    grid-area: 2/1/3/2;\n}\n\n#mochi {\n    grid-area: 3/1/4/2;\n}\n\n#container.contact {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    height: 100%;\n    width: 100vw;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    mask-image: linear-gradient(to bottom left, rgb(0, 0, 0), rgba(0, 0, 0, .8) ); \n}\n\n#contact-main-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-left: 80px;\n    gap: 40px;\n}\n#contact-message {\n    font-family: 'Walsheim-Medium', Arial, Helvetica, sans-serif, monospace;\n    color: whitesmoke;\n    font-size: 18px;\n}\n\n#contact-message h2 {\n    font-family: 'Walsheim-Regular-Oblique', Arial, Helvetica, sans-serif, monospace;\n    color: #D39E0D;\n    font-size: 58px;\n}\n\n#contact-message a {\n    font-family: 'Walsheim-Regular-Oblique', Arial, Helvetica, sans-serif, monospace;\n    color: #D39E0D;\n    margin-right: 110px;\n}\n\n#contact-message p {\n    margin-top: -10px;\n    margin-bottom: 10px;\n    font-size: 24px;\n}\n\n#form-wrapper {\n    background-color: rgba(0, 0, 0, .3);\n    border-radius: 8px;\n}\n\nform {\n    height: 458px;\n    width: 445px;\n    display: flex;\n    flex-flow: column;\n    font-family: 'Walsheim-Light', Arial, Helvetica, sans-serif, monospace;\n    color: whitesmoke;\n    font-weight: lighter;\n    padding: 20px;\n}\n\nform h3 {\n    margin-top: 0;\n    font-size: 22px;\n}\n\nform input {\n    border-radius: 18px;\n    height: 24px;\n    background-color: rgba(0, 0, 0, .6);\n    color: whitesmoke;\n    border: none;\n    padding: 8px;\n}\n\nform input:focus {\n    outline: 1px solid #D39E0D;\n    \n}\n\nform textarea {\n    height: 80px;\n    -webkit-border-radius: 12px;\n    -moz-border-radius: 12px;\n    border-radius: 18px;\n    background-color: rgba(0, 0, 0, .6);\n    color: whitesmoke;\n    border: none;\n    padding: 8px;\n    font-family: 'Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;\n}\n\nform textarea:focus {\n    outline: 1px solid #D39E0D;\n}\n\n#submit {\n    height: 50px;\n    min-width: 140px;\n    max-width: 140px;\n    background-color: transparent;\n    color: white;\n    outline: 1px solid transparent;\n    box-shadow: 0 0 1px rgba(255,255,255,0);\n    font-family: 'GT-Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;\n    font-size: 28px;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid white;\n    transform: skewX(-8deg);\n    margin-top: 14px;\n}\n\n#submit:hover {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid #FFC117;\n    color: #FFC117;\n    font-size: 30px;\n}\n\n#submit:not(:hover) {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid white;\n    color: white;\n    font-size: 28px;\n}\n\n#submit:active {\n    transition: background-color .3s ease-in-out, color .3s ease-in-out;\n    background-color: #FFC117;\n    color: black;\n}\n\n#first-name, #last-name, label {\n    width: 240px;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* harmony export */   "default": () => (/* binding */ contactLoad)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


function contactLoad() {
    const container = document.querySelector('#container');
    container.setAttribute('class', 'contact');
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    container.style.backgroundImage = "url('./assets/chopsticks.jpg')";
    const contactMainWrapper = document.createElement('div');
    contactMainWrapper.setAttribute('id', 'contact-main-wrapper');
    container.appendChild(contactMainWrapper);
    const contactMessage = document.createElement('div');
    contactMessage.setAttribute('id', 'contact-message');
    contactMainWrapper.appendChild(contactMessage);
    const contactHead = document.createElement('h2');
    contactHead.textContent = 'Hungry for more?';
    contactMessage.appendChild(contactHead);
    const contactMain = document.createElement('p');
    contactMain.textContent = 'Let\'s talk about it!';
    contactMessage.appendChild(contactMain);
    const contactInfoWrapper = document.createElement('div');
    contactInfoWrapper.setAttribute('id', 'contact-info-wrapper');
    contactMessage.appendChild(contactInfoWrapper);
    const contactEmail = document.createElement('a');
    contactEmail.textContent = 'sushi.contact@ginkgo.com';
    contactEmail.href = 'mailto:sushi.contact@ginkgo.com'
    contactMessage.appendChild(contactEmail);
    const contactPhone = document.createElement('span');
    contactPhone.textContent = '(123)-455-4321';
    contactMessage.appendChild(contactPhone);
    const formWrapper = document.createElement('div');
    formWrapper.setAttribute('id', 'form-wrapper');
    contactMainWrapper.appendChild(formWrapper);
    const contactForm = document.createElement('form');
    formWrapper.appendChild(contactForm);
    const formLabel = document.createElement('h3');
    formLabel.textContent = 'Prefer to leave a message? Great!';
    contactForm.appendChild(formLabel);
    const firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.id = 'first-name'
    const firstNameLabel = document.createElement('label');
    firstNameLabel.textContent = 'First Name';
    firstNameLabel.htmlFor = 'first-name';
    contactForm.appendChild(firstNameLabel);
    contactForm.appendChild(firstName);
    const lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.id = 'last-name'
    const lastNameLabel = document.createElement('label');
    lastNameLabel.textContent = 'Last Name';
    lastNameLabel.htmlFor = 'last-name';
    contactForm.appendChild(lastNameLabel);
    contactForm.appendChild(lastName);
    const email = document.createElement('input');
    email.type = 'email';
    email.id = 'email'
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'E-mail';
    emailLabel.htmlFor = 'email';
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(email);
    const phone = document.createElement('input');
    phone.type = 'tel';
    phone.id = 'phone'
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone';
    phoneLabel.htmlFor = 'phone';
    contactForm.appendChild(phoneLabel);
    contactForm.appendChild(phone);
    const message = document.createElement('textarea');
    message.id = 'message'
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message';
    messageLabel.htmlFor = 'message';
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(message);
    const submit = document.createElement('button');
    submit.id = 'submit';
    submit.textContent = 'Submit';
    contactForm.appendChild(submit);
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
    });

}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeLoad)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


function homeLoad() {
    const container = document.querySelector('#container');
    container.setAttribute('class', 'home');
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    const aboutSection = document.createElement('div');
    aboutSection.setAttribute('id', 'about-section');
    const aboutTitle = document.createElement('h2');
    const aboutWrapper = document.createElement('div');
    const conscious = document.createElement('span');
    conscious.textContent = ' conscious decisions';
    const sustainable = document.createElement('span');
    sustainable.textContent = ' sustainable future';
    const making = document.createElement('span');
    making.textContent = 'Making ';
    const fourA = document.createElement('span');
    const period = document.createElement('span');
    period.textContent = '.';
    fourA.textContent = ' for a';
    conscious.setAttribute('class', 'gold');
    sustainable.setAttribute('class', 'gold');
    aboutWrapper.setAttribute('id', 'about-wrapper');
    aboutTitle.appendChild(making);
    aboutTitle.appendChild(conscious);
    aboutTitle.appendChild(fourA);
    aboutTitle.appendChild(sustainable);
    aboutTitle.appendChild(period);
    container.appendChild(aboutSection);
    aboutSection.appendChild(aboutWrapper);
    aboutWrapper.appendChild(aboutTitle);
    console.log('hello world');
    const sushiHolder = document.createElement('div');
    sushiHolder.setAttribute('id', 'sushi-holder');
    container.appendChild(sushiHolder);
    container.style.backgroundImage = "url('./assets/sushi.jpg')";
    

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




const home = document.querySelector('#home-btn');
const menu = document.querySelector('#menu-btn');
const contact = document.querySelector('#contact-btn');

window.onload = (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

home.addEventListener('click', () => {
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

menu.addEventListener('click', () => {
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})

contact.addEventListener('click', () => {
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


function menuLoad() {
    const container = document.querySelector('#container');
    container.setAttribute('class', 'menu');
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    container.style.backgroundImage = 'none';
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    container.appendChild(menu);
    const menuLeft = document.createElement('div');
    menuLeft.setAttribute('id', 'menu-left');
    menu.appendChild(menuLeft);
    const menuRight = document.createElement('div');
    menuRight.setAttribute('id', 'menu-right');
    menu.appendChild(menuRight);
    const menuRightWrapper = document.createElement('div');
    menuRightWrapper.setAttribute('id', 'right-wrapper');
    menuRight.appendChild(menuRightWrapper);
    const specials = document.createElement('div');
    specials.setAttribute('id', 'specials');
    menuLeft.appendChild(specials);
    const sashimi = document.createElement('div');
    sashimi.setAttribute('id', 'sashimi');
    specials.appendChild(sashimi);
    const rolls = document.createElement('div');
    rolls.setAttribute('id', 'rolls');
    specials.appendChild(rolls);
    const plates = document.createElement('div');
    plates.setAttribute('id', 'plates');
    menuRightWrapper.appendChild(plates);
    const dessert = document.createElement('div') ;
    dessert.setAttribute('id', 'dessert');
    menuRightWrapper.appendChild(dessert);
    // const sashimiPrices = document.createElement('div');
    // sashimiPrices.setAttribute('id', 'sashimi-prices');
    // specials.appendChild(sashimiPrices);
    
    const sashimiHead = document.createElement('h2');
    sashimiHead.setAttribute('class', 'menu-head');
    sashimiHead.setAttribute('id', 'sashimi-head');
    sashimiHead.textContent = 'SIGNATURE SASHIMI';
    specials.appendChild(sashimiHead);
    // const rollsHead = document.createElement('h2');
    // rollsHead.setAttribute('class', 'menu-head');
    // rollsHead.setAttribute('id', 'rolls-head');
    // rollsHead.textContent = 'SIGNATURE ROLLS';
    // specials.appendChild(rollsHead);
    const platesHead = document.createElement('h2');
    platesHead.setAttribute('class', 'menu-head');
    platesHead.setAttribute('id', 'plates-head');
    platesHead.textContent = 'SMALL PLATES';
    menuRightWrapper.appendChild(platesHead);
    const dessertHead = document.createElement('h2');
    dessertHead.setAttribute('class', 'menu-head');
    dessertHead.setAttribute('id', 'dessert-head');
    dessertHead.textContent = 'DESSERT';
    menuRightWrapper.appendChild(dessertHead);

    const hamachi = document.createElement('div');
    hamachi.setAttribute('class', 'menu-item');
    sashimi.appendChild(hamachi);

    const hamachiTitle = document.createElement('div');
    hamachiTitle.setAttribute('class', 'menu-item-title');
    hamachiTitle.setAttribute('id', 'hamachi-title');
    hamachi.appendChild(hamachiTitle);

    const hamachiName = document.createElement('h3');
    hamachiName.setAttribute('class', 'menu-name-light');
    hamachiName.setAttribute('id', 'hamachi-name');
    hamachiName.textContent = 'HAMACHI SIZZLE*'
    hamachiTitle.appendChild(hamachiName);

    const hamachiPrice = document.createElement('h3');
    hamachiPrice.setAttribute('class', 'price');
    hamachiPrice.setAttribute('id', 'hamachi-price');
    hamachiPrice.textContent = '23'
    hamachiTitle.appendChild(hamachiPrice);

    const hamachiInfo = document.createElement('span');
    hamachiInfo.setAttribute('class', 'menu-info-dark');
    hamachiInfo.setAttribute('id', 'hamachi-info');
    hamachiInfo.textContent = 'Hot oil, fresh ginger, garlic, chive, ponzu, aleppo pepper'
    hamachi.appendChild(hamachiInfo);

    const crudo = document.createElement('div');
    crudo.setAttribute('class', 'menu-item');
    sashimi.appendChild(crudo);

    const crudoTitle = document.createElement('div');
    crudoTitle.setAttribute('class', 'menu-item-title');
    crudoTitle.setAttribute('id', 'crudo-title');
    crudo.appendChild(crudoTitle);

    const crudoName = document.createElement('h3');
    crudoName.setAttribute('class', 'menu-name-light');
    crudoName.setAttribute('id', 'crudo-name');
    crudoName.textContent = 'KING SALMON CRUDO*'
    crudoTitle.appendChild(crudoName);

    const crudoPrice = document.createElement('h3');
    crudoPrice.setAttribute('class', 'price');
    crudoPrice.setAttribute('id', 'crudo-price');
    crudoPrice.textContent = '23'
    crudoTitle.appendChild(crudoPrice);

    const crudoInfo = document.createElement('span');
    crudoInfo.setAttribute('class', 'menu-info-dark');
    crudoInfo.setAttribute('id', 'crudo-info');
    crudoInfo.textContent = 'White truffle ponzu, cherry tomato, sea salt'
    crudo.appendChild(crudoInfo);

    const carpaccio = document.createElement('div');
    carpaccio.setAttribute('class', 'menu-item');
    sashimi.appendChild(carpaccio);

    const carpaccioTitle = document.createElement('div');
    carpaccioTitle.setAttribute('class', 'menu-item-title');
    carpaccioTitle.setAttribute('id', 'carpaccio-title');
    carpaccio.appendChild(carpaccioTitle);

    const carpaccioName = document.createElement('h3');
    carpaccioName.setAttribute('class', 'menu-name-light');
    carpaccioName.setAttribute('id', 'carpaccio-name');
    carpaccioName.textContent = 'OCTOPUS CARPACCIO'
    carpaccioTitle.appendChild(carpaccioName);

    const carpaccioPrice = document.createElement('h3');
    carpaccioPrice.setAttribute('class', 'price');
    carpaccioPrice.setAttribute('id', 'carpaccio-price');
    carpaccioPrice.textContent = '22'
    carpaccioTitle.appendChild(carpaccioPrice);

    const carpaccioInfo = document.createElement('span');
    carpaccioInfo.setAttribute('class', 'menu-info-dark');
    carpaccioInfo.setAttribute('id', 'carpaccio-info');
    carpaccioInfo.textContent = 'Lemon vinaigrette, crispy capers, tomato, fresh herbs'
    carpaccio.appendChild(carpaccioInfo);

    const zuke = document.createElement('div');
    zuke.setAttribute('class', 'menu-item');
    sashimi.appendChild(zuke);

    const zukeTitle = document.createElement('div');
    zukeTitle.setAttribute('class', 'menu-item-title');
    zukeTitle.setAttribute('id', 'zuke-title');
    zuke.appendChild(zukeTitle);

    const zukeName = document.createElement('h3');
    zukeName.setAttribute('class', 'menu-name-light');
    zukeName.setAttribute('id', 'zuke-name');
    zukeName.textContent = 'TUNA ZUKE*'
    zukeTitle.appendChild(zukeName);

    const zukePrice = document.createElement('h3');
    zukePrice.setAttribute('class', 'price');
    zukePrice.setAttribute('id', 'zuke-price');
    zukePrice.textContent = '24'
    zukeTitle.appendChild(zukePrice);

    const zukeInfo = document.createElement('span');
    zukeInfo.setAttribute('class', 'menu-info-dark');
    zukeInfo.setAttribute('id', 'zuke-info');
    zukeInfo.textContent = 'Soy marinated bigeye tuna, sesame onion ponzu, fried garlic, chive'
    zuke.appendChild(zukeInfo);

    const kanpachi = document.createElement('div');
    kanpachi.setAttribute('class', 'menu-item');
    sashimi.appendChild(kanpachi);

    const kanpachiTitle = document.createElement('div');
    kanpachiTitle.setAttribute('class', 'menu-item-title');
    kanpachiTitle.setAttribute('id', 'kanpachi-title');
    kanpachi.appendChild(kanpachiTitle);

    const kanpachiName = document.createElement('h3');
    kanpachiName.setAttribute('class', 'menu-name-light');
    kanpachiName.setAttribute('id', 'kanpachi-name');
    kanpachiName.textContent = 'KANPACHI AGUACHILE*'
    kanpachiTitle.appendChild(kanpachiName);

    const kanpachiPrice = document.createElement('h3');
    kanpachiPrice.setAttribute('class', 'price');
    kanpachiPrice.setAttribute('id', 'kanpachi-price');
    kanpachiPrice.textContent = '23'
    kanpachiTitle.appendChild(kanpachiPrice);

    const kanpachiInfo = document.createElement('span');
    kanpachiInfo.setAttribute('class', 'menu-info-dark');
    kanpachiInfo.setAttribute('id', 'kanpachi-info');
    kanpachiInfo.textContent = 'Cucumber-cilantro aguachile, pomegranate, serrano, charred orange, olive oil, sea salt'
    kanpachi.appendChild(kanpachiInfo);

    const albacore = document.createElement('div');
    albacore.setAttribute('class', 'menu-item');
    sashimi.appendChild(albacore);

    const albacoreTitle = document.createElement('div');
    albacoreTitle.setAttribute('class', 'menu-item-title');
    albacoreTitle.setAttribute('id', 'albacore-title');
    albacore.appendChild(albacoreTitle);

    const albacoreName = document.createElement('h3');
    albacoreName.setAttribute('class', 'menu-name-light');
    albacoreName.setAttribute('id', 'albacore-name');
    albacoreName.textContent = 'ALBACORE CRISPY ONION*'
    albacoreTitle.appendChild(albacoreName);

    const albacorePrice = document.createElement('h3');
    albacorePrice.setAttribute('class', 'price');
    albacorePrice.setAttribute('id', 'albacore-price');
    albacorePrice.textContent = '22'
    albacoreTitle.appendChild(albacorePrice);

    const albacoreInfo = document.createElement('span');
    albacoreInfo.setAttribute('class', 'menu-info-dark');
    albacoreInfo.setAttribute('id', 'albacore-info');
    albacoreInfo.textContent = 'Seared albacore, garlic aioli, yuzu ponzu, crispy onion, chervil'
    albacore.appendChild(albacoreInfo);

    const shiso = document.createElement('div');
    shiso.setAttribute('class', 'menu-item');
    sashimi.appendChild(shiso);

    const shisoTitle = document.createElement('div');
    shisoTitle.setAttribute('class', 'menu-item-title');
    shisoTitle.setAttribute('id', 'shiso-title');
    shiso.appendChild(shisoTitle);

    const shisoName = document.createElement('h3');
    shisoName.setAttribute('class', 'menu-name-light');
    shisoName.setAttribute('id', 'shiso-name');
    shisoName.textContent = 'SHISO PLUM SHIROMI*'
    shisoTitle.appendChild(shisoName);

    const shisoPrice = document.createElement('h3');
    shisoPrice.setAttribute('class', 'price');
    shisoPrice.setAttribute('id', 'shiso-price');
    shisoPrice.textContent = '22'
    shisoTitle.appendChild(shisoPrice);

    const shisoInfo = document.createElement('span');
    shisoInfo.setAttribute('class', 'menu-info-dark');
    shisoInfo.setAttribute('id', 'shiso-info');
    shisoInfo.textContent = 'Whitefish, yuzu ponzu, olive oil, umeboshi, shiso'
    shiso.appendChild(shisoInfo);

    const tataki = document.createElement('div');
    tataki.setAttribute('class', 'menu-item');
    sashimi.appendChild(tataki);

    const tatakiTitle = document.createElement('div');
    tatakiTitle.setAttribute('class', 'menu-item-title');
    tatakiTitle.setAttribute('id', 'tataki-title');
    tataki.appendChild(tatakiTitle);

    const tatakiName = document.createElement('h3');
    tatakiName.setAttribute('class', 'menu-name-light');
    tatakiName.setAttribute('id', 'tataki-name');
    tatakiName.textContent = 'TUNA TATAKI*'
    tatakiTitle.appendChild(tatakiName);

    const tatakiPrice = document.createElement('h3');
    tatakiPrice.setAttribute('class', 'price');
    tatakiPrice.setAttribute('id', 'tataki-price');
    tatakiPrice.textContent = '24'
    tatakiTitle.appendChild(tatakiPrice);

    const tatakiInfo = document.createElement('span');
    tatakiInfo.setAttribute('class', 'menu-info-dark');
    tatakiInfo.setAttribute('id', 'tataki-info');
    tatakiInfo.textContent = 'Sesame crusted bigeye tuna, apple mustard dressing, green onion'
    tataki.appendChild(tatakiInfo);

    const tiradito = document.createElement('div');
    tiradito.setAttribute('class', 'menu-item');
    sashimi.appendChild(tiradito);

    const tiraditoTitle = document.createElement('div');
    tiraditoTitle.setAttribute('class', 'menu-item-title');
    tiraditoTitle.setAttribute('id', 'tiradito-title');
    tiradito.appendChild(tiraditoTitle);

    const tiraditoName = document.createElement('h3');
    tiraditoName.setAttribute('class', 'menu-name-light');
    tiraditoName.setAttribute('id', 'tiradito-name');
    tiraditoName.textContent = 'WHITEFISH TIRADITO*'
    tiraditoTitle.appendChild(tiraditoName);

    const tiraditoPrice = document.createElement('h3');
    tiraditoPrice.setAttribute('class', 'price');
    tiraditoPrice.setAttribute('id', 'tiradito-price');
    tiraditoPrice.textContent = '22'
    tiraditoTitle.appendChild(tiraditoPrice);

    const tiraditoInfo = document.createElement('span');
    tiraditoInfo.setAttribute('class', 'menu-info-dark');
    tiraditoInfo.setAttribute('id', 'tiradito-info');
    tiraditoInfo.textContent = 'Aji amarillo chili tigers milk, mango, gochugaru oil, basil, sea salt'
    tiradito.appendChild(tiraditoInfo);

    const maitake = document.createElement('div');
    maitake.setAttribute('class', 'menu-item');
    plates.appendChild(maitake);

    const maitakeTitle = document.createElement('div');
    maitakeTitle.setAttribute('class', 'menu-item-title');
    maitakeTitle.setAttribute('id', 'maitake-title');
    maitake.appendChild(maitakeTitle);

    const maitakeName = document.createElement('h3');
    maitakeName.setAttribute('class', 'menu-name-light');
    maitakeName.setAttribute('id', 'maitake-name');
    maitakeName.textContent = 'ROASTED MAITAKE'
    maitakeTitle.appendChild(maitakeName);

    const maitakePrice = document.createElement('h3');
    maitakePrice.setAttribute('class', 'price');
    maitakePrice.setAttribute('id', 'maitake-price');
    maitakePrice.textContent = '14'
    maitakeTitle.appendChild(maitakePrice);

    const maitakeInfo = document.createElement('span');
    maitakeInfo.setAttribute('class', 'menu-info-dark');
    maitakeInfo.setAttribute('id', 'maitake-info');
    maitakeInfo.textContent = 'Whole roasted maitake mushroom, wakame butter, chive, lemon'
    maitake.appendChild(maitakeInfo);

    const octopus = document.createElement('div');
    octopus.setAttribute('class', 'menu-item');
    plates.appendChild(octopus);

    const octopusTitle = document.createElement('div');
    octopusTitle.setAttribute('class', 'menu-item-title');
    octopusTitle.setAttribute('id', 'octopus-title');
    octopus.appendChild(octopusTitle);

    const octopusName = document.createElement('h3');
    octopusName.setAttribute('class', 'menu-name-light');
    octopusName.setAttribute('id', 'octopus-name');
    octopusName.textContent = 'GRILLED OCTOPUS'
    octopusTitle.appendChild(octopusName);

    const octopusPrice = document.createElement('h3');
    octopusPrice.setAttribute('class', 'price');
    octopusPrice.setAttribute('id', 'octopus-price');
    octopusPrice.textContent = '24'
    octopusTitle.appendChild(octopusPrice);

    const octopusInfo = document.createElement('span');
    octopusInfo.setAttribute('class', 'menu-info-dark');
    octopusInfo.setAttribute('id', 'octopus-info');
    octopusInfo.textContent = 'Roasted cauliflower steak, blistered cherry tomatoes, aji verde, chervil'
    octopus.appendChild(octopusInfo);

    const cod = document.createElement('div');
    cod.setAttribute('class', 'menu-item');
    plates.appendChild(cod);

    const codTitle = document.createElement('div');
    codTitle.setAttribute('class', 'menu-item-title');
    codTitle.setAttribute('id', 'cod-title');
    cod.appendChild(codTitle);

    const codName = document.createElement('h3');
    codName.setAttribute('class', 'menu-name-light');
    codName.setAttribute('id', 'cod-name');
    codName.textContent = 'MISO GLAZED BLACK COD'
    codTitle.appendChild(codName);

    const codPrice = document.createElement('h3');
    codPrice.setAttribute('class', 'price');
    codPrice.setAttribute('id', 'cod-price');
    codPrice.textContent = '18'
    codTitle.appendChild(codPrice);

    const codInfo = document.createElement('span');
    codInfo.setAttribute('class', 'menu-info-dark');
    codInfo.setAttribute('id', 'cod-info');
    codInfo.textContent = 'Broiled black cod, orange, ginger, green onion, yuzu miso, gochugaru oil'
    cod.appendChild(codInfo);

    const chicken = document.createElement('div');
    chicken.setAttribute('class', 'menu-item');
    plates.appendChild(chicken);

    const chickenTitle = document.createElement('div');
    chickenTitle.setAttribute('class', 'menu-item-title');
    chickenTitle.setAttribute('id', 'chicken-title');
    chicken.appendChild(chickenTitle);

    const chickenName = document.createElement('h3');
    chickenName.setAttribute('class', 'menu-name-light');
    chickenName.setAttribute('id', 'chicken-name');
    chickenName.textContent = 'CHICKEN KARAAGE'
    chickenTitle.appendChild(chickenName);

    const chickenPrice = document.createElement('h3');
    chickenPrice.setAttribute('class', 'price');
    chickenPrice.setAttribute('id', 'chicken-price');
    chickenPrice.textContent = '12'
    chickenTitle.appendChild(chickenPrice);

    const chickenInfo = document.createElement('span');
    chickenInfo.setAttribute('class', 'menu-info-dark');
    chickenInfo.setAttribute('id', 'chicken-info');
    chickenInfo.textContent = 'Crispy fried marinated chicken, dill kewpie aioli, lemon'
    chicken.appendChild(chickenInfo);

    const saba = document.createElement('div');
    saba.setAttribute('class', 'menu-item');
    plates.appendChild(saba);

    const sabaTitle = document.createElement('div');
    sabaTitle.setAttribute('class', 'menu-item-title');
    sabaTitle.setAttribute('id', 'saba-title');
    saba.appendChild(sabaTitle);

    const sabaName = document.createElement('h3');
    sabaName.setAttribute('class', 'menu-name-light');
    sabaName.setAttribute('id', 'saba-name');
    sabaName.textContent = 'GRILLED SABA'
    sabaTitle.appendChild(sabaName);

    const sabaPrice = document.createElement('h3');
    sabaPrice.setAttribute('class', 'price');
    sabaPrice.setAttribute('id', 'saba-price');
    sabaPrice.textContent = '16'
    sabaTitle.appendChild(sabaPrice);

    const sabaInfo = document.createElement('span');
    sabaInfo.setAttribute('class', 'menu-info-dark');
    sabaInfo.setAttribute('id', 'saba-info');
    sabaInfo.textContent = 'Blistered filet of mackerel, momiji oroshi, pickled mustard seed, lemon ash, green onion'
    saba.appendChild(sabaInfo);

    const matcha = document.createElement('div');
    matcha.setAttribute('class', 'menu-item');
    dessert.appendChild(matcha);

    const matchaTitle = document.createElement('div');
    matchaTitle.setAttribute('class', 'menu-item-title');
    matchaTitle.setAttribute('id', 'matcha-title');
    matcha.appendChild(matchaTitle);

    const matchaName = document.createElement('h3');
    matchaName.setAttribute('class', 'menu-name-light');
    matchaName.setAttribute('id', 'matcha-name');
    matchaName.textContent = 'MATCHA PANNA COTTA'
    matchaTitle.appendChild(matchaName);

    const matchaPrice = document.createElement('h3');
    matchaPrice.setAttribute('class', 'price');
    matchaPrice.setAttribute('id', 'matcha-price');
    matchaPrice.textContent = '9'
    matchaTitle.appendChild(matchaPrice);

    const matchaInfo = document.createElement('span');
    matchaInfo.setAttribute('class', 'menu-info-dark');
    matchaInfo.setAttribute('id', 'matcha-info');
    matchaInfo.textContent = 'White chocolate crumb, fresh berries'
    matcha.appendChild(matchaInfo);

    const sesame = document.createElement('div');
    sesame.setAttribute('class', 'menu-item');
    dessert.appendChild(sesame);

    const sesameTitle = document.createElement('div');
    sesameTitle.setAttribute('class', 'menu-item-title');
    sesameTitle.setAttribute('id', 'sesame-title');
    sesame.appendChild(sesameTitle);

    const sesameName = document.createElement('h3');
    sesameName.setAttribute('class', 'menu-name-light');
    sesameName.setAttribute('id', 'sesame-name');
    sesameName.textContent = 'BLACK SESAME BROWNIE'
    sesameTitle.appendChild(sesameName);

    const sesamePrice = document.createElement('h3');
    sesamePrice.setAttribute('class', 'price');
    sesamePrice.setAttribute('id', 'sesame-price');
    sesamePrice.textContent = '10'
    sesameTitle.appendChild(sesamePrice);

    const sesameInfo = document.createElement('span');
    sesameInfo.setAttribute('class', 'menu-info-dark');
    sesameInfo.setAttribute('id', 'sesame-info');
    sesameInfo.textContent = 'Vanilla ice cream, fresh berries, black sesame'
    sesame.appendChild(sesameInfo);

    const mochi = document.createElement('div');
    mochi.setAttribute('class', 'menu-item');
    dessert.appendChild(mochi);

    const mochiTitle = document.createElement('div');
    mochiTitle.setAttribute('class', 'menu-item-title');
    mochiTitle.setAttribute('id', 'mochi-title');
    mochi.appendChild(mochiTitle);

    const mochiName = document.createElement('h3');
    mochiName.setAttribute('class', 'menu-name-light');
    mochiName.setAttribute('id', 'mochi-name');
    mochiName.textContent = 'SASA MOCHI'
    mochiTitle.appendChild(mochiName);

    const mochiPrice = document.createElement('h3');
    mochiPrice.setAttribute('class', 'price');
    mochiPrice.setAttribute('id', 'mochi-price');
    mochiPrice.textContent = '12'
    mochiTitle.appendChild(mochiPrice);

    const mochiInfo = document.createElement('span');
    mochiInfo.setAttribute('class', 'menu-info-dark');
    mochiInfo.setAttribute('id', 'mochi-info');
    mochiInfo.textContent = 'Sasa bamboo leaf, yomogi, kinako flour '
    mochi.appendChild(mochiInfo);
}

/***/ }),

/***/ "./src/assets/GT-Walsheim-Light-Oblique.otf":
/*!**************************************************!*\
  !*** ./src/assets/GT-Walsheim-Light-Oblique.otf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "507b5b5c26d26415ac0a.otf";

/***/ }),

/***/ "./src/assets/GT-Walsheim-Light.otf":
/*!******************************************!*\
  !*** ./src/assets/GT-Walsheim-Light.otf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e881269abe5a82e98b8.otf";

/***/ }),

/***/ "./src/assets/GT-Walsheim-Medium-Oblique.otf":
/*!***************************************************!*\
  !*** ./src/assets/GT-Walsheim-Medium-Oblique.otf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3079d21f9cfcef5f7cfd.otf";

/***/ }),

/***/ "./src/assets/GT-Walsheim-Medium.otf":
/*!*******************************************!*\
  !*** ./src/assets/GT-Walsheim-Medium.otf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "308abe43401121defd2f.otf";

/***/ }),

/***/ "./src/assets/GT-Walsheim-Regular-Oblique.otf":
/*!****************************************************!*\
  !*** ./src/assets/GT-Walsheim-Regular-Oblique.otf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e20a2ff3dacf571b32db.otf";

/***/ }),

/***/ "./src/assets/GT-Walsheim-Regular.otf":
/*!********************************************!*\
  !*** ./src/assets/GT-Walsheim-Regular.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee9ff09fe57183b4789d.otf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLDJKQUEwRDtBQUN0Ryw0Q0FBNEMsMklBQWtEO0FBQzlGLDRDQUE0Qyw2SkFBMkQ7QUFDdkcsNENBQTRDLDZJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxV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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYnNCOztBQUVQO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7O0FDdEZxQjs7QUFFTjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4Q2lDO0FBQ0E7QUFDTTs7QUFFdkM7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix1REFBVzs7QUFFM0I7QUFDQSxJQUFJLG9EQUFRO0FBQ1osQ0FBQzs7QUFFRDtBQUNBLElBQUksb0RBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0EsSUFBSSx3REFBVztBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BCcUI7O0FBRVA7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0dULVdhbHNoZWltLUxpZ2h0LU9ibGlxdWUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvR1QtV2Fsc2hlaW0tTGlnaHQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvR1QtV2Fsc2hlaW0tTWVkaXVtLU9ibGlxdWUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvR1QtV2Fsc2hlaW0tTWVkaXVtLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0dULVdhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9HVC1XYWxzaGVpbS1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tYWluLWJnLWNvbG9yOiAjMzMzNTMzO1xuICAgIC0tc2Vjb25kYXJ5LWJnLWNvbG9yOiAjMjQyNDIzXG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTGlnaHQtT2JsaXF1ZSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLUxpZ2h0JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTWVkaXVtLU9ibGlxdWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1NZWRpdW0nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEyMHB4LCAxMHZoKSA5MHZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcbn1cblxuaGVhZGVyIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDRweCwgNTB2dykgbWlubWF4KDQwMHB4LCA1MHZ3KTtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNnB4IDE2cHggdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcbn1cblxuaGVhZGVyIGltZyB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxubmF2IHtcbiAgICBtYXgtd2lkdGg6IDcxOHB4O1xuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG5uYXYgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDApO1xuICAgIGZvbnQtZmFtaWx5OiAnR1QtV2Fsc2hlaW0tUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtOGRlZyk7XG59XG5cbm5hdiBidXR0b246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGJvcmRlciAuNXMgZWFzZS1pbi1vdXQsIGNvbG9yIC41cyBlYXNlLWluLW91dCwgZm9udC1zaXplIC41cyBlYXNlLWluLW91dDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZDMTE3O1xuICAgIGNvbG9yOiAjRkZDMTE3O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxubmF2IGJ1dHRvbjpub3QoOmhvdmVyKSB7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cyBlYXNlLWluLW91dCwgY29sb3IgLjVzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgLjVzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG59XG5cbm5hdiBidXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCwgY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMTc7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jY29udGFpbmVyLmhvbWUge1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDRweCwgMjB2dykgbWlubWF4KDk4MHB4LCA4MHZ3KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgLjUpICk7IFxufVxuXG4jYWJvdXQtc2VjdGlvbiB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jYWJvdXQtd3JhcHBlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jYWJvdXQtd3JhcHBlciBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG1hcmdpbi10b3A6IC0zMCU7XG4gICAgbWF4LXdpZHRoOiAyMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaDIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uZ29sZCB7XG4gICAgY29sb3I6ICNGRkMxMTc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4jc3VzaGktaG9sZGVyIHtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgXG59XG5cbiNjb250YWluZXIubWVudSB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNTMzO1xufVxuXG4jY29udGFpbmVyLm1lbnUgZGl2IHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbiNtZW51IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxNTAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbn1cblxuI21lbnUtbGVmdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cblxuXG5cbiNzcGVjaWFscyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIlIDkwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEQkQ1O1xufVxuXG4jc2FzaGltaSB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSwgMTQwcHgpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNDcwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3Nhc2hpbWktaGVhZCB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzI0MjQyMztcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG59XG5cbi5tZW51LWl0ZW0tdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGNvbG9yOiAjMzkzYjNhO1xufVxuXG4ubWVudS1pdGVtLXRpdGxlIGgzIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tZW51LWluZm8tZGFyayB7XG4gICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtd3JhcDogd3JhcDtcbn1cblxuI2hhbWFjaGkge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cblxuI2NydWRvIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG59XG5cbiNjYXJwYWNjaW8ge1xuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcbn1cblxuI3p1a2Uge1xuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcbn1cblxuI2thbnBhY2hpIHtcbiAgICBncmlkLWFyZWE6IDUvMS82LzI7XG59XG5cbiNhbGJhY29yZSB7XG4gICAgZ3JpZC1hcmVhOiA2LzEvNy8yO1xufVxuXG4jc2hpc28ge1xuICAgIGdyaWQtYXJlYTogNy8xLzgvMjtcbn1cblxuI3RhdGFraSB7XG4gICAgZ3JpZC1hcmVhOiA4LzEvOS8yO1xufVxuXG4jdGlyYWRpdG8ge1xuICAgIGdyaWQtYXJlYTogOS8xLzEwLzI7XG59XG5cbiNtZW51LXJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEVEREY7XG59XG5cbiNyaWdodC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMiUgNTYlIDIlIDM2JTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcbn1cblxuI3BsYXRlcy1oZWFkIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI3BsYXRlcyB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDE0MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI21haXRha2Uge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cbiNvY3RvcHVzIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG59XG4jY29kIHtcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XG59XG4jY2hpY2tlbiB7XG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xufVxuI3NhYmEge1xuICAgIGdyaWQtYXJlYTogNS8xLzYvMjtcbn1cblxuI2Rlc3NlcnQtaGVhZCB7XG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzI0MjQyMztcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuI2Rlc3NlcnR7XG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDE0MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbiNtYXRjaGEge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cblxuI3Nlc2FtZSB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xufVxuXG4jbW9jaGkge1xuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcbn1cblxuI2NvbnRhaW5lci5jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiKDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIC44KSApOyBcbn1cblxuI2NvbnRhY3QtbWFpbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICBnYXA6IDQwcHg7XG59XG4jY29udGFjdC1tZXNzYWdlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNjb250YWN0LW1lc3NhZ2UgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xuICAgIGNvbG9yOiAjRDM5RTBEO1xuICAgIGZvbnQtc2l6ZTogNThweDtcbn1cblxuI2NvbnRhY3QtbWVzc2FnZSBhIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogI0QzOUUwRDtcbiAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xufVxuXG4jY29udGFjdC1tZXNzYWdlIHAge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4jZm9ybS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmZvcm0ge1xuICAgIGhlaWdodDogNDU4cHg7XG4gICAgd2lkdGg6IDQ0NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodCcsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5mb3JtIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuZm9ybSBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNEMzlFMEQ7XG4gICAgXG59XG5cbmZvcm0gdGV4dGFyZWEge1xuICAgIGhlaWdodDogODBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XG59XG5cbmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjRDM5RTBEO1xufVxuXG4jc3VibWl0IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDApO1xuICAgIGZvbnQtZmFtaWx5OiAnR1QtV2Fsc2hlaW0tUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtOGRlZyk7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuI3N1Ym1pdDpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cyBlYXNlLWluLW91dCwgY29sb3IgLjVzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgLjVzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkMxMTc7XG4gICAgY29sb3I6ICNGRkMxMTc7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jc3VibWl0Om5vdCg6aG92ZXIpIHtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuI3N1Ym1pdDphY3RpdmUge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzExNztcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNmaXJzdC1uYW1lLCAjbGFzdC1uYW1lLCBsYWJlbCB7XG4gICAgd2lkdGg6IDI0MHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJu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LWNvbG9yOiAjMzMzNTMzO1xcbiAgICAtLXNlY29uZGFyeS1iZy1jb2xvcjogIzI0MjQyM1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodC1PYmxpcXVlJztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tTGlnaHQtT2JsaXF1ZS5vdGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodCc7XFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL0dULVdhbHNoZWltLUxpZ2h0Lm90Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bS1PYmxpcXVlJztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tTWVkaXVtLU9ibGlxdWUub3RmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTWVkaXVtJztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tTWVkaXVtLm90Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZSc7XFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL0dULVdhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZS5vdGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tUmVndWxhci5vdGYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTIwcHgsIDEwdmgpIDkwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwNHB4LCA1MHZ3KSBtaW5tYXgoNDAwcHgsIDUwdncpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNnB4IDE2cHggdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxubmF2IHtcXG4gICAgbWF4LXdpZHRoOiA3MThweDtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbn1cXG5cXG5uYXYgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHVC1XYWxzaGVpbS1SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLThkZWcpO1xcbn1cXG5cXG5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cyBlYXNlLWluLW91dCwgY29sb3IgLjVzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZDMTE3O1xcbiAgICBjb2xvcjogI0ZGQzExNztcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5uYXYgYnV0dG9uOm5vdCg6aG92ZXIpIHtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cyBlYXNlLWluLW91dCwgY29sb3IgLjVzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbm5hdiBidXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGNvbG9yIC4zcyBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzExNztcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jY29udGFpbmVyLmhvbWUge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA0cHgsIDIwdncpIG1pbm1heCg5ODBweCwgODB2dyk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgLjUpICk7IFxcbn1cXG5cXG4jYWJvdXQtc2VjdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNhYm91dC13cmFwcGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWJvdXQtd3JhcHBlciBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0zMCU7XFxuICAgIG1heC13aWR0aDogMjMwcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuaDIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmdvbGQge1xcbiAgICBjb2xvcjogI0ZGQzExNztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiNzdXNoaS1ob2xkZXIge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgXFxufVxcblxcbiNjb250YWluZXIubWVudSB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM1MzM7XFxufVxcblxcbiNjb250YWluZXIubWVudSBkaXYge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbiNtZW51IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1NZWRpdW0nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxufVxcblxcbiNtZW51LWxlZnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcblxcblxcbiNzcGVjaWFscyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIlIDkwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkRCRDU7XFxufVxcblxcbiNzYXNoaW1pIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksIDE0MHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNzYXNoaW1pLWhlYWQge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgY29sb3I6ICMyNDI0MjM7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiAjMzkzYjNhO1xcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlIGgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWVudS1pbmZvLWRhcmsge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XFxufVxcblxcbiNoYW1hY2hpIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4jY3J1ZG8ge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxufVxcblxcbiNjYXJwYWNjaW8ge1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxufVxcblxcbiN6dWtlIHtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG5cXG4ja2FucGFjaGkge1xcbiAgICBncmlkLWFyZWE6IDUvMS82LzI7XFxufVxcblxcbiNhbGJhY29yZSB7XFxuICAgIGdyaWQtYXJlYTogNi8xLzcvMjtcXG59XFxuXFxuI3NoaXNvIHtcXG4gICAgZ3JpZC1hcmVhOiA3LzEvOC8yO1xcbn1cXG5cXG4jdGF0YWtpIHtcXG4gICAgZ3JpZC1hcmVhOiA4LzEvOS8yO1xcbn1cXG5cXG4jdGlyYWRpdG8ge1xcbiAgICBncmlkLWFyZWE6IDkvMS8xMC8yO1xcbn1cXG5cXG4jbWVudS1yaWdodCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RURERjtcXG59XFxuXFxuI3JpZ2h0LXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyJSA1NiUgMiUgMzYlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcXG59XFxuXFxuI3BsYXRlcy1oZWFkIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbiNwbGF0ZXMge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDE0MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jbWFpdGFrZSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuI29jdG9wdXMge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxufVxcbiNjb2Qge1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxufVxcbiNjaGlja2VuIHtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG4jc2FiYSB7XFxuICAgIGdyaWQtYXJlYTogNS8xLzYvMjtcXG59XFxuXFxuI2Rlc3NlcnQtaGVhZCB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICBjb2xvcjogIzI0MjQyMztcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxufVxcblxcbiNkZXNzZXJ0e1xcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDE0MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuI21hdGNoYSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuI3Nlc2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG59XFxuXFxuI21vY2hpIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcbn1cXG5cXG4jY29udGFpbmVyLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiKDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIC44KSApOyBcXG59XFxuXFxuI2NvbnRhY3QtbWFpbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xcbiAgICBnYXA6IDQwcHg7XFxufVxcbiNjb250YWN0LW1lc3NhZ2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI2NvbnRhY3QtbWVzc2FnZSBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogI0QzOUUwRDtcXG4gICAgZm9udC1zaXplOiA1OHB4O1xcbn1cXG5cXG4jY29udGFjdC1tZXNzYWdlIGEge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6ICNEMzlFMEQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTEwcHg7XFxufVxcblxcbiNjb250YWN0LW1lc3NhZ2UgcCB7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiNmb3JtLXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgaGVpZ2h0OiA0NThweDtcXG4gICAgd2lkdGg6IDQ0NXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodCcsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5mb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNEMzlFMEQ7XFxuICAgIFxcbn1cXG5cXG5mb3JtIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbn1cXG5cXG5mb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNEMzlFMEQ7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogMTQwcHg7XFxuICAgIG1heC13aWR0aDogMTQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbiAgICBmb250LWZhbWlseTogJ0dULVdhbHNoZWltLVJlZ3VsYXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtOGRlZyk7XFxuICAgIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkMxMTc7XFxuICAgIGNvbG9yOiAjRkZDMTE3O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbiNzdWJtaXQ6bm90KDpob3Zlcikge1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuI3N1Ym1pdDphY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCwgY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTE3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNmaXJzdC1uYW1lLCAjbGFzdC1uYW1lLCBsYWJlbCB7XFxuICAgIHdpZHRoOiAyNDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdExvYWQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRhY3QnKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9hc3NldHMvY2hvcHN0aWNrcy5qcGcnKVwiO1xuICAgIGNvbnN0IGNvbnRhY3RNYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RNYWluV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtbWFpbi13cmFwcGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RNYWluV3JhcHBlcik7XG4gICAgY29uc3QgY29udGFjdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0TWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtbWVzc2FnZScpO1xuICAgIGNvbnRhY3RNYWluV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0TWVzc2FnZSk7XG4gICAgY29uc3QgY29udGFjdEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RIZWFkLnRleHRDb250ZW50ID0gJ0h1bmdyeSBmb3IgbW9yZT8nO1xuICAgIGNvbnRhY3RNZXNzYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkKTtcbiAgICBjb25zdCBjb250YWN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0TWFpbi50ZXh0Q29udGVudCA9ICdMZXRcXCdzIHRhbGsgYWJvdXQgaXQhJztcbiAgICBjb250YWN0TWVzc2FnZS5hcHBlbmRDaGlsZChjb250YWN0TWFpbik7XG4gICAgY29uc3QgY29udGFjdEluZm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm9XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1pbmZvLXdyYXBwZXInKTtcbiAgICBjb250YWN0TWVzc2FnZS5hcHBlbmRDaGlsZChjb250YWN0SW5mb1dyYXBwZXIpO1xuICAgIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSAnc3VzaGkuY29udGFjdEBnaW5rZ28uY29tJztcbiAgICBjb250YWN0RW1haWwuaHJlZiA9ICdtYWlsdG86c3VzaGkuY29udGFjdEBnaW5rZ28uY29tJ1xuICAgIGNvbnRhY3RNZXNzYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG4gICAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnRhY3RQaG9uZS50ZXh0Q29udGVudCA9ICcoMTIzKS00NTUtNDMyMSc7XG4gICAgY29udGFjdE1lc3NhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcbiAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS13cmFwcGVyJyk7XG4gICAgY29udGFjdE1haW5XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1XcmFwcGVyKTtcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG4gICAgY29uc3QgZm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnUHJlZmVyIHRvIGxlYXZlIGEgbWVzc2FnZT8gR3JlYXQhJztcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtTGFiZWwpO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZmlyc3ROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgZmlyc3ROYW1lLmlkID0gJ2ZpcnN0LW5hbWUnXG4gICAgY29uc3QgZmlyc3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZpcnN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ0ZpcnN0IE5hbWUnO1xuICAgIGZpcnN0TmFtZUxhYmVsLmh0bWxGb3IgPSAnZmlyc3QtbmFtZSc7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZmlyc3ROYW1lTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZpcnN0TmFtZSk7XG4gICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhc3ROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgbGFzdE5hbWUuaWQgPSAnbGFzdC1uYW1lJ1xuICAgIGNvbnN0IGxhc3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhc3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTGFzdCBOYW1lJztcbiAgICBsYXN0TmFtZUxhYmVsLmh0bWxGb3IgPSAnbGFzdC1uYW1lJztcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChsYXN0TmFtZUxhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChsYXN0TmFtZSk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVtYWlsLnR5cGUgPSAnZW1haWwnO1xuICAgIGVtYWlsLmlkID0gJ2VtYWlsJ1xuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRS1tYWlsJztcbiAgICBlbWFpbExhYmVsLmh0bWxGb3IgPSAnZW1haWwnO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGhvbmUudHlwZSA9ICd0ZWwnO1xuICAgIHBob25lLmlkID0gJ3Bob25lJ1xuICAgIGNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHBob25lTGFiZWwudGV4dENvbnRlbnQgPSAnUGhvbmUnO1xuICAgIHBob25lTGFiZWwuaHRtbEZvciA9ICdwaG9uZSc7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIG1lc3NhZ2UuaWQgPSAnbWVzc2FnZSdcbiAgICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG1lc3NhZ2VMYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlJztcbiAgICBtZXNzYWdlTGFiZWwuaHRtbEZvciA9ICdtZXNzYWdlJztcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC5pZCA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgY29udGFjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG59IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdob21lJyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1zZWN0aW9uJyk7XG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgYWJvdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29uc2Npb3VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnNjaW91cy50ZXh0Q29udGVudCA9ICcgY29uc2Npb3VzIGRlY2lzaW9ucyc7XG4gICAgY29uc3Qgc3VzdGFpbmFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3VzdGFpbmFibGUudGV4dENvbnRlbnQgPSAnIHN1c3RhaW5hYmxlIGZ1dHVyZSc7XG4gICAgY29uc3QgbWFraW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1ha2luZy50ZXh0Q29udGVudCA9ICdNYWtpbmcgJztcbiAgICBjb25zdCBmb3VyQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwZXJpb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGVyaW9kLnRleHRDb250ZW50ID0gJy4nO1xuICAgIGZvdXJBLnRleHRDb250ZW50ID0gJyBmb3IgYSc7XG4gICAgY29uc2Npb3VzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ29sZCcpO1xuICAgIHN1c3RhaW5hYmxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ29sZCcpO1xuICAgIGFib3V0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LXdyYXBwZXInKTtcbiAgICBhYm91dFRpdGxlLmFwcGVuZENoaWxkKG1ha2luZyk7XG4gICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChjb25zY2lvdXMpO1xuICAgIGFib3V0VGl0bGUuYXBwZW5kQ2hpbGQoZm91ckEpO1xuICAgIGFib3V0VGl0bGUuYXBwZW5kQ2hpbGQoc3VzdGFpbmFibGUpO1xuICAgIGFib3V0VGl0bGUuYXBwZW5kQ2hpbGQocGVyaW9kKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRXcmFwcGVyKTtcbiAgICBhYm91dFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XG4gICAgY29uc3Qgc3VzaGlIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdXNoaUhvbGRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWhvbGRlcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdXNoaUhvbGRlcik7XG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2Fzc2V0cy9zdXNoaS5qcGcnKVwiO1xuICAgIFxuXG59IiwiaW1wb3J0IGhvbWVMb2FkIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0TG9hZCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJyk7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtYnRuJyk7XG5cbndpbmRvdy5vbmxvYWQgPSBjb250YWN0TG9hZCgpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhvbWVMb2FkKCk7XG59KTtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51TG9hZCgpO1xufSlcblxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250YWN0TG9hZCgpO1xufSkiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBjb25zdCBtZW51TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMZWZ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1sZWZ0Jyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51TGVmdCk7XG4gICAgY29uc3QgbWVudVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1yaWdodCcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVJpZ2h0KTtcbiAgICBjb25zdCBtZW51UmlnaHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVJpZ2h0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JpZ2h0LXdyYXBwZXInKTtcbiAgICBtZW51UmlnaHQuYXBwZW5kQ2hpbGQobWVudVJpZ2h0V3JhcHBlcik7XG4gICAgY29uc3Qgc3BlY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGVjaWFscy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NwZWNpYWxzJyk7XG4gICAgbWVudUxlZnQuYXBwZW5kQ2hpbGQoc3BlY2lhbHMpO1xuICAgIGNvbnN0IHNhc2hpbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXNoaW1pLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FzaGltaScpO1xuICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNhc2hpbWkpO1xuICAgIGNvbnN0IHJvbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm9sbHMuc2V0QXR0cmlidXRlKCdpZCcsICdyb2xscycpO1xuICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHJvbGxzKTtcbiAgICBjb25zdCBwbGF0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF0ZXMuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF0ZXMnKTtcbiAgICBtZW51UmlnaHRXcmFwcGVyLmFwcGVuZENoaWxkKHBsYXRlcyk7XG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDtcbiAgICBkZXNzZXJ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzc2VydCcpO1xuICAgIG1lbnVSaWdodFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzc2VydCk7XG4gICAgLy8gY29uc3Qgc2FzaGltaVByaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHNhc2hpbWlQcmljZXMuc2V0QXR0cmlidXRlKCdpZCcsICdzYXNoaW1pLXByaWNlcycpO1xuICAgIC8vIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNhc2hpbWlQcmljZXMpO1xuICAgIFxuICAgIGNvbnN0IHNhc2hpbWlIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzYXNoaW1pSGVhZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaGVhZCcpO1xuICAgIHNhc2hpbWlIZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FzaGltaS1oZWFkJyk7XG4gICAgc2FzaGltaUhlYWQudGV4dENvbnRlbnQgPSAnU0lHTkFUVVJFIFNBU0hJTUknO1xuICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNhc2hpbWlIZWFkKTtcbiAgICAvLyBjb25zdCByb2xsc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIC8vIHJvbGxzSGVhZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaGVhZCcpO1xuICAgIC8vIHJvbGxzSGVhZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvbGxzLWhlYWQnKTtcbiAgICAvLyByb2xsc0hlYWQudGV4dENvbnRlbnQgPSAnU0lHTkFUVVJFIFJPTExTJztcbiAgICAvLyBzcGVjaWFscy5hcHBlbmRDaGlsZChyb2xsc0hlYWQpO1xuICAgIGNvbnN0IHBsYXRlc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBsYXRlc0hlYWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWhlYWQnKTtcbiAgICBwbGF0ZXNIZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxhdGVzLWhlYWQnKTtcbiAgICBwbGF0ZXNIZWFkLnRleHRDb250ZW50ID0gJ1NNQUxMIFBMQVRFUyc7XG4gICAgbWVudVJpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZChwbGF0ZXNIZWFkKTtcbiAgICBjb25zdCBkZXNzZXJ0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZGVzc2VydEhlYWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWhlYWQnKTtcbiAgICBkZXNzZXJ0SGVhZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc3NlcnQtaGVhZCcpO1xuICAgIGRlc3NlcnRIZWFkLnRleHRDb250ZW50ID0gJ0RFU1NFUlQnO1xuICAgIG1lbnVSaWdodFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzc2VydEhlYWQpO1xuXG4gICAgY29uc3QgaGFtYWNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhhbWFjaGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGhhbWFjaGkpO1xuXG4gICAgY29uc3QgaGFtYWNoaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGFtYWNoaVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgaGFtYWNoaVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS10aXRsZScpO1xuICAgIGhhbWFjaGkuYXBwZW5kQ2hpbGQoaGFtYWNoaVRpdGxlKTtcblxuICAgIGNvbnN0IGhhbWFjaGlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoYW1hY2hpTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGhhbWFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS1uYW1lJyk7XG4gICAgaGFtYWNoaU5hbWUudGV4dENvbnRlbnQgPSAnSEFNQUNISSBTSVpaTEUqJ1xuICAgIGhhbWFjaGlUaXRsZS5hcHBlbmRDaGlsZChoYW1hY2hpTmFtZSk7XG5cbiAgICBjb25zdCBoYW1hY2hpUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhhbWFjaGlQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgaGFtYWNoaVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS1wcmljZScpO1xuICAgIGhhbWFjaGlQcmljZS50ZXh0Q29udGVudCA9ICcyMydcbiAgICBoYW1hY2hpVGl0bGUuYXBwZW5kQ2hpbGQoaGFtYWNoaVByaWNlKTtcblxuICAgIGNvbnN0IGhhbWFjaGlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhhbWFjaGlJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBoYW1hY2hpSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hhbWFjaGktaW5mbycpO1xuICAgIGhhbWFjaGlJbmZvLnRleHRDb250ZW50ID0gJ0hvdCBvaWwsIGZyZXNoIGdpbmdlciwgZ2FybGljLCBjaGl2ZSwgcG9uenUsIGFsZXBwbyBwZXBwZXInXG4gICAgaGFtYWNoaS5hcHBlbmRDaGlsZChoYW1hY2hpSW5mbyk7XG5cbiAgICBjb25zdCBjcnVkbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNydWRvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZChjcnVkbyk7XG5cbiAgICBjb25zdCBjcnVkb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3J1ZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIGNydWRvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby10aXRsZScpO1xuICAgIGNydWRvLmFwcGVuZENoaWxkKGNydWRvVGl0bGUpO1xuXG4gICAgY29uc3QgY3J1ZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjcnVkb05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBjcnVkb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby1uYW1lJyk7XG4gICAgY3J1ZG9OYW1lLnRleHRDb250ZW50ID0gJ0tJTkcgU0FMTU9OIENSVURPKidcbiAgICBjcnVkb1RpdGxlLmFwcGVuZENoaWxkKGNydWRvTmFtZSk7XG5cbiAgICBjb25zdCBjcnVkb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjcnVkb1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBjcnVkb1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3J1ZG8tcHJpY2UnKTtcbiAgICBjcnVkb1ByaWNlLnRleHRDb250ZW50ID0gJzIzJ1xuICAgIGNydWRvVGl0bGUuYXBwZW5kQ2hpbGQoY3J1ZG9QcmljZSk7XG5cbiAgICBjb25zdCBjcnVkb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY3J1ZG9JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBjcnVkb0luZm8uc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby1pbmZvJyk7XG4gICAgY3J1ZG9JbmZvLnRleHRDb250ZW50ID0gJ1doaXRlIHRydWZmbGUgcG9uenUsIGNoZXJyeSB0b21hdG8sIHNlYSBzYWx0J1xuICAgIGNydWRvLmFwcGVuZENoaWxkKGNydWRvSW5mbyk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJwYWNjaW8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGNhcnBhY2Npbyk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcnBhY2Npb1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgY2FycGFjY2lvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJwYWNjaW8tdGl0bGUnKTtcbiAgICBjYXJwYWNjaW8uYXBwZW5kQ2hpbGQoY2FycGFjY2lvVGl0bGUpO1xuXG4gICAgY29uc3QgY2FycGFjY2lvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2FycGFjY2lvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGNhcnBhY2Npb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJwYWNjaW8tbmFtZScpO1xuICAgIGNhcnBhY2Npb05hbWUudGV4dENvbnRlbnQgPSAnT0NUT1BVUyBDQVJQQUNDSU8nXG4gICAgY2FycGFjY2lvVGl0bGUuYXBwZW5kQ2hpbGQoY2FycGFjY2lvTmFtZSk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW9QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2FycGFjY2lvUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGNhcnBhY2Npb1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FycGFjY2lvLXByaWNlJyk7XG4gICAgY2FycGFjY2lvUHJpY2UudGV4dENvbnRlbnQgPSAnMjInXG4gICAgY2FycGFjY2lvVGl0bGUuYXBwZW5kQ2hpbGQoY2FycGFjY2lvUHJpY2UpO1xuXG4gICAgY29uc3QgY2FycGFjY2lvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYXJwYWNjaW9JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBjYXJwYWNjaW9JbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FycGFjY2lvLWluZm8nKTtcbiAgICBjYXJwYWNjaW9JbmZvLnRleHRDb250ZW50ID0gJ0xlbW9uIHZpbmFpZ3JldHRlLCBjcmlzcHkgY2FwZXJzLCB0b21hdG8sIGZyZXNoIGhlcmJzJ1xuICAgIGNhcnBhY2Npby5hcHBlbmRDaGlsZChjYXJwYWNjaW9JbmZvKTtcblxuICAgIGNvbnN0IHp1a2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB6dWtlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZCh6dWtlKTtcblxuICAgIGNvbnN0IHp1a2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHp1a2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHp1a2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3p1a2UtdGl0bGUnKTtcbiAgICB6dWtlLmFwcGVuZENoaWxkKHp1a2VUaXRsZSk7XG5cbiAgICBjb25zdCB6dWtlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgenVrZU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICB6dWtlTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3p1a2UtbmFtZScpO1xuICAgIHp1a2VOYW1lLnRleHRDb250ZW50ID0gJ1RVTkEgWlVLRSonXG4gICAgenVrZVRpdGxlLmFwcGVuZENoaWxkKHp1a2VOYW1lKTtcblxuICAgIGNvbnN0IHp1a2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgenVrZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICB6dWtlUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICd6dWtlLXByaWNlJyk7XG4gICAgenVrZVByaWNlLnRleHRDb250ZW50ID0gJzI0J1xuICAgIHp1a2VUaXRsZS5hcHBlbmRDaGlsZCh6dWtlUHJpY2UpO1xuXG4gICAgY29uc3QgenVrZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgenVrZUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIHp1a2VJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnenVrZS1pbmZvJyk7XG4gICAgenVrZUluZm8udGV4dENvbnRlbnQgPSAnU295IG1hcmluYXRlZCBiaWdleWUgdHVuYSwgc2VzYW1lIG9uaW9uIHBvbnp1LCBmcmllZCBnYXJsaWMsIGNoaXZlJ1xuICAgIHp1a2UuYXBwZW5kQ2hpbGQoenVrZUluZm8pO1xuXG4gICAgY29uc3Qga2FucGFjaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrYW5wYWNoaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQoa2FucGFjaGkpO1xuXG4gICAgY29uc3Qga2FucGFjaGlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGthbnBhY2hpVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBrYW5wYWNoaVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAna2FucGFjaGktdGl0bGUnKTtcbiAgICBrYW5wYWNoaS5hcHBlbmRDaGlsZChrYW5wYWNoaVRpdGxlKTtcblxuICAgIGNvbnN0IGthbnBhY2hpTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAga2FucGFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAga2FucGFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAna2FucGFjaGktbmFtZScpO1xuICAgIGthbnBhY2hpTmFtZS50ZXh0Q29udGVudCA9ICdLQU5QQUNISSBBR1VBQ0hJTEUqJ1xuICAgIGthbnBhY2hpVGl0bGUuYXBwZW5kQ2hpbGQoa2FucGFjaGlOYW1lKTtcblxuICAgIGNvbnN0IGthbnBhY2hpUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGthbnBhY2hpUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGthbnBhY2hpUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdrYW5wYWNoaS1wcmljZScpO1xuICAgIGthbnBhY2hpUHJpY2UudGV4dENvbnRlbnQgPSAnMjMnXG4gICAga2FucGFjaGlUaXRsZS5hcHBlbmRDaGlsZChrYW5wYWNoaVByaWNlKTtcblxuICAgIGNvbnN0IGthbnBhY2hpSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBrYW5wYWNoaUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGthbnBhY2hpSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2thbnBhY2hpLWluZm8nKTtcbiAgICBrYW5wYWNoaUluZm8udGV4dENvbnRlbnQgPSAnQ3VjdW1iZXItY2lsYW50cm8gYWd1YWNoaWxlLCBwb21lZ3JhbmF0ZSwgc2VycmFubywgY2hhcnJlZCBvcmFuZ2UsIG9saXZlIG9pbCwgc2VhIHNhbHQnXG4gICAga2FucGFjaGkuYXBwZW5kQ2hpbGQoa2FucGFjaGlJbmZvKTtcblxuICAgIGNvbnN0IGFsYmFjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWxiYWNvcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGFsYmFjb3JlKTtcblxuICAgIGNvbnN0IGFsYmFjb3JlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbGJhY29yZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgYWxiYWNvcmVUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsYmFjb3JlLXRpdGxlJyk7XG4gICAgYWxiYWNvcmUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVUaXRsZSk7XG5cbiAgICBjb25zdCBhbGJhY29yZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFsYmFjb3JlTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGFsYmFjb3JlTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsYmFjb3JlLW5hbWUnKTtcbiAgICBhbGJhY29yZU5hbWUudGV4dENvbnRlbnQgPSAnQUxCQUNPUkUgQ1JJU1BZIE9OSU9OKidcbiAgICBhbGJhY29yZVRpdGxlLmFwcGVuZENoaWxkKGFsYmFjb3JlTmFtZSk7XG5cbiAgICBjb25zdCBhbGJhY29yZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBhbGJhY29yZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBhbGJhY29yZVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxiYWNvcmUtcHJpY2UnKTtcbiAgICBhbGJhY29yZVByaWNlLnRleHRDb250ZW50ID0gJzIyJ1xuICAgIGFsYmFjb3JlVGl0bGUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVQcmljZSk7XG5cbiAgICBjb25zdCBhbGJhY29yZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWxiYWNvcmVJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBhbGJhY29yZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdhbGJhY29yZS1pbmZvJyk7XG4gICAgYWxiYWNvcmVJbmZvLnRleHRDb250ZW50ID0gJ1NlYXJlZCBhbGJhY29yZSwgZ2FybGljIGFpb2xpLCB5dXp1IHBvbnp1LCBjcmlzcHkgb25pb24sIGNoZXJ2aWwnXG4gICAgYWxiYWNvcmUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVJbmZvKTtcblxuICAgIGNvbnN0IHNoaXNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpc28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKHNoaXNvKTtcblxuICAgIGNvbnN0IHNoaXNvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlzb1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgc2hpc29UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXNvLXRpdGxlJyk7XG4gICAgc2hpc28uYXBwZW5kQ2hpbGQoc2hpc29UaXRsZSk7XG5cbiAgICBjb25zdCBzaGlzb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNoaXNvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIHNoaXNvTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXNvLW5hbWUnKTtcbiAgICBzaGlzb05hbWUudGV4dENvbnRlbnQgPSAnU0hJU08gUExVTSBTSElST01JKidcbiAgICBzaGlzb1RpdGxlLmFwcGVuZENoaWxkKHNoaXNvTmFtZSk7XG5cbiAgICBjb25zdCBzaGlzb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzaGlzb1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBzaGlzb1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpc28tcHJpY2UnKTtcbiAgICBzaGlzb1ByaWNlLnRleHRDb250ZW50ID0gJzIyJ1xuICAgIHNoaXNvVGl0bGUuYXBwZW5kQ2hpbGQoc2hpc29QcmljZSk7XG5cbiAgICBjb25zdCBzaGlzb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2hpc29JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBzaGlzb0luZm8uc2V0QXR0cmlidXRlKCdpZCcsICdzaGlzby1pbmZvJyk7XG4gICAgc2hpc29JbmZvLnRleHRDb250ZW50ID0gJ1doaXRlZmlzaCwgeXV6dSBwb256dSwgb2xpdmUgb2lsLCB1bWVib3NoaSwgc2hpc28nXG4gICAgc2hpc28uYXBwZW5kQ2hpbGQoc2hpc29JbmZvKTtcblxuICAgIGNvbnN0IHRhdGFraSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhdGFraS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQodGF0YWtpKTtcblxuICAgIGNvbnN0IHRhdGFraVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGF0YWtpVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICB0YXRha2lUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhdGFraS10aXRsZScpO1xuICAgIHRhdGFraS5hcHBlbmRDaGlsZCh0YXRha2lUaXRsZSk7XG5cbiAgICBjb25zdCB0YXRha2lOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0YXRha2lOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgdGF0YWtpTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhdGFraS1uYW1lJyk7XG4gICAgdGF0YWtpTmFtZS50ZXh0Q29udGVudCA9ICdUVU5BIFRBVEFLSSonXG4gICAgdGF0YWtpVGl0bGUuYXBwZW5kQ2hpbGQodGF0YWtpTmFtZSk7XG5cbiAgICBjb25zdCB0YXRha2lQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGF0YWtpUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIHRhdGFraVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGF0YWtpLXByaWNlJyk7XG4gICAgdGF0YWtpUHJpY2UudGV4dENvbnRlbnQgPSAnMjQnXG4gICAgdGF0YWtpVGl0bGUuYXBwZW5kQ2hpbGQodGF0YWtpUHJpY2UpO1xuXG4gICAgY29uc3QgdGF0YWtpSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXRha2lJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICB0YXRha2lJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAndGF0YWtpLWluZm8nKTtcbiAgICB0YXRha2lJbmZvLnRleHRDb250ZW50ID0gJ1Nlc2FtZSBjcnVzdGVkIGJpZ2V5ZSB0dW5hLCBhcHBsZSBtdXN0YXJkIGRyZXNzaW5nLCBncmVlbiBvbmlvbidcbiAgICB0YXRha2kuYXBwZW5kQ2hpbGQodGF0YWtpSW5mbyk7XG5cbiAgICBjb25zdCB0aXJhZGl0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpcmFkaXRvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZCh0aXJhZGl0byk7XG5cbiAgICBjb25zdCB0aXJhZGl0b1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlyYWRpdG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHRpcmFkaXRvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXJhZGl0by10aXRsZScpO1xuICAgIHRpcmFkaXRvLmFwcGVuZENoaWxkKHRpcmFkaXRvVGl0bGUpO1xuXG4gICAgY29uc3QgdGlyYWRpdG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXJhZGl0b05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICB0aXJhZGl0b05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXJhZGl0by1uYW1lJyk7XG4gICAgdGlyYWRpdG9OYW1lLnRleHRDb250ZW50ID0gJ1dISVRFRklTSCBUSVJBRElUTyonXG4gICAgdGlyYWRpdG9UaXRsZS5hcHBlbmRDaGlsZCh0aXJhZGl0b05hbWUpO1xuXG4gICAgY29uc3QgdGlyYWRpdG9QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGlyYWRpdG9QcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgdGlyYWRpdG9QcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpcmFkaXRvLXByaWNlJyk7XG4gICAgdGlyYWRpdG9QcmljZS50ZXh0Q29udGVudCA9ICcyMidcbiAgICB0aXJhZGl0b1RpdGxlLmFwcGVuZENoaWxkKHRpcmFkaXRvUHJpY2UpO1xuXG4gICAgY29uc3QgdGlyYWRpdG9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpcmFkaXRvSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgdGlyYWRpdG9JbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAndGlyYWRpdG8taW5mbycpO1xuICAgIHRpcmFkaXRvSW5mby50ZXh0Q29udGVudCA9ICdBamkgYW1hcmlsbG8gY2hpbGkgdGlnZXJzIG1pbGssIG1hbmdvLCBnb2NodWdhcnUgb2lsLCBiYXNpbCwgc2VhIHNhbHQnXG4gICAgdGlyYWRpdG8uYXBwZW5kQ2hpbGQodGlyYWRpdG9JbmZvKTtcblxuICAgIGNvbnN0IG1haXRha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWl0YWtlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgcGxhdGVzLmFwcGVuZENoaWxkKG1haXRha2UpO1xuXG4gICAgY29uc3QgbWFpdGFrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpdGFrZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbWFpdGFrZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS10aXRsZScpO1xuICAgIG1haXRha2UuYXBwZW5kQ2hpbGQobWFpdGFrZVRpdGxlKTtcblxuICAgIGNvbnN0IG1haXRha2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtYWl0YWtlTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIG1haXRha2VOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS1uYW1lJyk7XG4gICAgbWFpdGFrZU5hbWUudGV4dENvbnRlbnQgPSAnUk9BU1RFRCBNQUlUQUtFJ1xuICAgIG1haXRha2VUaXRsZS5hcHBlbmRDaGlsZChtYWl0YWtlTmFtZSk7XG5cbiAgICBjb25zdCBtYWl0YWtlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1haXRha2VQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgbWFpdGFrZVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS1wcmljZScpO1xuICAgIG1haXRha2VQcmljZS50ZXh0Q29udGVudCA9ICcxNCdcbiAgICBtYWl0YWtlVGl0bGUuYXBwZW5kQ2hpbGQobWFpdGFrZVByaWNlKTtcblxuICAgIGNvbnN0IG1haXRha2VJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1haXRha2VJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBtYWl0YWtlSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haXRha2UtaW5mbycpO1xuICAgIG1haXRha2VJbmZvLnRleHRDb250ZW50ID0gJ1dob2xlIHJvYXN0ZWQgbWFpdGFrZSBtdXNocm9vbSwgd2FrYW1lIGJ1dHRlciwgY2hpdmUsIGxlbW9uJ1xuICAgIG1haXRha2UuYXBwZW5kQ2hpbGQobWFpdGFrZUluZm8pO1xuXG4gICAgY29uc3Qgb2N0b3B1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9jdG9wdXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBwbGF0ZXMuYXBwZW5kQ2hpbGQob2N0b3B1cyk7XG5cbiAgICBjb25zdCBvY3RvcHVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvY3RvcHVzVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBvY3RvcHVzVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLXRpdGxlJyk7XG4gICAgb2N0b3B1cy5hcHBlbmRDaGlsZChvY3RvcHVzVGl0bGUpO1xuXG4gICAgY29uc3Qgb2N0b3B1c05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9jdG9wdXNOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgb2N0b3B1c05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLW5hbWUnKTtcbiAgICBvY3RvcHVzTmFtZS50ZXh0Q29udGVudCA9ICdHUklMTEVEIE9DVE9QVVMnXG4gICAgb2N0b3B1c1RpdGxlLmFwcGVuZENoaWxkKG9jdG9wdXNOYW1lKTtcblxuICAgIGNvbnN0IG9jdG9wdXNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgb2N0b3B1c1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBvY3RvcHVzUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLXByaWNlJyk7XG4gICAgb2N0b3B1c1ByaWNlLnRleHRDb250ZW50ID0gJzI0J1xuICAgIG9jdG9wdXNUaXRsZS5hcHBlbmRDaGlsZChvY3RvcHVzUHJpY2UpO1xuXG4gICAgY29uc3Qgb2N0b3B1c0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgb2N0b3B1c0luZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIG9jdG9wdXNJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnb2N0b3B1cy1pbmZvJyk7XG4gICAgb2N0b3B1c0luZm8udGV4dENvbnRlbnQgPSAnUm9hc3RlZCBjYXVsaWZsb3dlciBzdGVhaywgYmxpc3RlcmVkIGNoZXJyeSB0b21hdG9lcywgYWppIHZlcmRlLCBjaGVydmlsJ1xuICAgIG9jdG9wdXMuYXBwZW5kQ2hpbGQob2N0b3B1c0luZm8pO1xuXG4gICAgY29uc3QgY29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgcGxhdGVzLmFwcGVuZENoaWxkKGNvZCk7XG5cbiAgICBjb25zdCBjb2RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgY29kVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjb2QtdGl0bGUnKTtcbiAgICBjb2QuYXBwZW5kQ2hpbGQoY29kVGl0bGUpO1xuXG4gICAgY29uc3QgY29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29kTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGNvZE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjb2QtbmFtZScpO1xuICAgIGNvZE5hbWUudGV4dENvbnRlbnQgPSAnTUlTTyBHTEFaRUQgQkxBQ0sgQ09EJ1xuICAgIGNvZFRpdGxlLmFwcGVuZENoaWxkKGNvZE5hbWUpO1xuXG4gICAgY29uc3QgY29kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvZFByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBjb2RQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvZC1wcmljZScpO1xuICAgIGNvZFByaWNlLnRleHRDb250ZW50ID0gJzE4J1xuICAgIGNvZFRpdGxlLmFwcGVuZENoaWxkKGNvZFByaWNlKTtcblxuICAgIGNvbnN0IGNvZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29kSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgY29kSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvZC1pbmZvJyk7XG4gICAgY29kSW5mby50ZXh0Q29udGVudCA9ICdCcm9pbGVkIGJsYWNrIGNvZCwgb3JhbmdlLCBnaW5nZXIsIGdyZWVuIG9uaW9uLCB5dXp1IG1pc28sIGdvY2h1Z2FydSBvaWwnXG4gICAgY29kLmFwcGVuZENoaWxkKGNvZEluZm8pO1xuXG4gICAgY29uc3QgY2hpY2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoaWNrZW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBwbGF0ZXMuYXBwZW5kQ2hpbGQoY2hpY2tlbik7XG5cbiAgICBjb25zdCBjaGlja2VuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGlja2VuVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBjaGlja2VuVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLXRpdGxlJyk7XG4gICAgY2hpY2tlbi5hcHBlbmRDaGlsZChjaGlja2VuVGl0bGUpO1xuXG4gICAgY29uc3QgY2hpY2tlbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNoaWNrZW5OYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgY2hpY2tlbk5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLW5hbWUnKTtcbiAgICBjaGlja2VuTmFtZS50ZXh0Q29udGVudCA9ICdDSElDS0VOIEtBUkFBR0UnXG4gICAgY2hpY2tlblRpdGxlLmFwcGVuZENoaWxkKGNoaWNrZW5OYW1lKTtcblxuICAgIGNvbnN0IGNoaWNrZW5QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2hpY2tlblByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBjaGlja2VuUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLXByaWNlJyk7XG4gICAgY2hpY2tlblByaWNlLnRleHRDb250ZW50ID0gJzEyJ1xuICAgIGNoaWNrZW5UaXRsZS5hcHBlbmRDaGlsZChjaGlja2VuUHJpY2UpO1xuXG4gICAgY29uc3QgY2hpY2tlbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2hpY2tlbkluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGNoaWNrZW5JbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hpY2tlbi1pbmZvJyk7XG4gICAgY2hpY2tlbkluZm8udGV4dENvbnRlbnQgPSAnQ3Jpc3B5IGZyaWVkIG1hcmluYXRlZCBjaGlja2VuLCBkaWxsIGtld3BpZSBhaW9saSwgbGVtb24nXG4gICAgY2hpY2tlbi5hcHBlbmRDaGlsZChjaGlja2VuSW5mbyk7XG5cbiAgICBjb25zdCBzYWJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2FiYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHBsYXRlcy5hcHBlbmRDaGlsZChzYWJhKTtcblxuICAgIGNvbnN0IHNhYmFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhYmFUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHNhYmFUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtdGl0bGUnKTtcbiAgICBzYWJhLmFwcGVuZENoaWxkKHNhYmFUaXRsZSk7XG5cbiAgICBjb25zdCBzYWJhTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2FiYU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBzYWJhTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtbmFtZScpO1xuICAgIHNhYmFOYW1lLnRleHRDb250ZW50ID0gJ0dSSUxMRUQgU0FCQSdcbiAgICBzYWJhVGl0bGUuYXBwZW5kQ2hpbGQoc2FiYU5hbWUpO1xuXG4gICAgY29uc3Qgc2FiYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzYWJhUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIHNhYmFQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtcHJpY2UnKTtcbiAgICBzYWJhUHJpY2UudGV4dENvbnRlbnQgPSAnMTYnXG4gICAgc2FiYVRpdGxlLmFwcGVuZENoaWxkKHNhYmFQcmljZSk7XG5cbiAgICBjb25zdCBzYWJhSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzYWJhSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgc2FiYUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdzYWJhLWluZm8nKTtcbiAgICBzYWJhSW5mby50ZXh0Q29udGVudCA9ICdCbGlzdGVyZWQgZmlsZXQgb2YgbWFja2VyZWwsIG1vbWlqaSBvcm9zaGksIHBpY2tsZWQgbXVzdGFyZCBzZWVkLCBsZW1vbiBhc2gsIGdyZWVuIG9uaW9uJ1xuICAgIHNhYmEuYXBwZW5kQ2hpbGQoc2FiYUluZm8pO1xuXG4gICAgY29uc3QgbWF0Y2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF0Y2hhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgZGVzc2VydC5hcHBlbmRDaGlsZChtYXRjaGEpO1xuXG4gICAgY29uc3QgbWF0Y2hhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXRjaGFUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIG1hdGNoYVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWF0Y2hhLXRpdGxlJyk7XG4gICAgbWF0Y2hhLmFwcGVuZENoaWxkKG1hdGNoYVRpdGxlKTtcblxuICAgIGNvbnN0IG1hdGNoYU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1hdGNoYU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBtYXRjaGFOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWF0Y2hhLW5hbWUnKTtcbiAgICBtYXRjaGFOYW1lLnRleHRDb250ZW50ID0gJ01BVENIQSBQQU5OQSBDT1RUQSdcbiAgICBtYXRjaGFUaXRsZS5hcHBlbmRDaGlsZChtYXRjaGFOYW1lKTtcblxuICAgIGNvbnN0IG1hdGNoYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtYXRjaGFQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgbWF0Y2hhUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtYXRjaGEtcHJpY2UnKTtcbiAgICBtYXRjaGFQcmljZS50ZXh0Q29udGVudCA9ICc5J1xuICAgIG1hdGNoYVRpdGxlLmFwcGVuZENoaWxkKG1hdGNoYVByaWNlKTtcblxuICAgIGNvbnN0IG1hdGNoYUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWF0Y2hhSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgbWF0Y2hhSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21hdGNoYS1pbmZvJyk7XG4gICAgbWF0Y2hhSW5mby50ZXh0Q29udGVudCA9ICdXaGl0ZSBjaG9jb2xhdGUgY3J1bWIsIGZyZXNoIGJlcnJpZXMnXG4gICAgbWF0Y2hhLmFwcGVuZENoaWxkKG1hdGNoYUluZm8pO1xuXG4gICAgY29uc3Qgc2VzYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VzYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgZGVzc2VydC5hcHBlbmRDaGlsZChzZXNhbWUpO1xuXG4gICAgY29uc3Qgc2VzYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXNhbWVUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHNlc2FtZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VzYW1lLXRpdGxlJyk7XG4gICAgc2VzYW1lLmFwcGVuZENoaWxkKHNlc2FtZVRpdGxlKTtcblxuICAgIGNvbnN0IHNlc2FtZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNlc2FtZU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBzZXNhbWVOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VzYW1lLW5hbWUnKTtcbiAgICBzZXNhbWVOYW1lLnRleHRDb250ZW50ID0gJ0JMQUNLIFNFU0FNRSBCUk9XTklFJ1xuICAgIHNlc2FtZVRpdGxlLmFwcGVuZENoaWxkKHNlc2FtZU5hbWUpO1xuXG4gICAgY29uc3Qgc2VzYW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNlc2FtZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBzZXNhbWVQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nlc2FtZS1wcmljZScpO1xuICAgIHNlc2FtZVByaWNlLnRleHRDb250ZW50ID0gJzEwJ1xuICAgIHNlc2FtZVRpdGxlLmFwcGVuZENoaWxkKHNlc2FtZVByaWNlKTtcblxuICAgIGNvbnN0IHNlc2FtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2VzYW1lSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgc2VzYW1lSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nlc2FtZS1pbmZvJyk7XG4gICAgc2VzYW1lSW5mby50ZXh0Q29udGVudCA9ICdWYW5pbGxhIGljZSBjcmVhbSwgZnJlc2ggYmVycmllcywgYmxhY2sgc2VzYW1lJ1xuICAgIHNlc2FtZS5hcHBlbmRDaGlsZChzZXNhbWVJbmZvKTtcblxuICAgIGNvbnN0IG1vY2hpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9jaGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKG1vY2hpKTtcblxuICAgIGNvbnN0IG1vY2hpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2NoaVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbW9jaGlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vY2hpLXRpdGxlJyk7XG4gICAgbW9jaGkuYXBwZW5kQ2hpbGQobW9jaGlUaXRsZSk7XG5cbiAgICBjb25zdCBtb2NoaU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1vY2hpTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIG1vY2hpTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vY2hpLW5hbWUnKTtcbiAgICBtb2NoaU5hbWUudGV4dENvbnRlbnQgPSAnU0FTQSBNT0NISSdcbiAgICBtb2NoaVRpdGxlLmFwcGVuZENoaWxkKG1vY2hpTmFtZSk7XG5cbiAgICBjb25zdCBtb2NoaVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtb2NoaVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBtb2NoaVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9jaGktcHJpY2UnKTtcbiAgICBtb2NoaVByaWNlLnRleHRDb250ZW50ID0gJzEyJ1xuICAgIG1vY2hpVGl0bGUuYXBwZW5kQ2hpbGQobW9jaGlQcmljZSk7XG5cbiAgICBjb25zdCBtb2NoaUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbW9jaGlJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBtb2NoaUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdtb2NoaS1pbmZvJyk7XG4gICAgbW9jaGlJbmZvLnRleHRDb250ZW50ID0gJ1Nhc2EgYmFtYm9vIGxlYWYsIHlvbW9naSwga2luYWtvIGZsb3VyICdcbiAgICBtb2NoaS5hcHBlbmRDaGlsZChtb2NoaUluZm8pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==