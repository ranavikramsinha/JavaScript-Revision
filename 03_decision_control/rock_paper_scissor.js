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

    let result1;
      
    if(computerChoiceText === `👊 Rock`){
      result1 = 'Tie';
    }
    else if(computerChoiceText === `✋ Paper`){
      result1 = 'Computer Won'
    }
    else if(computerChoiceText === `✌️ Scissors`){
      result1 = 'User Won'
    }

    document.querySelector('#result').innerHTML = `You Chose 👊 Rock.</br>Computer Chose ${computerChoiceText}<br>The Result is: ${result1}`
}

function paper(){
    assignRandomChoice();
    assignComputerChoiceText();

    let result2;
    
    if(computerChoiceText === `✋ Paper`){
      result2 = 'Tie';
    }
    else if(computerChoiceText === `👊 Rock`){
      result2 = 'Computer Won'
    }
    else if(computerChoiceText === `✌️ Scissors`){
      result2 = 'User Won'
    }

    document.querySelector('#result').innerHTML = `You Chose ✋ Paper.</br>Computer Chose ${computerChoiceText}<br>The Result is: ${result2}`
}

function scissors(){
    assignRandomChoice();
    assignComputerChoiceText();

    let result3;
    
    if(computerChoiceText === `✌️ Scissors`){
      result3 = 'Tie';
    }
    else if(computerChoiceText === `👊 Rock`){
      result3 = 'Computer Won'
    }
    else if(computerChoiceText === `✋ Paper`){
      result3 = 'User Won'
    }

    document.querySelector('#result').innerHTML = `You Chose ✌️ Scissors.</br>Computer Chose ${computerChoiceText}<br>The Result is: ${result3}`
}