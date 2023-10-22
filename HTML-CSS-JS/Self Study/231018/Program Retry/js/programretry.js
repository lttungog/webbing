

function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();

    const timeString = `The current time is: ${currentTime}`;
    timeElement.textContent = timeString;
}

updateTime();