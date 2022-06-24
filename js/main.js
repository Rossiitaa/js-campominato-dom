const buttonPlay = document.getElementById('start-game')

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

    for (let i = 0; i <= numberCell; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('square');

        const boxCalc = `calc(100 / ${rowCell})`
        newBox.style.width = boxCalc;
        newBox.style.height = boxCalc;

        newBox.innerHTML = i;

        dinamicGrid.append(newBox);
    }
    console.log(diffLevel, numberCell, rowCell)
    }






























   /*  buttonPlay.addEventListener('click', function(){
        dinamicGrid.innerHTML = null;

        let val = document.getElementById("diff-button").value;
        

    if(val === "0") {
        for (let i = 0; i < 100; i++) {

            const newBox = createNewBox();
            newBox.classList.add('rs_box_consegna');

            newBox.addEventListener('click' , function(){

            newBox.classList.toggle('light-blue');
            console.log(newBox.innerHTML);
            });

            newBox.innerHTML = i;
            dinamicGrid.append(newBox);
        }
    }

    if(val === "1") {
        for (let i = 0; i < 81; i++) {

            const newBox = createNewBox();
            newBox.classList.add('rs_box_consegna_int');

            newBox.addEventListener('click' , function(){

            newBox.classList.toggle('light-blue');
            console.log(newBox.innerHTML);
            });

            newBox.innerHTML = i;
            dinamicGrid.append(newBox);
        }
    }

    if(val === "2") {
        for (let i = 0; i < 49; i++) {

            const newBox = createNewBox();
            newBox.classList.add('rs_box_consegna_diff');

            newBox.addEventListener('click' , function(){

            newBox.classList.toggle('light-blue');
            console.log(newBox.innerHTML);
            });

            newBox.innerHTML = i;
            dinamicGrid.append(newBox);
        }
    }

});

function createNewBox() {
    const currentBox = document.createElement('div');
    currentBox.classList.add('square');
    return currentBox;
} */

 
