//variables
let char = 0;
let timer;
let giveInput = true;
let inputPlaceholder = true;
let typeSpeed = 40;
let numOfHighlights = 0;

//function started by button
function startGame() {
 document.querySelector('main').innerHTML = `<div id="gameText"></div>`;
  textGenerator(`Thanks for checking this github out. The way it works is the function {textGenerator} takes string and splits it into a bunch of span elements, which initially have an opacity of 0. Then, at a set rate, a function by the name of {onTick} is ran repeatedly, iterating through the span elements and adding a class that makes them appear. It's doing that as we speak! As you have probably already seen by now, it can also {highlight} things. The function {highlighter} looks for span that contains curly braces. Any elements between those curly braces get the class {highlighter}. So, what do you think?`);
  
};

function textGenerator(string) {
    let gameText = document.getElementById('gameText');
    gameText.innerHTML += `<div></div>`
    //splits string into array
    let stringArray = string.split('');

  //counts how many '{' symbols there are to make highlights, you can change the syntax or remove altogether if you want
    for(let i = 0; i < stringArray.length; i++) {
        if(stringArray[i] === '{') {
            numOfHighlights++;
        };
    };

    for (let i = 0; i < stringArray.length; i++) {
      //creates individual span element for each character
      gameText.lastElementChild.innerHTML += `<span>${stringArray[i]}</span>`;
    };

    highlighter();

  //runs onTick repeatedly at set speed
    timer = setInterval(onTick, typeSpeed);
    window.scrollTo(0, gameText.scrollHeight);
}

function highlighter() {
    if(numOfHighlights === 0) {
        return;
    }else {
        let spanArray = gameText.lastElementChild.children;
        let highlightStart;
      //find index where '{' and '}' are used, will highlight span elements in between those
        for(let i = 0; i < spanArray.length; i++) {
            if(spanArray[i].innerHTML === '{') {
                highlightStart = i;
                break;
            };
        };

        let highlightEnd;
        for(let i = 0; i  < spanArray.length; i++) {
            if(spanArray[i].innerHTML === '}') {
                highlightEnd = i;
                break;
            };
        };
      
      //adds highlighter class to span in between '{' and '}'  
        for(let i = highlightStart; i < highlightEnd; i++) {
            spanArray[i].classList.add('highlighter');
        };

        spanArray[highlightEnd].remove();
        spanArray[highlightStart].remove();
        
        numOfHighlights--;
    };

  //can make multiple highlights if textGenerator demands so
    if(numOfHighlights !== 0) {
        highlighter();
    };
};

//iterates through span elements, adding typewriter class to them, making them visible
function onTick() {
    let array = gameText.lastElementChild.children;
    let span = array[char];
    span.classList.add('typewriter');
    char++;
    if (char === array.length) {
       
        clearInterval(timer);
        timer = null;
        char = 0;
        if (giveInput === true) {
            inputGenerator();
        };
    };
};

//creates space for player input
function inputGenerator() {
    let gameText = document.getElementById('gameText');
    gameText.innerHTML += `<span class="typewriter">&gt;</span> <input type="text">`;
    let input = gameText.lastElementChild;

    if(inputPlaceholder === true) {
        input.setAttribute('placeholder', 'Type here');
        inputPlaceholder = false;
    };

    input.setAttribute('maxlength', '30')

    input.addEventListener('keydown', function (key) {
        if (key.keyCode === 13) {
            masterFunction(input.value);
        };
    });
    window.scrollTo(0, gameText.scrollHeight);
};

function masterFunction(playerResponse) {
     document.getElementById('gameText');
    gameText.lastElementChild.outerHTML = `<span class="typewriter playerResponse">${playerResponse}</span>`;
  giveInput = false;
  textGenerator('Thanks for the feedback!');
};
