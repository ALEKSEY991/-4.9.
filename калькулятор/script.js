let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})
document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.getElementById('btn_sum').addEventListener('click',function(){
    lastOperand =parseInt (inputWindow.value);
    operation ='sum';
    inputWindow.value ='';

    console.log(lastOperand);
    console.log(operation);
})
document.getElementById('btn calc').addEventListener('click',function(){
    if (operation === 'sum'){
        const resuit = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = resuit;
    }
})