/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/bootstrap/constants.js":
/*!*******************************************!*\
  !*** ./components/bootstrap/constants.js ***!
  \*******************************************/
/*! exports provided: SIZES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZES", function() { return SIZES; });
/**
 * Base sizes
 *
 * @type {{sm: string, lg: string}}
 */
var SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

/***/ }),

/***/ "./components/dropzone/DropzoneBuilder.js":
/*!************************************************!*\
  !*** ./components/dropzone/DropzoneBuilder.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "../../../node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Loading text
 * It will be shown after the start of image uploading
 *
 * @type {string}
 */

var LOADING_TEXT = 'Loading...';
/**
 * Dropzone builder
 */

var _default =
/*#__PURE__*/
function () {
  /**
   * Constructor
   *
   * @param dropzoneContainer
   * @param config
   */
  function _default(dropzoneContainer) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, _default);

    this._config = config;
    this._dropzoneContainer = dropzoneContainer;
    this._cancelButton = $(dropzoneContainer).find('.dropzone-cancel');
  }
  /**
   * Set url to uploading
   *
   * @param url
   */


  _createClass(_default, [{
    key: "setUploadUrl",
    value: function setUploadUrl(url) {
      this._uploadUrl = url;
      return this;
    }
    /**
     * Set default preview image
     *
     * @param name
     * @param url
     */

  }, {
    key: "setPreview",
    value: function setPreview(name, url) {
      this._preview = {
        name: name,
        url: url
      };
      return this;
    }
    /**
     * Set error handler
     *
     * @param callback
     */

  }, {
    key: "error",
    value: function error(callback) {
      this._errorCallback = callback;
      return this;
    }
    /**
     * Set cancel handler
     *
     * @param callback
     */

  }, {
    key: "cancel",
    value: function cancel(callback) {
      this._cancelCallback = callback;
      return this;
    }
    /**
     * Set success handler
     *
     * @param callback
     */

  }, {
    key: "success",
    value: function success(callback) {
      this._successCallback = callback;
      return this;
    }
    /**
     * Build dropzone
     * @returns {Dropzone}
     */

  }, {
    key: "build",
    value: function build() {
      /**
       * this
       */
      var _dropzoneBuilder = this;
      /**
       * Call after fail
       */


      var dropzoneFail = function dropzoneFail() {
        $(_dropzoneBuilder._dropzoneContainer).removeClass('dz-started');
        $(_dropzoneBuilder._dropzoneContainer).find('.dz-preview').remove();
      };
      /**
       * Default configuration
       *
       * @type object
       */


      var config = {
        url: this._uploadUrl,
        thumbnailWidth: null,
        thumbnailHeight: null,
        uploadMultiple: false,
        acceptedFiles: 'image/*',
        headers: {
          'x-csrf-token': CSRF_TOKEN
        },
        init: function init() {
          /**
           * Set current image in the dropzone if it exists
           */
          if (!!_dropzoneBuilder._preview && !!_dropzoneBuilder._preview.url) {
            this.emit("addedfile", _dropzoneBuilder._preview);
            this.emit("thumbnail", _dropzoneBuilder._preview, _dropzoneBuilder._preview.url);
          }
          /**
           * Added file handler
           */


          this.on("addedfile", function () {
            $(_dropzoneBuilder._dropzoneContainer).find('.dz-filename span').text(LOADING_TEXT);
          });
          /**
           * Error handler
           */

          this.on("error", function (file, response) {
            dropzoneFail();

            if (!!_dropzoneBuilder._errorCallback) {
              _dropzoneBuilder._errorCallback(file, response);
            }
          });
          /**
           * Success handler
           */

          this.on("success", function (file, response) {
            if (!!_dropzoneBuilder._successCallback) {
              _dropzoneBuilder._successCallback(file, response);
            }
          });
        }
      };
      /**
       * Clear button handler
       * Clear file info in dropzone
       */

      if (!!this._cancelButton) {
        this._cancelButton.click(function () {
          dropzoneFail();

          if (!!_dropzoneBuilder._cancelCallback) {
            _dropzoneBuilder._cancelCallback();
          }
        });
      }
      /**
       * Dropzone build
       */


      return new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(this._dropzoneContainer, _objectSpread({}, config, this._config));
    }
  }]);

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/http/RequestBuilder.js":
/*!*******************************************!*\
  !*** ./components/http/RequestBuilder.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var _successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./successHandler */ "./components/http/successHandler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * HTTP Request Builder
 */

var _default =
/*#__PURE__*/
function () {
  function _default(url) {
    _classCallCheck(this, _default);

    this._url = url;
    this._method = 'get';
    this._data = {};
    this._error = _errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"];
    this._success = _successHandler__WEBPACK_IMPORTED_MODULE_1__["default"];

    this._complete = function () {};
  }

  _createClass(_default, [{
    key: "method",
    value: function method(_method) {
      this._method = _method;
      return this;
    }
  }, {
    key: "data",
    value: function data(_data) {
      this._data = _data;
      return this;
    }
  }, {
    key: "error",
    value: function error(fn) {
      this._error = fn;
      return this;
    }
  }, {
    key: "success",
    value: function success(fn) {
      this._success = fn;
      return this;
    }
  }, {
    key: "complete",
    value: function complete(fn) {
      this._complete = fn;
      return this;
    }
  }, {
    key: "send",
    value: function send() {
      var _this = this;

      $.ajax({
        url: this._url,
        type: this._method,
        data: this._data,
        error: function error(response) {
          if (!!response.responseJSON) {
            _this._error(response.responseJSON);
          }
        },
        success: this._success,
        complete: this._complete
      });
    }
  }]);

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/http/errorHandler.js":
/*!*****************************************!*\
  !*** ./components/http/errorHandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/**
 * Base error handler
 *
 * @param response
 */

/* harmony default export */ __webpack_exports__["default"] = (function (response) {
  /**
   * Redirect to the route
   */
  if (!!response.route) {
    location.href = response.route;
    return;
  }
  /**
   * Show main error message
   */


  if (!!response.message) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])(response.message);
  }
  /**
   * Show all messages
   */


  if (!!response.errors) {
    Object.keys(response.errors).map(function (key) {
      response.errors[key].map(function (error) {
        Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])(error);
      });
    });
  }
});

/***/ }),

/***/ "./components/http/index.js":
/*!**********************************!*\
  !*** ./components/http/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestBuilder */ "./components/http/RequestBuilder.js");


/***/ }),

/***/ "./components/http/successHandler.js":
/*!*******************************************!*\
  !*** ./components/http/successHandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");

/**
 * Base error handler
 *
 * @param response
 */

/* harmony default export */ __webpack_exports__["default"] = (function (response) {
  /**
   * Show main error message
   */
  console.log(response.message);

  if (!!response.message) {
    Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_0__["default"])(response.message);
  }
});

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./components/modal/index.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ "./components/observer/index.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "./components/http/index.js");




/***/ }),

/***/ "./components/modal/ModalBuilder.js":
/*!******************************************!*\
  !*** ./components/modal/ModalBuilder.js ***!
  \******************************************/
/*! exports provided: default, getModalCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModalCounter", function() { return getModalCounter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var modalsContainer = $('body');
var MODAL_SIZES = {
  sm: 'modal-sm',
  md: 'modal-md',
  lg: 'modal-lg'
};
/**
 * Unique index of the modal
 *
 * @type {number}
 */

var modalIndex = 0;
/**
 * Counter of the modals at the page
 *
 * @type {number}
 */

var modalCounter = 0;
/**
 * Modal Builder
 */

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);

    modalIndex++;
    this._id = 'modals-container-item-' + modalIndex;
  }

  _createClass(_default, [{
    key: "size",
    value: function size(_size) {
      if (!!MODAL_SIZES[_size]) {
        this._size = MODAL_SIZES[_size];
      }

      return this;
    }
  }, {
    key: "header",
    value: function header(_header) {
      this._header = _header;
      return this;
    }
  }, {
    key: "body",
    value: function body(_body) {
      this._body = _body;
      return this;
    }
  }, {
    key: "footer",
    value: function footer(_footer) {
      this._footer = _footer;
      return this;
    }
  }, {
    key: "dataset",
    value: function dataset(_dataset) {
      this._dataset = _dataset;
      return this;
    }
  }, {
    key: "_getID",
    value: function _getID() {
      return this._id;
    }
  }, {
    key: "_getSize",
    value: function _getSize() {
      return !!this._size ? this._size : MODAL_SIZES.md;
    }
  }, {
    key: "_getHeader",
    value: function _getHeader() {
      if (!!this._header) {
        return "\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">\xD7</span>\n                    </button>\n                   <h4 class=\"modal-title\">".concat(this._header, "</h4>\n                </div>");
      }

      return '';
    }
  }, {
    key: "_getFooter",
    value: function _getFooter() {
      var result = null;

      if (!!this._footer) {
        result = $("<div class=\"modal-footer\"></div>").append($("\n                    <button type=\"button\" class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">\n                        Cancel\n                    </button>\n                ")).append(this._footer);
      }

      return result;
    }
  }, {
    key: "_getBody",
    value: function _getBody() {
      var result = null;

      if (!!this._body) {
        result = $("<div class=\"modal-body\"></div>").append(this._body);
      }

      return result;
    }
    /**
     * Set callback that will be call before build modal
     *
     * @param callback
     */

  }, {
    key: "beforeBuild",
    value: function beforeBuild(callback) {
      this._beforeBuildCallback = callback;
      return this;
    }
  }, {
    key: "_beforeBuild",
    value: function _beforeBuild() {
      if (typeof this._beforeBuildCallback === "function") {
        this._beforeBuildCallback();
      }
    }
    /**
     * Set callback that will be call after build modal
     *
     * @param callback
     */

  }, {
    key: "afterBuild",
    value: function afterBuild(callback) {
      this._afterBuildCallback = callback;
      return this;
    }
  }, {
    key: "_afterBuild",
    value: function _afterBuild() {
      if (typeof this._afterBuildCallback === "function") {
        this._afterBuildCallback();
      }
    }
  }, {
    key: "modal",
    value: function modal(content) {
      var _this = this;

      /**
       * Data attributes
       * @type {Array}
       */
      var dataset = [];

      if (!!this._dataset) {
        for (var name in this._dataset) {
          dataset.push("data-".concat(name, "=\"").concat(this._dataset[name], "\""));
        }
      }

      var html = $("\n            <div id=\"".concat(this._getID(), "\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" ").concat(dataset.join(' '), ">\n                <div class=\"modal-dialog modal-dialog-centered ").concat(this._getSize(), "\">\n                    <div class=\"modal-content\"></div>\n                </div>\n            </div>"));

      if (!!content) {
        this.body(content);
      }
      /**
       * Call the beforeBuild callback
       */


      this._beforeBuild();

      html.find('.modal-content').append(this._getHeader()).append(this._getBody()).append(this._getFooter());
      modalsContainer.append(html);
      /**
       * Call the afterBuild callback
       */

      this._afterBuild();
      /**
       * update counter of modals at the page
       */


      modalCounter++;
      $('#' + this._getID()).on('hidden.bs.modal', function () {
        modalCounter--;
        $('#' + _this._getID()).off('hidden.bs.modal').remove();
      }).modal();
    }
  }]);

  return _default;
}();
/**
 * Get counter of modals at the page
 *
 * @returns {number}
 */



function getModalCounter() {
  return modalCounter;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var _modalConfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalConfirm */ "./components/modal/modalConfirm.js");



/***/ }),

/***/ "./components/modal/modalConfirm.js":
/*!******************************************!*\
  !*** ./components/modal/modalConfirm.js ***!
  \******************************************/
/*! exports provided: modalConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalConfirm", function() { return modalConfirm; });
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");


/**
 * Modal confirm
 *
 * @param message
 * @param callback
 */

function modalConfirm(message, callback) {
  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header(message).footer($('<button/>', {
    'class': 'btn btn-sm btn-success',
    'text': 'Confirm',
    'data-dismiss': 'modal',
    'click': callback
  })).modal();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/notify/base.js":
/*!***********************************!*\
  !*** ./components/notify/base.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notify; });
/**
 * Notify helper
 *
 * @param message
 * @param type
 */
function notify(message, type) {
  $.notify({
    message: message
  }, {
    type: type,
    z_index: 1051
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/notify/notifyError.js":
/*!******************************************!*\
  !*** ./components/notify/notifyError.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/notify/base.js");

/* harmony default export */ __webpack_exports__["default"] = (function (message) {
  Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])(message, 'danger');
});

/***/ }),

/***/ "./components/notify/notifySuccess.js":
/*!********************************************!*\
  !*** ./components/notify/notifySuccess.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/notify/base.js");

/* harmony default export */ __webpack_exports__["default"] = (function (message) {
  Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])(message, 'success');
});

/***/ }),

/***/ "./components/observer/EventObserver.js":
/*!**********************************************!*\
  !*** ./components/observer/EventObserver.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Event observer
 */
var EventObserver =
/*#__PURE__*/
function () {
  function EventObserver() {
    _classCallCheck(this, EventObserver);

    this.subscribers = {};
  }

  _createClass(EventObserver, [{
    key: "subscribe",
    value: function subscribe(event, handler) {
      this._log('subscribe', event);

      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }

      this.subscribers[event].push(handler);
      return this;
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, data) {
      this._log('dispatch', event);

      if (!!this.subscribers[event]) {
        this.subscribers[event].forEach(function (handler) {
          handler(data, handler);
        });
      }

      return this;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(event, state) {
      this._log('unsubscribe', event);

      if (!!this.subscribers[event]) {
        this.subscribers[event] = this.subscribers[event].filter(function (handler) {
          return handler !== state;
        });
      }
    }
  }, {
    key: "_log",
    value: function _log(method, event) {
      console.log(method.toUpperCase(), ':', '[', event, ']');
    }
  }]);

  return EventObserver;
}();

var observer = new EventObserver();
/* harmony default export */ __webpack_exports__["default"] = (observer);

/***/ }),

/***/ "./components/observer/index.js":
/*!**************************************!*\
  !*** ./components/observer/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventObserver */ "./components/observer/EventObserver.js");


/***/ }),

/***/ "./exceptions/SavedItemNotFound.js":
/*!*****************************************!*\
  !*** ./exceptions/SavedItemNotFound.js ***!
  \*****************************************/
/*! exports provided: SavedItemNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedItemNotFound", function() { return SavedItemNotFound; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Saved item not found
 *
 * Using in fastSave handler
 */
var SavedItemNotFound =
/*#__PURE__*/
function (_Error) {
  _inherits(SavedItemNotFound, _Error);

  function SavedItemNotFound() {
    _classCallCheck(this, SavedItemNotFound);

    var message = 'SavedItemNotFound';
    return _possibleConstructorReturn(this, _getPrototypeOf(SavedItemNotFound).call(this, message));
  }

  return SavedItemNotFound;
}(_wrapNativeSuper(Error));

/***/ }),

/***/ "./handlers/addEmbed.js":
/*!******************************!*\
  !*** ./handlers/addEmbed.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");

/**
 * Add embed element
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentButton = $(this);
  var target = currentButton.data('target');
  var template = currentButton.data('template');
  var idPlaceholder = currentButton.data('idplacepolder');
  var rowId = currentButton.data('rowid');
  currentButton.data('rowid', ++rowId);
  var embedForm = $('#' + template).html();
  var embedBlockId = rowId + new Date().getTime().toString(16);
  embedForm = embedForm.replace(/%embedBlockId%/g, embedBlockId);

  if (!!idPlaceholder) {
    embedForm = embedForm.replace(new RegExp(idPlaceholder, "g"), rowId);
  }

  $('#' + target).append(embedForm);
  /**
   * Event dispatch
   */

  var event = currentButton.data('event');

  if (event && event.length) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(event, {
      embedBlockId: embedBlockId
    });
  }

  currentButton.trigger('ai_animation');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/ajaxPagination.js":
/*!************************************!*\
  !*** ./handlers/ajaxPagination.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 *Ajax pagination
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var container = $(this).parents('.ajax-pagination').data('container');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).method('get').success(function (response) {
    $('#' + container).replaceWith(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/confirmModal.js":
/*!**********************************!*\
  !*** ./handlers/confirmModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");





/**
 * Open confirm modal before action
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var dataSet = this.dataset;
  var url = this.href;
  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__["SIZES"].sm).header(dataSet.header).footer($('<button/>', {
    'class': (dataSet.btnClass || 'btn-sm btn-success') + ' btn',
    'text': dataSet.btnName || 'Confirm',
    'click': function click() {
      var currentButton = $(this);

      if (currentButton.hasClass('loading')) {
        return false;
      }

      currentButton.addClass('loading');
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](url).method(dataSet.method || 'get').success(function (response) {
        if (!!dataSet.event) {
          components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(dataSet.event, response);
        }

        if (parseInt(dataSet.reload) === 1) {
          location.reload();
        }

        if (parseInt(dataSet.dismiss) === 1) {
          currentButton.closest('.modal').modal('hide');
        }

        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(response);
      }).complete(function () {
        currentButton.removeClass('loading');
      }).send();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/fastSave.js":
/*!******************************!*\
  !*** ./handlers/fastSave.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");



/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = currentBtn.closest('.fast-save-container');

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(savedItem)).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/fastSavePage.js":
/*!**********************************!*\
  !*** ./handlers/fastSavePage.js ***!
  \**********************************/
/*! exports provided: CONTAINER_SELECTOR, default, markChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_SELECTOR", function() { return CONTAINER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChanged", function() { return markChanged; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var CONTAINER_SELECTOR = '.fast-save-page-container';
/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $(CONTAINER_SELECTOR);

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/**
 * Mark form's elements as changed
 */

function markChanged() {
  $(this).addClass('changed');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/index.js":
/*!***************************!*\
  !*** ./handlers/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _fastSave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fastSave */ "./handlers/fastSave.js");
/* harmony import */ var _addEmbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEmbed */ "./handlers/addEmbed.js");
/* harmony import */ var _removeEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeEmbed */ "./handlers/removeEmbed.js");
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitForm */ "./handlers/submitForm.js");
/* harmony import */ var _ajaxPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajaxPagination */ "./handlers/ajaxPagination.js");
/* harmony import */ var _confirmModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmModal */ "./handlers/confirmModal.js");
/* harmony import */ var _modalData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalData */ "./handlers/modalData.js");
/* harmony import */ var _fastSavePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fastSavePage */ "./handlers/fastSavePage.js");








$(document)
/**
 * Open modal with data from server by request
 */
.on('click', '.ajax-modal-action', _modalData__WEBPACK_IMPORTED_MODULE_6__["default"])
/**
 * Open confirm modal
 */
.on('click', '.ajax-confirm-action', _confirmModal__WEBPACK_IMPORTED_MODULE_5__["default"])
/**
 * Submit form data
 */
.on('click', '.ajax-submit-action', _submitForm__WEBPACK_IMPORTED_MODULE_3__["default"])
/**
 * Submit form data
 */
.on('click', '.ajax-pagination a', _ajaxPagination__WEBPACK_IMPORTED_MODULE_4__["default"])
/**
 * Add embed element
 */
.on('click', '.add-embed', _addEmbed__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Remove embed element
 */
.on('click', '.rm-embed', _removeEmbed__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Fast save the data of an entity
 */
.on('click', '.fast-save', _fastSave__WEBPACK_IMPORTED_MODULE_0__["default"])
/**
 * Mark inputs as changed
 */
.on('change', "".concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_7__["CONTAINER_SELECTOR"], " input, ").concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_7__["CONTAINER_SELECTOR"], " select, ").concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_7__["CONTAINER_SELECTOR"], " textarea"), _fastSavePage__WEBPACK_IMPORTED_MODULE_7__["markChanged"]);
/**
 * Fast save data on the page
 */

$('.fast-save-page').click(_fastSavePage__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/modalData.js":
/*!*******************************!*\
  !*** ./handlers/modalData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");




/**
 * Open modal with form by request
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var _this = this;

  e.preventDefault();
  var currentButton = $(this);

  if (currentButton.hasClass('loading')) {
    return false;
  }

  currentButton.addClass('loading');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](this.href).method(this.dataset.method || 'get').success(function (response) {
    new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__["SIZES"].lg).dataset({
      reload: _this.dataset.reload || 1
    }).header(_this.dataset.header).afterBuild(function () {
      if (!!_this.dataset.event) {
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_this.dataset.event, response);
      }
    }).modal(response);
  }).complete(function () {
    currentButton.removeClass('loading');
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/removeEmbed.js":
/*!*********************************!*\
  !*** ./handlers/removeEmbed.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");


/**
 * Remove embeded element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var parent = !!this.dataset.parent ? $(this).closest(this.dataset.parent) : $(this).parent();

  if (!this.dataset.id) {
    parent.remove();
    return;
  }

  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header('Are you sure?').footer($('<button/>', {
    'class': 'btn btn-sm btn-danger',
    'text': 'Delete',
    'data-dismiss': 'modal',
    'click': function click() {
      parent.remove();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/submitForm.js":
/*!********************************!*\
  !*** ./handlers/submitForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/**
 * Submit form
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var _this = this;

  e.preventDefault();
  var currentButton = $(this);

  if (currentButton.hasClass('loading')) {
    return false;
  }

  currentButton.addClass('loading');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this.href).data(currentButton.closest('form').serializeArray()).method(this.dataset.method || 'get').success(function (response) {
    if (!!_this.dataset.event) {
      components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_this.dataset.event, response);
    }

    if (canReload(_this)) {
      location.reload();
    }

    if (parseInt(_this.dataset.dismiss) === 1) {
      currentButton.closest('.modal').modal('hide');
    }

    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).complete(function () {
    currentButton.removeClass('loading');
  }).send();
  return false;
});
/**
 * Can reload the page
 *
 * @param button
 * @returns {boolean}
 */

function canReload(button) {
  if (parseInt(button.dataset.reload) === 1) {
    if (Object(components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_2__["getModalCounter"])() < 2) {
      var dataReload = $(button).closest('.modal').data('reload');

      if (_typeof(dataReload) === ( true ? "undefined" : undefined) || dataReload === false || parseInt(dataReload) === 1) {
        return true;
      }
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./helpers/getFilePath.js":
/*!********************************!*\
  !*** ./helpers/getFilePath.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getSubFolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSubFolder */ "./helpers/getSubFolder.js");

/**
 * Get file path from storage with sub folders
 *
 * @param {string} rootFolder Root folder in the storage
 * @param {string} fileName   File name
 *
 * @returns {string}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (rootFolder, fileName) {
  return '/storage/' + rootFolder + '/' + Object(_getSubFolder__WEBPACK_IMPORTED_MODULE_0__["default"])(fileName) + '/' + fileName;
});

/***/ }),

/***/ "./helpers/getFormData.js":
/*!********************************!*\
  !*** ./helpers/getFormData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Get form data
 *
 * @param {jQuery} form Form element
 *
 * @returns {{}}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (form) {
  var formData = {};
  var formItems = form.find('input, select');

  if (!formItems.length) {
    formItems = form;
  }

  formItems.each(function () {
    var currentItem = $(this);

    switch (currentItem.attr('type')) {
      case 'radio':
      case 'checkbox':
        formData[currentItem.attr('name')] = !!currentItem.prop("checked") * 1;
        break;

      default:
        formData[currentItem.attr('name')] = currentItem.val();
    }
  });
  return formData;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./helpers/getSubFolder.js":
/*!*********************************!*\
  !*** ./helpers/getSubFolder.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blueimp-md5 */ "../../../node_modules/blueimp-md5/js/md5.js");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blueimp_md5__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Get sub folders of the file
 *
 * Result of the function looks like: a1/b2/c3
 * Where md5 of the file = a1b2c3.........
 *
 * @param {string} fileName Name of the file
 *
 * @returns {string}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (fileName) {
  var fileNameHash = blueimp_md5__WEBPACK_IMPORTED_MODULE_0___default()(fileName).substring(0, 6);
  var pathParts = fileNameHash.match(/.{1,2}/g);
  return pathParts.join('/');
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/bootstrap */ "./vendor/bootstrap/index.js");
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-colorpicker */ "../../../node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js");
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css */ "../../../node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css");
/* harmony import */ var bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! font-awesome/scss/font-awesome.scss */ "../../../node_modules/font-awesome/scss/font-awesome.scss");
/* harmony import */ var font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/animate */ "./vendor/animate/index.js");
/* harmony import */ var _vendor_bootstrap_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor/bootstrap-confirmation */ "./vendor/bootstrap-confirmation/index.js");
/* harmony import */ var _vendor_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor/bootstrap-datetimepicker */ "./vendor/bootstrap-datetimepicker/index.js");
/* harmony import */ var _vendor_bootstrap_notify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor/bootstrap-notify */ "./vendor/bootstrap-notify/index.js");
/* harmony import */ var _vendor_select2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor/select2 */ "./vendor/select2/index.js");
/* harmony import */ var _vendor_ekko_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor/ekko-lightbox */ "./vendor/ekko-lightbox/index.js");
/* harmony import */ var _vendor_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendor/theme */ "./vendor/theme/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./components/index.js");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./handlers */ "./handlers/index.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_14__);
/**
 * jQuery
 */

window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
/**
 * Bootstrap
 */


/**
 * Bootstrap Ccolorpicker
 */



/**
 * Font Awesome
 */


/**
 * External modules
 * TODO: get by npm
 */








/**
 * Components
 */


/**
 * Handlers
 */


/**
 * Styles
 */


/**
 * Modules loader
 */

var path = location.pathname.split('/');

var context = __webpack_require__("./modules sync recursive module\\.js$");

if (path[1].length > 2) {
  /**
   * To creating different files for each module
   * (Don't forget npm i --save-dev bundle-loader)
   * const context = require.context('bundle-loader!modules', true, /index\.js$/);
   */
  context.keys().map(function (module) {
    if (module.split('/')[1] === 'settings') {
      if (path[2] !== undefined && module.split('/')[3] === path[2]) {
        console.log('MODULE:', path[2]);
        context(module);
      }
    }

    if (module.split('/')[1] === path[1]) {
      console.log('MODULE:', path[1]);
      context(module);
    }

    if (path[1].length === 0) {
      context('./default/module.js');
    }
  });
} else {
  console.log('MODULE: public');
  context('./public/module.js');
}

/***/ }),

/***/ "./listeners/awardCreate.js":
/*!**********************************!*\
  !*** ./listeners/awardCreate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], self);
    var currentBtn = $(_this);
    var editBtn = $('#' + _this.dataset.templateId).html().replace(new RegExp(_this.dataset.templatePlaceholder, "g"), data.award_id);
    currentBtn.parent().append(editBtn);
    currentBtn.remove();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/awardDelete.js":
/*!**********************************!*\
  !*** ./listeners/awardDelete.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], self);
    var createBtn = $('#' + _this.dataset.templateId).html();
    var parent = $(_this).parent();
    parent.children().remove();
    parent.append(createBtn);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/dropZoneInit.js":
/*!***********************************!*\
  !*** ./listeners/dropZoneInit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");
/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");




/**
 * Dropzone init after the modal opened
 */

/* harmony default export */ __webpack_exports__["default"] = (function (EVENT_NAME) {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(EVENT_NAME, function () {
    /**
     * Dropzone container
     *
     * @type {HTMLElement | null}
     */
    var dropzoneElement = document.getElementById('dropzone');
    /**
     * Preview URL hidden input
     *
     * @type {HTMLElement | null}
     */

    var previewURL = document.getElementById('preview-url');
    /**
     * Dropzone initialization
     */

    var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](dropzoneElement).setUploadUrl(dropzoneElement.dataset.url).error(function (file, response) {
      Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      $('#preview-url').val('');
    }).cancel(function () {
      $('#preview-url').val('');
    }).success(function (file, response) {
      $('.dz-filename span').text(response.file_name);
      previewURL.value = response.file_name;
    });
    /**
     * Set preview
     */

    if (previewURL.value.length) {
      dropzoneBuilder.setPreview(previewURL.value, Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__["default"])(dropzoneElement.dataset.folder, previewURL.value));
    }
    /**
     * Dropzone build
     */


    dropzoneBuilder.build();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules sync recursive module\\.js$":
/*!**********************************!*\
  !*** ./modules sync module\.js$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./action-type/module.js": "./modules/action-type/module.js",
	"./announcements/module.js": "./modules/announcements/module.js",
	"./assets/module.js": "./modules/assets/module.js",
	"./award/module.js": "./modules/award/module.js",
	"./banner/module.js": "./modules/banner/module.js",
	"./cert-setup/module.js": "./modules/cert-setup/module.js",
	"./cert-users/module.js": "./modules/cert-users/module.js",
	"./cert/module.js": "./modules/cert/module.js",
	"./cms-adps/module.js": "./modules/cms-adps/module.js",
	"./cms-roles/module.js": "./modules/cms-roles/module.js",
	"./cms-user-actions/module.js": "./modules/cms-user-actions/module.js",
	"./cms-users/module.js": "./modules/cms-users/module.js",
	"./collection/module.js": "./modules/collection/module.js",
	"./daily-loot/module.js": "./modules/daily-loot/module.js",
	"./default/module.js": "./modules/default/module.js",
	"./deploy/module.js": "./modules/deploy/module.js",
	"./dpa/module.js": "./modules/dpa/module.js",
	"./dye/module.js": "./modules/dye/module.js",
	"./fingerprint-form/module.js": "./modules/fingerprint-form/module.js",
	"./fingerprint/module.js": "./modules/fingerprint/module.js",
	"./gift-wrap/module.js": "./modules/gift-wrap/module.js",
	"./group-edit/module.js": "./modules/group-edit/module.js",
	"./group-event/module.js": "./modules/group-event/module.js",
	"./group/module.js": "./modules/group/module.js",
	"./levels/module.js": "./modules/levels/module.js",
	"./linked-assets/module.js": "./modules/linked-assets/module.js",
	"./localization/module.js": "./modules/localization/module.js",
	"./magic/module.js": "./modules/magic/module.js",
	"./makeup-kit-asset/module.js": "./modules/makeup-kit-asset/module.js",
	"./makeup-kit/module.js": "./modules/makeup-kit/module.js",
	"./meal-ingredients/module.js": "./modules/meal-ingredients/module.js",
	"./meal/module.js": "./modules/meal/module.js",
	"./neighbor-activity/module.js": "./modules/neighbor-activity/module.js",
	"./nla-asset/module.js": "./modules/nla-asset/module.js",
	"./nla-category/module.js": "./modules/nla-category/module.js",
	"./nla-section/module.js": "./modules/nla-section/module.js",
	"./product/module.js": "./modules/product/module.js",
	"./public/module.js": "./modules/public/module.js",
	"./settings/module.js": "./modules/settings/module.js",
	"./settings/modules/ai_animation/module.js": "./modules/settings/modules/ai_animation/module.js",
	"./shop-department/module.js": "./modules/shop-department/module.js",
	"./sound/module.js": "./modules/sound/module.js",
	"./special-prizes-form/module.js": "./modules/special-prizes-form/module.js",
	"./special-prizes/module.js": "./modules/special-prizes/module.js",
	"./tamatool/module.js": "./modules/tamatool/module.js",
	"./trophies/module.js": "./modules/trophies/module.js",
	"./trophy-cup-users/module.js": "./modules/trophy-cup-users/module.js",
	"./users/module.js": "./modules/users/module.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./modules sync recursive module\\.js$";

/***/ }),

