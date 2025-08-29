/**
 * =================================================================
 * Task 3: Main Application File
 * This file demonstrates how to use an external, untyped JavaScript module
 * in a type-safe way by leveraging an ambient declaration file.
 * =================================================================
 */

// A triple-slash directive that includes the ambient type declarations from crud.d.ts.
// This makes TypeScript aware of the types for the external `crud.js` module.
/// <reference path="crud.d.ts" />

// Import the shared types (RowID, RowElement) from our central interface file.
// This ensures consistency across the application.
import { RowID, RowElement } from './interface';

// Import the actual JavaScript code from crud.js.
// The `* as CRUD` syntax bundles all exports from the file into a single
// object named `CRUD`. This is crucial for the code to run in the browser.
import * as CRUD from './crud.js';

// --- Application Logic ---

// Create a new row object, ensuring it conforms to the RowElement interface.
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Call the insertRow function from the imported CRUD module.
// The return value is typed as RowID thanks to our declaration file.
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated version of the row.
// The spread syntax (`...row`) creates a shallow copy of the original `row` object,
// and we then add the `age` property to it.
const updatedRow: RowElement = { ...row, age: 23 };

// Call the update and delete functions from the CRUD module
// with the appropriate, type-checked arguments.
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

