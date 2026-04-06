// TODO: Write JavaScript code here! e.g. to test:


console.log('Starting project');

let correctCount = 0;
let incorrectCount = 0;
let livesLeft = 10;
document.getElementById("correct_count").innerHTML = correctCount;
document.getElementById("incorrect_count").innerHTML = incorrectCount;
document.getElementById("lives_count").innerHTML = livesLeft;

function correct(){
    console.log('correct is getting clicked');
    correctCount++;
    document.getElementById("correct_count").innerHTML = correctCount;
    document.getElementById("message").innerHTML = "Correct, looking good!";
    console.log(correctCount);
    if (correctCount == 5){
        document.getElementById("message").innerHTML = "\nGreat work.";
        console.log("we have a winner");
        document.querySelector('#all_questions').innerHTML = `
            <div class="gameover">
            <h1>YOU WIN!</h1>
            </div>`;
    }
}

function incorrect(){
    console.log('incorrect is getting clicked');
    incorrectCount++;
    livesLeft--;
    document.getElementById("incorrect_count").innerHTML = incorrectCount;
    document.getElementById("lives_count").innerHTML = livesLeft;
    document.getElementById("message").innerHTML = "Incorrect! A life has been lost";
    console.log(incorrectCount);
    if (livesLeft == 0){
        document.getElementById("message").innerHTML = "You blew it.";
        console.log("game over");
        document.querySelector('#all_questions').innerHTML = `
            <div class="gameover">
            <h1>GAME OVER!</h1>
            </div>`;
      
        
    }


}




