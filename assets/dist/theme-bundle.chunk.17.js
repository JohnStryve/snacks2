webpackJsonp([17],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_manager__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_firebase__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bigcommerce_stencil_utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsrender__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsrender___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jsrender__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_isadmin__ = __webpack_require__(212);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var b2b=function(_PageManager){_inherits(b2b,_PageManager);function b2b(){_classCallCheck(this,b2b);return _possibleConstructorReturn(this,_PageManager.apply(this,arguments))}b2b.prototype.loaded=function loaded(next){console.log('b2b.js');this.admin();next()};b2b.prototype.admin=function admin(){var self=this;__WEBPACK_IMPORTED_MODULE_5__common_isadmin__["a" /* IsAdmin */].check(function(authorized){console.info('admin: ',authorized);window.admin=authorized})};return b2b}(__WEBPACK_IMPORTED_MODULE_0__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (b2b);

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.17.js.map