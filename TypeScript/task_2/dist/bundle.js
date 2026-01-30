/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

/**
 * =================================================================
 * PART 1: Role Definitions (Interfaces and Classes)
 * =================================================================
 */
// --- Classes ---
/**
 * Class representing a Director, implementing the DirectorInterface.
 */
var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return 'Working from home'; };
        this.getCoffeeBreak = function () { return 'Getting a coffee break'; };
        this.workDirectorTasks = function () { return 'Getting to director tasks'; };
    }
    return Director;
}());
/**
 * Class representing a Teacher, implementing the TeacherInterface.
 */
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return 'Cannot work from home'; };
        this.getCoffeeBreak = function () { return 'Cannot have a break'; };
        this.workTeacherTasks = function () { return 'Getting to work'; };
    }
    return Teacher;
}());
/**
 * =================================================================
 * PART 2: Utility Functions and Types
 * =================================================================
 */
/**
 * Creates an employee instance (Director or Teacher) based on the salary.
 * @param salary - The salary, which can be a number or a string.
 * @returns An instance of `Teacher` if the salary is a number less than 500,
 * otherwise an instance of `Director`.
 */
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
/**
 * A type predicate that checks if an employee is a Director.
 * The return type `employee is Director` is a "type guard" that allows TypeScript
 * to narrow the variable's type within conditional blocks.
 * @param employee - The employee to check (can be a Director or a Teacher).
 * @returns `true` if the employee is a Director, otherwise `false`.
 */
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
/**
 * Executes the appropriate work task based on the employee's role.
 * @param employee - The employee (Director or Teacher) who will perform the work.
 */
function executeWork(employee) {
    if (isDirector(employee)) {
        // Within this block, TypeScript knows `employee` is a Director.
        console.log(employee.workDirectorTasks());
    }
    else {
        // Within this block, TypeScript knows `employee` is a Teacher.
        console.log(employee.workTeacherTasks());
    }
}
/**
 * Teaches a class based on the specified subject.
 * @param todayClass - The subject to teach, must be either 'Math' or 'History'.
 * @returns A string describing the action.
 */
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}
/**
 * =================================================================
 * PART 3: Usage Examples
 * =================================================================
 */
