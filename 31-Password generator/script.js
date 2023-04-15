const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowerEl = document.getElementById('lowercase');
const upperEl = document.getElementById('uppercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateBtn = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboard.addEventListener('click', ()=>{
    let password = resultEl.innerText;
    if(!password){
        alert('Nothing to copy');
        return;
    }
    const textArea = document.createElement('textarea');
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert('Password copied to clipboard!!');
})

generateBtn.addEventListener('click', ()=>{
    const length = parseInt(lengthEl.value);
    const hasLower = lowerEl.checked;
    const hasUpper = upperEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr  = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0)return '';

    for(let i = 0; i < length; i++){
        let currFunc = Object.keys(typesArr[Math.floor(Math.random() * typesCount)])[0];
        generatedPassword += randomFunc[currFunc]();
    }
    return generatedPassword;
}

function getRandomLower(){
    //a-> 97
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
    //A -> 65
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
    //0 -> 48
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
    let symbols = '!@#$%^&*(){}[]=<>,./';
    return symbols[Math.floor(Math.random() * symbols.length)];
}