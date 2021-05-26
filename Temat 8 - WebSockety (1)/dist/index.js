/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html {\n  box-sizing: border-box;\n  font-size: 16px;\n  font-family: 'Open Sans', sans-serif; }\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal; }\n\nol,\nul {\n  list-style: none; }\n\nimg {\n  max-width: 100%;\n  height: auto; }\n\nbody {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: #ececec; }\n\n.window {\n  width: 1000px;\n  border-radius: 15px;\n  box-shadow: #bcbcbd 0px 5px 25px; }\n  .window .top-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 50px;\n    background: linear-gradient(0deg, #ea8252 11%, #d27448 81%);\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px; }\n    .window .top-bar .window__user {\n      padding-left: 15px;\n      font-size: 25px;\n      color: #7b4126; }\n    .window .top-bar .window__icons {\n      display: flex;\n      align-items: center;\n      gap: 20px;\n      height: 100%;\n      padding: 0 20px; }\n      .window .top-bar .window__icons .top-bar-icon {\n        font-size: 25px;\n        color: #7b4126;\n        cursor: pointer; }\n      .window .top-bar .window__icons .verical-line {\n        display: block;\n        width: 3px;\n        height: 25px;\n        background-color: #7b4126; }\n\n.baner {\n  background-image: url(https://www.tablety.pl/wp-content/uploads/2012/07/gg.png);\n  background-size: cover;\n  background-position: center;\n  height: 200px; }\n\n.chat-card {\n  position: relative;\n  width: 100%;\n  height: 170px;\n  background-color: #d2ac96; }\n  .chat-card .chat-card__user {\n    box-sizing: content-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 50px;\n    border-top: 3px solid #b89683;\n    border-right: 3px solid #b89683;\n    border-top-right-radius: 10px;\n    background-color: #fe9760;\n    z-index: 1; }\n  .chat-card .chat-card__content {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: absolute;\n    top: 50px;\n    left: 0;\n    height: calc(100% - 50px);\n    width: 100%;\n    background: linear-gradient(180deg, #fe9760 42%, #ea8252 100%);\n    padding: 0 15px;\n    border-top: 3px solid #b89683;\n    border-bottom: 3px solid #b89683; }\n    .chat-card .chat-card__content .description {\n      display: flex; }\n      .chat-card .chat-card__content .description .profile {\n        background-image: url(https://image.freepik.com/darmowe-zdjecie/widok-z-boku-zdjecie-atrakcyjnej-usmiechnietej-kobiety-lato-w-slomkowym-kapeluszu-na-bialym-tle-na-zoltej-scianie_231208-9768.jpg);\n        background-size: cover;\n        width: 75px;\n        height: 75px;\n        border-radius: 10px; }\n      .chat-card .chat-card__content .description .text {\n        width: 350px;\n        margin-top: 5px;\n        margin-left: 15px;\n        color: #967463;\n        font-size: 20px;\n        font-weight: 600;\n        font-style: italic; }\n    .chat-card .chat-card__content .action-buttons {\n      display: flex;\n      gap: 10px; }\n      .chat-card .chat-card__content .action-buttons .action-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n        background: linear-gradient(180deg, #fbc29c 41%, #fe9760 100%);\n        border: 2px solid #dc8768;\n        border-radius: 7px;\n        box-shadow: 0 4px 2px -2px rgba(255, 255, 255, 0.6);\n        cursor: pointer; }\n        .chat-card .chat-card__content .action-buttons .action-button .phone-icon {\n          font-size: 20px;\n          background: radial-gradient(circle, #a0c440 0%, #6f9731 100%);\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent; }\n        .chat-card .chat-card__content .action-buttons .action-button .video-icon {\n          font-size: 20px;\n          background: radial-gradient(circle, #a0c440 0%, #6f9731 100%);\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent; }\n        .chat-card .chat-card__content .action-buttons .action-button .user-plus-icon {\n          font-size: 20px;\n          background: radial-gradient(circle, #a9a1a7 0%, #746b6c 100%);\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent; }\n  .chat-card .chat-card__user {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 0 15px; }\n    .chat-card .chat-card__user .user-icon {\n      width: 40px;\n      height: 40px; }\n    .chat-card .chat-card__user .user-name {\n      font-size: 22px;\n      font-weight: 600; }\n    .chat-card .chat-card__user .user-close {\n      font-size: 22px;\n      color: #7b4126; }\n\n#messages-container {\n  display: flex;\n  flex-direction: column;\n  height: 470px;\n  background-color: #f1eeca;\n  overflow-y: scroll; }\n\n.additional-options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  background-color: #e4e1c0;\n  border-top: 5px solid #adab90; }\n  .additional-options .editing-options {\n    display: flex;\n    gap: 35px;\n    padding: 0 15px; }\n    .additional-options .editing-options .editing-option {\n      font-size: 25px;\n      color: #adab90;\n      cursor: pointer; }\n  .additional-options .other-options {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 0 15px; }\n    .additional-options .other-options .game-icon {\n      width: 40px;\n      cursor: pointer; }\n    .additional-options .other-options .game-text {\n      font-size: 20px;\n      font-weight: 600;\n      cursor: pointer; }\n    .additional-options .other-options .vertical-line {\n      display: block;\n      width: 3px;\n      height: 20px;\n      background-color: #adab90; }\n    .additional-options .other-options .options-icon {\n      font-size: 25px;\n      color: #adab90;\n      cursor: pointer; }\n\n#typing-window {\n  height: 140px;\n  width: 100%;\n  background-color: #fefcd6;\n  padding-left: 15px;\n  border: none;\n  font-size: 25px;\n  outline: none;\n  overflow-y: scroll; }\n\n.bottom-bar {\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  background: linear-gradient(180deg, #ea8252 11%, #d27448 81%);\n  padding: 0 15px;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px; }\n  .bottom-bar .message-types {\n    display: flex;\n    gap: 30px;\n    height: 100%;\n    cursor: pointer; }\n    .bottom-bar .message-types .text-type {\n      display: flex;\n      align-items: center;\n      height: 40px;\n      padding: 15px;\n      border-left: 3px solid #e99965;\n      border-bottom: 3px solid #e99965;\n      border-right: 3px solid #e99965;\n      border-bottom-left-radius: 7px;\n      border-bottom-right-radius: 7px;\n      background-color: rgba(255, 255, 255, 0.3); }\n      .bottom-bar .message-types .text-type i {\n        font-size: 25px; }\n      .bottom-bar .message-types .text-type span {\n        font-size: 20px;\n        font-weight: 600;\n        margin-left: 15px; }\n    .bottom-bar .message-types .sms-type {\n      display: flex;\n      align-items: center;\n      height: 40px;\n      padding: 15px;\n      cursor: pointer; }\n      .bottom-bar .message-types .sms-type i {\n        font-size: 25px;\n        background: radial-gradient(circle, #a9a1a7 0%, #746b6c 100%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent; }\n      .bottom-bar .message-types .sms-type span {\n        font-size: 20px;\n        font-weight: 600;\n        margin-left: 15px;\n        color: #7b4126; }\n  .bottom-bar #submit-button {\n    display: flex;\n    align-items: center;\n    height: 40px;\n    background: linear-gradient(180deg, #fbc29c 41%, #fe9760 100%);\n    padding: 15px;\n    border: none;\n    border-bottom-left-radius: 7px;\n    border-bottom-right-radius: 7px;\n    font-size: 20px;\n    font-weight: 600;\n    box-shadow: 0 4px 2px -2px rgba(255, 255, 255, 0.6);\n    outline: none;\n    cursor: pointer; }\n\n.message-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 25px 15px;\n  border-bottom: 3px solid #eeebc8; }\n  .message-container:nth-child(odd) {\n    background-color: #f1edca; }\n  .message-container:nth-child(even) {\n    background-color: #f5f2ce; }\n  .message-container .time {\n    color: #8d8b76;\n    font-size: 22px;\n    font-style: italic; }\n  .message-container .user-and-message {\n    display: flex;\n    flex-direction: column; }\n    .message-container .user-and-message .user-name {\n      font-size: 22px;\n      font-weight: 600; }\n    .message-container .user-and-message .message {\n      padding-top: 5px;\n      font-size: 24px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client.ts":
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);

