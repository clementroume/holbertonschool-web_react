/// <reference path="Subject.ts" />
/**
 * Extends the Subjects namespace and Teacher interface for Cpp.
 */
namespace Subjects {
  /**
   * Using declaration merging, we add an optional property to the Teacher interface
   * specifically for the Cpp subject.
   */
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // The Cpp class inherits from the base Subject class.
  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      // We check if the teacher has a positive experience in teaching C.
      if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
