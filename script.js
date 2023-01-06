
let guesses = 0;
let score = 0;

//Submit
let yourScore = document.getElementById("score");
document.getElementById("submit").onclick = function(){

    let inputNum = document.getElementById("input").value;
    if ((inputNum > 5 || inputNum < 1))
    {
        window.alert("Please enter a valid answer!");    
    }
    else
    {
        const answer = Math.floor(Math.random() * 5 +1);
        guesses++;
        yourScore.innerHTML = "Your Score : " +score+ "/" +guesses;

        if (inputNum == answer){ 
            window.alert("Correct Answer!"); 
            score++;
            yourScore.innerHTML = "Your Score : " +score+ "/" +guesses;
        }
        else { 
            window.alert("Incorrect! \n Correct answer is :" +answer); 
        }
    }
}


//Enter
var numInput = document.getElementById("input");
numInput.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("submit").click();
    }
});
