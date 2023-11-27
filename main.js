/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutUs: () => (/* binding */ createAboutUs)\n/* harmony export */ });\n// Create a function to generate the About Us DOM element\nfunction createAboutUs() {\n  const aboutUsElement = document.createElement('div');\n  aboutUsElement.classList.add('about-us');\n\n  const aboutUsText = document.createElement('div');\n  aboutUsText.classList.add('about-us-text');\n  const heading = document.createElement('h1');\n  heading.textContent = 'About Us';\n  aboutUsText.appendChild(heading);\n\n  const paragraph = document.createElement('p');\n  paragraph.textContent = 'Welcome to our restaurant! We are dedicated to providing delicious food and excellent service to our customers. Our restaurant has been serving the community for over 20 years. We use only the freshest ingredients and our chefs are trained in traditional cooking methods. Come and experience our friendly atmosphere and excellent service.';\n  aboutUsText.appendChild(paragraph);\n  aboutUsElement.appendChild(aboutUsText);\n\n\n\n  return aboutUsElement;\n}\n\n// Export the function\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactTab: () => (/* binding */ createContactTab)\n/* harmony export */ });\nfunction createContactTab() {\n  // Create the main container for the contact page\n  const contactTab = document.createElement('div');\n  contactTab.classList.add('contact-tab');\n\n  // Create and append the heading\n  const heading = document.createElement('h1');\n  heading.textContent = 'Contact Us';\n  contactTab.appendChild(heading);\n\n  // Create and append the form\n  const form = document.createElement('form');\n\n  // Create and append the name field\n  const nameField = document.createElement('input');\n  nameField.setAttribute('type', 'text');\n  nameField.setAttribute('name', 'name');\n  nameField.setAttribute('placeholder', 'Your Name');\n  nameField.setAttribute('required', '');\n  form.appendChild(nameField);\n\n  // Create and append the email field\n  const emailField = document.createElement('input');\n  emailField.setAttribute('type', 'email');\n  emailField.setAttribute('name', 'email');\n  emailField.setAttribute('placeholder', 'Your Email');\n  emailField.setAttribute('required', '');\n  form.appendChild(emailField);\n\n  // Create and append the message box\n  const messageBox = document.createElement('textarea');\n  messageBox.setAttribute('name', 'message');\n  messageBox.setAttribute('placeholder', 'Your Message');\n  messageBox.setAttribute('required', '');\n  form.appendChild(messageBox);\n\n  // Create and append the submit button\n  const submitButton = document.createElement('input');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('value', 'Submit');\n  form.appendChild(submitButton);\n\n  contactTab.appendChild(form);\n\n  // Append the contact container to the document body\n  document.body.appendChild(contactTab);\n  return contactTab;\n\n   \n\n  \n\n  \n\n}\n\n// Call the function to create the contact page\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeroSection: () => (/* binding */ createHeroSection)\n/* harmony export */ });\n\n  \n  function createHeroSection() {\n    const heroSection = document.createElement('section');\n    heroSection.classList.add('hero');\n    const heroText = document.createElement('div');\n    heroText.classList.add('hero-text');\n    heroText.innerHTML = `\n      <h1>Welcome to Our Restaurant</h1>\n      \n      <p>Enjoy the best food experience</p>\n      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cumque fugit minus delectus quaerat! Nam, delectus. Obcaecati facere ut at magnam commodi? Soluta modi ullam velit, maxime amet dolorem quae.</p>\n    `;\n    \n    heroSection.appendChild(heroText);\n    \n    return heroSection;\n  }\n  \n  \n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_us_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.js */ \"./src/about-us.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\n\n\ncontent.appendChild((0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)());\nconst tabs = Array.from(document.querySelectorAll('li a'));\n// content.appendChild(createHeroSection());\n\n\nlet currentContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.createHeroSection)();\ncontent.appendChild(currentContent);\ncontent.appendChild((0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.createFooter)());\n\ntabs.forEach(tab => {\n    tab.addEventListener('click', () => {\n        const tabContent = document.getElementById('content');\n\n        // Remove the current content\n        tabContent.removeChild(currentContent);\n\n        if (tab.textContent === 'Home') {\n            currentContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.createHeroSection)();\n        } else if (tab.textContent === 'Menu') {\n            currentContent = (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.createMenu)();\n        } else if (tab.textContent === 'About Us') {\n            currentContent = (0,_about_us_js__WEBPACK_IMPORTED_MODULE_3__.createAboutUs)();\n        } else if (tab.textContent === 'Contact Us') {\n            currentContent = (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.createContactTab)();\n        }\n\n        // Insert the new content before the footer\n        tabContent.insertBefore(currentContent, tabContent.lastChild);\n        \n    });\n});\n// content.appendChild(createContactTab());\n// content.appendChild(createAboutUs());\n// content.appendChild(createMenu());\n\n\n// console.log(tabs);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n\nfunction createMenu() {\n    const menuItems = [\n        { name: 'Pizza', price: 10, image: './Images/pizza.png' },\n        { name: 'Burger', price: 8, image: './Images/burger.png' },\n        { name: 'Pasta', price: 12, image: './Images/pasta.png' },\n        { name: 'Salad', price: 7, image: './Images/salad.png' },\n        { name: 'Dessert', price: 5, image: './Images/desert.png' },\n        { name: 'Sushi', price: 15, image: './Images/sushi.png' },\n        { name: 'Steak', price: 20, image: './Images/steak.png' },\n        { name: 'Smoothie', price: 6, image: './Images/Smoothie.png' },\n    ];\n\n    const menuDiv = document.createElement('div');\n    menuDiv.id = 'menu';\n\n    for (let item of menuItems) {\n        const itemDiv = document.createElement('div');\n        itemDiv.className = 'menu-item';\n\n        const nameH2 = document.createElement('h2');\n        nameH2.textContent = item.name;\n        itemDiv.appendChild(nameH2);\n\n        const priceP = document.createElement('p');\n        priceP.textContent = `$${item.price}`;\n        itemDiv.appendChild(priceP);\n\n        const image = document.createElement('img');\n        image.src = item.image;\n        image.alt = item.name;\n        itemDiv.appendChild(image);\n\n        menuDiv.appendChild(itemDiv);\n    }\n\n    return menuDiv;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooter: () => (/* binding */ createFooter),\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createFooter() {\n  const footer = document.createElement('footer');\n  footer.innerHTML = `\n    \n      <div class=\"social-media\">\n        <!-- Add your social media links/icons here -->\n        <a href=\"#\" target=\"_blank\"><img src=\"./Images/facebook-icon.svg\" alt=\"Facebook\"></a>\n        <a href=\"#\" target=\"_blank\"><img src=\"./Images/x-icon.svg\" alt=\"Twitter\"></a>\n        <a href=\"#\" target=\"_blank\"><img src=\"./Images/instagram-icon.svg\" alt=\"Instagram\"></a>\n      </div>\n    </div>\n    <p>&copy; 2023 | UrbanPalate Cafe. All rights reserved.</p>\n  `;\n\n  return footer;\n}\n\nconst createHeader = function() {\n  const header = document.createElement('header');\n\n  const logoContainer = document.createElement('div');\n  logoContainer.classList.add('logo');\n  logoContainer.innerHTML = `\n  \n    <img src=\"./Images/logo.svg\" alt=\"Restaurant Logo\">\n    \n  `;\n\n  const nav = document.createElement('nav');\n  nav.innerHTML = `\n    <ul>\n      <li><a href=\"#\" id='home'>Home</a></li>\n      <li><a href=\"#\" id='menu'>Menu</a></li>\n      <li><a href=\"#\" id='about-us'>About Us</a></li>\n      <li><a href=\"#\" id='contact-us'>Contact Us</a></li>\n    </ul>\n  `;\n\n  header.appendChild(logoContainer);\n  header.appendChild(nav);\n\n  return header;\n};\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;