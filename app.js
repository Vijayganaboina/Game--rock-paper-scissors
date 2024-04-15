let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
//6- accesing the text element
const msg = document.querySelector("#msg");
//7- accessing the score paras
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//3 - generating the computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//5 - which will decide the winner
const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `you lost.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

//4 - function for draw game
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was draw.play again.";
    msg.style.backgroundColor = "#081b31";
}

//2 - comparing the two choices and deciding the winner 
const playGame = (userChoice)=> {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
       drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
          userWin = compChoice === "paper" ? false : true ;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}
//1 - creating the eventlisteners for each choice with the help of forEach
choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});