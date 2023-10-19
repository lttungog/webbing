function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const timeElement = document.getElementById('time');
    const timeElement2 = document.getElementById('time2');
    const secondsElement = document.querySelector('.seconds span');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting = '';
    let className = '';

    if (currentHour < 12) {
        greeting = 'Good Morning';
        className = 'morning';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon';
        className = 'afternoon';
    } else {
        greeting = 'Good Evening';
        className = 'evening';
    }

    greetingElement.textContent = greeting;
    greetingElement.className = className;

    const timeString = `Thời gian đầy đủ: ${currentTime}`;
    const timeString2 = `Thời gian rút gọn: ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2,'0')}:${String(currentTime.getSeconds()).padStart(2,'0')}`;
    timeElement.textContent = timeString;
    timeElement2.textContent = timeString2;

    secondsElement.textContent = currentTime.getSeconds();
}

setInterval(updateGreeting, 1000);

updateGreeting();

function changeColor() {
    const textElement = document.getElementById('text');
    const currentColor = textElement.style.color;

    if (currentColor === 'blue') {
        textElement.style.color = 'red';
        textElement.textContent = "Van ban mau do roi se thay mau";
    } else if (currentColor === 'red') {
        textElement.style.color = 'green';
        textElement.textContent = "Van ban mau xanh la roi se thay mau";
    } else {
        textElement.style.color = 'blue';
        textElement.textContent = "Van ban mau xanh roi se thay mau";
    }
}

setInterval(changeColor, 2000);