// Import the shared types from the interface file.
import { RowID, RowElement } from './interface';

// Declare a module whose name exactly matches the import path used in main.ts.
// This tells TypeScript: "When you see an import for './crud.js', apply these types."
declare module './crud.js' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
