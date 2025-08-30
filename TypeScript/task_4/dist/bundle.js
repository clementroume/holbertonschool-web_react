/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/***/ (function() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Subject.ts" />
/**
 * Extends the Subjects namespace and Teacher interface for Cpp.
 */
var Subjects;
(function (Subjects) {
    // The Cpp class inherits from the base Subject class.
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            // We check if the teacher has a positive experience in teaching C.
            if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return 'No available teacher';
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));


/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/***/ (function() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Subject.ts" />
/**
 * Extends the Subjects namespace and Teacher interface for Java.
 */
var Subjects;
(function (Subjects) {
    // The Java class inherits from the base Subject class.
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            // Check for a positive experience in teaching Java.
            if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return 'No available teacher';
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));


/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/***/ (function() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Subject.ts" />
/**
 * Extends the Subjects namespace and Teacher interface for React.
 */
var Subjects;
(function (Subjects) {
    // The React class inherits from the base Subject class.
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            // Check for a positive experience in teaching React.
            if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return 'No available teacher';
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));


/***/ }),

/***/ "./js/subjects/Subject.ts":
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
/***/ (() => {


/// <reference path="Teacher.ts" />
/**
 * Defines the Subject class within the Subjects namespace.
 */
var Subjects;
(function (Subjects) {
    // This class can only be used if the Teacher interface from Teacher.ts is also part of the compilation.
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        /**
         * A method to set the teacher for this subject.
         * @param teacher - An object that must fit the Teacher interface.
         */
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));


/***/ }),

/***/ "./js/subjects/Teacher.ts":
/*!********************************!*\
  !*** ./js/subjects/Teacher.ts ***!
  \********************************/
/***/ (() => {




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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subjects_Teacher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Teacher */ "./js/subjects/Teacher.ts");
/* harmony import */ var _subjects_Teacher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subjects_Teacher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subjects_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Subject */ "./js/subjects/Subject.ts");
/* harmony import */ var _subjects_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subjects_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subjects_Cpp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_subjects_Java__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_subjects_React__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Main entry point to test the Subjects namespace and classes.
 */
// The import order is critical to ensure the files are executed
// in the correct dependency sequence at runtime.





// Triple-slash directives provide compile-time type-checking support.
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
// FIX: Remove 'export' keyword. This allows the namespaces from the
// imported files to correctly merge into a single 'Subjects' object
// in the final bundle's scope.
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};
// --- Cpp Subject ---
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// --- Java Subject ---
console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// --- React Subject ---
console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFFdkMsdUJBQXVCO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUV4Qyx3QkFBd0I7QUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QixLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9DcHAudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9KYXZhLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvUmVhY3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9TdWJqZWN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvVGVhY2hlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiU3ViamVjdC50c1wiIC8+XG4vKipcbiAqIEV4dGVuZHMgdGhlIFN1YmplY3RzIG5hbWVzcGFjZSBhbmQgVGVhY2hlciBpbnRlcmZhY2UgZm9yIENwcC5cbiAqL1xubmFtZXNwYWNlIFN1YmplY3RzIHtcbiAgLyoqXG4gICAqIFVzaW5nIGRlY2xhcmF0aW9uIG1lcmdpbmcsIHdlIGFkZCBhbiBvcHRpb25hbCBwcm9wZXJ0eSB0byB0aGUgVGVhY2hlciBpbnRlcmZhY2VcbiAgICogc3BlY2lmaWNhbGx5IGZvciB0aGUgQ3BwIHN1YmplY3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIGV4cGVyaWVuY2VUZWFjaGluZ0M/OiBudW1iZXI7XG4gIH1cblxuICAvLyBUaGUgQ3BwIGNsYXNzIGluaGVyaXRzIGZyb20gdGhlIGJhc2UgU3ViamVjdCBjbGFzcy5cbiAgZXhwb3J0IGNsYXNzIENwcCBleHRlbmRzIFN1YmplY3RzLlN1YmplY3Qge1xuICAgIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgQ3BwJztcbiAgICB9XG5cbiAgICBnZXRBdmFpbGFibGVUZWFjaGVyKCk6IHN0cmluZyB7XG4gICAgICAvLyBXZSBjaGVjayBpZiB0aGUgdGVhY2hlciBoYXMgYSBwb3NpdGl2ZSBleHBlcmllbmNlIGluIHRlYWNoaW5nIEMuXG4gICAgICBpZiAodGhpcy50ZWFjaGVyICYmIHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdDICYmIHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdDID4gMCkge1xuICAgICAgICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RoaXMudGVhY2hlci5maXJzdE5hbWV9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICAgIH1cbiAgfVxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlN1YmplY3QudHNcIiAvPlxuLyoqXG4gKiBFeHRlbmRzIHRoZSBTdWJqZWN0cyBuYW1lc3BhY2UgYW5kIFRlYWNoZXIgaW50ZXJmYWNlIGZvciBKYXZhLlxuICovXG5uYW1lc3BhY2UgU3ViamVjdHMge1xuICAvKipcbiAgICogRGVjbGFyYXRpb24gbWVyZ2luZyBhZGRzIHRoZSBvcHRpb25hbCBleHBlcmllbmNlVGVhY2hpbmdKYXZhIHByb3BlcnR5IHRvIHRoZSBUZWFjaGVyIGludGVyZmFjZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGVhY2hlciB7XG4gICAgZXhwZXJpZW5jZVRlYWNoaW5nSmF2YT86IG51bWJlcjtcbiAgfVxuXG4gIC8vIFRoZSBKYXZhIGNsYXNzIGluaGVyaXRzIGZyb20gdGhlIGJhc2UgU3ViamVjdCBjbGFzcy5cbiAgZXhwb3J0IGNsYXNzIEphdmEgZXh0ZW5kcyBTdWJqZWN0cy5TdWJqZWN0IHtcbiAgICBnZXRSZXF1aXJlbWVudHMoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnSGVyZSBpcyB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIEphdmEnO1xuICAgIH1cblxuICAgIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICAgIC8vIENoZWNrIGZvciBhIHBvc2l0aXZlIGV4cGVyaWVuY2UgaW4gdGVhY2hpbmcgSmF2YS5cbiAgICAgIGlmICh0aGlzLnRlYWNoZXIgJiYgdGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ0phdmEgJiYgdGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ0phdmEgPiAwKSB7XG4gICAgICAgIHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGhpcy50ZWFjaGVyLmZpcnN0TmFtZX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdObyBhdmFpbGFibGUgdGVhY2hlcic7XG4gICAgfVxuICB9XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiU3ViamVjdC50c1wiIC8+XG4vKipcbiAqIEV4dGVuZHMgdGhlIFN1YmplY3RzIG5hbWVzcGFjZSBhbmQgVGVhY2hlciBpbnRlcmZhY2UgZm9yIFJlYWN0LlxuICovXG5uYW1lc3BhY2UgU3ViamVjdHMge1xuICAvKipcbiAgICogRGVjbGFyYXRpb24gbWVyZ2luZyBhZGRzIHRoZSBvcHRpb25hbCBleHBlcmllbmNlVGVhY2hpbmdSZWFjdCBwcm9wZXJ0eSB0byB0aGUgVGVhY2hlciBpbnRlcmZhY2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIGV4cGVyaWVuY2VUZWFjaGluZ1JlYWN0PzogbnVtYmVyO1xuICB9XG5cbiAgLy8gVGhlIFJlYWN0IGNsYXNzIGluaGVyaXRzIGZyb20gdGhlIGJhc2UgU3ViamVjdCBjbGFzcy5cbiAgZXhwb3J0IGNsYXNzIFJlYWN0IGV4dGVuZHMgU3ViamVjdHMuU3ViamVjdCB7XG4gICAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ0hlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBSZWFjdCc7XG4gICAgfVxuXG4gICAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgICAgLy8gQ2hlY2sgZm9yIGEgcG9zaXRpdmUgZXhwZXJpZW5jZSBpbiB0ZWFjaGluZyBSZWFjdC5cbiAgICAgIGlmICh0aGlzLnRlYWNoZXIgJiYgdGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ1JlYWN0ICYmIHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdSZWFjdCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ05vIGF2YWlsYWJsZSB0ZWFjaGVyJztcbiAgICB9XG4gIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJUZWFjaGVyLnRzXCIgLz5cbi8qKlxuICogRGVmaW5lcyB0aGUgU3ViamVjdCBjbGFzcyB3aXRoaW4gdGhlIFN1YmplY3RzIG5hbWVzcGFjZS5cbiAqL1xubmFtZXNwYWNlIFN1YmplY3RzIHtcbiAgLy8gVGhpcyBjbGFzcyBjYW4gb25seSBiZSB1c2VkIGlmIHRoZSBUZWFjaGVyIGludGVyZmFjZSBmcm9tIFRlYWNoZXIudHMgaXMgYWxzbyBwYXJ0IG9mIHRoZSBjb21waWxhdGlvbi5cbiAgZXhwb3J0IGNsYXNzIFN1YmplY3Qge1xuICAgIC8vIEZJWDogQWRkZWQgdGhlIGRlZmluaXRlIGFzc2lnbm1lbnQgYXNzZXJ0aW9uICghKSB0byB0aGUgdGVhY2hlciBwcm9wZXJ0eS5cbiAgICAvLyBUaGlzIHRlbGxzIFR5cGVTY3JpcHQgdGhhdCB3ZSBhcmUgc3VyZSB0aGlzIHByb3BlcnR5IHdpbGwgYmUgYXNzaWduZWQgbGF0ZXIgKHZpYSBzZXRUZWFjaGVyKS5cbiAgICB0ZWFjaGVyITogVGVhY2hlcjtcblxuICAgIC8qKlxuICAgICAqIEEgbWV0aG9kIHRvIHNldCB0aGUgdGVhY2hlciBmb3IgdGhpcyBzdWJqZWN0LlxuICAgICAqIEBwYXJhbSB0ZWFjaGVyIC0gQW4gb2JqZWN0IHRoYXQgbXVzdCBmaXQgdGhlIFRlYWNoZXIgaW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHNldFRlYWNoZXIodGVhY2hlcjogVGVhY2hlcik6IHZvaWQge1xuICAgICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgICB9XG4gIH1cbn1cblxuIiwiLyoqXG4gKiBFc3RhYmxpc2hlcyB0aGUgYmFzZSBuYW1lc3BhY2UgYW5kIHRoZSBjb3JlIFRlYWNoZXIgaW50ZXJmYWNlLlxuICovXG5uYW1lc3BhY2UgU3ViamVjdHMge1xuICAvLyBgZXhwb3J0YCBtYWtlcyB0aGUgaW50ZXJmYWNlIGF2YWlsYWJsZSBvdXRzaWRlIG9mIHRoaXMgbmFtZXNwYWNlIGJsb2NrLlxuICBleHBvcnQgaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBNYWluIGVudHJ5IHBvaW50IHRvIHRlc3QgdGhlIFN1YmplY3RzIG5hbWVzcGFjZSBhbmQgY2xhc3Nlcy5cbiAqL1xuXG4vLyBUaGUgaW1wb3J0IG9yZGVyIGlzIGNyaXRpY2FsIHRvIGVuc3VyZSB0aGUgZmlsZXMgYXJlIGV4ZWN1dGVkXG4vLyBpbiB0aGUgY29ycmVjdCBkZXBlbmRlbmN5IHNlcXVlbmNlIGF0IHJ1bnRpbWUuXG5pbXBvcnQgXCIuL3N1YmplY3RzL1RlYWNoZXJcIjtcbmltcG9ydCBcIi4vc3ViamVjdHMvU3ViamVjdFwiO1xuaW1wb3J0IFwiLi9zdWJqZWN0cy9DcHBcIjtcbmltcG9ydCBcIi4vc3ViamVjdHMvSmF2YVwiO1xuaW1wb3J0IFwiLi9zdWJqZWN0cy9SZWFjdFwiO1xuXG4vLyBUcmlwbGUtc2xhc2ggZGlyZWN0aXZlcyBwcm92aWRlIGNvbXBpbGUtdGltZSB0eXBlLWNoZWNraW5nIHN1cHBvcnQuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9zdWJqZWN0cy9UZWFjaGVyLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3N1YmplY3RzL1N1YmplY3QudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvQ3BwLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3N1YmplY3RzL0phdmEudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvUmVhY3QudHNcIiAvPlxuXG4vLyBGSVg6IFJlbW92ZSAnZXhwb3J0JyBrZXl3b3JkLiBUaGlzIGFsbG93cyB0aGUgbmFtZXNwYWNlcyBmcm9tIHRoZVxuLy8gaW1wb3J0ZWQgZmlsZXMgdG8gY29ycmVjdGx5IG1lcmdlIGludG8gYSBzaW5nbGUgJ1N1YmplY3RzJyBvYmplY3Rcbi8vIGluIHRoZSBmaW5hbCBidW5kbGUncyBzY29wZS5cbmNvbnN0IGNwcCA9IG5ldyBTdWJqZWN0cy5DcHAoKTtcbmNvbnN0IGphdmEgPSBuZXcgU3ViamVjdHMuSmF2YSgpO1xuY29uc3QgcmVhY3QgPSBuZXcgU3ViamVjdHMuUmVhY3QoKTtcblxuY29uc3QgY1RlYWNoZXI6IFN1YmplY3RzLlRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGV4cGVyaWVuY2VUZWFjaGluZ0M6IDEwLFxufTtcblxuLy8gLS0tIENwcCBTdWJqZWN0IC0tLVxuY29uc29sZS5sb2coJ0MrKycpO1xuY3BwLnNldFRlYWNoZXIoY1RlYWNoZXIpO1xuY29uc29sZS5sb2coY3BwLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGNwcC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG4vLyAtLS0gSmF2YSBTdWJqZWN0IC0tLVxuY29uc29sZS5sb2coJ1xcbkphdmEnKTtcbmphdmEuc2V0VGVhY2hlcihjVGVhY2hlcik7XG5jb25zb2xlLmxvZyhqYXZhLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuLy8gLS0tIFJlYWN0IFN1YmplY3QgLS0tXG5jb25zb2xlLmxvZygnXFxuUmVhY3QnKTtcbnJlYWN0LnNldFRlYWNoZXIoY1RlYWNoZXIpO1xuY29uc29sZS5sb2cocmVhY3QuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2cocmVhY3QuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9