$(function(){//doc ready//

  var countplayer = 0;
  var countComputer = 0;

  $('#shifumi').click(function(){
    var playerChoice = $('#playerChoice').val(); // Détermine choix du joueur
    var hands = ['Rock','Paper','Scissors'];
    var rand = Math.floor(Math.random() * Math.floor(3));
    var ComputerChoice = hands[rand]; // On détermine le choix de l'ordinateur




    console.log(playerChoice + '/' + ComputerChoice);

    //ROCK
    if (playerChoice == 'Rock' && ComputerChoice == 'Rock'){
      swal.fire('DRAW');
    countplayer;
    countComputer;
    }
    if (playerChoice == 'Paper' && ComputerChoice == 'Rock'){
      swal.fire('You win!');
      countplayer++;
    }
    if(playerChoice == 'Scissors' && ComputerChoice == 'Rock'){
      swal.fire('You lose!');
      countComputer++;
    }


    //PAPER
    if (playerChoice == 'Rock' && ComputerChoice == 'Paper'){
      swal.fire('You win!');
      countplayer++;
    }
    if (playerChoice == 'Paper' && ComputerChoice == 'Paper'){
      swal.fire('DRAW');

    }
    if (playerChoice == 'Scissors' && ComputerChoice == 'Paper'){
      swal.fire('You lose!');
      countComputer++;
    }

    //SCISSORS
    if (playerChoice == 'Rock' && ComputerChoice == 'Scissors'){
      swal.fire('You win!');
      countplayer++;
    }
    if (playerChoice == 'Paper' && ComputerChoice == 'Scissors'){
      swal.fire('You lose!');
      countComputer++;
    }
    if (playerChoice == 'Scissors' && ComputerChoice == 'Scissors'){
      swal.fire('DRAW');
      
    }

console.log('Victoire(s) Player : ' + countplayer);
console.log('Victoire(s) Computer : ' + countComputer);

});



















});
//fin du doc ready
