/// <reference path="Subject.ts" />
/**
 * Extends the Subjects namespace and Teacher interface for Java.
 */
namespace Subjects {
  /**
   * Declaration merging adds the optional experienceTeachingJava property to the Teacher interface.
   */
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // The Java class inherits from the base Subject class.
  export class Java extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      // Check for a positive experience in teaching Java.
      if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
