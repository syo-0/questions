'use strict';

/*練習11
let counter = 0;

function exeCount() {
    counter += 1;
    return counter;
}

function showExeCount() {
    const timeElement = document.getElementById(`time`);
    timeElement.innerText = exeCount();
}

setInterval(showExeCount,1000);
*/

/*練12-１
let counter = 0;

document.body.onkeydown = showExeCount;

function exeCount() {
    counter += 1;
}

function showExeCount() {
    exeCount();    
    document.getElementById(`keyboardinput`).innerText=counter;
}
*/

/*練12-２
let wordgame = {
    quesion: `りんごの英単語は？`,
    correct: "apple",
    evaluation: function(answer) {
        return wordgame.correct === answer;
/courses/1425/chapters/18585    }
};
*/

/*練14
let counter = 0;

function exeCount() {
    counter += 1;
    return counter;
}

function showExeCount() {
    let element = document.getElementById(`keyboardinput`);
    element.innerText = exeCount();
    if ((counter % 2) === 0) {
        keyboardinput.className = `red`;
    } else {
        keyboardinput.className = `blue`;
    }
}

document.body.onkeydown = showExeCount;
*/

/*練16
function showAlphabet() {
    let char = '';
    for (let i = 97; i <= 122; i++) {
        char = char + String.fromCharCode(i);
        document.getElementById('virtualkeyboard').innerText = char;
    }
}

showAlphabet();
*/

/*練17*/
//let counter = 0;
let text = '';
let buttonKey = '';
const keyboard = document.getElementById('virtualkeyboard');
const button = [];

function showAlphabet() {
    //'a'から'z'
    for (let i = 0; i <= 25; i++) {
        if (!button.includes(i)) {
            button.push(document.createElement('button'));
            button[i].setAttribute('id', String.fromCharCode(i + 97));
            button[i].setAttribute('class', 'button');
            button[i].innerText = String.fromCharCode(i + 97);
        }

        keyboard.appendChild(button[i]);
    }
    //'Enter'と'Delete'
    for (let i = 26; i <= 27; i++) {
        let btnChar = '';
        if (!button.includes(i)) {
            if (i === 26) {
                btnChar = 'Delete';
            }
            if (i === 27) {
                btnChar = 'Enter';
            }

            button.push(document.createElement('button'));
            button[i].setAttribute('id', btnChar);
            button[i].setAttribute('class', 'button');
            button[i].innerText = btnChar;

            if (i === 26) {keyboard.appendChild(document.createElement('br'))}

            keyboard.appendChild(button[i]);
        }
    }
}

/*
function exeCount() {
    counter += 1;
    return counter;
}
*/

function textInput(event) {
    let element = document.getElementById('keyboardinput');
    let correct = document.getElementById('correct');
    let keyText = '';

    if (event.key === undefined) {
        keyText = event.target.id;
        document.getElementById(event.target.id).blur();
    } else {
        if (event.key === 'Backspace') {
            keyText = 'Delete';
        } else {
            keyText = event.key;
        }
    }

    if (keyText === 'Delete') { //文字消す
        text = textDelete(text);
        keyText = '';
    } if (keyText === 'Enter') { //正誤判定
        correct.innerText = isTrue(text);
        keyText = '';
    }

    console.log(text);

    text += keyText;   
    element.innerText = text; //+ exeCount();


    /*
    if ((counter % 2) === 0) {
        keyboardinput.className = `red`;
    } else {
        keyboardinput.className = `blue`;
    }
    */
}

function textDelete(txt) {
    return txt.slice(0, txt.length - 1);
}

//練18
const question = document.getElementById('question');

//問題
let wordgame = {
    question: `りんごの英単語は？`,
    correct: "apple"
};

//問題表示
question.innerText = wordgame.question;

//正誤判定
function isTrue(txt) {
    let isTrue = '';
    if (txt === wordgame.correct) {
        isTrue = '正解';
    } else {
        isTrue = '不正解';
    }

    return isTrue;
}

//ボタン表示
showAlphabet();

//キー入力
document.onkeydown = textInput; 
// ボタン入力
for (let i = 0; i < button.length; i++) {
    buttonKey = String.fromCharCode(i + 97);
    button[i].onclick = textInput;
}