let socket = new WebSocket('ws://localhost:8080');
socket.onmessage = function (e) {
    const messagesContainer = document.getElementById('messages-container');
    const item = createMessage(e.data);
    messagesContainer === null || messagesContainer === void 0 ? void 0 : messagesContainer.appendChild(item);
};
document.getElementById('submit-button').addEventListener('click', () => {
    const typingWindow = document.getElementById('typing-window');
    const typingWindowValue = typingWindow.value;
    socket.send(typingWindowValue);
    typingWindow.value = '';
});
const createMessage = (content) => {
    const messageContainer = document.createElement('li');
    messageContainer.className = 'message-container';
    const userAndMessageContainer = document.createElement('div');
    userAndMessageContainer.className = 'user-and-message';
    const userName = document.createElement('span');
    userName.className = 'user-name';
    userName.textContent = 'Użytkownik';
    const message = document.createElement('span');
    message.className = 'message';
    message.textContent = content;
    const time = document.createElement('span');
    time.className = 'time';
    time.textContent = getTime();
    userAndMessageContainer.appendChild(userName);
    userAndMessageContainer.appendChild(message);
    messageContainer.appendChild(userAndMessageContainer);
    messageContainer.appendChild(time);
    return messageContainer;
};
const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours}:${minutes}`;
    return time;
};


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnNjc3M/NGU1MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLDJCQUEyQixvQkFBb0IseUNBQXlDLEVBQUUsNEJBQTRC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Q0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbkMsT0FBTyxnQkFBZ0IsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRyxHQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRWxDLE1BQU0sSUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRW5DLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN4REYsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxpTUFBOEY7O0FBRWhJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2xpZW50LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbm9sLFxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYzsgfVxcblxcbi53aW5kb3cge1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAjYmNiY2JkIDBweCA1cHggMjVweDsgfVxcbiAgLndpbmRvdyAudG9wLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2VhODI1MiAxMSUsICNkMjc0NDggODElKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7IH1cXG4gICAgLndpbmRvdyAudG9wLWJhciAud2luZG93X191c2VyIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIGNvbG9yOiAjN2I0MTI2OyB9XFxuICAgIC53aW5kb3cgLnRvcC1iYXIgLndpbmRvd19faWNvbnMge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDIwcHg7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHBhZGRpbmc6IDAgMjBweDsgfVxcbiAgICAgIC53aW5kb3cgLnRvcC1iYXIgLndpbmRvd19faWNvbnMgLnRvcC1iYXItaWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICBjb2xvcjogIzdiNDEyNjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgIC53aW5kb3cgLnRvcC1iYXIgLndpbmRvd19faWNvbnMgLnZlcmljYWwtbGluZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAzcHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I0MTI2OyB9XFxuXFxuLmJhbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy50YWJsZXR5LnBsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEyLzA3L2dnLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyMDBweDsgfVxcblxcbi5jaGF0LWNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyYWM5NjsgfVxcbiAgLmNoYXQtY2FyZCAuY2hhdC1jYXJkX191c2VyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjYjg5NjgzO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjYjg5NjgzO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlOTc2MDtcXG4gICAgei1pbmRleDogMTsgfVxcbiAgLmNoYXQtY2FyZCAuY2hhdC1jYXJkX19jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZTk3NjAgNDIlLCAjZWE4MjUyIDEwMCUpO1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjYjg5NjgzO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2I4OTY4MzsgfVxcbiAgICAuY2hhdC1jYXJkIC5jaGF0LWNhcmRfX2NvbnRlbnQgLmRlc2NyaXB0aW9uIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgLmNoYXQtY2FyZCAuY2hhdC1jYXJkX19jb250ZW50IC5kZXNjcmlwdGlvbiAucHJvZmlsZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9kYXJtb3dlLXpkamVjaWUvd2lkb2stei1ib2t1LXpkamVjaWUtYXRyYWtjeWpuZWotdXNtaWVjaG5pZXRlai1rb2JpZXR5LWxhdG8tdy1zbG9ta293eW0ta2FwZWx1c3p1LW5hLWJpYWx5bS10bGUtbmEtem9sdGVqLXNjaWFuaWVfMjMxMjA4LTk3NjguanBnKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICB3aWR0aDogNzVweDtcXG4gICAgICAgIGhlaWdodDogNzVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG4gICAgICAuY2hhdC1jYXJkIC5jaGF0LWNhcmRfX2NvbnRlbnQgLmRlc2NyaXB0aW9uIC50ZXh0IHtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICAgICAgY29sb3I6ICM5Njc0NjM7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICAgIC5jaGF0LWNhcmQgLmNoYXQtY2FyZF9fY29udGVudCAuYWN0aW9uLWJ1dHRvbnMge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiAxMHB4OyB9XFxuICAgICAgLmNoYXQtY2FyZCAuY2hhdC1jYXJkX19jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYWN0aW9uLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJjMjljIDQxJSwgI2ZlOTc2MCAxMDAlKTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYzg3Njg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgIC5jaGF0LWNhcmQgLmNoYXQtY2FyZF9fY29udGVudCAuYWN0aW9uLWJ1dHRvbnMgLmFjdGlvbi1idXR0b24gLnBob25lLWljb24ge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNhMGM0NDAgMCUsICM2Zjk3MzEgMTAwJSk7XFxuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAgIC5jaGF0LWNhcmQgLmNoYXQtY2FyZF9fY29udGVudCAuYWN0aW9uLWJ1dHRvbnMgLmFjdGlvbi1idXR0b24gLnZpZGVvLWljb24ge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNhMGM0NDAgMCUsICM2Zjk3MzEgMTAwJSk7XFxuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAgIC5jaGF0LWNhcmQgLmNoYXQtY2FyZF9fY29udGVudCAuYWN0aW9uLWJ1dHRvbnMgLmFjdGlvbi1idXR0b24gLnVzZXItcGx1cy1pY29uIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjYTlhMWE3IDAlLCAjNzQ2YjZjIDEwMCUpO1xcbiAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuY2hhdC1jYXJkIC5jaGF0LWNhcmRfX3VzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDAgMTVweDsgfVxcbiAgICAuY2hhdC1jYXJkIC5jaGF0LWNhcmRfX3VzZXIgLnVzZXItaWNvbiB7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAgIC5jaGF0LWNhcmQgLmNoYXQtY2FyZF9fdXNlciAudXNlci1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgICAuY2hhdC1jYXJkIC5jaGF0LWNhcmRfX3VzZXIgLnVzZXItY2xvc2Uge1xcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICBjb2xvcjogIzdiNDEyNjsgfVxcblxcbiNtZXNzYWdlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDQ3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWVjYTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcblxcbi5hZGRpdGlvbmFsLW9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlMWMwO1xcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNhZGFiOTA7IH1cXG4gIC5hZGRpdGlvbmFsLW9wdGlvbnMgLmVkaXRpbmctb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzVweDtcXG4gICAgcGFkZGluZzogMCAxNXB4OyB9XFxuICAgIC5hZGRpdGlvbmFsLW9wdGlvbnMgLmVkaXRpbmctb3B0aW9ucyAuZWRpdGluZy1vcHRpb24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICBjb2xvcjogI2FkYWI5MDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5hZGRpdGlvbmFsLW9wdGlvbnMgLm90aGVyLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTVweDsgfVxcbiAgICAuYWRkaXRpb25hbC1vcHRpb25zIC5vdGhlci1vcHRpb25zIC5nYW1lLWljb24ge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuYWRkaXRpb25hbC1vcHRpb25zIC5vdGhlci1vcHRpb25zIC5nYW1lLXRleHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuYWRkaXRpb25hbC1vcHRpb25zIC5vdGhlci1vcHRpb25zIC52ZXJ0aWNhbC1saW5lIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogM3B4O1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRhYjkwOyB9XFxuICAgIC5hZGRpdGlvbmFsLW9wdGlvbnMgLm90aGVyLW9wdGlvbnMgLm9wdGlvbnMtaWNvbiB7XFxuICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIGNvbG9yOiAjYWRhYjkwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbiN0eXBpbmctd2luZG93IHtcXG4gIGhlaWdodDogMTQwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZjZDY7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuXFxuLmJvdHRvbS1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNlYTgyNTIgMTElLCAjZDI3NDQ4IDgxJSk7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7IH1cXG4gIC5ib3R0b20tYmFyIC5tZXNzYWdlLXR5cGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuYm90dG9tLWJhciAubWVzc2FnZS10eXBlcyAudGV4dC10eXBlIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZTk5OTY1O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTk5OTY1O1xcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNlOTk5NjU7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XFxuICAgICAgLmJvdHRvbS1iYXIgLm1lc3NhZ2UtdHlwZXMgLnRleHQtdHlwZSBpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDsgfVxcbiAgICAgIC5ib3R0b20tYmFyIC5tZXNzYWdlLXR5cGVzIC50ZXh0LXR5cGUgc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cXG4gICAgLmJvdHRvbS1iYXIgLm1lc3NhZ2UtdHlwZXMgLnNtcy10eXBlIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgLmJvdHRvbS1iYXIgLm1lc3NhZ2UtdHlwZXMgLnNtcy10eXBlIGkge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2E5YTFhNyAwJSwgIzc0NmI2YyAxMDAlKTtcXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLmJvdHRvbS1iYXIgLm1lc3NhZ2UtdHlwZXMgLnNtcy10eXBlIHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICAgICAgY29sb3I6ICM3YjQxMjY7IH1cXG4gIC5ib3R0b20tYmFyICNzdWJtaXQtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJjMjljIDQxJSwgI2ZlOTc2MCAxMDAlKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubWVzc2FnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmc6IDI1cHggMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZWVlYmM4OyB9XFxuICAubWVzc2FnZS1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZGNhOyB9XFxuICAubWVzc2FnZS1jb250YWluZXI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjJjZTsgfVxcbiAgLm1lc3NhZ2UtY29udGFpbmVyIC50aW1lIHtcXG4gICAgY29sb3I6ICM4ZDhiNzY7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICAubWVzc2FnZS1jb250YWluZXIgLnVzZXItYW5kLW1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIC5tZXNzYWdlLWNvbnRhaW5lciAudXNlci1hbmQtbWVzc2FnZSAudXNlci1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgICAubWVzc2FnZS1jb250YWluZXIgLnVzZXItYW5kLW1lc3NhZ2UgLm1lc3NhZ2Uge1xcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgZm9udC1zaXplOiAyNHB4OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5sZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuXG5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcblx0Y29uc3QgbWVzc2FnZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZXMtY29udGFpbmVyJyk7XG5cdGNvbnN0IGl0ZW0gPSBjcmVhdGVNZXNzYWdlKGUuZGF0YSk7XG5cdG1lc3NhZ2VzQ29udGFpbmVyPy5hcHBlbmRDaGlsZChpdGVtKTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnN0IHR5cGluZ1dpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdCd0eXBpbmctd2luZG93J1xuXHQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdGNvbnN0IHR5cGluZ1dpbmRvd1ZhbHVlID0gdHlwaW5nV2luZG93LnZhbHVlO1xuXG5cdHNvY2tldC5zZW5kKHR5cGluZ1dpbmRvd1ZhbHVlKTtcblxuXHR0eXBpbmdXaW5kb3cudmFsdWUgPSAnJztcbn0pO1xuXG5jb25zdCBjcmVhdGVNZXNzYWdlID0gKGNvbnRlbnQ6IHN0cmluZyk6IEhUTUxMSUVsZW1lbnQgPT4ge1xuXHRjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0bWVzc2FnZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVzc2FnZS1jb250YWluZXInO1xuXG5cdGNvbnN0IHVzZXJBbmRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHVzZXJBbmRNZXNzYWdlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd1c2VyLWFuZC1tZXNzYWdlJztcblxuXHRjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0dXNlck5hbWUuY2xhc3NOYW1lID0gJ3VzZXItbmFtZSc7XG5cdHVzZXJOYW1lLnRleHRDb250ZW50ID0gJ1XFvHl0a293bmlrJztcblxuXHRjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRtZXNzYWdlLmNsYXNzTmFtZSA9ICdtZXNzYWdlJztcblx0bWVzc2FnZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG5cblx0Y29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0dGltZS5jbGFzc05hbWUgPSAndGltZSc7XG5cdHRpbWUudGV4dENvbnRlbnQgPSBnZXRUaW1lKCk7XG5cblx0dXNlckFuZE1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlck5hbWUpO1xuXHR1c2VyQW5kTWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblx0bWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VyQW5kTWVzc2FnZUNvbnRhaW5lcik7XG5cdG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZSk7XG5cblx0cmV0dXJuIG1lc3NhZ2VDb250YWluZXI7XG59O1xuXG5jb25zdCBnZXRUaW1lID0gKCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblx0Y29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuXG5cdGNvbnN0IHRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG5cblx0cmV0dXJuIHRpbWU7XG59O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==