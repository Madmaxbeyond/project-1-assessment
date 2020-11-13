/*----- app's state (variables) -----*/
let runningTotal;


/*----- cached element references -----*/
let input1 = document.getElementById('num1');
let buttonAdd = document.getElementById('add-button');
let buttonSubtract = document.getElementById('subtract-button');
let totalSpan = document.querySelector('span');


/*----- event listeners -----*/
buttonAdd.addEventListener('click', handleAdd);
buttonSubtract.addEventListener('click', handleSubtract);


/*----- functions -----*/
function init() {
    runningTotal = 0;
    input1.innerText = '1';
    render();
}

function render() {
    input1.value.innerText = `${input1}`;
    if(runningTotal >= 0) {
        totalSpan.innerHTML = `
        <span> ${runningTotal} </span>
        `
    } else {
        totalSpan.innerHTML = `
        <span class="red"> ${runningTotal}</span>
        `
    }
}

function handleAdd() {
    let num1 = parseInt(input1.value);
    runningTotal += num1;
    render();
}

function handleSubtract() {
    let num1 = parseInt(input1.value);
    runningTotal -= num1;
    render();
}

init();