document.getElementById('btn-withdraw').addEventListener('click', function () {
    // getting the input field valu of withdraw field and converting it to floating point number
    let withdrawInputField = document.getElementById('withdraw-amount');
    let withdrawAmount = parseFloat(withdrawInputField.value);
    if (isNaN(withdrawAmount)) {
        alert('Input a valid number');
        return;
    }
    // getting the total balance displaying
    let totalDisplayBalance = document.getElementById('balance-display');
    // getting the total balance 
    let totalBalance = totalDisplayBalance.innerText;
    //getting the withdraw field
    let withDrawField = document.getElementById('withdraw-field');
    // getting the withdraw field value
    let totalWithdraw = parseFloat(withDrawField.innerText);
    // updating the withdraw field value
    totalWithdraw += withdrawAmount;
    // console.log(totalWithdraw);
    console.log(totalWithdraw);
    // setting the total balance
    totalBalance = parseFloat(totalBalance) - withdrawAmount;
    // displaying the total available balance and withdraw amount
    if (totalBalance < 0) {
        totalDisplayBalance.innerText = 'Insuffient balance';
    } else if (totalBalance === 0) {
        totalDisplayBalance.innerText = 'Tell your pappa to deposit more';
    }
    else {
        //setting the total withdraw amount as withdraw field innertext
        withDrawField.innerText = totalWithdraw;
        totalDisplayBalance.innerText = totalBalance;
    }
    withdrawInputField.value = '';

})