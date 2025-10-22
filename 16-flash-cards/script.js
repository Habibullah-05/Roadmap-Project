document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "What is the difference between var, let, and const?",
            answer: "var is function-scoped and can be re-declared. let and const are block-scoped. let can be re-assigned, but const cannot (though object properties can still be modified)."
        },
        {
            question: "What is an Immediately Invoked Function Expression (IIFE)?",
            answer: "A function that runs as soon as it is defined. It's used to create a private scope for variables."
        },
        {
            question: "Explain event bubbling.",
            answer: "Event bubbling is when an event fired on a DOM element first triggers handlers on that element, then on its parent, then on its parent's parent, and so on up the hierarchy."
        },
        {
            question: "What is a Closure?",
            answer: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment)."
        }
    ];

    let currentCardIndex = 0;
    const cardCount = flashcards.length;

    const flashcardElement = document.getElementById('flashcard');
    const questionTextElement = document.getElementById('questionText');
    const answerTextElement = document.getElementById('answerText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const flipBtn = document.getElementById('flipBtn');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    // --- Core Functions ---

    function flipCard() {
        flashcardElement.classList.toggle('flipped');
        
        if (flashcardElement.classList.contains('flipped')) {
            flipBtn.textContent = 'Hide Answer';
        } else {
            flipBtn.textContent = 'Show Answer';
        }
    }

    function loadCard() {
        const card = flashcards[currentCardIndex];
        
        flashcardElement.classList.remove('flipped');
        flipBtn.textContent = 'Show Answer';

        questionTextElement.textContent = card.question;
        answerTextElement.textContent = card.answer;

        updateProgress();
        updateNavigationButtons();
    }

    function updateProgress() {
        const currentNumber = currentCardIndex + 1;
        const percentage = (currentNumber / cardCount) * 100;
        
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${currentNumber} of ${cardCount}`;
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentCardIndex === 0;
        nextBtn.disabled = currentCardIndex === cardCount - 1;
    }

    // --- Event Listeners ---
    
    flipBtn.addEventListener('click', flipCard);
    flashcardElement.addEventListener('click', flipCard); 

    prevBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            loadCard();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentCardIndex < cardCount - 1) {
            currentCardIndex++;
            loadCard();
        }
    });

    loadCard();
});