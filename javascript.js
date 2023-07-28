let playerSelection
let computerSelection
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

playGame = function(playerSelection, computerSelection){
    let p1 = playerSelection.toUpperCase();
    let cpu = computerSelection.toUpperCase();
    let decision = ""
    if(p1==cpu){
        decision = "It's a tie!"
    }
    else{
        if(p1=="ROCK" && cpu=="PAPER"){
            decision = "You lose! Paper beats rock :("
        }
        if(p1=="PAPER" && cpu=="SCISSORS"){
            decision = "You lose! Scissors beats paper :("
        }
        if(p1=="SCISSORS" && cpu=="ROCK"){
            decision ="You lose! Rock beats scissors :("
        }

        if(p1=="ROCK" && cpu=="SCISSORS"){
            decision = "You win! Rock beats scissors :D"
        }
        if(p1=="PAPER" && cpu=="ROCK"){
            decision = "You win! Paper beats rock :D"
        }
        if(p1=="SCISSORS" && cpu=="PAPER"){
            decision = "You win! Scissors beats paper :D"
        }   
    }
    return(decision);
}

game = function(){
    let score = 0;
    let rounds = 0;
    for(let i = 0; i < 5; i++){
        let pla = prompt("Rock, paper, or scissors?")
        let cpu = getComputerChoice()
        let oupt = playGame(pla, cpu)
        console.log(oupt)
        if(String(oupt).includes("win")){
            score++;
        }
        if(String(oupt).includes("tie")){
            rounds--
            i--
        }
        rounds++
        console.log(String(oupt) + "The current score is " + score +" : "+ (rounds - score))
    }
    if(score > 2){
        console.log("You Win the whole game! Good job")
    }
    else{
        console.log("You lose the match :( better luck next time!")
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function(e){
    let cpu = getComputerChoice();
    playGame("rock", cpu);
})
paper.addEventListener('click', function(e){
    let cpu = getComputerChoice();
    playGame("paper", cpu);
})
scissors.addEventListener('click', function(e){
    let cpu = getComputerChoice();
    playGame("scissors", cpu);
})

const results = document.querySelector(".results");
const div = document.createElement('div')