/***/ "./modules/action-type/constants.js":
/*!******************************************!*\
  !*** ./modules/action-type/constants.js ***!
  \******************************************/
/*! exports provided: ACTION_TYPE_STATES_CHANGED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_STATES_CHANGED", function() { return ACTION_TYPE_STATES_CHANGED; });
var ACTION_TYPE_STATES_CHANGED = 'ACTION_TYPE_STATES_CHANGED';

/***/ }),

/***/ "./modules/action-type/handlers/collapseState.js":
/*!*******************************************************!*\
  !*** ./modules/action-type/handlers/collapseState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Collapse state
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var parent = $(this).closest('.action-type-state');
  parent.toggleClass('down');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/handlers/collapseStates.js":
/*!********************************************************!*\
  !*** ./modules/action-type/handlers/collapseStates.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Collapse states
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  $('.action-type-state').toggleClass('down');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/handlers/removeActionTypeState.js":
/*!***************************************************************!*\
  !*** ./modules/action-type/handlers/removeActionTypeState.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");





/**
 * Remove the State of the Action Type
 * at the modal
 * with confirm
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentElement = $(this);
  var parent = currentElement.closest('.action-type-state');

  if (!currentElement.data('id')) {
    parent.remove();
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPE_STATES_CHANGED"], {});
    return false;
  }

  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header('Are you sure?').footer($('<button/>', {
    'class': 'btn btn-sm btn-danger',
    'text': 'Delete',
    'data-dismiss': 'modal',
    'click': function click() {
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](currentElement.data('url')).method('DELETE').success(function () {
        parent.remove();
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPE_STATES_CHANGED"], {});
      }).send();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/listeners/updateIndexes.js":
/*!********************************************************!*\
  !*** ./modules/action-type/listeners/updateIndexes.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");


/**
 * Update indexes of the states
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPE_STATES_CHANGED"], function () {
    var index = 1;
    $('.index').each(function (_, item) {
      $(item).val(index++);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/module.js":
/*!***************************************!*\
  !*** ./modules/action-type/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_updateIndexes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/updateIndexes */ "./modules/action-type/listeners/updateIndexes.js");
/* harmony import */ var _handlers_collapseState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/collapseState */ "./modules/action-type/handlers/collapseState.js");
/* harmony import */ var _handlers_collapseStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/collapseStates */ "./modules/action-type/handlers/collapseStates.js");
/* harmony import */ var _handlers_removeActionTypeState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/removeActionTypeState */ "./modules/action-type/handlers/removeActionTypeState.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./modules/action-type/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Update indexes
 */

Object(_listeners_updateIndexes__WEBPACK_IMPORTED_MODULE_0__["default"])();
$(document)
/**
 * Collapse one state
 */
.on('click', '.collapse-link', _handlers_collapseState__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Collapse all states
 */
.on('click', '.hide-states', _handlers_collapseStates__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Remove state
 */
.on('click', '.rm-action-type-states', _handlers_removeActionTypeState__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/style.scss":
/*!****************************************!*\
  !*** ./modules/action-type/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/announcements/handlers/addNewRow.js":
/*!*****************************************************!*\
  !*** ./modules/announcements/handlers/addNewRow.js ***!
  \*****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the announcements config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#announcements > tbody');
  var lastID = tbody.find("tr").last().find('.ann_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#announcements_template').html().replace(/%announcement_id%/g, i + incrementId);
    tbody.append(trLast);
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/announcements/handlers/saveState.js":
/*!*****************************************************!*\
  !*** ./modules/announcements/handlers/saveState.js ***!
  \*****************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Update row to the announcements config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var award = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var route = $(this).data('route');
  var container = $('.announcements-save-page-container');
  var data = container.find("." + award + "changed input, ." + award + "changed select").serializeArray();

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).success(function (resp) {
    container.find('tr.' + award + 'changed').removeClass(award + 'changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(resp);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/announcements/module.js":
/*!*****************************************!*\
  !*** ./modules/announcements/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/announcements/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/announcements/handlers/saveState.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");






$(document)
/**
 * Add next rows to the announcements grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Mark row as changed for select2
 */
.on('input', ':checkbox', function () {
  $(this).attr("checked", !$(this).attr("checked"));
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Create award and save announcement
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_5__["default"].bind(_this)();
  $(this).closest('tr').addClass('award-changed');
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_2__["AWARD_CREATE"], function (data, self) {
    Object(_handlers_saveState__WEBPACK_IMPORTED_MODULE_1__["saveState"])('award-');
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  var saveButton = $('.save-page');
  $(this).closest('tr').addClass('award-changed');
  $(this).closest('tr').find('input[name="award_id"]').val(0);
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_4__["default"].bind(_this, saveButton)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_2__["AWARD_DELETE"], function (data, self) {
    Object(_handlers_saveState__WEBPACK_IMPORTED_MODULE_1__["saveState"])('award-');
  });
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the announcements page
 */

$('.save-page').click(function () {
  return Object(_handlers_saveState__WEBPACK_IMPORTED_MODULE_1__["saveState"])();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/changeType.js":
/*!***********************************************!*\
  !*** ./modules/assets/handlers/changeType.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * SUB_TYPES - it is a global object
 * Inited in asset/form.blade.php
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  setSubtypes(this.value, this.dataset.subtype);
});
var assetFormSubtype = $("#subtype");
var assetFormActionType = $('#asset-form-action-type');
var assetFormCollection = $('#asset-form-collection');
var prices = $('.prices');

function setSubtypes(type, subtype) {
  assetFormSubtype.empty().select2({
    data: SUB_TYPES[type]
  }).val(subtype).change();
  /**
   * Default state
   */

  hide(assetFormActionType);
  hide(assetFormCollection);
  show(prices);

  switch (parseInt(type)) {
    // Furniture
    case 1:
      show(assetFormActionType);
      break;
    // Clothes

    case 2:
      show(assetFormCollection);
      break;
    // Body Part

    case 5:
      hide(prices);
      break;
  }
}

function hide(element) {
  element.addClass('hide');
}

function show(element) {
  element.removeClass('hide');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/getLastCollectionNumber.js":
/*!************************************************************!*\
  !*** ./modules/assets/handlers/getLastCollectionNumber.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).success(function (result) {
    $('#collection-number').val(result.collection_id).removeClass('hide');
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/listeners/awardCreate.js":
/*!*************************************************!*\
  !*** ./modules/assets/listeners/awardCreate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], self);
    var currentBtn = $(_this);
    var saveAssetBtn = currentBtn.closest('tr').find('.save-asset');
    var editBtn = $('#' + _this.dataset.templateId).html().replace(new RegExp(_this.dataset.templatePlaceholder, "g"), data.award_id);
    currentBtn.parent().append(editBtn);
    currentBtn.remove();
    saveAssetBtn.click();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/listeners/awardDelete.js":
/*!*************************************************!*\
  !*** ./modules/assets/listeners/awardDelete.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], self);
    var createBtn = $('#' + _this.dataset.templateId).html();
    var parent = $(_this).parent();
    parent.children().remove();
    parent.append(createBtn);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/module.js":
/*!**********************************!*\
  !*** ./modules/assets/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/awardCreate */ "./modules/assets/listeners/awardCreate.js");
/* harmony import */ var _listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners/awardDelete */ "./modules/assets/listeners/awardDelete.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/assets/handlers/changeType.js");
/* harmony import */ var _handlers_getLastCollectionNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/getLastCollectionNumber */ "./modules/assets/handlers/getLastCollectionNumber.js");




$('#assets-table').on('click', '.award-create', _listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete', _listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
$('#asset-form-type').change(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"]).change();
$('#get-last-collection-number').click(_handlers_getLastCollectionNumber__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/award/constants.js":
/*!************************************!*\
  !*** ./modules/award/constants.js ***!
  \************************************/
/*! exports provided: AWARD_CREATE, AWARD_DELETE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_CREATE", function() { return AWARD_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_DELETE", function() { return AWARD_DELETE; });
var AWARD_CREATE = 'AWARD_CREATE';
var AWARD_DELETE = 'AWARD_DELETE';

/***/ }),

/***/ "./modules/award/module.js":
/*!*********************************!*\
  !*** ./modules/award/module.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./modules/banner/constants.js":
/*!*************************************!*\
  !*** ./modules/banner/constants.js ***!
  \*************************************/
/*! exports provided: BANNER_SHOW_FORM, TYPE_SELECT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANNER_SHOW_FORM", function() { return BANNER_SHOW_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_SELECT_ID", function() { return TYPE_SELECT_ID; });
/**
 * Show form event
 *
 * @type {string}
 */
var BANNER_SHOW_FORM = 'BANNER_SHOW_FORM';
/**
 * Id of type's select
 *
 * @type {string}
 */

var TYPE_SELECT_ID = 'banner-type';

/***/ }),

/***/ "./modules/banner/handlers/changeType.js":
/*!***********************************************!*\
  !*** ./modules/banner/handlers/changeType.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");

/**
 * Change type handler
 * Hide/show some fields
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var select = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__["TYPE_SELECT_ID"]);

  if (!select || select.selectedIndex === -1) {
    return false;
  }

  if (select.options.length && select.options[select.selectedIndex]) {
    var selectedElement = select.options[select.selectedIndex];
    $('.banner-type').addClass('hide');
    $('.banner-type-' + selectedElement.value).removeClass('hide');
  }

  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/banner/handlers/showForm.js":
/*!*********************************************!*\
  !*** ./modules/banner/handlers/showForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/showForm */ "./modules/banner/listeners/showForm.js");



/**
 * Show form handler
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * Dropzone Init
   */
  Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__["BANNER_SHOW_FORM"]);
  /**
   * Init showForm listener
   */

  Object(_listeners_showForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./modules/banner/listeners/showForm.js":
/*!**********************************************!*\
  !*** ./modules/banner/listeners/showForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/changeType */ "./modules/banner/handlers/changeType.js");



/**
 * Show form listener
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["BANNER_SHOW_FORM"], function () {
    /**
     * Type select change trigger
     */
    Object(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"])();
    /**
     * Dates init
     */

    $('.banner-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/banner/module.js":
/*!**********************************!*\
  !*** ./modules/banner/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showForm */ "./modules/banner/handlers/showForm.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/banner/handlers/changeType.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./modules/banner/constants.js");



/**
 * Show edit form of a banner
 */

$('.show-form').click(Object(_handlers_showForm__WEBPACK_IMPORTED_MODULE_0__["default"])());
$(document)
/**
 * Change type handler
 */
.on('change', '#' + _constants__WEBPACK_IMPORTED_MODULE_2__["TYPE_SELECT_ID"], _handlers_changeType__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert-setup/handlers/savePage.js":
/*!*************************************************!*\
  !*** ./modules/cert-setup/handlers/savePage.js ***!
  \*************************************************/
/*! exports provided: savePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePage", function() { return savePage; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");




/**
 * Save
 *
 * @returns {boolean}
 */

function savePage() {
  var container = $('#cert-save-container');
  var formItems = container.find(".changed select").serializeArray();
  var rows = container.find(".changed");

  if (!formItems.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__["default"])('Nothing to send!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(formItems).success(function (response) {
      if (!!response.errors) {
        Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      } else {
        rows.removeClass('changed');
        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
      }
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert-setup/module.js":
/*!**************************************!*\
  !*** ./modules/cert-setup/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/cert-setup/handlers/savePage.js");
/* harmony import */ var modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/cms-roles/handlers/changeTab */ "./modules/cms-roles/handlers/changeTab.js");


$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__["changeTab"])
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
});
/**
 * Fast save data
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_0__["savePage"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert-users/handlers/saveState.js":
/*!**************************************************!*\
  !*** ./modules/cert-users/handlers/saveState.js ***!
  \**************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the magic config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.cert-save-container');
  var data = container.find(".changed input");
  var formItems = container.find(".changed");
  console.log(formItems);

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert-users/module.js":
/*!**************************************!*\
  !*** ./modules/cert-users/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/cert-users/handlers/saveState.js");
/* harmony import */ var modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/cms-roles/handlers/changeTab */ "./modules/cms-roles/handlers/changeTab.js");


$(document)
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"])
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__["changeTab"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert/handlers/findUser.js":
/*!*******************************************!*\
  !*** ./modules/cert/handlers/findUser.js ***!
  \*******************************************/
/*! exports provided: findUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Find User
 *
 * @returns {boolean}
 */

function findUser() {
  var prefix = $(this).data('prefix');
  var data = {
    uid: $('#' + prefix).val(),
    name: $('#' + prefix + '_name').val(),
    prefix: prefix
  };
  var user_template = $('#user_template').html();
  var insert_block = $('#' + prefix + '_list');

  if (!data.uid.length && !data.name.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      insert_block.html('');
      $(response.users).each(function (index, item) {
        insert_block.closest('table').css('display', 'inline-table');
        insert_block.append(user_template.replace(/%user_id%/g, item.id).replace('%pet_name%', item.pet).replace('%user_name%', item.first_name + ' ' + item.last_name).replace('%level%', item.xp).replace('%avatar%', item.avatar).replace(/%target%/g, prefix));
      });
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert/handlers/sendCert.js":
/*!*******************************************!*\
  !*** ./modules/cert/handlers/sendCert.js ***!
  \*******************************************/
/*! exports provided: sendCert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCert", function() { return sendCert; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");




/**
 * Send Gift
 *
 * @returns {boolean}
 */

function sendCert() {
  var container = $('#cert-save-container');
  var formItems = container.find("input, textarea").serializeArray();

  if (!formItems.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__["default"])('Nothing to send!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(formItems).success(function (response) {
      if (!!response.errors) {
        Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      } else {
        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
        var trophy_cups_count = $('#cert_cups_count');
        trophy_cups_count.text(parseInt(trophy_cups_count.text()) + 1);
        $('.table').hide();
        $('#cert-save-container').find('input[type="text"], textarea').val('');
      }
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cert/module.js":
/*!********************************!*\
  !*** ./modules/cert/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sendCert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sendCert */ "./modules/cert/handlers/sendCert.js");
/* harmony import */ var _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/findUser */ "./modules/cert/handlers/findUser.js");
/* harmony import */ var modules_cms_roles_handlers_changeTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/cms-roles/handlers/changeTab */ "./modules/cms-roles/handlers/changeTab.js");



$(document)
/**
 * Find user
 */
.on('click', '#find_sender, #find_receiver', _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__["findUser"])
/**
 * Save the row
 */
.on('click', '#send', _handlers_sendCert__WEBPACK_IMPORTED_MODULE_0__["sendCert"])
/**
 * Mark selected cert
 */
.on('click', '#assets_list img', function () {
  $('#assets_list').find('img').css('border', '');
  $(this).css('border', '3px solid #5c5c5c');
  $('#asset_id').val($(this).data('cert'));
})
/**
 * Mark selected row
 */
.on('click', '.table tr', function () {
  $(this).find('input[type="radio"]').prop("checked", true);
  $('#' + $(this).data('target') + '_uid').val($(this).data('uid'));
})
/**
 * Change limit counter
 */
.on('input', 'input, textarea', function () {
  var target = $(this).prop('name').replace('cert_data[', '').replace(']', '') + '_length';
  $('#' + target).text($(this).data('maxlength') - $(this).val().length);
})
/**
 * Remove entered data
 */
.on('click', '#cancel', function () {
  $('.table').hide();
  $(this).closest('table').find('input[type="text"], textarea').val('');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/copyAdp.js":
/*!**********************************************!*\
  !*** ./modules/cms-adps/handlers/copyAdp.js ***!
  \**********************************************/
/*! exports provided: copyAdp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAdp", function() { return copyAdp; });
/**
 * Handler for copy adp ids to clipboard
 */
function copyAdp(e) {
  e.preventDefault();
  var adpIdsField = $('input[name="adp_ids"]');
  var adpIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    adpIds.push($(item).data('id'));
  });
  adpIdsField.val(adpIds);
  adpIdsField.select();
  document.execCommand("copy"); // adpIdsField.val([]);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/copyAssets.js":
/*!*************************************************!*\
  !*** ./modules/cms-adps/handlers/copyAssets.js ***!
  \*************************************************/
/*! exports provided: copyAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAssets", function() { return copyAssets; });
/**
 * Handler for copy assets ids to clipboard
 */
function copyAssets(e) {
  e.preventDefault();
  var assetIdsField = $('input[name="asset_ids"]');
  var assetIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    assetIds.push($(item).data('asset-id'));
  });
  assetIdsField.val(assetIds);
  assetIdsField.select();
  document.execCommand("copy");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/hideArchive.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/hideArchive.js ***!
  \**************************************************/
/*! exports provided: hideArchive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideArchive", function() { return hideArchive; });
/**
 * Handler of archive categories on adp page
 */
function hideArchive(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.show-archive').removeClass('hidden');
  $('.archive-categories-list').html('');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/hideTasks.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/hideTasks.js ***!
  \************************************************/
/*! exports provided: hideTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTasks", function() { return hideTasks; });
/**
 * Handler of tasks on adp page
 */
function hideTasks(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.show-tasks').removeClass('hidden');
  $('.tasks-list').hide('slow');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/showArchive.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/showArchive.js ***!
  \**************************************************/
/*! exports provided: showArchive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArchive", function() { return showArchive; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Handler of archive categories on adp page
 */

function showArchive(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.hide-archive').removeClass('hidden');
  var action = currentElement.attr('href');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    $('.archive-categories-list').html(response);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/showTasks.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/showTasks.js ***!
  \************************************************/
/*! exports provided: showTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTasks", function() { return showTasks; });
/**
 * Handler of tasks on adp page
 */
function showTasks(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.hide-tasks').removeClass('hidden');
  $('.tasks-list').show('slow');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/module.js":
/*!************************************!*\
  !*** ./modules/cms-adps/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showArchive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showArchive */ "./modules/cms-adps/handlers/showArchive.js");
/* harmony import */ var _handlers_hideArchive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/hideArchive */ "./modules/cms-adps/handlers/hideArchive.js");
/* harmony import */ var _handlers_hideTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/hideTasks */ "./modules/cms-adps/handlers/hideTasks.js");
/* harmony import */ var _handlers_showTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/showTasks */ "./modules/cms-adps/handlers/showTasks.js");
/* harmony import */ var _handlers_copyAdp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/copyAdp */ "./modules/cms-adps/handlers/copyAdp.js");
/* harmony import */ var _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/copyAssets */ "./modules/cms-adps/handlers/copyAssets.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./modules/cms-adps/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
//import {bundleVersionSelect} from "./handlers/bundleVersionSelect";







$(document)
/**
 * Show archive adp categories
 */
.on('click', '.show-archive', _handlers_showArchive__WEBPACK_IMPORTED_MODULE_0__["showArchive"])
/**
 * Hide archive adp categories
 */
.on('click', '.hide-archive', _handlers_hideArchive__WEBPACK_IMPORTED_MODULE_1__["hideArchive"])
/**
 * Hide adp tasks by status and user
 */
.on('click', '.hide-tasks', _handlers_hideTasks__WEBPACK_IMPORTED_MODULE_2__["hideTasks"])
/**
 * Show adp tasks by status and user
 */
.on('click', '.show-tasks', _handlers_showTasks__WEBPACK_IMPORTED_MODULE_3__["showTasks"])
/**
 * Show adp tasks by status and user
 */
.on('click', '.copy-adp', _handlers_copyAdp__WEBPACK_IMPORTED_MODULE_4__["copyAdp"])
/**
 * Show adp tasks by status and user
 */
.on('click', '.copy-assets', _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__["copyAssets"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/styles.scss":
/*!**************************************!*\
  !*** ./modules/cms-adps/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/cms-roles/handlers/changeTab.js":
/*!*************************************************!*\
  !*** ./modules/cms-roles/handlers/changeTab.js ***!
  \*************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-roles/module.js":
/*!*************************************!*\
  !*** ./modules/cms-roles/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/cms-roles/handlers/changeTab.js");

$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-user-actions/handlers/changeTab.js":
/*!********************************************************!*\
  !*** ./modules/cms-user-actions/handlers/changeTab.js ***!
  \********************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-user-actions/module.js":
/*!********************************************!*\
  !*** ./modules/cms-user-actions/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/cms-user-actions/handlers/changeTab.js");

$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Set cursor to parent node
 */
.on('mouseenter', 'td', function () {
  if ($(this).find('.hidden-wrapper').length) {
    $(this).css('cursor', 'pointer');
  }
})
/**
 * Open deploy info
 */
.on('click', 'td', function () {
  var wrapper = $(this).find('.hidden-wrapper');

  if (wrapper && wrapper.hasClass('open')) {
    if (!window.getSelection().toString().length) {
      wrapper.removeClass('open');
    } else {
      document.execCommand("copy");
    }
  } else {
    wrapper.addClass('open');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-users/handlers/changeTab.js":
/*!*************************************************!*\
  !*** ./modules/cms-users/handlers/changeTab.js ***!
  \*************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-users/module.js":
/*!*************************************!*\
  !*** ./modules/cms-users/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/cms-users/handlers/changeTab.js");

$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/constants.js":
/*!*****************************************!*\
  !*** ./modules/collection/constants.js ***!
  \*****************************************/
/*! exports provided: COLLECTION_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_SHOW_FORM", function() { return COLLECTION_SHOW_FORM; });
var COLLECTION_SHOW_FORM = 'COLLECTION_SHOW_FORM';

/***/ }),

/***/ "./modules/collection/handlers/fastSave.js":
/*!*************************************************!*\
  !*** ./modules/collection/handlers/fastSave.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var assetPreviewTemplate = $('#asset-preview-template').html();
/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $('.fast-save-container');

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.each(function () {
      var currentItem = $(this);

      if (currentItem.hasClass('asset-id') && !!response.assets[currentItem.val()]) {
        var currentAsset = response.assets[currentItem.val()];
        currentItem.closest('.slot').find('.asset-preview').html(assetPreviewTemplate.replace(new RegExp('%url%', "g"), currentAsset.preview_url).replace(new RegExp('%title%', "g"), currentAsset.name));
      }
    }).removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/hideAdditionalRows.js":
/*!***********************************************************!*\
  !*** ./modules/collection/handlers/hideAdditionalRows.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Hide additional rows
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  $('.additional-data').toggleClass('hide');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/markInputAsChanged.js":
/*!***********************************************************!*\
  !*** ./modules/collection/handlers/markInputAsChanged.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Mark input as changed
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(this).addClass('changed');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/sortableInit.js":
/*!*****************************************************!*\
  !*** ./modules/collection/handlers/sortableInit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a(_this, {
    group: _this.dataset.group,
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      $(e.target).find(_this.dataset.position).each(function (index) {
        var position = $(this);

        if (parseInt(position.val()) !== index) {
          position.val(index);
          position.change();
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/module.js":
/*!**************************************!*\
  !*** ./modules/collection/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./modules/collection/constants.js");
/* harmony import */ var _handlers_fastSave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/fastSave */ "./modules/collection/handlers/fastSave.js");
/* harmony import */ var _handlers_markInputAsChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/markInputAsChanged */ "./modules/collection/handlers/markInputAsChanged.js");
/* harmony import */ var _handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/sortableInit */ "./modules/collection/handlers/sortableInit.js");
/* harmony import */ var _handlers_hideAdditionalRows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/hideAdditionalRows */ "./modules/collection/handlers/hideAdditionalRows.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./modules/collection/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_SHOW_FORM"]));
/**
 * Fast save collection
 */

$('.collection-fast-save').click(_handlers_fastSave__WEBPACK_IMPORTED_MODULE_2__["default"]);
/**
 * Mark inputs as changed
 */

$('.fast-save-container').find('input').change(_handlers_markInputAsChanged__WEBPACK_IMPORTED_MODULE_3__["default"]);
/**
 * Sortable init
 */

