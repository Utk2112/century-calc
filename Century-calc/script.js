// Get elements from the page
const yearInput = document.getElementById("yearInput");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const resultNumber = document.getElementById("resultNumber");
const resultText = document.getElementById("resultText");
const resultDescription = document.getElementById("resultDescription");

const errorMessage = document.getElementById("errorMessage");
const resultCard = document.getElementById("resultCard");


// Convert a number into its ordinal form
function getOrdinal(number) {
    const lastTwoDigits = number % 100;
    const lastDigit = number % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return number + "th";
    }

    if (lastDigit === 1) {
        return number + "st";
    }

    if (lastDigit === 2) {
        return number + "nd";
    }

    if (lastDigit === 3) {
        return number + "rd";
    }

    return number + "th";
}


// Calculate the century
function calculateCentury() {

    const year = Number(yearInput.value);

    // Clear previous error
    errorMessage.textContent = "";

    // Validate input
    if (!yearInput.value || !Number.isInteger(year) || year < 1) {

        errorMessage.textContent =
            "Please enter a valid positive whole year.";

        resultNumber.textContent = "—";
        resultText.textContent =
            "Enter a year to see the result";

        resultDescription.textContent =
            "Your century will appear here.";

        resultCard.classList.remove("show-result");

        return;
    }


    // Century calculation formula
    const century = Math.floor((year - 1) / 100) + 1;

    const ordinalCentury = getOrdinal(century);


    // Update the DOM
    resultNumber.textContent = century;
    resultText.textContent =
        `The year ${year} is in the ${ordinalCentury} century.`;

    resultDescription.textContent =
        `Years ${((century - 1) * 100) + 1}–${century * 100} belong to the ${ordinalCentury} century.`;

    resultCard.classList.add("show-result");
}


// Reset the calculator
function resetCalculator() {

    yearInput.value = "";

    resultNumber.textContent = "—";

    resultText.textContent =
        "Enter a year to see the result";

    resultDescription.textContent =
        "Your century will appear here.";

    errorMessage.textContent = "";

    resultCard.classList.remove("show-result");

    yearInput.focus();
}


// Button click event
calculateBtn.addEventListener("click", calculateCentury);


// Reset button event
resetBtn.addEventListener("click", resetCalculator);


// Allow Enter key to calculate
yearInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        calculateCentury();
    }

});


// Clear the error while the user starts typing
yearInput.addEventListener("input", function() {

    errorMessage.textContent = "";

});
