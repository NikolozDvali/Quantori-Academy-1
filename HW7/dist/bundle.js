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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/checked.svg */ \"./src/images/checked.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Nunito';\\r\\n}\\r\\n\\r\\n#functional-example{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.container{\\r\\n    position: relative;\\r\\n    margin-top: 44px;\\r\\n    width: 74.3%;\\r\\n}\\r\\n\\r\\n.header{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    gap: 10px;\\r\\n    width: 100%;\\r\\n    height: 85px;\\r\\n}\\r\\n\\r\\n.headerName{\\r\\n    font-family: 'Nunito';\\r\\n    font-style: normal;\\r\\n    font-weight: 700;\\r\\n    font-size: 32px;\\r\\n    line-height: 36px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    color: #1D1D1D;\\r\\n}\\r\\n\\r\\n.navBar{\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    height: 52px;\\r\\n}\\r\\n\\r\\n.navBar--form{\\r\\n    height:100%;\\r\\n    width: 79%;\\r\\n}\\r\\n\\r\\n.searchBar{\\r\\n    box-sizing: border-box;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: flex-start;\\r\\n    gap: 10px;\\r\\n    position: relative;\\r\\n    padding-left: 21px;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    left: 0px;\\r\\n    background: #F5F5F5;\\r\\n    border: 1px solid #D2D2D2;\\r\\n    border-radius: 12px;\\r\\n}\\r\\n\\r\\n.addNewButton{\\r\\n    cursor: pointer;\\r\\n    display: grid;\\r\\n    align-items: center;\\r\\n    justify-self: center;\\r\\n    gap: 10px;\\r\\n    position: relative;\\r\\n    width: 16.63%;\\r\\n    height: 100%;\\r\\n    margin-left: 39px;\\r\\n    background: rgba(60, 134, 244, 0.15);\\r\\n    border-radius: 12px;\\r\\n    border: none;\\r\\n    color: #0053CF;\\r\\n}\\r\\n\\r\\nli::marker{\\r\\n    content: \\\"\\\";\\r\\n}\\r\\n\\r\\n.listsDiv--uncompleted, .listsDiv--isCompleted{\\r\\n    margin-top: 42px;\\r\\n}\\r\\n\\r\\n.listTitle-uncompleted, .listTitle-isCompleted{\\r\\n    font-family: 'Nunito';\\r\\n    font-style: normal;\\r\\n    font-weight: 700;\\r\\n    font-size: 24px;\\r\\n    line-height: 33px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    color: #000000;\\r\\n    margin-bottom: 12px;\\r\\n}\\r\\n\\r\\n.listItem--uncompleted, .listItem--isCompleted{\\r\\n    margin-top: 12px;\\r\\n    width: 50.68%;\\r\\n    box-sizing: border-box;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    padding: 8px 12px;\\r\\n    padding-left: 0;\\r\\n    gap: 20px;\\r\\n    position: relative;\\r\\n    height: 67px;\\r\\n    left: 0px;\\r\\n}\\r\\n\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n    -webkit-appearance: none;\\r\\n    -moz-appearance: none;\\r\\n    appearance: none;\\r\\n    width: 20px; \\r\\n    height: 20px;\\r\\n    background: #FFFFFF;\\r\\n    border: 2px solid #D3D3D3;\\r\\n    border-radius: 4px;\\r\\n    vertical-align: middle; \\r\\n    margin-left: 12px;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  \\r\\n  input[type=\\\"checkbox\\\"]:checked {\\r\\n    background-repeat: no-repeat;\\r\\n    background-color: #ccc;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-size: inherit;\\r\\n    background-position: center;\\r\\n  }\\r\\n\\r\\n  .deleteIcon{\\r\\n    position: absolute;\\r\\n    cursor: pointer;\\r\\n    right:0;\\r\\n  }\\r\\n\\r\\n.taskParagraph--isCompleted{\\r\\n    color: #838383;\\r\\n}\\r\\n\\r\\n.popupDiv{\\r\\n    position: fixed;\\r\\n    display: none;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    width: 524px;\\r\\n    height: 371px;\\r\\n    left: 50%;\\r\\n    top: 158px;\\r\\n    transform: translate(-50%, 0);\\r\\n    background: #FFFFFF;\\r\\n    border: 1px solid #0053CF;\\r\\n    border-radius: 24px;\\r\\n}\\r\\n\\r\\n.popupTitle{\\r\\n    margin-top: 24px;\\r\\n    font-style: normal;\\r\\n    font-weight: 700;\\r\\n    font-size: 24px;\\r\\n    line-height: 33px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    color: #000000;\\r\\n}\\r\\n\\r\\n.popupField{\\r\\n    display: flex;\\r\\n    margin-top: 38px;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: calc(88% - 21px);\\r\\n    height: 52px;\\r\\n    padding-left: 21px;\\r\\n    gap: 10px;\\r\\n    background: #F5F5F5;\\r\\n    border: 1px solid #D2D2D2;\\r\\n    border-radius: 12px;\\r\\n}\\r\\n\\r\\n.addTaskButton--grey{\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: calc(43% - 32px);\\r\\n    height: 52px;\\r\\n    bottom: 22px;\\r\\n    right: 27px;\\r\\n    border: none;\\r\\n    background: #D3D3D3;\\r\\n    border-radius: 12px;\\r\\n    flex: none;\\r\\n    order: 1;\\r\\n    font-size: 16px;\\r\\n    line-height: 20px;\\r\\n    color: #FFFFFF;\\r\\n}\\r\\n\\r\\n.cancelButton{\\r\\n    cursor: pointer;\\r\\n    position: absolute;\\r\\n    left: 120.25px;\\r\\n    bottom: 38px;\\r\\n    border: 0;\\r\\n    background-color: #FFFFFF;\\r\\n    color: #0053CF;\\r\\n    font-style: normal;\\r\\n    font-weight: 800;\\r\\n    font-size: 16px;\\r\\n    line-height: 20px;\\r\\n}\\r\\n\\r\\n.addTaskButton--blue{\\r\\n    cursor: pointer;\\r\\n    background-color: #3C86F4;\\r\\n}\\r\\n\\r\\n.listItem__Middle{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.listItem__Attributes{\\r\\n    margin-top: 11px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    padding: 0px;\\r\\n    gap: 10px;\\r\\n    height: 20px;\\r\\n}\\r\\n\\r\\n.listItem__Tag--tag--uncompleted, .listItem__Tag--home--uncompleted, .listItem__Tag--health--uncompleted, .listItem__Tag--work--uncompleted, .listItem__Tag--other--uncompleted{\\r\\n    display: flex;\\r\\n    height: 16px;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    border-radius: 6px;\\r\\n    padding: 2px 8px;\\r\\n    font-family: 'Nunito';\\r\\n    font-style: normal;\\r\\n    font-weight: 600;\\r\\n    font-size: 12px;\\r\\n    line-height: 16px;\\r\\n    border: 0;\\r\\n}\\r\\n\\r\\n.listItem__Tag--tag--isCompleted, .listItem__Tag--home--isCompleted, .listItem__Tag--health--isCompleted, .listItem__Tag--work--isCompleted, .listItem__Tag--other--isCompleted{\\r\\n    display: flex;\\r\\n    height: 16px;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    border-radius: 6px;\\r\\n    padding: 2px 8px;\\r\\n    font-family: 'Nunito';\\r\\n    font-style: normal;\\r\\n    font-weight: 600;\\r\\n    font-size: 12px;\\r\\n    line-height: 16px;\\r\\n    background: #F5F5F5;\\r\\n    color: #838383;\\r\\n    border: 0;\\r\\n}\\r\\n\\r\\n.listItem__Tag--tag--uncompleted, .listItem__Tag--other--uncompleted{\\r\\n    background: #FFECC7;\\r\\n    color: #EA8C00;\\r\\n}\\r\\n\\r\\n.listItem__Tag--home--uncompleted{\\r\\n    background: #E2F7E2;\\r\\n    color: #639462;\\r\\n}\\r\\n\\r\\n.listItem__Tag--health--uncompleted{\\r\\n    background: rgba(60, 134, 244, 0.31);\\r\\n    color: #0053CF;\\r\\n}\\r\\n\\r\\n.listItem__Tag--work--uncompleted{\\r\\n    background: #E8D7FF;\\r\\n    color:#9747FF;\\r\\n}\\r\\n\\r\\n.listItem__date{\\r\\n    font-family: 'Nunito';\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 12px;\\r\\n    line-height: 16px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    color: #838383;\\r\\n}\\r\\n\\r\\n.tagsInput{\\r\\n    display: flex;\\r\\n    position: absolute;\\r\\n    left: 32px;\\r\\n    top: 176px;\\r\\n    gap: 12px;\\r\\n}\\r\\n\\r\\n.tagsInput__work--selected{\\r\\n    border: 1px solid #9747FF;\\r\\n}\\r\\n.tagsInput__home--selected{\\r\\n    border: 1px solid #639462;\\r\\n}\\r\\n.tagsInput__health--selected{\\r\\n    border: 1px solid #0053CF;\\r\\n}\\r\\n.tagsInput__other--selected{\\r\\n    border: 1px solid #EA8C00;\\r\\n}\\r\\n\\r\\n.dateInput{\\r\\n    cursor: pointer;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    padding-left: 10px;\\r\\n    gap: 10px;\\r\\n    position: absolute;\\r\\n    width: 107px;\\r\\n    height: 40px;\\r\\n    right: 5.5%;\\r\\n    top: 165px;\\r\\n    background: #FFFFFF;\\r\\n    border: 2px solid grey;\\r\\n    border-radius: 12px;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 16px;\\r\\n    line-height: 20px;\\r\\n    color: #1D1D1D;\\r\\n}\\r\\n.dateInput--filled{\\r\\n    border: 2px solid rgba(60, 134, 244, 0.6);\\r\\n}\\r\\n\\r\\ninput[type=\\\"date\\\"]::-webkit-inner-spin-button,\\r\\ninput[type=\\\"date\\\"]::-webkit-calendar-picker-indicator {\\r\\n    display: none;\\r\\n    -webkit-appearance: none;\\r\\n}\\r\\n\\r\\n.cursorOnTag{\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.weatherContainer{\\r\\n    position: relative;\\r\\n    width: 332px;\\r\\n    height: 65px;\\r\\n    background: #FFFFFF;\\r\\n    border-radius: 24px;\\r\\n    flex: none;\\r\\n    order: 1;\\r\\n    flex-grow: 0;\\r\\n}\\r\\n\\r\\n.weather__icon{\\r\\n    position: absolute;\\r\\n    left: 6.63%;\\r\\n    right: 76.2%;\\r\\n    top: 16.92%;\\r\\n    bottom: 15.38%;\\r\\n    width: 57px;\\r\\n    height: 44px;\\r\\n}\\r\\n\\r\\n.weather__degrees{\\r\\n    position: absolute;\\r\\n    left: 30.77%;\\r\\n    right: 50%;\\r\\n    top: 35%;\\r\\n    bottom: 35%;\\r\\n    font-style: normal;\\r\\n    font-weight: 700;\\r\\n    font-size: 18px;\\r\\n    line-height: 36px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    color: #000000;\\r\\n}\\r\\n\\r\\n.weather__location{\\r\\n    width: max-content;\\r\\n    position: absolute;\\r\\n    left: 74.56%;\\r\\n    right: 4.44%;\\r\\n    top: 35%;\\r\\n    bottom: 35%;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 18px;\\r\\n    line-height: 36px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    color: #838383;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hw7/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hw7/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://hw7/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hw7/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hw7/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hw7/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hw7/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hw7/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hw7/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hw7/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hw7/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\n//returns list title;\r\nfunction ListTitle(title){\r\n    const h1 = document.createElement('h1');\r\n    h1.innerText = title;\r\n    h1.classList.add(\"listTitle\");\r\n    return h1;\r\n}\r\n\r\n//returns radio element;\r\nfunction RadioElement(items, item, index) {\r\n    const { isCompleted } = item;\r\n    \r\n    const updateItems = (isCompleted) => {\r\n      items.tasks[index].isCompleted = isCompleted;\r\n      const updatedTask = items.tasks[index];\r\n        fetch(`http://localhost:3004/tasks/${item.id}`, {\r\n            method: 'PUT',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n             },\r\n             body: JSON.stringify(updatedTask)\r\n             })\r\n            .catch(error => console.error(error));\r\n    };\r\n    \r\n    const radioElement = document.createElement(\"input\");\r\n    radioElement.type = \"checkbox\";\r\n    radioElement.checked = isCompleted;\r\n    radioElement.onchange = (event) => {\r\n      const isCompleted = event.target.checked;\r\n      updateItems(isCompleted);\r\n    };\r\n    \r\n    return radioElement;\r\n  }\r\n\r\n//Image is reserved word so I called this function 'MyImage' :)\r\n//returns remove image for uncompleted tasks;\r\nfunction MyImage(item, setItems) {\r\n\r\n    const { src, classList } = {\r\n      src: '../src/images/Delete.svg',\r\n      classList: ['deleteIcon'],\r\n    };\r\n  \r\n    const deleteItem = () => {\r\n      fetch(`http://localhost:3004/tasks/${item.id}`, {\r\n        method: 'DELETE'\r\n        }).catch(error => console.error(error));\r\n    };\r\n  \r\n    const img = document.createElement('img');\r\n    img.src = src;\r\n    img.classList.add(...classList);\r\n    img.onclick = deleteItem;\r\n    \r\n    return img;\r\n  }\r\n  \r\nfunction Tag(title, displayCompleted, cursorOn){\r\n    const tag = document.createElement(\"div\");\r\n    const className = `listItem__Tag--${title}--${displayCompleted ? 'isCompleted' : 'uncompleted'}`;\r\n    tag.classList.add(className);\r\n    tag.innerText = title;\r\n    if(cursorOn){\r\n        tag.classList.add(\"cursorOnTag\");\r\n    }\r\n    return tag;\r\n}\r\n\r\nfunction MiddleOfListItem(displayCompleted, item){\r\n    const mid = document.createElement(\"div\");\r\n            mid.classList.add(\"listItem__Middle\")\r\n            const pElement = document.createElement('p');\r\n            pElement.classList.add(`taskParagraph--${displayCompleted ? 'isCompleted' : 'uncompleted'}`);\r\n            pElement.textContent = item.title;\r\n\r\n            const attributes = document.createElement(\"div\");\r\n            attributes.classList.add(\"listItem__Attributes\");\r\n\r\n            const tag = Tag(item.tag, displayCompleted);\r\n\r\n            const date = document.createElement(\"p\");\r\n            date.classList.add(\"listItem__date\");\r\n            date.innerText = item.date;\r\n\r\n            attributes.appendChild(tag);\r\n            attributes.appendChild(date);\r\n    \r\n            mid.appendChild(pElement);\r\n            mid.appendChild(attributes);\r\n    return mid;\r\n}\r\n\r\n//returns list itself, 'displayCompleted' is bool that indicates whether it should be list of isCompleted tasks or uncompleted tasks;\r\nfunction ListCompletedAndUncompleted(items, setItems, displayCompleted) {\r\n    const div = document.createElement('div');\r\n    div.classList.add(`listsDiv--${displayCompleted ? 'isCompleted' : 'uncompleted'}`);\r\n    div.appendChild(ListTitle(displayCompleted ? 'isCompleted Tasks' : 'All tasks'));\r\n    const ul = document.createElement('ul');\r\n    ul.classList.add('ul');\r\n    items.tasks.forEach((item, index) => {\r\n        if (item.isCompleted === displayCompleted) {\r\n            const li = document.createElement('li');\r\n            li.classList.add(`listItem--${displayCompleted ? 'isCompleted' : 'uncompleted'}`);\r\n            li.setAttribute(\"id\", `listItem--${displayCompleted ? 'isCompleted' : 'uncompleted'}--${index}`)\r\n\r\n            const radioElement = RadioElement(items, item, index, setItems);\r\n            li.appendChild(radioElement);\r\n\r\n            const mid = MiddleOfListItem(displayCompleted, item);\r\n            li.appendChild(mid);\r\n\r\n            if (!displayCompleted) {\r\n                const img = MyImage(item, setItems);\r\n                li.appendChild(img);\r\n            }\r\n\r\n            ul.appendChild(li);\r\n        }\r\n    });\r\n    div.appendChild(ul);\r\n    return div;\r\n}\r\n\r\n/**\r\n * Functional component for the list\r\n * @param items {string[]}\r\n * @returns {HTMLElement} - List element\r\n */\r\nfunction List(items, setItems) {\r\n    const div = document.createElement(\"div\");\r\n    \r\n    const uncompletedList = ListCompletedAndUncompleted(items, setItems, false);\r\n    const completedList = ListCompletedAndUncompleted(items, setItems, true);\r\n    \r\n    div.classList.add(\"lists\");\r\n    div.appendChild(uncompletedList);\r\n    div.appendChild(completedList);\r\n    return div;\r\n  }\n\n//# sourceURL=webpack://hw7/./src/List.js?");

