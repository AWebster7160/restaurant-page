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
    overflow-y: hidden;
    overflow-x: hidden;
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
    transition: background-color .3s ease-in-out forwards, color .3s ease-in-out;
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
    height: 100%;
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
    font-size: 18px;
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
    font-size: 16px;
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
    transition: background-color .3s ease-in-out, color .3s ease-in-out forwards;
    background-color: #FFC117;
    color: black;
}

#first-name, #last-name, label, #phone {
    width: 240px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --main-bg-color: #333533;\n    --secondary-bg-color: #242423\n}\n\n@font-face {\n    font-family: 'Walsheim-Light-Oblique';\n    src: url(./assets/GT-Walsheim-Light-Oblique.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Light';\n    src: url(./assets/GT-Walsheim-Light.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Medium-Oblique';\n    src: url(./assets/GT-Walsheim-Medium-Oblique.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Medium';\n    src: url(./assets/GT-Walsheim-Medium.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Regular-Oblique';\n    src: url(./assets/GT-Walsheim-Regular-Oblique.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Regular';\n    src: url(./assets/GT-Walsheim-Regular.otf);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-rows: minmax(120px, 10vh) 90vh;\n    grid-template-columns: 100%;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    justify-content: start;\n    align-items: center;\n    background-color: var(--main-bg-color);\n}\n\nheader {\n    grid-area: 1/1/2/2;\n    height: 120px;\n    width: 100%;\n    align-content: center;\n    justify-content: center;\n    background-color: var(--secondary-bg-color);\n    display: grid;\n    grid-template-rows: 100%;\n    grid-template-columns: minmax(304px, 50vw) minmax(400px, 50vw);\n    box-shadow: 0px 10px 16px 16px var(--secondary-bg-color);\n}\n\nheader img {\n    grid-area: 1/1/2/2;\n    align-self: center;\n    margin-left: 10px;\n}\n\nnav {\n    max-width: 718px;\n    grid-area: 1/2/2/3;\n    display: grid;\n    min-width: 400px;\n    grid-template-rows: auto;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    justify-items: end;\n    margin-right: 50px;\n}\n\nnav button {\n    height: 60px;\n    min-width: 160px;\n    max-width: 160px;\n    background-color: transparent;\n    color: white;\n    outline: 1px solid transparent;\n    box-shadow: 0 0 1px rgba(255,255,255,0);\n    font-family: 'GT-Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;\n    font-size: 28px;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid white;\n    transform: skewX(-8deg);\n}\n\nnav button:hover {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid #FFC117;\n    color: #FFC117;\n    font-size: 30px;\n}\n\nnav button:not(:hover) {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid white;\n    color: white;\n    font-size: 28px;\n}\n\nnav button:active {\n    transition: background-color .3s ease-in-out forwards, color .3s ease-in-out;\n    background-color: #FFC117;\n    color: black;\n}\n\n#container.home {\n    grid-area: 2/1/3/2;\n    height: 100%;\n    display: grid;\n    grid-template-columns: minmax(304px, 20vw) minmax(980px, 80vw);\n    grid-template-rows: auto;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    mask-image: linear-gradient(to bottom left, rgba(0, 0, 0, 1), rgba(0, 0, 0, .5) ); \n}\n\n#about-section {\n    grid-area: 1/1/2/2;\n    height: 100%;\n    width: 100%;\n    align-content: center;\n    justify-content: center;\n    width: auto;\n    display: flex;\n    flex-direction: column;\n}\n\n#about-wrapper {\n    align-self: center;\n    justify-self: center;\n    width: 70%;\n    color: white;\n}\n\n#about-wrapper h2 {\n    font-family: 'Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;\n    font-weight: lighter;\n    margin-top: -30%;\n    max-width: 230px;\n    letter-spacing: 2px;\n    font-size: 40px;\n}\n\nh2 span {\n    font-size: 32px;\n}\n\n.gold {\n    color: #FFC117;\n    font-weight: bold;\n    font-family: 'Walsheim-Regular-Oblique', Arial, Helvetica, sans-serif, monospace;\n    font-size: 40px;\n}\n\n#sushi-holder {\n    grid-area: 1/2/2/3;\n    min-height: 100%;\n    min-width: 100%;\n    \n}\n\n#container.menu {\n    height: 90vh;\n    width: 100vw;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    overflow: scroll;\n    overflow-x: scroll;\n    white-space: nowrap;\n    background-color: #333533;\n}\n\n#menu {\n    flex: 0 0 auto;\n    margin-top: 40px;\n    margin-bottom: 60px;\n    width: 1000px;\n    min-height: 1500px;\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: 100%;\n    justify-content: center;\n    font-family: 'Walsheim-Medium', Arial, Helvetica, sans-serif, monospace;\n}\n\n#menu-left {\n    height: 100%;\n    width: 100%;\n    grid-area: 1/1/2/2;\n}\n\n\n\n#specials {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n    align-content: stretch;\n    grid-template-rows: 2% 90%;\n    grid-template-columns: 90%;\n    background-color: #CFDBD5;\n}\n\n#sashimi {\n    grid-area: 2/1/3/3;\n    display: grid;\n    grid-template-columns: 90%;\n    justify-content: center;\n    grid-template-rows: repeat(9, 140px);\n    height: 100%;\n    width: 470px;\n    margin-top: 10px;\n}\n\n#sashimi-head {\n    grid-area: 1/1/2/2;\n    font-size: 38px;\n    color: #242423;\n    align-self: flex-start;\n    margin-top: 30px;\n    margin-left: 20px\n}\n\n.menu-item {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: 100%;\n}\n\n.menu-item-title {\n    width: 100%;\n    display: flex;\n    align-items: flex-end;\n    flex-direction: row;\n    justify-content: space-between;\n    color: #393b3a;\n}\n\n.menu-item-title h3 {\n    margin: 0;\n}\n\n.menu-info-dark {\n    color: #292929;\n    font-size: 16px;\n    text-wrap: wrap;\n}\n\n#hamachi {\n    grid-area: 1/1/2/2;\n}\n\n#crudo {\n    grid-area: 2/1/3/2;\n}\n\n#carpaccio {\n    grid-area: 3/1/4/2;\n}\n\n#zuke {\n    grid-area: 4/1/5/2;\n}\n\n#kanpachi {\n    grid-area: 5/1/6/2;\n}\n\n#albacore {\n    grid-area: 6/1/7/2;\n}\n\n#shiso {\n    grid-area: 7/1/8/2;\n}\n\n#tataki {\n    grid-area: 8/1/9/2;\n}\n\n#tiradito {\n    grid-area: 9/1/10/2;\n}\n\n#menu-right {\n    height: 100%;\n    width: 100%;\n    grid-area: 1/2/2/3;\n    background-color: #E8EDDF;\n}\n\n#right-wrapper {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n    align-content: stretch;\n    grid-template-rows: 2% 56% 2% 36%;\n    grid-template-columns: 90%;\n}\n\n#plates-head {\n    grid-area: 1/1/2/2;\n    font-size: 38px;\n    align-self: flex-start;\n    margin-top: 30px;\n}\n\n#plates {\n    grid-area: 2/1/3/2;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(5, 140px);\n    grid-template-columns: 100%;\n    margin-top: 10px;\n}\n\n#maitake {\n    grid-area: 1/1/2/2;\n}\n#octopus {\n    grid-area: 2/1/3/2;\n}\n#cod {\n    grid-area: 3/1/4/2;\n}\n#chicken {\n    grid-area: 4/1/5/2;\n}\n#saba {\n    grid-area: 5/1/6/2;\n}\n\n#dessert-head {\n    grid-area: 3/1/4/2;\n    font-size: 38px;\n    color: #242423;\n    margin-top: -10px;\n}\n\n#dessert{\n    grid-area: 4/1/5/2;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(3, 140px);\n    grid-template-columns: 100%;\n    margin-top: -20px;\n}\n\n#matcha {\n    grid-area: 1/1/2/2;\n}\n\n#sesame {\n    grid-area: 2/1/3/2;\n}\n\n#mochi {\n    grid-area: 3/1/4/2;\n}\n\n#container.contact {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    height: 100%;\n    width: 100vw;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    mask-image: linear-gradient(to bottom left, rgb(0, 0, 0), rgba(0, 0, 0, .8) ); \n}\n\n#contact-main-wrapper {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-left: 80px;\n    gap: 40px;\n}\n#contact-message {\n    font-family: 'Walsheim-Medium', Arial, Helvetica, sans-serif, monospace;\n    color: whitesmoke;\n    font-size: 18px;\n}\n\n#contact-message h2 {\n    font-family: 'Walsheim-Regular-Oblique', Arial, Helvetica, sans-serif, monospace;\n    color: #D39E0D;\n    font-size: 58px;\n}\n\n#contact-message a {\n    font-family: 'Walsheim-Regular-Oblique', Arial, Helvetica, sans-serif, monospace;\n    color: #D39E0D;\n    margin-right: 110px;\n}\n\n#contact-message p {\n    margin-top: -10px;\n    margin-bottom: 10px;\n    font-size: 24px;\n}\n\n#form-wrapper {\n    background-color: rgba(0, 0, 0, .3);\n    border-radius: 8px;\n}\n\nform {\n    height: 458px;\n    width: 445px;\n    display: flex;\n    flex-flow: column;\n    font-family: 'Walsheim-Light', Arial, Helvetica, sans-serif, monospace;\n    color: whitesmoke;\n    font-weight: lighter;\n    padding: 20px;\n}\n\nform h3 {\n    margin-top: 0;\n    font-size: 22px;\n}\n\nform input {\n    border-radius: 18px;\n    height: 24px;\n    background-color: rgba(0, 0, 0, .6);\n    color: whitesmoke;\n    border: none;\n    padding: 8px;\n    font-size: 18px;\n}\n\nform input:focus {\n    outline: 1px solid #D39E0D;\n    \n}\n\nform textarea {\n    height: 80px;\n    -webkit-border-radius: 12px;\n    -moz-border-radius: 12px;\n    border-radius: 18px;\n    background-color: rgba(0, 0, 0, .6);\n    color: whitesmoke;\n    border: none;\n    padding: 8px;\n    font-family: 'Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;\n    font-size: 16px;\n}\n\nform textarea:focus {\n    outline: 1px solid #D39E0D;\n}\n\n#submit {\n    height: 50px;\n    min-width: 140px;\n    max-width: 140px;\n    background-color: transparent;\n    color: white;\n    outline: 1px solid transparent;\n    box-shadow: 0 0 1px rgba(255,255,255,0);\n    font-family: 'GT-Walsheim-Regular', Arial, Helvetica, sans-serif, monospace;\n    font-size: 28px;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid white;\n    transform: skewX(-8deg);\n    margin-top: 14px;\n}\n\n#submit:hover {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid #FFC117;\n    color: #FFC117;\n    font-size: 30px;\n}\n\n#submit:not(:hover) {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid white;\n    color: white;\n    font-size: 28px;\n}\n\n#submit:active {\n    transition: background-color .3s ease-in-out, color .3s ease-in-out forwards;\n    background-color: #FFC117;\n    color: black;\n}\n\n#first-name, #last-name, label, #phone {\n    width: 240px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_chopsticks_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/chopsticks.jpg */ "./src/assets/chopsticks.jpg");



