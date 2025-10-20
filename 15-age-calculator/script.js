const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

document.addEventListener('DOMContentLoaded', () => {
    const birthdateInput = document.getElementById('birthdate');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', calculateAge);

    function calculateAge() {
        const birthdateValue = birthdateInput.value;

        if (!birthdateValue) {
            resultDiv.innerHTML = '<p style="color: red;">Please enter a valid birth date.</p>';
            return;
        }

        const birthDate = DateTime.fromISO(birthdateValue);
        const today = DateTime.local();

        if (!birthDate.isValid || birthDate > today) {
            resultDiv.innerHTML = '<p style="color: red;">Invalid date. Please select a past date.</p>';
            return;
        }

        const ageInterval = Interval.fromDateTimes(birthDate, today);

        const age = ageInterval.toDuration(['years', 'months', 'days']).toObject();

        const years = Math.floor(age.years);
        const months = Math.floor(age.months);
        const days = Math.floor(age.days);

        resultDiv.innerHTML = `
            <p>You are:</p>
            <p><strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.</p>
        `;
    }
});