/***/ }),

/***/ "./src/Popup.js":
/*!**********************!*\
  !*** ./src/Popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Popup\": () => (/* binding */ Popup)\n/* harmony export */ });\n/**\r\n     * Button component\r\n     * @param text {string}\r\n     * @param onClick {function}\r\n     * @returns {HTMLButtonElement} - Button element\r\n     */\r\nfunction Button({text, onClick, class: className}) {\r\n    const button = document.createElement(\"button\");\r\n    button.innerHTML = text;\r\n    button.onclick = onClick;\r\n    button.classList.add(className);\r\n    return button;\r\n}\r\n\r\nfunction Tag(title, displayCompleted, cursorOn){\r\n    const tag = document.createElement(\"div\");\r\n    const className = `listItem__Tag--${title}--${displayCompleted ? 'isCompleted' : 'uncompleted'}`;\r\n    tag.classList.add(className);\r\n    tag.innerText = title;\r\n    if(cursorOn){\r\n        tag.classList.add(\"cursorOnTag\");\r\n    }\r\n    return tag;\r\n}\r\n\r\n //returns popup title paragraph;\r\n function PopupTitle(title){\r\n    const p = document.createElement('p');\r\n    p.innerText = title;\r\n    p.classList.add(\"popupTitle\")\r\n    return p;\r\n}\r\n\r\n//returns text input for pupup;\r\nfunction PopupField(){\r\n    const field = document.createElement(\"input\");\r\n    field.classList.add(\"popupField\");\r\n    field.placeholder = \"Task Title\";\r\n    field.type = \"text\";\r\n    return field;\r\n}\r\n\r\n//returns array of objects (tags);\r\n// {html: tag itself, title: title of the tag}\r\nfunction TagInputs(){\r\n        const healthTag = {html: Tag(\"health\", false, true), title: \"health\"};\r\n        const workTag = {html: Tag(\"work\", false, true), title: \"work\"};\r\n        const homeTag = {html: Tag(\"home\", false, true), title: \"home\"};\r\n        const otherTag = {html: Tag(\"other\", false, true), title: \"other\"};\r\n        return [healthTag, workTag, homeTag, otherTag];\r\n}\r\n\r\n//removes --selected class from all tags;\r\nfunction makeAllTagsUnselected(tags){\r\n        for(let i = 0; i<tags.length; i++){\r\n            tags[i].html.classList.remove(`tagsInput__${tags[i].title}--selected`);\r\n        }\r\n}\r\n\r\n//when tag is clicked, it becomes selected tag;\r\n//other tags lose class --selected;\r\nfunction addEventListenerToTag(selectedTag, tagInputs, i){\r\n        tagInputs[i].html.addEventListener(\"click\", ()=>{\r\n            console.log(selectedTag.tag)\r\n            console.log(tagInputs[i].title)\r\n            if(tagInputs[i].title==selectedTag.tag){\r\n                selectedTag.tag = null;\r\n                makeAllTagsUnselected(tagInputs);\r\n            }else{\r\n                selectedTag.tag = tagInputs[i].title;\r\n                makeAllTagsUnselected(tagInputs);\r\n                tagInputs[i].html.classList.add(`tagsInput__${selectedTag.tag}--selected`);\r\n            }\r\n        })\r\n}\r\n\r\n //returns tags input div;\r\n function TagsInput(selectedTag){\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"tagsInput\");\r\n    const tagInputs = TagInputs();\r\n    \r\n    tagInputs.forEach((tagInput, i) => {\r\n      addEventListenerToTag(selectedTag, tagInputs, i);\r\n      div.appendChild(tagInput.html);\r\n    });\r\n    \r\n    return div;\r\n  }\r\n\r\n//returns date input;\r\nfunction DateInput(){\r\n    const date = document.createElement(\"input\");\r\n    date.type = \"date\";\r\n    date.classList.add(\"dateInput\");\r\n    date.onchange = ()=>{\r\n        if(date.value!=''){\r\n            date.classList.add(\"dateInput--filled\");\r\n        }else{\r\n            date.classList.remove(\"dateInput--filled\");\r\n        }\r\n    }\r\n    return date;\r\n}\r\n\r\n\r\n/*  Returns popup for adding new item into list;\r\n    */\r\nfunction Popup(){\r\n    let buttonIsValid = false;\r\n    //keeps track of which tag is selected;\r\n    //is object because needs to be passed as reference;\r\n    let selectedTag = {tag: null};\r\n    //function to add new item into list;\r\n    //new item is added when all inputs are placed;\r\n    function addItem(){\r\n        if(buttonIsValid){\r\n            function toValidForm(date){\r\n                const dt = new Date(date);\r\n                const months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\r\n                const days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\r\n                const output = days[dt.getDay()] + \", \" + dt.getDate() + \" \" + months[dt.getMonth()];\r\n                return output;\r\n            }\r\n            fetch('http://localhost:3004/tasks', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                },\r\n                body: JSON.stringify({ title: document.getElementsByClassName(\"popupField\")[0].value, isCompleted: false, tag: selectedTag.tag, date: toValidForm(dateInput.value)})\r\n                })\r\n                .catch(error => console.error(error));\r\n            selectedTag.tag = null;\r\n        }\r\n    }\r\n    //function to close popup;\r\n    //makes selected tag null;\r\n    function closePopup(){\r\n        document.getElementsByClassName(\"popupField\")[0].value = \"\";\r\n        document.getElementsByClassName(\"popupDiv\")[0].style.display=\"none\";\r\n        selectedTag.tag=null;\r\n    }\r\n    const cancelButton = Button({text: \"Cancel\", onClick: closePopup, class: \"cancelButton\"});\r\n    //checks if all inputs are valid and changes button display;\r\n    //changes buttonIsValid boolean;\r\n    function validateButton(){\r\n        if(selectedTag.tag!=null && dateInput.value!='' && field.value.length>0){\r\n            addButton.classList.add(\"addTaskButton--blue\");\r\n            buttonIsValid = true;\r\n        }else{\r\n            addButton.classList.remove(\"addTaskButton--blue\");\r\n            buttonIsValid = false;\r\n        }\r\n    }\r\n\r\n    const div = document.createElement(\"div\");\r\n    const popupTitle = PopupTitle(\"Add New Task\");\r\n    const addButton = Button({text: \"Add Task\", onClick: addItem ,class: \"addTaskButton--grey\"});\r\n    const field = PopupField(selectedTag);\r\n    const tagsInput = TagsInput(selectedTag);\r\n    const dateInput = DateInput();\r\n\r\n    const fields = [field, dateInput];\r\n    fields.forEach((input) => {\r\n        input.oninput = validateButton;\r\n    });\r\n    tagsInput.onclick = validateButton;\r\n\r\n    div.classList.add(\"popupDiv\");\r\n    div.append(popupTitle, field, tagsInput, dateInput, addButton, cancelButton);\r\n    return div;\r\n}\n\n//# sourceURL=webpack://hw7/./src/Popup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ \"./src/weather.js\");\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup.js */ \"./src/Popup.js\");\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List.js */ \"./src/List.js\");\n\r\n\r\n\r\n\r\n(function () {\r\n    let state = undefined;\r\n\r\n    /**\r\n     * Global application state\r\n     * @template T\r\n     * @param {T} initialValue\r\n     * @returns {[T, function(T): void]}\r\n     */\r\n    function useState(initialValue) {\r\n        state = state || initialValue;\r\n\r\n        function setValue(newValue) {\r\n            state = {\r\n                ...state,\r\n                ...newValue,\r\n            };\r\n            if(newValue.hasOwnProperty(\"searchText\")){\r\n                localStorage.setItem(\"searchText\", newValue.searchText);\r\n            }\r\n            renderApp();\r\n        }\r\n\r\n        return [state, setValue];\r\n    }\r\n\r\n\r\n    /**\r\n     * Button component\r\n     * @param text {string}\r\n     * @param onClick {function}\r\n     * @returns {HTMLButtonElement} - Button element\r\n     */\r\n    function Button({text, onClick, class: className}) {\r\n        const button = document.createElement(\"button\");\r\n        button.innerHTML = text;\r\n        button.onclick = onClick;\r\n        button.classList.add(className);\r\n        return button;\r\n    }\r\n\r\n    function makeSomeVisible(state, str){\r\n        state.tasks.map((item, index) => {\r\n            let uncompletedItem = document.getElementById(`listItem--uncompleted--${index}`);\r\n            let completedItem = document.getElementById(`listItem--isCompleted--${index}`);\r\n            if(item.title.toLowerCase().includes(str.toLowerCase())){\r\n                if(item.isCompleted==false){\r\n                    uncompletedItem.style.display = \"flex\";\r\n                }else{\r\n                    completedItem.style.display = \"flex\";\r\n                }\r\n            }else{\r\n                if(item.isCompleted==false){\r\n                    uncompletedItem.style.display = \"none\";\r\n                }else{\r\n                    completedItem.style.display = \"none\";\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    //returns searchBar;\r\n    function SearchBar(state, setState){\r\n        const form = document.createElement(\"form\");\r\n        form.classList.add(\"navBar--form\");\r\n\r\n        const search = document.createElement('input');\r\n        search.setAttribute('type', 'text');\r\n        search.setAttribute('placeHolder', \"Search Task\");\r\n        search.classList.add(\"searchBar\");\r\n\r\n        if(state.searchText!=null){\r\n            search.value = state.searchText;\r\n            setTimeout(()=>search.focus(), 0);\r\n            setTimeout(()=>makeSomeVisible(state, search.value),0);\r\n        }\r\n\r\n        search.oninput = (event) =>{\r\n            const str = event.target.value\r\n            makeSomeVisible(state, str);\r\n            setState({searchText: str});\r\n        }\r\n\r\n        form.appendChild(search);\r\n        return form;\r\n    }\r\n\r\n    //returns navBar;\r\n    function NavBar(state, setState){\r\n        const div = document.createElement(\"div\");\r\n        const searchBar = SearchBar(state, setState);\r\n        div.appendChild(searchBar);\r\n        div.classList.add(\"navBar\");\r\n        return div;\r\n    }\r\n\r\n    //returns weather container div;\r\n    function WeatherContainer(){\r\n        const div = document.createElement(\"div\");\r\n        const img = document.createElement(\"img\");\r\n        img.classList.add(\"weather__icon\");\r\n        const degreesP = document.createElement(\"p\");\r\n        degreesP.classList.add(\"weather__degrees\");\r\n        degreesP.innerHTML = \"13.4&#176\"\r\n        const locationP = document.createElement(\"p\");\r\n        locationP.classList.add(\"weather__location\");\r\n        locationP.innerText = \"Tbilisi\";\r\n        div.append(img, degreesP, locationP);\r\n        div.classList.add(\"weatherContainer\");\r\n        return div;\r\n    }\r\n\r\n    //returns header element;\r\n    function Header(){\r\n        let header = document.createElement(\"div\");\r\n        let headerName = document.createElement(\"h1\");\r\n        headerName.innerText = \"To Do List\";\r\n        header.append(headerName, WeatherContainer());\r\n        headerName.classList.add(\"headerName\");\r\n        header.classList.add(\"header\");\r\n        return header;\r\n    }\r\n\r\n    /**\r\n     * App container\r\n     * @returns {HTMLDivElement} - The app container\r\n     */\r\n    function App() {\r\n        //on the first enter on the page, gets data from the server;\r\n        const [state, setState] = useState({\r\n            searchText: '',\r\n            tasks: [],\r\n          });\r\n          \r\n        if (state.tasks.length === 0) {\r\n            fetch('http://localhost:3004/tasks')\r\n                .then(response => response.json())\r\n                .then(data => {\r\n                setState({tasks: data});\r\n                })\r\n                .catch(error => console.error(error));\r\n        }\r\n        if(localStorage.getItem(\"searchText\")){\r\n            state.searchText = localStorage.getItem(\"searchText\");\r\n        }\r\n\r\n        function openPopup(){\r\n            document.getElementsByClassName(\"popupDiv\")[0].style.display = \"flex\";\r\n        }\r\n      \r\n        const div = document.createElement(\"div\");\r\n        div.classList.add(\"container\");\r\n        const header = Header();\r\n        const list = (0,_List_js__WEBPACK_IMPORTED_MODULE_3__.List)(state, setState);\r\n        const navBar = NavBar(state, setState);\r\n        const button = Button({ text: \"+ New Task\", class:\"addNewButton\", onClick: openPopup});\r\n        navBar.appendChild(button);\r\n        const popup = (0,_Popup_js__WEBPACK_IMPORTED_MODULE_2__.Popup)(state, setState);\r\n      \r\n        div.append(header, navBar, list, popup);\r\n        return div;\r\n      }\r\n\r\n    /**\r\n     * Render the app.\r\n     * On change whole app is re-rendered.\r\n     */\r\n    function renderApp() {\r\n        const appContainer = document.getElementById(\"functional-example\");\r\n        appContainer.innerHTML = \"\";\r\n        appContainer.append(App());\r\n        (0,_weather_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)();\r\n    }\r\n\r\n    // initial render\r\n    renderApp();\r\n})();\n\n//# sourceURL=webpack://hw7/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nfunction getWeatherData() {\r\n    // Function to set the weather ic\r\n    function setWeatherIcon(data) {\r\n      let iconUrl = data.condition.icon;\r\n      iconUrl = iconUrl.substring(20, iconUrl.length);\r\n      document.getElementsByClassName(\"weather__icon\")[0].src = `../src/images${iconUrl}`;\r\n    }\r\n  \r\n    // Weather API key and default city\r\n    const API_KEY = \"95da8a101a2b4fdb8bb185943231204\";\r\n    let city = \"Tbilisi\";\r\n\r\n    const getDataFromWeatherAPI = ()=>{\r\n         // Get weather data from Weather API\r\n         const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`\r\n         fetch(url)\r\n           .then(response => response.json())\r\n           .then(data => {\r\n             // Update weather information on the page\r\n             document.getElementsByClassName(\"weather__degrees\")[0].innerHTML = `${data.current.temp_c}&#176`;\r\n             document.getElementsByClassName(\"weather__location\")[0].innerHTML = data.location.name;\r\n             setWeatherIcon(data.current);\r\n           })\r\n           .catch(error => console.log(error));\r\n    }\r\n    getDataFromWeatherAPI();\r\n\r\n  \r\n    // Callback functions for geolocation API\r\n    const successCallback = (position) => {\r\n      const lat = position.coords.latitude;\r\n      const lng = position.coords.longitude;\r\n      city = lat+\",\"+lng;\r\n      getDataFromWeatherAPI();\r\n    }\r\n  \r\n    const errorCallback = () => {\r\n      // If geolocation fails, use default city\r\n      city = \"Tbilisi\";\r\n      getDataFromWeatherAPI();\r\n    }\r\n  \r\n    // Get the user's location using geolocation API\r\n    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);\r\n}\r\n  \n\n//# sourceURL=webpack://hw7/./src/weather.js?");

/***/ }),

/***/ "./src/images/checked.svg":
/*!********************************!*\
  !*** ./src/images/checked.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"918d7d63ae26c2a595de.svg\";\n\n//# sourceURL=webpack://hw7/./src/images/checked.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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