const buttons = document.querySelectorAll('input');
const display = document.querySelector('#display');
let result = 0;
let operator = [];
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = button.value;
        operator.push(value);
        display.value= operator.join('');
        if (value === '+') {
            operator.pop();
            let number = operator.join('');
            result += parseInt(number);
            operator = [];
            display.value= result;
            
            
        } else if (value === '-') {
            operator.pop();
            let number = operator.join('');
            result -= parseInt(number);
            operator = [];
            display.value= result;
            
        } else if (value === '*') {
            operator.pop();
            let number = operator.join('');
            result *= parseInt(number);
            operator = [];
            display.value= result;
            
        } else if (value === '/') {
            operator.pop();
            let number = operator.join('');
            result /= parseInt(number);
            operator = [];
            display.value= result;

        } else if (value === '=') {
            display.value= result;
        }
    })
});
