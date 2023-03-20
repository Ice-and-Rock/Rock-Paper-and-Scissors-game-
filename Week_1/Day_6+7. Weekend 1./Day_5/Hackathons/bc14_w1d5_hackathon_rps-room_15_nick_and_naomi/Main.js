console.log("hackathon1_Lets_Go")

console.log("We're ready!")

// Open the game page - alert - 
// Prompt the user to make a selection of 3 options 
// Prompt the user to confirm their selection 
// Write a code to select from the same 3 options 
// Compare the selection of the user and the selection of the code 
// Determine who is the winner with an alert(using the specified rules)
// Update the score between the user and the computer 
// When the score reaches 10, the game is over - alert -


let playerMove = "rock" ;
let computerMove = "rock" ; 

let prompt ("What is your move?") 

function getWinner (playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "scissors") {
        return 1; 
    } ;
    if (playerMove === "scissors" && computerMove === "paper") {
        return 1; 
    } 
    if (playerMove === "paper" && computerMove === "rock") {
        return 1; 
    } ;


        if (computerMove === "rock" && playerMove === "scissors") {
            return -1; 
        } 
        if (computerMove === "scissors" && playerMove === "paper") {
            return -1; 
        } 
        if (computerMove === "paper" && playerMove === "rock") {
            return -1; 
        } ;
            
            if (computerMove === "rock" && playerMove === "rock") {
                return 0; 
            } 
            if (computerMove === "scissors" && playerMove === "scissors") {
                return 0;
            } 
            if (computerMove === "paper" && playerMove === "peper") {
                return 0;
            } ;
        }

let result = getWinner ("paper", "scissors")
console.log(result); 


    
    
        
         
/*
let playerMove = ["rock", "paper", "scissors"];
let computerMove = ["rock", "paper", "scissors"];
    console.log(playerMove, computerMove)

if (playerMove["rock"] ; ComputerMove["scissors"]) 
*/

/*
    if (computerMove === "scissors"
        then score +1 to [playerScore]
}
*/





