/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

/**
 * =================================================================
 * Task 0: Creating and Displaying a Student List
 * =================================================================
 */
// --- Data Creation ---
// Creates a first student instance, adhering to the Student interface.
var student1 = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
    location: 'Paris',
};
// Creates a second student instance.
var student2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York',
};
// Creates an array named `studentsList` and types it as an array of `Student` (Student[]).
// This ensures the array will only contain objects that conform to the interface.
var studentsList = [student1, student2];
// --- Rendering to the DOM with Vanilla JavaScript ---
// Creates a <table> element in the browser's memory.
var table = document.createElement('table');
// Creates a <tbody> element to hold the table rows.
var tbody = document.createElement('tbody');
// Appends the tbody inside the table.
table.appendChild(tbody);
// Loops over each student in the `studentsList` array.
studentsList.forEach(function (student) {
    // For each student, inserts a new row (<tr>) into the tbody.
    var row = tbody.insertRow();
    // Inserts a cell (<td>) for the first name into the row.
    var firstNameCell = row.insertCell();
    // Inserts a second cell (<td>) for the location.
    var locationCell = row.insertCell();
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0dBSUc7QUFjSCx3QkFBd0I7QUFFeEIsdUVBQXVFO0FBQ3ZFLElBQU0sUUFBUSxHQUFZO0lBQ3RCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLE9BQU87Q0FDcEIsQ0FBQztBQUVGLHFDQUFxQztBQUNyQyxJQUFNLFFBQVEsR0FBWTtJQUN0QixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLFVBQVU7Q0FDdkIsQ0FBQztBQUVGLDJGQUEyRjtBQUMzRixrRkFBa0Y7QUFDbEYsSUFBTSxZQUFZLEdBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFckQsdURBQXVEO0FBRXZELHFEQUFxRDtBQUNyRCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLG9EQUFvRDtBQUNwRCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTlDLHNDQUFzQztBQUN0QyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXpCLHVEQUF1RDtBQUN2RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBZ0I7SUFDcEMsNkRBQTZEO0lBQzdELElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5Qix5REFBeUQ7SUFDekQsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLGlEQUFpRDtJQUNqRCxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFdEMsK0RBQStEO0lBQy9ELGFBQWEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUM5QyxZQUFZLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFFNUMsc0VBQXNFO0lBQ3RFLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0lBQy9DLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNwQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztJQUM5QyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxrRkFBa0Y7QUFDbEYsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogVGFzayAwOiBDcmVhdGluZyBhbmQgRGlzcGxheWluZyBhIFN0dWRlbnQgTGlzdFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEBpbnRlcmZhY2UgU3R1ZGVudFxuICogRGVmaW5lcyB0aGUgc3RydWN0dXJlICh0aGUgXCJjb250cmFjdFwiKSBmb3IgYSBTdHVkZW50IG9iamVjdC5cbiAqIEV2ZXJ5IHN0dWRlbnQgbXVzdCBoYXZlIGEgZmlyc3QgbmFtZSwgbGFzdCBuYW1lLCBhZ2UsIGFuZCBsb2NhdGlvbi5cbiAqL1xuaW50ZXJmYWNlIFN0dWRlbnQge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbn1cblxuLy8gLS0tIERhdGEgQ3JlYXRpb24gLS0tXG5cbi8vIENyZWF0ZXMgYSBmaXJzdCBzdHVkZW50IGluc3RhbmNlLCBhZGhlcmluZyB0byB0aGUgU3R1ZGVudCBpbnRlcmZhY2UuXG5jb25zdCBzdHVkZW50MTogU3R1ZGVudCA9IHtcbiAgICBmaXJzdE5hbWU6ICdHdWlsbGF1bWUnLFxuICAgIGxhc3ROYW1lOiAnU2FsdmEnLFxuICAgIGFnZTogMjMsXG4gICAgbG9jYXRpb246ICdQYXJpcycsXG59O1xuXG4vLyBDcmVhdGVzIGEgc2Vjb25kIHN0dWRlbnQgaW5zdGFuY2UuXG5jb25zdCBzdHVkZW50MjogU3R1ZGVudCA9IHtcbiAgICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgICBsYXN0TmFtZTogJ0RvZScsXG4gICAgYWdlOiAyNSxcbiAgICBsb2NhdGlvbjogJ05ldyBZb3JrJyxcbn07XG5cbi8vIENyZWF0ZXMgYW4gYXJyYXkgbmFtZWQgYHN0dWRlbnRzTGlzdGAgYW5kIHR5cGVzIGl0IGFzIGFuIGFycmF5IG9mIGBTdHVkZW50YCAoU3R1ZGVudFtdKS5cbi8vIFRoaXMgZW5zdXJlcyB0aGUgYXJyYXkgd2lsbCBvbmx5IGNvbnRhaW4gb2JqZWN0cyB0aGF0IGNvbmZvcm0gdG8gdGhlIGludGVyZmFjZS5cbmNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbi8vIC0tLSBSZW5kZXJpbmcgdG8gdGhlIERPTSB3aXRoIFZhbmlsbGEgSmF2YVNjcmlwdCAtLS1cblxuLy8gQ3JlYXRlcyBhIDx0YWJsZT4gZWxlbWVudCBpbiB0aGUgYnJvd3NlcidzIG1lbW9yeS5cbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbi8vIENyZWF0ZXMgYSA8dGJvZHk+IGVsZW1lbnQgdG8gaG9sZCB0aGUgdGFibGUgcm93cy5cbmNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcblxuLy8gQXBwZW5kcyB0aGUgdGJvZHkgaW5zaWRlIHRoZSB0YWJsZS5cbnRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcblxuLy8gTG9vcHMgb3ZlciBlYWNoIHN0dWRlbnQgaW4gdGhlIGBzdHVkZW50c0xpc3RgIGFycmF5Llxuc3R1ZGVudHNMaXN0LmZvckVhY2goKHN0dWRlbnQ6IFN0dWRlbnQpOiB2b2lkID0+IHtcbiAgLy8gRm9yIGVhY2ggc3R1ZGVudCwgaW5zZXJ0cyBhIG5ldyByb3cgKDx0cj4pIGludG8gdGhlIHRib2R5LlxuICBjb25zdCByb3cgPSB0Ym9keS5pbnNlcnRSb3coKTtcbiAgLy8gSW5zZXJ0cyBhIGNlbGwgKDx0ZD4pIGZvciB0aGUgZmlyc3QgbmFtZSBpbnRvIHRoZSByb3cuXG4gIGNvbnN0IGZpcnN0TmFtZUNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAvLyBJbnNlcnRzIGEgc2Vjb25kIGNlbGwgKDx0ZD4pIGZvciB0aGUgbG9jYXRpb24uXG4gIGNvbnN0IGxvY2F0aW9uQ2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG5cbiAgLy8gRmlsbHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgY2VsbHMgd2l0aCB0aGUgc3R1ZGVudCdzIGRhdGEuXG4gIGZpcnN0TmFtZUNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcbiAgbG9jYXRpb25DZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5sb2NhdGlvbjtcblxuICAvLyBBZGRpbmcgc29tZSBzdHlsZXMgZm9yIGJldHRlciB2aXNpYmlsaXR5IChvcHRpb25hbCBidXQgcmVjb21tZW5kZWQpXG4gIGZpcnN0TmFtZUNlbGwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG4gIGZpcnN0TmFtZUNlbGwuc3R5bGUucGFkZGluZyA9ICc1cHgnO1xuICBsb2NhdGlvbkNlbGwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG4gIGxvY2F0aW9uQ2VsbC5zdHlsZS5wYWRkaW5nID0gJzVweCc7XG59KTtcblxuLy8gQXBwZW5kcyB0aGUgY29tcGxldGUgdGFibGUsIHdpdGggYWxsIGl0cyByb3dzLCB0byB0aGUgZG9jdW1lbnQncyBib2R5ICg8Ym9keT4pLlxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9