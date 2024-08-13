document.addEventListener("DOMContentLoaded", function () {
  let score = {
    computer: 0,
    user: 0,
    tie: 0,
    updateScore: function () {
      this.saveScore();
      document.querySelector(
        "#score"
      ).innerHTML = `Score: Computer Won: ${this.computer}, User Won: ${this.user} & Tie: ${this.tie}`;
    },
    saveScore: function () {
      let scoreStr = JSON.stringify(this);
      localStorage.setItem("score", scoreStr);
      console.log(`Score Saved: ${scoreStr}`);
    },
  };

  function initialize() {
    let scoreStr = localStorage.getItem("score");

    if (scoreStr) {
      console.log(`Previous Score Found: ${scoreStr}`);
      let scoreVal = JSON.parse(scoreStr);
      score.computer = scoreVal.computer;
      score.user = scoreVal.user;
      score.tie = scoreVal.tie;
      score.updateScore();
    }
  }

  function reset() {
    score.computer = 0;
    score.user = 0;
    score.tie = 0;
    score.updateScore();
  }

  function assignRandomChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
  }

  function assignComputerChoiceText() {
    let computerChoice = assignRandomChoice();
    let computerChoiceText;

    if (computerChoice === 0) {
      computerChoiceText = `👊 Rock`;
    } else if (computerChoice === 1) {
      computerChoiceText = `✋ Paper`;
    } else if (computerChoice === 2) {
      computerChoiceText = `✌️ Scissors`;
    }

    return computerChoiceText;
  }

  function rock() {
    assignRandomChoice();
    let computerChoiceText = assignComputerChoiceText();
    let result = computeResult("👊 Rock", computerChoiceText);
    updateResult("👊 Rock", computerChoiceText, result);
  }

  function paper() {
    assignRandomChoice();
    let computerChoiceText = assignComputerChoiceText();
    let result = computeResult("✋ Paper", computerChoiceText);
    updateResult("✋ Papers", computerChoiceText, result);
  }

  function scissors() {
    assignRandomChoice();
    let computerChoiceText = assignComputerChoiceText();
    let result = computeResult("✌️ Scissors", computerChoiceText);
    updateResult("✌️ Scissors", computerChoiceText, result);
  }

  function updateResult(userChoice, computerChoiceText, result) {
    document.querySelector(
      "#result"
    ).innerHTML = `You Chose ${userChoice}.</br>Computer Chose ${computerChoiceText}<br>The Result is: ${result}`;

    // alert(`You Chose ${userChoice}.</br>Computer Chose ${computerChoiceText}<br>The Result is: ${result}`)
  }

  function computeResult(userChoice, computerChoiceText) {
    let result;

    if (userChoice === computerChoiceText) {
      result = "Tie";
      score.tie++;
    } else if (
      (computerChoiceText === "👊 Rock" && userChoice === "✌️ Scissors") ||
      (computerChoiceText === "✌️ Scissors" && userChoice === "✋ Paper") ||
      (computerChoiceText === "✋ Paper" && userChoice === "👊 Rock")
    ) {
      result = "Computer Won";
      score.computer++;
    } else {
      result = "User Won";
      score.user++;
    }

    score.updateScore();
    return result;
  }

  initialize();

  document.querySelector("#rockBtn").addEventListener("click", rock);
  document.querySelector("#paperBtn").addEventListener("click", paper);
  document.querySelector("#scissorsBtn").addEventListener("click", scissors);
  document.querySelector("#resetBtn").addEventListener("click", reset);
});
