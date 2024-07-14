// DOM elements
const display = document.getElementById('display');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const lapButton = document.getElementById('lapButton');
const resetButton = document.getElementById('resetButton');
const lapsList = document.getElementById('laps');

// Variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Format time as hh:mm:ss
function formatTime(milliseconds) {
    let date = new Date(milliseconds);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getSeconds();
    let millisecondsLeft = date.getMilliseconds();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millisecondsLeft.toString().padStart(3, '0')}`;
}

// Update the stopwatch display
function updateDisplay() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    display.innerHTML = formatTime(elapsedTime);
}

// Start the stopwatch
function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10); // Update display every 10 milliseconds
}

// Pause the stopwatch
function pauseStopwatch() {
    clearInterval(timerInterval);
}

// Lap functionality
function recordLapTime() {
    let lapTime = elapsedTime;
    let lapItem = document.createElement('li');
    lapItem.innerText = formatTime(lapTime);
    lapsList.appendChild(lapItem);
}

// Reset the stopwatch
function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.innerHTML = formatTime(elapsedTime);
    lapsList.innerHTML = ''; // Clear lap times
}

// Event listeners
startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
lapButton.addEventListener('click', recordLapTime);
resetButton.addEventListener('click', resetStopwatch);
