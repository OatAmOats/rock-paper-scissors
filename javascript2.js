const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let plScore = document.querySelector('.plScore');
let cpScore = document.querySelector('.cpScore');
let playerScore = 0;
let cpuScore = 0;
let res = document.querySelector('.res');
let score = document.querySelector('.score');
let playerpic = document.querySelector("#playerpic");
let cpupic = document.querySelector("#cpupic");
let vs = document.querySelector("#vs");
let reset = document.querySelector(".reset");

getComputerChoice = function(){
    let ran = Math.floor(Math.random()*3) + 1;
    let choice = ""
    if(ran == 1){
        choice = "ROCK"
    }
    else if(ran == 2){
        choice = "SCISSORS"
    }
    else{
        choice ="PAPER"
    }
    return(choice)
}

changeImage = function(im, a){
    im.src=a;
}


playGame = function(playerSelection, computerSelection){
    let p1 = playerSelection.toUpperCase();
    let cpu = computerSelection.toUpperCase();
    let decision = ""
    if(p1==cpu){
        decision = "tie"
    }
    else{
        if(p1=="ROCK" && cpu=="PAPER"){
            decision = "loss"
        }
        if(p1=="PAPER" && cpu=="SCISSORS"){
            decision = "loss"
        }
        if(p1=="SCISSORS" && cpu=="ROCK"){
            decision ="loss"
        }

        if(p1=="ROCK" && cpu=="SCISSORS"){
            decision = "win"
        }
        if(p1=="PAPER" && cpu=="ROCK"){
            decision = "win"
        }
        if(p1=="SCISSORS" && cpu=="PAPER"){
            decision = "win"
        }   
    }
    return(decision);

    
}

updateScore = function(sco){
    let text = sco;
    if(text == "tie"){
        return;
    }
    if(text == "win"){
        playerScore += 1;
        plScore.textContent = playerScore;
       
    }
    if(text == "loss"){
        cpuScore += 1;
        cpScore.textContent = cpuScore;
        
    }

}


roundResult = function(sco, cpu){

    if(sco == "tie"){
        res.textContent = "It's a tie!"
    }
    if(sco == "win"){
        if(cpu == "ROCK"){
            res.textContent = "You win! Paper beats Rock!"
        }
        if(cpu == "PAPER"){
            res.textContent = "You win! Scissors beat Paper!"
        }
        if(cpu == "SCISSORS"){
            res.textContent = "You win! Rock beats Scissors!"
        }
    }
    if(sco == "loss"){
        if(cpu == "ROCK"){
            res.textContent = "You lose! Rock beats Scissors!"
        }
        if(cpu == "PAPER"){
            res.textContent = "You lose! Paper beats Rock!"
        }
        if(cpu == "SCISSORS"){
            res.textContent = "You lose! Scissors beats Paper!"
        }
    }
    if(playerScore == 5){
        res.textContent = "Congratulations, you won the game! Press reset score to play again!"
    }
    if(cpuScore == 5){
        res.textContent = "Aw man, you lost. Press reset score if you'd like to try again!"
    }
}


rock.addEventListener('click', function(e){
    if(cpuScore != 5 && playerScore != 5){
        let cpu = getComputerChoice();
        let sco = playGame("rock", cpu);
        updateScore(sco);
        roundResult(sco, cpu);
        console.log(sco + " computer picked " + cpu);
    }

})
paper.addEventListener('click', function(e){
    if(cpuScore != 5 && playerScore != 5){
        let cpu = getComputerChoice();
        let sco = playGame("paper", cpu);
        updateScore(sco);
        roundResult(sco, cpu);
        console.log(sco + " computer picked " + cpu);
    }
    
})
scissors.addEventListener('click', function(e){
    if(cpuScore != 5 && playerScore != 5){
        let cpu = getComputerChoice();
        let sco = playGame("scissors", cpu);
        updateScore(sco);
        roundResult(sco, cpu);
        console.log(sco + " computer picked " + cpu);
    }
    
})

reset.addEventListener('click', function(e){
    cpuScore=0;
    playerScore=0;
    plScore.textContent = playerScore;
    cpScore.textContent = cpuScore;
})


if(cpuScore != 5 && playerScore != 5){
}