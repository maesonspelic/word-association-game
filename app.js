const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('questions-display');

const questions = [
  {
    correct: 2,
    option: ['jury', 'assess'],
    quiz: ['value', 'estimate', 'evaluate'],
  },
  {
    correct: 2,
    option: ['trace', 'adjacent'],
    quiz: ['close', 'near', 'next'],
  },
  {
    correct: 2,
    option: ['mad', 'exotic'],
    quiz: ['foreign', 'national', 'ethnic'],
  },
  {
    correct: 1,
    option: ['forecast', 'sustainable'],
    quiz: ['assume', 'insight', 'weather'],
  },
  {
    correct: 2,
    option: ['charity', 'rapid'],
    quiz: ['fast', 'quick', 'prompt'],
  },
];

let score = 0;
scoreDisplay.textContent = score;

function populateQuestions() {
  questions.forEach(question => {
    const questionBox = document.createElement('div');
    questionBox.classList.add('question-box');
    questionDisplay.append(questionBox);
  });
}

populateQuestions();
