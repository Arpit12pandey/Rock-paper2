let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genComputerChoice = ()=>{
const options = ["rock","paper", "scissor"];
 const randIdx=Math.floor(Math.random()*3);
 return options[randIdx];
}
const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        msg.innerText= "You Win!";
        msg.style.backgroundColor="green";
        console.log('you win!');
        userScorePara.innerText=userScore
    }
    else{
        compScore++;
        msg.innerText= "You Lose";
        msg.style.backgroundColor="red";
        console.log("you lose");
        compScorePara.innerText=compScore
    }
}
function drawGame(){
    msg.innerText= "Game was drawn. PLay again";
    msg.style.backgroundColor="#081b31";
console.log("game was drawn");
}
const playGame = (userChoice)=>{
//GENERATE COMPUTER CHOICE
const compChoice=genComputerChoice();
if(userChoice===compChoice){
    //DrawGame
    drawGame();

}
else{
    let userWin=true;
    if(userChoice==="rock"){
userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
}
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
     console.log("choice was clicked");
     playGame(userChoice);
    })
})