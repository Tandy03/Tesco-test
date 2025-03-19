let currentQuestion = 1;

function startSurvey() {
    document.getElementById("welcomeMessage").classList.add("hidden");
    document.getElementById("survey").classList.remove("hidden");

    document.getElementById(`question${currentQuestion}`).classList.remove("hidden");
}

function nextQuestion(questionNumber) {
    document.getElementById(`question${currentQuestion}`).classList.add("hidden");

    currentQuestion = questionNumber + 1;

    if (currentQuestion <= 4) {
        document.getElementById(`question${currentQuestion}`).classList.remove("hidden");
    } else {
        document.getElementById("survey").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
    }
}

function finishGame() {
    document.getElementById("doneButton").style.display = "block"; // Show the "I'm done" button
}

function claimPrize() {
    document.getElementById("prizePage").classList.add("hidden");
    document.getElementById("thankYouPage").classList.remove("hidden");
}
