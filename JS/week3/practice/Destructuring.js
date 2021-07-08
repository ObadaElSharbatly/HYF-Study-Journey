//////////// for Objects ////////////

const students = {
    SName : 'Fadi',
    classP : 'primery',
    rating: 'smart',
    grade : 0
}
const {SName, classP, rating, grade} = students;
console.log(SName);
console.log(classP);
console.log(rating);
console.log(grade);


const {SName: studentName,
     rating: ratingOfStudent,
      grade: gradeOfHim,
       classP: whichClass} = students;

console.log(studentName);
console.log(whichClass);
console.log(ratingOfStudent);
console.log(gradeOfHim);

//////////// for Arrays ////////////

const finishExam = ["Mohammed", "HTML", 105];
const [studentName2, material , result] = finishExam;

const giveStatement = (studentName, modul, grade) => {
    console.log(`Hi ${studentName}, You ${grade > 60 ? "passed" : "field in"} ${modul}. And your result is ${grade/120*100}%`);
}
giveStatement(studentName2, material, result);

//////////// for Arrays ////////////
const studentResult = ['Mahmood', 'React', 9];

const showResult = (name, subject, grade) => {
  console.log(`Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed in'} ${subject}`);
}
const [name, subject = 'JavaScript', mark] = studentResult;

showResult(name, subject, grade);