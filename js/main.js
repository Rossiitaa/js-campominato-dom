const buttonPlay = document.getElementById('start-game')

    const dinamicGrid = document.getElementById('grid-dinamic');
    
    const selectionButton = document.getElementById('diff-button');


    buttonPlay.addEventListener('click', function(){
        dinamicGrid.innerHTML = null;
        let val = document.getElementById("diff-button").value;
    if(val === "0") {
        for (let i = 0; i < 100; i++) {

            const newBox = createNewBox();
            newBox.classList.add('rs_box_consegna');

            newBox.addEventListener('click' , function(){

                newBox.classList.toggle('azzurro');
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

                newBox.classList.toggle('azzurro');
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

                newBox.classList.toggle('azzurro');
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
}