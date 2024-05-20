let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    // rock, paper, scissors
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was draw. Play again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin, userChoice, compChoice)=>{
     if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
     }
     else{
        compScore++;
        compscorePara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
     }
}

const playGame=(userChoice)=>{
    //Generate computer choice
    const compChoice=gencompChoice();

    if(userChoice===compChoice){
        // draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper, scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            // rock, scissor
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            // rock, paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
    const userChoice=choice.getAttribute("id")
    playGame(userChoice);
    });
});