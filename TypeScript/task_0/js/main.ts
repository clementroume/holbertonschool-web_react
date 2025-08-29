interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student = {
	firstName: 'Guillaume',
	lastName: 'Salva',
	age: 23,
	location: 'Paris',
};

const student2: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 25,
	location: 'New York',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = tbody.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);