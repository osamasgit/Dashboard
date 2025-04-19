const passwordApp = document.getElementById("password-app");

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+";

const passTemplate = `
<div class="title">
    <h1>Crea tu contraseñas segura aquí</h1>
    <img class="icon" src="./assets/iconos/candado.png" alt="icono candado">
</div>
<div id="pass-generator" class="card">
    <p>Ingrese el número de caracteres de la contraseña</p>
    <div>
        <input id="num-of-characters" type="number" placeholder="12" min="12" max="50">
        <button id="btn-generate" class="btn">Generar</button>
    </div>
    <p>Tu nueva contraseña es: </p>
    <div id="pass-result"></div>
</div>`

passwordApp.innerHTML = passTemplate;

const numOfCharacters = document.getElementById("num-of-characters");
const btnGenerate = document.getElementById("btn-generate");
const passResult = document.getElementById("pass-result");

const passLength = () => {
    let lengthValue = 0;
    btnGenerate.addEventListener("click", () => {    
        if(numOfCharacters.value < 12 || numOfCharacters.value > 50){
            passResult.innerText = `${numOfCharacters.value} no puede ser, la contraseña debe tener entre 12 y 50 caracteres.`;
        }else {
            passResult.innerText = generatePassword();
        }
    })
}

passLength()

const getRandomChar = () => {
const typeChar = randomNumber(1,4);
let char = '';
    switch(typeChar){
        case 1:
            char = UPPERCASE[randomNumber(0, UPPERCASE.length - 1)];
            break;
        case 2:
            char = LOWERCASE[randomNumber(0, LOWERCASE.length - 1)];
            break;
        case 3:
            char = NUMBERS[randomNumber(0, NUMBERS.length - 1)];
            break;
        case 4:
            char = SYMBOLS[randomNumber(0, SYMBOLS.length - 1)];
            break;
    }
    return char;
}

const generatePassword = () => {
    let password = "";
    let uppercaseChar = 0;
    let lowercaseChar = 0;
    let numbersChar = 0;
    let symbolsChar = 0;

/*  este genera la contraseña y se asegura de que la contreseña antes de 
    que termine de genrarla contenga al menos un caracter de cada tipo. */
    for(let i = 0; i < numOfCharacters.value; i++){ 
        if(i > numOfCharacters.value -4 && uppercaseChar === 0) {
            password += UPPERCASE[randomNumber(0, UPPERCASE.length - 1)];
            uppercaseChar++;
        }else if(i > numOfCharacters.value -4 && lowercaseChar === 0) {
            password += LOWERCASE[randomNumber(0, LOWERCASE.length - 1)];
            uppercaseChar++;
        }else if(i > numOfCharacters.value -4 && numbersChar === 0) {
            password += NUMBERS[randomNumber(0, NUMBERS.length - 1)];
            uppercaseChar++;
        }else if(i > numOfCharacters.value -4 && symbolsChar === 0) {
            password += SYMBOLS[randomNumber(0, SYMBOLS.length - 1)];
            uppercaseChar++;
        }else {
            password += getRandomChar();
        }
    }
    return password;
}