let timer;
let timeRemaining;

function startTimer() {
    const secondsInput = document.getElementById('seconds');
    timeRemaining = parseInt(secondsInput.value);

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    updateDisplay();

    timer = setInterval(() => {
        timeRemaining--;
        updateDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timer);
            document.getElementById('message').innerText = "Time's up!";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById('message').innerText = "Timer stopped.";
}

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timerDisplay').innerText = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}