/* a play option selects a random name from the classroom,
 *every time we click, it should restart and select another name.
 **if we could also exclude the ones that were already selected it would be perfect
 */

//Students Array

const studentsClass33 = [
  'Abdulrahman',
  'Alex',
  'Claudia',
  'Amar',
  'Eyad',
  'Fikert',
  'Hudawerdi',
  'Husam',
  'Lydia',
  'Mustafa',
  'Obada',
  'Reema',
  'Reshad',
  'Sobhi',
];
const topics = [
  'How corona affected you communication skills in general live ?',
  'How you manage your time between studding, own life, and work if you have?',
  'Life Challenges like quit bad habits or start working out or quit smoking whatever!',
  'Books and reading What kind of books do you like and why ?',
  'Music What kind of music do you like the most and have you played any instrument before or still playing it!',
  `How do you cope with digital studying or working in your life? Think about education, work…`,
  `How do you think time management works for you?`,
  `What is has been a dream project for you in life? Think about art, tech, cooking...`,
];
const questions = [
  {
    Quiz: `you can ask for help from one person that you select.`,
    quizURL: `https://nidaqg.github.io/Javascript-quiz-game/`,
    quizIconSrc: `https://www.drppt.org/wp-content/uploads/QUIZ-3D.png`,
  },
  {
    Quiz: `you can ask for help from two other companions!!`,
    quizURL: `https://javascriptquiz.com/`,
    quizIconSrc: `https://www.drppt.org/wp-content/uploads/QUIZ-3D.png`,
  },
];

// Variables selected from HTML document
const boardGame = document.querySelector('game-board');
const playBtn = document.querySelector('#play-btn');
// I had already made a style for the selected name to be displayed so
const playerText = document.querySelector('#student-name');
const getYourLuck = function () {
  playerText.innerHTML = randomStudent(studentsClass33, topics, questions);
};
//questions array
function randomStudent(allNames, allTopics, randomQuiz) {
  // select random name
  const randomName = allNames[Math.floor(Math.random() * allNames.length)];
  // select random topic
  const randomTopic = allTopics[Math.floor(Math.random() * allTopics.length)];
  // select random quiz
  const quiz = randomQuiz[Math.floor(Math.random() * randomQuiz.length)];
  return `lucky name is ${randomName} <br> your lucky topic is ${randomTopic} <br> Or you can pick a quiz ${quiz.Quiz} <br> You can begin the quiz by clicking on the link below <br> <a href="${quiz.quizURL}" target="_blank">Start the quiz and have fun!</a>`;
}
playBtn.addEventListener('click', getYourLuck);
