/**
 * =================================================================
 * PART 1: Interfaces for Teachers and Directors
 * =================================================================
 */

/**
 * Describes the structure of a Teacher object.
 * - `firstName` and `lastName` are read-only after initialization.
 * - `yearsOfExperience` is an optional property.
 * - The interface allows for additional, undefined properties (e.g., `contract`).
 */
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
  [key: string]: unknown;
}

/**
 * The Director interface inherits all properties from Teacher
 * and adds the `numberOfReports` property.
 */
interface Directors extends Teacher {
	numberOfReports: number;
}

/**
 * =================================================================
 * PART 2: Functions and their Interfaces
 * =================================================================
 */

/**
 * Describes the signature (the "shape") of the printTeacher function.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * A function that takes a first name and a last name, and returns a formatted string.
 * @param firstName - The teacher's first name.
 * @param lastName - The teacher's last name.
 * @returns The first letter of the first name, followed by a dot and the full last name (e.g., "J. Doe").
 */
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

/**
 * =================================================================
 * PART 3: Student Class and its Interfaces
 * =================================================================
 */

/**
 * Interface for the CONSTRUCTOR of the StudentClass.
 * It ensures the class can be instantiated with `new` and the correct arguments.
 */
interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

/**
 * Interface for an INSTANCE of the StudentClass.
 * It describes the public properties and methods of a student object.
 */
interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * A class representing a student.
 * It implements the IStudentClass interface to guarantee its structure.
 */
class StudentClass implements IStudentClass {

  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// --- Verification and Usage ---

// A verification line to ensure the StudentClass
// conforms to its constructor interface.
const StudentClassConstructor: IStudentClassConstructor = StudentClass;

// Creating a new instance
const student = new StudentClassConstructor('Jane', 'Smith');

console.log(student.displayName());      // Outputs: Jane
console.log(student.workOnHomework()); // Outputs: Currently working
