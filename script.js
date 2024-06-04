document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const resultDisplay = document.getElementById('game-result');
    const buttons = document.querySelectorAll('.choice');

    buttons.forEach(button => button.addEventListener('click', () => {
        const userChoice = button.id;
        userChoiceDisplay.textContent = "Your choice: ${userChoice}";
        const computerChoice = getComputerChoice();
        computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;
        const result = determineWinner(userChoice, computerChoice);
        resultDisplay.textContent = result;
    }));

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        }
        if (
            (userChoice === '✊' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            return "You win!";
        }
        return "You lose!";
    }
});
