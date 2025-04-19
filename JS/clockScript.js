const clockApp = document.getElementById("clock-app");
const phrase = document.getElementById("phrase");

// esta funcion formatea los numeros menors que 10 para que tengan un 0 delante
const formattedNumbers = (number) => {
    if (number < 10) {
        return `0${number}`;
    }
    return number;
}

const getDate = () => {
    const dateYear = new Date().getFullYear();
    const dateMonth = formattedNumbers(new Date().getMonth() + 1); // Se suma uno porque en JS empiezan en 0
    const dateDay = formattedNumbers(new Date().getDate());

return `${dateDay}/${dateMonth}/${dateYear}`;
}

const getClock = () => {
    const dateHour = formattedNumbers(new Date().getHours());
    const dateMinutes = formattedNumbers(new Date().getMinutes());
    const dateSeconds = formattedNumbers(new Date().getSeconds());
    const clock = [dateHour, dateMinutes, dateSeconds];
return clock;
}

const hour = getClock()[0]; 
const getPhrase = () => {
    let showPhrase = "";
    if (hour < 7) {
        showPhrase = "Es hora de descansar. Apaga y sigue mañana.";
    } else if (hour < 12) {
        showPhrase = "Buenos días, desayuna fuerte y a darle al código.";
    } else if (hour < 14) {
        showPhrase = "Echa un rato más pero no olvides comer.";
    } else if (hour < 16) {
        showPhrase = "Espero que hayas comido.";
    } else if (hour < 18) {
        showPhrase = "Buenas tardes, el último empujón.";
    } else if (hour < 22) {
        showPhrase = "Esto ya son horas extras, ... piensa en parar pronto.";
    } else {
        showPhrase = "Buenas noches, es hora de pensar en parar y descansar.";
    }

    return(showPhrase);
}

setInterval(() => {
    const showClock = getClock().join(":"); 
    const showDate = getDate();
    clockApp.innerHTML = 
    `
    <div class="clock">${showClock}</div>
    <div class="date">${showDate}</div>
    `;
},1000);

console.log(getPhrase());
phrase.innerText = getPhrase();