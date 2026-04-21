let currentQuestion = 0;
let playerScore = 0;

let questions = [
    "1. What is the most commonly spoken language?",
    "2. What is the largest national park in the US by area?",
    "3. Which country's national animal is a unicorn?",
    "4. What is the most used currency in the world?",
    "5. Where is the Hagia Sophia located?",
    "6. Which country spans the most time zones?",
    "7. What is the most populated city in the world?", 
    "8. Which country had three capital cities?",
    "9. Which ancient civilization built Machu Picchu?",
    "10. Which of the following is not one of the US presidents featured on Mount Rushmore?", 
    "11. What castle is the Disney castle based on?",
];

let answers = [
    ["Hindi", "English", "Spanish", "Chinese(Mandarin)"],
    ["Gates of the Arctic", "Wrangell-St. Elias", "Death Valley", "Lake Clark"],
    ["Wales", "Scotland", "Norway", "Finland"],
    ["US dollar", "Euro", "Chinese yuan", "British pound"],
    ["Poland", "Italy", "Turkey", "Greece"],
    ["Russia", "USA", "China", "France"],
    ["Tokyo", "Dhaka", "Shanghai", "Jakarta"],
    ["Bolivia", "South Africa", "Italy", "Australia"],
    ["Mayans", "Zapotecs", "Incas", "Aztecs"],
    ["Abraham Lincoln", "James Madison", "Theodore Roosevelt", "Thomas Jefferson"],
    ["Neuschwanstein Castle", "Windsor Castle", "Château de Chambord", "Prague Castle"],
];

let correctAnswers = [3, 1, 1, 0, 2, 3, 3, 1, 2, 1, 0];

document.getElementById("question").hidden = true;
document.getElementById("btn0").hidden = true;
document.getElementById("btn1").hidden = true;
document.getElementById("btn2").hidden = true;
document.getElementById("btn3").hidden = true;
document.getElementById("nxtBtn").hidden = true;

document.getElementById("startbtn").addEventListener("click", function() {

    document.getElementById("startbtn").hidden = true;

    document.getElementById("question").hidden = false;
    document.getElementById("btn0").hidden = false;
    document.getElementById("btn1").hidden = false;
    document.getElementById("btn2").hidden = false;
    document.getElementById("btn3").hidden = false;
    document.getElementById("nxtBtn").hidden = false;
    document.getElementById("startingMsg").hidden = true;

    displayQuestion();
});


function displayQuestion(){
    document.getElementById("question").textContent = questions[currentQuestion];

    for(let i = 0; i < 4; i++){
        let btn = document.getElementById("btn" + i);
        btn.textContent = answers[currentQuestion][i];
        btn.hidden = false;
        btn.disabled = false;
    }

    document.getElementById("playerScore").textContent = "";
}

for (let  i = 0; i < 4; i++) {
    document.getElementById("btn" + i).addEventListener("click", function (){
        checkAnswer(i);
    });
}

function checkAnswer(selected) {
    if(selected === correctAnswers[currentQuestion]) {
        document.getElementById("playerScore").textContent = "Correct!";
        playerScore++;
    } else {
        document.getElementById("playerScore").textContent = "Incorrect. The correct answer is " + answers[currentQuestion][correctAnswers[currentQuestion]] + ".";
    }
    for (let  i = 0; i < 4; i++) {
    document.getElementById("btn" + i).disabled = true;
    };
}

document.getElementById("nxtBtn").addEventListener("click", function() {
    currentQuestion++;

    if(currentQuestion < questions.length) {
        displayQuestion();
    } else {
        for(let i = 0; i < 4; i++){
            document.getElementById("btn"+ i).hidden = true;
        }

        document.getElementById("nxtBtn").hidden = true;
        document.getElementById("question").textContent = "You finished the quiz!";
        document.getElementById("playerScore").textContent = "Your score is " + playerScore + "/" + questions.length + "!";
    }
    
});
    

