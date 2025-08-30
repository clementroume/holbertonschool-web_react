/// <reference path="Teacher.ts" />
/**
 * Defines the Subject class within the Subjects namespace.
 */
namespace Subjects {
  // This class can only be used if the Teacher interface from Teacher.ts is also part of the compilation.
  export class Subject {
    // This tells TypeScript that we are sure this property will be assigned later (via setTeacher).
    teacher!: Teacher;

    /**
     * A method to set the teacher for this subject.
     * @param teacher - An object that must fit the Teacher interface.
     */
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

