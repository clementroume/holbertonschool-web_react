/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/crud.js":
/*!********************!*\
  !*** ./js/crud.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteRow: () => (/* binding */ deleteRow),
/* harmony export */   insertRow: () => (/* binding */ insertRow),
/* harmony export */   updateRow: () => (/* binding */ updateRow)
/* harmony export */ });
function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ "./js/crud.js");
/**
 * =================================================================
 * Task 3: Main Application File
 * This file demonstrates how to use an external, untyped JavaScript module
 * in a type-safe way by leveraging an ambient declaration file.
 * =================================================================
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Import the actual JavaScript code from crud.js.
// The `* as CRUD` syntax bundles all exports from the file into a single
// object named `CRUD`. This is crucial for the code to run in the browser.

// --- Application Logic ---
// Create a new row object, ensuring it conforms to the RowElement interface.
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
// Call the insertRow function from the imported CRUD module.
// The return value is typed as RowID thanks to our declaration file.
var newRowID = _crud_js__WEBPACK_IMPORTED_MODULE_0__.insertRow(row);
// Create an updated version of the row.
// The spread syntax (`...row`) creates a shallow copy of the original `row` object,
// and we then add the `age` property to it.
var updatedRow = __assign(__assign({}, row), { age: 23 });
// Call the update and delete functions from the CRUD module
// with the appropriate, type-checked arguments.
_crud_js__WEBPACK_IMPORTED_MODULE_0__.updateRow(newRowID, updatedRow);
_crud_js__WEBPACK_IMPORTED_MODULE_0__.deleteRow(newRowID);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRCQUE0QixNQUFNOztBQUVsQztBQUNBOzs7Ozs7O1VDZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztBQVVILGtEQUFrRDtBQUNsRCx5RUFBeUU7QUFDekUsMkVBQTJFO0FBQ3pDO0FBRWxDLDRCQUE0QjtBQUU1Qiw2RUFBNkU7QUFDN0UsSUFBTSxHQUFHLEdBQWU7SUFDdEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsUUFBUSxFQUFFLE9BQU87Q0FDbEIsQ0FBQztBQUVGLDZEQUE2RDtBQUM3RCxxRUFBcUU7QUFDckUsSUFBTSxRQUFRLEdBQVUsK0NBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU1Qyx3Q0FBd0M7QUFDeEMsb0ZBQW9GO0FBQ3BGLDRDQUE0QztBQUM1QyxJQUFNLFVBQVUseUJBQW9CLEdBQUcsS0FBRSxHQUFHLEVBQUUsRUFBRSxHQUFFLENBQUM7QUFFbkQsNERBQTREO0FBQzVELGdEQUFnRDtBQUNoRCwrQ0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyQywrQ0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9jcnVkLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpbnNlcnRSb3cocm93KSB7XG4gIGNvbnNvbGUubG9nKCdJbnNlcnQgcm93Jywgcm93KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTAwMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUm93KHJvd0lkKSB7XG4gIGNvbnNvbGUubG9nKCdEZWxldGUgcm93IGlkJywgcm93SWQpO1xuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb3cocm93SWQsIHJvdykge1xuICBjb25zb2xlLmxvZyhgVXBkYXRlIHJvdyAke3Jvd0lkfWAsIHJvdyk7XG5cbiAgcmV0dXJuIHJvd0lkO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBUYXNrIDM6IE1haW4gQXBwbGljYXRpb24gRmlsZVxuICogVGhpcyBmaWxlIGRlbW9uc3RyYXRlcyBob3cgdG8gdXNlIGFuIGV4dGVybmFsLCB1bnR5cGVkIEphdmFTY3JpcHQgbW9kdWxlXG4gKiBpbiBhIHR5cGUtc2FmZSB3YXkgYnkgbGV2ZXJhZ2luZyBhbiBhbWJpZW50IGRlY2xhcmF0aW9uIGZpbGUuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8vIEEgdHJpcGxlLXNsYXNoIGRpcmVjdGl2ZSB0aGF0IGluY2x1ZGVzIHRoZSBhbWJpZW50IHR5cGUgZGVjbGFyYXRpb25zIGZyb20gY3J1ZC5kLnRzLlxuLy8gVGhpcyBtYWtlcyBUeXBlU2NyaXB0IGF3YXJlIG9mIHRoZSB0eXBlcyBmb3IgdGhlIGV4dGVybmFsIGBjcnVkLmpzYCBtb2R1bGUuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY3J1ZC5kLnRzXCIgLz5cblxuLy8gSW1wb3J0IHRoZSBzaGFyZWQgdHlwZXMgKFJvd0lELCBSb3dFbGVtZW50KSBmcm9tIG91ciBjZW50cmFsIGludGVyZmFjZSBmaWxlLlxuLy8gVGhpcyBlbnN1cmVzIGNvbnNpc3RlbmN5IGFjcm9zcyB0aGUgYXBwbGljYXRpb24uXG5pbXBvcnQgeyBSb3dJRCwgUm93RWxlbWVudCB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuLy8gSW1wb3J0IHRoZSBhY3R1YWwgSmF2YVNjcmlwdCBjb2RlIGZyb20gY3J1ZC5qcy5cbi8vIFRoZSBgKiBhcyBDUlVEYCBzeW50YXggYnVuZGxlcyBhbGwgZXhwb3J0cyBmcm9tIHRoZSBmaWxlIGludG8gYSBzaW5nbGVcbi8vIG9iamVjdCBuYW1lZCBgQ1JVRGAuIFRoaXMgaXMgY3J1Y2lhbCBmb3IgdGhlIGNvZGUgdG8gcnVuIGluIHRoZSBicm93c2VyLlxuaW1wb3J0ICogYXMgQ1JVRCBmcm9tICcuL2NydWQuanMnO1xuXG4vLyAtLS0gQXBwbGljYXRpb24gTG9naWMgLS0tXG5cbi8vIENyZWF0ZSBhIG5ldyByb3cgb2JqZWN0LCBlbnN1cmluZyBpdCBjb25mb3JtcyB0byB0aGUgUm93RWxlbWVudCBpbnRlcmZhY2UuXG5jb25zdCByb3c6IFJvd0VsZW1lbnQgPSB7XG4gIGZpcnN0TmFtZTogXCJHdWlsbGF1bWVcIixcbiAgbGFzdE5hbWU6IFwiU2FsdmFcIlxufTtcblxuLy8gQ2FsbCB0aGUgaW5zZXJ0Um93IGZ1bmN0aW9uIGZyb20gdGhlIGltcG9ydGVkIENSVUQgbW9kdWxlLlxuLy8gVGhlIHJldHVybiB2YWx1ZSBpcyB0eXBlZCBhcyBSb3dJRCB0aGFua3MgdG8gb3VyIGRlY2xhcmF0aW9uIGZpbGUuXG5jb25zdCBuZXdSb3dJRDogUm93SUQgPSBDUlVELmluc2VydFJvdyhyb3cpO1xuXG4vLyBDcmVhdGUgYW4gdXBkYXRlZCB2ZXJzaW9uIG9mIHRoZSByb3cuXG4vLyBUaGUgc3ByZWFkIHN5bnRheCAoYC4uLnJvd2ApIGNyZWF0ZXMgYSBzaGFsbG93IGNvcHkgb2YgdGhlIG9yaWdpbmFsIGByb3dgIG9iamVjdCxcbi8vIGFuZCB3ZSB0aGVuIGFkZCB0aGUgYGFnZWAgcHJvcGVydHkgdG8gaXQuXG5jb25zdCB1cGRhdGVkUm93OiBSb3dFbGVtZW50ID0geyAuLi5yb3csIGFnZTogMjMgfTtcblxuLy8gQ2FsbCB0aGUgdXBkYXRlIGFuZCBkZWxldGUgZnVuY3Rpb25zIGZyb20gdGhlIENSVUQgbW9kdWxlXG4vLyB3aXRoIHRoZSBhcHByb3ByaWF0ZSwgdHlwZS1jaGVja2VkIGFyZ3VtZW50cy5cbkNSVUQudXBkYXRlUm93KG5ld1Jvd0lELCB1cGRhdGVkUm93KTtcbkNSVUQuZGVsZXRlUm93KG5ld1Jvd0lEKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9