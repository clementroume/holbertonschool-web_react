/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),
/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)
/* harmony export */ });
/**
 * Sums the credits of two MajorCredits subjects.
 * @param subject1 The first MajorCredits subject.
 * @param subject2 The second MajorCredits subject.
 * @returns A new MajorCredits object with the summed credits.
 */
function sumMajorCredits(subject1, subject2) {
    // We return a new object with the summed credits and assert its type.
    return {
        credits: subject1.credits + subject2.credits,
    };
}
/**
 * Sums the credits of two MinorCredits subjects.
 * @param subject1 The first MinorCredits subject.
 * @param subject2 The second MinorCredits subject.
 * @returns A new MinorCredits object with the summed credits.
 */
function sumMinorCredits(subject1, subject2) {
    // The type assertion is necessary to apply the brand.
    return {
        credits: subject1.credits + subject2.credits,
    };
}
// --- Example Usage ---
var majorSubject1 = { credits: 3 };
var majorSubject2 = { credits: 4 };
var minorSubject1 = { credits: 1 };
var minorSubject2 = { credits: 2 };
var totalMajor = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Total Major Credits: ".concat(totalMajor.credits));
var totalMinor = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Total Minor Credits: ".concat(totalMinor.credits));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNZQTs7Ozs7R0FLRztBQUNJLFNBQVMsZUFBZSxDQUFDLFFBQXNCLEVBQUUsUUFBc0I7SUFDNUUsc0VBQXNFO0lBQ3RFLE9BQU87UUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTztLQUM3QixDQUFDO0FBQ3BCLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNJLFNBQVMsZUFBZSxDQUFDLFFBQXNCLEVBQUUsUUFBc0I7SUFDNUUsc0RBQXNEO0lBQ3RELE9BQU87UUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTztLQUM3QixDQUFDO0FBQ3BCLENBQUM7QUFFRCx3QkFBd0I7QUFFeEIsSUFBTSxhQUFhLEdBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBa0IsQ0FBQztBQUNuRSxJQUFNLGFBQWEsR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFrQixDQUFDO0FBRW5FLElBQU0sYUFBYSxHQUFpQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQWtCLENBQUM7QUFDbkUsSUFBTSxhQUFhLEdBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBa0IsQ0FBQztBQUVuRSxJQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQXdCLFVBQVUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDO0FBRTFELElBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBd0IsVUFBVSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogUmVwcmVzZW50cyBtYWpvciBjcmVkaXRzIHdpdGggYSB1bmlxdWUgYnJhbmQuXG4gKiBUaGUgYF9fYnJhbmRgIHByb3BlcnR5IGlzIGEgbm9uLWV4aXN0ZW50IHByb3BlcnR5IHVzZWQgcHVyZWx5IGZvclxuICogdGhlIHR5cGUgc3lzdGVtIHRvIGRpc3Rpbmd1aXNoIGl0IGZyb20gb3RoZXIgdHlwZXMgd2l0aCB0aGUgc2FtZSBzdHJ1Y3R1cmUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFqb3JDcmVkaXRzIHtcbiAgY3JlZGl0czogbnVtYmVyO1xuICBfX2JyYW5kOiAnTWFqb3JDcmVkaXRzJztcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIG1pbm9yIGNyZWRpdHMgd2l0aCBhIHVuaXF1ZSBicmFuZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNaW5vckNyZWRpdHMge1xuICBjcmVkaXRzOiBudW1iZXI7XG4gIF9fYnJhbmQ6ICdNaW5vckNyZWRpdHMnO1xufVxuXG4vKipcbiAqIFN1bXMgdGhlIGNyZWRpdHMgb2YgdHdvIE1ham9yQ3JlZGl0cyBzdWJqZWN0cy5cbiAqIEBwYXJhbSBzdWJqZWN0MSBUaGUgZmlyc3QgTWFqb3JDcmVkaXRzIHN1YmplY3QuXG4gKiBAcGFyYW0gc3ViamVjdDIgVGhlIHNlY29uZCBNYWpvckNyZWRpdHMgc3ViamVjdC5cbiAqIEByZXR1cm5zIEEgbmV3IE1ham9yQ3JlZGl0cyBvYmplY3Qgd2l0aCB0aGUgc3VtbWVkIGNyZWRpdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1NYWpvckNyZWRpdHMoc3ViamVjdDE6IE1ham9yQ3JlZGl0cywgc3ViamVjdDI6IE1ham9yQ3JlZGl0cyk6IE1ham9yQ3JlZGl0cyB7XG4gIC8vIFdlIHJldHVybiBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgc3VtbWVkIGNyZWRpdHMgYW5kIGFzc2VydCBpdHMgdHlwZS5cbiAgcmV0dXJuIHtcbiAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcbiAgfSBhcyBNYWpvckNyZWRpdHM7XG59XG5cbi8qKlxuICogU3VtcyB0aGUgY3JlZGl0cyBvZiB0d28gTWlub3JDcmVkaXRzIHN1YmplY3RzLlxuICogQHBhcmFtIHN1YmplY3QxIFRoZSBmaXJzdCBNaW5vckNyZWRpdHMgc3ViamVjdC5cbiAqIEBwYXJhbSBzdWJqZWN0MiBUaGUgc2Vjb25kIE1pbm9yQ3JlZGl0cyBzdWJqZWN0LlxuICogQHJldHVybnMgQSBuZXcgTWlub3JDcmVkaXRzIG9iamVjdCB3aXRoIHRoZSBzdW1tZWQgY3JlZGl0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bU1pbm9yQ3JlZGl0cyhzdWJqZWN0MTogTWlub3JDcmVkaXRzLCBzdWJqZWN0MjogTWlub3JDcmVkaXRzKTogTWlub3JDcmVkaXRzIHtcbiAgLy8gVGhlIHR5cGUgYXNzZXJ0aW9uIGlzIG5lY2Vzc2FyeSB0byBhcHBseSB0aGUgYnJhbmQuXG4gIHJldHVybiB7XG4gICAgY3JlZGl0czogc3ViamVjdDEuY3JlZGl0cyArIHN1YmplY3QyLmNyZWRpdHMsXG4gIH0gYXMgTWlub3JDcmVkaXRzO1xufVxuXG4vLyAtLS0gRXhhbXBsZSBVc2FnZSAtLS1cblxuY29uc3QgbWFqb3JTdWJqZWN0MTogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiAzIH0gYXMgTWFqb3JDcmVkaXRzO1xuY29uc3QgbWFqb3JTdWJqZWN0MjogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiA0IH0gYXMgTWFqb3JDcmVkaXRzO1xuXG5jb25zdCBtaW5vclN1YmplY3QxOiBNaW5vckNyZWRpdHMgPSB7IGNyZWRpdHM6IDEgfSBhcyBNaW5vckNyZWRpdHM7XG5jb25zdCBtaW5vclN1YmplY3QyOiBNaW5vckNyZWRpdHMgPSB7IGNyZWRpdHM6IDIgfSBhcyBNaW5vckNyZWRpdHM7XG5cbmNvbnN0IHRvdGFsTWFqb3IgPSBzdW1NYWpvckNyZWRpdHMobWFqb3JTdWJqZWN0MSwgbWFqb3JTdWJqZWN0Mik7XG5jb25zb2xlLmxvZyhgVG90YWwgTWFqb3IgQ3JlZGl0czogJHt0b3RhbE1ham9yLmNyZWRpdHN9YCk7XG5cbmNvbnN0IHRvdGFsTWlub3IgPSBzdW1NaW5vckNyZWRpdHMobWlub3JTdWJqZWN0MSwgbWlub3JTdWJqZWN0Mik7XG5jb25zb2xlLmxvZyhgVG90YWwgTWlub3IgQ3JlZGl0czogJHt0b3RhbE1pbm9yLmNyZWRpdHN9YCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9