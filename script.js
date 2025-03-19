let currentQuestion = 1;

function startSurvey() {
    document.getElementById("welcomeMessage").classList.add("hidden1");
    document.getElementById("survey").classList.remove("hidden");
    document.getElementById("question1").classList.remove("hidden");
}

function nextQuestion(questionNumber) {
    document.getElementById(`question${currentQuestion}`).classList.add("hidden");

    // Set the next question
    currentQuestion = questionNumber + 1;

    // Show the next question or move to game if done
    if (currentQuestion <= 4) {
        document.getElementById(`question${currentQuestion}`).classList.remove("hidden");
    } else {
        // Hide the survey and show the game
        document.getElementById("survey").classList.add("hidden");
        document.getElementById("prizePage").classList.remove("hidden");
    }
}

function claimPrize() {
    document.getElementById("prizePage").classList.add("hidden");
    document.getElementById("thankYouPage").classList.remove("hidden");
}
