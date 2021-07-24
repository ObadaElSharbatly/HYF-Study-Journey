/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function calculates the letter grade for the given array.
 * The `questionGrades` array expects an array of integers that represents the score the student got on that question.
 * These integers should be from 0 to 5 (every question is between 0 and 5).
 * If the student averages >= 4.5 then the student gets an A
 * If the student averages >= 3.5 and < 4.5 then the student gets a B
 * If the student averages >= 2.5 and < 3.5 then the student gets a C
 * If the student averages >= 1.5 and < 2.5 then the student gets a D
 * If the student averages < 1.5 then the student gets an F
 * 
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const calculateLetterGrade = (questionGrades = []) => {
  if (questionGrades.length === 0) {
    throw Error('Cannot calculate the average score of an empty array');
  }

  if (questionGrades.some(grade => grade < 0 || grade > 5)) {
    throw Error('There is invalid data in the questionGrades. A grade cannot be less than 0 or greater than 5');
  }

  const averageScore = questionGrades.reduce((sum, value) => {
    return sum + value;
  }, 0) / questionGrades.length;

  if (averageScore < 1.5) {
    return 'F';
  } else if (averageScore < 2.5) {
    return 'D';
  } else if (averageScore < 3.5) {
    return 'C';
  } else if (averageScore < 4.5) {
    return 'B';
  } else {
    return 'A';
  }
}
/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 */
describe('calculateLetterGrade', () => {
  test('If the student averages >= 4.5 then the student gets an A', () => {

    expect(calculateLetterGrade([5,4.5,4,4.5,4.5])).toBe("A");
  });

  test('If the student averages >= 3.5 and < 4.5 then the student gets a B', () => {

    expect(calculateLetterGrade([5,4,4,4.5,4.5])).toBe("B");
  });

  test('If the student averages >= 2.5 and < 3.5 then the student gets a C', () => {

    expect(calculateLetterGrade([5,3,2.6,4,2])).toBe("C");
  });

  test('If the student averages >= 1.5 and < 2.5 then the student gets a D', () => {

    expect(calculateLetterGrade([5,1.5,2.6,2,1])).toBe("D");
  });

  test('If the student averages < 1.5 then the student gets an F', () => {

    expect(calculateLetterGrade([1,1.5,2.2,1.2,1])).toBe("F");
  });
});