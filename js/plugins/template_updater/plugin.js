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

/***/ "./src/actions.ts":
/*!************************!*\
  !*** ./src/actions.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.actionDictionary = void 0;\nexports.actionDictionary = {\n    'insert': function ($target, actionDefinition) { return insertAction($target, actionDefinition); },\n    'wrap': function ($target, actionDefinition) { return wrapAction($target, actionDefinition); },\n    'wrapInner': function ($target, actionDefinition) { return wrapInnerAction($target, actionDefinition); },\n    'updateClassName': function ($target, actionDefinition) { return updateClassNameAction($target, actionDefinition); },\n    'addClassName': function ($target, actionDefinition) { return addClassNameAction($target, actionDefinition); },\n    'removeClassName': function ($target, actionDefinition) { return removeClassNameAction($target, actionDefinition); },\n    'addAttribute': function ($target, actionDefinition) { return addAttributeAction($target, actionDefinition); },\n    'removeAttribute': function ($target, actionDefinition) { return removeAttributeAction($target, actionDefinition); },\n};\nfunction insertAction($target, actionDefinition) {\n    if (actionDefinition.action === 'insert') {\n        $target.append(actionDefinition.content);\n    }\n}\nfunction wrapAction($target, actionDefinition) {\n    if (actionDefinition.action === 'wrap') {\n        $target.wrap(actionDefinition.content);\n    }\n}\nfunction wrapInnerAction($target, actionDefinition) {\n    if (actionDefinition.action === 'wrapInner') {\n        $target.wrapInner(actionDefinition.content);\n    }\n}\nfunction updateClassNameAction($target, actionDefinition) {\n    if (actionDefinition.action === 'updateClassName') {\n        $target.removeClass(actionDefinition.className);\n        $target.addClass(actionDefinition.updatedClass);\n    }\n}\nfunction removeClassNameAction($target, actionDefinition) {\n    if (actionDefinition.action === 'removeClassName') {\n        $target.removeClass(actionDefinition.className);\n    }\n}\nfunction addClassNameAction($target, actionDefinition) {\n    if (actionDefinition.action === 'addClassName') {\n        $target.addClass(actionDefinition.className);\n    }\n}\nfunction addAttributeAction($target, actionDefinition) {\n    if (actionDefinition.action === 'addAttribute') {\n        $target.attr(actionDefinition.attributeName, actionDefinition.attributeData);\n    }\n}\nfunction removeAttributeAction($target, actionDefinition) {\n    if (actionDefinition.action === 'removeAttribute') {\n        $target.removeAttr(actionDefinition.attributeName);\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/actions.ts?");

/***/ }),

/***/ "./src/plugin.ts":
/*!***********************!*\
  !*** ./src/plugin.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n//@ts-ignore\n/// <reference path=\"node_modules/@types/jquery/jQuery.d.ts\" />\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/actions.ts\");\nvar templateVersions_1 = __webpack_require__(/*! ./templateVersions */ \"./src/templateVersions.ts\");\n(function ($) {\n    //@ts-ignore\n    CKEDITOR.plugins.add('template_updater', {\n        icons: 'template_updater',\n        init: function (editor) {\n            editor.addCommand('updateTemplates', {\n                exec: function (editor) {\n                    var $context = $('.cke_wysiwyg_frame').contents();\n                    // Holy mother of complexity\n                    for (var _i = 0, templateVersions_2 = templateVersions_1.templateVersions; _i < templateVersions_2.length; _i++) {\n                        var version = templateVersions_2[_i];\n                        var _loop_1 = function (template) {\n                            var $templateElements = $context.find(template.selector);\n                            $templateElements.each(function () {\n                                for (var _i = 0, _a = template.listOfActions; _i < _a.length; _i++) {\n                                    var action = _a[_i];\n                                    runAction($(this), action);\n                                }\n                            });\n                        };\n                        for (var _a = 0, _b = version.templates; _a < _b.length; _a++) {\n                            var template = _b[_a];\n                            _loop_1(template);\n                        }\n                    }\n                }\n            });\n            editor.ui.addButton('template_updater', {\n                id: 'template_updater',\n                label: 'Update templates',\n                command: 'updateTemplates',\n                toolbar: 'template_updater, 10',\n            });\n        }\n    });\n    function runAction($targetTemplate, actionDefinition) {\n        if (actionDefinition.selector !== 'root') {\n            $targetTemplate = $targetTemplate.find(actionDefinition.selector);\n        }\n        $targetTemplate.each(function () {\n            actions_1.actionDictionary[actionDefinition.action]($(this), actionDefinition);\n        });\n    }\n})(jQuery);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/plugin.ts?");

/***/ }),

/***/ "./src/templateVersions.ts":
/*!*********************************!*\
  !*** ./src/templateVersions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.templateVersions = void 0;\nexports.templateVersions = [\n    {\n        'version': 1,\n        'templates': [\n            {\n                'selector': '.cards',\n                'listOfActions': [\n                    {\n                        'action': 'insert',\n                        'selector': '.card',\n                        'content': '<strong>Hello</strong>',\n                    },\n                    {\n                        'action': 'wrapInner',\n                        'selector': '.card',\n                        'content': '<div class=\"red\" />',\n                    },\n                    {\n                        'action': 'updateClassName',\n                        'selector': '.card',\n                        'className': 'card',\n                        'updatedClass': 'card--green',\n                    },\n                    {\n                        'action': 'addClassName',\n                        'selector': '.card--green',\n                        'className': 'test',\n                    },\n                    {\n                        'action': 'addClassName',\n                        'selector': '.card--green',\n                        'className': 'test2',\n                    },\n                    {\n                        'action': 'removeClassName',\n                        'selector': '.card--green',\n                        'className': 'test',\n                    },\n                ]\n            }\n        ]\n    },\n    {\n        'version': 2,\n        'templates': [\n            {\n                'selector': '.cards',\n                'listOfActions': [\n                    {\n                        'action': 'insert',\n                        'selector': '.card--green',\n                        'content': 'Hello V2'\n                    },\n                    {\n                        'action': 'addAttribute',\n                        'selector': '.card--green',\n                        'attributeName': 'id',\n                        'attributeData': 'epic'\n                    },\n                    {\n                        'action': 'removeAttribute',\n                        'selector': '#epic',\n                        'attributeName': 'class'\n                    },\n                    {\n                        'action': 'addClassName',\n                        'selector': 'root',\n                        'className': 'testTemplate'\n                    }\n                ]\n            }\n        ]\n    }\n];\n\n\n//# sourceURL=webpack://my-webpack-project/./src/templateVersions.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/plugin.ts");
/******/ 	
/******/ })()
;