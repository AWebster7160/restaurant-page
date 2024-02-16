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
    min-width: 140px;
    max-width: 140px;
    background-color: transparent;
    color: white;
    outline: 1px solid transparent;
    box-shadow: 0 0 1px rgba(255,255,255,0);
    font-family: 'GT-Walsheim-Regular', monospace;
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
    font-family: 'Walsheim-Regular';
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
    font-family: 'Walsheim-Regular-Oblique';
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
    font-family: 'Walsheim-Medium';
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100vw;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    mask-image: linear-gradient(to bottom left, rgba(0, 0, 0, 1), rgba(0, 0, 0, .5) ); 
}

#contact-message {
    font-family: 'Walsheim-Medium';
    color: whitesmoke;
    font-size: 18px;
}

#contact-message h2 {
    font-family: 'Walsheim-Regular-Oblique';
    color: #D39E0D;
    font-size: 58px;
}

#contact-message a {
    font-family: 'Walsheim-Regular-Oblique';
    color: #D39E0D;
    margin-right: 110px;
}

#contact-message p {
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 24px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --main-bg-color: #333533;\n    --secondary-bg-color: #242423\n}\n\n@font-face {\n    font-family: 'Walsheim-Light-Oblique';\n    src: url(./assets/GT-Walsheim-Light-Oblique.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Light';\n    src: url(./assets/GT-Walsheim-Light.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Medium-Oblique';\n    src: url(./assets/GT-Walsheim-Medium-Oblique.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Medium';\n    src: url(./assets/GT-Walsheim-Medium.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Regular-Oblique';\n    src: url(./assets/GT-Walsheim-Regular-Oblique.otf);\n}\n@font-face {\n    font-family: 'Walsheim-Regular';\n    src: url(./assets/GT-Walsheim-Regular.otf);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-rows: minmax(120px, 10vh) 90vh;\n    grid-template-columns: 100%;\n    overflow: hidden;\n    justify-content: start;\n    align-items: center;\n    \n    background-color: var(--main-bg-color);\n}\n\nheader {\n    grid-area: 1/1/2/2;\n    height: 120px;\n    width: 100%;\n    align-content: center;\n    justify-content: center;\n    background-color: var(--secondary-bg-color);\n    display: grid;\n    grid-template-rows: 100%;\n    grid-template-columns: minmax(304px, 50vw) minmax(400px, 50vw);\n    box-shadow: 0px 10px 16px 16px var(--secondary-bg-color);\n}\n\nheader img {\n    grid-area: 1/1/2/2;\n    align-self: center;\n    margin-left: 10px;\n}\n\nnav {\n    max-width: 718px;\n    grid-area: 1/2/2/3;\n    display: grid;\n    min-width: 400px;\n    grid-template-rows: auto;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    justify-items: end;\n    margin-right: 50px;\n}\n\nnav button {\n    height: 60px;\n    min-width: 140px;\n    max-width: 140px;\n    background-color: transparent;\n    color: white;\n    outline: 1px solid transparent;\n    box-shadow: 0 0 1px rgba(255,255,255,0);\n    font-family: 'GT-Walsheim-Regular', monospace;\n    font-size: 28px;\n    text-align: center;\n    vertical-align: middle;\n    border: 1px solid white;\n    transform: skewX(-8deg);\n}\n\nnav button:hover {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid #FFC117;\n    color: #FFC117;\n    font-size: 30px;\n}\n\nnav button:not(:hover) {\n    transition: border .5s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;\n    border: 1px solid white;\n    color: white;\n    font-size: 28px;\n}\n\nnav button:active {\n    transition: background-color .3s ease-in-out, color .3s ease-in-out;\n    background-color: #FFC117;\n    color: black;\n}\n\n#container.home {\n    grid-area: 2/1/3/2;\n    height: 100%;\n    display: grid;\n    grid-template-columns: minmax(304px, 20vw) minmax(980px, 80vw);\n    grid-template-rows: auto;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    mask-image: linear-gradient(to bottom left, rgba(0, 0, 0, 1), rgba(0, 0, 0, .5) ); \n}\n\n#about-section {\n    grid-area: 1/1/2/2;\n    height: 100%;\n    width: 100%;\n    align-content: center;\n    justify-content: center;\n    width: auto;\n    display: flex;\n    flex-direction: column;\n}\n\n#about-wrapper {\n    align-self: center;\n    justify-self: center;\n    width: 70%;\n    color: white;\n}\n\n#about-wrapper h2 {\n    font-family: 'Walsheim-Regular';\n    font-weight: lighter;\n    margin-top: -30%;\n    max-width: 230px;\n    letter-spacing: 2px;\n    font-size: 40px;\n}\n\nh2 span {\n    font-size: 32px;\n}\n\n.gold {\n    color: #FFC117;\n    font-weight: bold;\n    font-family: 'Walsheim-Regular-Oblique';\n    font-size: 40px;\n}\n\n#sushi-holder {\n    grid-area: 1/2/2/3;\n    min-height: 100%;\n    min-width: 100%;\n    \n}\n\n#container.menu {\n    height: 90vh;\n    width: 100vw;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    overflow: scroll;\n    overflow-x: scroll;\n    white-space: nowrap;\n    background-color: #333533;\n}\n\n#container.menu div {\n    /* border: 1px solid red; */\n}\n\n#menu {\n    flex: 0 0 auto;\n    margin-top: 40px;\n    margin-bottom: 60px;\n    width: 1000px;\n    min-height: 1500px;\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: 100%;\n    justify-content: center;\n    font-family: 'Walsheim-Medium';\n}\n\n#menu-left {\n    height: 100%;\n    width: 100%;\n    grid-area: 1/1/2/2;\n}\n\n\n\n#specials {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n    align-content: stretch;\n    grid-template-rows: 2% 90%;\n    grid-template-columns: 90%;\n    background-color: #CFDBD5;\n}\n\n#sashimi {\n    grid-area: 2/1/3/3;\n    display: grid;\n    grid-template-columns: 90%;\n    justify-content: center;\n    grid-template-rows: repeat(9, 140px);\n    height: 100%;\n    width: 470px;\n    margin-top: 10px;\n}\n\n#sashimi-head {\n    grid-area: 1/1/2/2;\n    font-size: 38px;\n    color: #242423;\n    align-self: flex-start;\n    margin-top: 30px;\n    margin-left: 20px\n}\n\n.menu-item {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: 100%;\n}\n\n.menu-item-title {\n    width: 100%;\n    display: flex;\n    align-items: flex-end;\n    flex-direction: row;\n    justify-content: space-between;\n    color: #393b3a;\n}\n\n.menu-item-title h3 {\n    margin: 0;\n}\n\n.menu-info-dark {\n    color: #292929;\n    font-size: 16px;\n    text-wrap: wrap;\n}\n\n#hamachi {\n    grid-area: 1/1/2/2;\n}\n\n#crudo {\n    grid-area: 2/1/3/2;\n}\n\n#carpaccio {\n    grid-area: 3/1/4/2;\n}\n\n#zuke {\n    grid-area: 4/1/5/2;\n}\n\n#kanpachi {\n    grid-area: 5/1/6/2;\n}\n\n#albacore {\n    grid-area: 6/1/7/2;\n}\n\n#shiso {\n    grid-area: 7/1/8/2;\n}\n\n#tataki {\n    grid-area: 8/1/9/2;\n}\n\n#tiradito {\n    grid-area: 9/1/10/2;\n}\n\n#menu-right {\n    height: 100%;\n    width: 100%;\n    grid-area: 1/2/2/3;\n    background-color: #E8EDDF;\n}\n\n#right-wrapper {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n    align-content: stretch;\n    grid-template-rows: 2% 56% 2% 36%;\n    grid-template-columns: 90%;\n}\n\n#plates-head {\n    grid-area: 1/1/2/2;\n    font-size: 38px;\n    align-self: flex-start;\n    margin-top: 30px;\n}\n\n#plates {\n    grid-area: 2/1/3/2;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(5, 140px);\n    grid-template-columns: 100%;\n    margin-top: 10px;\n}\n\n#maitake {\n    grid-area: 1/1/2/2;\n}\n#octopus {\n    grid-area: 2/1/3/2;\n}\n#cod {\n    grid-area: 3/1/4/2;\n}\n#chicken {\n    grid-area: 4/1/5/2;\n}\n#saba {\n    grid-area: 5/1/6/2;\n}\n\n#dessert-head {\n    grid-area: 3/1/4/2;\n    font-size: 38px;\n    color: #242423;\n    margin-top: -10px;\n}\n\n#dessert{\n    grid-area: 4/1/5/2;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(3, 140px);\n    grid-template-columns: 100%;\n    margin-top: -20px;\n}\n\n#matcha {\n    grid-area: 1/1/2/2;\n}\n\n#sesame {\n    grid-area: 2/1/3/2;\n}\n\n#mochi {\n    grid-area: 3/1/4/2;\n}\n\n#container.contact {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100vw;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    mask-image: linear-gradient(to bottom left, rgba(0, 0, 0, 1), rgba(0, 0, 0, .5) ); \n}\n\n#contact-message {\n    font-family: 'Walsheim-Medium';\n    color: whitesmoke;\n    font-size: 18px;\n}\n\n#contact-message h2 {\n    font-family: 'Walsheim-Regular-Oblique';\n    color: #D39E0D;\n    font-size: 58px;\n}\n\n#contact-message a {\n    font-family: 'Walsheim-Regular-Oblique';\n    color: #D39E0D;\n    margin-right: 110px;\n}\n\n#contact-message p {\n    margin-top: -10px;\n    margin-bottom: 10px;\n    font-size: 24px;\n}"],"sourceRoot":""}]);
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
    const contactMessage = document.createElement('div');
    contactMessage.setAttribute('id', 'contact-message');
    container.appendChild(contactMessage);
    const contactHead = document.createElement('h2');
    contactHead.textContent = 'Hungry for more?';
    contactMessage.appendChild(contactHead);
    const contactMain = document.createElement('p');
    contactMain.textContent = 'Let\'s talk about it!';
    contactMessage.appendChild(contactMain);
    const contactInfoWrapper = document.createElement('div');
    contactInfoWrapper.setAttribute('id', 'content-wrapper');
    contactMessage.appendChild(contactInfoWrapper);
    const contactEmail = document.createElement('a');
    contactEmail.textContent = 'sushi.contact@ginkgo.com';
    contactEmail.href = 'mailto:sushi.contact@ginkgo.com'
    contactMessage.appendChild(contactEmail);
    const contactPhone = document.createElement('span');
    contactPhone.textContent = '(123)-455-4321';
    contactMessage.appendChild(contactPhone);


    

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLDJKQUEwRDtBQUN0Ryw0Q0FBNEMsMklBQWtEO0FBQzlGLDRDQUE0Qyw2SkFBMkQ7QUFDdkcsNENBQTRDLDZJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9HVC1XYWxzaGVpbS1MaWdodC1PYmxpcXVlLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0dULVdhbHNoZWltLUxpZ2h0Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0dULVdhbHNoZWltLU1lZGl1bS1PYmxpcXVlLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0dULVdhbHNoZWltLU1lZGl1bS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9HVC1XYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvR1QtV2Fsc2hlaW0tUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbWFpbi1iZy1jb2xvcjogIzMzMzUzMztcbiAgICAtLXNlY29uZGFyeS1iZy1jb2xvcjogIzI0MjQyM1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLUxpZ2h0LU9ibGlxdWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1MaWdodCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bS1PYmxpcXVlJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTWVkaXVtJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhcic7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxMjBweCwgMTB2aCkgOTB2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XG59XG5cbmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA0cHgsIDUwdncpIG1pbm1heCg0MDBweCwgNTB2dyk7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTZweCAxNnB4IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG59XG5cbmhlYWRlciBpbWcge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbm5hdiB7XG4gICAgbWF4LXdpZHRoOiA3MThweDtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxubmF2IGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1pbi13aWR0aDogMTQwcHg7XG4gICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwKTtcbiAgICBmb250LWZhbWlseTogJ0dULVdhbHNoZWltLVJlZ3VsYXInLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHRyYW5zZm9ybTogc2tld1goLThkZWcpO1xufVxuXG5uYXYgYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzIGVhc2UtaW4tb3V0LCBjb2xvciAuNXMgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzExNztcbiAgICBjb2xvcjogI0ZGQzExNztcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbm5hdiBidXR0b246bm90KDpob3Zlcikge1xuICAgIHRyYW5zaXRpb246IGJvcmRlciAuNXMgZWFzZS1pbi1vdXQsIGNvbG9yIC41cyBlYXNlLWluLW91dCwgZm9udC1zaXplIC41cyBlYXNlLWluLW91dDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuXG5uYXYgYnV0dG9uOmFjdGl2ZSB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTE3O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI2NvbnRhaW5lci5ob21lIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA0cHgsIDIwdncpIG1pbm1heCg5ODBweCwgODB2dyk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIC41KSApOyBcbn1cblxuI2Fib3V0LXNlY3Rpb24ge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2Fib3V0LXdyYXBwZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2Fib3V0LXdyYXBwZXIgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhcic7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luLXRvcDogLTMwJTtcbiAgICBtYXgtd2lkdGg6IDIzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG5oMiBzcGFuIHtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5nb2xkIHtcbiAgICBjb2xvcjogI0ZGQzExNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZSc7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4jc3VzaGktaG9sZGVyIHtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgXG59XG5cbiNjb250YWluZXIubWVudSB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNTMzO1xufVxuXG4jY29udGFpbmVyLm1lbnUgZGl2IHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbiNtZW51IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxNTAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bSc7XG59XG5cbiNtZW51LWxlZnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG59XG5cblxuXG4jc3BlY2lhbHMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyJSA5MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGREJENTtcbn1cblxuI3Nhc2hpbWkge1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksIDE0MHB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDQ3MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNzYXNoaW1pLWhlYWQge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgY29sb3I6ICMyNDI0MjM7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xufVxuXG4ubWVudS1pdGVtLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogIzM5M2IzYTtcbn1cblxuLm1lbnUtaXRlbS10aXRsZSBoMyB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubWVudS1pbmZvLWRhcmsge1xuICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XG59XG5cbiNoYW1hY2hpIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG59XG5cbiNjcnVkbyB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xufVxuXG4jY2FycGFjY2lvIHtcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XG59XG5cbiN6dWtlIHtcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XG59XG5cbiNrYW5wYWNoaSB7XG4gICAgZ3JpZC1hcmVhOiA1LzEvNi8yO1xufVxuXG4jYWxiYWNvcmUge1xuICAgIGdyaWQtYXJlYTogNi8xLzcvMjtcbn1cblxuI3NoaXNvIHtcbiAgICBncmlkLWFyZWE6IDcvMS84LzI7XG59XG5cbiN0YXRha2kge1xuICAgIGdyaWQtYXJlYTogOC8xLzkvMjtcbn1cblxuI3RpcmFkaXRvIHtcbiAgICBncmlkLWFyZWE6IDkvMS8xMC8yO1xufVxuXG4jbWVudS1yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFRERGO1xufVxuXG4jcmlnaHQtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIlIDU2JSAyJSAzNiU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XG59XG5cbiNwbGF0ZXMtaGVhZCB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbiNwbGF0ZXMge1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxNDBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNtYWl0YWtlIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG59XG4jb2N0b3B1cyB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xufVxuI2NvZCB7XG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xufVxuI2NoaWNrZW4ge1xuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcbn1cbiNzYWJhIHtcbiAgICBncmlkLWFyZWE6IDUvMS82LzI7XG59XG5cbiNkZXNzZXJ0LWhlYWQge1xuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgY29sb3I6ICMyNDI0MjM7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbiNkZXNzZXJ0e1xuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxNDBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4jbWF0Y2hhIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG59XG5cbiNzZXNhbWUge1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbn1cblxuI21vY2hpIHtcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XG59XG5cbiNjb250YWluZXIuY29udGFjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAuNSkgKTsgXG59XG5cbiNjb250YWN0LW1lc3NhZ2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTWVkaXVtJztcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNjb250YWN0LW1lc3NhZ2UgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJztcbiAgICBjb2xvcjogI0QzOUUwRDtcbiAgICBmb250LXNpemU6IDU4cHg7XG59XG5cbiNjb250YWN0LW1lc3NhZ2UgYSB7XG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUnO1xuICAgIGNvbG9yOiAjRDM5RTBEO1xuICAgIG1hcmdpbi1yaWdodDogMTEwcHg7XG59XG5cbiNjb250YWN0LW1lc3NhZ2UgcCB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDRDQUFnRDtBQUNwRDtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDRDQUF3QztBQUM1QztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLDRDQUFpRDtBQUNyRDtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLDRDQUF5QztBQUM3QztBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDRDQUFrRDtBQUN0RDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw4REFBOEQ7SUFDOUQsd0RBQXdEO0FBQzVEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFD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QXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpRkFBaUY7QUFDckY7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogIzMzMzUzMztcXG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMyNDI0MjNcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTGlnaHQtT2JsaXF1ZSc7XFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL0dULVdhbHNoZWltLUxpZ2h0LU9ibGlxdWUub3RmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tTGlnaHQnO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9HVC1XYWxzaGVpbS1MaWdodC5vdGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1NZWRpdW0tT2JsaXF1ZSc7XFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL0dULVdhbHNoZWltLU1lZGl1bS1PYmxpcXVlLm90Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bSc7XFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL0dULVdhbHNoZWltLU1lZGl1bS5vdGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUnO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9HVC1XYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUub3RmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhcic7XFxuICAgIHNyYzogdXJsKC4vYXNzZXRzL0dULVdhbHNoZWltLVJlZ3VsYXIub3RmKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEyMHB4LCAxMHZoKSA5MHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDRweCwgNTB2dykgbWlubWF4KDQwMHB4LCA1MHZ3KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTZweCAxNnB4IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbm5hdiB7XFxuICAgIG1heC13aWR0aDogNzE4cHg7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXG59XFxuXFxubmF2IGJ1dHRvbiB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWluLXdpZHRoOiAxNDBweDtcXG4gICAgbWF4LXdpZHRoOiAxNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnR1QtV2Fsc2hlaW0tUmVndWxhcicsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC04ZGVnKTtcXG59XFxuXFxubmF2IGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuNXMgZWFzZS1pbi1vdXQsIGNvbG9yIC41cyBlYXNlLWluLW91dCwgZm9udC1zaXplIC41cyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzExNztcXG4gICAgY29sb3I6ICNGRkMxMTc7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxubmF2IGJ1dHRvbjpub3QoOmhvdmVyKSB7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuNXMgZWFzZS1pbi1vdXQsIGNvbG9yIC41cyBlYXNlLWluLW91dCwgZm9udC1zaXplIC41cyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG5uYXYgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMTc7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2NvbnRhaW5lci5ob21lIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwNHB4LCAyMHZ3KSBtaW5tYXgoOTgwcHgsIDgwdncpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIC41KSApOyBcXG59XFxuXFxuI2Fib3V0LXNlY3Rpb24ge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jYWJvdXQtd3JhcHBlciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Fib3V0LXdyYXBwZXIgaDIge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXInO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTMwJTtcXG4gICAgbWF4LXdpZHRoOiAyMzBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG5oMiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uZ29sZCB7XFxuICAgIGNvbG9yOiAjRkZDMTE3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1SZWd1bGFyLU9ibGlxdWUnO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiNzdXNoaS1ob2xkZXIge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgXFxufVxcblxcbiNjb250YWluZXIubWVudSB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM1MzM7XFxufVxcblxcbiNjb250YWluZXIubWVudSBkaXYge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbiNtZW51IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdXYWxzaGVpbS1NZWRpdW0nO1xcbn1cXG5cXG4jbWVudS1sZWZ0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG5cXG5cXG4jc3BlY2lhbHMge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyJSA5MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEQkQ1O1xcbn1cXG5cXG4jc2FzaGltaSB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LCAxNDBweCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDQ3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jc2FzaGltaS1oZWFkIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGNvbG9yOiAjMjQyNDIzO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweFxcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogIzM5M2IzYTtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZSBoMyB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1lbnUtaW5mby1kYXJrIHtcXG4gICAgY29sb3I6ICMyOTI5Mjk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdGV4dC13cmFwOiB3cmFwO1xcbn1cXG5cXG4jaGFtYWNoaSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuI2NydWRvIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbn1cXG5cXG4jY2FycGFjY2lvIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcbn1cXG5cXG4jenVrZSB7XFxuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcXG59XFxuXFxuI2thbnBhY2hpIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzEvNi8yO1xcbn1cXG5cXG4jYWxiYWNvcmUge1xcbiAgICBncmlkLWFyZWE6IDYvMS83LzI7XFxufVxcblxcbiNzaGlzbyB7XFxuICAgIGdyaWQtYXJlYTogNy8xLzgvMjtcXG59XFxuXFxuI3RhdGFraSB7XFxuICAgIGdyaWQtYXJlYTogOC8xLzkvMjtcXG59XFxuXFxuI3RpcmFkaXRvIHtcXG4gICAgZ3JpZC1hcmVhOiA5LzEvMTAvMjtcXG59XFxuXFxuI21lbnUtcmlnaHQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEVEREY7XFxufVxcblxcbiNyaWdodC13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMiUgNTYlIDIlIDM2JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XFxufVxcblxcbiNwbGF0ZXMtaGVhZCB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4jcGxhdGVzIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxNDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI21haXRha2Uge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcbiNvY3RvcHVzIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbn1cXG4jY29kIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcbn1cXG4jY2hpY2tlbiB7XFxuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcXG59XFxuI3NhYmEge1xcbiAgICBncmlkLWFyZWE6IDUvMS82LzI7XFxufVxcblxcbiNkZXNzZXJ0LWhlYWQge1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgY29sb3I6ICMyNDI0MjM7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG4jZGVzc2VydHtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxNDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbiNtYXRjaGEge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcbiNzZXNhbWUge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxufVxcblxcbiNtb2NoaSB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuXFxuI2NvbnRhaW5lci5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAuNSkgKTsgXFxufVxcblxcbiNjb250YWN0LW1lc3NhZ2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLU1lZGl1bSc7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNjb250YWN0LW1lc3NhZ2UgaDIge1xcbiAgICBmb250LWZhbWlseTogJ1dhbHNoZWltLVJlZ3VsYXItT2JsaXF1ZSc7XFxuICAgIGNvbG9yOiAjRDM5RTBEO1xcbiAgICBmb250LXNpemU6IDU4cHg7XFxufVxcblxcbiNjb250YWN0LW1lc3NhZ2UgYSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV2Fsc2hlaW0tUmVndWxhci1PYmxpcXVlJztcXG4gICAgY29sb3I6ICNEMzlFMEQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTEwcHg7XFxufVxcblxcbiNjb250YWN0LW1lc3NhZ2UgcCB7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWN0Jyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vYXNzZXRzL2Nob3BzdGlja3MuanBnJylcIjtcbiAgICBjb25zdCBjb250YWN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1tZXNzYWdlJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RNZXNzYWdlKTtcbiAgICBjb25zdCBjb250YWN0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGFjdEhlYWQudGV4dENvbnRlbnQgPSAnSHVuZ3J5IGZvciBtb3JlPyc7XG4gICAgY29udGFjdE1lc3NhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWQpO1xuICAgIGNvbnN0IGNvbnRhY3RNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RNYWluLnRleHRDb250ZW50ID0gJ0xldFxcJ3MgdGFsayBhYm91dCBpdCEnO1xuICAgIGNvbnRhY3RNZXNzYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RNYWluKTtcbiAgICBjb25zdCBjb250YWN0SW5mb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mb1dyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50LXdyYXBwZXInKTtcbiAgICBjb250YWN0TWVzc2FnZS5hcHBlbmRDaGlsZChjb250YWN0SW5mb1dyYXBwZXIpO1xuICAgIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSAnc3VzaGkuY29udGFjdEBnaW5rZ28uY29tJztcbiAgICBjb250YWN0RW1haWwuaHJlZiA9ICdtYWlsdG86c3VzaGkuY29udGFjdEBnaW5rZ28uY29tJ1xuICAgIGNvbnRhY3RNZXNzYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG4gICAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnRhY3RQaG9uZS50ZXh0Q29udGVudCA9ICcoMTIzKS00NTUtNDMyMSc7XG4gICAgY29udGFjdE1lc3NhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcblxuXG4gICAgXG5cbn0iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUxvYWQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hvbWUnKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LXNlY3Rpb24nKTtcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBhYm91dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb25zY2lvdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc2Npb3VzLnRleHRDb250ZW50ID0gJyBjb25zY2lvdXMgZGVjaXNpb25zJztcbiAgICBjb25zdCBzdXN0YWluYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzdXN0YWluYWJsZS50ZXh0Q29udGVudCA9ICcgc3VzdGFpbmFibGUgZnV0dXJlJztcbiAgICBjb25zdCBtYWtpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWFraW5nLnRleHRDb250ZW50ID0gJ01ha2luZyAnO1xuICAgIGNvbnN0IGZvdXJBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHBlcmlvZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwZXJpb2QudGV4dENvbnRlbnQgPSAnLic7XG4gICAgZm91ckEudGV4dENvbnRlbnQgPSAnIGZvciBhJztcbiAgICBjb25zY2lvdXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnb2xkJyk7XG4gICAgc3VzdGFpbmFibGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnb2xkJyk7XG4gICAgYWJvdXRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtd3JhcHBlcicpO1xuICAgIGFib3V0VGl0bGUuYXBwZW5kQ2hpbGQobWFraW5nKTtcbiAgICBhYm91dFRpdGxlLmFwcGVuZENoaWxkKGNvbnNjaW91cyk7XG4gICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChmb3VyQSk7XG4gICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChzdXN0YWluYWJsZSk7XG4gICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChwZXJpb2QpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xuICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dFdyYXBwZXIpO1xuICAgIGFib3V0V3JhcHBlci5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKTtcbiAgICBjb25zdCBzdXNoaUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1c2hpSG9sZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktaG9sZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1c2hpSG9sZGVyKTtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vYXNzZXRzL3N1c2hpLmpwZycpXCI7XG59IiwiaW1wb3J0IGhvbWVMb2FkIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0TG9hZCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJyk7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtYnRuJyk7XG5cbndpbmRvdy5vbmxvYWQgPSBjb250YWN0TG9hZCgpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhvbWVMb2FkKCk7XG59KTtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51TG9hZCgpO1xufSlcblxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250YWN0TG9hZCgpO1xufSkiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBjb25zdCBtZW51TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMZWZ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1sZWZ0Jyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51TGVmdCk7XG4gICAgY29uc3QgbWVudVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1yaWdodCcpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVJpZ2h0KTtcbiAgICBjb25zdCBtZW51UmlnaHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVJpZ2h0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JpZ2h0LXdyYXBwZXInKTtcbiAgICBtZW51UmlnaHQuYXBwZW5kQ2hpbGQobWVudVJpZ2h0V3JhcHBlcik7XG4gICAgY29uc3Qgc3BlY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGVjaWFscy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NwZWNpYWxzJyk7XG4gICAgbWVudUxlZnQuYXBwZW5kQ2hpbGQoc3BlY2lhbHMpO1xuICAgIGNvbnN0IHNhc2hpbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXNoaW1pLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FzaGltaScpO1xuICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNhc2hpbWkpO1xuICAgIGNvbnN0IHJvbGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm9sbHMuc2V0QXR0cmlidXRlKCdpZCcsICdyb2xscycpO1xuICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHJvbGxzKTtcbiAgICBjb25zdCBwbGF0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF0ZXMuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF0ZXMnKTtcbiAgICBtZW51UmlnaHRXcmFwcGVyLmFwcGVuZENoaWxkKHBsYXRlcyk7XG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDtcbiAgICBkZXNzZXJ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzc2VydCcpO1xuICAgIG1lbnVSaWdodFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzc2VydCk7XG4gICAgLy8gY29uc3Qgc2FzaGltaVByaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHNhc2hpbWlQcmljZXMuc2V0QXR0cmlidXRlKCdpZCcsICdzYXNoaW1pLXByaWNlcycpO1xuICAgIC8vIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNhc2hpbWlQcmljZXMpO1xuICAgIFxuICAgIGNvbnN0IHNhc2hpbWlIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzYXNoaW1pSGVhZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaGVhZCcpO1xuICAgIHNhc2hpbWlIZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FzaGltaS1oZWFkJyk7XG4gICAgc2FzaGltaUhlYWQudGV4dENvbnRlbnQgPSAnU0lHTkFUVVJFIFNBU0hJTUknO1xuICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNhc2hpbWlIZWFkKTtcbiAgICAvLyBjb25zdCByb2xsc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIC8vIHJvbGxzSGVhZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaGVhZCcpO1xuICAgIC8vIHJvbGxzSGVhZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvbGxzLWhlYWQnKTtcbiAgICAvLyByb2xsc0hlYWQudGV4dENvbnRlbnQgPSAnU0lHTkFUVVJFIFJPTExTJztcbiAgICAvLyBzcGVjaWFscy5hcHBlbmRDaGlsZChyb2xsc0hlYWQpO1xuICAgIGNvbnN0IHBsYXRlc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBsYXRlc0hlYWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWhlYWQnKTtcbiAgICBwbGF0ZXNIZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxhdGVzLWhlYWQnKTtcbiAgICBwbGF0ZXNIZWFkLnRleHRDb250ZW50ID0gJ1NNQUxMIFBMQVRFUyc7XG4gICAgbWVudVJpZ2h0V3JhcHBlci5hcHBlbmRDaGlsZChwbGF0ZXNIZWFkKTtcbiAgICBjb25zdCBkZXNzZXJ0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZGVzc2VydEhlYWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWhlYWQnKTtcbiAgICBkZXNzZXJ0SGVhZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc3NlcnQtaGVhZCcpO1xuICAgIGRlc3NlcnRIZWFkLnRleHRDb250ZW50ID0gJ0RFU1NFUlQnO1xuICAgIG1lbnVSaWdodFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzc2VydEhlYWQpO1xuXG4gICAgY29uc3QgaGFtYWNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhhbWFjaGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGhhbWFjaGkpO1xuXG4gICAgY29uc3QgaGFtYWNoaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGFtYWNoaVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgaGFtYWNoaVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS10aXRsZScpO1xuICAgIGhhbWFjaGkuYXBwZW5kQ2hpbGQoaGFtYWNoaVRpdGxlKTtcblxuICAgIGNvbnN0IGhhbWFjaGlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoYW1hY2hpTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGhhbWFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS1uYW1lJyk7XG4gICAgaGFtYWNoaU5hbWUudGV4dENvbnRlbnQgPSAnSEFNQUNISSBTSVpaTEUqJ1xuICAgIGhhbWFjaGlUaXRsZS5hcHBlbmRDaGlsZChoYW1hY2hpTmFtZSk7XG5cbiAgICBjb25zdCBoYW1hY2hpUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhhbWFjaGlQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgaGFtYWNoaVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYWNoaS1wcmljZScpO1xuICAgIGhhbWFjaGlQcmljZS50ZXh0Q29udGVudCA9ICcyMydcbiAgICBoYW1hY2hpVGl0bGUuYXBwZW5kQ2hpbGQoaGFtYWNoaVByaWNlKTtcblxuICAgIGNvbnN0IGhhbWFjaGlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhhbWFjaGlJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBoYW1hY2hpSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hhbWFjaGktaW5mbycpO1xuICAgIGhhbWFjaGlJbmZvLnRleHRDb250ZW50ID0gJ0hvdCBvaWwsIGZyZXNoIGdpbmdlciwgZ2FybGljLCBjaGl2ZSwgcG9uenUsIGFsZXBwbyBwZXBwZXInXG4gICAgaGFtYWNoaS5hcHBlbmRDaGlsZChoYW1hY2hpSW5mbyk7XG5cbiAgICBjb25zdCBjcnVkbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNydWRvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZChjcnVkbyk7XG5cbiAgICBjb25zdCBjcnVkb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3J1ZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIGNydWRvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby10aXRsZScpO1xuICAgIGNydWRvLmFwcGVuZENoaWxkKGNydWRvVGl0bGUpO1xuXG4gICAgY29uc3QgY3J1ZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjcnVkb05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBjcnVkb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby1uYW1lJyk7XG4gICAgY3J1ZG9OYW1lLnRleHRDb250ZW50ID0gJ0tJTkcgU0FMTU9OIENSVURPKidcbiAgICBjcnVkb1RpdGxlLmFwcGVuZENoaWxkKGNydWRvTmFtZSk7XG5cbiAgICBjb25zdCBjcnVkb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjcnVkb1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBjcnVkb1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3J1ZG8tcHJpY2UnKTtcbiAgICBjcnVkb1ByaWNlLnRleHRDb250ZW50ID0gJzIzJ1xuICAgIGNydWRvVGl0bGUuYXBwZW5kQ2hpbGQoY3J1ZG9QcmljZSk7XG5cbiAgICBjb25zdCBjcnVkb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY3J1ZG9JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBjcnVkb0luZm8uc2V0QXR0cmlidXRlKCdpZCcsICdjcnVkby1pbmZvJyk7XG4gICAgY3J1ZG9JbmZvLnRleHRDb250ZW50ID0gJ1doaXRlIHRydWZmbGUgcG9uenUsIGNoZXJyeSB0b21hdG8sIHNlYSBzYWx0J1xuICAgIGNydWRvLmFwcGVuZENoaWxkKGNydWRvSW5mbyk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJwYWNjaW8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGNhcnBhY2Npbyk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcnBhY2Npb1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgY2FycGFjY2lvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJwYWNjaW8tdGl0bGUnKTtcbiAgICBjYXJwYWNjaW8uYXBwZW5kQ2hpbGQoY2FycGFjY2lvVGl0bGUpO1xuXG4gICAgY29uc3QgY2FycGFjY2lvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2FycGFjY2lvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGNhcnBhY2Npb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJwYWNjaW8tbmFtZScpO1xuICAgIGNhcnBhY2Npb05hbWUudGV4dENvbnRlbnQgPSAnT0NUT1BVUyBDQVJQQUNDSU8nXG4gICAgY2FycGFjY2lvVGl0bGUuYXBwZW5kQ2hpbGQoY2FycGFjY2lvTmFtZSk7XG5cbiAgICBjb25zdCBjYXJwYWNjaW9QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2FycGFjY2lvUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGNhcnBhY2Npb1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FycGFjY2lvLXByaWNlJyk7XG4gICAgY2FycGFjY2lvUHJpY2UudGV4dENvbnRlbnQgPSAnMjInXG4gICAgY2FycGFjY2lvVGl0bGUuYXBwZW5kQ2hpbGQoY2FycGFjY2lvUHJpY2UpO1xuXG4gICAgY29uc3QgY2FycGFjY2lvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYXJwYWNjaW9JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBjYXJwYWNjaW9JbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FycGFjY2lvLWluZm8nKTtcbiAgICBjYXJwYWNjaW9JbmZvLnRleHRDb250ZW50ID0gJ0xlbW9uIHZpbmFpZ3JldHRlLCBjcmlzcHkgY2FwZXJzLCB0b21hdG8sIGZyZXNoIGhlcmJzJ1xuICAgIGNhcnBhY2Npby5hcHBlbmRDaGlsZChjYXJwYWNjaW9JbmZvKTtcblxuICAgIGNvbnN0IHp1a2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB6dWtlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZCh6dWtlKTtcblxuICAgIGNvbnN0IHp1a2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHp1a2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHp1a2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3p1a2UtdGl0bGUnKTtcbiAgICB6dWtlLmFwcGVuZENoaWxkKHp1a2VUaXRsZSk7XG5cbiAgICBjb25zdCB6dWtlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgenVrZU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICB6dWtlTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3p1a2UtbmFtZScpO1xuICAgIHp1a2VOYW1lLnRleHRDb250ZW50ID0gJ1RVTkEgWlVLRSonXG4gICAgenVrZVRpdGxlLmFwcGVuZENoaWxkKHp1a2VOYW1lKTtcblxuICAgIGNvbnN0IHp1a2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgenVrZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICB6dWtlUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICd6dWtlLXByaWNlJyk7XG4gICAgenVrZVByaWNlLnRleHRDb250ZW50ID0gJzI0J1xuICAgIHp1a2VUaXRsZS5hcHBlbmRDaGlsZCh6dWtlUHJpY2UpO1xuXG4gICAgY29uc3QgenVrZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgenVrZUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIHp1a2VJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnenVrZS1pbmZvJyk7XG4gICAgenVrZUluZm8udGV4dENvbnRlbnQgPSAnU295IG1hcmluYXRlZCBiaWdleWUgdHVuYSwgc2VzYW1lIG9uaW9uIHBvbnp1LCBmcmllZCBnYXJsaWMsIGNoaXZlJ1xuICAgIHp1a2UuYXBwZW5kQ2hpbGQoenVrZUluZm8pO1xuXG4gICAgY29uc3Qga2FucGFjaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrYW5wYWNoaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQoa2FucGFjaGkpO1xuXG4gICAgY29uc3Qga2FucGFjaGlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGthbnBhY2hpVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBrYW5wYWNoaVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAna2FucGFjaGktdGl0bGUnKTtcbiAgICBrYW5wYWNoaS5hcHBlbmRDaGlsZChrYW5wYWNoaVRpdGxlKTtcblxuICAgIGNvbnN0IGthbnBhY2hpTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAga2FucGFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAga2FucGFjaGlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAna2FucGFjaGktbmFtZScpO1xuICAgIGthbnBhY2hpTmFtZS50ZXh0Q29udGVudCA9ICdLQU5QQUNISSBBR1VBQ0hJTEUqJ1xuICAgIGthbnBhY2hpVGl0bGUuYXBwZW5kQ2hpbGQoa2FucGFjaGlOYW1lKTtcblxuICAgIGNvbnN0IGthbnBhY2hpUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGthbnBhY2hpUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIGthbnBhY2hpUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdrYW5wYWNoaS1wcmljZScpO1xuICAgIGthbnBhY2hpUHJpY2UudGV4dENvbnRlbnQgPSAnMjMnXG4gICAga2FucGFjaGlUaXRsZS5hcHBlbmRDaGlsZChrYW5wYWNoaVByaWNlKTtcblxuICAgIGNvbnN0IGthbnBhY2hpSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBrYW5wYWNoaUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGthbnBhY2hpSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2thbnBhY2hpLWluZm8nKTtcbiAgICBrYW5wYWNoaUluZm8udGV4dENvbnRlbnQgPSAnQ3VjdW1iZXItY2lsYW50cm8gYWd1YWNoaWxlLCBwb21lZ3JhbmF0ZSwgc2VycmFubywgY2hhcnJlZCBvcmFuZ2UsIG9saXZlIG9pbCwgc2VhIHNhbHQnXG4gICAga2FucGFjaGkuYXBwZW5kQ2hpbGQoa2FucGFjaGlJbmZvKTtcblxuICAgIGNvbnN0IGFsYmFjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWxiYWNvcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKGFsYmFjb3JlKTtcblxuICAgIGNvbnN0IGFsYmFjb3JlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbGJhY29yZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgYWxiYWNvcmVUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsYmFjb3JlLXRpdGxlJyk7XG4gICAgYWxiYWNvcmUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVUaXRsZSk7XG5cbiAgICBjb25zdCBhbGJhY29yZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFsYmFjb3JlTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGFsYmFjb3JlTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsYmFjb3JlLW5hbWUnKTtcbiAgICBhbGJhY29yZU5hbWUudGV4dENvbnRlbnQgPSAnQUxCQUNPUkUgQ1JJU1BZIE9OSU9OKidcbiAgICBhbGJhY29yZVRpdGxlLmFwcGVuZENoaWxkKGFsYmFjb3JlTmFtZSk7XG5cbiAgICBjb25zdCBhbGJhY29yZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBhbGJhY29yZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBhbGJhY29yZVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxiYWNvcmUtcHJpY2UnKTtcbiAgICBhbGJhY29yZVByaWNlLnRleHRDb250ZW50ID0gJzIyJ1xuICAgIGFsYmFjb3JlVGl0bGUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVQcmljZSk7XG5cbiAgICBjb25zdCBhbGJhY29yZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWxiYWNvcmVJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBhbGJhY29yZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdhbGJhY29yZS1pbmZvJyk7XG4gICAgYWxiYWNvcmVJbmZvLnRleHRDb250ZW50ID0gJ1NlYXJlZCBhbGJhY29yZSwgZ2FybGljIGFpb2xpLCB5dXp1IHBvbnp1LCBjcmlzcHkgb25pb24sIGNoZXJ2aWwnXG4gICAgYWxiYWNvcmUuYXBwZW5kQ2hpbGQoYWxiYWNvcmVJbmZvKTtcblxuICAgIGNvbnN0IHNoaXNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpc28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBzYXNoaW1pLmFwcGVuZENoaWxkKHNoaXNvKTtcblxuICAgIGNvbnN0IHNoaXNvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlzb1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgc2hpc29UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXNvLXRpdGxlJyk7XG4gICAgc2hpc28uYXBwZW5kQ2hpbGQoc2hpc29UaXRsZSk7XG5cbiAgICBjb25zdCBzaGlzb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNoaXNvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIHNoaXNvTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXNvLW5hbWUnKTtcbiAgICBzaGlzb05hbWUudGV4dENvbnRlbnQgPSAnU0hJU08gUExVTSBTSElST01JKidcbiAgICBzaGlzb1RpdGxlLmFwcGVuZENoaWxkKHNoaXNvTmFtZSk7XG5cbiAgICBjb25zdCBzaGlzb1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzaGlzb1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBzaGlzb1ByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpc28tcHJpY2UnKTtcbiAgICBzaGlzb1ByaWNlLnRleHRDb250ZW50ID0gJzIyJ1xuICAgIHNoaXNvVGl0bGUuYXBwZW5kQ2hpbGQoc2hpc29QcmljZSk7XG5cbiAgICBjb25zdCBzaGlzb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2hpc29JbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBzaGlzb0luZm8uc2V0QXR0cmlidXRlKCdpZCcsICdzaGlzby1pbmZvJyk7XG4gICAgc2hpc29JbmZvLnRleHRDb250ZW50ID0gJ1doaXRlZmlzaCwgeXV6dSBwb256dSwgb2xpdmUgb2lsLCB1bWVib3NoaSwgc2hpc28nXG4gICAgc2hpc28uYXBwZW5kQ2hpbGQoc2hpc29JbmZvKTtcblxuICAgIGNvbnN0IHRhdGFraSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhdGFraS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHNhc2hpbWkuYXBwZW5kQ2hpbGQodGF0YWtpKTtcblxuICAgIGNvbnN0IHRhdGFraVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGF0YWtpVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICB0YXRha2lUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhdGFraS10aXRsZScpO1xuICAgIHRhdGFraS5hcHBlbmRDaGlsZCh0YXRha2lUaXRsZSk7XG5cbiAgICBjb25zdCB0YXRha2lOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0YXRha2lOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgdGF0YWtpTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhdGFraS1uYW1lJyk7XG4gICAgdGF0YWtpTmFtZS50ZXh0Q29udGVudCA9ICdUVU5BIFRBVEFLSSonXG4gICAgdGF0YWtpVGl0bGUuYXBwZW5kQ2hpbGQodGF0YWtpTmFtZSk7XG5cbiAgICBjb25zdCB0YXRha2lQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGF0YWtpUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIHRhdGFraVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGF0YWtpLXByaWNlJyk7XG4gICAgdGF0YWtpUHJpY2UudGV4dENvbnRlbnQgPSAnMjQnXG4gICAgdGF0YWtpVGl0bGUuYXBwZW5kQ2hpbGQodGF0YWtpUHJpY2UpO1xuXG4gICAgY29uc3QgdGF0YWtpSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXRha2lJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICB0YXRha2lJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAndGF0YWtpLWluZm8nKTtcbiAgICB0YXRha2lJbmZvLnRleHRDb250ZW50ID0gJ1Nlc2FtZSBjcnVzdGVkIGJpZ2V5ZSB0dW5hLCBhcHBsZSBtdXN0YXJkIGRyZXNzaW5nLCBncmVlbiBvbmlvbidcbiAgICB0YXRha2kuYXBwZW5kQ2hpbGQodGF0YWtpSW5mbyk7XG5cbiAgICBjb25zdCB0aXJhZGl0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpcmFkaXRvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgc2FzaGltaS5hcHBlbmRDaGlsZCh0aXJhZGl0byk7XG5cbiAgICBjb25zdCB0aXJhZGl0b1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlyYWRpdG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHRpcmFkaXRvVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXJhZGl0by10aXRsZScpO1xuICAgIHRpcmFkaXRvLmFwcGVuZENoaWxkKHRpcmFkaXRvVGl0bGUpO1xuXG4gICAgY29uc3QgdGlyYWRpdG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXJhZGl0b05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICB0aXJhZGl0b05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXJhZGl0by1uYW1lJyk7XG4gICAgdGlyYWRpdG9OYW1lLnRleHRDb250ZW50ID0gJ1dISVRFRklTSCBUSVJBRElUTyonXG4gICAgdGlyYWRpdG9UaXRsZS5hcHBlbmRDaGlsZCh0aXJhZGl0b05hbWUpO1xuXG4gICAgY29uc3QgdGlyYWRpdG9QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGlyYWRpdG9QcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgdGlyYWRpdG9QcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpcmFkaXRvLXByaWNlJyk7XG4gICAgdGlyYWRpdG9QcmljZS50ZXh0Q29udGVudCA9ICcyMidcbiAgICB0aXJhZGl0b1RpdGxlLmFwcGVuZENoaWxkKHRpcmFkaXRvUHJpY2UpO1xuXG4gICAgY29uc3QgdGlyYWRpdG9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpcmFkaXRvSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgdGlyYWRpdG9JbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAndGlyYWRpdG8taW5mbycpO1xuICAgIHRpcmFkaXRvSW5mby50ZXh0Q29udGVudCA9ICdBamkgYW1hcmlsbG8gY2hpbGkgdGlnZXJzIG1pbGssIG1hbmdvLCBnb2NodWdhcnUgb2lsLCBiYXNpbCwgc2VhIHNhbHQnXG4gICAgdGlyYWRpdG8uYXBwZW5kQ2hpbGQodGlyYWRpdG9JbmZvKTtcblxuICAgIGNvbnN0IG1haXRha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWl0YWtlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgcGxhdGVzLmFwcGVuZENoaWxkKG1haXRha2UpO1xuXG4gICAgY29uc3QgbWFpdGFrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpdGFrZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbWFpdGFrZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS10aXRsZScpO1xuICAgIG1haXRha2UuYXBwZW5kQ2hpbGQobWFpdGFrZVRpdGxlKTtcblxuICAgIGNvbnN0IG1haXRha2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtYWl0YWtlTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIG1haXRha2VOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS1uYW1lJyk7XG4gICAgbWFpdGFrZU5hbWUudGV4dENvbnRlbnQgPSAnUk9BU1RFRCBNQUlUQUtFJ1xuICAgIG1haXRha2VUaXRsZS5hcHBlbmRDaGlsZChtYWl0YWtlTmFtZSk7XG5cbiAgICBjb25zdCBtYWl0YWtlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1haXRha2VQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgbWFpdGFrZVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpdGFrZS1wcmljZScpO1xuICAgIG1haXRha2VQcmljZS50ZXh0Q29udGVudCA9ICcxNCdcbiAgICBtYWl0YWtlVGl0bGUuYXBwZW5kQ2hpbGQobWFpdGFrZVByaWNlKTtcblxuICAgIGNvbnN0IG1haXRha2VJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1haXRha2VJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBtYWl0YWtlSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haXRha2UtaW5mbycpO1xuICAgIG1haXRha2VJbmZvLnRleHRDb250ZW50ID0gJ1dob2xlIHJvYXN0ZWQgbWFpdGFrZSBtdXNocm9vbSwgd2FrYW1lIGJ1dHRlciwgY2hpdmUsIGxlbW9uJ1xuICAgIG1haXRha2UuYXBwZW5kQ2hpbGQobWFpdGFrZUluZm8pO1xuXG4gICAgY29uc3Qgb2N0b3B1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9jdG9wdXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBwbGF0ZXMuYXBwZW5kQ2hpbGQob2N0b3B1cyk7XG5cbiAgICBjb25zdCBvY3RvcHVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvY3RvcHVzVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBvY3RvcHVzVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLXRpdGxlJyk7XG4gICAgb2N0b3B1cy5hcHBlbmRDaGlsZChvY3RvcHVzVGl0bGUpO1xuXG4gICAgY29uc3Qgb2N0b3B1c05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9jdG9wdXNOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgb2N0b3B1c05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLW5hbWUnKTtcbiAgICBvY3RvcHVzTmFtZS50ZXh0Q29udGVudCA9ICdHUklMTEVEIE9DVE9QVVMnXG4gICAgb2N0b3B1c1RpdGxlLmFwcGVuZENoaWxkKG9jdG9wdXNOYW1lKTtcblxuICAgIGNvbnN0IG9jdG9wdXNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgb2N0b3B1c1ByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBvY3RvcHVzUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdvY3RvcHVzLXByaWNlJyk7XG4gICAgb2N0b3B1c1ByaWNlLnRleHRDb250ZW50ID0gJzI0J1xuICAgIG9jdG9wdXNUaXRsZS5hcHBlbmRDaGlsZChvY3RvcHVzUHJpY2UpO1xuXG4gICAgY29uc3Qgb2N0b3B1c0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgb2N0b3B1c0luZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIG9jdG9wdXNJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnb2N0b3B1cy1pbmZvJyk7XG4gICAgb2N0b3B1c0luZm8udGV4dENvbnRlbnQgPSAnUm9hc3RlZCBjYXVsaWZsb3dlciBzdGVhaywgYmxpc3RlcmVkIGNoZXJyeSB0b21hdG9lcywgYWppIHZlcmRlLCBjaGVydmlsJ1xuICAgIG9jdG9wdXMuYXBwZW5kQ2hpbGQob2N0b3B1c0luZm8pO1xuXG4gICAgY29uc3QgY29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgcGxhdGVzLmFwcGVuZENoaWxkKGNvZCk7XG5cbiAgICBjb25zdCBjb2RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgY29kVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjb2QtdGl0bGUnKTtcbiAgICBjb2QuYXBwZW5kQ2hpbGQoY29kVGl0bGUpO1xuXG4gICAgY29uc3QgY29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29kTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIGNvZE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjb2QtbmFtZScpO1xuICAgIGNvZE5hbWUudGV4dENvbnRlbnQgPSAnTUlTTyBHTEFaRUQgQkxBQ0sgQ09EJ1xuICAgIGNvZFRpdGxlLmFwcGVuZENoaWxkKGNvZE5hbWUpO1xuXG4gICAgY29uc3QgY29kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvZFByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBjb2RQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvZC1wcmljZScpO1xuICAgIGNvZFByaWNlLnRleHRDb250ZW50ID0gJzE4J1xuICAgIGNvZFRpdGxlLmFwcGVuZENoaWxkKGNvZFByaWNlKTtcblxuICAgIGNvbnN0IGNvZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29kSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgY29kSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvZC1pbmZvJyk7XG4gICAgY29kSW5mby50ZXh0Q29udGVudCA9ICdCcm9pbGVkIGJsYWNrIGNvZCwgb3JhbmdlLCBnaW5nZXIsIGdyZWVuIG9uaW9uLCB5dXp1IG1pc28sIGdvY2h1Z2FydSBvaWwnXG4gICAgY29kLmFwcGVuZENoaWxkKGNvZEluZm8pO1xuXG4gICAgY29uc3QgY2hpY2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoaWNrZW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBwbGF0ZXMuYXBwZW5kQ2hpbGQoY2hpY2tlbik7XG5cbiAgICBjb25zdCBjaGlja2VuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGlja2VuVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBjaGlja2VuVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLXRpdGxlJyk7XG4gICAgY2hpY2tlbi5hcHBlbmRDaGlsZChjaGlja2VuVGl0bGUpO1xuXG4gICAgY29uc3QgY2hpY2tlbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNoaWNrZW5OYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1uYW1lLWxpZ2h0Jyk7XG4gICAgY2hpY2tlbk5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLW5hbWUnKTtcbiAgICBjaGlja2VuTmFtZS50ZXh0Q29udGVudCA9ICdDSElDS0VOIEtBUkFBR0UnXG4gICAgY2hpY2tlblRpdGxlLmFwcGVuZENoaWxkKGNoaWNrZW5OYW1lKTtcblxuICAgIGNvbnN0IGNoaWNrZW5QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2hpY2tlblByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBjaGlja2VuUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlja2VuLXByaWNlJyk7XG4gICAgY2hpY2tlblByaWNlLnRleHRDb250ZW50ID0gJzEyJ1xuICAgIGNoaWNrZW5UaXRsZS5hcHBlbmRDaGlsZChjaGlja2VuUHJpY2UpO1xuXG4gICAgY29uc3QgY2hpY2tlbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2hpY2tlbkluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWluZm8tZGFyaycpO1xuICAgIGNoaWNrZW5JbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hpY2tlbi1pbmZvJyk7XG4gICAgY2hpY2tlbkluZm8udGV4dENvbnRlbnQgPSAnQ3Jpc3B5IGZyaWVkIG1hcmluYXRlZCBjaGlja2VuLCBkaWxsIGtld3BpZSBhaW9saSwgbGVtb24nXG4gICAgY2hpY2tlbi5hcHBlbmRDaGlsZChjaGlja2VuSW5mbyk7XG5cbiAgICBjb25zdCBzYWJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2FiYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuICAgIHBsYXRlcy5hcHBlbmRDaGlsZChzYWJhKTtcblxuICAgIGNvbnN0IHNhYmFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhYmFUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHNhYmFUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtdGl0bGUnKTtcbiAgICBzYWJhLmFwcGVuZENoaWxkKHNhYmFUaXRsZSk7XG5cbiAgICBjb25zdCBzYWJhTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2FiYU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBzYWJhTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtbmFtZScpO1xuICAgIHNhYmFOYW1lLnRleHRDb250ZW50ID0gJ0dSSUxMRUQgU0FCQSdcbiAgICBzYWJhVGl0bGUuYXBwZW5kQ2hpbGQoc2FiYU5hbWUpO1xuXG4gICAgY29uc3Qgc2FiYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzYWJhUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgIHNhYmFQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhYmEtcHJpY2UnKTtcbiAgICBzYWJhUHJpY2UudGV4dENvbnRlbnQgPSAnMTYnXG4gICAgc2FiYVRpdGxlLmFwcGVuZENoaWxkKHNhYmFQcmljZSk7XG5cbiAgICBjb25zdCBzYWJhSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzYWJhSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgc2FiYUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdzYWJhLWluZm8nKTtcbiAgICBzYWJhSW5mby50ZXh0Q29udGVudCA9ICdCbGlzdGVyZWQgZmlsZXQgb2YgbWFja2VyZWwsIG1vbWlqaSBvcm9zaGksIHBpY2tsZWQgbXVzdGFyZCBzZWVkLCBsZW1vbiBhc2gsIGdyZWVuIG9uaW9uJ1xuICAgIHNhYmEuYXBwZW5kQ2hpbGQoc2FiYUluZm8pO1xuXG4gICAgY29uc3QgbWF0Y2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF0Y2hhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgZGVzc2VydC5hcHBlbmRDaGlsZChtYXRjaGEpO1xuXG4gICAgY29uc3QgbWF0Y2hhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXRjaGFUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIG1hdGNoYVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWF0Y2hhLXRpdGxlJyk7XG4gICAgbWF0Y2hhLmFwcGVuZENoaWxkKG1hdGNoYVRpdGxlKTtcblxuICAgIGNvbnN0IG1hdGNoYU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1hdGNoYU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBtYXRjaGFOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWF0Y2hhLW5hbWUnKTtcbiAgICBtYXRjaGFOYW1lLnRleHRDb250ZW50ID0gJ01BVENIQSBQQU5OQSBDT1RUQSdcbiAgICBtYXRjaGFUaXRsZS5hcHBlbmRDaGlsZChtYXRjaGFOYW1lKTtcblxuICAgIGNvbnN0IG1hdGNoYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtYXRjaGFQcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgbWF0Y2hhUHJpY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtYXRjaGEtcHJpY2UnKTtcbiAgICBtYXRjaGFQcmljZS50ZXh0Q29udGVudCA9ICc5J1xuICAgIG1hdGNoYVRpdGxlLmFwcGVuZENoaWxkKG1hdGNoYVByaWNlKTtcblxuICAgIGNvbnN0IG1hdGNoYUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWF0Y2hhSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgbWF0Y2hhSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21hdGNoYS1pbmZvJyk7XG4gICAgbWF0Y2hhSW5mby50ZXh0Q29udGVudCA9ICdXaGl0ZSBjaG9jb2xhdGUgY3J1bWIsIGZyZXNoIGJlcnJpZXMnXG4gICAgbWF0Y2hhLmFwcGVuZENoaWxkKG1hdGNoYUluZm8pO1xuXG4gICAgY29uc3Qgc2VzYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VzYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgZGVzc2VydC5hcHBlbmRDaGlsZChzZXNhbWUpO1xuXG4gICAgY29uc3Qgc2VzYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXNhbWVUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIHNlc2FtZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VzYW1lLXRpdGxlJyk7XG4gICAgc2VzYW1lLmFwcGVuZENoaWxkKHNlc2FtZVRpdGxlKTtcblxuICAgIGNvbnN0IHNlc2FtZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNlc2FtZU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LW5hbWUtbGlnaHQnKTtcbiAgICBzZXNhbWVOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VzYW1lLW5hbWUnKTtcbiAgICBzZXNhbWVOYW1lLnRleHRDb250ZW50ID0gJ0JMQUNLIFNFU0FNRSBCUk9XTklFJ1xuICAgIHNlc2FtZVRpdGxlLmFwcGVuZENoaWxkKHNlc2FtZU5hbWUpO1xuXG4gICAgY29uc3Qgc2VzYW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNlc2FtZVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBzZXNhbWVQcmljZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nlc2FtZS1wcmljZScpO1xuICAgIHNlc2FtZVByaWNlLnRleHRDb250ZW50ID0gJzEwJ1xuICAgIHNlc2FtZVRpdGxlLmFwcGVuZENoaWxkKHNlc2FtZVByaWNlKTtcblxuICAgIGNvbnN0IHNlc2FtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2VzYW1lSW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaW5mby1kYXJrJyk7XG4gICAgc2VzYW1lSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nlc2FtZS1pbmZvJyk7XG4gICAgc2VzYW1lSW5mby50ZXh0Q29udGVudCA9ICdWYW5pbGxhIGljZSBjcmVhbSwgZnJlc2ggYmVycmllcywgYmxhY2sgc2VzYW1lJ1xuICAgIHNlc2FtZS5hcHBlbmRDaGlsZChzZXNhbWVJbmZvKTtcblxuICAgIGNvbnN0IG1vY2hpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9jaGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcbiAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKG1vY2hpKTtcblxuICAgIGNvbnN0IG1vY2hpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2NoaVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgbW9jaGlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vY2hpLXRpdGxlJyk7XG4gICAgbW9jaGkuYXBwZW5kQ2hpbGQobW9jaGlUaXRsZSk7XG5cbiAgICBjb25zdCBtb2NoaU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1vY2hpTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZS1saWdodCcpO1xuICAgIG1vY2hpTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vY2hpLW5hbWUnKTtcbiAgICBtb2NoaU5hbWUudGV4dENvbnRlbnQgPSAnU0FTQSBNT0NISSdcbiAgICBtb2NoaVRpdGxlLmFwcGVuZENoaWxkKG1vY2hpTmFtZSk7XG5cbiAgICBjb25zdCBtb2NoaVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtb2NoaVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICBtb2NoaVByaWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9jaGktcHJpY2UnKTtcbiAgICBtb2NoaVByaWNlLnRleHRDb250ZW50ID0gJzEyJ1xuICAgIG1vY2hpVGl0bGUuYXBwZW5kQ2hpbGQobW9jaGlQcmljZSk7XG5cbiAgICBjb25zdCBtb2NoaUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbW9jaGlJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pbmZvLWRhcmsnKTtcbiAgICBtb2NoaUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdtb2NoaS1pbmZvJyk7XG4gICAgbW9jaGlJbmZvLnRleHRDb250ZW50ID0gJ1Nhc2EgYmFtYm9vIGxlYWYsIHlvbW9naSwga2luYWtvIGZsb3VyICdcbiAgICBtb2NoaS5hcHBlbmRDaGlsZChtb2NoaUluZm8pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==