$('.sortable').each(_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
/**
 * Hide additional rows
 */

$('.hide-slots').click(_handlers_hideAdditionalRows__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/style.scss":
/*!***************************************!*\
  !*** ./modules/collection/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/daily-loot/handlers/addNewRow.js":
/*!**************************************************!*\
  !*** ./modules/daily-loot/handlers/addNewRow.js ***!
  \**************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the sound config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#daily_loot > tbody');
  var trLast = $('#daily_loot_template').html();
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    if (parseInt($(item).find('input').first().val())) {
      lastIDS.push(parseInt($(item).find('input').first().val()));
    }
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%rowIndex%/g, i + incrementId));
    tbody.find("tr").last().find('input').first().val(i + incrementId);
    tbody.find('.datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/handlers/saveState.js":
/*!**************************************************!*\
  !*** ./modules/daily-loot/handlers/saveState.js ***!
  \**************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Update row to the sound config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.daily-loot-save-container');
  var data = container.find(".changed input, .changed select").serializeArray();

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (resp) {
    container.find('tr.changed').removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(resp);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/module.js":
/*!**************************************!*\
  !*** ./modules/daily-loot/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/daily-loot/handlers/saveState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/daily-loot/handlers/addNewRow.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./modules/daily-loot/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



$(document)
/**
 * Add next rows to the magic grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark the row as changed
 */
.on('click', '.remove-embed', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Switch page type
 */
.on('click', '.toggle-page-type', function () {
  location.href = location.pathname.slice(0, location.pathname.lastIndexOf('/')) + $(this).data('href');
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/style.scss":
/*!***************************************!*\
  !*** ./modules/daily-loot/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/default/module.js":
/*!***********************************!*\
  !*** ./modules/default/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('#common-menu').find('.common-menu-section').each(function () {
    if ($(this).find('li').length === 0) {
      $(this).closest('.common-menu-section').hide();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/handlers/changeTab.js":
/*!**********************************************!*\
  !*** ./modules/deploy/handlers/changeTab.js ***!
  \**********************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?direction=" + direction;
  history.pushState({
    id: 'deploy'
  }, 'Deploy', url);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/module.js":
/*!**********************************!*\
  !*** ./modules/deploy/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/deploy/handlers/changeTab.js");
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");


$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Save all page
 */
.on('click', '.fast-save-page-custom', handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/handlers/addNewRow.js":
/*!*******************************************!*\
  !*** ./modules/dpa/handlers/addNewRow.js ***!
  \*******************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the levels config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#dpa > tbody');
  var lastID = tbody.find("tr").last().find('.dpa_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#dpa_template').html().replace(/%dpa_id%/g, i + incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/handlers/saveDpaState.js":
/*!**********************************************!*\
  !*** ./modules/dpa/handlers/saveDpaState.js ***!
  \**********************************************/
/*! exports provided: saveDpaState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDpaState", function() { return saveDpaState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */

function saveDpaState(e) {
  e.preventDefault();
  var route = $(this).data('route');
  var data = $('.dpa-save-page-container').find(".changed input, .changed select").serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/module.js":
/*!*******************************!*\
  !*** ./modules/dpa/module.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/dpa/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveDpaState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/saveDpaState */ "./modules/dpa/handlers/saveDpaState.js");


$(document)
/**
 * Delete dpa
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Add next row to the dpa grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Add next row to the dpa grid
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Fast save data on the dyes page
 */
.on('click', '.dpa-save-page', _handlers_saveDpaState__WEBPACK_IMPORTED_MODULE_1__["saveDpaState"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/addNewRow.js":
/*!*******************************************!*\
  !*** ./modules/dye/handlers/addNewRow.js ***!
  \*******************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#dye > tbody');
  var trLast = $('#dye_template').html();

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast);
    var lastRow = tbody.find("tr").last().find('.cp2');
    lastRow.each(function (index, item) {
      $(item).colorpicker({});
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/changeRowIndex.js":
/*!************************************************!*\
  !*** ./modules/dye/handlers/changeRowIndex.js ***!
  \************************************************/
/*! exports provided: changeRowIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRowIndex", function() { return changeRowIndex; });
/**
 * Change row index
 *
 * @returns {boolean}
 */
function changeRowIndex() {
  var rowIndex = $(this).val();
  var row = $(this).closest('tr').find('input, select');
  row.each(function (index, item) {
    var oldName = $(item).attr('name');
    var newName = oldName.slice(0, 4) + rowIndex + oldName.slice(oldName.indexOf(']'));
    $(item).attr('name', newName);
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/dyeSavePage.js":
/*!*********************************************!*\
  !*** ./modules/dye/handlers/dyeSavePage.js ***!
  \*********************************************/
/*! exports provided: DYE_CONTAINER_SELECTOR, default, markChangedTr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYE_CONTAINER_SELECTOR", function() { return DYE_CONTAINER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChangedTr", function() { return markChangedTr; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var DYE_CONTAINER_SELECTOR = '.dye-save-page-container';
/**
 * Fast save data from the dyes page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $(DYE_CONTAINER_SELECTOR);

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/**
 * Mark form's tr as changed
 */

function markChangedTr() {
  $(this).closest('tr').addClass('changed');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/module.js":
/*!*******************************!*\
  !*** ./modules/dye/module.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/dye/handlers/addNewRow.js");
/* harmony import */ var _handlers_changeRowIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeRowIndex */ "./modules/dye/handlers/changeRowIndex.js");
/* harmony import */ var _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/dyeSavePage */ "./modules/dye/handlers/dyeSavePage.js");



$(document)
/**
 * Init color-picker inputs
 */
.ready(function () {
  $('.cp2').colorpicker().on('create', function (e) {
    $(document)
    /**
     * Mark tr as changed
     */
    .on('change', "".concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " input, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " select, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " textarea"), _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["markChangedTr"]).on('input', "".concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " input, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " select, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " textarea"), _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["markChangedTr"]);
  });
})
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Change row index
 */
.on('input', '.asset_id', _handlers_changeRowIndex__WEBPACK_IMPORTED_MODULE_1__["changeRowIndex"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.dye-save-page').click(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/fingerprint-form/handlers/saveFingerprint.js":
/*!**************************************************************!*\
  !*** ./modules/fingerprint-form/handlers/saveFingerprint.js ***!
  \**************************************************************/
/*! exports provided: saveFingerprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFingerprint", function() { return saveFingerprint; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

function saveFingerprint(e) {
  e.preventDefault();
  var WebGLFingerPrint = {
    $defaultVars: [],
    FindFingerPrint: function FindFingerPrint() {
      var options = {
        excludes: {
          availableScreenResolution: true,
          enumerateDevices: true,
          doNotTrack: true // userAgent: true,
          // language: true,
          // audio: true,
          // fonts: true,
          // webdriver: true,
          // sessionStorage: true,
          // localStorage: true,
          // indexedDb: true,
          // plugins: true,
          // adBlock: true,
          // fontsFlash: true,
          // openDatabase: true,
          // canvas: true,
          // webgl: true,
          // deviceMemory: true,

        }
      };
      var fingerprint;

      var fingerPrintHandler = function fingerPrintHandler(components) {
        try {
          var values = components.map(function (component) {
            console.log(component);
            return component.key + ': ' + component.value;
          });
          fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
          sendPromise(fingerprint, values); // console.log("JS1 finger print " + fingerprint);
        } catch (e) {// console.log("JS2 finger error ");
        }
      };

      if (window.requestIdleCallback) {
        requestIdleCallback(function () {
          Fingerprint2.get(options, fingerPrintHandler);
        });
      } else {
        setTimeout(function () {
          Fingerprint2.get(options, fingerPrintHandler);
        }, 0); //was time out 500
      } // console.log("JS3 finger print wait " + fingerprint);

    }
  };
  WebGLFingerPrint.FindFingerPrint();
  return false;
}

function sendPromise(fingerprint, values) {
  var comment = $('#comment').val();
  var name = $('#name').val();

  if (comment.length && fingerprint.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($('#fingerprint').attr('action')).method('POST').data({
      name: name,
      comment: comment,
      fingerprint: fingerprint,
      values: values
    }).success(function (response) {
      console.log(response);

      if (response.type === 'success') {
        window.location.reload();
      } else {}
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/fingerprint-form/module.js":
/*!********************************************!*\
  !*** ./modules/fingerprint-form/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveFingerprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveFingerprint */ "./modules/fingerprint-form/handlers/saveFingerprint.js");

$(document)
/**
 * Set cursor to parent node
 */
.on('mouseenter', 'td', function () {
  if ($(this).find('.hidden-wrapper').length) {
    $(this).css('cursor', 'pointer');
  }
})
/**
 * Open deploy info
 */
.on('click', 'td', function () {
  var wrapper = $(this).find('.hidden-wrapper');

  if (wrapper && wrapper.hasClass('open')) {
    if (!window.getSelection().toString().length) {
      wrapper.removeClass('open');
    } else {
      document.execCommand("copy");
    }
  } else {
    wrapper.addClass('open');
  }
})
/**
 * Form submit
 */
.on('submit', '#fingerprint', _handlers_saveFingerprint__WEBPACK_IMPORTED_MODULE_0__["saveFingerprint"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/fingerprint/handlers/saveFingerprint.js":
/*!*********************************************************!*\
  !*** ./modules/fingerprint/handlers/saveFingerprint.js ***!
  \*********************************************************/
/*! exports provided: saveFingerprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFingerprint", function() { return saveFingerprint; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

function saveFingerprint(e) {
  e.preventDefault();
  var WebGLFingerPrint = {
    $defaultVars: [],
    FindFingerPrint: function FindFingerPrint() {
      var options = {
        excludes: {
          availableScreenResolution: true,
          enumerateDevices: true,
          doNotTrack: true // userAgent: true,
          // language: true,
          // audio: true,
          // fonts: true,
          // webdriver: true,
          // sessionStorage: true,
          // localStorage: true,
          // indexedDb: true,
          // plugins: true,
          // adBlock: true,
          // fontsFlash: true,
          // openDatabase: true,
          // canvas: true,
          // webgl: true,
          // deviceMemory: true,

        }
      };
      var fingerprint;

      var fingerPrintHandler = function fingerPrintHandler(components) {
        try {
          var values = components.map(function (component) {
            return component.key + ': ' + component.value;
          });
          fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
          sendPromise(fingerprint, values); // console.log("JS1 finger print " + fingerprint);
        } catch (e) {// console.log("JS2 finger error ");
        }
      };

      if (window.requestIdleCallback) {
        requestIdleCallback(function () {
          Fingerprint2.get(options, fingerPrintHandler);
        });
      } else {
        setTimeout(function () {
          Fingerprint2.get(options, fingerPrintHandler);
        }, 0); //was time out 500
      } // console.log("JS3 finger print wait " + fingerprint);

    }
  };
  WebGLFingerPrint.FindFingerPrint();
  return false;
}

function sendPromise(fingerprint, values) {
  var comment = $('#comment').val();
  var name = $('#name').val();

  if (comment.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($('#fingerprint').attr('action')).method('POST').data({
      name: name,
      comment: comment,
      fingerprint: fingerprint,
      values: values
    }).success(function (response) {
      console.log(response);

      if (response.type === 'success') {
        window.location.reload();
      } else {}
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/fingerprint/module.js":
/*!***************************************!*\
  !*** ./modules/fingerprint/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveFingerprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveFingerprint */ "./modules/fingerprint/handlers/saveFingerprint.js");

$(document)
/**
 * Set cursor to parent node
 */
.on('mouseenter', 'td', function () {
  if ($(this).find('.hidden-wrapper').length) {
    $(this).css('cursor', 'pointer');
  }
})
/**
 * Open deploy info
 */
.on('click', 'td', function () {
  var wrapper = $(this).find('.hidden-wrapper');

  if (wrapper && wrapper.hasClass('open')) {
    if (!window.getSelection().toString().length) {
      wrapper.removeClass('open');
    } else {
      document.execCommand("copy");
    }
  } else {
    wrapper.addClass('open');
  }
})
/**
 * Form submit
 */
.on('submit', '#fingerprint', _handlers_saveFingerprint__WEBPACK_IMPORTED_MODULE_0__["saveFingerprint"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/constants.js":
/*!****************************************!*\
  !*** ./modules/gift-wrap/constants.js ***!
  \****************************************/
/*! exports provided: GIFT_WRAP_ROW_ADDED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIFT_WRAP_ROW_ADDED", function() { return GIFT_WRAP_ROW_ADDED; });
var GIFT_WRAP_ROW_ADDED = 'GIFT_WRAP_ROW_ADDED';

/***/ }),

/***/ "./modules/gift-wrap/handlers/assetChanged.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/assetChanged.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");

/**
 * Asset ID changed
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentInput = $(this);
  var assetID = currentInput.val();
  var parent = currentInput.closest('tr');
  /**
   * Check duplicated assets ids
   */

  var currentAssetDuplicate = $('#gift-wraps-container').find('.asset-id').filter(function (_, item) {
    return assetID === item.value;
  });

  if (currentAssetDuplicate.length > 1) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'message': 'Duplicate asset ' + assetID
    });
    return false;
  }
  /**
   * Update inputs names
   */


  parent.find('input').each(function () {
    this.name = this.name.replace(/\[[\d]+\]/g, "[".concat(assetID, "]"));
  });
  /**
   * Update href of the delete button
   */

  parent.find('.ajax-confirm-action-custom').each(function () {
    this.href = this.href.replace(/\/[\d]+$/g, "/".concat(assetID));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/fastSavePage.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/fastSavePage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var _helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/positionUpdate */ "./modules/gift-wrap/helpers/positionUpdate.js");



/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  try {
    var assets = {};
    $('#gift-wraps-container').find('.asset-id').each(function () {
      if (assets[this.value] === true) {
        throw new Error(this.value);
      }

      if (this.value.length) {
        assets[this.value] = true;
      }
    });
  } catch (err) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])({
      'message': 'Duplicate asset ' + err.message
    });
    return false;
  }
  /**
   * Position update
   */


  Object(_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)(e);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/removeRow.js":
/*!*************************************************!*\
  !*** ./modules/gift-wrap/handlers/removeRow.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var handlers_confirmModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/confirmModal */ "./handlers/confirmModal.js");

/**
 * Remove embeded element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var buttonUrl = this.href.split('/');
  var parent = $(this).closest('tr');
  e.preventDefault();

  if (parseInt(buttonUrl[buttonUrl.length - 1]) === 0) {
    parent.remove();
    return false;
  }

  handlers_confirmModal__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)(e);
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/sortableInit.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/sortableInit.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_gift_wrap_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/gift-wrap/helpers/positionUpdate */ "./modules/gift-wrap/helpers/positionUpdate.js");


/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a(_this, {
    removeCloneOnHide: true,
    onEnd: function onEnd() {
      Object(modules_gift_wrap_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  });
});

/***/ }),

/***/ "./modules/gift-wrap/helpers/positionUpdate.js":
/*!*****************************************************!*\
  !*** ./modules/gift-wrap/helpers/positionUpdate.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Position update
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.position').each(function (index) {
    var position = $(this);

    if (parseInt(position.val()) !== index) {
      position.val(index);
      position.change();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/listeners/addRow.js":
/*!***********************************************!*\
  !*** ./modules/gift-wrap/listeners/addRow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/gift-wrap/constants.js");


/**
 * Add new row to grid
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["GIFT_WRAP_ROW_ADDED"], function (data) {
    $('#gift-wrap-' + data.embedBlockId).find('.datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/module.js":
/*!*************************************!*\
  !*** ./modules/gift-wrap/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sortableInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sortableInit */ "./modules/gift-wrap/handlers/sortableInit.js");
/* harmony import */ var _handlers_assetChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/assetChanged */ "./modules/gift-wrap/handlers/assetChanged.js");
/* harmony import */ var _listeners_addRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/addRow */ "./modules/gift-wrap/listeners/addRow.js");
/* harmony import */ var _handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/fastSavePage */ "./modules/gift-wrap/handlers/fastSavePage.js");
/* harmony import */ var _handlers_removeRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/removeRow */ "./modules/gift-wrap/handlers/removeRow.js");





$(document)
/**
 * Change asset id in input
 */
