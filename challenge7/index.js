class Question {
  constructor(question, answers) {
    this.question = question;
    this.answers = answers;
  }
}

class Answer {
  constructor(answer, correct = 0) {
    this.answer = answer;
    this.correct = correct;
  }
}

const questionsText = ["What is your favorite store in the mall?",
  "What's the longest you've gone without showering?",
  "If you found $100 on the ground, what would you do with it?",
  "Are you smarter than your parents?",
  "Do you play any sports?",
  "What do you miss most about being a kid?"];

const answersText = ["Yes", "Nope", "Maybe"];

const answersArray = answersText.map(item => new Answer(item));

const questionArray = questionsText.map(qoute => new Question(qoute, deepCopy(answersArray)))
  .map(question => {
    const random = Math.floor(Math.random() * question.answers.length);

    question.answers[random].correct = 1;
    return question;
  });

function deepCopy(obj) {
  let out, v, key;
  out = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    v = obj[key];
    out[key] = (typeof v === "object" && v !== null) ? deepCopy(v) : v;
  }
  return out;
}
