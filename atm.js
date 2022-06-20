let InputAmount = 0
let balance = 10000
let account=document.getElementById("balance")
let amountEl=document.getElementById("number")
let bin=document.getElementById("withdrawn")
let charges=27.3

account.textContent += balance

function amount(){
    InputAmount += 500
    amountEl.textContent= InputAmount
}
function withdraw(){
    if(InputAmount > 2000){
        amountEl.textContent="limit Exceeded"
        InputAmount = 0
    }else if(balance < 500){
        amountEl.textContent="insufficient fund"
        InputAmount = 0
        exit;
    }else if (InputAmount > balance){
        amountEl.textContent="insufficient fund"
        InputAmount = 0
        exit;
    }else{
       let pluscharges = InputAmount + charges
        balance = balance - pluscharges
        console.log(balance)
        bin.textContent = "Account Balance: " + balance
        account.textContent ="Account Balance: " + balance
        InputAmount = 0
        amountEl.textContent= InputAmount
    }
}