.on('change', '.asset-id', _handlers_assetChanged__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Remove row
 */
.on('click', '.ajax-confirm-action-custom', _handlers_removeRow__WEBPACK_IMPORTED_MODULE_4__["default"]);
/**
 * Add row listener
 */

Object(_listeners_addRow__WEBPACK_IMPORTED_MODULE_2__["default"])();
/**
 * Sortable init
 */

$('.sortable').each(_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * Save all page
 */

$('.fast-save-page-custom').click(_handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/handlers/adminStore.js":
/*!***************************************************!*\
  !*** ./modules/group-edit/handlers/adminStore.js ***!
  \***************************************************/
/*! exports provided: adminStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminStore", function() { return adminStore; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Store User
 *
 * @returns {boolean}
 */

function adminStore() {
  var selected_id = $('#sender_list').find('[name="user_sender"]:checked').closest('tr').data('uid');

  if (!selected_id) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data({
      uid: selected_id
    }).success(function (response) {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
      location.reload();
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/handlers/changeTab.js":
/*!**************************************************!*\
  !*** ./modules/group-edit/handlers/changeTab.js ***!
  \**************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/handlers/findUser.js":
/*!*************************************************!*\
  !*** ./modules/group-edit/handlers/findUser.js ***!
  \*************************************************/
/*! exports provided: findUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Find User
 *
 * @returns {boolean}
 */

function findUser() {
  var data = {
    uid: $('#sender').val(),
    name: $('#sender_name').val()
  };
  var user_template = $('#user_template').html();
  var insert_block = $('#sender_list');

  if (!data.uid.length && !data.name.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      insert_block.html('');
      $(response.users).each(function (index, item) {
        insert_block.closest('table').css('display', 'inline-table');
        insert_block.append(user_template.replace(/%user_id%/g, item.id).replace('%avatar%', item.avatar).replace('%pet_name%', item.pet).replace('%user_name%', item.first_name + ' ' + item.last_name).replace('%level%', item.xp));
      });
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/handlers/setMain.js":
/*!************************************************!*\
  !*** ./modules/group-edit/handlers/setMain.js ***!
  \************************************************/
/*! exports provided: setMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMain", function() { return setMain; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Change main admin
 *
 * @returns {boolean}
 */

function setMain(e) {
  e.preventDefault();
  var is_main = $('#group-users').find('input[type="radio"]:checked').data('id');

  if (!is_main) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data({
      main_id: is_main
    }).success(function (response) {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-edit/module.js":
/*!**************************************!*\
  !*** ./modules/group-edit/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/group-edit/handlers/changeTab.js");
/* harmony import */ var modules_group_edit_handlers_findUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/group-edit/handlers/findUser */ "./modules/group-edit/handlers/findUser.js");
/* harmony import */ var modules_group_edit_handlers_adminStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/group-edit/handlers/adminStore */ "./modules/group-edit/handlers/adminStore.js");
/* harmony import */ var modules_group_edit_handlers_setMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/group-edit/handlers/setMain */ "./modules/group-edit/handlers/setMain.js");




$(document)
/**
 * Find user
 */
.on('click', '#find_sender, #find_receiver', modules_group_edit_handlers_findUser__WEBPACK_IMPORTED_MODULE_1__["findUser"])
/**
 * Mark selected row
 */
.on('click', '.table tr', function () {
  $(this).find('input[type="radio"]').prop("checked", true);
  $('#sender_uid').val($(this).data('uid'));
})
/**
 * Store user to group
 */
.on('click', '#store', modules_group_edit_handlers_adminStore__WEBPACK_IMPORTED_MODULE_2__["adminStore"])
/**
 * Change main admin
 */
.on('click', '.update-row', modules_group_edit_handlers_setMain__WEBPACK_IMPORTED_MODULE_3__["setMain"])
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-event/handlers/addNewRow.js":
/*!***************************************************!*\
  !*** ./modules/group-event/handlers/addNewRow.js ***!
  \***************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('tbody.group-event-save-container');
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    lastIDS.push($(item).data('id'));
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#template').html().replace(/%id%/g, i + incrementId);
    tbody.prepend(trLast);
    $('.date-field').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-event/handlers/changeTab.js":
/*!***************************************************!*\
  !*** ./modules/group-event/handlers/changeTab.js ***!
  \***************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-event/handlers/saveState.js":
/*!***************************************************!*\
  !*** ./modules/group-event/handlers/saveState.js ***!
  \***************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.group-event-save-container');
  var data = container.find(".changed input");
  var formItems = container.find(".changed");

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      setTimeout(function () {
        location.reload();
      }, 500);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group-event/module.js":
/*!***************************************!*\
  !*** ./modules/group-event/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/group-event/handlers/changeTab.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/group-event/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/group-event/handlers/saveState.js");



$(document).ready(function () {
  $(".date-field").datetimepicker({
    format: 'yyyy-mm-dd hh:ii:ss',
    autoclose: true,
    minView: '2'
  });
})
/**
 * Add next rows to the grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Change url on tab change
 */
.on('click', '.nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark the row as changed
 */
.on('change', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
})
/**
 * Save state
 */
.on('click', '.save-page', _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__["saveState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group/handlers/changeTab.js":
/*!*********************************************!*\
  !*** ./modules/group/handlers/changeTab.js ***!
  \*********************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/group/module.js":
/*!*********************************!*\
  !*** ./modules/group/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/group/handlers/changeTab.js");

$(document)
/**
 * Copy ids
 */
.on('click', '.copy', function () {
  $('#' + $(this).data('target')).select();
  document.execCommand("copy");
})
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/levels/handlers/addNewRow.js":
/*!**********************************************!*\
  !*** ./modules/levels/handlers/addNewRow.js ***!
  \**********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the levels config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#levels > tbody');

  for (var i = 0; i < add_counter; i++) {
    var lastID = tbody.find("tr").last().find('input[name="id"]').val();
    var incrementId = parseInt(lastID) || 0;
    var trLast = $('#level_template').html().replace(/%level_id%/g, ++incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/levels/handlers/saveLevelState.js":
/*!***************************************************!*\
  !*** ./modules/levels/handlers/saveLevelState.js ***!
  \***************************************************/
/*! exports provided: saveLevelState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLevelState", function() { return saveLevelState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the levels config grid
 *
 * @returns {boolean}
 */

function saveLevelState() {
  var rowToSave = $(this).parents('tr');
  var row = rowToSave.find(".editable select, .editable input").serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](rowToSave.data('action')).method('PUT').data(row).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/levels/module.js":
/*!**********************************!*\
  !*** ./modules/levels/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveLevelState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveLevelState */ "./modules/levels/handlers/saveLevelState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/levels/handlers/addNewRow.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");






$(document)
/**
 * Create award and save level
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_2__["default"].bind(_this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_CREATE"], function (data, self) {
    saveButton.click();
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_3__["default"].bind(_this, saveButton)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_DELETE"], function (data, self) {
    saveButton.click();
  });
})
/**
 * Add next rows to the levels grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveLevelState__WEBPACK_IMPORTED_MODULE_0__["saveLevelState"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/linked-assets/handlers/showAsset.js":
/*!*****************************************************!*\
  !*** ./modules/linked-assets/handlers/showAsset.js ***!
  \*****************************************************/
/*! exports provided: showAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAsset", function() { return showAsset; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Handler for show asset
 */

function showAsset(e) {
  e.preventDefault();
  var currentElement = $(this);
  var action = SWOW_ASSET_ROUTE + '?id=' + currentElement.val();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    console.log(response);

    if (response.hasOwnProperty('data')) {
      if (response.data.hasOwnProperty('name')) {
        currentElement.parents('tr').find('.asset-name').html(response.data.name);
      }

      if (response.data.hasOwnProperty('preview_url')) {
        currentElement.parents('tr').find('.asset-preview img').attr('src', response.data.preview_url);
        currentElement.parents('tr').find('.asset-preview .list-thumbnail').data('full', response.data.preview_url);
      }
    }
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/linked-assets/module.js":
/*!*****************************************!*\
  !*** ./modules/linked-assets/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showAsset */ "./modules/linked-assets/handlers/showAsset.js");

$(document)
/**
 * Show asset
 */
.on('change', '.asset', _handlers_showAsset__WEBPACK_IMPORTED_MODULE_0__["showAsset"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/addNewRow.js":
/*!****************************************************!*\
  !*** ./modules/localization/handlers/addNewRow.js ***!
  \****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the localization config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var tbody = $('#localizations > tbody');
  var template = $('#localization_template').html();
  tbody.append(template);
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/removeRow.js":
/*!****************************************************!*\
  !*** ./modules/localization/handlers/removeRow.js ***!
  \****************************************************/
/*! exports provided: removeRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRow", function() { return removeRow; });
/**
 * Remove not saved row
 *
 * @returns {boolean}
 */
function removeRow(e) {
  e.preventDefault();
  $(this).parents('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/saveLocalizationState.js":
/*!****************************************************************!*\
  !*** ./modules/localization/handlers/saveLocalizationState.js ***!
  \****************************************************************/
/*! exports provided: saveLocalizationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLocalizationState", function() { return saveLocalizationState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");



/**
 * Update row to the localization config grid
 *
 * @returns {boolean}
 */

function saveLocalizationState(e) {
  e.preventDefault();
  var currentBtn = $(this);
  var parent = currentBtn.closest('tr');
  var currentKey = parent.find('.localization-key').val();
  /**
   * Check duplicated keys
   *
   * @type {jQuery}
   */

  var currentKeyDuplicate = $('#localizations').find('.localization-key').filter(function (_, item) {
    return currentKey === item.value;
  });

  if (currentKeyDuplicate.length > 1) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__["default"])({
      'message': 'Duplicate key ' + currentKey
    });
    return false;
  }

  var data = parent.find('.editable input').serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).success(function (response) {
    parent.find('.localization-key').attr('readonly', true);
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/module.js":
/*!****************************************!*\
  !*** ./modules/localization/module.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveLocalizationState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveLocalizationState */ "./modules/localization/handlers/saveLocalizationState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/localization/handlers/addNewRow.js");
/* harmony import */ var _handlers_removeRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/removeRow */ "./modules/localization/handlers/removeRow.js");



$(document)
/**
 * Add next rows to the localizations grid
 */
.on('click', '.create-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveLocalizationState__WEBPACK_IMPORTED_MODULE_0__["saveLocalizationState"])
/**
 * Remove the row
 */
.on('click', '.remove-row', _handlers_removeRow__WEBPACK_IMPORTED_MODULE_2__["removeRow"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/handlers/addNewRow.js":
/*!*********************************************!*\
  !*** ./modules/magic/handlers/addNewRow.js ***!
  \*********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the magic config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#magic > tbody');

  for (var i = 0; i < add_counter; i++) {
    var lastID = tbody.find("tr").last().find('input[name="id"]').val();
    var incrementId = parseInt(lastID) || 0;
    var trLast = $('#magic_template').html().replace(/%magic_id%/g, ++incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/handlers/saveMagicState.js":
/*!**************************************************!*\
  !*** ./modules/magic/handlers/saveMagicState.js ***!
  \**************************************************/
/*! exports provided: saveMagicState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMagicState", function() { return saveMagicState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the magic config grid
 *
 * @returns {boolean}
 */

function saveMagicState() {
  var data = $('.magic-save-container').find(".changed input");
  data.each(function (n, item) {
    $(item).attr('readonly', true);
  });

  if (data.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/module.js":
/*!*********************************!*\
  !*** ./modules/magic/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveMagicState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveMagicState */ "./modules/magic/handlers/saveMagicState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/magic/handlers/addNewRow.js");


$(document)
/**
 * Add next rows to the magic grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveMagicState__WEBPACK_IMPORTED_MODULE_0__["saveMagicState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js":
/*!*****************************************************************!*\
  !*** ./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Show last makeup kit ID
 *
 * @param e
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).success(function (result) {
    $('#last-makeup-kit-id').val(result.makeup_kit_id);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit-asset/module.js":
/*!********************************************!*\
  !*** ./modules/makeup-kit-asset/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_getLastMakeupKitID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/getLastMakeupKitID */ "./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js");

/**
 * Show last makeup kit ID at the body parts grid
 */

$('#get-last-makeup-kit-id').click(_handlers_getLastMakeupKitID__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit/constants.js":
/*!*****************************************!*\
  !*** ./modules/makeup-kit/constants.js ***!
  \*****************************************/
/*! exports provided: MAKEUP_KIT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKEUP_KIT_SHOW_FORM", function() { return MAKEUP_KIT_SHOW_FORM; });
var MAKEUP_KIT_SHOW_FORM = 'MAKEUP_KIT_SHOW_FORM';

/***/ }),

/***/ "./modules/makeup-kit/module.js":
/*!**************************************!*\
  !*** ./modules/makeup-kit/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var modules_makeup_kit_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/makeup-kit/constants */ "./modules/makeup-kit/constants.js");


/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(modules_makeup_kit_constants__WEBPACK_IMPORTED_MODULE_1__["MAKEUP_KIT_SHOW_FORM"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/addNewRow.js":
/*!********************************************************!*\
  !*** ./modules/meal-ingredients/handlers/addNewRow.js ***!
  \********************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the ingredient config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal_ingredients > tbody');
  var trLast = $('#meal_ingredients_template').html();
  var lastID = tbody.find("tr").last().find('.ingredient_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal-ingredient%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/ingredientDelete.js":
/*!***************************************************************!*\
  !*** ./modules/meal-ingredients/handlers/ingredientDelete.js ***!
  \***************************************************************/
/*! exports provided: ingredientDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientDelete", function() { return ingredientDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function ingredientDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/savePage.js":
/*!*******************************************************!*\
  !*** ./modules/meal-ingredients/handlers/savePage.js ***!
  \*******************************************************/
/*! exports provided: saveMealIngredientsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMealIngredientsState", function() { return saveMealIngredientsState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the Meal Ingredients config grid
 *
 * @returns {boolean}
 */

function saveMealIngredientsState() {
  var route = $(this).data('route');
  var data = $('.meal-ingredients-save-page-container').find(".changed input");
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/module.js":
/*!********************************************!*\
  !*** ./modules/meal-ingredients/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal-ingredients/handlers/addNewRow.js");
/* harmony import */ var _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/ingredientDelete */ "./modules/meal-ingredients/handlers/ingredientDelete.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/meal-ingredients/handlers/savePage.js");



$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__["ingredientDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
                 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealIngredientsState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/addNewRow.js":
/*!********************************************!*\
  !*** ./modules/meal/handlers/addNewRow.js ***!
  \********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the meal config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal > tbody');
  var trLast = $('#meal_template').html();
  var lastID = tbody.find("tr").last().find('.meal_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal%/g, i + incrementId));
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/mealDelete.js":
/*!*********************************************!*\
  !*** ./modules/meal/handlers/mealDelete.js ***!
  \*********************************************/
/*! exports provided: mealDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mealDelete", function() { return mealDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function mealDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/savePage.js":
/*!*******************************************!*\
  !*** ./modules/meal/handlers/savePage.js ***!
  \*******************************************/
/*! exports provided: saveMealState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMealState", function() { return saveMealState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");


/**
 * Update row to the Meal config grid
 *
 * @returns {boolean}
 */

function saveMealState() {
  var route = $(this).data('route');
  var tbody = $('.meal-save-page-container').find(".changed");
  var data = $('.meal-save-page-container').find(".changed input, .changed select").serializeArray();

  if (data.length === 0) {
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  tbody.each(function (n, item) {
    $(item).removeClass('changed');
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/module.js":
/*!********************************!*\
  !*** ./modules/meal/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal/handlers/addNewRow.js");
/* harmony import */ var _handlers_mealDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/mealDelete */ "./modules/meal/handlers/mealDelete.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/meal/handlers/savePage.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");







$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_mealDelete__WEBPACK_IMPORTED_MODULE_1__["mealDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Create award and save meal
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this)();
  $(this).closest('tr').addClass('changed');
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_3__["AWARD_CREATE"], function (data, self) {
    Object(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealState"])();
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  var saveButton = $('.save-page');
  $(this).closest('tr').addClass('changed');
  $(this).closest('tr').find('input[name="award_id"]').val(0);
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_5__["default"].bind(_this, saveButton)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_3__["AWARD_DELETE"], function (data, self) {
    saveButton.click();
  });
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/constants.js":
/*!************************************************!*\
  !*** ./modules/neighbor-activity/constants.js ***!
  \************************************************/
/*! exports provided: NEIGHBOR_ACTIVITY_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEIGHBOR_ACTIVITY_SHOW_FORM", function() { return NEIGHBOR_ACTIVITY_SHOW_FORM; });
var NEIGHBOR_ACTIVITY_SHOW_FORM = 'NEIGHBOR_ACTIVITY_SHOW_FORM';

/***/ }),

/***/ "./modules/neighbor-activity/handlers/changeType.js":
/*!**********************************************************!*\
  !*** ./modules/neighbor-activity/handlers/changeType.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var TRASH = 'TRASH';
var TRASH_FIELDS_ID = 'trash-fields';
var SELECT_ID = 'neighbor-activity-type-id';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var select = document.getElementById(SELECT_ID);

  if (!select || select.selectedIndex === -1) {
    return false;
  }

  if (select.options.length && select.options[select.selectedIndex]) {
    var selectedElement = select.options[select.selectedIndex];
    var trashFields = $('#' + TRASH_FIELDS_ID);

    switch (selectedElement.text.toUpperCase()) {
      case TRASH:
        trashFields.removeClass('hide');
        break;

      default:
        trashFields.addClass('hide');
    }
  }

  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/listeners/showForm.js":
/*!*********************************************************!*\
  !*** ./modules/neighbor-activity/listeners/showForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/neighbor-activity/constants.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/changeType */ "./modules/neighbor-activity/handlers/changeType.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_ACTIVITY_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_ACTIVITY_SHOW_FORM"], self);
    Object(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"])();
    $('.neighbor-activity-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/module.js":
/*!*********************************************!*\
  !*** ./modules/neighbor-activity/module.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/neighbor-activity/handlers/changeType.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/neighbor-activity/listeners/showForm.js");




$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]).on('change', '.neighbor-activity-type', _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"]);
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/handlers/assetTab.js":
/*!************************************************!*\
  !*** ./modules/nla-asset/handlers/assetTab.js ***!
  \************************************************/
/*! exports provided: assetTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetTab", function() { return assetTab; });
/**
 * Handler for change tab
 */
function assetTab(e) {
  var currentElement = $(this).find('a');
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?activeTab=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/handlers/changeTab.js":
/*!*************************************************!*\
  !*** ./modules/nla-asset/handlers/changeTab.js ***!
  \*************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/handlers/saveState.js":
/*!*************************************************!*\
  !*** ./modules/nla-asset/handlers/saveState.js ***!
  \*************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function saveState() {
  var category = $('[name="category"]').val();
  var asset_ids = $('[name="assets_ids"]');

  if (!asset_ids.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]('nla-assign').method('POST').data({
      asset_ids: asset_ids.val(),
      category: category
    }).success(function (response) {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      asset_ids.val('');
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/handlers/updateList.js":
/*!**************************************************!*\
  !*** ./modules/nla-asset/handlers/updateList.js ***!
  \**************************************************/
/*! exports provided: updateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateList", function() { return updateList; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function updateList() {
  var assetIds = [];
  var category = $('[name="category"]').val();
  var asignList = $('tbody,container').find(':checkbox:checked');
  asignList.each(function (i, assetId) {
    assetIds.push($(assetId).data('asset'));
  });

  if (!assetIds.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    console.log($(this));
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data({
      asset_ids: assetIds,
      category: category
    }).success(function (response) {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      asignList.prop("checked", false);
      location.reload();
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-asset/module.js":
/*!*************************************!*\
  !*** ./modules/nla-asset/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_assetTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/assetTab */ "./modules/nla-asset/handlers/assetTab.js");
/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/nla-asset/handlers/changeTab.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/nla-asset/handlers/saveState.js");
/* harmony import */ var _handlers_updateList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/updateList */ "./modules/nla-asset/handlers/updateList.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






$(document)
/**
 * Change url on tab change
 */
.on('click', '.nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__["changeTab"])
/**
 * Change url on tab change
 */
.on('click', '.asset-tab', _handlers_assetTab__WEBPACK_IMPORTED_MODULE_0__["assetTab"])
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Save state
 */
.on('click', '.update-assign', _handlers_updateList__WEBPACK_IMPORTED_MODULE_3__["updateList"]).on('click', '.ajax-submit-action', function () {
  $(this).append('<i class="fa fa-spinner fa-spin"></i>');
})
/**
 * Update nla list category
 */
.on('click', '.asset-assign', _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__["saveState"])
/**
 * NLA qty
 */
.on('change', '#qty', function () {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]('change-per-page').method('POST').data({
    record_per_page: $(this).val()
  }).success(function (response) {
    var _location$href$split = location.href.split('?'),
        _location$href$split2 = _slicedToArray(_location$href$split, 2),
        head = _location$href$split2[0],
        tail = _location$href$split2[1];

    location.href = head + '?' + tail.replace(new RegExp("page=[^&]*|page=[^&]*&"), '');
  }).send();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-category/handlers/addNewRow.js":
/*!****************************************************!*\
  !*** ./modules/nla-category/handlers/addNewRow.js ***!
  \****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('tbody.container');
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    if ($(item).data('id')) {
      lastIDS.push($(item).data('id'));
    }
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#template').html().replace(/%id%/g, i + incrementId);
    tbody.prepend(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-category/handlers/changeTab.js":
/*!****************************************************!*\
  !*** ./modules/nla-category/handlers/changeTab.js ***!
  \****************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-category/handlers/saveState.js":
/*!****************************************************!*\
  !*** ./modules/nla-category/handlers/saveState.js ***!
  \****************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.container');
  var data = container.find(".changed input, .changed select");
  var formItems = container.find(".changed");

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      setTimeout(function () {
        location.reload();
      }, 500);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-category/module.js":
/*!****************************************!*\
  !*** ./modules/nla-category/module.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/nla-category/handlers/changeTab.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/nla-category/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/nla-category/handlers/saveState.js");



$(document)
/**
 * Add next rows to the grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Change url on tab change
 */
.on('click', '.nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
})
/**
 * Save state
 */
.on('click', '.save-page', _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__["saveState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-section/handlers/addNewRow.js":
/*!***************************************************!*\
  !*** ./modules/nla-section/handlers/addNewRow.js ***!
  \***************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('tbody.container');
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    if ($(item).data('id')) {
      lastIDS.push($(item).data('id'));
    }
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#template').html().replace(/%id%/g, i + incrementId);
    tbody.prepend(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-section/handlers/changeTab.js":
/*!***************************************************!*\
  !*** ./modules/nla-section/handlers/changeTab.js ***!
  \***************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-section/handlers/saveState.js":
/*!***************************************************!*\
  !*** ./modules/nla-section/handlers/saveState.js ***!
  \***************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.container');
  var data = container.find(".changed input");
  var formItems = container.find(".changed");

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      setTimeout(function () {
        location.reload();
      }, 500);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/nla-section/module.js":
/*!***************************************!*\
  !*** ./modules/nla-section/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/nla-section/handlers/changeTab.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/nla-section/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/nla-section/handlers/saveState.js");



$(document)
/**
 * Add next rows to the grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Change url on tab change
 */
.on('click', '.nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
})
/**
 * Save state
 */
.on('click', '.save-page', _handlers_saveState__WEBPACK_IMPORTED_MODULE_2__["saveState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/product/constants.js":
/*!**************************************!*\
  !*** ./modules/product/constants.js ***!
  \**************************************/
/*! exports provided: PRODUCT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SHOW_FORM", function() { return PRODUCT_SHOW_FORM; });
var PRODUCT_SHOW_FORM = 'PRODUCT_SHOW_FORM';

/***/ }),

/***/ "./modules/product/handlers/priceInit.js":
/*!***********************************************!*\
  !*** ./modules/product/handlers/priceInit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ "../../../node_modules/cleave.js/dist/cleave.js");
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cleave_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Price init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new cleave_js__WEBPACK_IMPORTED_MODULE_0___default.a(this, {
    numeral: true,
    prefix: '$ ',
    rawValueTrimPrefix: true,
    onValueChanged: function onValueChanged(e) {
      var value = parseInt(parseFloat(e.target.rawValue) * 100);
      var productPrice = $(this.element).closest('td').find('.product-price');

      if (value !== parseInt(productPrice.val())) {
        productPrice.val(value).change();
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/product/module.js":
/*!***********************************!*\
  !*** ./modules/product/module.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var modules_product_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/product/constants */ "./modules/product/constants.js");
/* harmony import */ var modules_product_handlers_priceInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/product/handlers/priceInit */ "./modules/product/handlers/priceInit.js");





$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_2__["default"])(modules_product_constants__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_SHOW_FORM"]));
/**
 * Price format
 */

$('.product-price-view').each(modules_product_handlers_priceInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/public/module.js":
/*!**********************************!*\
  !*** ./modules/public/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


$(document)
/**
 * NLA order
 */
.on('change', '#order', function () {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]('change-order').method('POST').data({
    order: $(this).val()
  }).success(function (response) {
    location.reload();
  }).send();
})
/**
 * NLA qty
 */
.on('change', '#qty', function () {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]('change-per-page').method('POST').data({
    record_per_page: $(this).val()
  }).success(function (response) {
    var _location$href$split = location.href.split('?'),
        _location$href$split2 = _slicedToArray(_location$href$split, 2),
        head = _location$href$split2[0],
        tail = _location$href$split2[1];

    location.href = head + '?' + tail.replace(new RegExp("page=[^&]*|page=[^&]*&"), '');
  }).send();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/dropzoneInit.js":
/*!***************************************************!*\
  !*** ./modules/settings/handlers/dropzoneInit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");



/**
 * Dropzone init
 *
 * @param _
 * @param item
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_, item) {
  var dropzoneContainer = $(item);
  var previewHiddenInput = dropzoneContainer.find('input');
  /**
   * Dropzone initialization
   */

  var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](item).setUploadUrl(dropzoneContainer.data('url')).error(function (file, response) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
    previewHiddenInput.val('');
  }).cancel(function () {
    previewHiddenInput.val('');
  }).success(function (file, response) {
    $('.dz-filename span').text(response.file_name);
    previewHiddenInput.val(response.file_name);
  });
  /**
   * Set preview
   */

  if (!!previewHiddenInput.val()) {
    dropzoneBuilder.setPreview(previewHiddenInput.val(), Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__["default"])(dropzoneContainer.data('folder'), previewHiddenInput.val()));
  }
  /**
   * Dropzone build
   */


  dropzoneBuilder.build();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/module.js":
/*!************************************!*\
  !*** ./modules/settings/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "../../../node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_dropzoneInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/dropzoneInit */ "./modules/settings/handlers/dropzoneInit.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");






/**
 * Turned off the Dropzone auto init
 *
 * @type {boolean}
 */

dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.autoDiscover = false;
/**
 * Dropzone init
 */

$('.dropzone').each(_handlers_dropzoneInit__WEBPACK_IMPORTED_MODULE_1__["default"]);
$(document)
/**
 * Create award and save row
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__["default"].bind(_this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_CREATE"], function (data, self) {
    saveButton.click();
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_4__["default"].bind(_this, saveButton)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_DELETE"], function (data, self) {
    saveButton.click();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/modules/ai_animation/module.js":
/*!*********************************************************!*\
  !*** ./modules/settings/modules/ai_animation/module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var WALK_CATEGORY = '6';
var RUN_CATEGORY = '7';
$(document).ready(function () {
  var select2 = $('.table').find('.embed-group select.select2');
  var selectVal = 0;
  select2.each(function (n, i) {
    selectVal = $(i).val();

    if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
      $(i).closest('.embed-group').find('.embed-group').find(".row:eq(1)").show();
    } else {
      $(i).closest('.embed-group').find('.embed-group').find(".row:eq(1)").hide();
    }
  });
})
/**
 * Show hide speed on trigger add-embed button
 */
.on('ai_animation', '.add-embed', function () {
  var embed = $(this).closest('.embed-group');
  var selectVal = embed.find('.select2').val();

  if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
    embed.find('.embed-group').find(".row:eq(1)").show();
  } else {
    embed.find('.embed-group').find(".row:eq(1)").hide();
  }
})
/**
 * Show hide speed
 */
.on('.select2').change(function (item) {
  var selectVal = $(item.target).val();

  if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
    $(item.target).closest('.embed-group').find('.embed-group').find(".row:eq(1)").show();
  } else {
    $(item.target).closest('.embed-group').find('.embed-group').find(".row:eq(1)").hide();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/constants.js":
/*!**********************************************!*\
  !*** ./modules/shop-department/constants.js ***!
  \**********************************************/
/*! exports provided: SHOP_DEPARTMENT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_DEPARTMENT_SHOW_FORM", function() { return SHOP_DEPARTMENT_SHOW_FORM; });
var SHOP_DEPARTMENT_SHOW_FORM = 'SHOP_DEPARTMENT_SHOW_FORM';

/***/ }),

/***/ "./modules/shop-department/handlers/addShop.js":
/*!*****************************************************!*\
  !*** ./modules/shop-department/handlers/addShop.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Add a new shop in a departments grid
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var table = currentBtn.closest('.shops-table').find('tbody');
  var departmentId = currentBtn.data('department');
  var counter = parseInt(currentBtn.data('count'));
  var template = $('#shop-template').html().replace(new RegExp('%departmentId%', "g"), departmentId).replace(new RegExp('%index%', "g"), counter++);
  currentBtn.data('count', counter);
  table.append(template);
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/fastSave.js":
/*!******************************************************!*\
  !*** ./modules/shop-department/handlers/fastSave.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");



/**
 * Fast save for shop department
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var dataNamePrefix = 'shop';
  var currentBtn = $(this);
  var fastSaveContainer = currentBtn.closest('.fast-save-container');

  if (!fastSaveContainer.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  var result = {};
  fastSaveContainer.find('tbody tr').each(function (index) {
    var formData = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])($(this));

    for (var i in formData) {
      var itemName = "".concat(dataNamePrefix, "[").concat(index, "][").concat(i, "]");
      result[itemName] = formData[i];
    }
  });
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(result).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/radioInput.js":
/*!********************************************************!*\
  !*** ./modules/shop-department/handlers/radioInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Radio input from checkbox
 * Because input[type=radio] did not work correctly
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentItem = $(this);
  var allItems = currentItem.closest('.table').find('.radio');
  allItems.prop('checked', false);
  allItems.removeClass('checked');
  currentItem.prop('checked', true);
  currentItem.addClass('checked');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/sortableInit.js":
/*!**********************************************************!*\
  !*** ./modules/shop-department/handlers/sortableInit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new sortablejs__WEBPACK_IMPORTED_MODULE_0___default.a(this, {
    group: 'shops',
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      new Promise(function (resolve) {
        resolve({
          radio: $(e.item).find('.radio'),
          parent: $(e.item).closest('.table')
        });
      }).then(function (data) {
        if (data.parent.find('.radio.checked:gt(0)').length) {
          data.radio.removeClass('checked');
          data.radio.prop('checked', false);
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/listeners/showForm.js":
/*!*******************************************************!*\
  !*** ./modules/shop-department/listeners/showForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/shop-department/constants.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");
/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");





/**
 * Dropzone init after the modal opened
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["SHOP_DEPARTMENT_SHOW_FORM"], function () {
    /**
     * Preview
     */
    dropzoneInit(document.getElementById('dropzone'), document.getElementById('preview-url'));
    /**
     * Preview Small
     */

    dropzoneInit(document.getElementById('dropzone-small'), document.getElementById('preview-url-small'));
  });
});
/**
 * Dropzone Init
 *
 * @param {HTMLElement} dropzoneElement
 * @param {HTMLElement} previewUrlElement
 *
 * @returns {boolean}
 */

function dropzoneInit(dropzoneElement, previewUrlElement) {
  if (!dropzoneElement) {
    return false;
  }
  /**
   * Dropzone initialization
   */


  var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](dropzoneElement).setUploadUrl(dropzoneElement.dataset.url).error(function (file, response) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    $(previewUrlElement).val('');
  }).cancel(function () {
    $(previewUrlElement).val('');
  }).success(function (file, response) {
    $(dropzoneElement).find('.dz-filename span').text(response.file_name);
    previewUrlElement.value = response.file_name;
  });
  /**
   * Set preview
   */

  if (previewUrlElement.value.length) {
    dropzoneBuilder.setPreview(previewUrlElement.value, Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_3__["default"])(dropzoneElement.dataset.folder, previewUrlElement.value));
  }
  /**
   * Dropzone build
   */


  dropzoneBuilder.build();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/module.js":
/*!*******************************************!*\
  !*** ./modules/shop-department/module.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addShop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addShop */ "./modules/shop-department/handlers/addShop.js");
/* harmony import */ var _handlers_fastSave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/fastSave */ "./modules/shop-department/handlers/fastSave.js");
/* harmony import */ var _handlers_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/radioInput */ "./modules/shop-department/handlers/radioInput.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/shop-department/listeners/showForm.js");
/* harmony import */ var modules_shop_department_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/shop-department/handlers/sortableInit */ "./modules/shop-department/handlers/sortableInit.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./modules/shop-department/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Dropzone init
 */

Object(_listeners_showForm__WEBPACK_IMPORTED_MODULE_3__["default"])();
$(document)
/**
 * Radio buttons behavior
 */
.on('change', '.radio', _handlers_radioInput__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Document ready
 */
.ready(function () {
  /**
   * Add class to checked radios
   */
  $('.radio[checked]').addClass('checked');
  /**
   * Add a new shop in a departments grid
   */

  $('.add-shop').click(_handlers_addShop__WEBPACK_IMPORTED_MODULE_0__["default"]);
  /**
   * Fast save
   */

  $('.fast-save-shops').click(_handlers_fastSave__WEBPACK_IMPORTED_MODULE_1__["default"]);
  /**
   * Make tr to sortable
   */

  $('.sortable').each(modules_shop_department_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/styles.scss":
/*!*********************************************!*\
  !*** ./modules/shop-department/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/sound/handlers/addNewRow.js":
/*!*********************************************!*\
  !*** ./modules/sound/handlers/addNewRow.js ***!
  \*********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the sound config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#sound > tbody');
  var trLast = $('#sound_template').html();
  var lastID = tbody.find("tr").last().find('.sound_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%sound_id%/g, i + incrementId));
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/handlers/saveSoundState.js":
/*!**************************************************!*\
  !*** ./modules/sound/handlers/saveSoundState.js ***!
  \**************************************************/
/*! exports provided: saveSoundState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSoundState", function() { return saveSoundState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the sound config grid
 *
 * @returns {boolean}
 */

function saveSoundState() {
  var data = $('.sound-save-container').find(".changed input, .changed select").serializeArray();

  if (data.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/module.js":
/*!*********************************!*\
  !*** ./modules/sound/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveSoundState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveSoundState */ "./modules/sound/handlers/saveSoundState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/sound/handlers/addNewRow.js");


$(document)
/**
 * Add next rows to the sound grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveSoundState__WEBPACK_IMPORTED_MODULE_0__["saveSoundState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes-form/handlers/findUser.js":
/*!**********************************************************!*\
  !*** ./modules/special-prizes-form/handlers/findUser.js ***!
  \**********************************************************/
/*! exports provided: findUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Find User
 *
 * @returns {boolean}
 */

function findUser() {
  var prefix = $(this).data('prefix');
  var data = {
    uid: $('#' + prefix).val(),
    name: $('#' + prefix + '_name').val(),
    prefix: prefix
  };
  var user_template = $('#user_template').html();
  var insert_block = $('#' + prefix + '_list');

  if (!data.uid.length && !data.name.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      insert_block.html('');
      $(response.users).each(function (index, item) {
        insert_block.closest('table').css('display', 'inline-table');
        insert_block.append(user_template.replace(/%user_id%/g, item.id).replace('%pet_name%', item.pet).replace('%user_name%', item.first_name + ' ' + item.last_name).replace('%level%', item.xp).replace('%avatar%', item.avatar).replace(/%target%/g, prefix));
      });
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes-form/handlers/sendGift.js":
/*!**********************************************************!*\
  !*** ./modules/special-prizes-form/handlers/sendGift.js ***!
  \**********************************************************/
/*! exports provided: sendGift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendGift", function() { return sendGift; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");




/**
 * Send Gift
 *
 * @returns {boolean}
 */

function sendGift() {
  var container = $('#send-container');
  var formItems = container.find("input, textarea").serializeArray();

  if (!formItems.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__["default"])('Nothing to send!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(formItems).success(function (response) {
      if (!!response.errors) {
        Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      } else {
        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
        $('.table').hide();
      }
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes-form/module.js":
/*!***********************************************!*\
  !*** ./modules/special-prizes-form/module.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sendGift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sendGift */ "./modules/special-prizes-form/handlers/sendGift.js");
/* harmony import */ var _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/findUser */ "./modules/special-prizes-form/handlers/findUser.js");


$(document)
/**
 * Find user
 */
.on('click', '#find_sender, #find_receiver', _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__["findUser"])
/**
 * Save the row
 */
.on('click', '#send', _handlers_sendGift__WEBPACK_IMPORTED_MODULE_0__["sendGift"])
/**
 * Mark selected row
 */
.on('click', '.table tr', function () {
  $(this).find('input[type="radio"]').prop("checked", true);
  $('#' + $(this).data('target') + '_uid').val($(this).data('uid'));
})
/**
 * Change limit counter
 */
.on('input', 'textarea', function () {
  var target = $(this).prop('name').replace('loot_data[', '').replace(']', '') + '_length';
  $('#' + target).text($(this).data('maxlength') - $(this).val().length);
})
/**
 * Mark selected asset
 */
.on('click', '#assets_list img', function () {
  $('#assets_list').find('img').css('border', '');
  $(this).css('border', '2px solid #c1c1c1');
  $('#asset_id').val($(this).data('prize'));
})
/**
 * Remove entered data
 */
.on('click', '#cancel', function () {
  $('.table').hide();
  $(this).closest('table').find('input[type="text"], textarea').val('');
})
/**
 * Redirect
 */
.on('click', '.redirect', function () {
  window.location = $(this).data('route');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes/handlers/changeTab.js":
/*!******************************************************!*\
  !*** ./modules/special-prizes/handlers/changeTab.js ***!
  \******************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/special-prizes/module.js":
/*!******************************************!*\
  !*** ./modules/special-prizes/module.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/special-prizes/handlers/changeTab.js");

$(document).ready(function () {
  $(".special-prize-save-container label:contains('Limit')").css('padding', 0).html("Available");
  $('.special-prize-save-container input').attr('readonly', true).attr('disabled', true);
  $('.add-embed, .remove-embed').remove();
})
/**
 * Copy ids
 */
.on('click', '.copy', function () {
  $('#' + $(this).data('target')).select();
  document.execCommand("copy");
})
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/tamatool/constants.js":
/*!***************************************!*\
  !*** ./modules/tamatool/constants.js ***!
  \***************************************/
/*! exports provided: TAMATOOL_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAMATOOL_SHOW_FORM", function() { return TAMATOOL_SHOW_FORM; });
var TAMATOOL_SHOW_FORM = 'TAMATOOL_SHOW_FORM';

/***/ }),

/***/ "./modules/tamatool/listeners/showForm.js":
/*!************************************************!*\
  !*** ./modules/tamatool/listeners/showForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/tamatool/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["TAMATOOL_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["TAMATOOL_SHOW_FORM"], self);
    $('.neighbor-activity-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/tamatool/module.js":
/*!************************************!*\
  !*** ./modules/tamatool/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/tamatool/listeners/showForm.js");



$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophies/handlers/findUser.js":
/*!***********************************************!*\
  !*** ./modules/trophies/handlers/findUser.js ***!
  \***********************************************/
/*! exports provided: findUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Find User
 *
 * @returns {boolean}
 */

function findUser() {
  var prefix = $(this).data('prefix');
  var data = {
    uid: $('#' + prefix).val(),
    name: $('#' + prefix + '_name').val(),
    prefix: prefix
  };
  var user_template = $('#user_template').html();
  var insert_block = $('#' + prefix + '_list');

  if (!data.uid.length && !data.name.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to find!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(data).success(function (response) {
      insert_block.html('');
      $(response.users).each(function (index, item) {
        insert_block.closest('table').css('display', 'inline-table');
        insert_block.append(user_template.replace(/%user_id%/g, item.id).replace('%pet_name%', item.pet).replace('%user_name%', item.first_name + ' ' + item.last_name).replace('%level%', item.xp).replace('%avatar%', item.avatar).replace(/%target%/g, prefix));
      });
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    }).send();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophies/handlers/sendGift.js":
/*!***********************************************!*\
  !*** ./modules/trophies/handlers/sendGift.js ***!
  \***********************************************/
/*! exports provided: sendGift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendGift", function() { return sendGift; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");




/**
 * Send Gift
 *
 * @returns {boolean}
 */

function sendGift() {
  var container = $('#trophy-save-container');
  var formItems = container.find("input, textarea").serializeArray();

  if (!formItems.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_3__["default"])('Nothing to send!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('POST').data(formItems).success(function (response) {
      if (!!response.errors) {
        Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      } else {
        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
        var trophy_cups_count = $('#trophy_cups_count');
        trophy_cups_count.text(parseInt(trophy_cups_count.text()) + 1);
        $('.table').hide();
        $('#trophy-save-container').find('input[type="text"], textarea').val('');
      }
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophies/module.js":
/*!************************************!*\
  !*** ./modules/trophies/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sendGift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sendGift */ "./modules/trophies/handlers/sendGift.js");
/* harmony import */ var _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/findUser */ "./modules/trophies/handlers/findUser.js");


$(document)
/**
 * Find user
 */
.on('click', '#find_sender, #find_receiver', _handlers_findUser__WEBPACK_IMPORTED_MODULE_1__["findUser"])
/**
 * Save the row
 */
.on('click', '#send', _handlers_sendGift__WEBPACK_IMPORTED_MODULE_0__["sendGift"])
/**
 * Mark selected row
 */
.on('click', '.table tr', function () {
  $(this).find('input[type="radio"]').prop("checked", true);
  $('#' + $(this).data('target') + '_uid').val($(this).data('uid'));
})
/**
 * Change limit counter
 */
.on('input', 'textarea', function () {
  var target = $(this).prop('name').replace('cup_data[', '').replace(']', '') + '_length';
  $('#' + target).text($(this).data('maxlength') - $(this).val().length);
})
/**
 * Remove entered data
 */
.on('click', '#cancel', function () {
  $('.table').hide();
  $(this).closest('table').find('input[type="text"], textarea').val('');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophy-cup-users/handlers/changeTab.js":
/*!********************************************************!*\
  !*** ./modules/trophy-cup-users/handlers/changeTab.js ***!
  \********************************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?env=" + direction;
  history.pushState({
    id: 'trophy-cup-users'
  }, 'Trophy cup users', url);
  window.location = url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophy-cup-users/handlers/saveState.js":
/*!********************************************************!*\
  !*** ./modules/trophy-cup-users/handlers/saveState.js ***!
  \********************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");



/**
 * Update row to the magic config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.trophy-save-container');
  var data = container.find(".changed input");
  var formItems = container.find(".changed");

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_2__["default"])('Nothing to save!');
  } else {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (response) {
      formItems.removeClass('changed');
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
    }).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/trophy-cup-users/module.js":
/*!********************************************!*\
  !*** ./modules/trophy-cup-users/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/trophy-cup-users/handlers/saveState.js");
/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/trophy-cup-users/handlers/changeTab.js");


$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_1__["changeTab"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/constants.js":
/*!************************************!*\
  !*** ./modules/users/constants.js ***!
  \************************************/
/*! exports provided: SEARCH_USER_ASSETS, SUBMIT_USER_PART_FORM, DELETE_NEIGHBOR, ADD_NEIGHBOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_ASSETS", function() { return SEARCH_USER_ASSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_USER_PART_FORM", function() { return SUBMIT_USER_PART_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NEIGHBOR", function() { return DELETE_NEIGHBOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEIGHBOR", function() { return ADD_NEIGHBOR; });
var SEARCH_USER_ASSETS = 'SEARCH_USER_ASSETS';
var SUBMIT_USER_PART_FORM = 'SUBMIT_USER_PART_FORM';
var DELETE_NEIGHBOR = 'DELETE_NEIGHBOR';
var ADD_NEIGHBOR = 'ADD_NEIGHBOR';

/***/ }),

/***/ "./modules/users/handlers/changePlacement.js":
/*!***************************************************!*\
  !*** ./modules/users/handlers/changePlacement.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Change placement select in Add Assets block
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var placementName = $('#placement-name');

  if ($(this).val() > 0) {
    placementName.attr('disabled', 'disabled');
  } else {
    placementName.removeAttr('disabled');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changeRandomNeighbors.js":
/*!*********************************************************!*\
  !*** ./modules/users/handlers/changeRandomNeighbors.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Change mode for add neighbors
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var neighborsCount = $('#neighbors-count');

  if ($(this).is(':checked')) {
    neighborsCount.removeAttr('disabled');
  } else {
    neighborsCount.attr('disabled', 'disabled');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/hidePlacementAssets.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/hidePlacementAssets.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Hide assets in placement
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.toggleClass('hide');
  currentElement.siblings('.load-assets').toggleClass('hide');
  $('#asset-container-' + currentElement.data('placement')).html('');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/loadPlacementAssets.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/loadPlacementAssets.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * PLACEMENT_ASSETS_ROUTE - it is a global object
 * Inited in user/edit.blade.php
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentElement = $(this);
  var placement = currentElement.data('placement');
  currentElement.toggleClass('hide');
  currentElement.siblings('.hide-assets').toggleClass('hide');
  loadPart(PLACEMENT_ASSETS_ROUTE + '?placement=' + placement, $('#asset-container-' + placement));
  return false;
});
/**
 * Load part for edit user page
 */

function loadPart(action, element) {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    var items = $(response);
    items.find('.list-thumbnail').popover({
      container: 'body',
      html: true,
      trigger: 'hover',
      placement: 'right',
      content: function content() {
        return '<img src="' + $(this).data('full') + '">';
      }
    });
    element.replaceWith(items);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/addNeighbor.js":
/*!************************************************!*\
  !*** ./modules/users/listeners/addNeighbor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Set neighbor as active
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["ADD_NEIGHBOR"], function (resp) {
    if (resp.type == 'success') {
      $('#delete-neighbor-' + resp.data.neighbor_id).removeClass('hidden');
      $('#add-neighbor-' + resp.data.neighbor_id).addClass('hidden');
      $('#neighbor-status-' + resp.data.neighbor_id).html(resp.data.status_text);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/deleteNeighbor.js":
/*!***************************************************!*\
  !*** ./modules/users/listeners/deleteNeighbor.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Set neighbor as deleted
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_NEIGHBOR"], function (resp) {
    if (resp.type == 'success') {
      $('#delete-neighbor-' + resp.data.neighbor_id).addClass('hidden');
      $('#add-neighbor-' + resp.data.neighbor_id).removeClass('hidden');
      $('#neighbor-status-' + resp.data.neighbor_id).html(resp.data.status_text);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/searchUserAssets.js":
/*!*****************************************************!*\
  !*** ./modules/users/listeners/searchUserAssets.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Search user assets
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["SEARCH_USER_ASSETS"], function (data) {
    $('#search-assets-container').html(data);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/submitUserPartForm.js":
/*!*******************************************************!*\
  !*** ./modules/users/listeners/submitUserPartForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");



/**
 * Submit user part form
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_2__["SUBMIT_USER_PART_FORM"], function (resp) {
    var form = $(resp.data);
    $('#' + resp.container).replaceWith(form);
    form.find('.select2').select2();
    Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__["default"])('User data updated');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/module.js":
/*!*********************************!*\
  !*** ./modules/users/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_searchUserAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/searchUserAssets */ "./modules/users/listeners/searchUserAssets.js");
/* harmony import */ var _listeners_submitUserPartForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners/submitUserPartForm */ "./modules/users/listeners/submitUserPartForm.js");
/* harmony import */ var _listeners_deleteNeighbor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/deleteNeighbor */ "./modules/users/listeners/deleteNeighbor.js");
/* harmony import */ var _listeners_addNeighbor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/addNeighbor */ "./modules/users/listeners/addNeighbor.js");
/* harmony import */ var _handlers_loadPlacementAssets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/loadPlacementAssets */ "./modules/users/handlers/loadPlacementAssets.js");
/* harmony import */ var _handlers_hidePlacementAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/hidePlacementAssets */ "./modules/users/handlers/hidePlacementAssets.js");
/* harmony import */ var _handlers_changePlacement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/changePlacement */ "./modules/users/handlers/changePlacement.js");
/* harmony import */ var _handlers_changeRandomNeighbors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handlers/changeRandomNeighbors */ "./modules/users/handlers/changeRandomNeighbors.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./modules/users/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);









/**
 * Search user assets listener
 */

Object(_listeners_searchUserAssets__WEBPACK_IMPORTED_MODULE_0__["default"])();
/**
 * Submit user part form listener
 */

Object(_listeners_submitUserPartForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
/**
 * Delete Neighbor
 */

Object(_listeners_deleteNeighbor__WEBPACK_IMPORTED_MODULE_2__["default"])();
/**
 * Add Neighbor
 */

Object(_listeners_addNeighbor__WEBPACK_IMPORTED_MODULE_3__["default"])();
$(document)
/**
 * Load assets in placement
 */
.on('click', '.load-assets', _handlers_loadPlacementAssets__WEBPACK_IMPORTED_MODULE_4__["default"])
/**
 * Change placement in Add Assets block
 */
.on('change', '#placement-for-asset', _handlers_changePlacement__WEBPACK_IMPORTED_MODULE_6__["default"])
/**
 * Change mode for add neighbors
 */
.on('change', '#is-random-neighbors', _handlers_changeRandomNeighbors__WEBPACK_IMPORTED_MODULE_7__["default"])
/**
 * Hide assets in placement
 */
.on('click', '.hide-assets', _handlers_hidePlacementAssets__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/styles.scss":
/*!***********************************!*\
  !*** ./modules/users/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxDb25maXJtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vYnNlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FkZEVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2FqYXhQYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2NvbmZpcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9mYXN0U2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3JlbW92ZUVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3N1Ym1pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGaWxlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldEZvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0U3ViRm9sZGVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2Ryb3Bab25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzIHN5bmMgbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzPzU1OGMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9nZXRMYXN0Q29sbGVjdGlvbk51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9saXN0ZW5lcnMvYXdhcmRDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvbGlzdGVuZXJzL2F3YXJkRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2F3YXJkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9oYW5kbGVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2VydC1zZXR1cC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NlcnQtc2V0dXAvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2VydC11c2Vycy9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0LXVzZXJzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NlcnQvaGFuZGxlcnMvZmluZFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jZXJ0L2hhbmRsZXJzL3NlbmRDZXJ0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2VydC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9jb3B5QWRwLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvY29weUFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZVRhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd0FyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93VGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9zdHlsZXMuc2Nzcz81NDc1Iiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXJvbGVzL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1yb2xlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXJzL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2Nzcz8xZWQ5Iiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9zdHlsZS5zY3NzPzk2NWYiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9oYW5kbGVycy9zYXZlRHBhU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2R5ZS9oYW5kbGVycy9jaGFuZ2VSb3dJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2R5ZS9oYW5kbGVycy9keWVTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2R5ZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9maW5nZXJwcmludC1mb3JtL2hhbmRsZXJzL3NhdmVGaW5nZXJwcmludC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2ZpbmdlcnByaW50LWZvcm0vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZmluZ2VycHJpbnQvaGFuZGxlcnMvc2F2ZUZpbmdlcnByaW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZmluZ2VycHJpbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9hc3NldENoYW5nZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvZmFzdFNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL3JlbW92ZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGVscGVycy9wb3NpdGlvblVwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9saXN0ZW5lcnMvYWRkUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwLWVkaXQvaGFuZGxlcnMvYWRtaW5TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwLWVkaXQvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9maW5kVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwLWVkaXQvaGFuZGxlcnMvc2V0TWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dyb3VwLWVkaXQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZXZlbnQvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZXZlbnQvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZXZlbnQvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAtZXZlbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ3JvdXAvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbGV2ZWxzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xldmVscy9oYW5kbGVycy9zYXZlTGV2ZWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xldmVscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9tZWFsRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1hc3NldC9oYW5kbGVycy9hc3NldFRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1hc3NldC9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtYXNzZXQvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWFzc2V0L2hhbmRsZXJzL3VwZGF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtYXNzZXQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWNhdGVnb3J5L2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1jYXRlZ29yeS9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ubGEtY2F0ZWdvcnkvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmxhLWNhdGVnb3J5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1zZWN0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1zZWN0aW9uL2hhbmRsZXJzL2NoYW5nZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1zZWN0aW9uL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25sYS1zZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9oYW5kbGVycy9wcmljZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3B1YmxpYy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9kcm9wem9uZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2FkZFNob3AuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvcmFkaW9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9zdHlsZXMuc2Nzcz9kZDgwIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvaGFuZGxlcnMvc2F2ZVNvdW5kU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zb3VuZC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zcGVjaWFsLXByaXplcy1mb3JtL2hhbmRsZXJzL2ZpbmRVc2VyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3BlY2lhbC1wcml6ZXMtZm9ybS9oYW5kbGVycy9zZW5kR2lmdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzLWZvcm0vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3BlY2lhbC1wcml6ZXMvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3BlY2lhbC1wcml6ZXMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdHJvcGhpZXMvaGFuZGxlcnMvZmluZFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90cm9waGllcy9oYW5kbGVycy9zZW5kR2lmdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Ryb3BoaWVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Ryb3BoeS1jdXAtdXNlcnMvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdHJvcGh5LWN1cC11c2Vycy9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90cm9waHktY3VwLXVzZXJzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVJhbmRvbU5laWdoYm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2hpZGVQbGFjZW1lbnRBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL2FkZE5laWdoYm9yLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL2RlbGV0ZU5laWdoYm9yLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL3NlYXJjaFVzZXJBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc3VibWl0VXNlclBhcnRGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvc3R5bGVzLnNjc3M/Y2EyZCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2Nzcz9iMDM0Il0sIm5hbWVzIjpbIlNJWkVTIiwic20iLCJtZCIsImxnIiwiTE9BRElOR19URVhUIiwiZHJvcHpvbmVDb250YWluZXIiLCJjb25maWciLCJfY29uZmlnIiwiX2Ryb3B6b25lQ29udGFpbmVyIiwiX2NhbmNlbEJ1dHRvbiIsIiQiLCJmaW5kIiwidXJsIiwiX3VwbG9hZFVybCIsIm5hbWUiLCJfcHJldmlldyIsImNhbGxiYWNrIiwiX2Vycm9yQ2FsbGJhY2siLCJfY2FuY2VsQ2FsbGJhY2siLCJfc3VjY2Vzc0NhbGxiYWNrIiwiX2Ryb3B6b25lQnVpbGRlciIsImRyb3B6b25lRmFpbCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidGh1bWJuYWlsV2lkdGgiLCJ0aHVtYm5haWxIZWlnaHQiLCJ1cGxvYWRNdWx0aXBsZSIsImFjY2VwdGVkRmlsZXMiLCJoZWFkZXJzIiwiQ1NSRl9UT0tFTiIsImluaXQiLCJlbWl0Iiwib24iLCJ0ZXh0IiwiZmlsZSIsInJlc3BvbnNlIiwiY2xpY2siLCJEcm9wem9uZSIsIl91cmwiLCJfbWV0aG9kIiwiX2RhdGEiLCJfZXJyb3IiLCJlcnJvckhhbmRsZXIiLCJfc3VjY2VzcyIsInN1Y2Nlc3NIYW5kbGVyIiwiX2NvbXBsZXRlIiwibWV0aG9kIiwiZGF0YSIsImZuIiwiYWpheCIsInR5cGUiLCJlcnJvciIsInJlc3BvbnNlSlNPTiIsInN1Y2Nlc3MiLCJjb21wbGV0ZSIsInJvdXRlIiwibG9jYXRpb24iLCJocmVmIiwibWVzc2FnZSIsIm5vdGlmeUVycm9yIiwiZXJyb3JzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJjb250ZW50IiwicHVzaCIsImh0bWwiLCJfZ2V0SUQiLCJqb2luIiwiX2dldFNpemUiLCJfYmVmb3JlQnVpbGQiLCJfZ2V0SGVhZGVyIiwiX2dldEJvZHkiLCJfZ2V0Rm9vdGVyIiwiX2FmdGVyQnVpbGQiLCJvZmYiLCJtb2RhbCIsImdldE1vZGFsQ291bnRlciIsIm1vZGFsQ29uZmlybSIsIk1vZGFsQnVpbGRlciIsIm5vdGlmeSIsInpfaW5kZXgiLCJFdmVudE9ic2VydmVyIiwic3Vic2NyaWJlcnMiLCJldmVudCIsImhhbmRsZXIiLCJfbG9nIiwiZm9yRWFjaCIsInN0YXRlIiwiZmlsdGVyIiwidG9VcHBlckNhc2UiLCJvYnNlcnZlciIsIlNhdmVkSXRlbU5vdEZvdW5kIiwiRXJyb3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50QnV0dG9uIiwidGFyZ2V0IiwidGVtcGxhdGUiLCJpZFBsYWNlaG9sZGVyIiwicm93SWQiLCJlbWJlZEZvcm0iLCJlbWJlZEJsb2NrSWQiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsIlJlZ0V4cCIsImxlbmd0aCIsImRpc3BhdGNoIiwidHJpZ2dlciIsImNvbnRhaW5lciIsInBhcmVudHMiLCJodHRwIiwicmVwbGFjZVdpdGgiLCJzZW5kIiwiZGF0YVNldCIsImJ0bkNsYXNzIiwiYnRuTmFtZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJwYXJzZUludCIsInJlbG9hZCIsImRpc21pc3MiLCJjbG9zZXN0IiwiY3VycmVudEJ0biIsInNhdmVkSXRlbSIsImF0dHIiLCJnZXRGb3JtRGF0YSIsIkNPTlRBSU5FUl9TRUxFQ1RPUiIsImZvcm1JdGVtcyIsIm1hcmtDaGFuZ2VkIiwiZG9jdW1lbnQiLCJtb2RhbERhdGEiLCJjb25maXJtTW9kYWwiLCJzdWJtaXRGb3JtIiwiYWpheFBhZ2luYXRpb24iLCJhZGRFbWJlZCIsInJlbW92ZUVtYmVkIiwiZmFzdFNhdmUiLCJmYXN0U2F2ZVBhZ2UiLCJhZnRlckJ1aWxkIiwicGFyZW50IiwiaWQiLCJzZXJpYWxpemVBcnJheSIsImNhblJlbG9hZCIsImJ1dHRvbiIsImRhdGFSZWxvYWQiLCJyb290Rm9sZGVyIiwiZmlsZU5hbWUiLCJnZXRTdWJGb2xkZXIiLCJmb3JtIiwiZm9ybURhdGEiLCJlYWNoIiwiY3VycmVudEl0ZW0iLCJwcm9wIiwidmFsIiwiZmlsZU5hbWVIYXNoIiwibWQ1Iiwic3Vic3RyaW5nIiwicGF0aFBhcnRzIiwibWF0Y2giLCJ3aW5kb3ciLCJqUXVlcnkiLCJwYXRoIiwicGF0aG5hbWUiLCJzcGxpdCIsImNvbnRleHQiLCJyZXF1aXJlIiwibW9kdWxlIiwidW5kZWZpbmVkIiwic3Vic2NyaWJlIiwiQVdBUkRfQ1JFQVRFIiwic2VsZiIsInVuc3Vic2NyaWJlIiwiZWRpdEJ0biIsInRlbXBsYXRlSWQiLCJ0ZW1wbGF0ZVBsYWNlaG9sZGVyIiwiYXdhcmRfaWQiLCJBV0FSRF9ERUxFVEUiLCJjcmVhdGVCdG4iLCJjaGlsZHJlbiIsIkVWRU5UX05BTUUiLCJkcm9wem9uZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZpZXdVUkwiLCJkcm9wem9uZUJ1aWxkZXIiLCJEcm9wem9uZUJ1aWxkZXIiLCJzZXRVcGxvYWRVcmwiLCJjYW5jZWwiLCJmaWxlX25hbWUiLCJ2YWx1ZSIsInNldFByZXZpZXciLCJnZXRGaWxlUGF0aCIsImZvbGRlciIsImJ1aWxkIiwiQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQiLCJ0b2dnbGVDbGFzcyIsImN1cnJlbnRFbGVtZW50IiwiUmVxdWVzdEJ1aWxkZXIiLCJpbmRleCIsIl8iLCJpdGVtIiwidXBkYXRlSW5kZXhlcyIsImNvbGxhcHNlU3RhdGUiLCJjb2xsYXBzZVN0YXRlcyIsInJlbW92ZUFjdGlvblR5cGVTdGF0ZSIsImFkZE5ld1JvdyIsImFkZF9jb3VudGVyIiwidGJvZHkiLCJsYXN0SUQiLCJsYXN0IiwiaW5jcmVtZW50SWQiLCJpIiwidHJMYXN0Iiwic2VsZWN0MiIsInNhdmVTdGF0ZSIsImF3YXJkIiwicmVzcCIsImNoYW5nZSIsIl90aGlzIiwiYXdhcmRDcmVhdGUiLCJiaW5kIiwic2F2ZUJ1dHRvbiIsImF3YXJkRGVsZXRlIiwic2V0U3VidHlwZXMiLCJzdWJ0eXBlIiwiYXNzZXRGb3JtU3VidHlwZSIsImFzc2V0Rm9ybUFjdGlvblR5cGUiLCJhc3NldEZvcm1Db2xsZWN0aW9uIiwicHJpY2VzIiwiZW1wdHkiLCJTVUJfVFlQRVMiLCJoaWRlIiwic2hvdyIsImVsZW1lbnQiLCJjb2xsZWN0aW9uX2lkIiwic2F2ZUFzc2V0QnRuIiwiY2hhbmdlVHlwZSIsImdldExhc3RDb2xsZWN0aW9uTnVtYmVyIiwiQkFOTkVSX1NIT1dfRk9STSIsIlRZUEVfU0VMRUNUX0lEIiwic2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsIm9wdGlvbnMiLCJzZWxlY3RlZEVsZW1lbnQiLCJkcm9wWm9uZUluaXQiLCJzaG93Rm9ybSIsImRhdGV0aW1lcGlja2VyIiwiZm9ybWF0IiwiYXV0b2Nsb3NlIiwibWluVmlldyIsInNhdmVQYWdlIiwicm93cyIsImNoYW5nZVRhYiIsImZpbmRVc2VyIiwicHJlZml4IiwidWlkIiwidXNlcl90ZW1wbGF0ZSIsImluc2VydF9ibG9jayIsInVzZXJzIiwiY3NzIiwicGV0IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInhwIiwiYXZhdGFyIiwic2VuZENlcnQiLCJ0cm9waHlfY3Vwc19jb3VudCIsImNvcHlBZHAiLCJhZHBJZHNGaWVsZCIsImFkcElkcyIsIm4iLCJleGVjQ29tbWFuZCIsImNvcHlBc3NldHMiLCJhc3NldElkc0ZpZWxkIiwiYXNzZXRJZHMiLCJoaWRlQXJjaGl2ZSIsImhpZGVUYXNrcyIsInNob3dBcmNoaXZlIiwiYWN0aW9uIiwic2hvd1Rhc2tzIiwiZGlyZWN0aW9uIiwid3JhcHBlciIsImdldFNlbGVjdGlvbiIsIkNPTExFQ1RJT05fU0hPV19GT1JNIiwiYXNzZXRQcmV2aWV3VGVtcGxhdGUiLCJhc3NldHMiLCJjdXJyZW50QXNzZXQiLCJwcmV2aWV3X3VybCIsIlNvcnRhYmxlIiwiZ3JvdXAiLCJyZW1vdmVDbG9uZU9uSGlkZSIsIm9uRW5kIiwicG9zaXRpb24iLCJtYXJrSW5wdXRBc0NoYW5nZWQiLCJzb3J0YWJsZUluaXQiLCJoaWRlQWRkaXRpb25hbFJvd3MiLCJsYXN0SURTIiwiZmlyc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJzbGljZSIsImxhc3RJbmRleE9mIiwicmVhZHkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2F2ZURwYVN0YXRlIiwibGFzdFJvdyIsImNvbG9ycGlja2VyIiwiY2hhbmdlUm93SW5kZXgiLCJyb3dJbmRleCIsInJvdyIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiaW5kZXhPZiIsIkRZRV9DT05UQUlORVJfU0VMRUNUT1IiLCJtYXJrQ2hhbmdlZFRyIiwiZHllU2F2ZVBhZ2UiLCJzYXZlRmluZ2VycHJpbnQiLCJXZWJHTEZpbmdlclByaW50IiwiJGRlZmF1bHRWYXJzIiwiRmluZEZpbmdlclByaW50IiwiZXhjbHVkZXMiLCJhdmFpbGFibGVTY3JlZW5SZXNvbHV0aW9uIiwiZW51bWVyYXRlRGV2aWNlcyIsImRvTm90VHJhY2siLCJmaW5nZXJwcmludCIsImZpbmdlclByaW50SGFuZGxlciIsImNvbXBvbmVudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnQiLCJGaW5nZXJwcmludDIiLCJ4NjRoYXNoMTI4Iiwic2VuZFByb21pc2UiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiZ2V0Iiwic2V0VGltZW91dCIsImNvbW1lbnQiLCJHSUZUX1dSQVBfUk9XX0FEREVEIiwiY3VycmVudElucHV0IiwiYXNzZXRJRCIsImN1cnJlbnRBc3NldER1cGxpY2F0ZSIsImVyciIsInBvc2l0aW9uVXBkYXRlIiwiYnV0dG9uVXJsIiwiYXNzZXRDaGFuZ2VkIiwicmVtb3ZlUm93IiwiYWRkUm93IiwiYWRtaW5TdG9yZSIsInNlbGVjdGVkX2lkIiwic2V0TWFpbiIsImlzX21haW4iLCJtYWluX2lkIiwicHJlcGVuZCIsInNhdmVMZXZlbFN0YXRlIiwicm93VG9TYXZlIiwic2hvd0Fzc2V0IiwiU1dPV19BU1NFVF9ST1VURSIsImhhc093blByb3BlcnR5Iiwic2F2ZUxvY2FsaXphdGlvblN0YXRlIiwiY3VycmVudEtleSIsImN1cnJlbnRLZXlEdXBsaWNhdGUiLCJzYXZlTWFnaWNTdGF0ZSIsIm1ha2V1cF9raXRfaWQiLCJnZXRMYXN0TWFrZXVwS2l0SUQiLCJNQUtFVVBfS0lUX1NIT1dfRk9STSIsImluZ3JlZGllbnREZWxldGUiLCJzYXZlTWVhbEluZ3JlZGllbnRzU3RhdGUiLCJtZWFsRGVsZXRlIiwic2F2ZU1lYWxTdGF0ZSIsIk5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSIsIlRSQVNIIiwiVFJBU0hfRklFTERTX0lEIiwiU0VMRUNUX0lEIiwidHJhc2hGaWVsZHMiLCJhc3NldFRhYiIsImNhdGVnb3J5IiwiYXNzZXRfaWRzIiwidXBkYXRlTGlzdCIsImFzaWduTGlzdCIsImFzc2V0SWQiLCJyZWNvcmRfcGVyX3BhZ2UiLCJoZWFkIiwidGFpbCIsIlBST0RVQ1RfU0hPV19GT1JNIiwiQ2xlYXZlIiwibnVtZXJhbCIsInJhd1ZhbHVlVHJpbVByZWZpeCIsIm9uVmFsdWVDaGFuZ2VkIiwicGFyc2VGbG9hdCIsInJhd1ZhbHVlIiwicHJvZHVjdFByaWNlIiwicHJpY2VJbml0Iiwib3JkZXIiLCJwcmV2aWV3SGlkZGVuSW5wdXQiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUluaXQiLCJXQUxLX0NBVEVHT1JZIiwiUlVOX0NBVEVHT1JZIiwic2VsZWN0VmFsIiwiZW1iZWQiLCJTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNIiwidGFibGUiLCJkZXBhcnRtZW50SWQiLCJjb3VudGVyIiwiZGF0YU5hbWVQcmVmaXgiLCJmYXN0U2F2ZUNvbnRhaW5lciIsIml0ZW1OYW1lIiwiYWxsSXRlbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJhZGlvIiwidGhlbiIsInByZXZpZXdVcmxFbGVtZW50IiwicmFkaW9JbnB1dCIsImFkZFNob3AiLCJzYXZlU291bmRTdGF0ZSIsInNlbmRHaWZ0IiwiVEFNQVRPT0xfU0hPV19GT1JNIiwiU0VBUkNIX1VTRVJfQVNTRVRTIiwiU1VCTUlUX1VTRVJfUEFSVF9GT1JNIiwiREVMRVRFX05FSUdIQk9SIiwiQUREX05FSUdIQk9SIiwicGxhY2VtZW50TmFtZSIsInJlbW92ZUF0dHIiLCJuZWlnaGJvcnNDb3VudCIsImlzIiwic2libGluZ3MiLCJwbGFjZW1lbnQiLCJsb2FkUGFydCIsIlBMQUNFTUVOVF9BU1NFVFNfUk9VVEUiLCJpdGVtcyIsInBvcG92ZXIiLCJuZWlnaGJvcl9pZCIsInN0YXR1c190ZXh0Iiwic2VhcmNoVXNlckFzc2V0cyIsInN1Ym1pdFVzZXJQYXJ0Rm9ybSIsImRlbGV0ZU5laWdoYm9yIiwiYWRkTmVpZ2hib3IiLCJsb2FkUGxhY2VtZW50QXNzZXRzIiwiY2hhbmdlUGxhY2VtZW50IiwiY2hhbmdlUmFuZG9tTmVpZ2hib3JzIiwiaGlkZVBsYWNlbWVudEFzc2V0cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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O0FBaUJJOzs7QUFqQkosQ0FvQktsYixFQXBCTCxDQW9CUSxPQXBCUixFQW9CaUIsY0FwQmpCLEVBb0JpQ21iLHFFQXBCakMsRTs7Ozs7Ozs7Ozs7O0FDOUJBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqXG4gKiBCYXNlIHNpemVzXG4gKlxuICogQHR5cGUge3tzbTogc3RyaW5nLCBsZzogc3RyaW5nfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNJWkVTID0ge1xuICAgIHNtOiAnc20nLFxuICAgIG1kOiAnbWQnLFxuICAgIGxnOiAnbGcnLFxufTtcbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5cbi8qKlxuICogTG9hZGluZyB0ZXh0XG4gKiBJdCB3aWxsIGJlIHNob3duIGFmdGVyIHRoZSBzdGFydCBvZiBpbWFnZSB1cGxvYWRpbmdcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBMT0FESU5HX1RFWFQgPSAnTG9hZGluZy4uLic7XG5cbi8qKlxuICogRHJvcHpvbmUgYnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIGRyb3B6b25lQ29udGFpbmVyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyb3B6b25lQ29udGFpbmVyLCBjb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyID0gZHJvcHpvbmVDb250YWluZXI7XG4gICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbiA9ICQoZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kcm9wem9uZS1jYW5jZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXJsIHRvIHVwbG9hZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHNldFVwbG9hZFVybCh1cmwpIHtcbiAgICAgICAgdGhpcy5fdXBsb2FkVXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZGVmYXVsdCBwcmV2aWV3IGltYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBzZXRQcmV2aWV3KG5hbWUsIHVybCkge1xuICAgICAgICB0aGlzLl9wcmV2aWV3ID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZXJyb3IgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZXJyb3IoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZXJyb3JDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FuY2VsIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGNhbmNlbChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9jYW5jZWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgc3VjY2VzcyBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzdWNjZXNzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3NDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBkcm9wem9uZVxuICAgICAqIEByZXR1cm5zIHtEcm9wem9uZX1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoaXNcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IF9kcm9wem9uZUJ1aWxkZXIgPSB0aGlzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIGFmdGVyIGZhaWxcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lRmFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkei1zdGFydGVkJyk7XG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotcHJldmlldycpLnJlbW92ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VwbG9hZFVybCxcbiAgICAgICAgICAgIHRodW1ibmFpbFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgdGh1bWJuYWlsSGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogJ2ltYWdlLyonLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd4LWNzcmYtdG9rZW4nOiBDU1JGX1RPS0VOXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBTZXQgY3VycmVudCBpbWFnZSBpbiB0aGUgZHJvcHpvbmUgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldyAmJiAhIV9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImFkZGVkZmlsZVwiLCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidGh1bWJuYWlsXCIsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcudXJsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBZGRlZCBmaWxlIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KExPQURJTkdfVEVYVCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFcnJvciBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcImVycm9yXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBkcm9wem9uZUZhaWwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fZXJyb3JDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fZXJyb3JDYWxsYmFjayhmaWxlLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU3VjY2VzcyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInN1Y2Nlc3NcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fc3VjY2Vzc0NhbGxiYWNrKGZpbGUsIHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFyIGJ1dHRvbiBoYW5kbGVyXG4gICAgICAgICAqIENsZWFyIGZpbGUgaW5mbyBpbiBkcm9wem9uZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCEhdGhpcy5fY2FuY2VsQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRyb3B6b25lRmFpbCgpO1xuICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX2NhbmNlbENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2NhbmNlbENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBuZXcgRHJvcHpvbmUodGhpcy5fZHJvcHpvbmVDb250YWluZXIsIHsuLi5jb25maWcsIC4uLnRoaXMuX2NvbmZpZ30pO1xuICAgIH1cbn1cbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi9lcnJvckhhbmRsZXInO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCIuL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogSFRUUCBSZXF1ZXN0IEJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gJ2dldCc7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBzdWNjZXNzSGFuZGxlcjtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG5cbiAgICBtZXRob2QobWV0aG9kKSB7XG4gICAgICAgIHRoaXMuX21ldGhvZCA9IG1ldGhvZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZXJyb3IoZm4pIHtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdWNjZXNzKGZuKSB7XG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wbGV0ZShmbikge1xuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlbmQoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VybCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuX21ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuX2RhdGEsXG4gICAgICAgICAgICBlcnJvcjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXJlc3BvbnNlLnJlc3BvbnNlSlNPTikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihyZXNwb25zZS5yZXNwb25zZUpTT04pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLl9zdWNjZXNzLFxuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuX2NvbXBsZXRlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEJhc2UgZXJyb3IgaGFuZGxlclxuICpcbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIC8qKlxuICAgICAqIFJlZGlyZWN0IHRvIHRoZSByb3V0ZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLnJvdXRlKSB7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yb3V0ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXG4gICAgICovXG4gICAgaWYgKCEhcmVzcG9uc2UubWVzc2FnZSkge1xuICAgICAgICBub3RpZnlFcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGFsbCBtZXNzYWdlc1xuICAgICAqL1xuICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlLmVycm9ycykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1trZXldLm1hcChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL1JlcXVlc3RCdWlsZGVyJztcbiIsImltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5cbi8qKlxuICogQmFzZSBlcnJvciBoYW5kbGVyXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIC8qKlxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXG4gICAgICovXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgaWYgKCEhcmVzcG9uc2UubWVzc2FnZSkge1xuICAgICAgICBub3RpZnlTdWNjZXNzKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9tb2RhbCc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXInO1xuaW1wb3J0ICcuL2h0dHAnO1xuIiwiY29uc3QgbW9kYWxzQ29udGFpbmVyID0gJCgnYm9keScpO1xuXG5jb25zdCBNT0RBTF9TSVpFUyA9IHtcbiAgICBzbTogJ21vZGFsLXNtJyxcbiAgICBtZDogJ21vZGFsLW1kJyxcbiAgICBsZzogJ21vZGFsLWxnJyxcbn07XG5cbi8qKlxuICogVW5pcXVlIGluZGV4IG9mIHRoZSBtb2RhbFxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmxldCBtb2RhbEluZGV4ID0gMDtcblxuLyoqXG4gKiBDb3VudGVyIG9mIHRoZSBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbW9kYWxDb3VudGVyID0gMDtcblxuLyoqXG4gKiBNb2RhbCBCdWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBtb2RhbEluZGV4Kys7XG4gICAgICAgIHRoaXMuX2lkID0gJ21vZGFscy1jb250YWluZXItaXRlbS0nICsgbW9kYWxJbmRleDtcbiAgICB9XG5cbiAgICBzaXplKHNpemUpIHtcbiAgICAgICAgaWYgKCEhTU9EQUxfU0laRVNbc2l6ZV0pIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBNT0RBTF9TSVpFU1tzaXplXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhlYWRlcihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5faGVhZGVyID0gaGVhZGVyO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJvZHkoYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5ID0gYm9keTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmb290ZXIoZm9vdGVyKSB7XG4gICAgICAgIHRoaXMuX2Zvb3RlciA9IGZvb3RlcjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkYXRhc2V0KGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5fZGF0YXNldCA9IGRhdGFzZXQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2dldElEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgX2dldFNpemUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX3NpemUgPyB0aGlzLl9zaXplIDogTU9EQUxfU0laRVMubWQ7XG4gICAgfVxuXG4gICAgX2dldEhlYWRlcigpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5faGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4ke3RoaXMuX2hlYWRlcn08L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIF9nZXRGb290ZXIoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAoISF0aGlzLl9mb290ZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICQoYDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj48L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJChgXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgYCkpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9mb290ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2dldEJvZHkoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAoISF0aGlzLl9ib2R5KSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPjwvZGl2PmApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9ib2R5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBiZWZvcmUgYnVpbGQgbW9kYWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGJlZm9yZUJ1aWxkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2JlZm9yZUJ1aWxkKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGFmdGVyIGJ1aWxkIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBhZnRlckJ1aWxkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfYWZ0ZXJCdWlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2RhbChjb250ZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGFzZXQgPSBbXTtcbiAgICAgICAgaWYgKCEhdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLl9kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldC5wdXNoKGBkYXRhLSR7bmFtZX09XCIke3RoaXMuX2RhdGFzZXRbbmFtZV19XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBodG1sID0gJChgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHsgdGhpcy5fZ2V0SUQoKSB9XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAke2RhdGFzZXQuam9pbignICcpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCAke3RoaXMuX2dldFNpemUoKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuXG4gICAgICAgIGlmICghIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keShjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIHRoZSBiZWZvcmVCdWlsZCBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGQoKTtcblxuICAgICAgICBodG1sLmZpbmQoJy5tb2RhbC1jb250ZW50JylcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0SGVhZGVyKCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEJvZHkoKSlcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Rm9vdGVyKCkpO1xuXG4gICAgICAgIG1vZGFsc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgdGhlIGFmdGVyQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdXBkYXRlIGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gICAgICAgICAqL1xuICAgICAgICBtb2RhbENvdW50ZXIrKztcblxuICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubW9kYWwoKTtcbiAgICB9XG59XG5cbi8qKlxuICogR2V0IGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gKlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGFsQ291bnRlcigpIHtcbiAgICByZXR1cm4gbW9kYWxDb3VudGVyO1xufVxuIiwiaW1wb3J0ICcuL01vZGFsQnVpbGRlcidcbmltcG9ydCAnLi9tb2RhbENvbmZpcm0nXG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuXG4vKipcbiAqIE1vZGFsIGNvbmZpcm1cbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb2RhbENvbmZpcm0obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIobWVzc2FnZSlcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tc3VjY2VzcycsXG4gICAgICAgICAgICAndGV4dCc6ICdDb25maXJtJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogY2FsbGJhY2tcbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xufVxuIiwiLyoqXG4gKiBOb3RpZnkgaGVscGVyXG4gKlxuICogQHBhcmFtIG1lc3NhZ2VcbiAqIEBwYXJhbSB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlLCB0eXBlKSB7XG4gICAgJC5ub3RpZnkoe21lc3NhZ2U6IG1lc3NhZ2V9LHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgel9pbmRleDogMTA1MVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbm90aWZ5KG1lc3NhZ2UsICdkYW5nZXInKTtcbn1cbiIsImltcG9ydCBub3RpZnkgZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIG5vdGlmeShtZXNzYWdlLCAnc3VjY2VzcycpO1xufVxuIiwiLyoqXG4gKiBFdmVudCBvYnNlcnZlclxuICovXG5jbGFzcyBFdmVudE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2xvZygnc3Vic2NyaWJlJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3BhdGNoIChldmVudCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9sb2coJ2Rpc3BhdGNoJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoZGF0YSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlIChldmVudCwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fbG9nKCd1bnN1YnNjcmliZScsIGV2ZW50KTtcblxuICAgICAgICBpZiAoISF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyICE9PSBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWV0aG9kLnRvVXBwZXJDYXNlKCksICc6JywgJ1snLCBldmVudCwgJ10nKTtcbiAgICB9XG59XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEV2ZW50T2JzZXJ2ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXI7XG4iLCJpbXBvcnQgJy4vRXZlbnRPYnNlcnZlcic7XG4iLCIvKipcbiAqIFNhdmVkIGl0ZW0gbm90IGZvdW5kXG4gKlxuICogVXNpbmcgaW4gZmFzdFNhdmUgaGFuZGxlclxuICovXG5leHBvcnQgY2xhc3MgU2F2ZWRJdGVtTm90Rm91bmQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWRJdGVtTm90Rm91bmQnO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG4vKipcbiAqIEFkZCBlbWJlZCBlbGVtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RhcmdldCcpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0ZW1wbGF0ZScpO1xuICAgIGNvbnN0IGlkUGxhY2Vob2xkZXIgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2lkcGxhY2Vwb2xkZXInKTtcblxuICAgIGxldCByb3dJZCA9IGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnKTtcbiAgICBjdXJyZW50QnV0dG9uLmRhdGEoJ3Jvd2lkJywgKytyb3dJZCk7XG5cbiAgICBsZXQgZW1iZWRGb3JtID0gJCgnIycrIHRlbXBsYXRlKS5odG1sKCk7XG4gICAgY29uc3QgZW1iZWRCbG9ja0lkID0gcm93SWQgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKDE2KTtcbiAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSgvJWVtYmVkQmxvY2tJZCUvZywgZW1iZWRCbG9ja0lkKTtcblxuICAgIGlmICghIWlkUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoIG5ldyBSZWdFeHAoaWRQbGFjZWhvbGRlciwgXCJnXCIpLCByb3dJZClcbiAgICB9XG5cbiAgICAkKCcjJyArIHRhcmdldCkuYXBwZW5kKGVtYmVkRm9ybSk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBkaXNwYXRjaFxuICAgICAqL1xuICAgIGNvbnN0IGV2ZW50ID0gY3VycmVudEJ1dHRvbi5kYXRhKCdldmVudCcpO1xuICAgIGlmIChldmVudCAmJiBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZXZlbnQsIHtcbiAgICAgICAgICAgIGVtYmVkQmxvY2tJZDogZW1iZWRCbG9ja0lkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24udHJpZ2dlcignYWlfYW5pbWF0aW9uJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICpBamF4IHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygnLmFqYXgtcGFnaW5hdGlvbicpLmRhdGEoJ2NvbnRhaW5lcicpO1xuICAgXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcikucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBPcGVuIGNvbmZpcm0gbW9kYWwgYmVmb3JlIGFjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoZGF0YVNldC5oZWFkZXIpXG4gICAgICAgIC5mb290ZXIoXG4gICAgICAgICAgICAkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogKGRhdGFTZXQuYnRuQ2xhc3MgfHwgJ2J0bi1zbSBidG4tc3VjY2VzcycpICsgJyBidG4nLFxuICAgICAgICAgICAgICAgICd0ZXh0JzogZGF0YVNldC5idG5OYW1lIHx8ICdDb25maXJtJyxcbiAgICAgICAgICAgICAgICAnY2xpY2snOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3IGh0dHAodXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1ldGhvZChkYXRhU2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGdldEZvcm1EYXRhKHNhdmVkSXRlbSkpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5mYXN0LXNhdmUtcGFnZS1jb250YWluZXInO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKENPTlRBSU5FUl9TRUxFQ1RPUik7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFyayBmb3JtJ3MgZWxlbWVudHMgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQoKSB7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufVxuIiwiaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2Zhc3RTYXZlXCI7XG5pbXBvcnQgYWRkRW1iZWQgZnJvbSBcIi4vYWRkRW1iZWRcIjtcbmltcG9ydCByZW1vdmVFbWJlZCBmcm9tIFwiLi9yZW1vdmVFbWJlZFwiO1xuaW1wb3J0IHN1Ym1pdEZvcm0gZnJvbSBcIi4vc3VibWl0Rm9ybVwiO1xuaW1wb3J0IGFqYXhQYWdpbmF0aW9uIGZyb20gXCIuL2FqYXhQYWdpbmF0aW9uXCI7XG5pbXBvcnQgY29uZmlybU1vZGFsIGZyb20gXCIuL2NvbmZpcm1Nb2RhbFwiO1xuaW1wb3J0IG1vZGFsRGF0YSBmcm9tIFwiLi9tb2RhbERhdGFcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UsIHtDT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkfSBmcm9tIFwiLi9mYXN0U2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIE9wZW4gbW9kYWwgd2l0aCBkYXRhIGZyb20gc2VydmVyIGJ5IHJlcXVlc3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LW1vZGFsLWFjdGlvbicsIG1vZGFsRGF0YSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gY29uZmlybSBtb2RhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24nLCBjb25maXJtTW9kYWwpXG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgc3VibWl0Rm9ybSlcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXBhZ2luYXRpb24gYScsIGFqYXhQYWdpbmF0aW9uKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYmVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtZW1iZWQnLCBhZGRFbWJlZClcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbWJlZCBlbGVtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tZW1iZWQnLCByZW1vdmVFbWJlZClcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSB0aGUgZGF0YSBvZiBhbiBlbnRpdHlcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUnLCBmYXN0U2F2ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsIGAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7Q09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7Q09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkKTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgcGFnZVxuICovXG4kKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljayhmYXN0U2F2ZVBhZ2UpO1xuIiwiaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogT3BlbiBtb2RhbCB3aXRoIGZvcm0gYnkgcmVxdWVzdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKHRoaXMuZGF0YXNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5zaXplKFNJWkVTLmxnKVxuICAgICAgICAgICAgICAgIC5kYXRhc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgcmVsb2FkOiB0aGlzLmRhdGFzZXQucmVsb2FkIHx8IDEsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuaGVhZGVyKHRoaXMuZGF0YXNldC5oZWFkZXIpXG4gICAgICAgICAgICAgICAgLmFmdGVyQnVpbGQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubW9kYWwocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBSZW1vdmUgZW1iZWRlZCBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gISF0aGlzLmRhdGFzZXQucGFyZW50ID8gJCh0aGlzKS5jbG9zZXN0KHRoaXMuZGF0YXNldC5wYXJlbnQpIDogJCh0aGlzKS5wYXJlbnQoKTtcblxuICAgIGlmICghdGhpcy5kYXRhc2V0LmlkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLWRhbmdlcicsXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge2dldE1vZGFsQ291bnRlcn0gZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIFN1Ym1pdCBmb3JtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5kYXRhKGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCkpXG4gICAgICAgIC5tZXRob2QodGhpcy5kYXRhc2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYW5SZWxvYWQodGhpcykpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC5kaXNtaXNzKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENhbiByZWxvYWQgdGhlIHBhZ2VcbiAqXG4gKiBAcGFyYW0gYnV0dG9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2FuUmVsb2FkKGJ1dHRvbikge1xuICAgIGlmIChwYXJzZUludChidXR0b24uZGF0YXNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgIGlmIChnZXRNb2RhbENvdW50ZXIoKSA8IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFSZWxvYWQgPSAkKGJ1dHRvbikuY2xvc2VzdCgnLm1vZGFsJykuZGF0YSgncmVsb2FkJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFSZWxvYWQgPT09IHR5cGVvZiB1bmRlZmluZWQgfHwgZGF0YVJlbG9hZCA9PT0gZmFsc2UgfHwgcGFyc2VJbnQoZGF0YVJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBnZXRTdWJGb2xkZXIgZnJvbSBcIi4vZ2V0U3ViRm9sZGVyXCI7XG5cbi8qKlxuICogR2V0IGZpbGUgcGF0aCBmcm9tIHN0b3JhZ2Ugd2l0aCBzdWIgZm9sZGVyc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb290Rm9sZGVyIFJvb3QgZm9sZGVyIGluIHRoZSBzdG9yYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgICBGaWxlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm9vdEZvbGRlciwgZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gJy9zdG9yYWdlLycgKyByb290Rm9sZGVyICsgJy8nICsgZ2V0U3ViRm9sZGVyKGZpbGVOYW1lKSArICcvJyArIGZpbGVOYW1lO1xufVxuIiwiLyoqXG4gKiBHZXQgZm9ybSBkYXRhXG4gKlxuICogQHBhcmFtIHtqUXVlcnl9IGZvcm0gRm9ybSBlbGVtZW50XG4gKlxuICogQHJldHVybnMge3t9fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmb3JtKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSB7fTtcblxuICAgIGxldCBmb3JtSXRlbXMgPSBmb3JtLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcbiAgICBpZiAoIWZvcm1JdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgZm9ybUl0ZW1zID0gZm9ybTtcbiAgICB9XG5cbiAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50SXRlbS5hdHRyKCd0eXBlJykpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gISFjdXJyZW50SXRlbS5wcm9wKCBcImNoZWNrZWRcIiApICogMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZm9ybURhdGFbY3VycmVudEl0ZW0uYXR0cignbmFtZScpXSA9IGN1cnJlbnRJdGVtLnZhbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG59XG4iLCJpbXBvcnQgbWQ1IGZyb20gJ2JsdWVpbXAtbWQ1JztcblxuLyoqXG4gKiBHZXQgc3ViIGZvbGRlcnMgb2YgdGhlIGZpbGVcbiAqXG4gKiBSZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGxvb2tzIGxpa2U6IGExL2IyL2MzXG4gKiBXaGVyZSBtZDUgb2YgdGhlIGZpbGUgPSBhMWIyYzMuLi4uLi4uLi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiB0aGUgZmlsZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmaWxlTmFtZSkge1xuICAgIGNvbnN0IGZpbGVOYW1lSGFzaCA9IG1kNShmaWxlTmFtZSkuc3Vic3RyaW5nKDAsIDYpO1xuICAgIGNvbnN0IHBhdGhQYXJ0cyA9IGZpbGVOYW1lSGFzaC5tYXRjaCgvLnsxLDJ9L2cpO1xuICAgIHJldHVybiBwYXRoUGFydHMuam9pbignLycpO1xufVxuIiwiLyoqXG4gKiBqUXVlcnlcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbndpbmRvdy4kID0gJDtcbndpbmRvdy5qUXVlcnkgPSAkO1xuXG4vKipcbiAqIEJvb3RzdHJhcFxuICovXG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcCc7XG5cbi8qKlxuICogQm9vdHN0cmFwIENjb2xvcnBpY2tlclxuICovXG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlcic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlci9kaXN0L2Nzcy9ib290c3RyYXAtY29sb3JwaWNrZXIuY3NzJztcblxuLyoqXG4gKiBGb250IEF3ZXNvbWVcbiAqL1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvc2Nzcy9mb250LWF3ZXNvbWUuc2Nzcyc7XG5cbi8qKlxuICogRXh0ZXJuYWwgbW9kdWxlc1xuICogVE9ETzogZ2V0IGJ5IG5wbVxuICovXG5pbXBvcnQgJy4vdmVuZG9yL2FuaW1hdGUnO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtY29uZmlybWF0aW9uJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLW5vdGlmeSc7XG5pbXBvcnQgJy4vdmVuZG9yL3NlbGVjdDInO1xuaW1wb3J0ICcuL3ZlbmRvci9la2tvLWxpZ2h0Ym94JztcbmltcG9ydCAnLi92ZW5kb3IvdGhlbWUnO1xuXG4vKipcbiAqIENvbXBvbmVudHNcbiAqL1xuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xuXG4vKipcbiAqIEhhbmRsZXJzXG4gKi9cbmltcG9ydCAnLi9oYW5kbGVycyc7XG5cbi8qKlxuICogU3R5bGVzXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbi8qKlxuICogTW9kdWxlcyBsb2FkZXJcbiAqL1xuY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5jb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdtb2R1bGVzJywgdHJ1ZSwgL21vZHVsZVxcLmpzJC8pO1xuaWYgKHBhdGhbMV0ubGVuZ3RoID4gMikge1xuICAgIC8qKlxuICAgICAqIFRvIGNyZWF0aW5nIGRpZmZlcmVudCBmaWxlcyBmb3IgZWFjaCBtb2R1bGVcbiAgICAgKiAoRG9uJ3QgZm9yZ2V0IG5wbSBpIC0tc2F2ZS1kZXYgYnVuZGxlLWxvYWRlcilcbiAgICAgKiBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdidW5kbGUtbG9hZGVyIW1vZHVsZXMnLCB0cnVlLCAvaW5kZXhcXC5qcyQvKTtcbiAgICAgKi9cbiAgICBjb250ZXh0LmtleXMoKS5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgaWYgKG1vZHVsZS5zcGxpdCgnLycpWzFdID09PSAnc2V0dGluZ3MnKSB7XG4gICAgICAgICAgICBpZiAocGF0aFsyXSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5zcGxpdCgnLycpWzNdID09PSBwYXRoWzJdKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01PRFVMRTonLCBwYXRoWzJdKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0KG1vZHVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kdWxlLnNwbGl0KCcvJylbMV0gPT09IHBhdGhbMV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6JywgcGF0aFsxXSk7XG4gICAgICAgICAgICBjb250ZXh0KG1vZHVsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXRoWzFdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29udGV4dCgnLi9kZWZhdWx0L21vZHVsZS5qcycpO1xuICAgICAgICB9XG4gICAgfSk7XG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6IHB1YmxpYycpO1xuICAgIGNvbnRleHQoJy4vcHVibGljL21vZHVsZS5qcycpO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAodGhpcy5kYXRhc2V0LnRlbXBsYXRlUGxhY2Vob2xkZXIsIFwiZ1wiKSwgZGF0YS5hd2FyZF9pZCk7XG5cbiAgICAgICAgY3VycmVudEJ0bi5wYXJlbnQoKS5hcHBlbmQoZWRpdEJ0bik7XG4gICAgICAgIGN1cnJlbnRCdG4ucmVtb3ZlKCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKS5odG1sKCk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmQoY3JlYXRlQnRuKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChFVkVOVF9OQU1FKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEVWRU5UX05BTUUsICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGNvbnRhaW5lclxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXcgVVJMIGhpZGRlbiBpbnB1dFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcHJldmlld1VSTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXG4gICAgICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LnVybClcbiAgICAgICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICQoJyNwcmV2aWV3LXVybCcpLnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBwcmV2aWV3XG4gICAgICAgICAqL1xuICAgICAgICBpZiAocHJldmlld1VSTC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVUkwudmFsdWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG4gICAgfSk7XG59XG5cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hY3Rpb24tdHlwZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hd2FyZC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXdhcmQvbW9kdWxlLmpzXCIsXG5cdFwiLi9iYW5uZXIvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Jhbm5lci9tb2R1bGUuanNcIixcblx0XCIuL2NlcnQtc2V0dXAvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2NlcnQtc2V0dXAvbW9kdWxlLmpzXCIsXG5cdFwiLi9jZXJ0LXVzZXJzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jZXJ0LXVzZXJzL21vZHVsZS5qc1wiLFxuXHRcIi4vY2VydC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY2VydC9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy1hZHBzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy1yb2xlcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLXJvbGVzL21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy11c2Vycy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLXVzZXJzL21vZHVsZS5qc1wiLFxuXHRcIi4vY29sbGVjdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY29sbGVjdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZWZhdWx0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qc1wiLFxuXHRcIi4vZGVwbG95L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzXCIsXG5cdFwiLi9kcGEvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RwYS9tb2R1bGUuanNcIixcblx0XCIuL2R5ZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHllL21vZHVsZS5qc1wiLFxuXHRcIi4vZmluZ2VycHJpbnQtZm9ybS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZmluZ2VycHJpbnQtZm9ybS9tb2R1bGUuanNcIixcblx0XCIuL2ZpbmdlcnByaW50L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9maW5nZXJwcmludC9tb2R1bGUuanNcIixcblx0XCIuL2dpZnQtd3JhcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZ2lmdC13cmFwL21vZHVsZS5qc1wiLFxuXHRcIi4vZ3JvdXAtZWRpdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZ3JvdXAtZWRpdC9tb2R1bGUuanNcIixcblx0XCIuL2dyb3VwLWV2ZW50L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ncm91cC1ldmVudC9tb2R1bGUuanNcIixcblx0XCIuL2dyb3VwL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ncm91cC9tb2R1bGUuanNcIixcblx0XCIuL2xldmVscy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbGV2ZWxzL21vZHVsZS5qc1wiLFxuXHRcIi4vbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIixcblx0XCIuL2xvY2FsaXphdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFnaWMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21hZ2ljL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIixcblx0XCIuL21ha2V1cC1raXQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21ha2V1cC1raXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC9tb2R1bGUuanNcIixcblx0XCIuL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIixcblx0XCIuL25sYS1hc3NldC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmxhLWFzc2V0L21vZHVsZS5qc1wiLFxuXHRcIi4vbmxhLWNhdGVnb3J5L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9ubGEtY2F0ZWdvcnkvbW9kdWxlLmpzXCIsXG5cdFwiLi9ubGEtc2VjdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmxhLXNlY3Rpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9wcm9kdWN0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wcm9kdWN0L21vZHVsZS5qc1wiLFxuXHRcIi4vcHVibGljL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wdWJsaWMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zZXR0aW5ncy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzXCIsXG5cdFwiLi9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIixcblx0XCIuL3NvdW5kL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zb3VuZC9tb2R1bGUuanNcIixcblx0XCIuL3NwZWNpYWwtcHJpemVzLWZvcm0vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NwZWNpYWwtcHJpemVzLWZvcm0vbW9kdWxlLmpzXCIsXG5cdFwiLi9zcGVjaWFsLXByaXplcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc3BlY2lhbC1wcml6ZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi90YW1hdG9vbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzXCIsXG5cdFwiLi90cm9waGllcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdHJvcGhpZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi90cm9waHktY3VwLXVzZXJzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy90cm9waHktY3VwLXVzZXJzL21vZHVsZS5qc1wiLFxuXHRcIi4vdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3VzZXJzL21vZHVsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL21vZHVsZXMgc3luYyByZWN1cnNpdmUgbW9kdWxlXFxcXC5qcyRcIjsiLCJleHBvcnQgY29uc3QgQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQgPSAnQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQnO1xuIiwiLyoqXG4gKiBDb2xsYXBzZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcbiAgICBwYXJlbnQudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQ29sbGFwc2Ugc3RhdGVzXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKCcuYWN0aW9uLXR5cGUtc3RhdGUnKS50b2dnbGVDbGFzcygnZG93bicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRH0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBTdGF0ZSBvZiB0aGUgQWN0aW9uIFR5cGVcbiAqIGF0IHRoZSBtb2RhbFxuICogd2l0aCBjb25maXJtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEVsZW1lbnQuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XG5cbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50LmRhdGEoJ2lkJykpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwge30pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXcgUmVxdWVzdEJ1aWxkZXIoY3VycmVudEVsZW1lbnQuZGF0YSgndXJsJykpXG4gICAgICAgICAgICAgICAgICAgIC5tZXRob2QoJ0RFTEVURScpXG4gICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBVcGRhdGUgaW5kZXhlcyBvZiB0aGUgc3RhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcblxuICAgICAgICAkKCcuaW5kZXgnKS5lYWNoKChfLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAkKGl0ZW0pLnZhbChpbmRleCsrKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbiIsImltcG9ydCB1cGRhdGVJbmRleGVzIGZyb20gXCIuL2xpc3RlbmVycy91cGRhdGVJbmRleGVzXCI7XG5pbXBvcnQgY29sbGFwc2VTdGF0ZSBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlXCI7XG5pbXBvcnQgY29sbGFwc2VTdGF0ZXMgZnJvbSBcIi4vaGFuZGxlcnMvY29sbGFwc2VTdGF0ZXNcIjtcbmltcG9ydCByZW1vdmVBY3Rpb25UeXBlU3RhdGUgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBpbmRleGVzXG4gKi9cbnVwZGF0ZUluZGV4ZXMoKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlIG9uZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvbGxhcHNlLWxpbmsnLCBjb2xsYXBzZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2UgYWxsIHN0YXRlc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtc3RhdGVzJywgY29sbGFwc2VTdGF0ZXMpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5ybS1hY3Rpb24tdHlwZS1zdGF0ZXMnLCByZW1vdmVBY3Rpb25UeXBlU3RhdGUpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBhbm5vdW5jZW1lbnRzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNhbm5vdW5jZW1lbnRzID4gdGJvZHknKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5hbm5faWQnKS52YWwoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI2Fubm91bmNlbWVudHNfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWFubm91bmNlbWVudF9pZCUvZywgaSArIGluY3JlbWVudElkKTtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgYW5ub3VuY2VtZW50cyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlIChhd2FyZCA9ICcnKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmFubm91bmNlbWVudHMtc2F2ZS1wYWdlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5cIiArIGF3YXJkICsgXCJjaGFuZ2VkIGlucHV0LCAuXCIgKyBhd2FyZCArIFwiY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci4nICsgYXdhcmQgKyAnY2hhbmdlZCcpLnJlbW92ZUNsYXNzKGF3YXJkICsgJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBhbm5vdW5jZW1lbnRzIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkIGZvciBzZWxlY3QyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICc6Y2hlY2tib3gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYXR0cihcImNoZWNrZWRcIiwgISQodGhpcykuYXR0cihcImNoZWNrZWRcIikpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgYW5ub3VuY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2F3YXJkLWNoYW5nZWQnKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZVN0YXRlKCdhd2FyZC0nKVxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gJCgnLnNhdmUtcGFnZScpO1xuXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnYXdhcmQtY2hhbmdlZCcpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnaW5wdXRbbmFtZT1cImF3YXJkX2lkXCJdJykudmFsKDApO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMsIHNhdmVCdXR0b24pKCk7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlU3RhdGUoJ2F3YXJkLScpXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGFubm91bmNlbWVudHMgcGFnZVxuICAgICAqL1xuICAgICQoJy5zYXZlLXBhZ2UnKS5jbGljaygoKSA9PiBzYXZlU3RhdGUoKSk7XG4iLCIvKipcbiAqIFNVQl9UWVBFUyAtIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICogSW5pdGVkIGluIGFzc2V0L2Zvcm0uYmxhZGUucGhwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRTdWJ0eXBlcyh0aGlzLnZhbHVlLCB0aGlzLmRhdGFzZXQuc3VidHlwZSk7XG59XG5cbmNvbnN0IGFzc2V0Rm9ybVN1YnR5cGUgPSAkKFwiI3N1YnR5cGVcIik7XG5jb25zdCBhc3NldEZvcm1BY3Rpb25UeXBlID0gJCgnI2Fzc2V0LWZvcm0tYWN0aW9uLXR5cGUnKTtcbmNvbnN0IGFzc2V0Rm9ybUNvbGxlY3Rpb24gPSAkKCcjYXNzZXQtZm9ybS1jb2xsZWN0aW9uJyk7XG5jb25zdCBwcmljZXMgPSAkKCcucHJpY2VzJyk7XG5cbmZ1bmN0aW9uIHNldFN1YnR5cGVzKHR5cGUsIHN1YnR5cGUpIHtcbiAgICBhc3NldEZvcm1TdWJ0eXBlXG4gICAgICAgIC5lbXB0eSgpXG4gICAgICAgIC5zZWxlY3QyKHtcbiAgICAgICAgICAgIGRhdGE6IFNVQl9UWVBFU1t0eXBlXVxuICAgICAgICB9KVxuICAgICAgICAudmFsKHN1YnR5cGUpXG4gICAgICAgIC5jaGFuZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc3RhdGVcbiAgICAgKi9cbiAgICBoaWRlKGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xuICAgIGhpZGUoYXNzZXRGb3JtQ29sbGVjdGlvbik7XG4gICAgc2hvdyhwcmljZXMpO1xuXG4gICAgc3dpdGNoIChwYXJzZUludCh0eXBlKSkge1xuXG4gICAgICAgIC8vIEZ1cm5pdHVyZVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQ2xvdGhlc1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQm9keSBQYXJ0XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGhpZGUocHJpY2VzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRDbGFzcygnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBzaG93KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdoaWRlJyk7XG59IiwiaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBuZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5ocmVmKVxuICAgICAgICAuc3VjY2VzcyhyZXN1bHQgPT4ge1xuICAgICAgICAgICAgJCgnI2NvbGxlY3Rpb24tbnVtYmVyJylcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5jb2xsZWN0aW9uX2lkKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBzYXZlQXNzZXRCdG4gPSBjdXJyZW50QnRuLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnNhdmUtYXNzZXQnKTtcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9ICQoJyMnICsgdGhpcy5kYXRhc2V0LnRlbXBsYXRlSWQpXG4gICAgICAgICAgICAuaHRtbCgpXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCh0aGlzLmRhdGFzZXQudGVtcGxhdGVQbGFjZWhvbGRlciwgXCJnXCIpLCBkYXRhLmF3YXJkX2lkKTtcblxuICAgICAgICBjdXJyZW50QnRuLnBhcmVudCgpLmFwcGVuZChlZGl0QnRuKTtcbiAgICAgICAgY3VycmVudEJ0bi5yZW1vdmUoKTtcblxuICAgICAgICBzYXZlQXNzZXRCdG4uY2xpY2soKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIHNlbGYpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9ICQoJyMnICsgdGhpcy5kYXRhc2V0LnRlbXBsYXRlSWQpLmh0bWwoKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZChjcmVhdGVCdG4pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCIuL2xpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCIuL2xpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuaW1wb3J0IGdldExhc3RDb2xsZWN0aW9uTnVtYmVyIGZyb20gXCIuL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyXCI7XG5cbiQoJyNhc3NldHMtdGFibGUnKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZScsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZScsIGF3YXJkRGVsZXRlKTtcblxuJCgnI2Fzc2V0LWZvcm0tdHlwZScpXG4gICAgLmNoYW5nZShjaGFuZ2VUeXBlKVxuICAgIC5jaGFuZ2UoKTtcblxuJCgnI2dldC1sYXN0LWNvbGxlY3Rpb24tbnVtYmVyJykuY2xpY2soZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIpO1xuIiwiZXhwb3J0IGNvbnN0IEFXQVJEX0NSRUFURSA9ICdBV0FSRF9DUkVBVEUnO1xuZXhwb3J0IGNvbnN0IEFXQVJEX0RFTEVURSA9ICdBV0FSRF9ERUxFVEUnO1xuIiwiLyoqXG4gKiBTaG93IGZvcm0gZXZlbnRcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQkFOTkVSX1NIT1dfRk9STSA9ICdCQU5ORVJfU0hPV19GT1JNJztcblxuLyoqXG4gKiBJZCBvZiB0eXBlJ3Mgc2VsZWN0XG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFRZUEVfU0VMRUNUX0lEID0gJ2Jhbm5lci10eXBlJztcbiIsImltcG9ydCB7VFlQRV9TRUxFQ1RfSUR9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBDaGFuZ2UgdHlwZSBoYW5kbGVyXG4gKiBIaWRlL3Nob3cgc29tZSBmaWVsZHNcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFRZUEVfU0VMRUNUX0lEKTtcblxuICAgIGlmICghc2VsZWN0IHx8IHNlbGVjdC5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdC5vcHRpb25zLmxlbmd0aCAmJiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0pIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcblxuICAgICAgICAkKCcuYmFubmVyLXR5cGUnKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAkKCcuYmFubmVyLXR5cGUtJyArIHNlbGVjdGVkRWxlbWVudC52YWx1ZSkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge0JBTk5FUl9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbi8qKlxuICogU2hvdyBmb3JtIGhhbmRsZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIERyb3B6b25lIEluaXRcbiAgICAgKi9cbiAgICBkcm9wWm9uZUluaXQoQkFOTkVSX1NIT1dfRk9STSk7XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHNob3dGb3JtIGxpc3RlbmVyXG4gICAgICovXG4gICAgc2hvd0Zvcm0oKTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0JBTk5FUl9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5cbi8qKlxuICogU2hvdyBmb3JtIGxpc3RlbmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQkFOTkVSX1NIT1dfRk9STSwgKCkgPT4ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUeXBlIHNlbGVjdCBjaGFuZ2UgdHJpZ2dlclxuICAgICAgICAgKi9cbiAgICAgICAgY2hhbmdlVHlwZSgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRlcyBpbml0XG4gICAgICAgICAqL1xuICAgICAgICAkKCcuYmFubmVyLWZvcm0gLmRhdGVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9oYW5kbGVycy9zaG93Rm9ybVwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2hvdyBlZGl0IGZvcm0gb2YgYSBiYW5uZXJcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKHNob3dGb3JtKCkpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHR5cGUgaGFuZGxlclxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyMnICsgVFlQRV9TRUxFQ1RfSUQsIGNoYW5nZVR5cGUpO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBTYXZlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnI2NlcnQtc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuICAgIGNvbnN0IHJvd3MgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkXCIpO1xuXG4gICAgaWYoIWZvcm1JdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2VuZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGZvcm1JdGVtcylcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZighIXJlc3BvbnNlLmVycm9ycyl7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm93cy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlUGFnZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcbmltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwibW9kdWxlcy9jbXMtcm9sZXMvaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGFcbiAqL1xuJCgnLnNhdmUtcGFnZScpLmNsaWNrKHNhdmVQYWdlKTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmNlcnQtc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKTtcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkXCIpO1xuY29uc29sZS5sb2coZm9ybUl0ZW1zKTtcbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIm1vZHVsZXMvY21zLXJvbGVzL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4vKipcbiAqIFNhdmUgdGhlIHJvd1xuICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogRmluZCBVc2VyXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVXNlcigpIHtcbiAgICBjb25zdCBwcmVmaXggPSAkKHRoaXMpLmRhdGEoJ3ByZWZpeCcpO1xuICAgIGNvbnN0IGRhdGEgPSB7dWlkOiAkKCcjJyArIHByZWZpeCkudmFsKCksIG5hbWU6ICQoJyMnICsgcHJlZml4ICsgJ19uYW1lJykudmFsKCksIHByZWZpeDogcHJlZml4fTtcbiAgICBjb25zdCB1c2VyX3RlbXBsYXRlID0gJCgnI3VzZXJfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgaW5zZXJ0X2Jsb2NrID0gJCgnIycgKyBwcmVmaXggKyAnX2xpc3QnKTtcbiAgICBpZiAoIWRhdGEudWlkLmxlbmd0aCAmJiAhZGF0YS5uYW1lLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBmaW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgJChyZXNwb25zZS51c2VycykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmNsb3Nlc3QoJ3RhYmxlJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suYXBwZW5kKHVzZXJfdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8ldXNlcl9pZCUvZywgaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclcGV0X25hbWUlJywgaXRlbS5wZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXVzZXJfbmFtZSUnLCBpdGVtLmZpcnN0X25hbWUgKyAnICcgKyBpdGVtLmxhc3RfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclbGV2ZWwlJywgaXRlbS54cClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclYXZhdGFyJScsIGl0ZW0uYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV0YXJnZXQlL2csIHByZWZpeClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFNlbmQgR2lmdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZENlcnQgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNjZXJ0LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCJpbnB1dCwgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCFmb3JtSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNlbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShmb3JtSXRlbXMpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoISFyZXNwb25zZS5lcnJvcnMpe1xuICAgICAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyb3BoeV9jdXBzX2NvdW50ID0gJCgnI2NlcnRfY3Vwc19jb3VudCcpO1xuICAgICAgICAgICAgICAgICAgICB0cm9waHlfY3Vwc19jb3VudC50ZXh0KHBhcnNlSW50KHRyb3BoeV9jdXBzX2NvdW50LnRleHQoKSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRhYmxlJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjY2VydC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCB0ZXh0YXJlYScpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzZW5kQ2VydH0gZnJvbSBcIi4vaGFuZGxlcnMvc2VuZENlcnRcIjtcbmltcG9ydCB7ZmluZFVzZXJ9IGZyb20gXCIuL2hhbmRsZXJzL2ZpbmRVc2VyXCI7XG5pbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIm1vZHVsZXMvY21zLXJvbGVzL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4vKipcbiAqIEZpbmQgdXNlclxuICovXG4gICAgLm9uKCdjbGljaycsICcjZmluZF9zZW5kZXIsICNmaW5kX3JlY2VpdmVyJywgZmluZFVzZXIpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNzZW5kJywgc2VuZENlcnQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHNlbGVjdGVkIGNlcnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNhc3NldHNfbGlzdCBpbWcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNhc3NldHNfbGlzdCcpLmZpbmQoJ2ltZycpLmNzcygnYm9yZGVyJywgJycpO1xuICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyJywgJzNweCBzb2xpZCAjNWM1YzVjJyk7XG4gICAgICAgICQoJyNhc3NldF9pZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ2NlcnQnKSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgc2VsZWN0ZWQgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudGFibGUgdHInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgICQoJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSArICdfdWlkJykudmFsKCQodGhpcykuZGF0YSgndWlkJykpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBsaW1pdCBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCwgdGV4dGFyZWEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykucHJvcCgnbmFtZScpLnJlcGxhY2UoJ2NlcnRfZGF0YVsnLCAnJykucmVwbGFjZSgnXScsICcnKSArICdfbGVuZ3RoJztcbiAgICAgICAgJCgnIycgKyB0YXJnZXQpLnRleHQoJCh0aGlzKS5kYXRhKCdtYXhsZW5ndGgnKSAtICQodGhpcykudmFsKCkubGVuZ3RoKTtcbiAgICB9KVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbnRlcmVkIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNjYW5jZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy50YWJsZScpLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCB0ZXh0YXJlYScpLnZhbCgnJylcbiAgICB9KTtcbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY29weSBhZHAgaWRzIHRvIGNsaXBib2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFkcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkcElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFkcF9pZHNcIl0nKTtcbiAgICBsZXQgYWRwSWRzID0gW107XG5cbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGFkcElkcy5wdXNoKCQoaXRlbSkuZGF0YSgnaWQnKSlcbiAgICB9KTtcblxuICAgIGFkcElkc0ZpZWxkLnZhbChhZHBJZHMpO1xuICAgIGFkcElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAvLyBhZHBJZHNGaWVsZC52YWwoW10pO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFzc2V0cyBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xuICAgIGxldCBhc3NldElkcyA9IFtdO1xuXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBhc3NldElkcy5wdXNoKCQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKSlcbiAgICB9KTtcblxuICAgIGFzc2V0SWRzRmllbGQudmFsKGFzc2V0SWRzKTtcbiAgICBhc3NldElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiBhcmNoaXZlIGNhdGVnb3JpZXMgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBcmNoaXZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuc2hvdy1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwoJycpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIHRhc2tzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlVGFza3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5zaG93LXRhc2tzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy50YXNrcy1saXN0JykuaGlkZSgnc2xvdycpO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgb2YgYXJjaGl2ZSBjYXRlZ29yaWVzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93QXJjaGl2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmhpZGUtYXJjaGl2ZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBcbiAgICBsZXQgYWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpO1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmFyY2hpdmUtY2F0ZWdvcmllcy1saXN0JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICBcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuaGlkZS10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcudGFza3MtbGlzdCcpLnNob3coJ3Nsb3cnKTtcbn1cbiIsIi8vaW1wb3J0IHtidW5kbGVWZXJzaW9uU2VsZWN0fSBmcm9tIFwiLi9oYW5kbGVycy9idW5kbGVWZXJzaW9uU2VsZWN0XCI7XG5pbXBvcnQge3Nob3dBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXJjaGl2ZVwiO1xuaW1wb3J0IHtoaWRlQXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFyY2hpdmVcIjtcbmltcG9ydCB7aGlkZVRhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9oaWRlVGFza3NcIjtcbmltcG9ydCB7c2hvd1Rhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93VGFza3NcIjtcbmltcG9ydCB7Y29weUFkcH0gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFkcFwiO1xuaW1wb3J0IHtjb3B5QXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QXNzZXRzXCI7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1hcmNoaXZlJywgc2hvd0FyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hcmNoaXZlJywgaGlkZUFyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS10YXNrcycsIGhpZGVUYXNrcylcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LXRhc2tzJywgc2hvd1Rhc2tzKVxuICAgIC8qKlxuICAgICAqIFNob3cgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHktYWRwJywgY29weUFkcClcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpO1xuICAgICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnNvciB0byBwYXJlbnQgbm9kZVxuICAgICAqL1xuICAgIC5vbignbW91c2VlbnRlcicsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gZGVwbG95IGluZm9cbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKTtcblxuICAgICAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnb3BlbicpXG4gICAgICAgIH1cbiAgICB9KTtcblxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYik7XG5cbiIsImV4cG9ydCBjb25zdCBDT0xMRUNUSU9OX1NIT1dfRk9STSA9ICdDT0xMRUNUSU9OX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5jb25zdCBhc3NldFByZXZpZXdUZW1wbGF0ZSA9ICQoJyNhc3NldC1wcmV2aWV3LXRlbXBsYXRlJykuaHRtbCgpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxuICAgICAqL1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmhhc0NsYXNzKCdhc3NldC1pZCcpICYmICEhcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QXNzZXQgPSByZXNwb25zZS5hc3NldHNbY3VycmVudEl0ZW0udmFsKCldO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5zbG90JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuYXNzZXQtcHJldmlldycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChhc3NldFByZXZpZXdUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldXJsJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0LnByZXZpZXdfdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldGl0bGUlJywgXCJnXCIpLCBjdXJyZW50QXNzZXQubmFtZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5hZGRpdGlvbmFsLWRhdGEnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBNYXJrIGlucHV0IGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIGdyb3VwOiBfdGhpcy5kYXRhc2V0Lmdyb3VwLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmZpbmQoX3RoaXMuZGF0YXNldC5wb3NpdGlvbikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHBvc2l0aW9uLnZhbCgpKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7Q09MTEVDVElPTl9TSE9XX0ZPUk19IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XG5pbXBvcnQgbWFya0lucHV0QXNDaGFuZ2VkIGZyb20gXCIuL2hhbmRsZXJzL21hcmtJbnB1dEFzQ2hhbmdlZFwiO1xuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBoaWRlQWRkaXRpb25hbFJvd3MgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFkZGl0aW9uYWxSb3dzXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KENPTExFQ1RJT05fU0hPV19GT1JNKSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGNvbGxlY3Rpb25cbiAqL1xuJCgnLmNvbGxlY3Rpb24tZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xuXG4vKipcbiAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dCcpLmNoYW5nZShtYXJrSW5wdXRBc0NoYW5nZWQpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKi9cbiQoJy5oaWRlLXNsb3RzJykuY2xpY2soaGlkZUFkZGl0aW9uYWxSb3dzKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2RhaWx5X2xvb3QgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNkYWlseV9sb290X3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGxldCBsYXN0SURTID0gW107XG4gICAgbGV0IGluY3JlbWVudElkID0gMTtcbiAgICB0Ym9keS5maW5kKFwidHJcIikuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBpZihwYXJzZUludCgkKGl0ZW0pLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoKSkpe1xuICAgICAgICAgICAgbGFzdElEUy5wdXNoKHBhcnNlSW50KCQoaXRlbSkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbCgpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGxhc3RJRFMubGVuZ3RoKXtcbiAgICAgICAgaW5jcmVtZW50SWQgPSAoTWF0aC5tYXguYXBwbHkoTWF0aCxsYXN0SURTKSArIDEpIHx8IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXJvd0luZGV4JS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKGkgKyBpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuZmluZCgnLmRhdGVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5kYWlseS1sb290LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZmluZCgndHIuY2hhbmdlZCcpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoIHBhZ2UgdHlwZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnRvZ2dsZS1wYWdlLXR5cGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5wYXRobmFtZS5zbGljZSgwLCBsb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpKSArICQodGhpcykuZGF0YSgnaHJlZicpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJyNjb21tb24tbWVudScpLmZpbmQoJy5jb21tb24tbWVudS1zZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYoJCh0aGlzKS5maW5kKCdsaScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jb21tb24tbWVudS1zZWN0aW9uJykuaGlkZSgpXG4gICAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJcbi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9kaXJlY3Rpb249XCIgKyBkaXJlY3Rpb247XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBpZDogJ2RlcGxveSdcbiAgICB9LCAnRGVwbG95JywgdXJsKTtcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYilcbiAgICAvKipcbiAgICAgKiBTYXZlIGFsbCBwYWdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJywgZmFzdFNhdmVQYWdlKSIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbGV2ZWxzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkcGEgPiB0Ym9keScpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmRwYV9pZCcpLnZhbCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI2RwYV90ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lZHBhX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBkcGEgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEcGFTdGF0ZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBsZXQgZGF0YSA9ICQoJy5kcGEtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZURwYVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlRHBhU3RhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBkcGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZHBhLXNhdmUtcGFnZScsIHNhdmVEcGFTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHllID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZHllX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuXG4gICAgICAgIGxldCBsYXN0Um93ID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3AyJyk7XG4gICAgICAgIGxhc3RSb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICQoaXRlbSkuY29sb3JwaWNrZXIoe30pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQ2hhbmdlIHJvdyBpbmRleFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUm93SW5kZXgoKSB7XG4gICAgbGV0IHJvd0luZGV4ID0gJCh0aGlzKS52YWwoKTtcbiAgICBsZXQgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcblxuICAgIHJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICBsZXQgb2xkTmFtZSA9ICQoaXRlbSkuYXR0cignbmFtZScpO1xuICAgICAgICBsZXQgbmV3TmFtZSA9IG9sZE5hbWUuc2xpY2UoMCwgNCkgKyByb3dJbmRleCArICBvbGROYW1lLnNsaWNlKG9sZE5hbWUuaW5kZXhPZignXScpKTtcbiAgICAgICAgJChpdGVtKS5hdHRyKCduYW1lJywgbmV3TmFtZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiA9ICcuZHllLXNhdmUtcGFnZS1jb250YWluZXInO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGR5ZXMgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChEWUVfQ09OVEFJTkVSX1NFTEVDVE9SKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBNYXJrIGZvcm0ncyB0ciBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZFRyKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtjaGFuZ2VSb3dJbmRleH0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUm93SW5kZXhcIjtcbmltcG9ydCBkeWVTYXZlUGFnZSwge0RZRV9DT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkVHJ9IGZyb20gXCIuL2hhbmRsZXJzL2R5ZVNhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNvbG9yLXBpY2tlciBpbnB1dHNcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5jcDInKS5jb2xvcnBpY2tlcigpXG4gICAgICAgICAgICAub24oJ2NyZWF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudClcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE1hcmsgdHIgYXMgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCBgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZFRyKVxuICAgICAgICAgICAgICAgICAgICAub24oJ2lucHV0JywgYCR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWRUcik7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2Ugcm93IGluZGV4XG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYXNzZXRfaWQnLCBjaGFuZ2VSb3dJbmRleClcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gICAgICovXG4gICAgJCgnLmR5ZS1zYXZlLXBhZ2UnKS5jbGljayhkeWVTYXZlUGFnZSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRmluZ2VycHJpbnQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBXZWJHTEZpbmdlclByaW50ID1cbiAgICAgICAge1xuICAgICAgICAgICAgJGRlZmF1bHRWYXJzOiBbXSxcblxuICAgICAgICAgICAgRmluZEZpbmdlclByaW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVTY3JlZW5SZXNvbHV0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYXRlRGV2aWNlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvTm90VHJhY2s6IHRydWUsXG4vLyB1c2VyQWdlbnQ6IHRydWUsXG4vLyBsYW5ndWFnZTogdHJ1ZSxcbi8vIGF1ZGlvOiB0cnVlLFxuLy8gZm9udHM6IHRydWUsXG4vLyB3ZWJkcml2ZXI6IHRydWUsXG4vLyBzZXNzaW9uU3RvcmFnZTogdHJ1ZSxcbi8vIGxvY2FsU3RvcmFnZTogdHJ1ZSxcbi8vIGluZGV4ZWREYjogdHJ1ZSxcbi8vIHBsdWdpbnM6IHRydWUsXG4vLyBhZEJsb2NrOiB0cnVlLFxuLy8gZm9udHNGbGFzaDogdHJ1ZSxcbi8vIG9wZW5EYXRhYmFzZTogdHJ1ZSxcbi8vIGNhbnZhczogdHJ1ZSxcbi8vIHdlYmdsOiB0cnVlLFxuLy8gZGV2aWNlTWVtb3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VycHJpbnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VyUHJpbnRIYW5kbGVyID0gZnVuY3Rpb24gKGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBjb21wb25lbnRzLm1hcChmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmtleSArICc6ICcgKyBjb21wb25lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQgPSBGaW5nZXJwcmludDIueDY0aGFzaDEyOCh2YWx1ZXMuam9pbignJyksIDMxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRQcm9taXNlKGZpbmdlcnByaW50LCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJKUzEgZmluZ2VyIHByaW50IFwiICsgZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkpTMiBmaW5nZXIgZXJyb3IgXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmdlcnByaW50Mi5nZXQob3B0aW9ucywgZmluZ2VyUHJpbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5nZXJwcmludDIuZ2V0KG9wdGlvbnMsIGZpbmdlclByaW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApOyAvL3dhcyB0aW1lIG91dCA1MDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJKUzMgZmluZ2VyIHByaW50IHdhaXQgXCIgKyBmaW5nZXJwcmludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBXZWJHTEZpbmdlclByaW50LkZpbmRGaW5nZXJQcmludCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZW5kUHJvbWlzZShmaW5nZXJwcmludCwgdmFsdWVzKSB7XG4gICAgY29uc3QgY29tbWVudCA9ICQoJyNjb21tZW50JykudmFsKCk7XG4gICAgY29uc3QgbmFtZSA9ICQoJyNuYW1lJykudmFsKCk7XG5cbiAgICBpZiAoY29tbWVudC5sZW5ndGggJiYgZmluZ2VycHJpbnQubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQoJyNmaW5nZXJwcmludCcpLmF0dHIoJ2FjdGlvbicpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7bmFtZTogbmFtZSwgY29tbWVudDogY29tbWVudCwgZmluZ2VycHJpbnQ6IGZpbmdlcnByaW50LCB2YWx1ZXM6IHZhbHVlc30pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge3NhdmVGaW5nZXJwcmludH0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUZpbmdlcnByaW50XCI7XG5cbiQoZG9jdW1lbnQpXG5cbi8qKlxuICogU2V0IGN1cnNvciB0byBwYXJlbnQgbm9kZVxuICovXG4gICAgLm9uKCdtb3VzZWVudGVyJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBkZXBsb3kgaW5mb1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAndGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSAkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpO1xuXG4gICAgICAgIGlmICh3cmFwcGVyICYmIHdyYXBwZXIuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdvcGVuJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGb3JtIHN1Ym1pdFxuICAgICAqL1xuICAgIC5vbignc3VibWl0JywgJyNmaW5nZXJwcmludCcsIHNhdmVGaW5nZXJwcmludCk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRmluZ2VycHJpbnQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBXZWJHTEZpbmdlclByaW50ID1cbiAgICAgICAge1xuICAgICAgICAgICAgJGRlZmF1bHRWYXJzOiBbXSxcblxuICAgICAgICAgICAgRmluZEZpbmdlclByaW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVTY3JlZW5SZXNvbHV0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYXRlRGV2aWNlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvTm90VHJhY2s6IHRydWUsXG4vLyB1c2VyQWdlbnQ6IHRydWUsXG4vLyBsYW5ndWFnZTogdHJ1ZSxcbi8vIGF1ZGlvOiB0cnVlLFxuLy8gZm9udHM6IHRydWUsXG4vLyB3ZWJkcml2ZXI6IHRydWUsXG4vLyBzZXNzaW9uU3RvcmFnZTogdHJ1ZSxcbi8vIGxvY2FsU3RvcmFnZTogdHJ1ZSxcbi8vIGluZGV4ZWREYjogdHJ1ZSxcbi8vIHBsdWdpbnM6IHRydWUsXG4vLyBhZEJsb2NrOiB0cnVlLFxuLy8gZm9udHNGbGFzaDogdHJ1ZSxcbi8vIG9wZW5EYXRhYmFzZTogdHJ1ZSxcbi8vIGNhbnZhczogdHJ1ZSxcbi8vIHdlYmdsOiB0cnVlLFxuLy8gZGV2aWNlTWVtb3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VycHJpbnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VyUHJpbnRIYW5kbGVyID0gZnVuY3Rpb24gKGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBjb21wb25lbnRzLm1hcChmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5rZXkgKyAnOiAnICsgY29tcG9uZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50ID0gRmluZ2VycHJpbnQyLng2NGhhc2gxMjgodmFsdWVzLmpvaW4oJycpLCAzMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kUHJvbWlzZShmaW5nZXJwcmludCwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlMxIGZpbmdlciBwcmludCBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJKUzIgZmluZ2VyIGVycm9yIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5nZXJwcmludDIuZ2V0KG9wdGlvbnMsIGZpbmdlclByaW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRmluZ2VycHJpbnQyLmdldChvcHRpb25zLCBmaW5nZXJQcmludEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTsgLy93YXMgdGltZSBvdXQgNTAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSlMzIGZpbmdlciBwcmludCB3YWl0IFwiICsgZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgV2ViR0xGaW5nZXJQcmludC5GaW5kRmluZ2VyUHJpbnQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VuZFByb21pc2UoZmluZ2VycHJpbnQsIHZhbHVlcykge1xuICAgIGNvbnN0IGNvbW1lbnQgPSAkKCcjY29tbWVudCcpLnZhbCgpO1xuICAgIGNvbnN0IG5hbWUgPSAkKCcjbmFtZScpLnZhbCgpO1xuXG4gICAgaWYgKGNvbW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQoJyNmaW5nZXJwcmludCcpLmF0dHIoJ2FjdGlvbicpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7bmFtZTogbmFtZSwgY29tbWVudDogY29tbWVudCwgZmluZ2VycHJpbnQ6IGZpbmdlcnByaW50LCB2YWx1ZXM6IHZhbHVlc30pXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge3NhdmVGaW5nZXJwcmludH0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUZpbmdlcnByaW50XCI7XG5cbiQoZG9jdW1lbnQpXG5cbi8qKlxuICogU2V0IGN1cnNvciB0byBwYXJlbnQgbm9kZVxuICovXG4gICAgLm9uKCdtb3VzZWVudGVyJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBkZXBsb3kgaW5mb1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAndGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSAkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpO1xuXG4gICAgICAgIGlmICh3cmFwcGVyICYmIHdyYXBwZXIuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdvcGVuJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGb3JtIHN1Ym1pdFxuICAgICAqL1xuICAgIC5vbignc3VibWl0JywgJyNmaW5nZXJwcmludCcsIHNhdmVGaW5nZXJwcmludCk7XG4iLCJleHBvcnQgY29uc3QgR0lGVF9XUkFQX1JPV19BRERFRCA9ICdHSUZUX1dSQVBfUk9XX0FEREVEJztcbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBBc3NldCBJRCBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50SW5wdXQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IGFzc2V0SUQgPSBjdXJyZW50SW5wdXQudmFsKCk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudElucHV0LmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGFzc2V0cyBpZHNcbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50QXNzZXREdXBsaWNhdGUgPSAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2V0SUQgPT09IGl0ZW0udmFsdWU7XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudEFzc2V0RHVwbGljYXRlLmxlbmd0aCA+IDEpe1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgYXNzZXRJRH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGlucHV0cyBuYW1lc1xuICAgICAqL1xuICAgIHBhcmVudC5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUucmVwbGFjZSggL1xcW1tcXGRdK1xcXS9nLCBgWyR7YXNzZXRJRH1dYCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgaHJlZiBvZiB0aGUgZGVsZXRlIGJ1dHRvblxuICAgICAqL1xuICAgIHBhcmVudC5maW5kKCcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ocmVmID0gdGhpcy5ocmVmLnJlcGxhY2UoIC9cXC9bXFxkXSskL2csIGAvJHthc3NldElEfWApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIi4uL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXNzZXRzID0ge307XG4gICAgICAgICQoJyNnaWZ0LXdyYXBzLWNvbnRhaW5lcicpLmZpbmQoJy5hc3NldC1pZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFzc2V0c1t0aGlzLnZhbHVlXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRzW3RoaXMudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGFzc2V0ICcgKyBlcnIubWVzc2FnZX0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gdXBkYXRlXG4gICAgICovXG4gICAgcG9zaXRpb25VcGRhdGUoKTtcblxuICAgIGZhc3RTYXZlUGFnZS5iaW5kKHRoaXMpKGUpO1xufVxuIiwiaW1wb3J0IGNvbmZpcm1Nb2RhbCBmcm9tIFwiaGFuZGxlcnMvY29uZmlybU1vZGFsXCI7XG5cbi8qKlxuICogUmVtb3ZlIGVtYmVkZWQgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGJ1dHRvblVybCA9IHRoaXMuaHJlZi5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChwYXJzZUludChidXR0b25VcmxbYnV0dG9uVXJsLmxlbmd0aCAtIDFdKSA9PT0gMCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25maXJtTW9kYWwuYmluZCh0aGlzKShlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcbmltcG9ydCBwb3NpdGlvblVwZGF0ZSBmcm9tIFwibW9kdWxlcy9naWZ0LXdyYXAvaGVscGVycy9wb3NpdGlvblVwZGF0ZVwiO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBuZXcgU29ydGFibGUoX3RoaXMsIHtcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qKlxuICogUG9zaXRpb24gdXBkYXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucG9zaXRpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XG4gICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICBwb3NpdGlvbi52YWwoaW5kZXgpO1xuICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0dJRlRfV1JBUF9ST1dfQURERUR9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBBZGQgbmV3IHJvdyB0byBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoR0lGVF9XUkFQX1JPV19BRERFRCwgZGF0YSA9PiB7XG4gICAgICAgICQoJyNnaWZ0LXdyYXAtJyArIGRhdGEuZW1iZWRCbG9ja0lkKVxuICAgICAgICAgICAgLmZpbmQoJy5kYXRlcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCIuL2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xuaW1wb3J0IGFzc2V0Q2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9hc3NldENoYW5nZWRcIjtcbmltcG9ydCBhZGRSb3cgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZFJvd1wiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCByZW1vdmVSb3cgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlUm93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgYXNzZXQgaWQgaW4gaW5wdXRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuYXNzZXQtaWQnLCBhc3NldENoYW5nZWQpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nLCByZW1vdmVSb3cpO1xuXG4vKipcbiAqIEFkZCByb3cgbGlzdGVuZXJcbiAqL1xuYWRkUm93KCk7XG5cbi8qKlxuICogU29ydGFibGUgaW5pdFxuICovXG4kKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XG5cbi8qKlxuICogU2F2ZSBhbGwgcGFnZVxuICovXG4kKCcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJykuY2xpY2soZmFzdFNhdmVQYWdlKTsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIFN0b3JlIFVzZXJcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkbWluU3RvcmUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRfaWQgPSAkKCcjc2VuZGVyX2xpc3QnKS5maW5kKCdbbmFtZT1cInVzZXJfc2VuZGVyXCJdOmNoZWNrZWQnKS5jbG9zZXN0KCd0cicpLmRhdGEoJ3VpZCcpO1xuXG4gICAgaWYgKCFzZWxlY3RlZF9pZCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBmaW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe3VpZDogc2VsZWN0ZWRfaWR9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEZpbmQgVXNlclxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFVzZXIoKSB7XG4gICAgY29uc3QgZGF0YSA9IHt1aWQ6ICQoJyNzZW5kZXInKS52YWwoKSwgbmFtZTogJCgnI3NlbmRlcl9uYW1lJykudmFsKCl9O1xuICAgIGNvbnN0IHVzZXJfdGVtcGxhdGUgPSAkKCcjdXNlcl90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBpbnNlcnRfYmxvY2sgPSAkKCcjc2VuZGVyX2xpc3QnKTtcblxuICAgIGlmICghZGF0YS51aWQubGVuZ3RoICYmICFkYXRhLm5hbWUubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIGZpbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAkKHJlc3BvbnNlLnVzZXJzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suY2xvc2VzdCgndGFibGUnKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5hcHBlbmQodXNlcl90ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV1c2VyX2lkJS9nLCBpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVhdmF0YXIlJywgaXRlbS5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXBldF9uYW1lJScsIGl0ZW0ucGV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyV1c2VyX25hbWUlJywgaXRlbS5maXJzdF9uYW1lICsgJyAnICsgaXRlbS5sYXN0X25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWxldmVsJScsIGl0ZW0ueHApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBDaGFuZ2UgbWFpbiBhZG1pblxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TWFpbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlzX21haW4gPSAkKCcjZ3JvdXAtdXNlcnMnKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpLmRhdGEoJ2lkJyk7XG5cbiAgICBpZiAoIWlzX21haW4pIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoe21haW5faWQ6IGlzX21haW59KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcbmltcG9ydCB7ZmluZFVzZXJ9IGZyb20gXCJtb2R1bGVzL2dyb3VwLWVkaXQvaGFuZGxlcnMvZmluZFVzZXJcIjtcbmltcG9ydCB7YWRtaW5TdG9yZX0gZnJvbSBcIm1vZHVsZXMvZ3JvdXAtZWRpdC9oYW5kbGVycy9hZG1pblN0b3JlXCI7XG5pbXBvcnQge3NldE1haW59IGZyb20gXCJtb2R1bGVzL2dyb3VwLWVkaXQvaGFuZGxlcnMvc2V0TWFpblwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogRmluZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjZmluZF9zZW5kZXIsICNmaW5kX3JlY2VpdmVyJywgZmluZFVzZXIpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHNlbGVjdGVkIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnRhYmxlIHRyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAkKCcjc2VuZGVyX3VpZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ3VpZCcpKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSB1c2VyIHRvIGdyb3VwXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjc3RvcmUnLCBhZG1pblN0b3JlKVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1haW4gYWRtaW5cbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2V0TWFpbilcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYik7XG5cbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJ3Rib2R5Lmdyb3VwLWV2ZW50LXNhdmUtY29udGFpbmVyJyk7XG5cbiAgICBsZXQgbGFzdElEUyA9IFtdO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IDE7XG4gICAgdGJvZHkuZmluZChcInRyXCIpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgbGFzdElEUy5wdXNoKCQoaXRlbSkuZGF0YSgnaWQnKSk7XG4gICAgfSk7XG5cbiAgICBpZihsYXN0SURTLmxlbmd0aCl7XG4gICAgICAgIGluY3JlbWVudElkID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsbGFzdElEUykgKyAxKSB8fCAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVpZCUvZywgaSArIGluY3JlbWVudElkKTtcbiAgICAgICAgdGJvZHkucHJlcGVuZCh0ckxhc3QpO1xuICAgICAgICAkKCcuZGF0ZS1maWVsZCcpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmdyb3VwLWV2ZW50LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIik7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZFwiKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5kYXRlLWZpZWxkXCIpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNhdmUtcGFnZScsIHNhdmVTdGF0ZSk7XG5cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9lbnY9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDb3B5IGlkc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSkuc2VsZWN0KCk7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsZXZlbHMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBsZXQgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBsZXQgdGJvZHkgPSAkKCcjbGV2ZWxzID4gdGJvZHknKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCdpbnB1dFtuYW1lPVwiaWRcIl0nKS52YWwoKTtcbiAgICAgICAgbGV0IGluY3JlbWVudElkID0gcGFyc2VJbnQobGFzdElEKSB8fCAwO1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI2xldmVsX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVsZXZlbF9pZCUvZywgKytpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxldmVsU3RhdGUgKCkge1xuICAgIGxldCByb3dUb1NhdmUgPSAkKHRoaXMpLnBhcmVudHMoJ3RyJyk7XG4gICAgbGV0IHJvdyA9IHJvd1RvU2F2ZS5maW5kKFwiLmVkaXRhYmxlIHNlbGVjdCwgLmVkaXRhYmxlIGlucHV0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChyb3dUb1NhdmUuZGF0YSgnYWN0aW9uJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKHJvdylcbiAgICAgICAgLnNlbmQoKTtcbn1cbiIsImltcG9ydCB7c2F2ZUxldmVsU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVMZXZlbFN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBsZXZlbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMsIHNhdmVCdXR0b24pKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZUxldmVsU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHNob3cgYXNzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBc3NldChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgYWN0aW9uID0gU1dPV19BU1NFVF9ST1VURSArICc/aWQ9JyArIGN1cnJlbnRFbGVtZW50LnZhbCgpO1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1uYW1lJykuaHRtbChyZXNwb25zZS5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdwcmV2aWV3X3VybCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgLmxpc3QtdGh1bWJuYWlsJykuZGF0YSgnZnVsbCcsIHJlc3BvbnNlLmRhdGEucHJldmlld191cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufVxuIiwiXG5pbXBvcnQge3Nob3dBc3NldH0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0Fzc2V0XCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhc3NldFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5hc3NldCcsIHNob3dBc3NldClcblxuICAgICIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgbGV0IHRib2R5ID0gJCgnI2xvY2FsaXphdGlvbnMgPiB0Ym9keScpO1xuICAgIGxldCB0ZW1wbGF0ZSA9ICQoJyNsb2NhbGl6YXRpb25fdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICB0Ym9keS5hcHBlbmQodGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBSZW1vdmUgbm90IHNhdmVkIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUm93KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGxvY2FsaXphdGlvbiBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsaXphdGlvblN0YXRlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEJ0bi5jbG9zZXN0KCd0cicpO1xuICAgIGNvbnN0IGN1cnJlbnRLZXkgPSBwYXJlbnQuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS52YWwoKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGR1cGxpY2F0ZWQga2V5c1xuICAgICAqXG4gICAgICogQHR5cGUge2pRdWVyeX1cbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50S2V5RHVwbGljYXRlID0gJCgnI2xvY2FsaXphdGlvbnMnKS5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudEtleSA9PT0gaXRlbS52YWx1ZTtcbiAgICB9KTtcbiAgICBpZiAoY3VycmVudEtleUR1cGxpY2F0ZS5sZW5ndGggPiAxKXtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUga2V5ICcgKyBjdXJyZW50S2V5fSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gcGFyZW50LmZpbmQoJy5lZGl0YWJsZSBpbnB1dCcpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykuYXR0cigncmVhZG9ubHknLCB0cnVlKTtcblxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlTG9jYWxpemF0aW9uU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVMb2NhbGl6YXRpb25TdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtyZW1vdmVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9ucyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY3JlYXRlLXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTG9jYWxpemF0aW9uU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1yb3cnLCByZW1vdmVSb3cpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWFnaWMgPiB0Ym9keScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0W25hbWU9XCJpZFwiXScpLnZhbCgpO1xuICAgICAgICBsZXQgaW5jcmVtZW50SWQgPSBwYXJzZUludChsYXN0SUQpIHx8IDA7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjbWFnaWNfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJW1hZ2ljX2lkJS9nLCArK2luY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNYWdpY1N0YXRlICgpIHtcbiAgICBjb25zdCBkYXRhID0gJCgnLm1hZ2ljLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuXG4gICAgZGF0YS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkuYXR0cigncmVhZG9ubHknLCB0cnVlKVxuICAgIH0pO1xuXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZU1hZ2ljU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZU1hZ2ljU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSURcbiAqXG4gKiBAcGFyYW0gZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbmV3IFJlcXVlc3RCdWlsZGVyKHRoaXMuaHJlZilcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICQoJyNsYXN0LW1ha2V1cC1raXQtaWQnKVxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0Lm1ha2V1cF9raXRfaWQpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBnZXRMYXN0TWFrZXVwS2l0SUQgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdE1ha2V1cEtpdElEXCI7XG5cbi8qKlxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSUQgYXQgdGhlIGJvZHkgcGFydHMgZ3JpZFxuICovXG4kKCcjZ2V0LWxhc3QtbWFrZXVwLWtpdC1pZCcpXG4gICAgLmNsaWNrKGdldExhc3RNYWtldXBLaXRJRCk7XG4iLCJleHBvcnQgY29uc3QgTUFLRVVQX0tJVF9TSE9XX0ZPUk0gPSAnTUFLRVVQX0tJVF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtNQUtFVVBfS0lUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvbWFrZXVwLWtpdC9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KE1BS0VVUF9LSVRfU0hPV19GT1JNKSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGluZ3JlZGllbnQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWxfaW5ncmVkaWVudHMgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX2luZ3JlZGllbnRzX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmluZ3JlZGllbnRfaWQnKS50ZXh0KCk7XG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwtaW5ncmVkaWVudCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5ncmVkaWVudERlbGV0ZSgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBJbmdyZWRpZW50cyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1lYWxJbmdyZWRpZW50c1N0YXRlICgpIHtcbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgbGV0IGRhdGEgPSAkKCcubWVhbC1pbmdyZWRpZW50cy1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge2luZ3JlZGllbnREZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGVcIjtcbmltcG9ydCB7c2F2ZU1lYWxJbmdyZWRpZW50c1N0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgaW5ncmVkaWVudERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlTWVhbEluZ3JlZGllbnRzU3RhdGUpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5tZWFsX2lkJykudGV4dCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZWFsRGVsZXRlKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBNZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWVhbFN0YXRlICgpIHtcbiAgICBjb25zdCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJy5tZWFsLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWRcIik7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5tZWFsLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgdGJvZHkuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge21lYWxEZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL21lYWxEZWxldGVcIjtcbmltcG9ydCB7c2F2ZU1lYWxTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgbWVhbERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIG1lYWxcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlTWVhbFN0YXRlKClcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQoJy5zYXZlLXBhZ2UnKTtcblxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ2lucHV0W25hbWU9XCJhd2FyZF9pZFwiXScpLnZhbCgwKTtcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzLCBzYXZlQnV0dG9uKSgpO1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAqL1xuJCgnLnNhdmUtcGFnZScpLmNsaWNrKHNhdmVNZWFsU3RhdGUpO1xuIiwiZXhwb3J0IGNvbnN0IE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSA9ICdORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0nO1xuIiwiY29uc3QgVFJBU0ggPSAnVFJBU0gnO1xuY29uc3QgVFJBU0hfRklFTERTX0lEID0gJ3RyYXNoLWZpZWxkcyc7XG5jb25zdCBTRUxFQ1RfSUQgPSAnbmVpZ2hib3ItYWN0aXZpdHktdHlwZS1pZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRUxFQ1RfSUQpO1xuXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgICAgIGNvbnN0IHRyYXNoRmllbGRzID0gJCgnIycgKyBUUkFTSF9GSUVMRFNfSUQpO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkRWxlbWVudC50ZXh0LnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgVFJBU0g6XG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge05FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgc2VsZik7XG5cbiAgICAgICAgY2hhbmdlVHlwZSgpO1xuXG4gICAgICAgICQoJy5uZWlnaGJvci1hY3Rpdml0eS1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gJy4vaGFuZGxlcnMvY2hhbmdlVHlwZSc7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSlcbiAgICAub24oJ2NoYW5nZScsICcubmVpZ2hib3ItYWN0aXZpdHktdHlwZScsIGNoYW5nZVR5cGUpO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXRUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKS5maW5kKCdhJyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9hY3RpdmVUYWI9XCIgKyBkaXJlY3Rpb247XG4gICAgd2luZG93LmxvY2F0aW9uID0gdXJsXG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gJCgnW25hbWU9XCJjYXRlZ29yeVwiXScpLnZhbCgpO1xuICAgIGNvbnN0IGFzc2V0X2lkcyA9ICQoJ1tuYW1lPVwiYXNzZXRzX2lkc1wiXScpO1xuXG4gICAgaWYoIWFzc2V0X2lkcy5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgnbmxhLWFzc2lnbicpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHthc3NldF9pZHM6IGFzc2V0X2lkcy52YWwoKSwgY2F0ZWdvcnk6IGNhdGVnb3J5fSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgYXNzZXRfaWRzLnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxpc3QgKCkge1xuICAgIGNvbnN0IGFzc2V0SWRzID0gW107XG4gICAgY29uc3QgY2F0ZWdvcnkgPSAkKCdbbmFtZT1cImNhdGVnb3J5XCJdJykudmFsKCk7XG4gICAgY29uc3QgYXNpZ25MaXN0ID0gJCgndGJvZHksY29udGFpbmVyJykuZmluZCgnOmNoZWNrYm94OmNoZWNrZWQnKTtcbiAgICBhc2lnbkxpc3QuZWFjaChmdW5jdGlvbiAoaSwgYXNzZXRJZCkge1xuICAgICAgICBhc3NldElkcy5wdXNoKCQoYXNzZXRJZCkuZGF0YSgnYXNzZXQnKSlcbiAgICB9KTtcblxuICAgIGlmKCFhc3NldElkcy5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpKTtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7YXNzZXRfaWRzOiBhc3NldElkcywgY2F0ZWdvcnk6IGNhdGVnb3J5fSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgYXNpZ25MaXN0LnByb3AoIFwiY2hlY2tlZFwiLCBmYWxzZSApO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2Fzc2V0VGFifSBmcm9tIFwiLi9oYW5kbGVycy9hc3NldFRhYlwiO1xuaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuaW1wb3J0IHt1cGRhdGVMaXN0fSBmcm9tIFwiLi9oYW5kbGVycy91cGRhdGVMaXN0XCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5uYXYtbGluaycsIGNoYW5nZVRhYilcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFzc2V0LXRhYicsIGFzc2V0VGFiKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1hc3NpZ24nLCB1cGRhdGVMaXN0KVxuXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+JylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIG5sYSBsaXN0IGNhdGVnb3J5XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXNzZXQtYXNzaWduJywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTkxBIHF0eVxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNxdHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ldyBodHRwKCdjaGFuZ2UtcGVyLXBhZ2UnKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YSh7cmVjb3JkX3Blcl9wYWdlOiAkKHRoaXMpLnZhbCgpfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbIGhlYWQsIHRhaWwgXSA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoICc/JyApO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBoZWFkICsgJz8nICsgdGFpbC5yZXBsYWNlKG5ldyBSZWdFeHAoYHBhZ2U9W14mXSp8cGFnZT1bXiZdKiZgKSwgJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfSk7XG5cbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJ3Rib2R5LmNvbnRhaW5lcicpO1xuXG4gICAgbGV0IGxhc3RJRFMgPSBbXTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGlmICgkKGl0ZW0pLmRhdGEoJ2lkJykpIHtcbiAgICAgICAgICAgIGxhc3RJRFMucHVzaCgkKGl0ZW0pLmRhdGEoJ2lkJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGxhc3RJRFMubGVuZ3RoKSB7XG4gICAgICAgIGluY3JlbWVudElkID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsIGxhc3RJRFMpICsgMSkgfHwgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyN0ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8laWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XG4gICAgICAgIHRib2R5LnByZXBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybFxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNhdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zYXZlLXBhZ2UnLCBzYXZlU3RhdGUpO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCd0Ym9keS5jb250YWluZXInKTtcblxuICAgIGxldCBsYXN0SURTID0gW107XG4gICAgbGV0IGluY3JlbWVudElkID0gMTtcbiAgICB0Ym9keS5maW5kKFwidHJcIikuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBpZiAoJChpdGVtKS5kYXRhKCdpZCcpKSB7XG4gICAgICAgICAgICBsYXN0SURTLnB1c2goJChpdGVtKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChsYXN0SURTLmxlbmd0aCkge1xuICAgICAgICBpbmNyZW1lbnRJZCA9IChNYXRoLm1heC5hcHBseShNYXRoLCBsYXN0SURTKSArIDEpIHx8IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWlkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xuICAgICAgICB0Ym9keS5wcmVwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIik7XG4gICAgY29uc3QgZm9ybUl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZFwiKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNhdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zYXZlLXBhZ2UnLCBzYXZlU3RhdGUpO1xuXG4iLCJleHBvcnQgY29uc3QgUFJPRFVDVF9TSE9XX0ZPUk0gPSAnUFJPRFVDVF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IENsZWF2ZSBmcm9tIFwiY2xlYXZlLmpzXCI7XG5cbi8qKlxuICogUHJpY2UgaW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBuZXcgQ2xlYXZlKHRoaXMsIHtcbiAgICAgICAgbnVtZXJhbDogdHJ1ZSxcbiAgICAgICAgcHJlZml4OiAnJCAnLFxuICAgICAgICByYXdWYWx1ZVRyaW1QcmVmaXg6IHRydWUsXG4gICAgICAgIG9uVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQocGFyc2VGbG9hdChlLnRhcmdldC5yYXdWYWx1ZSkgKiAxMDApO1xuICAgICAgICAgICAgbGV0IHByb2R1Y3RQcmljZSA9ICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCd0ZCcpLmZpbmQoJy5wcm9kdWN0LXByaWNlJyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gcGFyc2VJbnQocHJvZHVjdFByaWNlLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZVxuICAgICAgICAgICAgICAgICAgICAudmFsKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7UFJPRFVDVF9TSE9XX0ZPUk19IGZyb20gXCJtb2R1bGVzL3Byb2R1Y3QvY29uc3RhbnRzXCI7XG5pbXBvcnQgcHJpY2VJbml0IGZyb20gXCJtb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0XCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChQUk9EVUNUX1NIT1dfRk9STSkpO1xuXG4vKipcbiAqIFByaWNlIGZvcm1hdFxuICovXG4kKCcucHJvZHVjdC1wcmljZS12aWV3JykuZWFjaChwcmljZUluaXQpO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTkxBIG9yZGVyXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI29yZGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgaHR0cCgnY2hhbmdlLW9yZGVyJylcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoe29yZGVyOiAkKHRoaXMpLnZhbCgpfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBOTEEgcXR5XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI3F0eScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IGh0dHAoJ2NoYW5nZS1wZXItcGFnZScpXG4gICAgICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgICAgIC5kYXRhKHtyZWNvcmRfcGVyX3BhZ2U6ICQodGhpcykudmFsKCl9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFsgaGVhZCwgdGFpbCBdID0gbG9jYXRpb24uaHJlZi5zcGxpdCggJz8nICk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGhlYWQgKyAnPycgKyB0YWlsLnJlcGxhY2UobmV3IFJlZ0V4cChgcGFnZT1bXiZdKnxwYWdlPVteJl0qJmApLCAnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9KTtcbiIsImltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKlxuICogQHBhcmFtIF9cbiAqIEBwYXJhbSBpdGVtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChfLCBpdGVtKSB7XG4gICAgY29uc3QgZHJvcHpvbmVDb250YWluZXIgPSAkKGl0ZW0pO1xuICAgIGNvbnN0IHByZXZpZXdIaWRkZW5JbnB1dCA9IGRyb3B6b25lQ29udGFpbmVyLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAqL1xuICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoaXRlbSlcbiAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCd1cmwnKSlcbiAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNldCBwcmV2aWV3XG4gICAgICovXG4gICAgaWYgKCEhcHJldmlld0hpZGRlbklucHV0LnZhbCgpKSB7XG4gICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgpLFxuICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lQ29udGFpbmVyLmRhdGEoJ2ZvbGRlcicpLCBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICovXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG59IiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcbmltcG9ydCBkcm9wem9uZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvZHJvcHpvbmVJbml0XCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBUdXJuZWQgb2ZmIHRoZSBEcm9wem9uZSBhdXRvIGluaXRcbiAqXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xuRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICovXG4kKCcuZHJvcHpvbmUnKS5lYWNoKGRyb3B6b25lSW5pdCk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJy51cGRhdGUtcm93Jyk7XG5cbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJy51cGRhdGUtcm93Jyk7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcywgc2F2ZUJ1dHRvbikoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9KSIsImNvbnN0IFdBTEtfQ0FURUdPUlkgPSAnNic7XG5jb25zdCBSVU5fQ0FURUdPUlkgPSc3JztcblxuJChkb2N1bWVudClcblxuICAgIC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0MiA9ICQoJy50YWJsZScpLmZpbmQoJy5lbWJlZC1ncm91cCBzZWxlY3Quc2VsZWN0MicpO1xuICAgICAgICBsZXQgc2VsZWN0VmFsID0gMDtcbiAgICAgICAgc2VsZWN0Mi5lYWNoKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWwgPSAkKGkpLnZhbCgpO1xuICAgICAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICAgICAgJChpKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTaG93IGhpZGUgc3BlZWQgb24gdHJpZ2dlciBhZGQtZW1iZWQgYnV0dG9uXG4gICAgICovXG4gICAgLm9uKCdhaV9hbmltYXRpb24nLCAnLmFkZC1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZW1iZWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RWYWwgPSBlbWJlZC5maW5kKCcuc2VsZWN0MicpLnZhbCgpO1xuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgIGVtYmVkLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVtYmVkLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTaG93IGhpZGUgc3BlZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdFZhbCA9ICQoaXRlbS50YXJnZXQpLnZhbCgpO1xuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiZXhwb3J0IGNvbnN0IFNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0gPSAnU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSc7XG4iLCIvKipcbiAqIEFkZCBhIG5ldyBzaG9wIGluIGEgZGVwYXJ0bWVudHMgZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHRhYmxlID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuc2hvcHMtdGFibGUnKS5maW5kKCd0Ym9keScpO1xuICAgIGNvbnN0IGRlcGFydG1lbnRJZCA9IGN1cnJlbnRCdG4uZGF0YSgnZGVwYXJ0bWVudCcpO1xuICAgIGxldCBjb3VudGVyID0gcGFyc2VJbnQoY3VycmVudEJ0bi5kYXRhKCdjb3VudCcpKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJyNzaG9wLXRlbXBsYXRlJylcbiAgICAgICAgLmh0bWwoKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCclZGVwYXJ0bWVudElkJScsIFwiZ1wiKSwgZGVwYXJ0bWVudElkKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCclaW5kZXglJywgXCJnXCIpLCBjb3VudGVyKyspO1xuXG4gICAgY3VycmVudEJ0bi5kYXRhKCdjb3VudCcsIGNvdW50ZXIpO1xuXG4gICAgdGFibGUuYXBwZW5kKHRlbXBsYXRlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5cbi8qKlxuICogRmFzdCBzYXZlIGZvciBzaG9wIGRlcGFydG1lbnRcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRhdGFOYW1lUHJlZml4ID0gJ3Nob3AnO1xuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IGZhc3RTYXZlQ29udGFpbmVyID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFmYXN0U2F2ZUNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBmYXN0U2F2ZUNvbnRhaW5lci5maW5kKCd0Ym9keSB0cicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IGdldEZvcm1EYXRhKCQodGhpcykpO1xuICAgICAgICBmb3IgKGxldCBpIGluIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGAke2RhdGFOYW1lUHJlZml4fVske2luZGV4fV1bJHtpfV1gO1xuICAgICAgICAgICAgcmVzdWx0W2l0ZW1OYW1lXSA9IGZvcm1EYXRhW2ldO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEocmVzdWx0KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBSYWRpbyBpbnB1dCBmcm9tIGNoZWNrYm94XG4gKiBCZWNhdXNlIGlucHV0W3R5cGU9cmFkaW9dIGRpZCBub3Qgd29yayBjb3JyZWN0bHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGN1cnJlbnRJdGVtLmNsb3Nlc3QoJy50YWJsZScpLmZpbmQoJy5yYWRpbycpO1xuXG4gICAgYWxsSXRlbXMucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICBhbGxJdGVtcy5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuXG4gICAgY3VycmVudEl0ZW0ucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgIGN1cnJlbnRJdGVtLmFkZENsYXNzKCdjaGVja2VkJyk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbmV3IFNvcnRhYmxlKHRoaXMsIHtcbiAgICAgICAgZ3JvdXA6ICdzaG9wcycsXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaW86ICQoZS5pdGVtKS5maW5kKCcucmFkaW8nKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiAkKGUuaXRlbSkuY2xvc2VzdCgnLnRhYmxlJyksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBhcmVudC5maW5kKCcucmFkaW8uY2hlY2tlZDpndCgwKScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhZGlvLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7U0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5pbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXQgYWZ0ZXIgdGhlIG1vZGFsIG9wZW5lZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0sICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXdcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lSW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsJykpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3IFNtYWxsXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lLXNtYWxsJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybC1zbWFsbCcpKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBEcm9wem9uZSBJbml0XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZHJvcHpvbmVFbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2aWV3VXJsRWxlbWVudFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkcm9wem9uZUluaXQoZHJvcHpvbmVFbGVtZW50LCBwcmV2aWV3VXJsRWxlbWVudCkge1xuICAgIGlmICghZHJvcHpvbmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAqL1xuICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoZHJvcHpvbmVFbGVtZW50KVxuICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LnVybClcbiAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICQocHJldmlld1VybEVsZW1lbnQpLnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkKGRyb3B6b25lRWxlbWVudCkuZmluZCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSA9IHJlc3BvbnNlLmZpbGVfbmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlld1xuICAgICAqL1xuICAgIGlmIChwcmV2aWV3VXJsRWxlbWVudC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSxcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAqL1xuICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xufSIsImltcG9ydCBhZGRTaG9wIGZyb20gXCIuL2hhbmRsZXJzL2FkZFNob3BcIjtcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xuaW1wb3J0IHJhZGlvSW5wdXQgZnJvbSBcIi4vaGFuZGxlcnMvcmFkaW9JbnB1dFwiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwibW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICovXG5zaG93Rm9ybSgpO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIFJhZGlvIGJ1dHRvbnMgYmVoYXZpb3JcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcucmFkaW8nLCByYWRpb0lucHV0KVxuXG4gICAgLyoqXG4gICAgICogRG9jdW1lbnQgcmVhZHlcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGNsYXNzIHRvIGNoZWNrZWQgcmFkaW9zXG4gICAgICAgICAqL1xuICAgICAgICAkKCcucmFkaW9bY2hlY2tlZF0nKS5hZGRDbGFzcygnY2hlY2tlZCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcbiAgICAgICAgICovXG4gICAgICAgICQoJy5hZGQtc2hvcCcpLmNsaWNrKGFkZFNob3ApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGYXN0IHNhdmVcbiAgICAgICAgICovXG4gICAgICAgICQoJy5mYXN0LXNhdmUtc2hvcHMnKS5jbGljayhmYXN0U2F2ZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1ha2UgdHIgdG8gc29ydGFibGVcbiAgICAgICAgICovXG4gICAgICAgICQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjc291bmQgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNzb3VuZF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5zb3VuZF9pZCcpLnZhbCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXNvdW5kX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU291bmRTdGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5zb3VuZC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCkge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU291bmRTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVNvdW5kU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU291bmRTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEZpbmQgVXNlclxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFVzZXIoKSB7XG4gICAgY29uc3QgcHJlZml4ID0gJCh0aGlzKS5kYXRhKCdwcmVmaXgnKTtcbiAgICBjb25zdCBkYXRhID0ge3VpZDogJCgnIycgKyBwcmVmaXgpLnZhbCgpLCBuYW1lOiAkKCcjJyArIHByZWZpeCArICdfbmFtZScpLnZhbCgpLCBwcmVmaXg6IHByZWZpeH07XG4gICAgY29uc3QgdXNlcl90ZW1wbGF0ZSA9ICQoJyN1c2VyX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGluc2VydF9ibG9jayA9ICQoJyMnICsgcHJlZml4ICsgJ19saXN0Jyk7XG5cbiAgICBpZiAoIWRhdGEudWlkLmxlbmd0aCAmJiAhZGF0YS5uYW1lLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBmaW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgJChyZXNwb25zZS51c2VycykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2Jsb2NrLmNsb3Nlc3QoJ3RhYmxlJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suYXBwZW5kKHVzZXJfdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8ldXNlcl9pZCUvZywgaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclcGV0X25hbWUlJywgaXRlbS5wZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXVzZXJfbmFtZSUnLCBpdGVtLmZpcnN0X25hbWUgKyAnICcgKyBpdGVtLmxhc3RfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclbGV2ZWwlJywgaXRlbS54cClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclYXZhdGFyJScsIGl0ZW0uYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV0YXJnZXQlL2csIHByZWZpeClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFNlbmQgR2lmdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZEdpZnQgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNzZW5kLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiaW5wdXQsIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzZW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZm9ybUl0ZW1zKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICQoJy50YWJsZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NlbmRHaWZ0fSBmcm9tIFwiLi9oYW5kbGVycy9zZW5kR2lmdFwiO1xuaW1wb3J0IHtmaW5kVXNlcn0gZnJvbSBcIi4vaGFuZGxlcnMvZmluZFVzZXJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2ZpbmRfc2VuZGVyLCAjZmluZF9yZWNlaXZlcicsIGZpbmRVc2VyKVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjc2VuZCcsIHNlbmRHaWZ0KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50YWJsZSB0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpICsgJ191aWQnKS52YWwoJCh0aGlzKS5kYXRhKCd1aWQnKSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGxpbWl0IGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ3RleHRhcmVhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5yZXBsYWNlKCdsb290X2RhdGFbJywgJycpLnJlcGxhY2UoJ10nLCAnJykgKyAnX2xlbmd0aCc7XG4gICAgICAgICQoJyMnICsgdGFyZ2V0KS50ZXh0KCQodGhpcykuZGF0YSgnbWF4bGVuZ3RoJykgLSAkKHRoaXMpLnZhbCgpLmxlbmd0aCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgc2VsZWN0ZWQgYXNzZXRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNhc3NldHNfbGlzdCBpbWcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNhc3NldHNfbGlzdCcpLmZpbmQoJ2ltZycpLmNzcygnYm9yZGVyJywgJycpO1xuICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyJywgJzJweCBzb2xpZCAjYzFjMWMxJyk7XG4gICAgICAgICQoJyNhc3NldF9pZCcpLnZhbCgkKHRoaXMpLmRhdGEoJ3ByaXplJykpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50ZXJlZCBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjY2FuY2VsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcudGFibGUnKS5oaWRlKCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEnKS52YWwoJycpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlZGlyZWN0XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVkaXJlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgncm91dGUnKVxuICAgIH0pO1xuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2Vudj1cIiArIGRpcmVjdGlvbjtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuc3BlY2lhbC1wcml6ZS1zYXZlLWNvbnRhaW5lciBsYWJlbDpjb250YWlucygnTGltaXQnKVwiKS5jc3MoJ3BhZGRpbmcnLCAwKS5odG1sKFwiQXZhaWxhYmxlXCIpO1xuICAgICAgICAkKCcuc3BlY2lhbC1wcml6ZS1zYXZlLWNvbnRhaW5lciBpbnB1dCcpLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSkuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgJCgnLmFkZC1lbWJlZCwgLnJlbW92ZS1lbWJlZCcpLnJlbW92ZSgpO1xuXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENvcHkgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpO1xuXG4iLCJleHBvcnQgY29uc3QgVEFNQVRPT0xfU0hPV19GT1JNID0gJ1RBTUFUT09MX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtUQU1BVE9PTF9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShUQU1BVE9PTF9TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKFRBTUFUT09MX1NIT1dfRk9STSwgc2VsZik7XG5cbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogRmluZCBVc2VyXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVXNlcigpIHtcbiAgICBjb25zdCBwcmVmaXggPSAkKHRoaXMpLmRhdGEoJ3ByZWZpeCcpO1xuICAgIGNvbnN0IGRhdGEgPSB7dWlkOiAkKCcjJyArIHByZWZpeCkudmFsKCksIG5hbWU6ICQoJyMnICsgcHJlZml4ICsgJ19uYW1lJykudmFsKCksIHByZWZpeDogcHJlZml4fTtcbiAgICBjb25zdCB1c2VyX3RlbXBsYXRlID0gJCgnI3VzZXJfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgaW5zZXJ0X2Jsb2NrID0gJCgnIycgKyBwcmVmaXggKyAnX2xpc3QnKTtcblxuICAgIGlmICghZGF0YS51aWQubGVuZ3RoICYmICFkYXRhLm5hbWUubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIGZpbmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAkKHJlc3BvbnNlLnVzZXJzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfYmxvY2suY2xvc2VzdCgndGFibGUnKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9ibG9jay5hcHBlbmQodXNlcl90ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyV1c2VyX2lkJS9nLCBpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVwZXRfbmFtZSUnLCBpdGVtLnBldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcldXNlcl9uYW1lJScsIGl0ZW0uZmlyc3RfbmFtZSArICcgJyArIGl0ZW0ubGFzdF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVsZXZlbCUnLCBpdGVtLnhwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVhdmF0YXIlJywgaXRlbS5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJXRhcmdldCUvZywgcHJlZml4KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogU2VuZCBHaWZ0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kR2lmdCAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnI3Ryb3BoeS1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiaW5wdXQsIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzZW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAgICAgLmRhdGEoZm9ybUl0ZW1zKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cm9waHlfY3Vwc19jb3VudCA9ICQoJyN0cm9waHlfY3Vwc19jb3VudCcpO1xuICAgICAgICAgICAgICAgICAgICB0cm9waHlfY3Vwc19jb3VudC50ZXh0KHBhcnNlSW50KHRyb3BoeV9jdXBzX2NvdW50LnRleHQoKSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRhYmxlJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjdHJvcGh5LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhJykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NlbmRHaWZ0fSBmcm9tIFwiLi9oYW5kbGVycy9zZW5kR2lmdFwiO1xuaW1wb3J0IHtmaW5kVXNlcn0gZnJvbSBcIi4vaGFuZGxlcnMvZmluZFVzZXJcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2ZpbmRfc2VuZGVyLCAjZmluZF9yZWNlaXZlcicsIGZpbmRVc2VyKVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjc2VuZCcsIHNlbmRHaWZ0KVxuXG4gICAgLyoqXG4gICAgICogTWFyayBzZWxlY3RlZCByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50YWJsZSB0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpICsgJ191aWQnKS52YWwoJCh0aGlzKS5kYXRhKCd1aWQnKSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGxpbWl0IGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ3RleHRhcmVhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5yZXBsYWNlKCdjdXBfZGF0YVsnLCAnJykucmVwbGFjZSgnXScsICcnKSArICdfbGVuZ3RoJztcbiAgICAgICAgJCgnIycgKyB0YXJnZXQpLnRleHQoJCh0aGlzKS5kYXRhKCdtYXhsZW5ndGgnKSAtICQodGhpcykudmFsKCkubGVuZ3RoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVudGVyZWQgZGF0YVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2NhbmNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnRhYmxlJykuaGlkZSgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIHRleHRhcmVhJykudmFsKCcnKVxuICAgIH0pO1xuIiwiXG4vKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZW52PVwiICsgZGlyZWN0aW9uO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgaWQ6ICd0cm9waHktY3VwLXVzZXJzJ1xuICAgIH0sICdUcm9waHkgY3VwIHVzZXJzJywgdXJsKTtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLnRyb3BoeS1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWRcIik7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pO1xuIiwiZXhwb3J0IGNvbnN0IFNFQVJDSF9VU0VSX0FTU0VUUyA9ICdTRUFSQ0hfVVNFUl9BU1NFVFMnO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9VU0VSX1BBUlRfRk9STSA9ICdTVUJNSVRfVVNFUl9QQVJUX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ORUlHSEJPUiA9ICdERUxFVEVfTkVJR0hCT1InO1xuZXhwb3J0IGNvbnN0IEFERF9ORUlHSEJPUiA9ICdBRERfTkVJR0hCT1InOyIsIi8qKlxuICogQ2hhbmdlIHBsYWNlbWVudCBzZWxlY3QgaW4gQWRkIEFzc2V0cyBibG9ja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGxhY2VtZW50TmFtZSA9ICQoJyNwbGFjZW1lbnQtbmFtZScpO1xuICAgIGlmICgkKHRoaXMpLnZhbCgpID4gMCkge1xuICAgICAgICBwbGFjZW1lbnROYW1lLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2VtZW50TmFtZS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5laWdoYm9yc0NvdW50ID0gJCgnI25laWdoYm9ycy1jb3VudCcpO1xuICAgIGlmKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgbmVpZ2hib3JzQ291bnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZWlnaGJvcnNDb3VudC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5sb2FkLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgY3VycmVudEVsZW1lbnQuZGF0YSgncGxhY2VtZW50JykpLmh0bWwoJycpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgLSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAqIEluaXRlZCBpbiB1c2VyL2VkaXQuYmxhZGUucGhwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCBwbGFjZW1lbnQgPSBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKTtcblxuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5oaWRlLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG5cbiAgICBsb2FkUGFydChQTEFDRU1FTlRfQVNTRVRTX1JPVVRFICsgJz9wbGFjZW1lbnQ9JyArIHBsYWNlbWVudCwgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgcGxhY2VtZW50KSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTG9hZCBwYXJ0IGZvciBlZGl0IHVzZXIgcGFnZVxuICovXG5mdW5jdGlvbiBsb2FkUGFydChhY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gJChyZXNwb25zZSk7XG4gICAgICAgICAgICBpdGVtcy5maW5kKCcubGlzdC10aHVtYm5haWwnKS5wb3BvdmVyKHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cIicgKyAkKHRoaXMpLmRhdGEoJ2Z1bGwnKSArICdcIj4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChpdGVtcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59IiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUREX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IG5laWdoYm9yIGFzIGFjdGl2ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFERF9ORUlHSEJPUiwgcmVzcCA9PiB7XG4gICAgICAgIGlmIChyZXNwLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNhZGQtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI25laWdoYm9yLXN0YXR1cy0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5odG1sKHJlc3AuZGF0YS5zdGF0dXNfdGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0RFTEVURV9ORUlHSEJPUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNldCBuZWlnaGJvciBhcyBkZWxldGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoREVMRVRFX05FSUdIQk9SLCByZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7U0VBUkNIX1VTRVJfQVNTRVRTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2VhcmNoIHVzZXIgYXNzZXRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0VBUkNIX1VTRVJfQVNTRVRTLCBkYXRhID0+IHtcbiAgICAgICAgJCgnI3NlYXJjaC1hc3NldHMtY29udGFpbmVyJykuaHRtbChkYXRhKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuaW1wb3J0IHtTVUJNSVRfVVNFUl9QQVJUX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTdWJtaXQgdXNlciBwYXJ0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTVUJNSVRfVVNFUl9QQVJUX0ZPUk0sIHJlc3AgPT4ge1xuICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcbiAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgIGZvcm0uZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgICAgIG5vdGlmeVN1Y2Nlc3MoJ1VzZXIgZGF0YSB1cGRhdGVkJyk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc2VhcmNoVXNlckFzc2V0cyBmcm9tIFwiLi9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0c1wiO1xuaW1wb3J0IHN1Ym1pdFVzZXJQYXJ0Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc3VibWl0VXNlclBhcnRGb3JtXCI7XG5pbXBvcnQgZGVsZXRlTmVpZ2hib3IgZnJvbSBcIi4vbGlzdGVuZXJzL2RlbGV0ZU5laWdoYm9yXCI7XG5pbXBvcnQgYWRkTmVpZ2hib3IgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZE5laWdoYm9yXCI7XG5pbXBvcnQgbG9hZFBsYWNlbWVudEFzc2V0cyBmcm9tIFwiLi9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgaGlkZVBsYWNlbWVudEFzc2V0cyBmcm9tIFwiLi9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgY2hhbmdlUGxhY2VtZW50IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudFwiO1xuaW1wb3J0IGNoYW5nZVJhbmRvbU5laWdoYm9ycyBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnNcIjtcbmltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLyoqXG4gKiBTZWFyY2ggdXNlciBhc3NldHMgbGlzdGVuZXJcbiAqL1xuc2VhcmNoVXNlckFzc2V0cygpO1xuXG4vKipcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybSBsaXN0ZW5lclxuICovXG5zdWJtaXRVc2VyUGFydEZvcm0oKTtcblxuLyoqXG4gKiBEZWxldGUgTmVpZ2hib3JcbiAqL1xuZGVsZXRlTmVpZ2hib3IoKTtcblxuLyoqXG4gKiBBZGQgTmVpZ2hib3JcbiAqL1xuYWRkTmVpZ2hib3IoKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIExvYWQgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmxvYWQtYXNzZXRzJywgbG9hZFBsYWNlbWVudEFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBwbGFjZW1lbnQgaW4gQWRkIEFzc2V0cyBibG9ja1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNwbGFjZW1lbnQtZm9yLWFzc2V0JywgY2hhbmdlUGxhY2VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjaXMtcmFuZG9tLW5laWdoYm9ycycsIGNoYW5nZVJhbmRvbU5laWdoYm9ycylcblxuICAgIC8qKlxuICAgICAqIEhpZGUgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXNzZXRzJywgaGlkZVBsYWNlbWVudEFzc2V0cyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9