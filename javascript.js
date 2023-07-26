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
    let dec = ""
    if(p1==cpu){
        dec = "It's a tie!"
    }
    else{
        if(p1=="ROCK" && cpu=="PAPER"){
            dec = "You lose! Paper beats rock :("
        }
        if(p1=="PAPER" && cpu=="SCISSORS"){
            dec = "You lose! Scissors beats paper :("
        }
        if(p1=="SCISSORS" && cpu=="ROCK"){
            dec ="You lose! Rock beats scissors :("
        }

        if(p1=="ROCK" && cpu=="SCISSORS"){
            dec = "You win! Rock beats scissors :D"
        }
        if(p1=="PAPER" && cpu=="ROCK"){
            dec = "You win! Paper beats rock :D"
        }
        if(p1=="SCISSORS" && cpu=="PAPER"){
            dec = "You win! Scissors beats paper :D"
        }   
    }
    return(dec);
   
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
            console.log(score)
        }
        if(String(oupt).includes("tie")){
            rounds--
            i--
        }
        rounds++
        console.log(String(oupt) + "The current score is " + score +": "+ (rounds - score))
    }
    if(score > 2){
        console.log("You Win the whole game! Good job")
    }
    else{
        console.log("You lose the match :( better luck next time!")
    }
}