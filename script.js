let currentQuestion = 0;
let playerScore = 0;

let questions = [
    "What is the most commonly spoken language?",
    "What is the largest national park in the US by area?",
    "Which country's national animal is a unicorn?",
    "What is the most used currency in the world?",
    "Where is the Hagia Sophia located?",
    "Which country spans the most time zones?",
    "What is the most populated city in the world?", 
    "Which country had three capital cities?",
    "Which ancient civilization built Machu Picchu?",
    "Which of the following is not one of the US presidents featured on Mount Rushmore?", 
    "What castle is the Disney castle based on?",

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
    ["Abraham Lincoln", "James Madison", "Theordore Roosevelt", "Thomas Jefferson"],
    ["Neuschwanstein Castle", "Windsor Castle", "Château de Chambord", "Prague Castle"],

];

let correctAnswers = [3, 1, 1, 0, 2, 3, 3, 1, 2, 1, 0];


function displayQuestion(){
    document.getElementById("question").innerText = questions[currentQuestion];

    for(let i = 0; i < 4; i++){
        document.getElementById("btn" + i).innerText = answers[currentQuestion][i];
    }
    
    document.getElementById("playerScore").innerText = "";
}

displayQuestion();

function checkAnswer(selected) {
    if(selected === correctAnswers[currentQuestion]) {
        document.getElementById("playerScore").innerText = "Correct!";
        playerScore++;
    } else {
        document.getElementById("playerScore").innerText = "Incorrect. The correct answer is " + answers[currentQuestion][correctAnswers[currentQuestion]] + ".";
    }
}

function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("question").innerText = "You finished the quiz!Your score is " + playerScore + "/" + questions.length + "!";
        
    }
    displayQuestion();
}