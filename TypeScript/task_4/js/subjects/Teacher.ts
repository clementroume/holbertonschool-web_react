/**
 * Establishes the base namespace and the core Teacher interface.
 */
namespace Subjects {
  // `export` makes the interface available outside of this namespace block.
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
}