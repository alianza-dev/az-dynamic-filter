//! az-dynamic-filter version 1.0.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (http://kentcdodds.com) (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["azDynamicFilter"] = factory(require("angular"));
	else
		root["azDynamicFilter"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angularFix = __webpack_require__(1);

	var _angularFix2 = _interopRequireDefault(_angularFix);

	var _azDynamicFilter = __webpack_require__(3);

	var _azDynamicFilter2 = _interopRequireDefault(_azDynamicFilter);

	var ngModuleName = 'azDynamicFilter';

	var ngModule = _angularFix2['default'].module(ngModuleName, []);
	(0, _azDynamicFilter2['default'])(ngModule);

	exports['default'] = ngModuleName;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var angular = __webpack_require__(2);

	/* istanbul ignore next */
	if (!angular.version) {
	  angular = window.angular;
	}
	exports['default'] = angular;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.filter('azDynamicFilter', ["$filter", function ($filter) {
	    return function azDynamicFilter(input, filterName) {
	      if (!filterName) {
	        return input;
	      }
	      // filterName can contain its arguments for convenience
	      var args = [];
	      getFilterArgs(filterName, args);
	      if (args.length === 1) {
	        args = Array.prototype.slice.call(arguments, 0);
	        args.splice(1, 1); // remove filter name
	      } else {
	        filterName = args[0];
	        args.splice(0, 1, input); // remove the filter name
	      }
	      var filter = $filter(filterName);
	      return filter.apply(null, args); // invoke filter with args received

	      function getFilterArgs(_x, _x2) {
	        var _again = true;

	        _function: while (_again) {
	          var str = _x,
	              matches = _x2;
	          startIndex = nextColon = endIndex = isQuoted = head = tail = undefined;
	          _again = false;

	          /* eslint complexity:[2, 7] */
	          if (!str) {
	            return matches;
	          }
	          var startIndex = 0;
	          var nextColon = str.indexOf(':');
	          var endIndex = str.length - (nextColon !== -1 ? 1 : 0);
	          var isQuoted = str.indexOf('"') === 0;
	          if (isQuoted) {
	            startIndex = 1;
	            endIndex = str.substr(1).indexOf('"') + 1;
	          } else if (nextColon > 0) {
	            endIndex = nextColon;
	          }
	          var head = str.substring(startIndex, endIndex).trim();
	          matches.push(head);
	          var tail = str.substring(head.length + (isQuoted ? 2 : 1));
	          if (tail.indexOf(':') === 0) {
	            tail = tail.substr(1);
	          }
	          _x = tail;
	          _x2 = matches;
	          _again = true;
	          continue _function;
	        }
	      }
	    };
	  }]);
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;