console.log("--- createEmployee Tests ---");
console.log(createEmployee(200)); // Should log a Teacher object
console.log(createEmployee(1000)); // Should log a Director object
console.log(createEmployee('$500')); // Should log a Director object
console.log("\n--- executeWork Tests ---");
executeWork(createEmployee(200)); // Should log: Getting to work
executeWork(createEmployee(1000)); // Should log: Getting to director tasks
console.log("\n--- teachClass Tests ---");
console.log(teachClass('Math')); // Should log: Teaching Math
console.log(teachClass('History')); // Should log: Teaching History

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0dBSUc7QUFzQkgsa0JBQWtCO0FBRWxCOztHQUVHO0FBQ0g7SUFBQTtRQUNJLGlCQUFZLEdBQUcsY0FBYywwQkFBbUIsRUFBbkIsQ0FBbUIsQ0FBQztRQUNqRCxtQkFBYyxHQUFHLGNBQWMsK0JBQXdCLEVBQXhCLENBQXdCLENBQUM7UUFDeEQsc0JBQWlCLEdBQUcsY0FBYyxrQ0FBMkIsRUFBM0IsQ0FBMkIsQ0FBQztJQUNsRSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUM7QUFFRDs7R0FFRztBQUNIO0lBQUE7UUFDSSxpQkFBWSxHQUFHLGNBQWMsOEJBQXVCLEVBQXZCLENBQXVCLENBQUM7UUFDckQsbUJBQWMsR0FBRyxjQUFjLDRCQUFxQixFQUFyQixDQUFxQixDQUFDO1FBQ3JELHFCQUFnQixHQUFHLGNBQWMsd0JBQWlCLEVBQWpCLENBQWlCLENBQUM7SUFDdkQsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUVIOzs7OztHQUtHO0FBQ0gsU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDOUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUN6QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDeEI7SUFDRCxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7QUFDMUIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsVUFBVSxDQUFDLFFBQTRCO0lBQzdDLE9BQVEsUUFBcUIsQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLENBQUM7QUFDakUsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQzdDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzVCLGdFQUFnRTtRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7S0FDN0M7U0FBTTtRQUNULCtEQUErRDtRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7S0FDNUM7QUFDTCxDQUFDO0FBUUQ7Ozs7R0FJRztBQUNILFNBQVMsVUFBVSxDQUFDLFVBQW9CO0lBQ3BDLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUN2QixPQUFPLGVBQWUsQ0FBQztLQUMxQjtTQUFNO1FBQ0gsT0FBTyxrQkFBa0IsQ0FBQztLQUM3QjtBQUNMLENBQUM7QUFFRDs7OztHQUlHO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBTSw4QkFBOEI7QUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFLLCtCQUErQjtBQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUcsK0JBQStCO0FBRXRFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUMzQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBTSw4QkFBOEI7QUFDckUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUssd0NBQXdDO0FBRS9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQU8sNEJBQTRCO0FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBSSwrQkFBK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUEFSVCAxOiBSb2xlIERlZmluaXRpb25zIChJbnRlcmZhY2VzIGFuZCBDbGFzc2VzKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vLyAtLS0gSW50ZXJmYWNlcyAtLS1cblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIGV4cGVjdGVkIGFjdGlvbnMgb2YgYSBEaXJlY3Rvci5cbiAqL1xuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZztcblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuXHR3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGVzY3JpYmVzIHRoZSBleHBlY3RlZCBhY3Rpb25zIG9mIGEgVGVhY2hlci5cbiAqL1xuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuXHRnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG5cdHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG4vLyAtLS0gQ2xhc3NlcyAtLS1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBEaXJlY3RvciwgaW1wbGVtZW50aW5nIHRoZSBEaXJlY3RvckludGVyZmFjZS5cbiAqL1xuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lID0gKCk6IHN0cmluZyA9PiAnV29ya2luZyBmcm9tIGhvbWUnO1xuICAgIGdldENvZmZlZUJyZWFrID0gKCk6IHN0cmluZyA9PiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XG4gICAgd29ya0RpcmVjdG9yVGFza3MgPSAoKTogc3RyaW5nID0+ICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBUZWFjaGVyLCBpbXBsZW1lbnRpbmcgdGhlIFRlYWNoZXJJbnRlcmZhY2UuXG4gKi9cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUgPSAoKTogc3RyaW5nID0+ICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnO1xuICAgIGdldENvZmZlZUJyZWFrID0gKCk6IHN0cmluZyA9PiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XG4gICAgd29ya1RlYWNoZXJUYXNrcyA9ICgpOiBzdHJpbmcgPT4gJ0dldHRpbmcgdG8gd29yayc7XG59XG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFBBUlQgMjogVXRpbGl0eSBGdW5jdGlvbnMgYW5kIFR5cGVzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBlbXBsb3llZSBpbnN0YW5jZSAoRGlyZWN0b3Igb3IgVGVhY2hlcikgYmFzZWQgb24gdGhlIHNhbGFyeS5cbiAqIEBwYXJhbSBzYWxhcnkgLSBUaGUgc2FsYXJ5LCB3aGljaCBjYW4gYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBgVGVhY2hlcmAgaWYgdGhlIHNhbGFyeSBpcyBhIG51bWJlciBsZXNzIHRoYW4gNTAwLFxuICogb3RoZXJ3aXNlIGFuIGluc3RhbmNlIG9mIGBEaXJlY3RvcmAuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcblx0aWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xuICAgICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xufVxuXG4vKipcbiAqIEEgdHlwZSBwcmVkaWNhdGUgdGhhdCBjaGVja3MgaWYgYW4gZW1wbG95ZWUgaXMgYSBEaXJlY3Rvci5cbiAqIFRoZSByZXR1cm4gdHlwZSBgZW1wbG95ZWUgaXMgRGlyZWN0b3JgIGlzIGEgXCJ0eXBlIGd1YXJkXCIgdGhhdCBhbGxvd3MgVHlwZVNjcmlwdFxuICogdG8gbmFycm93IHRoZSB2YXJpYWJsZSdzIHR5cGUgd2l0aGluIGNvbmRpdGlvbmFsIGJsb2Nrcy5cbiAqIEBwYXJhbSBlbXBsb3llZSAtIFRoZSBlbXBsb3llZSB0byBjaGVjayAoY2FuIGJlIGEgRGlyZWN0b3Igb3IgYSBUZWFjaGVyKS5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW1wbG95ZWUgaXMgYSBEaXJlY3Rvciwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IGVtcGxveWVlIGlzIERpcmVjdG9yICB7XG4gICByZXR1cm4gKGVtcGxveWVlIGFzIERpcmVjdG9yKS53b3JrRGlyZWN0b3JUYXNrcyAhPT0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEV4ZWN1dGVzIHRoZSBhcHByb3ByaWF0ZSB3b3JrIHRhc2sgYmFzZWQgb24gdGhlIGVtcGxveWVlJ3Mgcm9sZS5cbiAqIEBwYXJhbSBlbXBsb3llZSAtIFRoZSBlbXBsb3llZSAoRGlyZWN0b3Igb3IgVGVhY2hlcikgd2hvIHdpbGwgcGVyZm9ybSB0aGUgd29yay5cbiAqL1xuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcikge1xuICAgIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuXHRcdC8vIFdpdGhpbiB0aGlzIGJsb2NrLCBUeXBlU2NyaXB0IGtub3dzIGBlbXBsb3llZWAgaXMgYSBEaXJlY3Rvci5cbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKSk7XG4gICAgfSBlbHNlIHtcblx0XHQvLyBXaXRoaW4gdGhpcyBibG9jaywgVHlwZVNjcmlwdCBrbm93cyBgZW1wbG95ZWVgIGlzIGEgVGVhY2hlci5cbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBzdHJpbmcgbGl0ZXJhbCB0eXBlIHRoYXQgY2FuIG9ubHkgYWNjZXB0ICdNYXRoJyBvciAnSGlzdG9yeScuXG4gKiBUaGlzIGVuc3VyZXMgdHlwZSBzYWZldHkgYW5kIHByZXZlbnRzIHR5cG9zLlxuICovXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xuXG4vKipcbiAqIFRlYWNoZXMgYSBjbGFzcyBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIHN1YmplY3QuXG4gKiBAcGFyYW0gdG9kYXlDbGFzcyAtIFRoZSBzdWJqZWN0IHRvIHRlYWNoLCBtdXN0IGJlIGVpdGhlciAnTWF0aCcgb3IgJ0hpc3RvcnknLlxuICogQHJldHVybnMgQSBzdHJpbmcgZGVzY3JpYmluZyB0aGUgYWN0aW9uLlxuICovXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcbiAgICBpZiAodG9kYXlDbGFzcyA9PT0gJ01hdGgnKSB7XG4gICAgICAgIHJldHVybiAnVGVhY2hpbmcgTWF0aCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdUZWFjaGluZyBIaXN0b3J5JztcbiAgICB9XG59XG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFBBUlQgMzogVXNhZ2UgRXhhbXBsZXNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc29sZS5sb2coXCItLS0gY3JlYXRlRW1wbG95ZWUgVGVzdHMgLS0tXCIpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7ICAgICAgLy8gU2hvdWxkIGxvZyBhIFRlYWNoZXIgb2JqZWN0XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7ICAgICAvLyBTaG91bGQgbG9nIGEgRGlyZWN0b3Igb2JqZWN0XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTsgICAvLyBTaG91bGQgbG9nIGEgRGlyZWN0b3Igb2JqZWN0XG5cbmNvbnNvbGUubG9nKFwiXFxuLS0tIGV4ZWN1dGVXb3JrIFRlc3RzIC0tLVwiKTtcbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpOyAgICAgIC8vIFNob3VsZCBsb2c6IEdldHRpbmcgdG8gd29ya1xuZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMTAwMCkpOyAgICAgLy8gU2hvdWxkIGxvZzogR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1xuXG5jb25zb2xlLmxvZyhcIlxcbi0tLSB0ZWFjaENsYXNzIFRlc3RzIC0tLVwiKTtcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7ICAgICAgIC8vIFNob3VsZCBsb2c6IFRlYWNoaW5nIE1hdGhcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7ICAgIC8vIFNob3VsZCBsb2c6IFRlYWNoaW5nIEhpc3RvcnkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=