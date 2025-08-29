/**
 * =================================================================
 * Task 0: Creating and Displaying a Student List
 * =================================================================
 */

/**
 * @interface Student
 * Defines the structure (the "contract") for a Student object.
 * Every student must have a first name, last name, age, and location.
 */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// --- Data Creation ---

// Creates a first student instance, adhering to the Student interface.
const student1: Student = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
    location: 'Paris',
};

// Creates a second student instance.
const student2: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York',
};

// Creates an array named `studentsList` and types it as an array of `Student` (Student[]).
// This ensures the array will only contain objects that conform to the interface.
const studentsList: Student[] = [student1, student2];

// --- Rendering to the DOM with Vanilla JavaScript ---

// Creates a <table> element in the browser's memory.
const table = document.createElement('table');
// Creates a <tbody> element to hold the table rows.
const tbody = document.createElement('tbody');

// Appends the tbody inside the table.
table.appendChild(tbody);

// Loops over each student in the `studentsList` array.
studentsList.forEach((student: Student): void => {
  // For each student, inserts a new row (<tr>) into the tbody.
  const row = tbody.insertRow();
  // Inserts a cell (<td>) for the first name into the row.
  const firstNameCell = row.insertCell();
  // Inserts a second cell (<td>) for the location.
  const locationCell = row.insertCell();

  // Fills the text content of the cells with the student's data.
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Adding some styles for better visibility (optional but recommended)
  firstNameCell.style.border = '1px solid black';
  firstNameCell.style.padding = '5px';
  locationCell.style.border = '1px solid black';
  locationCell.style.padding = '5px';
});

// Appends the complete table, with all its rows, to the document's body (<body>).
document.body.appendChild(table);