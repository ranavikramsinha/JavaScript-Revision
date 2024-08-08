let score = {
  computer: 0,
  user: 0,
  tie: 0,
  updateScore: function(){
    document.querySelector('#score').innerHTML = `Score: Computer Won: ${this.computer}, User Won: ${this.user} & Tie: ${this.tie}`
  },
}

let computerChoice;
let computerChoiceText;

function assignRandomChoice(){
    computerChoice = Math.floor(Math.random() * 3);
}

function assignComputerChoiceText(){
    if(computerChoice === 0){
        computerChoiceText = `👊 Rock`;
      }
      else if(computerChoice === 1){
        computerChoiceText = `✋ Paper`;
      }
      else if(computerChoice === 2){
        computerChoiceText = `✌️ Scissors`;
      }
}

function rock(){
    assignRandomChoice();
    assignComputerChoiceText();
    let result = computeResult('👊 Rock', computerChoiceText);
    updateResult('👊 Rock', computerChoiceText, result);
}

function paper(){
    assignRandomChoice();
    assignComputerChoiceText();
    let result = computeResult('✋ Paper', computerChoiceText);
    updateResult('✋ Papers', computerChoiceText, result);
}

function scissors(){
    assignRandomChoice();
    assignComputerChoiceText();
    let result = computeResult('✌️ Scissors', computerChoiceText);
    updateResult('✌️ Scissors', computerChoiceText, result);
}

function updateResult(userChoice, computerChoiceText, result){
  document.querySelector('#result').innerHTML = `You Chose ${userChoice}.</br>Computer Chose ${computerChoiceText}<br>The Result is: ${result}`

  // alert(`You Chose ${userChoice}.</br>Computer Chose ${computerChoiceText}<br>The Result is: ${result}`)
}

function computeResult(userChoice, computerChoiceText){
  let result
      
    if(userChoice === computerChoiceText){
      result = 'Tie';
      score.tie++;
    }
    else if(computerChoiceText === `👊 Rock` && userChoice === `✌️ Scissors` || 
            computerChoiceText === `✌️ Scissors` && userChoice === `✋ Paper` ||
            computerChoiceText === `✋ Paper` && userChoice === `👊 Rock`){
      result = 'Computer Won'
      score.computer++;
    }
    else{
      result = 'User Won'
      score.user++;
    }

    score.updateScore();
    return result;
}