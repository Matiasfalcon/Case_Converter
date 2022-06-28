let btnUppercase;
let btnLowercase;
let btnProperCase;
let btnSentenceCase;
let btnSaveTextFile;

btnUppercase = document.getElementById('upper-case');
btnLowercase = document.getElementById('lower-case');
btnProperCase = document.getElementById('proper-case');
btnSentenceCase = document.getElementById('sentence-case');
btnSaveTextFile = document.getElementById('save-text-file');


// Event handlers
btnUppercase.addEventListener('click', upperCase);
btnLowercase.addEventListener('click', lowerCase);
btnProperCase.addEventListener('click', properCase);
btnSentenceCase.addEventListener('click', sentenceCase);
btnSaveTextFile.addEventListener('click', download);

// Function to Download Text File
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.getElementById('text-area').value));
    element.setAttribute('download', 'text.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


// Function to Upper Case
function upperCase() {
    let text = document.getElementById("text-area").value;
    document.getElementById("text-area").value =
        text.toUpperCase();
}

// Function to Lower Case
function lowerCase() {
    let text = document.getElementById("text-area").value;
    document.getElementById("text-area").value =
        text.toLowerCase();
}

// Function to Proper Case
function properCase() {
    let textArray = document.getElementById('text-area').value.toLowerCase().split(' ');
    let convertedTextArray = [];
    for (let i = 0; i < textArray.length; i++) {
        convertedTextArray.push(textArray[i].replace(textArray[i][0], textArray[i][0].toUpperCase()));
    }
    let convertedText = convertedTextArray.join(' ');
    document.getElementById('text-area').value = convertedText;
}

// Function to Sentence Case
function sentenceCase() {
    let text = document.getElementById('text-area').value.toLowerCase().split('.');
    text.pop();
    console.log(text)
    let convertedText = [];
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].trim();
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    document.getElementById('text-area').value = text.join('. ') + '.';
}

