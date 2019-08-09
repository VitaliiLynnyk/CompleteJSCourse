class Question {
  constructor(question, answers) {
    this.question = question;
    this.answers = answers;
  }
}

class Answer {
  constructor(answer, correct) {
    this.answer = answer;
    this.correct = correct;
  }
}

const questionsText = ["What is your favorite store in the mall?",
                    "What's the longest you've gone without showering?",
                    "If you found $100 on the ground, what would you do with it?"];

const answersText = [ "Yes", "Nope", "Maybe"];

const answersArray = answersText.map(item => new Answer(item, Math.round(Math.random())));

const questionArray = new Array(3).fill(0).map(item => new Question(questionsText[Math.floor(Math.random()*questionsText.length)], answersArray));