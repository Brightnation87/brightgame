 let  score = 
  JSON.parse(localStorage.getItem('score')) ||    {
  wins: 0,
  losses: 0,
  ties: 0
  };
  
     updateScore();
     
    function playGame(playerMove) {
    const computerMove = pickComputerMove();
      
      let result = '';
      if (playerMove === '✌️') {
          if(computerMove === '✊')
         {
        result = 'You Lose.'; 
        }
        else if(computerMove === '🖐️')
         {
         result = 'You Win.';
        }
        else if(computerMove === '✌️')
        {
        result = 'Tie.';
        }
     }
     
     else if (playerMove === '🖐️') {
        if(computerMove === '✊')
         {
        result = 'You Win.'; 
        }
        else if(computerMove === '🖐️')
         {
         result = 'Tie.';
        }
        else if(computerMove === '✌️')
        {
        result = 'You Lose.';
        }
      }
        
     else if (playerMove === '✊') {
          if(computerMove === '✊')
         {
        result = 'Tie.'; 
        }
        else if(computerMove === '🖐️')
         {
         result = 'You Win.';
        }
        else if(computerMove === '✌️')
        {
        result = 'You Lose.';
        }
      }
      
     if(result === 'You Win.') {
        score.wins++;
      }else if (result === 'You Lose.') {
        score.losses++;
      }else if (result === 'Tie.') {
        score.ties++;
      }
        document.querySelector('.js-result')
         .innerHTML = result;
         
        document.querySelector('.js-move')
         .innerHTML = `You ${playerMove} ⚡  ${computerMove} Computer `
         
        localStorage.setItem('score', JSON.stringify(score));
        
       updateScore();
        
}


    function pickComputerMove() {
      const randomNumber = Math.random()
  let computerMove ='';
      
      if(randomNumber >= 0 && randomNumber < 1/3 ) {
        computerMove ='✊';
      }
      
      else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove ='🖐️';
        }
      
      else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove ='✌️';
      } 
      
      return computerMove;
    }
    
    function updateScore () {
      document.querySelector('.js-score')
      .innerHTML = `Wins:${score.wins}  Losses:${score.losses}  Ties:${score.ties}`
    }