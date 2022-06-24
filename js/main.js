/* const buttonPlay = document.getElementById('start-game')

    buttonPlay.addEventListener('click', function(){
        createGame();
    });

    function createGame() {

    const dinamicGrid = document.getElementById('grid-dinamic');

    dinamicGrid.innerHTML = '';

    let diffLevel = parseInt(document.getElementById("diff-button").value);
    
    let numberCell;
    let rowCell;

    switch (diffLevel) {
        default:
            numberCell = 100;
        break;
        case 1:
            numberCell = 81;
        break;
        case 2:
            numberCell = 49;
        break;
    }

    rowCell = Math.sqrt(numberCell);

    for (let i = 0; i < numberCell; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('square');

        const boxCalc = `calc(100% / ${rowCell})`
        newBox.style.width = boxCalc;
        newBox.style.height = boxCalc;

        newBox.innerHTML = i;

        dinamicGrid.append(newBox);
    }
    console.log(diffLevel, numberCell, rowCell)
    } */





    const buttonPlay = document.getElementById('start-game')
    const dinamicGrid = document.getElementById('grid-dinamic');
    const selectionButton = document.getElementById('diff-button');
    const score = document.getElementById('rating');
    let bombs = [];

    buttonPlay.addEventListener('click', function(){

        dinamicGrid.innerHTML = null;
        let val = document.getElementById("diff-button").value;

    if(val === "0") {

    bombs = randomNumber(100);
    let lose = false;
    let win = false;
    let counter = 0;

    for (let i = 0; i < 100; i++) {

        const newBox = createNewBox();
        newBox.classList.add('rs_box_consegna');

        if (bombs.includes(i)) {
            newBox.classList.add('bomb');
            }

    newBox.addEventListener('click' , function(){
        if (!lose && !win) {

            if (newBox.classList.contains('bomb')) {
                newBox.classList.add('error');
                lose = true;
                console.log('You lost, you’ll be lucky again!');
                score.innerHTML = `You lost, you’ll be lucky again! SCORE: ${counter}`;

                } else {

                    newBox.classList.add('good');
                    console.log(newBox.innerHTML);
                    counter++;
                    }
                    if (counter == (100 - 16)) {

                        win = true;
                        console.log('You’re a champion, you win!');
                        score.innerHTML = `You’re a champion, you win! SCORE: ${counter}`;
    
                    }
                }
            });
        newBox.innerHTML = i;
        dinamicGrid.append(newBox);
        }
    }
    if(val === "1") {
        bombs = randomNumber(81);
        let lose = false;
        let win = false;
        let counter = 0;

        for (let i = 0; i < 81; i++) {
            const newBox = createNewBox();
            newBox.classList.add('rs_box_consegna_int');
            newBox.addEventListener('click' , function(){
            newBox.classList.toggle('good');
            console.log(newBox.innerHTML);
            });
            newBox.innerHTML = i;
            dinamicGrid.append(newBox);
        }
    }
    if(val === "2") {
        bombs = randomNumber(49);
        let lose = false;
        let win = false;
        let counter = 0;

        for (let i = 0; i < 49; i++) {
            const newBox = createNewBox();
            newBox.classList.add('rs_box_consegna_diff');
            newBox.addEventListener('click' , function(){
            newBox.classList.toggle('good');
            console.log(newBox.innerHTML);
            });
            newBox.innerHTML = i;
            dinamicGrid.append(newBox);
        }
    }
});




function createNewBox() {
    const currentBox = document.createElement('div');
    currentBox.classList.add('square', 'd-flex');
    return currentBox;
} 

function randomNumber(rN) {
    let i = 0;
    let number = 0;
    const list16Number = [];

    while (i < 16) {
        number = Math.floor(Math.random() * rN);
        if (!list16Number.includes(number)) {
            list16Number.push(number);
            i++;
        }
    }
    return list16Number;
}

