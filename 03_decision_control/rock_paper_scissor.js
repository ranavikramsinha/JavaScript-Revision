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
    let result = getResult('👊 Rock', computerChoiceText);
    updateResult('👊 Rock', computerChoiceText, result);
}

function paper(){
    assignRandomChoice();
    assignComputerChoiceText();
    let result = getResult('✋ Paper', computerChoiceText);
    updateResult('✋ Papers', computerChoiceText, result);
}

function scissors(){
    assignRandomChoice();
    assignComputerChoiceText();
    let result = getResult('✌️ Scissors', computerChoiceText);
    updateResult('✌️ Scissors', computerChoiceText, result);
}

function updateResult(userChoice, computerChoiceText, result){
  document.querySelector('#result').innerHTML = `You Chose ${userChoice}.</br>Computer Chose ${computerChoiceText}<br>The Result is: ${result}`

  // alert(`You Chose ${userChoice}.</br>Computer Chose ${computerChoiceText}<br>The Result is: ${result}`)
}

function getResult(userChoice, computerChoiceText){
  let result
      
    if(userChoice === computerChoiceText){
      result = 'Tie';
    }
    else if(computerChoiceText === `👊 Rock` && userChoice === `✌️ Scissors` || 
            computerChoiceText === `✌️ Scissors` && userChoice === `✋ Paper` ||
            computerChoiceText === `✋ Paper` && userChoice === `👊 Rock`){
      result = 'Computer Won'
    }
    else{
      result = 'User Won'
    }

    return result;
}