const textarea = document.querySelector('.textbox');
const charCountDisplay = document.getElementById('charCount');
const maxLength = textarea.getAttribute('maxlength');

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;

    charCountDisplay.textContent = `${currentLength} / ${maxLength}`;

    if (currentLength >= maxLength) {
        charCountDisplay.style.color = 'red';
    } else {
        charCountDisplay.style.color = 'white';
    }
});

