/**
 * Represents major credits with a unique brand.
 * The `__brand` property is a non-existent property used purely for
 * the type system to distinguish it from other types with the same structure.
 */
export interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

/**
 * Represents minor credits with a unique brand.
 */
export interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

/**
 * Sums the credits of two MajorCredits subjects.
 * @param subject1 The first MajorCredits subject.
 * @param subject2 The second MajorCredits subject.
 * @returns A new MajorCredits object with the summed credits.
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  // We return a new object with the summed credits and assert its type.
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

/**
 * Sums the credits of two MinorCredits subjects.
 * @param subject1 The first MinorCredits subject.
 * @param subject2 The second MinorCredits subject.
 * @returns A new MinorCredits object with the summed credits.
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  // The type assertion is necessary to apply the brand.
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}

// --- Example Usage ---

const majorSubject1: MajorCredits = { credits: 3 } as MajorCredits;
const majorSubject2: MajorCredits = { credits: 4 } as MajorCredits;

const minorSubject1: MinorCredits = { credits: 1 } as MinorCredits;
const minorSubject2: MinorCredits = { credits: 2 } as MinorCredits;

const totalMajor = sumMajorCredits(majorSubject1, majorSubject2);
console.log(`Total Major Credits: ${totalMajor.credits}`);

const totalMinor = sumMinorCredits(minorSubject1, minorSubject2);
console.log(`Total Minor Credits: ${totalMinor.credits}`);