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
    container.style.backgroundImage = `url(${_assets_chopsticks_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
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
/* harmony import */ var _assets_sushi_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sushi.jpg */ "./src/assets/sushi.jpg");




function homeLoad() {
    const container = document.querySelector('#container');
    container.setAttribute('class', 'home');
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    container.style.backgroundImage = `url(${_assets_sushi_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
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
/* harmony import */ var _assets_logo_with_circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/logo-with-circle.svg */ "./src/assets/logo-with-circle.svg");






const home = document.querySelector('#home-btn');
const menu = document.querySelector('#menu-btn');
const contact = document.querySelector('#contact-btn');
const logo = document.querySelector('#logo');
logo.src = _assets_logo_with_circle_svg__WEBPACK_IMPORTED_MODULE_3__;

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

/***/ }),

/***/ "./src/assets/logo-with-circle.svg":
/*!*****************************************!*\
  !*** ./src/assets/logo-with-circle.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dd22a6478f9f3298617.svg";

/***/ }),

/***/ "./src/assets/sushi.jpg":
/*!******************************!*\
  !*** ./src/assets/sushi.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af59a3018bc140df1d09.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLDJKQUEwRDtBQUN0Ryw0Q0FBNEMsMklBQWtEO0FBQzlGLDRDQUE0Qyw2SkFBMkQ7QUFDdkcsNENBQTRDLDZJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksU0FBUyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEs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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9HVC1XYWxzaGVpbS1MaWdodC1PYmxpcXVlLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0dULVdhbHNoZWltLUxpZ2h0Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0dULVdhbHNoZWltLU1lZGl1bS1PYmxpcXVlLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0dULVdhbHNoZWltLU1lZGl1bS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9HVC1XYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvR1QtV2Fsc2hlaW0tUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbWFpbi1iZy1jb2xvcjogIzMzMzUzMztcbiAgICAtLXNlY29uZGFyeS1iZy1jb2xvcjogIzI0MjQyM1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLUxpZ2h0LU9ibGlxdWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bS1PYmxpcXVlJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTWVkaXVtJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhcic7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxMjBweCwgMTB2aCkgOTB2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XG59XG5cbmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA0cHgsIDUwdncpIG1pbm1heCg0MDBweCwgNTB2dyk7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTZweCAxNnB4IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG59XG5cbmhlYWRlciBpbWcge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbm5hdiB7XG4gICAgbWF4LXdpZHRoOiA3MThweDtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxubmF2IGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwKTtcbiAgICBmb250LWZhbWlseTogJ0dULVdhbHNoZWltLVJlZ3VsYXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHRyYW5zZm9ybTogc2tld1goLThkZWcpO1xufVxuXG5uYXYgYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzExNztcbiAgICBjb2xvcjogI0ZGQzExNztcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbm5hdiBidXR0b246bm90KDpob3Zlcikge1xuICAgIHRyYW5zaXRpb246IGJvcmRlciAuNXMgZWFzZS1pbi1vdXQsIGNvbG9yIC41cyBlYXNlLWluLW91dCwgZm9udC1zaXplIC41cyBlYXNlLWluLW91dDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuXG5uYXYgYnV0dG9uOmFjdGl2ZSB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHMsIGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTE3O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI2NvbnRhaW5lci5ob21lIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA0cHgsIDIwdncpIG1pbm1heCg5ODBweCwgODB2dyk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIC41KSApOyBcbn1cblxuI2Fib3V0LXNlY3Rpb24ge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2Fib3V0LXdyYXBwZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2Fib3V0LXdyYXBwZXIgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMzAlO1xuICAgIG1heC13aWR0aDogMjMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbmgyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmdvbGQge1xuICAgIGNvbG9yOiAjRkZDMTE3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuI3N1c2hpLWhvbGRlciB7XG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIFxufVxuXG4jY29udGFpbmVyLm1lbnUge1xuICAgIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzUzMztcbn1cblxuI21lbnUge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDE1MDBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTWVkaXVtJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xufVxuXG4jbWVudS1sZWZ0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xufVxuXG5cblxuI3NwZWNpYWxzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMiUgOTAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkRCRDU7XG59XG5cbiNzYXNoaW1pIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LCAxNDBweCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA0NzBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jc2FzaGltaS1oZWFkIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGNvbG9yOiAjMjQyNDIzO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweFxufVxuXG4ubWVudS1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbn1cblxuLm1lbnUtaXRlbS10aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgY29sb3I6ICMzOTNiM2E7XG59XG5cbi5tZW51LWl0ZW0tdGl0bGUgaDMge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1lbnUtaW5mby1kYXJrIHtcbiAgICBjb2xvcjogIzI5MjkyOTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC13cmFwOiB3cmFwO1xufVxuXG4jaGFtYWNoaSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xufVxuXG4jY3J1ZG8ge1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbn1cblxuI2NhcnBhY2NpbyB7XG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xufVxuXG4jenVrZSB7XG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xufVxuXG4ja2FucGFjaGkge1xuICAgIGdyaWQtYXJlYTogNS8xLzYvMjtcbn1cblxuI2FsYmFjb3JlIHtcbiAgICBncmlkLWFyZWE6IDYvMS83LzI7XG59XG5cbiNzaGlzbyB7XG4gICAgZ3JpZC1hcmVhOiA3LzEvOC8yO1xufVxuXG4jdGF0YWtpIHtcbiAgICBncmlkLWFyZWE6IDgvMS85LzI7XG59XG5cbiN0aXJhZGl0byB7XG4gICAgZ3JpZC1hcmVhOiA5LzEvMTAvMjtcbn1cblxuI21lbnUtcmlnaHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RURERjtcbn1cblxuI3JpZ2h0LXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyJSA1NiUgMiUgMzYlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xufVxuXG4jcGxhdGVzLWhlYWQge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jcGxhdGVzIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMTQwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jbWFpdGFrZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xufVxuI29jdG9wdXMge1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbn1cbiNjb2Qge1xuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcbn1cbiNjaGlja2VuIHtcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XG59XG4jc2FiYSB7XG4gICAgZ3JpZC1hcmVhOiA1LzEvNi8yO1xufVxuXG4jZGVzc2VydC1oZWFkIHtcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGNvbG9yOiAjMjQyNDIzO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4jZGVzc2VydHtcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMTQwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuI21hdGNoYSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xufVxuXG4jc2VzYW1lIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG59XG5cbiNtb2NoaSB7XG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xufVxuXG4jY29udGFpbmVyLmNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCByZ2IoMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgLjgpICk7IFxufVxuXG4jY29udGFjdC1tYWluLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICBnYXA6IDQwcHg7XG59XG4jY29udGFjdC1tZXNzYWdlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNjb250YWN0LW1lc3NhZ2UgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xuICAgIGNvbG9yOiAjRDM5RTBEO1xuICAgIGZvbnQtc2l6ZTogNThweDtcbn1cblxuI2NvbnRhY3QtbWVzc2FnZSBhIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogI0QzOUUwRDtcbiAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xufVxuXG4jY29udGFjdC1tZXNzYWdlIHAge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4jZm9ybS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmZvcm0ge1xuICAgIGhlaWdodDogNDU4cHg7XG4gICAgd2lkdGg6IDQ0NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodCcsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5mb3JtIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmZvcm0gaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjRDM5RTBEO1xuICAgIFxufVxuXG5mb3JtIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNEMzlFMEQ7XG59XG5cbiNzdWJtaXQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMCk7XG4gICAgZm9udC1mYW1pbHk6ICdHVC1XYWxzaGVpbS1SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC04ZGVnKTtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4jc3VibWl0OmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzExNztcbiAgICBjb2xvcjogI0ZGQzExNztcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbiNzdWJtaXQ6bm90KDpob3Zlcikge1xuICAgIHRyYW5zaXRpb246IGJvcmRlciAuNXMgZWFzZS1pbi1vdXQsIGNvbG9yIC41cyBlYXNlLWluLW91dCwgZm9udC1zaXplIC41cyBlYXNlLWluLW91dDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4jc3VibWl0OmFjdGl2ZSB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGNvbG9yIC4zcyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTE3O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI2ZpcnN0LW5hbWUsICNsYXN0LW5hbWUsIGxhYmVsLCAjcGhvbmUge1xuICAgIHdpZHRoOiAyNDBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsNENBQWdEO0FBQ3BEO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsNENBQXdDO0FBQzVDO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsNENBQWlEO0FBQ3JEO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsNENBQXlDO0FBQzdDO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsNENBQWtEO0FBQ3REO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsNENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDhEQUE4RDtJQUM5RCx3REFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JB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QWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0ZBQW9GO0lBQ3BGLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRFQUE0RTtJQUM1RSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tYmctY29sb3I6ICMzMzM1MzM7XFxuICAgIC0tc2Vjb25kYXJ5LWJnLWNvbG9yOiAjMjQyNDIzXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLUxpZ2h0LU9ibGlxdWUnO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9HVC1XYWxzaGVpbS1MaWdodC1PYmxpcXVlLm90Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLUxpZ2h0JztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tTGlnaHQub3RmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTWVkaXVtLU9ibGlxdWUnO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9HVC1XYWxzaGVpbS1NZWRpdW0tT2JsaXF1ZS5vdGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1NZWRpdW0nO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9HVC1XYWxzaGVpbS1NZWRpdW0ub3RmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJztcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvR1QtV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlLm90Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXInO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9HVC1XYWxzaGVpbS1SZWd1bGFyLm90Zik7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxMjBweCwgMTB2aCkgOTB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA0cHgsIDUwdncpIG1pbm1heCg0MDBweCwgNTB2dyk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE2cHggMTZweCB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBtYXgtd2lkdGg6IDcxOHB4O1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxufVxcblxcbm5hdiBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIG1heC13aWR0aDogMTYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbiAgICBmb250LWZhbWlseTogJ0dULVdhbHNoZWltLVJlZ3VsYXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtOGRlZyk7XFxufVxcblxcbm5hdiBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkMxMTc7XFxuICAgIGNvbG9yOiAjRkZDMTE3O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbm5hdiBidXR0b246bm90KDpob3Zlcikge1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxubmF2IGJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCBmb3J3YXJkcywgY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTE3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNjb250YWluZXIuaG9tZSB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDRweCwgMjB2dykgbWlubWF4KDk4MHB4LCA4MHZ3KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAuNSkgKTsgXFxufVxcblxcbiNhYm91dC1zZWN0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2Fib3V0LXdyYXBwZXIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhYm91dC13cmFwcGVyIGgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTMwJTtcXG4gICAgbWF4LXdpZHRoOiAyMzBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG5oMiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uZ29sZCB7XFxuICAgIGNvbG9yOiAjRkZDMTE3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuI3N1c2hpLWhvbGRlciB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuXFxuI2NvbnRhaW5lci5tZW51IHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzUzMztcXG59XFxuXFxuI21lbnUge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgbWluLWhlaWdodDogMTUwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG59XFxuXFxuI21lbnUtbGVmdCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuXFxuXFxuI3NwZWNpYWxzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMiUgOTAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGREJENTtcXG59XFxuXFxuI3Nhc2hpbWkge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSwgMTQwcHgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA0NzBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI3Nhc2hpbWktaGVhZCB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICBjb2xvcjogIzI0MjQyMztcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6ICMzOTNiM2E7XFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGUgaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5tZW51LWluZm8tZGFyayB7XFxuICAgIGNvbG9yOiAjMjkyOTI5O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtd3JhcDogd3JhcDtcXG59XFxuXFxuI2hhbWFjaGkge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcbiNjcnVkbyB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG59XFxuXFxuI2NhcnBhY2NpbyB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuXFxuI3p1a2Uge1xcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XFxufVxcblxcbiNrYW5wYWNoaSB7XFxuICAgIGdyaWQtYXJlYTogNS8xLzYvMjtcXG59XFxuXFxuI2FsYmFjb3JlIHtcXG4gICAgZ3JpZC1hcmVhOiA2LzEvNy8yO1xcbn1cXG5cXG4jc2hpc28ge1xcbiAgICBncmlkLWFyZWE6IDcvMS84LzI7XFxufVxcblxcbiN0YXRha2kge1xcbiAgICBncmlkLWFyZWE6IDgvMS85LzI7XFxufVxcblxcbiN0aXJhZGl0byB7XFxuICAgIGdyaWQtYXJlYTogOS8xLzEwLzI7XFxufVxcblxcbiNtZW51LXJpZ2h0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFRERGO1xcbn1cXG5cXG4jcmlnaHQtd3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIlIDU2JSAyJSAzNiU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xcbn1cXG5cXG4jcGxhdGVzLWhlYWQge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuI3BsYXRlcyB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMTQwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNtYWl0YWtlIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG4jb2N0b3B1cyB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG59XFxuI2NvZCB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuI2NoaWNrZW4ge1xcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XFxufVxcbiNzYWJhIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzEvNi8yO1xcbn1cXG5cXG4jZGVzc2VydC1oZWFkIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGNvbG9yOiAjMjQyNDIzO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuI2Rlc3NlcnR7XFxuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMTQwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4jbWF0Y2hhIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4jc2VzYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbn1cXG5cXG4jbW9jaGkge1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxufVxcblxcbiNjb250YWluZXIuY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCByZ2IoMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgLjgpICk7IFxcbn1cXG5cXG4jY29udGFjdC1tYWluLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogODBweDtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG4jY29udGFjdC1tZXNzYWdlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1NZWRpdW0nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNjb250YWN0LW1lc3NhZ2UgaDIge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6ICNEMzlFMEQ7XFxuICAgIGZvbnQtc2l6ZTogNThweDtcXG59XFxuXFxuI2NvbnRhY3QtbWVzc2FnZSBhIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiAjRDM5RTBEO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xcbn1cXG5cXG4jY29udGFjdC1tZXNzYWdlIHAge1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4jZm9ybS13cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGhlaWdodDogNDU4cHg7XFxuICAgIHdpZHRoOiA0NDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTGlnaHQnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuZm9ybSBoMyB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5mb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNEMzlFMEQ7XFxuICAgIFxcbn1cXG5cXG5mb3JtIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI0QzOUUwRDtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWluLXdpZHRoOiAxNDBweDtcXG4gICAgbWF4LXdpZHRoOiAxNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnR1QtV2Fsc2hlaW0tUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC04ZGVnKTtcXG4gICAgbWFyZ2luLXRvcDogMTRweDtcXG59XFxuXFxuI3N1Ym1pdDpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuNXMgZWFzZS1pbi1vdXQsIGNvbG9yIC41cyBlYXNlLWluLW91dCwgZm9udC1zaXplIC41cyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzExNztcXG4gICAgY29sb3I6ICNGRkMxMTc7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI3N1Ym1pdDpub3QoOmhvdmVyKSB7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuNXMgZWFzZS1pbi1vdXQsIGNvbG9yIC41cyBlYXNlLWluLW91dCwgZm9udC1zaXplIC41cyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4jc3VibWl0OmFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMTc7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2ZpcnN0LW5hbWUsICNsYXN0LW5hbWUsIGxhYmVsLCAjcGhvbmUge1xcbiAgICB3aWR0aDogMjQwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgQ2hvcHN0aWNrcyBmcm9tICcuL2Fzc2V0cy9jaG9wc3RpY2tzLmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdExvYWQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRhY3QnKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Q2hvcHN0aWNrc30pYDtcbiAgICBjb25zdCBjb250YWN0TWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0TWFpbldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LW1haW4td3JhcHBlcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TWFpbldyYXBwZXIpO1xuICAgIGNvbnN0IGNvbnRhY3RNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdE1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LW1lc3NhZ2UnKTtcbiAgICBjb250YWN0TWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdE1lc3NhZ2UpO1xuICAgIGNvbnN0IGNvbnRhY3RIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb250YWN0SGVhZC50ZXh0Q29udGVudCA9ICdIdW5ncnkgZm9yIG1vcmU/JztcbiAgICBjb250YWN0TWVzc2FnZS5hcHBlbmRDaGlsZChjb250YWN0SGVhZCk7XG4gICAgY29uc3QgY29udGFjdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdE1haW4udGV4dENvbnRlbnQgPSAnTGV0XFwncyB0YWxrIGFib3V0IGl0ISc7XG4gICAgY29udGFjdE1lc3NhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdE1haW4pO1xuICAgIGNvbnN0IGNvbnRhY3RJbmZvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaW5mby13cmFwcGVyJyk7XG4gICAgY29udGFjdE1lc3NhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9XcmFwcGVyKTtcbiAgICBjb25zdCBjb250YWN0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29udGFjdEVtYWlsLnRleHRDb250ZW50ID0gJ3N1c2hpLmNvbnRhY3RAZ2lua2dvLmNvbSc7XG4gICAgY29udGFjdEVtYWlsLmhyZWYgPSAnbWFpbHRvOnN1c2hpLmNvbnRhY3RAZ2lua2dvLmNvbSdcbiAgICBjb250YWN0TWVzc2FnZS5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuICAgIGNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb250YWN0UGhvbmUudGV4dENvbnRlbnQgPSAnKDEyMyktNDU1LTQzMjEnO1xuICAgIGNvbnRhY3RNZXNzYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0td3JhcHBlcicpO1xuICAgIGNvbnRhY3RNYWluV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtV3JhcHBlcik7XG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuICAgIGNvbnN0IGZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ1ByZWZlciB0byBsZWF2ZSBhIG1lc3NhZ2U/IEdyZWF0ISc7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUxhYmVsKTtcbiAgICBjb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZpcnN0TmFtZS50eXBlID0gJ3RleHQnO1xuICAgIGZpcnN0TmFtZS5pZCA9ICdmaXJzdC1uYW1lJ1xuICAgIGNvbnN0IGZpcnN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBmaXJzdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdGaXJzdCBOYW1lJztcbiAgICBmaXJzdE5hbWVMYWJlbC5odG1sRm9yID0gJ2ZpcnN0LW5hbWUnO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZpcnN0TmFtZUxhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmaXJzdE5hbWUpO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYXN0TmFtZS50eXBlID0gJ3RleHQnO1xuICAgIGxhc3ROYW1lLmlkID0gJ2xhc3QtbmFtZSdcbiAgICBjb25zdCBsYXN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYXN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ0xhc3QgTmFtZSc7XG4gICAgbGFzdE5hbWVMYWJlbC5odG1sRm9yID0gJ2xhc3QtbmFtZSc7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobGFzdE5hbWVMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobGFzdE5hbWUpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbWFpbC50eXBlID0gJ2VtYWlsJztcbiAgICBlbWFpbC5pZCA9ICdlbWFpbCdcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0UtbWFpbCc7XG4gICAgZW1haWxMYWJlbC5odG1sRm9yID0gJ2VtYWlsJztcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHBob25lLnR5cGUgPSAndGVsJztcbiAgICBwaG9uZS5pZCA9ICdwaG9uZSdcbiAgICBjb25zdCBwaG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwaG9uZUxhYmVsLnRleHRDb250ZW50ID0gJ1Bob25lJztcbiAgICBwaG9uZUxhYmVsLmh0bWxGb3IgPSAncGhvbmUnO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHBob25lTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBtZXNzYWdlLmlkID0gJ21lc3NhZ2UnXG4gICAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBtZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSAnTWVzc2FnZSc7XG4gICAgbWVzc2FnZUxhYmVsLmh0bWxGb3IgPSAnbWVzc2FnZSc7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuaWQgPSAnc3VibWl0JztcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGNvbnN0IHRoYW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGhhbmtzLnRleHRDb250ZW50ID0gJ1dlXFwnbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgd2UgY2FuISc7XG4gICAgZW1haWwucGF0dGVybiA9PSAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xuICAgIGNvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgIFxuICAgIH0pO1xuICAgIFxuXG59ICAgICBcbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBTdXNoaSBmcm9tICcuL2Fzc2V0cy9zdXNoaS5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdob21lJyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1N1c2hpfSlgO1xuICAgIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LXNlY3Rpb24nKTtcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBhYm91dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb25zY2lvdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc2Npb3VzLnRleHRDb250ZW50ID0gJyBjb25zY2lvdXMgZGVjaXNpb25zJztcbiAgICBjb25zdCBzdXN0YWluYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzdXN0YWluYWJsZS50ZXh0Q29udGVudCA9ICcgc3VzdGFpbmFibGUgZnV0dXJlJztcbiAgICBjb25zdCBtYWtpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWFraW5nLnRleHRDb250ZW50ID0gJ01ha2luZyAnO1xuICAgIGNvbnN0IGZvdXJBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHBlcmlvZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwZXJpb2QudGV4dENvbnRlbnQgPSAnLic7XG4gICAgZm91ckEudGV4dENvbnRlbnQgPSAnIGZvciBhJztcbiAgICBjb25zY2lvdXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnb2xkJyk7XG4gICAgc3VzdGFpbmFibGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnb2xkJyk7XG4gICAgYWJvdXRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtd3JhcHBlcicpO1xuICAgIGFib3V0VGl0bGUuYXBwZW5kQ2hpbGQobWFraW5nKTtcbiAgICBhYm91dFRpdGxlLmFwcGVuZENoaWxkKGNvbnNjaW91cyk7XG4gICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChmb3VyQSk7XG4gICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChzdXN0YWluYWJsZSk7XG4gICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChwZXJpb2QpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xuICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dFdyYXBwZXIpO1xuICAgIGFib3V0V3JhcHBlci5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKTtcbiAgICBjb25zdCBzdXNoaUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1c2hpSG9sZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktaG9sZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1c2hpSG9sZGVyKTtcbiAgICBcbiAgICBcblxufSIsImltcG9ydCBob21lTG9hZCBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnVMb2FkIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdExvYWQgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vYXNzZXRzL2xvZ28td2l0aC1jaXJjbGUuc3ZnJztcblxuXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJyk7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtYnRuJyk7XG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28nKTtcbmxvZ28uc3JjID0gTG9nbztcblxud2luZG93Lm9ubG9hZCA9IGhvbWVMb2FkKCk7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaG9tZUxvYWQoKTtcbn0pO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1lbnVMb2FkKCk7XG59KVxuXG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRhY3RMb2FkKCk7XG59KSIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxvYWQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGNvbnN0IG1lbnVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUxlZnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWxlZnQnKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVMZWZ0KTtcbiAgICBjb25zdCBtZW51UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UmlnaHQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXJpZ2h0Jyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51UmlnaHQpO1xuICAgIGNvbnN0IG1lbnVSaWdodFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UmlnaHRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncmlnaHQtd3JhcHBlcicpO1xuICAgIG1lbnVSaWdodC5hcHBlbmRDaGlsZChtZW51UmlnaHRXcmFwcGVyKTtcbiAgICBjb25zdCBzcGVjaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWNpYWxzLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3BlY2lhbHMnKTtcbiAgICBtZW51TGVmdC5hcHBlbmRDaGlsZChzcGVjaWFscyk7XG4gICAgY29uc3Qgc2FzaGltaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhc2hpbWkuc2V0QXR0cmlidXRlKCdpZCcsICdzYXNoaW1pJyk7XG4gICAgc3BlY2lhbHMuYXBwZW5kQ2hpbGQoc2FzaGltaSk7XG4gICAgY29uc3Qgcm9sbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb2xscy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvbGxzJyk7XG4gICAgc3BlY2lhbHMuYXBwZW5kQ2hpbGQocm9sbHMpO1xuICAgIGNvbnN0IHBsYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXRlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXRlcycpO1xuICAgIG1lbnVSaWdodFdyYXBwZXIuYXBwZW5kQ2hpbGQocGxhdGVzKTtcbiAgICBjb25zdCBkZXNzZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgO1xuICAgIGRlc3NlcnQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNzZXJ0Jyk7XG4gICAgbWVudVJpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZChkZXNzZXJ0KTtcbiAgICAvLyBjb25zdCBzYXNoaW1pUHJpY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gc2FzaGltaVByaWNlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nhc2hpbWktcHJpY2VzJyk7XG4gICAgLy8gc3BlY2lhbHMuYXBwZW5kQ2hpbGQoc2FzaGltaVByaWNlcyk7XG4gICAgXG4gICAgY29uc3Qgc2FzaGltaUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHNhc2hpbWlIZWFkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1oZWFkJyk7XG4gICAgc2FzaGltaUhlYWQuc2V0QXR0cmlidXRlKCdpZCcsICdzYXNoaW1pLWhlYWQnKTtcbiAgICBzYXNoaW1pSGVhZC50ZXh0Q29udGVudCA9ICdTSUdOQVRVUkUgU0FTSElNSSc7XG4gICAgc3BlY2lhbHMuYXBwZW5kQ2hpbGQoc2FzaGltaUhlYWQpO1xuICAgIC8vIGNvbnN0IHJvbGxzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgLy8gcm9sbHNIZWFkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1oZWFkJyk7XG4gICAgLy8gcm9sbHNIZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCAncm9sbHMtaGVhZCcpO1xuICAgIC8vIHJvbGxzSGVhZC50ZXh0Q29udGVudCA9ICdTSUdOQVRVUkUgUk9MTFMnO1xuICAgIC8vIHNwZWNpYWxzLmFwcGVuZENoaWxkKHJvbGxzSGVhZCk7XG4gICAgY29uc3QgcGxhdGVzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGxhdGVzSGVhZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaGVhZCcpO1xuICAgIHBsYXRlc0hlYWQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF0ZXMtaGVhZCcpO1xuICAgIHBsYXRlc0hlYWQudGV4dENvbnRlbnQgPSAnU01BTEwgUExBVEVTJztcbiAgICBtZW51UmlnaHRXcmFwcGVyLmFwcGVuZENoaWxkKHBsYXRlc0hlYWQpO1xuICAgIGNvbnN0IGRlc3NlcnRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBkZXNzZXJ0SGVhZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaGVhZCcpO1xuICAgIGRlc3NlcnRIZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzc2VydC1oZWFkJyk7XG4gICAgZGVzc2VydEhlYWQudGV4dENvbnRlbnQgPSAnREVTU0VSVCc7XG4gICAgbWVudVJpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZChkZXNzZXJ0SGVhZCk7XG5cbiAgICBjb25zdCBoYW1hY2hpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGFtYWNoaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQoaGFtYWNoaSk7XG5cbiAgICBjb25zdCBoYW1hY2hpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoYW1hY2hpVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBoYW1hY2hpVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdoYW1hY2hpLXRpdGxlJyk7XG4gICAgaGFtYWNoaS5hcHBlbmRDaGlsZChoYW1hY2hpVGl0bGUpO1xuXG4gICAgY29uc3QgaGFtYWNoaU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhhbWFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgaGFtYWNoaU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdoYW1hY2hpLW5hbWUnKTtcbiAgICBoYW1hY2hpTmFtZS50ZXh0Q29udGVudCA9ICdIQU1BQ0hJIFNJWlpMRSonXG4gICAgaGFtYWNoaVRpdGxlLmFwcGVuZENoaWxkKGhhbWFjaGlOYW1lKTtcblxuICAgIGNvbnN0IGhhbWFjaGlQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGFtYWNoaVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBoYW1hY2hpUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdoYW1hY2hpLXByaWNlJyk7XG4gICAgaGFtYWNoaVByaWNlLnRleHRDb250ZW50ID0gJzIzJ1xuICAgIGhhbWFjaGlUaXRsZS5hcHBlbmRDaGlsZChoYW1hY2hpUHJpY2UpO1xuXG4gICAgY29uc3QgaGFtYWNoaUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaGFtYWNoaUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGhhbWFjaGlJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS1pbmZvJyk7XG4gICAgaGFtYWNoaUluZm8udGV4dENvbnRlbnQgPSAnSG90IG9pbCwgZnJlc2ggZ2luZ2VyLCBnYXJsaWMsIGNoaXZlLCBwb256dSwgYWxlcHBvIHBlcHBlcidcbiAgICBoYW1hY2hpLmFwcGVuZENoaWxkKGhhbWFjaGlJbmZvKTtcblxuICAgIGNvbnN0IGNydWRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3J1ZG8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGNydWRvKTtcblxuICAgIGNvbnN0IGNydWRvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcnVkb1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgY3J1ZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NydWRvLXRpdGxlJyk7XG4gICAgY3J1ZG8uYXBwZW5kQ2hpbGQoY3J1ZG9UaXRsZSk7XG5cbiAgICBjb25zdCBjcnVkb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNydWRvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGNydWRvTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NydWRvLW5hbWUnKTtcbiAgICBjcnVkb05hbWUudGV4dENvbnRlbnQgPSAnS0lORyBTQUxNT04gQ1JVRE8qJ1xuICAgIGNydWRvVGl0bGUuYXBwZW5kQ2hpbGQoY3J1ZG9OYW1lKTtcblxuICAgIGNvbnN0IGNydWRvUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNydWRvUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGNydWRvUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby1wcmljZScpO1xuICAgIGNydWRvUHJpY2UudGV4dENvbnRlbnQgPSAnMjMnXG4gICAgY3J1ZG9UaXRsZS5hcHBlbmRDaGlsZChjcnVkb1ByaWNlKTtcblxuICAgIGNvbnN0IGNydWRvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjcnVkb0luZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGNydWRvSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NydWRvLWluZm8nKTtcbiAgICBjcnVkb0luZm8udGV4dENvbnRlbnQgPSAnV2hpdGUgdHJ1ZmZsZSBwb256dSwgY2hlcnJ5IHRvbWF0bywgc2VhIHNhbHQnXG4gICAgY3J1ZG8uYXBwZW5kQ2hpbGQoY3J1ZG9JbmZvKTtcblxuICAgIGNvbnN0IGNhcnBhY2NpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcnBhY2Npby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQoY2FycGFjY2lvKTtcblxuICAgIGNvbnN0IGNhcnBhY2Npb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FycGFjY2lvVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBjYXJwYWNjaW9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcnBhY2Npby10aXRsZScpO1xuICAgIGNhcnBhY2Npby5hcHBlbmRDaGlsZChjYXJwYWNjaW9UaXRsZSk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjYXJwYWNjaW9OYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgY2FycGFjY2lvTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcnBhY2Npby1uYW1lJyk7XG4gICAgY2FycGFjY2lvTmFtZS50ZXh0Q29udGVudCA9ICdPQ1RPUFVTIENBUlBBQ0NJTydcbiAgICBjYXJwYWNjaW9UaXRsZS5hcHBlbmRDaGlsZChjYXJwYWNjaW9OYW1lKTtcblxuICAgIGNvbnN0IGNhcnBhY2Npb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjYXJwYWNjaW9QcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgY2FycGFjY2lvUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJwYWNjaW8tcHJpY2UnKTtcbiAgICBjYXJwYWNjaW9QcmljZS50ZXh0Q29udGVudCA9ICcyMidcbiAgICBjYXJwYWNjaW9UaXRsZS5hcHBlbmRDaGlsZChjYXJwYWNjaW9QcmljZSk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNhcnBhY2Npb0luZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGNhcnBhY2Npb0luZm8uc2V0QXR0cmlidXRlKCdpZCcsICdjYXJwYWNjaW8taW5mbycpO1xuICAgIGNhcnBhY2Npb0luZm8udGV4dENvbnRlbnQgPSAnTGVtb24gdmluYWlncmV0dGUsIGNyaXNweSBjYXBlcnMsIHRvbWF0bywgZnJlc2ggaGVyYnMnXG4gICAgY2FycGFjY2lvLmFwcGVuZENoaWxkKGNhcnBhY2Npb0luZm8pO1xuXG4gICAgY29uc3QgenVrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHp1a2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKHp1a2UpO1xuXG4gICAgY29uc3QgenVrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgenVrZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgenVrZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnenVrZS10aXRsZScpO1xuICAgIHp1a2UuYXBwZW5kQ2hpbGQoenVrZVRpdGxlKTtcblxuICAgIGNvbnN0IHp1a2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB6dWtlTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIHp1a2VOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnenVrZS1uYW1lJyk7XG4gICAgenVrZU5hbWUudGV4dENvbnRlbnQgPSAnVFVOQSBaVUtFKidcbiAgICB6dWtlVGl0bGUuYXBwZW5kQ2hpbGQoenVrZU5hbWUpO1xuXG4gICAgY29uc3QgenVrZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB6dWtlUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIHp1a2VQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3p1a2UtcHJpY2UnKTtcbiAgICB6dWtlUHJpY2UudGV4dENvbnRlbnQgPSAnMjQnXG4gICAgenVrZVRpdGxlLmFwcGVuZENoaWxkKHp1a2VQcmljZSk7XG5cbiAgICBjb25zdCB6dWtlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB6dWtlSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgenVrZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICd6dWtlLWluZm8nKTtcbiAgICB6dWtlSW5mby50ZXh0Q29udGVudCA9ICdTb3kgbWFyaW5hdGVkIGJpZ2V5ZSB0dW5hLCBzZXNhbWUgb25pb24gcG9uenUsIGZyaWVkIGdhcmxpYywgY2hpdmUnXG4gICAgenVrZS5hcHBlbmRDaGlsZCh6dWtlSW5mbyk7XG5cbiAgICBjb25zdCBrYW5wYWNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGthbnBhY2hpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZChrYW5wYWNoaSk7XG5cbiAgICBjb25zdCBrYW5wYWNoaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2FucGFjaGlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIGthbnBhY2hpVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdrYW5wYWNoaS10aXRsZScpO1xuICAgIGthbnBhY2hpLmFwcGVuZENoaWxkKGthbnBhY2hpVGl0bGUpO1xuXG4gICAgY29uc3Qga2FucGFjaGlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBrYW5wYWNoaU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBrYW5wYWNoaU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdrYW5wYWNoaS1uYW1lJyk7XG4gICAga2FucGFjaGlOYW1lLnRleHRDb250ZW50ID0gJ0tBTlBBQ0hJIEFHVUFDSElMRSonXG4gICAga2FucGFjaGlUaXRsZS5hcHBlbmRDaGlsZChrYW5wYWNoaU5hbWUpO1xuXG4gICAgY29uc3Qga2FucGFjaGlQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAga2FucGFjaGlQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAga2FucGFjaGlQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2thbnBhY2hpLXByaWNlJyk7XG4gICAga2FucGFjaGlQcmljZS50ZXh0Q29udGVudCA9ICcyMydcbiAgICBrYW5wYWNoaVRpdGxlLmFwcGVuZENoaWxkKGthbnBhY2hpUHJpY2UpO1xuXG4gICAgY29uc3Qga2FucGFjaGlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGthbnBhY2hpSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAga2FucGFjaGlJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAna2FucGFjaGktaW5mbycpO1xuICAgIGthbnBhY2hpSW5mby50ZXh0Q29udGVudCA9ICdDdWN1bWJlci1jaWxhbnRybyBhZ3VhY2hpbGUsIHBvbWVncmFuYXRlLCBzZXJyYW5vLCBjaGFycmVkIG9yYW5nZSwgb2xpdmUgb2lsLCBzZWEgc2FsdCdcbiAgICBrYW5wYWNoaS5hcHBlbmRDaGlsZChrYW5wYWNoaUluZm8pO1xuXG4gICAgY29uc3QgYWxiYWNvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbGJhY29yZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQoYWxiYWNvcmUpO1xuXG4gICAgY29uc3QgYWxiYWNvcmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFsYmFjb3JlVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBhbGJhY29yZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxiYWNvcmUtdGl0bGUnKTtcbiAgICBhbGJhY29yZS5hcHBlbmRDaGlsZChhbGJhY29yZVRpdGxlKTtcblxuICAgIGNvbnN0IGFsYmFjb3JlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYWxiYWNvcmVOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgYWxiYWNvcmVOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxiYWNvcmUtbmFtZScpO1xuICAgIGFsYmFjb3JlTmFtZS50ZXh0Q29udGVudCA9ICdBTEJBQ09SRSBDUklTUFkgT05JT04qJ1xuICAgIGFsYmFjb3JlVGl0bGUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVOYW1lKTtcblxuICAgIGNvbnN0IGFsYmFjb3JlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFsYmFjb3JlUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGFsYmFjb3JlUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdhbGJhY29yZS1wcmljZScpO1xuICAgIGFsYmFjb3JlUHJpY2UudGV4dENvbnRlbnQgPSAnMjInXG4gICAgYWxiYWNvcmVUaXRsZS5hcHBlbmRDaGlsZChhbGJhY29yZVByaWNlKTtcblxuICAgIGNvbnN0IGFsYmFjb3JlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhbGJhY29yZUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGFsYmFjb3JlSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsYmFjb3JlLWluZm8nKTtcbiAgICBhbGJhY29yZUluZm8udGV4dENvbnRlbnQgPSAnU2VhcmVkIGFsYmFjb3JlLCBnYXJsaWMgYWlvbGksIHl1enUgcG9uenUsIGNyaXNweSBvbmlvbiwgY2hlcnZpbCdcbiAgICBhbGJhY29yZS5hcHBlbmRDaGlsZChhbGJhY29yZUluZm8pO1xuXG4gICAgY29uc3Qgc2hpc28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlzby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQoc2hpc28pO1xuXG4gICAgY29uc3Qgc2hpc29UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXNvVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBzaGlzb1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpc28tdGl0bGUnKTtcbiAgICBzaGlzby5hcHBlbmRDaGlsZChzaGlzb1RpdGxlKTtcblxuICAgIGNvbnN0IHNoaXNvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2hpc29OYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgc2hpc29OYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpc28tbmFtZScpO1xuICAgIHNoaXNvTmFtZS50ZXh0Q29udGVudCA9ICdTSElTTyBQTFVNIFNISVJPTUkqJ1xuICAgIHNoaXNvVGl0bGUuYXBwZW5kQ2hpbGQoc2hpc29OYW1lKTtcblxuICAgIGNvbnN0IHNoaXNvUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNoaXNvUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIHNoaXNvUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlzby1wcmljZScpO1xuICAgIHNoaXNvUHJpY2UudGV4dENvbnRlbnQgPSAnMjInXG4gICAgc2hpc29UaXRsZS5hcHBlbmRDaGlsZChzaGlzb1ByaWNlKTtcblxuICAgIGNvbnN0IHNoaXNvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzaGlzb0luZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIHNoaXNvSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXNvLWluZm8nKTtcbiAgICBzaGlzb0luZm8udGV4dENvbnRlbnQgPSAnV2hpdGVmaXNoLCB5dXp1IHBvbnp1LCBvbGl2ZSBvaWwsIHVtZWJvc2hpLCBzaGlzbydcbiAgICBzaGlzby5hcHBlbmRDaGlsZChzaGlzb0luZm8pO1xuXG4gICAgY29uc3QgdGF0YWtpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGF0YWtpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZCh0YXRha2kpO1xuXG4gICAgY29uc3QgdGF0YWtpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXRha2lUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHRhdGFraVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGF0YWtpLXRpdGxlJyk7XG4gICAgdGF0YWtpLmFwcGVuZENoaWxkKHRhdGFraVRpdGxlKTtcblxuICAgIGNvbnN0IHRhdGFraU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRhdGFraU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICB0YXRha2lOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGF0YWtpLW5hbWUnKTtcbiAgICB0YXRha2lOYW1lLnRleHRDb250ZW50ID0gJ1RVTkEgVEFUQUtJKidcbiAgICB0YXRha2lUaXRsZS5hcHBlbmRDaGlsZCh0YXRha2lOYW1lKTtcblxuICAgIGNvbnN0IHRhdGFraVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0YXRha2lQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgdGF0YWtpUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICd0YXRha2ktcHJpY2UnKTtcbiAgICB0YXRha2lQcmljZS50ZXh0Q29udGVudCA9ICcyNCdcbiAgICB0YXRha2lUaXRsZS5hcHBlbmRDaGlsZCh0YXRha2lQcmljZSk7XG5cbiAgICBjb25zdCB0YXRha2lJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRhdGFraUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIHRhdGFraUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICd0YXRha2ktaW5mbycpO1xuICAgIHRhdGFraUluZm8udGV4dENvbnRlbnQgPSAnU2VzYW1lIGNydXN0ZWQgYmlnZXllIHR1bmEsIGFwcGxlIG11c3RhcmQgZHJlc3NpbmcsIGdyZWVuIG9uaW9uJ1xuICAgIHRhdGFraS5hcHBlbmRDaGlsZCh0YXRha2lJbmZvKTtcblxuICAgIGNvbnN0IHRpcmFkaXRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlyYWRpdG8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKHRpcmFkaXRvKTtcblxuICAgIGNvbnN0IHRpcmFkaXRvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXJhZGl0b1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgdGlyYWRpdG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpcmFkaXRvLXRpdGxlJyk7XG4gICAgdGlyYWRpdG8uYXBwZW5kQ2hpbGQodGlyYWRpdG9UaXRsZSk7XG5cbiAgICBjb25zdCB0aXJhZGl0b05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpcmFkaXRvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIHRpcmFkaXRvTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpcmFkaXRvLW5hbWUnKTtcbiAgICB0aXJhZGl0b05hbWUudGV4dENvbnRlbnQgPSAnV0hJVEVGSVNIIFRJUkFESVRPKidcbiAgICB0aXJhZGl0b1RpdGxlLmFwcGVuZENoaWxkKHRpcmFkaXRvTmFtZSk7XG5cbiAgICBjb25zdCB0aXJhZGl0b1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXJhZGl0b1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICB0aXJhZGl0b1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGlyYWRpdG8tcHJpY2UnKTtcbiAgICB0aXJhZGl0b1ByaWNlLnRleHRDb250ZW50ID0gJzIyJ1xuICAgIHRpcmFkaXRvVGl0bGUuYXBwZW5kQ2hpbGQodGlyYWRpdG9QcmljZSk7XG5cbiAgICBjb25zdCB0aXJhZGl0b0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGlyYWRpdG9JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICB0aXJhZGl0b0luZm8uc2V0QXR0cmlidXRlKCdpZCcsICd0aXJhZGl0by1pbmZvJyk7XG4gICAgdGlyYWRpdG9JbmZvLnRleHRDb250ZW50ID0gJ0FqaSBhbWFyaWxsbyBjaGlsaSB0aWdlcnMgbWlsaywgbWFuZ28sIGdvY2h1Z2FydSBvaWwsIGJhc2lsLCBzZWEgc2FsdCdcbiAgICB0aXJhZGl0by5hcHBlbmRDaGlsZCh0aXJhZGl0b0luZm8pO1xuXG4gICAgY29uc3QgbWFpdGFrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haXRha2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBwbGF0ZXMuYXBwZW5kQ2hpbGQobWFpdGFrZSk7XG5cbiAgICBjb25zdCBtYWl0YWtlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWl0YWtlVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBtYWl0YWtlVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdtYWl0YWtlLXRpdGxlJyk7XG4gICAgbWFpdGFrZS5hcHBlbmRDaGlsZChtYWl0YWtlVGl0bGUpO1xuXG4gICAgY29uc3QgbWFpdGFrZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1haXRha2VOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgbWFpdGFrZU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdtYWl0YWtlLW5hbWUnKTtcbiAgICBtYWl0YWtlTmFtZS50ZXh0Q29udGVudCA9ICdST0FTVEVEIE1BSVRBS0UnXG4gICAgbWFpdGFrZVRpdGxlLmFwcGVuZENoaWxkKG1haXRha2VOYW1lKTtcblxuICAgIGNvbnN0IG1haXRha2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWFpdGFrZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBtYWl0YWtlUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtYWl0YWtlLXByaWNlJyk7XG4gICAgbWFpdGFrZVByaWNlLnRleHRDb250ZW50ID0gJzE0J1xuICAgIG1haXRha2VUaXRsZS5hcHBlbmRDaGlsZChtYWl0YWtlUHJpY2UpO1xuXG4gICAgY29uc3QgbWFpdGFrZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWFpdGFrZUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIG1haXRha2VJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS1pbmZvJyk7XG4gICAgbWFpdGFrZUluZm8udGV4dENvbnRlbnQgPSAnV2hvbGUgcm9hc3RlZCBtYWl0YWtlIG11c2hyb29tLCB3YWthbWUgYnV0dGVyLCBjaGl2ZSwgbGVtb24nXG4gICAgbWFpdGFrZS5hcHBlbmRDaGlsZChtYWl0YWtlSW5mbyk7XG5cbiAgICBjb25zdCBvY3RvcHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb2N0b3B1cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHBsYXRlcy5hcHBlbmRDaGlsZChvY3RvcHVzKTtcblxuICAgIGNvbnN0IG9jdG9wdXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9jdG9wdXNUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIG9jdG9wdXNUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29jdG9wdXMtdGl0bGUnKTtcbiAgICBvY3RvcHVzLmFwcGVuZENoaWxkKG9jdG9wdXNUaXRsZSk7XG5cbiAgICBjb25zdCBvY3RvcHVzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgb2N0b3B1c05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBvY3RvcHVzTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29jdG9wdXMtbmFtZScpO1xuICAgIG9jdG9wdXNOYW1lLnRleHRDb250ZW50ID0gJ0dSSUxMRUQgT0NUT1BVUydcbiAgICBvY3RvcHVzVGl0bGUuYXBwZW5kQ2hpbGQob2N0b3B1c05hbWUpO1xuXG4gICAgY29uc3Qgb2N0b3B1c1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBvY3RvcHVzUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIG9jdG9wdXNQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29jdG9wdXMtcHJpY2UnKTtcbiAgICBvY3RvcHVzUHJpY2UudGV4dENvbnRlbnQgPSAnMjQnXG4gICAgb2N0b3B1c1RpdGxlLmFwcGVuZENoaWxkKG9jdG9wdXNQcmljZSk7XG5cbiAgICBjb25zdCBvY3RvcHVzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBvY3RvcHVzSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgb2N0b3B1c0luZm8uc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLWluZm8nKTtcbiAgICBvY3RvcHVzSW5mby50ZXh0Q29udGVudCA9ICdSb2FzdGVkIGNhdWxpZmxvd2VyIHN0ZWFrLCBibGlzdGVyZWQgY2hlcnJ5IHRvbWF0b2VzLCBhamkgdmVyZGUsIGNoZXJ2aWwnXG4gICAgb2N0b3B1cy5hcHBlbmRDaGlsZChvY3RvcHVzSW5mbyk7XG5cbiAgICBjb25zdCBjb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBwbGF0ZXMuYXBwZW5kQ2hpbGQoY29kKTtcblxuICAgIGNvbnN0IGNvZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29kVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBjb2RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvZC10aXRsZScpO1xuICAgIGNvZC5hcHBlbmRDaGlsZChjb2RUaXRsZSk7XG5cbiAgICBjb25zdCBjb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb2ROYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgY29kTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvZC1uYW1lJyk7XG4gICAgY29kTmFtZS50ZXh0Q29udGVudCA9ICdNSVNPIEdMQVpFRCBCTEFDSyBDT0QnXG4gICAgY29kVGl0bGUuYXBwZW5kQ2hpbGQoY29kTmFtZSk7XG5cbiAgICBjb25zdCBjb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29kUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGNvZFByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29kLXByaWNlJyk7XG4gICAgY29kUHJpY2UudGV4dENvbnRlbnQgPSAnMTgnXG4gICAgY29kVGl0bGUuYXBwZW5kQ2hpbGQoY29kUHJpY2UpO1xuXG4gICAgY29uc3QgY29kSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb2RJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBjb2RJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29kLWluZm8nKTtcbiAgICBjb2RJbmZvLnRleHRDb250ZW50ID0gJ0Jyb2lsZWQgYmxhY2sgY29kLCBvcmFuZ2UsIGdpbmdlciwgZ3JlZW4gb25pb24sIHl1enUgbWlzbywgZ29jaHVnYXJ1IG9pbCdcbiAgICBjb2QuYXBwZW5kQ2hpbGQoY29kSW5mbyk7XG5cbiAgICBjb25zdCBjaGlja2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hpY2tlbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHBsYXRlcy5hcHBlbmRDaGlsZChjaGlja2VuKTtcblxuICAgIGNvbnN0IGNoaWNrZW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoaWNrZW5UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIGNoaWNrZW5UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoaWNrZW4tdGl0bGUnKTtcbiAgICBjaGlja2VuLmFwcGVuZENoaWxkKGNoaWNrZW5UaXRsZSk7XG5cbiAgICBjb25zdCBjaGlja2VuTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2hpY2tlbk5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBjaGlja2VuTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoaWNrZW4tbmFtZScpO1xuICAgIGNoaWNrZW5OYW1lLnRleHRDb250ZW50ID0gJ0NISUNLRU4gS0FSQUFHRSdcbiAgICBjaGlja2VuVGl0bGUuYXBwZW5kQ2hpbGQoY2hpY2tlbk5hbWUpO1xuXG4gICAgY29uc3QgY2hpY2tlblByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjaGlja2VuUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGNoaWNrZW5QcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoaWNrZW4tcHJpY2UnKTtcbiAgICBjaGlja2VuUHJpY2UudGV4dENvbnRlbnQgPSAnMTInXG4gICAgY2hpY2tlblRpdGxlLmFwcGVuZENoaWxkKGNoaWNrZW5QcmljZSk7XG5cbiAgICBjb25zdCBjaGlja2VuSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjaGlja2VuSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgY2hpY2tlbkluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLWluZm8nKTtcbiAgICBjaGlja2VuSW5mby50ZXh0Q29udGVudCA9ICdDcmlzcHkgZnJpZWQgbWFyaW5hdGVkIGNoaWNrZW4sIGRpbGwga2V3cGllIGFpb2xpLCBsZW1vbidcbiAgICBjaGlja2VuLmFwcGVuZENoaWxkKGNoaWNrZW5JbmZvKTtcblxuICAgIGNvbnN0IHNhYmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYWJhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgcGxhdGVzLmFwcGVuZENoaWxkKHNhYmEpO1xuXG4gICAgY29uc3Qgc2FiYVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2FiYVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgc2FiYVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FiYS10aXRsZScpO1xuICAgIHNhYmEuYXBwZW5kQ2hpbGQoc2FiYVRpdGxlKTtcblxuICAgIGNvbnN0IHNhYmFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzYWJhTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIHNhYmFOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FiYS1uYW1lJyk7XG4gICAgc2FiYU5hbWUudGV4dENvbnRlbnQgPSAnR1JJTExFRCBTQUJBJ1xuICAgIHNhYmFUaXRsZS5hcHBlbmRDaGlsZChzYWJhTmFtZSk7XG5cbiAgICBjb25zdCBzYWJhUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNhYmFQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgc2FiYVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FiYS1wcmljZScpO1xuICAgIHNhYmFQcmljZS50ZXh0Q29udGVudCA9ICcxNidcbiAgICBzYWJhVGl0bGUuYXBwZW5kQ2hpbGQoc2FiYVByaWNlKTtcblxuICAgIGNvbnN0IHNhYmFJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNhYmFJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBzYWJhSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtaW5mbycpO1xuICAgIHNhYmFJbmZvLnRleHRDb250ZW50ID0gJ0JsaXN0ZXJlZCBmaWxldCBvZiBtYWNrZXJlbCwgbW9taWppIG9yb3NoaSwgcGlja2xlZCBtdXN0YXJkIHNlZWQsIGxlbW9uIGFzaCwgZ3JlZW4gb25pb24nXG4gICAgc2FiYS5hcHBlbmRDaGlsZChzYWJhSW5mbyk7XG5cbiAgICBjb25zdCBtYXRjaGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXRjaGEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKG1hdGNoYSk7XG5cbiAgICBjb25zdCBtYXRjaGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hdGNoYVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbWF0Y2hhVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdtYXRjaGEtdGl0bGUnKTtcbiAgICBtYXRjaGEuYXBwZW5kQ2hpbGQobWF0Y2hhVGl0bGUpO1xuXG4gICAgY29uc3QgbWF0Y2hhTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWF0Y2hhTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIG1hdGNoYU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdtYXRjaGEtbmFtZScpO1xuICAgIG1hdGNoYU5hbWUudGV4dENvbnRlbnQgPSAnTUFUQ0hBIFBBTk5BIENPVFRBJ1xuICAgIG1hdGNoYVRpdGxlLmFwcGVuZENoaWxkKG1hdGNoYU5hbWUpO1xuXG4gICAgY29uc3QgbWF0Y2hhUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1hdGNoYVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBtYXRjaGFQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21hdGNoYS1wcmljZScpO1xuICAgIG1hdGNoYVByaWNlLnRleHRDb250ZW50ID0gJzknXG4gICAgbWF0Y2hhVGl0bGUuYXBwZW5kQ2hpbGQobWF0Y2hhUHJpY2UpO1xuXG4gICAgY29uc3QgbWF0Y2hhSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtYXRjaGFJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBtYXRjaGFJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWF0Y2hhLWluZm8nKTtcbiAgICBtYXRjaGFJbmZvLnRleHRDb250ZW50ID0gJ1doaXRlIGNob2NvbGF0ZSBjcnVtYiwgZnJlc2ggYmVycmllcydcbiAgICBtYXRjaGEuYXBwZW5kQ2hpbGQobWF0Y2hhSW5mbyk7XG5cbiAgICBjb25zdCBzZXNhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXNhbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKHNlc2FtZSk7XG5cbiAgICBjb25zdCBzZXNhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlc2FtZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgc2VzYW1lVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdzZXNhbWUtdGl0bGUnKTtcbiAgICBzZXNhbWUuYXBwZW5kQ2hpbGQoc2VzYW1lVGl0bGUpO1xuXG4gICAgY29uc3Qgc2VzYW1lTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2VzYW1lTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIHNlc2FtZU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdzZXNhbWUtbmFtZScpO1xuICAgIHNlc2FtZU5hbWUudGV4dENvbnRlbnQgPSAnQkxBQ0sgU0VTQU1FIEJST1dOSUUnXG4gICAgc2VzYW1lVGl0bGUuYXBwZW5kQ2hpbGQoc2VzYW1lTmFtZSk7XG5cbiAgICBjb25zdCBzZXNhbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2VzYW1lUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIHNlc2FtZVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VzYW1lLXByaWNlJyk7XG4gICAgc2VzYW1lUHJpY2UudGV4dENvbnRlbnQgPSAnMTAnXG4gICAgc2VzYW1lVGl0bGUuYXBwZW5kQ2hpbGQoc2VzYW1lUHJpY2UpO1xuXG4gICAgY29uc3Qgc2VzYW1lSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzZXNhbWVJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBzZXNhbWVJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VzYW1lLWluZm8nKTtcbiAgICBzZXNhbWVJbmZvLnRleHRDb250ZW50ID0gJ1ZhbmlsbGEgaWNlIGNyZWFtLCBmcmVzaCBiZXJyaWVzLCBibGFjayBzZXNhbWUnXG4gICAgc2VzYW1lLmFwcGVuZENoaWxkKHNlc2FtZUluZm8pO1xuXG4gICAgY29uc3QgbW9jaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2NoaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQobW9jaGkpO1xuXG4gICAgY29uc3QgbW9jaGlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vY2hpVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBtb2NoaVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9jaGktdGl0bGUnKTtcbiAgICBtb2NoaS5hcHBlbmRDaGlsZChtb2NoaVRpdGxlKTtcblxuICAgIGNvbnN0IG1vY2hpTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbW9jaGlOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgbW9jaGlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9jaGktbmFtZScpO1xuICAgIG1vY2hpTmFtZS50ZXh0Q29udGVudCA9ICdTQVNBIE1PQ0hJJ1xuICAgIG1vY2hpVGl0bGUuYXBwZW5kQ2hpbGQobW9jaGlOYW1lKTtcblxuICAgIGNvbnN0IG1vY2hpUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1vY2hpUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIG1vY2hpUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtb2NoaS1wcmljZScpO1xuICAgIG1vY2hpUHJpY2UudGV4dENvbnRlbnQgPSAnMTInXG4gICAgbW9jaGlUaXRsZS5hcHBlbmRDaGlsZChtb2NoaVByaWNlKTtcblxuICAgIGNvbnN0IG1vY2hpSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtb2NoaUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIG1vY2hpSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vY2hpLWluZm8nKTtcbiAgICBtb2NoaUluZm8udGV4dENvbnRlbnQgPSAnU2FzYSBiYW1ib28gbGVhZiwgeW9tb2dpLCBraW5ha28gZmxvdXIgJ1xuICAgIG1vY2hpLmFwcGVuZENoaWxkKG1vY2hpSW5mbyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9