function contactLoad() {
    const container = document.querySelector('#container');
    container.setAttribute('class', 'contact');
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    const chopsticks = new Image;
    chopsticks.src = _assets_chopsticks_jpg__WEBPACK_IMPORTED_MODULE_1__;

    container.style.backgroundImage = _assets_chopsticks_jpg__WEBPACK_IMPORTED_MODULE_1__;
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
    const thanks = document.createElement('h2');
    thanks.textContent = 'We\'ll get back to you as soon as we can!';
    email.pattern == /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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

window.onload = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

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

/***/ }),

/***/ "./src/assets/chopsticks.jpg":
/*!***********************************!*\
  !*** ./src/assets/chopsticks.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ce62b5dc3c4a4c629cb.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLDJKQUEwRDtBQUN0Ryw0Q0FBNEMsMklBQWtEO0FBQzlGLDRDQUE0Qyw2SkFBMkQ7QUFDdkcsNENBQTRDLDZJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksU0FBUyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEs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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvR1QtV2Fsc2hlaW0tTGlnaHQtT2JsaXF1ZS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9HVC1XYWxzaGVpbS1MaWdodC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9HVC1XYWxzaGVpbS1NZWRpdW0tT2JsaXF1ZS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9HVC1XYWxzaGVpbS1NZWRpdW0ub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvR1QtV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0dULVdhbHNoZWltLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLW1haW4tYmctY29sb3I6ICMzMzM1MzM7XG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMyNDI0MjNcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodC1PYmxpcXVlJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTGlnaHQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1NZWRpdW0tT2JsaXF1ZSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTIwcHgsIDEwdmgpIDkwdmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xufVxuXG5oZWFkZXIge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwNHB4LCA1MHZ3KSBtaW5tYXgoNDAwcHgsIDUwdncpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE2cHggMTZweCB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xufVxuXG5oZWFkZXIgaW1nIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5uYXYge1xuICAgIG1heC13aWR0aDogNzE4cHg7XG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbm5hdiBidXR0b24ge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIG1heC13aWR0aDogMTYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMCk7XG4gICAgZm9udC1mYW1pbHk6ICdHVC1XYWxzaGVpbS1SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC04ZGVnKTtcbn1cblxubmF2IGJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cyBlYXNlLWluLW91dCwgY29sb3IgLjVzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgLjVzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkMxMTc7XG4gICAgY29sb3I6ICNGRkMxMTc7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5uYXYgYnV0dG9uOm5vdCg6aG92ZXIpIHtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cblxubmF2IGJ1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0IGZvcndhcmRzLCBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzExNztcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNjb250YWluZXIuaG9tZSB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwNHB4LCAyMHZ3KSBtaW5tYXgoOTgwcHgsIDgwdncpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAuNSkgKTsgXG59XG5cbiNhYm91dC1zZWN0aW9uIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNhYm91dC13cmFwcGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNhYm91dC13cmFwcGVyIGgyIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luLXRvcDogLTMwJTtcbiAgICBtYXgtd2lkdGg6IDIzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG5oMiBzcGFuIHtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5nb2xkIHtcbiAgICBjb2xvcjogI0ZGQzExNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbiNzdXNoaS1ob2xkZXIge1xuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBcbn1cblxuI2NvbnRhaW5lci5tZW51IHtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM1MzM7XG59XG5cbiNtZW51IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxNTAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbn1cblxuI21lbnUtbGVmdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cblxuXG5cbiNzcGVjaWFscyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIlIDkwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEQkQ1O1xufVxuXG4jc2FzaGltaSB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSwgMTQwcHgpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNDcwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3Nhc2hpbWktaGVhZCB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzI0MjQyMztcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG59XG5cbi5tZW51LWl0ZW0tdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGNvbG9yOiAjMzkzYjNhO1xufVxuXG4ubWVudS1pdGVtLXRpdGxlIGgzIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tZW51LWluZm8tZGFyayB7XG4gICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtd3JhcDogd3JhcDtcbn1cblxuI2hhbWFjaGkge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cblxuI2NydWRvIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG59XG5cbiNjYXJwYWNjaW8ge1xuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcbn1cblxuI3p1a2Uge1xuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcbn1cblxuI2thbnBhY2hpIHtcbiAgICBncmlkLWFyZWE6IDUvMS82LzI7XG59XG5cbiNhbGJhY29yZSB7XG4gICAgZ3JpZC1hcmVhOiA2LzEvNy8yO1xufVxuXG4jc2hpc28ge1xuICAgIGdyaWQtYXJlYTogNy8xLzgvMjtcbn1cblxuI3RhdGFraSB7XG4gICAgZ3JpZC1hcmVhOiA4LzEvOS8yO1xufVxuXG4jdGlyYWRpdG8ge1xuICAgIGdyaWQtYXJlYTogOS8xLzEwLzI7XG59XG5cbiNtZW51LXJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEVEREY7XG59XG5cbiNyaWdodC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMiUgNTYlIDIlIDM2JTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcbn1cblxuI3BsYXRlcy1oZWFkIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI3BsYXRlcyB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDE0MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI21haXRha2Uge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cbiNvY3RvcHVzIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG59XG4jY29kIHtcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XG59XG4jY2hpY2tlbiB7XG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xufVxuI3NhYmEge1xuICAgIGdyaWQtYXJlYTogNS8xLzYvMjtcbn1cblxuI2Rlc3NlcnQtaGVhZCB7XG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzI0MjQyMztcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuI2Rlc3NlcnR7XG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDE0MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbiNtYXRjaGEge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cblxuI3Nlc2FtZSB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xufVxuXG4jbW9jaGkge1xuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcbn1cblxuI2NvbnRhaW5lci5jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiKDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIC44KSApOyBcbn1cblxuI2NvbnRhY3QtbWFpbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgZ2FwOiA0MHB4O1xufVxuI2NvbnRhY3QtbWVzc2FnZSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1NZWRpdW0nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jY29udGFjdC1tZXNzYWdlIGgyIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogI0QzOUUwRDtcbiAgICBmb250LXNpemU6IDU4cHg7XG59XG5cbiNjb250YWN0LW1lc3NhZ2UgYSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XG4gICAgY29sb3I6ICNEMzlFMEQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMTBweDtcbn1cblxuI2NvbnRhY3QtbWVzc2FnZSBwIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuI2Zvcm0td3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5mb3JtIHtcbiAgICBoZWlnaHQ6IDQ1OHB4O1xuICAgIHdpZHRoOiA0NDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTGlnaHQnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuZm9ybSBoMyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbmZvcm0gaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5mb3JtIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI0QzOUUwRDtcbiAgICBcbn1cblxuZm9ybSB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjRDM5RTBEO1xufVxuXG4jc3VibWl0IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDApO1xuICAgIGZvbnQtZmFtaWx5OiAnR1QtV2Fsc2hlaW0tUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtOGRlZyk7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuI3N1Ym1pdDpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cyBlYXNlLWluLW91dCwgY29sb3IgLjVzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgLjVzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkMxMTc7XG4gICAgY29sb3I6ICNGRkMxMTc7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jc3VibWl0Om5vdCg6aG92ZXIpIHtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuI3N1Ym1pdDphY3RpdmUge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzExNztcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNmaXJzdC1uYW1lLCAjbGFzdC1uYW1lLCBsYWJlbCwgI3Bob25lIHtcbiAgICB3aWR0aDogMjQwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDRDQUFnRDtBQUNwRDtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDRDQUF3QztBQUM1QztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLDRDQUFpRDtBQUNyRDtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLDRDQUF5QztBQUM3QztBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDRDQUFrRDtBQUN0RDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw4REFBOEQ7SUFDOUQsd0RBQXdEO0FBQzVEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFD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Rix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0RUFBNEU7SUFDNUUseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjMzMzNTMzO1xcbiAgICAtLXNlY29uZGFyeS1iZy1jb2xvcjogIzI0MjQyM1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodC1PYmxpcXVlJztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tTGlnaHQtT2JsaXF1ZS5vdGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodCc7XFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL0dULVdhbHNoZWltLUxpZ2h0Lm90Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bS1PYmxpcXVlJztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tTWVkaXVtLU9ibGlxdWUub3RmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTWVkaXVtJztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tTWVkaXVtLm90Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZSc7XFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL0dULVdhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZS5vdGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tUmVndWxhci5vdGYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTIwcHgsIDEwdmgpIDkwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwNHB4LCA1MHZ3KSBtaW5tYXgoNDAwcHgsIDUwdncpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNnB4IDE2cHggdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxubmF2IHtcXG4gICAgbWF4LXdpZHRoOiA3MThweDtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbn1cXG5cXG5uYXYgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHVC1XYWxzaGVpbS1SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLThkZWcpO1xcbn1cXG5cXG5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cyBlYXNlLWluLW91dCwgY29sb3IgLjVzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZDMTE3O1xcbiAgICBjb2xvcjogI0ZGQzExNztcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5uYXYgYnV0dG9uOm5vdCg6aG92ZXIpIHtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cyBlYXNlLWluLW91dCwgY29sb3IgLjVzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbm5hdiBidXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHMsIGNvbG9yIC4zcyBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzExNztcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jY29udGFpbmVyLmhvbWUge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA0cHgsIDIwdncpIG1pbm1heCg5ODBweCwgODB2dyk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgLjUpICk7IFxcbn1cXG5cXG4jYWJvdXQtc2VjdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNhYm91dC13cmFwcGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWJvdXQtd3JhcHBlciBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0zMCU7XFxuICAgIG1heC13aWR0aDogMjMwcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuaDIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmdvbGQge1xcbiAgICBjb2xvcjogI0ZGQzExNztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiNzdXNoaS1ob2xkZXIge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgXFxufVxcblxcbiNjb250YWluZXIubWVudSB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM1MzM7XFxufVxcblxcbiNtZW51IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1NZWRpdW0nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxufVxcblxcbiNtZW51LWxlZnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcblxcblxcbiNzcGVjaWFscyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIlIDkwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkRCRDU7XFxufVxcblxcbiNzYXNoaW1pIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksIDE0MHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNzYXNoaW1pLWhlYWQge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgY29sb3I6ICMyNDI0MjM7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiAjMzkzYjNhO1xcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlIGgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWVudS1pbmZvLWRhcmsge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XFxufVxcblxcbiNoYW1hY2hpIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4jY3J1ZG8ge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxufVxcblxcbiNjYXJwYWNjaW8ge1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxufVxcblxcbiN6dWtlIHtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG5cXG4ja2FucGFjaGkge1xcbiAgICBncmlkLWFyZWE6IDUvMS82LzI7XFxufVxcblxcbiNhbGJhY29yZSB7XFxuICAgIGdyaWQtYXJlYTogNi8xLzcvMjtcXG59XFxuXFxuI3NoaXNvIHtcXG4gICAgZ3JpZC1hcmVhOiA3LzEvOC8yO1xcbn1cXG5cXG4jdGF0YWtpIHtcXG4gICAgZ3JpZC1hcmVhOiA4LzEvOS8yO1xcbn1cXG5cXG4jdGlyYWRpdG8ge1xcbiAgICBncmlkLWFyZWE6IDkvMS8xMC8yO1xcbn1cXG5cXG4jbWVudS1yaWdodCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RURERjtcXG59XFxuXFxuI3JpZ2h0LXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyJSA1NiUgMiUgMzYlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcXG59XFxuXFxuI3BsYXRlcy1oZWFkIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbiNwbGF0ZXMge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDE0MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jbWFpdGFrZSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuI29jdG9wdXMge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxufVxcbiNjb2Qge1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxufVxcbiNjaGlja2VuIHtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG4jc2FiYSB7XFxuICAgIGdyaWQtYXJlYTogNS8xLzYvMjtcXG59XFxuXFxuI2Rlc3NlcnQtaGVhZCB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICBjb2xvcjogIzI0MjQyMztcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxufVxcblxcbiNkZXNzZXJ0e1xcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDE0MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuI21hdGNoYSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuI3Nlc2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG59XFxuXFxuI21vY2hpIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcbn1cXG5cXG4jY29udGFpbmVyLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiKDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIC44KSApOyBcXG59XFxuXFxuI2NvbnRhY3QtbWFpbi13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxuICAgIGdhcDogNDBweDtcXG59XFxuI2NvbnRhY3QtbWVzc2FnZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTWVkaXVtJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jY29udGFjdC1tZXNzYWdlIGgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiAjRDM5RTBEO1xcbiAgICBmb250LXNpemU6IDU4cHg7XFxufVxcblxcbiNjb250YWN0LW1lc3NhZ2UgYSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogI0QzOUUwRDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMTBweDtcXG59XFxuXFxuI2NvbnRhY3QtbWVzc2FnZSBwIHtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI2Zvcm0td3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICBoZWlnaHQ6IDQ1OHB4O1xcbiAgICB3aWR0aDogNDQ1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLUxpZ2h0JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmZvcm0gaDMge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuZm9ybSBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjRDM5RTBEO1xcbiAgICBcXG59XFxuXFxuZm9ybSB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5mb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNEMzlFMEQ7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogMTQwcHg7XFxuICAgIG1heC13aWR0aDogMTQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbiAgICBmb250LWZhbWlseTogJ0dULVdhbHNoZWltLVJlZ3VsYXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtOGRlZyk7XFxuICAgIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkMxMTc7XFxuICAgIGNvbG9yOiAjRkZDMTE3O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbiNzdWJtaXQ6bm90KDpob3Zlcikge1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuI3N1Ym1pdDphY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCwgY29sb3IgLjNzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTE3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNmaXJzdC1uYW1lLCAjbGFzdC1uYW1lLCBsYWJlbCwgI3Bob25lIHtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IENob3BzdGlja3MgZnJvbSAnLi9hc3NldHMvY2hvcHN0aWNrcy5qcGcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWN0Jyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBjaG9wc3RpY2tzID0gbmV3IEltYWdlO1xuICAgIGNob3BzdGlja3Muc3JjID0gQ2hvcHN0aWNrcztcblxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBDaG9wc3RpY2tzO1xuICAgIGNvbnN0IGNvbnRhY3RNYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RNYWluV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtbWFpbi13cmFwcGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RNYWluV3JhcHBlcik7XG4gICAgY29uc3QgY29udGFjdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0TWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtbWVzc2FnZScpO1xuICAgIGNvbnRhY3RNYWluV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0TWVzc2FnZSk7XG4gICAgY29uc3QgY29udGFjdEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RIZWFkLnRleHRDb250ZW50ID0gJ0h1bmdyeSBmb3IgbW9yZT8nO1xuICAgIGNvbnRhY3RNZXNzYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkKTtcbiAgICBjb25zdCBjb250YWN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0TWFpbi50ZXh0Q29udGVudCA9ICdMZXRcXCdzIHRhbGsgYWJvdXQgaXQhJztcbiAgICBjb250YWN0TWVzc2FnZS5hcHBlbmRDaGlsZChjb250YWN0TWFpbik7XG4gICAgY29uc3QgY29udGFjdEluZm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm9XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1pbmZvLXdyYXBwZXInKTtcbiAgICBjb250YWN0TWVzc2FnZS5hcHBlbmRDaGlsZChjb250YWN0SW5mb1dyYXBwZXIpO1xuICAgIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSAnc3VzaGkuY29udGFjdEBnaW5rZ28uY29tJztcbiAgICBjb250YWN0RW1haWwuaHJlZiA9ICdtYWlsdG86c3VzaGkuY29udGFjdEBnaW5rZ28uY29tJ1xuICAgIGNvbnRhY3RNZXNzYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG4gICAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnRhY3RQaG9uZS50ZXh0Q29udGVudCA9ICcoMTIzKS00NTUtNDMyMSc7XG4gICAgY29udGFjdE1lc3NhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcbiAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS13cmFwcGVyJyk7XG4gICAgY29udGFjdE1haW5XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1XcmFwcGVyKTtcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG4gICAgY29uc3QgZm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnUHJlZmVyIHRvIGxlYXZlIGEgbWVzc2FnZT8gR3JlYXQhJztcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtTGFiZWwpO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZmlyc3ROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgZmlyc3ROYW1lLmlkID0gJ2ZpcnN0LW5hbWUnXG4gICAgY29uc3QgZmlyc3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZpcnN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ0ZpcnN0IE5hbWUnO1xuICAgIGZpcnN0TmFtZUxhYmVsLmh0bWxGb3IgPSAnZmlyc3QtbmFtZSc7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZmlyc3ROYW1lTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZpcnN0TmFtZSk7XG4gICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhc3ROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgbGFzdE5hbWUuaWQgPSAnbGFzdC1uYW1lJ1xuICAgIGNvbnN0IGxhc3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhc3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTGFzdCBOYW1lJztcbiAgICBsYXN0TmFtZUxhYmVsLmh0bWxGb3IgPSAnbGFzdC1uYW1lJztcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChsYXN0TmFtZUxhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChsYXN0TmFtZSk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVtYWlsLnR5cGUgPSAnZW1haWwnO1xuICAgIGVtYWlsLmlkID0gJ2VtYWlsJ1xuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRS1tYWlsJztcbiAgICBlbWFpbExhYmVsLmh0bWxGb3IgPSAnZW1haWwnO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGhvbmUudHlwZSA9ICd0ZWwnO1xuICAgIHBob25lLmlkID0gJ3Bob25lJ1xuICAgIGNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHBob25lTGFiZWwudGV4dENvbnRlbnQgPSAnUGhvbmUnO1xuICAgIHBob25lTGFiZWwuaHRtbEZvciA9ICdwaG9uZSc7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIG1lc3NhZ2UuaWQgPSAnbWVzc2FnZSdcbiAgICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG1lc3NhZ2VMYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlJztcbiAgICBtZXNzYWdlTGFiZWwuaHRtbEZvciA9ICdtZXNzYWdlJztcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC5pZCA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgY29uc3QgdGhhbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aGFua3MudGV4dENvbnRlbnQgPSAnV2VcXCdsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyB3ZSBjYW4hJztcbiAgICBlbWFpbC5wYXR0ZXJuID09IC9eW2EtekEtWjAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC87XG4gICAgY29udGFjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAgXG4gICAgfSk7XG4gICAgXG5cbn0gICAgIFxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdob21lJyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1zZWN0aW9uJyk7XG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgYWJvdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29uc2Npb3VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnNjaW91cy50ZXh0Q29udGVudCA9ICcgY29uc2Npb3VzIGRlY2lzaW9ucyc7XG4gICAgY29uc3Qgc3VzdGFpbmFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3VzdGFpbmFibGUudGV4dENvbnRlbnQgPSAnIHN1c3RhaW5hYmxlIGZ1dHVyZSc7XG4gICAgY29uc3QgbWFraW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1ha2luZy50ZXh0Q29udGVudCA9ICdNYWtpbmcgJztcbiAgICBjb25zdCBmb3VyQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwZXJpb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGVyaW9kLnRleHRDb250ZW50ID0gJy4nO1xuICAgIGZvdXJBLnRleHRDb250ZW50ID0gJyBmb3IgYSc7XG4gICAgY29uc2Npb3VzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ29sZCcpO1xuICAgIHN1c3RhaW5hYmxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ29sZCcpO1xuICAgIGFib3V0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LXdyYXBwZXInKTtcbiAgICBhYm91dFRpdGxlLmFwcGVuZENoaWxkKG1ha2luZyk7XG4gICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChjb25zY2lvdXMpO1xuICAgIGFib3V0VGl0bGUuYXBwZW5kQ2hpbGQoZm91ckEpO1xuICAgIGFib3V0VGl0bGUuYXBwZW5kQ2hpbGQoc3VzdGFpbmFibGUpO1xuICAgIGFib3V0VGl0bGUuYXBwZW5kQ2hpbGQocGVyaW9kKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRXcmFwcGVyKTtcbiAgICBhYm91dFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XG4gICAgY29uc3Qgc3VzaGlIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdXNoaUhvbGRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWhvbGRlcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdXNoaUhvbGRlcik7XG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2Fzc2V0cy9zdXNoaS5qcGcnKVwiO1xuICAgIFxuXG59IiwiaW1wb3J0IGhvbWVMb2FkIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0TG9hZCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJyk7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtYnRuJyk7XG5cbndpbmRvdy5vbmxvYWQgPSBob21lTG9hZCgpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhvbWVMb2FkKCk7XG59KTtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51TG9hZCgpO1xufSlcblxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250YWN0TG9hZCgpO1xufSkiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBjb25zdCBtZW51TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMZWZ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1sZWZ0Jyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51TGVmdCk7XG4gICAgY29uc3QgbWVudVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1yaWdodCcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVJpZ2h0KTtcbiAgICBjb25zdCBtZW51UmlnaHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVJpZ2h0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JpZ2h0LXdyYXBwZXInKTtcbiAgICBtZW51UmlnaHQuYXBwZW5kQ2hpbGQobWVudVJpZ2h0V3JhcHBlcik7XG4gICAgY29uc3Qgc3BlY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGVjaWFscy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NwZWNpYWxzJyk7XG4gICAgbWVudUxlZnQuYXBwZW5kQ2hpbGQoc3BlY2lhbHMpO1xuICAgIGNvbnN0IHNhc2hpbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXNoaW1pLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FzaGltaScpO1xuICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNhc2hpbWkpO1xuICAgIGNvbnN0IHJvbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm9sbHMuc2V0QXR0cmlidXRlKCdpZCcsICdyb2xscycpO1xuICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHJvbGxzKTtcbiAgICBjb25zdCBwbGF0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF0ZXMuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF0ZXMnKTtcbiAgICBtZW51UmlnaHRXcmFwcGVyLmFwcGVuZENoaWxkKHBsYXRlcyk7XG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDtcbiAgICBkZXNzZXJ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzc2VydCcpO1xuICAgIG1lbnVSaWdodFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzc2VydCk7XG4gICAgLy8gY29uc3Qgc2FzaGltaVByaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHNhc2hpbWlQcmljZXMuc2V0QXR0cmlidXRlKCdpZCcsICdzYXNoaW1pLXByaWNlcycpO1xuICAgIC8vIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNhc2hpbWlQcmljZXMpO1xuICAgIFxuICAgIGNvbnN0IHNhc2hpbWlIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzYXNoaW1pSGVhZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaGVhZCcpO1xuICAgIHNhc2hpbWlIZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FzaGltaS1oZWFkJyk7XG4gICAgc2FzaGltaUhlYWQudGV4dENvbnRlbnQgPSAnU0lHTkFUVVJFIFNBU0hJTUknO1xuICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNhc2hpbWlIZWFkKTtcbiAgICAvLyBjb25zdCByb2xsc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIC8vIHJvbGxzSGVhZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaGVhZCcpO1xuICAgIC8vIHJvbGxzSGVhZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvbGxzLWhlYWQnKTtcbiAgICAvLyByb2xsc0hlYWQudGV4dENvbnRlbnQgPSAnU0lHTkFUVVJFIFJPTExTJztcbiAgICAvLyBzcGVjaWFscy5hcHBlbmRDaGlsZChyb2xsc0hlYWQpO1xuICAgIGNvbnN0IHBsYXRlc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBsYXRlc0hlYWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWhlYWQnKTtcbiAgICBwbGF0ZXNIZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxhdGVzLWhlYWQnKTtcbiAgICBwbGF0ZXNIZWFkLnRleHRDb250ZW50ID0gJ1NNQUxMIFBMQVRFUyc7XG4gICAgbWVudVJpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZChwbGF0ZXNIZWFkKTtcbiAgICBjb25zdCBkZXNzZXJ0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZGVzc2VydEhlYWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWhlYWQnKTtcbiAgICBkZXNzZXJ0SGVhZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc3NlcnQtaGVhZCcpO1xuICAgIGRlc3NlcnRIZWFkLnRleHRDb250ZW50ID0gJ0RFU1NFUlQnO1xuICAgIG1lbnVSaWdodFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzc2VydEhlYWQpO1xuXG4gICAgY29uc3QgaGFtYWNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhhbWFjaGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGhhbWFjaGkpO1xuXG4gICAgY29uc3QgaGFtYWNoaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGFtYWNoaVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgaGFtYWNoaVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS10aXRsZScpO1xuICAgIGhhbWFjaGkuYXBwZW5kQ2hpbGQoaGFtYWNoaVRpdGxlKTtcblxuICAgIGNvbnN0IGhhbWFjaGlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoYW1hY2hpTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGhhbWFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS1uYW1lJyk7XG4gICAgaGFtYWNoaU5hbWUudGV4dENvbnRlbnQgPSAnSEFNQUNISSBTSVpaTEUqJ1xuICAgIGhhbWFjaGlUaXRsZS5hcHBlbmRDaGlsZChoYW1hY2hpTmFtZSk7XG5cbiAgICBjb25zdCBoYW1hY2hpUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhhbWFjaGlQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgaGFtYWNoaVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS1wcmljZScpO1xuICAgIGhhbWFjaGlQcmljZS50ZXh0Q29udGVudCA9ICcyMydcbiAgICBoYW1hY2hpVGl0bGUuYXBwZW5kQ2hpbGQoaGFtYWNoaVByaWNlKTtcblxuICAgIGNvbnN0IGhhbWFjaGlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhhbWFjaGlJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBoYW1hY2hpSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hhbWFjaGktaW5mbycpO1xuICAgIGhhbWFjaGlJbmZvLnRleHRDb250ZW50ID0gJ0hvdCBvaWwsIGZyZXNoIGdpbmdlciwgZ2FybGljLCBjaGl2ZSwgcG9uenUsIGFsZXBwbyBwZXBwZXInXG4gICAgaGFtYWNoaS5hcHBlbmRDaGlsZChoYW1hY2hpSW5mbyk7XG5cbiAgICBjb25zdCBjcnVkbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNydWRvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZChjcnVkbyk7XG5cbiAgICBjb25zdCBjcnVkb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3J1ZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIGNydWRvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby10aXRsZScpO1xuICAgIGNydWRvLmFwcGVuZENoaWxkKGNydWRvVGl0bGUpO1xuXG4gICAgY29uc3QgY3J1ZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjcnVkb05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBjcnVkb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby1uYW1lJyk7XG4gICAgY3J1ZG9OYW1lLnRleHRDb250ZW50ID0gJ0tJTkcgU0FMTU9OIENSVURPKidcbiAgICBjcnVkb1RpdGxlLmFwcGVuZENoaWxkKGNydWRvTmFtZSk7XG5cbiAgICBjb25zdCBjcnVkb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjcnVkb1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBjcnVkb1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3J1ZG8tcHJpY2UnKTtcbiAgICBjcnVkb1ByaWNlLnRleHRDb250ZW50ID0gJzIzJ1xuICAgIGNydWRvVGl0bGUuYXBwZW5kQ2hpbGQoY3J1ZG9QcmljZSk7XG5cbiAgICBjb25zdCBjcnVkb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY3J1ZG9JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBjcnVkb0luZm8uc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby1pbmZvJyk7XG4gICAgY3J1ZG9JbmZvLnRleHRDb250ZW50ID0gJ1doaXRlIHRydWZmbGUgcG9uenUsIGNoZXJyeSB0b21hdG8sIHNlYSBzYWx0J1xuICAgIGNydWRvLmFwcGVuZENoaWxkKGNydWRvSW5mbyk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJwYWNjaW8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGNhcnBhY2Npbyk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcnBhY2Npb1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgY2FycGFjY2lvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJwYWNjaW8tdGl0bGUnKTtcbiAgICBjYXJwYWNjaW8uYXBwZW5kQ2hpbGQoY2FycGFjY2lvVGl0bGUpO1xuXG4gICAgY29uc3QgY2FycGFjY2lvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2FycGFjY2lvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGNhcnBhY2Npb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJwYWNjaW8tbmFtZScpO1xuICAgIGNhcnBhY2Npb05hbWUudGV4dENvbnRlbnQgPSAnT0NUT1BVUyBDQVJQQUNDSU8nXG4gICAgY2FycGFjY2lvVGl0bGUuYXBwZW5kQ2hpbGQoY2FycGFjY2lvTmFtZSk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW9QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2FycGFjY2lvUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGNhcnBhY2Npb1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FycGFjY2lvLXByaWNlJyk7XG4gICAgY2FycGFjY2lvUHJpY2UudGV4dENvbnRlbnQgPSAnMjInXG4gICAgY2FycGFjY2lvVGl0bGUuYXBwZW5kQ2hpbGQoY2FycGFjY2lvUHJpY2UpO1xuXG4gICAgY29uc3QgY2FycGFjY2lvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYXJwYWNjaW9JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBjYXJwYWNjaW9JbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FycGFjY2lvLWluZm8nKTtcbiAgICBjYXJwYWNjaW9JbmZvLnRleHRDb250ZW50ID0gJ0xlbW9uIHZpbmFpZ3JldHRlLCBjcmlzcHkgY2FwZXJzLCB0b21hdG8sIGZyZXNoIGhlcmJzJ1xuICAgIGNhcnBhY2Npby5hcHBlbmRDaGlsZChjYXJwYWNjaW9JbmZvKTtcblxuICAgIGNvbnN0IHp1a2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB6dWtlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZCh6dWtlKTtcblxuICAgIGNvbnN0IHp1a2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHp1a2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHp1a2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3p1a2UtdGl0bGUnKTtcbiAgICB6dWtlLmFwcGVuZENoaWxkKHp1a2VUaXRsZSk7XG5cbiAgICBjb25zdCB6dWtlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgenVrZU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICB6dWtlTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3p1a2UtbmFtZScpO1xuICAgIHp1a2VOYW1lLnRleHRDb250ZW50ID0gJ1RVTkEgWlVLRSonXG4gICAgenVrZVRpdGxlLmFwcGVuZENoaWxkKHp1a2VOYW1lKTtcblxuICAgIGNvbnN0IHp1a2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgenVrZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICB6dWtlUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICd6dWtlLXByaWNlJyk7XG4gICAgenVrZVByaWNlLnRleHRDb250ZW50ID0gJzI0J1xuICAgIHp1a2VUaXRsZS5hcHBlbmRDaGlsZCh6dWtlUHJpY2UpO1xuXG4gICAgY29uc3QgenVrZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgenVrZUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIHp1a2VJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnenVrZS1pbmZvJyk7XG4gICAgenVrZUluZm8udGV4dENvbnRlbnQgPSAnU295IG1hcmluYXRlZCBiaWdleWUgdHVuYSwgc2VzYW1lIG9uaW9uIHBvbnp1LCBmcmllZCBnYXJsaWMsIGNoaXZlJ1xuICAgIHp1a2UuYXBwZW5kQ2hpbGQoenVrZUluZm8pO1xuXG4gICAgY29uc3Qga2FucGFjaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrYW5wYWNoaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQoa2FucGFjaGkpO1xuXG4gICAgY29uc3Qga2FucGFjaGlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGthbnBhY2hpVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBrYW5wYWNoaVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAna2FucGFjaGktdGl0bGUnKTtcbiAgICBrYW5wYWNoaS5hcHBlbmRDaGlsZChrYW5wYWNoaVRpdGxlKTtcblxuICAgIGNvbnN0IGthbnBhY2hpTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAga2FucGFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAga2FucGFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAna2FucGFjaGktbmFtZScpO1xuICAgIGthbnBhY2hpTmFtZS50ZXh0Q29udGVudCA9ICdLQU5QQUNISSBBR1VBQ0hJTEUqJ1xuICAgIGthbnBhY2hpVGl0bGUuYXBwZW5kQ2hpbGQoa2FucGFjaGlOYW1lKTtcblxuICAgIGNvbnN0IGthbnBhY2hpUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGthbnBhY2hpUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGthbnBhY2hpUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdrYW5wYWNoaS1wcmljZScpO1xuICAgIGthbnBhY2hpUHJpY2UudGV4dENvbnRlbnQgPSAnMjMnXG4gICAga2FucGFjaGlUaXRsZS5hcHBlbmRDaGlsZChrYW5wYWNoaVByaWNlKTtcblxuICAgIGNvbnN0IGthbnBhY2hpSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBrYW5wYWNoaUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGthbnBhY2hpSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2thbnBhY2hpLWluZm8nKTtcbiAgICBrYW5wYWNoaUluZm8udGV4dENvbnRlbnQgPSAnQ3VjdW1iZXItY2lsYW50cm8gYWd1YWNoaWxlLCBwb21lZ3JhbmF0ZSwgc2VycmFubywgY2hhcnJlZCBvcmFuZ2UsIG9saXZlIG9pbCwgc2VhIHNhbHQnXG4gICAga2FucGFjaGkuYXBwZW5kQ2hpbGQoa2FucGFjaGlJbmZvKTtcblxuICAgIGNvbnN0IGFsYmFjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWxiYWNvcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGFsYmFjb3JlKTtcblxuICAgIGNvbnN0IGFsYmFjb3JlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbGJhY29yZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgYWxiYWNvcmVUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsYmFjb3JlLXRpdGxlJyk7XG4gICAgYWxiYWNvcmUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVUaXRsZSk7XG5cbiAgICBjb25zdCBhbGJhY29yZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFsYmFjb3JlTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGFsYmFjb3JlTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsYmFjb3JlLW5hbWUnKTtcbiAgICBhbGJhY29yZU5hbWUudGV4dENvbnRlbnQgPSAnQUxCQUNPUkUgQ1JJU1BZIE9OSU9OKidcbiAgICBhbGJhY29yZVRpdGxlLmFwcGVuZENoaWxkKGFsYmFjb3JlTmFtZSk7XG5cbiAgICBjb25zdCBhbGJhY29yZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBhbGJhY29yZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBhbGJhY29yZVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxiYWNvcmUtcHJpY2UnKTtcbiAgICBhbGJhY29yZVByaWNlLnRleHRDb250ZW50ID0gJzIyJ1xuICAgIGFsYmFjb3JlVGl0bGUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVQcmljZSk7XG5cbiAgICBjb25zdCBhbGJhY29yZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWxiYWNvcmVJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBhbGJhY29yZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdhbGJhY29yZS1pbmZvJyk7XG4gICAgYWxiYWNvcmVJbmZvLnRleHRDb250ZW50ID0gJ1NlYXJlZCBhbGJhY29yZSwgZ2FybGljIGFpb2xpLCB5dXp1IHBvbnp1LCBjcmlzcHkgb25pb24sIGNoZXJ2aWwnXG4gICAgYWxiYWNvcmUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVJbmZvKTtcblxuICAgIGNvbnN0IHNoaXNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpc28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKHNoaXNvKTtcblxuICAgIGNvbnN0IHNoaXNvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlzb1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgc2hpc29UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXNvLXRpdGxlJyk7XG4gICAgc2hpc28uYXBwZW5kQ2hpbGQoc2hpc29UaXRsZSk7XG5cbiAgICBjb25zdCBzaGlzb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNoaXNvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIHNoaXNvTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXNvLW5hbWUnKTtcbiAgICBzaGlzb05hbWUudGV4dENvbnRlbnQgPSAnU0hJU08gUExVTSBTSElST01JKidcbiAgICBzaGlzb1RpdGxlLmFwcGVuZENoaWxkKHNoaXNvTmFtZSk7XG5cbiAgICBjb25zdCBzaGlzb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzaGlzb1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBzaGlzb1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpc28tcHJpY2UnKTtcbiAgICBzaGlzb1ByaWNlLnRleHRDb250ZW50ID0gJzIyJ1xuICAgIHNoaXNvVGl0bGUuYXBwZW5kQ2hpbGQoc2hpc29QcmljZSk7XG5cbiAgICBjb25zdCBzaGlzb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2hpc29JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBzaGlzb0luZm8uc2V0QXR0cmlidXRlKCdpZCcsICdzaGlzby1pbmZvJyk7XG4gICAgc2hpc29JbmZvLnRleHRDb250ZW50ID0gJ1doaXRlZmlzaCwgeXV6dSBwb256dSwgb2xpdmUgb2lsLCB1bWVib3NoaSwgc2hpc28nXG4gICAgc2hpc28uYXBwZW5kQ2hpbGQoc2hpc29JbmZvKTtcblxuICAgIGNvbnN0IHRhdGFraSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhdGFraS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQodGF0YWtpKTtcblxuICAgIGNvbnN0IHRhdGFraVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGF0YWtpVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICB0YXRha2lUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhdGFraS10aXRsZScpO1xuICAgIHRhdGFraS5hcHBlbmRDaGlsZCh0YXRha2lUaXRsZSk7XG5cbiAgICBjb25zdCB0YXRha2lOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0YXRha2lOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgdGF0YWtpTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhdGFraS1uYW1lJyk7XG4gICAgdGF0YWtpTmFtZS50ZXh0Q29udGVudCA9ICdUVU5BIFRBVEFLSSonXG4gICAgdGF0YWtpVGl0bGUuYXBwZW5kQ2hpbGQodGF0YWtpTmFtZSk7XG5cbiAgICBjb25zdCB0YXRha2lQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGF0YWtpUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIHRhdGFraVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGF0YWtpLXByaWNlJyk7XG4gICAgdGF0YWtpUHJpY2UudGV4dENvbnRlbnQgPSAnMjQnXG4gICAgdGF0YWtpVGl0bGUuYXBwZW5kQ2hpbGQodGF0YWtpUHJpY2UpO1xuXG4gICAgY29uc3QgdGF0YWtpSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXRha2lJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICB0YXRha2lJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAndGF0YWtpLWluZm8nKTtcbiAgICB0YXRha2lJbmZvLnRleHRDb250ZW50ID0gJ1Nlc2FtZSBjcnVzdGVkIGJpZ2V5ZSB0dW5hLCBhcHBsZSBtdXN0YXJkIGRyZXNzaW5nLCBncmVlbiBvbmlvbidcbiAgICB0YXRha2kuYXBwZW5kQ2hpbGQodGF0YWtpSW5mbyk7XG5cbiAgICBjb25zdCB0aXJhZGl0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpcmFkaXRvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZCh0aXJhZGl0byk7XG5cbiAgICBjb25zdCB0aXJhZGl0b1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlyYWRpdG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHRpcmFkaXRvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXJhZGl0by10aXRsZScpO1xuICAgIHRpcmFkaXRvLmFwcGVuZENoaWxkKHRpcmFkaXRvVGl0bGUpO1xuXG4gICAgY29uc3QgdGlyYWRpdG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXJhZGl0b05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICB0aXJhZGl0b05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXJhZGl0by1uYW1lJyk7XG4gICAgdGlyYWRpdG9OYW1lLnRleHRDb250ZW50ID0gJ1dISVRFRklTSCBUSVJBRElUTyonXG4gICAgdGlyYWRpdG9UaXRsZS5hcHBlbmRDaGlsZCh0aXJhZGl0b05hbWUpO1xuXG4gICAgY29uc3QgdGlyYWRpdG9QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGlyYWRpdG9QcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgdGlyYWRpdG9QcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpcmFkaXRvLXByaWNlJyk7XG4gICAgdGlyYWRpdG9QcmljZS50ZXh0Q29udGVudCA9ICcyMidcbiAgICB0aXJhZGl0b1RpdGxlLmFwcGVuZENoaWxkKHRpcmFkaXRvUHJpY2UpO1xuXG4gICAgY29uc3QgdGlyYWRpdG9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpcmFkaXRvSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgdGlyYWRpdG9JbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAndGlyYWRpdG8taW5mbycpO1xuICAgIHRpcmFkaXRvSW5mby50ZXh0Q29udGVudCA9ICdBamkgYW1hcmlsbG8gY2hpbGkgdGlnZXJzIG1pbGssIG1hbmdvLCBnb2NodWdhcnUgb2lsLCBiYXNpbCwgc2VhIHNhbHQnXG4gICAgdGlyYWRpdG8uYXBwZW5kQ2hpbGQodGlyYWRpdG9JbmZvKTtcblxuICAgIGNvbnN0IG1haXRha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWl0YWtlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgcGxhdGVzLmFwcGVuZENoaWxkKG1haXRha2UpO1xuXG4gICAgY29uc3QgbWFpdGFrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpdGFrZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbWFpdGFrZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS10aXRsZScpO1xuICAgIG1haXRha2UuYXBwZW5kQ2hpbGQobWFpdGFrZVRpdGxlKTtcblxuICAgIGNvbnN0IG1haXRha2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtYWl0YWtlTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIG1haXRha2VOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS1uYW1lJyk7XG4gICAgbWFpdGFrZU5hbWUudGV4dENvbnRlbnQgPSAnUk9BU1RFRCBNQUlUQUtFJ1xuICAgIG1haXRha2VUaXRsZS5hcHBlbmRDaGlsZChtYWl0YWtlTmFtZSk7XG5cbiAgICBjb25zdCBtYWl0YWtlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1haXRha2VQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgbWFpdGFrZVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS1wcmljZScpO1xuICAgIG1haXRha2VQcmljZS50ZXh0Q29udGVudCA9ICcxNCdcbiAgICBtYWl0YWtlVGl0bGUuYXBwZW5kQ2hpbGQobWFpdGFrZVByaWNlKTtcblxuICAgIGNvbnN0IG1haXRha2VJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1haXRha2VJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBtYWl0YWtlSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haXRha2UtaW5mbycpO1xuICAgIG1haXRha2VJbmZvLnRleHRDb250ZW50ID0gJ1dob2xlIHJvYXN0ZWQgbWFpdGFrZSBtdXNocm9vbSwgd2FrYW1lIGJ1dHRlciwgY2hpdmUsIGxlbW9uJ1xuICAgIG1haXRha2UuYXBwZW5kQ2hpbGQobWFpdGFrZUluZm8pO1xuXG4gICAgY29uc3Qgb2N0b3B1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9jdG9wdXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBwbGF0ZXMuYXBwZW5kQ2hpbGQob2N0b3B1cyk7XG5cbiAgICBjb25zdCBvY3RvcHVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvY3RvcHVzVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBvY3RvcHVzVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLXRpdGxlJyk7XG4gICAgb2N0b3B1cy5hcHBlbmRDaGlsZChvY3RvcHVzVGl0bGUpO1xuXG4gICAgY29uc3Qgb2N0b3B1c05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9jdG9wdXNOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgb2N0b3B1c05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLW5hbWUnKTtcbiAgICBvY3RvcHVzTmFtZS50ZXh0Q29udGVudCA9ICdHUklMTEVEIE9DVE9QVVMnXG4gICAgb2N0b3B1c1RpdGxlLmFwcGVuZENoaWxkKG9jdG9wdXNOYW1lKTtcblxuICAgIGNvbnN0IG9jdG9wdXNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgb2N0b3B1c1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBvY3RvcHVzUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLXByaWNlJyk7XG4gICAgb2N0b3B1c1ByaWNlLnRleHRDb250ZW50ID0gJzI0J1xuICAgIG9jdG9wdXNUaXRsZS5hcHBlbmRDaGlsZChvY3RvcHVzUHJpY2UpO1xuXG4gICAgY29uc3Qgb2N0b3B1c0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgb2N0b3B1c0luZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIG9jdG9wdXNJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnb2N0b3B1cy1pbmZvJyk7XG4gICAgb2N0b3B1c0luZm8udGV4dENvbnRlbnQgPSAnUm9hc3RlZCBjYXVsaWZsb3dlciBzdGVhaywgYmxpc3RlcmVkIGNoZXJyeSB0b21hdG9lcywgYWppIHZlcmRlLCBjaGVydmlsJ1xuICAgIG9jdG9wdXMuYXBwZW5kQ2hpbGQob2N0b3B1c0luZm8pO1xuXG4gICAgY29uc3QgY29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgcGxhdGVzLmFwcGVuZENoaWxkKGNvZCk7XG5cbiAgICBjb25zdCBjb2RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgY29kVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjb2QtdGl0bGUnKTtcbiAgICBjb2QuYXBwZW5kQ2hpbGQoY29kVGl0bGUpO1xuXG4gICAgY29uc3QgY29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29kTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGNvZE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjb2QtbmFtZScpO1xuICAgIGNvZE5hbWUudGV4dENvbnRlbnQgPSAnTUlTTyBHTEFaRUQgQkxBQ0sgQ09EJ1xuICAgIGNvZFRpdGxlLmFwcGVuZENoaWxkKGNvZE5hbWUpO1xuXG4gICAgY29uc3QgY29kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvZFByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBjb2RQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvZC1wcmljZScpO1xuICAgIGNvZFByaWNlLnRleHRDb250ZW50ID0gJzE4J1xuICAgIGNvZFRpdGxlLmFwcGVuZENoaWxkKGNvZFByaWNlKTtcblxuICAgIGNvbnN0IGNvZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29kSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgY29kSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvZC1pbmZvJyk7XG4gICAgY29kSW5mby50ZXh0Q29udGVudCA9ICdCcm9pbGVkIGJsYWNrIGNvZCwgb3JhbmdlLCBnaW5nZXIsIGdyZWVuIG9uaW9uLCB5dXp1IG1pc28sIGdvY2h1Z2FydSBvaWwnXG4gICAgY29kLmFwcGVuZENoaWxkKGNvZEluZm8pO1xuXG4gICAgY29uc3QgY2hpY2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoaWNrZW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBwbGF0ZXMuYXBwZW5kQ2hpbGQoY2hpY2tlbik7XG5cbiAgICBjb25zdCBjaGlja2VuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGlja2VuVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBjaGlja2VuVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLXRpdGxlJyk7XG4gICAgY2hpY2tlbi5hcHBlbmRDaGlsZChjaGlja2VuVGl0bGUpO1xuXG4gICAgY29uc3QgY2hpY2tlbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNoaWNrZW5OYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgY2hpY2tlbk5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLW5hbWUnKTtcbiAgICBjaGlja2VuTmFtZS50ZXh0Q29udGVudCA9ICdDSElDS0VOIEtBUkFBR0UnXG4gICAgY2hpY2tlblRpdGxlLmFwcGVuZENoaWxkKGNoaWNrZW5OYW1lKTtcblxuICAgIGNvbnN0IGNoaWNrZW5QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2hpY2tlblByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBjaGlja2VuUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLXByaWNlJyk7XG4gICAgY2hpY2tlblByaWNlLnRleHRDb250ZW50ID0gJzEyJ1xuICAgIGNoaWNrZW5UaXRsZS5hcHBlbmRDaGlsZChjaGlja2VuUHJpY2UpO1xuXG4gICAgY29uc3QgY2hpY2tlbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2hpY2tlbkluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGNoaWNrZW5JbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hpY2tlbi1pbmZvJyk7XG4gICAgY2hpY2tlbkluZm8udGV4dENvbnRlbnQgPSAnQ3Jpc3B5IGZyaWVkIG1hcmluYXRlZCBjaGlja2VuLCBkaWxsIGtld3BpZSBhaW9saSwgbGVtb24nXG4gICAgY2hpY2tlbi5hcHBlbmRDaGlsZChjaGlja2VuSW5mbyk7XG5cbiAgICBjb25zdCBzYWJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2FiYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHBsYXRlcy5hcHBlbmRDaGlsZChzYWJhKTtcblxuICAgIGNvbnN0IHNhYmFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhYmFUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHNhYmFUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtdGl0bGUnKTtcbiAgICBzYWJhLmFwcGVuZENoaWxkKHNhYmFUaXRsZSk7XG5cbiAgICBjb25zdCBzYWJhTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2FiYU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBzYWJhTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtbmFtZScpO1xuICAgIHNhYmFOYW1lLnRleHRDb250ZW50ID0gJ0dSSUxMRUQgU0FCQSdcbiAgICBzYWJhVGl0bGUuYXBwZW5kQ2hpbGQoc2FiYU5hbWUpO1xuXG4gICAgY29uc3Qgc2FiYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzYWJhUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIHNhYmFQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtcHJpY2UnKTtcbiAgICBzYWJhUHJpY2UudGV4dENvbnRlbnQgPSAnMTYnXG4gICAgc2FiYVRpdGxlLmFwcGVuZENoaWxkKHNhYmFQcmljZSk7XG5cbiAgICBjb25zdCBzYWJhSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzYWJhSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgc2FiYUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdzYWJhLWluZm8nKTtcbiAgICBzYWJhSW5mby50ZXh0Q29udGVudCA9ICdCbGlzdGVyZWQgZmlsZXQgb2YgbWFja2VyZWwsIG1vbWlqaSBvcm9zaGksIHBpY2tsZWQgbXVzdGFyZCBzZWVkLCBsZW1vbiBhc2gsIGdyZWVuIG9uaW9uJ1xuICAgIHNhYmEuYXBwZW5kQ2hpbGQoc2FiYUluZm8pO1xuXG4gICAgY29uc3QgbWF0Y2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF0Y2hhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgZGVzc2VydC5hcHBlbmRDaGlsZChtYXRjaGEpO1xuXG4gICAgY29uc3QgbWF0Y2hhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXRjaGFUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIG1hdGNoYVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWF0Y2hhLXRpdGxlJyk7XG4gICAgbWF0Y2hhLmFwcGVuZENoaWxkKG1hdGNoYVRpdGxlKTtcblxuICAgIGNvbnN0IG1hdGNoYU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1hdGNoYU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBtYXRjaGFOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWF0Y2hhLW5hbWUnKTtcbiAgICBtYXRjaGFOYW1lLnRleHRDb250ZW50ID0gJ01BVENIQSBQQU5OQSBDT1RUQSdcbiAgICBtYXRjaGFUaXRsZS5hcHBlbmRDaGlsZChtYXRjaGFOYW1lKTtcblxuICAgIGNvbnN0IG1hdGNoYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtYXRjaGFQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgbWF0Y2hhUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtYXRjaGEtcHJpY2UnKTtcbiAgICBtYXRjaGFQcmljZS50ZXh0Q29udGVudCA9ICc5J1xuICAgIG1hdGNoYVRpdGxlLmFwcGVuZENoaWxkKG1hdGNoYVByaWNlKTtcblxuICAgIGNvbnN0IG1hdGNoYUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWF0Y2hhSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgbWF0Y2hhSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21hdGNoYS1pbmZvJyk7XG4gICAgbWF0Y2hhSW5mby50ZXh0Q29udGVudCA9ICdXaGl0ZSBjaG9jb2xhdGUgY3J1bWIsIGZyZXNoIGJlcnJpZXMnXG4gICAgbWF0Y2hhLmFwcGVuZENoaWxkKG1hdGNoYUluZm8pO1xuXG4gICAgY29uc3Qgc2VzYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VzYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgZGVzc2VydC5hcHBlbmRDaGlsZChzZXNhbWUpO1xuXG4gICAgY29uc3Qgc2VzYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXNhbWVUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHNlc2FtZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VzYW1lLXRpdGxlJyk7XG4gICAgc2VzYW1lLmFwcGVuZENoaWxkKHNlc2FtZVRpdGxlKTtcblxuICAgIGNvbnN0IHNlc2FtZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNlc2FtZU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBzZXNhbWVOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VzYW1lLW5hbWUnKTtcbiAgICBzZXNhbWVOYW1lLnRleHRDb250ZW50ID0gJ0JMQUNLIFNFU0FNRSBCUk9XTklFJ1xuICAgIHNlc2FtZVRpdGxlLmFwcGVuZENoaWxkKHNlc2FtZU5hbWUpO1xuXG4gICAgY29uc3Qgc2VzYW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNlc2FtZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBzZXNhbWVQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nlc2FtZS1wcmljZScpO1xuICAgIHNlc2FtZVByaWNlLnRleHRDb250ZW50ID0gJzEwJ1xuICAgIHNlc2FtZVRpdGxlLmFwcGVuZENoaWxkKHNlc2FtZVByaWNlKTtcblxuICAgIGNvbnN0IHNlc2FtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2VzYW1lSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgc2VzYW1lSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nlc2FtZS1pbmZvJyk7XG4gICAgc2VzYW1lSW5mby50ZXh0Q29udGVudCA9ICdWYW5pbGxhIGljZSBjcmVhbSwgZnJlc2ggYmVycmllcywgYmxhY2sgc2VzYW1lJ1xuICAgIHNlc2FtZS5hcHBlbmRDaGlsZChzZXNhbWVJbmZvKTtcblxuICAgIGNvbnN0IG1vY2hpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9jaGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKG1vY2hpKTtcblxuICAgIGNvbnN0IG1vY2hpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2NoaVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbW9jaGlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vY2hpLXRpdGxlJyk7XG4gICAgbW9jaGkuYXBwZW5kQ2hpbGQobW9jaGlUaXRsZSk7XG5cbiAgICBjb25zdCBtb2NoaU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1vY2hpTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIG1vY2hpTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vY2hpLW5hbWUnKTtcbiAgICBtb2NoaU5hbWUudGV4dENvbnRlbnQgPSAnU0FTQSBNT0NISSdcbiAgICBtb2NoaVRpdGxlLmFwcGVuZENoaWxkKG1vY2hpTmFtZSk7XG5cbiAgICBjb25zdCBtb2NoaVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtb2NoaVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBtb2NoaVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9jaGktcHJpY2UnKTtcbiAgICBtb2NoaVByaWNlLnRleHRDb250ZW50ID0gJzEyJ1xuICAgIG1vY2hpVGl0bGUuYXBwZW5kQ2hpbGQobW9jaGlQcmljZSk7XG5cbiAgICBjb25zdCBtb2NoaUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbW9jaGlJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBtb2NoaUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdtb2NoaS1pbmZvJyk7XG4gICAgbW9jaGlJbmZvLnRleHRDb250ZW50ID0gJ1Nhc2EgYmFtYm9vIGxlYWYsIHlvbW9naSwga2luYWtvIGZsb3VyICdcbiAgICBtb2NoaS5hcHBlbmRDaGlsZChtb2NoaUluZm8pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==