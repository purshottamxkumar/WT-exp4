function dateFunc() {
    let d = new Date();
    let curr_date = d.getDate();
    let curr_month = d.getMonth();
    let curr_year = d.getFullYear();
    alert(`Today's Date is : ${curr_date}/${curr_month + 1}/${curr_year}`);
}

function factorialFunc() {
    let num = prompt(`Enter the Number`);
    let res = 1;
    for(let i = 1; i <= num; i++) {
        res = res * i;
    }
    alert(`Factorial of Number ${num} is : ${res}`);
}

function multiplicationFunc() {
    let num = prompt(`Enter the Number`);
    let txt = "";
    for(let i = 1; i <= 10; i++) {
        let res = num * i;
        txt += num + " * " + i + " = " + res + "\n";
    }
    alert(txt);
}

function sumFunc() {
    let num = prompt(`Enter the Number`);
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    alert(`The sum till the number ${num} is ${sum}`);
}