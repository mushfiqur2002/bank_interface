let depositMoney = document.querySelector('.deposit span .money');
let withdrawMoney = document.querySelector('.Withdraw span .money');
let balanceMoney = document.querySelector('.Balance span .money');
let depositIn = document.querySelector('.Deposit_amount input');
let withdrawIn = document.querySelector('.Withdraw_amount input');
let withdrawBtn = document.querySelector('#WithdrawBtn');

// suppose you have 12000 money;
let youHaveMoney = 12000;
let deposit =  0;
let withdraw = 0;
balanceMoney.innerText = youHaveMoney;
depositMoney.innerText = deposit;
withdrawMoney.innerText = withdraw;

// deposit function
function depositFun(){
    let depMoney = parseInt(depositIn.value);
    youHaveMoney += depMoney;
    deposit = depMoney;
    balanceMoney.innerText = youHaveMoney;
    depositMoney.innerText = deposit;
}
// withdraw function
withdrawBtn.addEventListener('click',function(){
    let wiMoney = parseInt(withdrawIn.value);
    youHaveMoney -= wiMoney;
    withdraw = wiMoney;
    balanceMoney.innerText = youHaveMoney;
    withdrawMoney.innerText = withdraw;
    if(youHaveMoney === 0){
        alert("baper bag to ki hoise taka vora tui.");
    }

})



