   const flashcards = [
      {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language and is used to create webpages."
      },
      {
        question: "What is CSS used for?",
        answer: "CSS (Cascading Style Sheets) is used for styling and layout of web pages."
      },
      {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language that makes web pages interactive."
      },
      {
        question: "What does API stand for?",
        answer: "API stands for Application Programming Interface, which allows communication between software systems."
      }
    ];

    let currentIndex = 0;
    let showingAnswer = false;

    const questionElement = document.getElementById("question");
    const progressBar = document.getElementById("progress-bar");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const primaryBtn = document.getElementById("primaryBtn");



    function updateCard() {
      showingAnswer = false;
      questionElement.textContent = flashcards[currentIndex].question;
      updateProgress();
      document.querySelector(".btn-primary").textContent = "Show Answer";

      // Disable/enable buttons based on current index
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === flashcards.length - 1;
    }

    function toggleAnswer() {
      showingAnswer = !showingAnswer;
      questionElement.textContent = showingAnswer
        ? flashcards[currentIndex].answer
        : flashcards[currentIndex].question;
      document.querySelector(".btn-primary").textContent = showingAnswer
        ? "Hide Answer"
        : "Show Answer";
    }

    function nextCard() {
      if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        updateCard();
      }
    }

    function previousCard() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCard();
      }
    }

    function updateProgress() {
      const total = flashcards.length;
      const progress = ((currentIndex + 1) / total) * 100;
      progressBar.style.width = progress + "%";
      progressBar.textContent = `${currentIndex + 1} of ${total}`;
    }

    // Initialize
    updateCard();

  function toggleAnswer() {
  const questionElement = document.getElementById("question");

  if (showingAnswer) {
    // Hide the answer with animation
    questionElement.classList.remove("fade-in");
    questionElement.classList.add("fade-out");

    setTimeout(() => {
      showingAnswer = false;
      questionElement.textContent = flashcards[currentIndex].question;
      questionElement.classList.remove("fade-out");
      questionElement.classList.add("fade-in");
      document.getElementById("primaryBtn").textContent = "Show Answer";
    }, 300);
  } else {
    // Show the answer with animation
    questionElement.classList.remove("fade-in");
    questionElement.classList.add("fade-out");

    setTimeout(() => {
      showingAnswer = true;
      questionElement.textContent = flashcards[currentIndex].answer;
      questionElement.classList.remove("fade-out");
      questionElement.classList.add("fade-in");
      document.getElementById("primaryBtn").textContent = "Hide Answer";
    }, 300);
  }
}
