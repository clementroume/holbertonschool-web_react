/// <reference path="Subject.ts" />
/**
 * Extends the Subjects namespace and Teacher interface for React.
 */
namespace Subjects {
  /**
   * Declaration merging adds the optional experienceTeachingReact property to the Teacher interface.
   */
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // The React class inherits from the base Subject class.
  export class React extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      // Check for a positive experience in teaching React.
      if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
