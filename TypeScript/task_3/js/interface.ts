/**
 * Defines a type alias for a row's unique identifier.
 * It is set to a number.
 */
export type RowID = number;

/**
 * Defines the structure for a row element in the database.
 * - `age` is an optional property.
 */
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}
