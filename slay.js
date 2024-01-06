function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value;
  const correctAnswer = "030209"; // 여기에 올바른 답을 입력하세요

  const resultDiv = document.getElementById("result");

  if (userAnswer === correctAnswer) {
      resultDiv.innerHTML = "정답입니다!";

      setTimeout(function () {
          window.location.href = 'https://roan-helmet-ae1.notion.site/897faffc53e84e5cbbcde7f428490d81?pvs=4';
      }, 1000);

      resultDiv.style.color = "#5AB0FF";
  } else {
      resultDiv.innerHTML = "틀렸습니다.";
      resultDiv.style.color = "red";
  }

  resultDiv.style.display = "block";
}
