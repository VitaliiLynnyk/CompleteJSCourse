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

function quize(array) {
  let questions = deepCopy(array);
  let score = 0;

  console.log(`\n\nStart Game`);
  console.log(`Please enter correct values`);

  while (questions.length) {
    let i = 0;
    let random = Math.floor(Math.random() * questions.length);
    const question = questions.splice(random, 1);

    console.log(`\n${question[0].question}`);
    question[0].answers.forEach(answer => {
      console.log(`${i++} ${answer.answer}`);
    });

    const promptAnswer = prompt(question[0].question);
    
    console.log("------------------------------------------");

    if (question[0].answers[promptAnswer] == null) {
      console.log(`Please enter correct value`);
      return;
    } else if (question[0].answers[promptAnswer].correct) {
      score++;
      console.log(`Yes, you are right 🥳  score = ${score}`);
    } else {
      console.log(`Sorry, try next 🤔 score = ${score}`);
    }

    console.log("------------------------------------------");
  }
  console.log(`\n\nCongratulation`);
  console.log(`🥳🥳🥳🥳🥳`);
  console.log(`score  = ${score}`);
}

document.querySelector(".main__item").addEventListener("click", ()=> quize(questionArray));