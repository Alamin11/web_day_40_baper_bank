// console.log('MoneyCalculator');
document.getElementById('btn-deposit').addEventListener('click', function () {
    let depositField = document.getElementById('deposited-amount');
    let depositAmount = parseFloat(depositField.value);
    // console.log(typeof depositAmount);
    const depositDisplay = document.getElementById('deposit-display');
    depositDisplay.innerText = depositAmount;
    let totalDisplayBalance = document.getElementById('balance-display');
    let totalBalance = totalDisplayBalance.innerText;
    // console.log(typeof totalBalance);
    totalBalance = parseFloat(totalBalance) + depositAmount;
    // console.log(totalBalance);
    totalDisplayBalance.innerText = totalBalance;
    depositField.value = '';

});
