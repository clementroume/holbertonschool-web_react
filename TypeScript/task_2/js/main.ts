/**
 * =================================================================
 * PART 1: Role Definitions (Interfaces and Classes)
 * =================================================================
 */

// --- Interfaces ---

/**
 * Describes the expected actions of a Director.
 */
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

/**
 * Describes the expected actions of a Teacher.
 */
interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// --- Classes ---

/**
 * Class representing a Director, implementing the DirectorInterface.
 */
class Director implements DirectorInterface {
    workFromHome = (): string => 'Working from home';
    getCoffeeBreak = (): string => 'Getting a coffee break';
    workDirectorTasks = (): string => 'Getting to director tasks';
}

/**
 * Class representing a Teacher, implementing the TeacherInterface.
 */
class Teacher implements TeacherInterface {
    workFromHome = (): string => 'Cannot work from home';
    getCoffeeBreak = (): string => 'Cannot have a break';
    workTeacherTasks = (): string => 'Getting to work';
}

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
function createEmployee(salary: number | string): Director | Teacher {
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
function isDirector(employee: Director | Teacher): employee is Director  {
   return (employee as Director).workDirectorTasks !== undefined;
}

/**
 * Executes the appropriate work task based on the employee's role.
 * @param employee - The employee (Director or Teacher) who will perform the work.
 */
function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
		// Within this block, TypeScript knows `employee` is a Director.
        console.log(employee.workDirectorTasks());
    } else {
		// Within this block, TypeScript knows `employee` is a Teacher.
        console.log(employee.workTeacherTasks());
    }
}

/**
 * A string literal type that can only accept 'Math' or 'History'.
 * This ensures type safety and prevents typos.
 */
type Subjects = 'Math' | 'History';

/**
 * Teaches a class based on the specified subject.
 * @param todayClass - The subject to teach, must be either 'Math' or 'History'.
 * @returns A string describing the action.
 */
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

/**
 * =================================================================
 * PART 3: Usage Examples
 * =================================================================
 */

console.log("--- createEmployee Tests ---");
console.log(createEmployee(200));      // Should log a Teacher object
console.log(createEmployee(1000));     // Should log a Director object
console.log(createEmployee('$500'));   // Should log a Director object

console.log("\n--- executeWork Tests ---");
executeWork(createEmployee(200));      // Should log: Getting to work
executeWork(createEmployee(1000));     // Should log: Getting to director tasks

console.log("\n--- teachClass Tests ---");
console.log(teachClass('Math'));       // Should log: Teaching Math
console.log(teachClass('History'));    // Should log: Teaching History