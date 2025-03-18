document.getElementById('start-questions-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
  });
  
  let correctAnswers = 0;
  
  const questionBtns = document.querySelectorAll('.question-btn');
  questionBtns.forEach(button => {
    button.addEventListener('click', function() {
      if (this.dataset.answer === 'London') {
        correctAnswers++;
      }
      nextQuestion();
    });
  });
  
  function nextQuestion() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
  }
  
  document.getElementById('end-game-btn').addEventListener('click', function() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('final-screen').style.display = 'block';
  });
  
  document.getElementById('pay-btn').addEventListener('click', function() {
    window.location.href = "payment-url-here";
  });
  