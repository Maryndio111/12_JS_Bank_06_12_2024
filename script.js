const bank = [];

//Debit card
const bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
  deposit(sum) {
    // TODO
    (sum) => 5 && sum <= 5000
        ? (this.balance += sum)
        : alert("Вводимая сумма для пополнения баланса некорректна");
  },

  withdraw(sum) {
    //TODO
    sum <= this.balance && sum > 0
      ? (this.balance -= sum)
      : alert("Вводимая сумма для снятия баланса некорректна");
  },
  checkBalance() {
    alert(this.balance + "€");
  },
};
bankAccount.deposit(100);
console.log(bankAccount.balance);

bankAccount.withdraw(50);
console.log(bankAccount.balance);

function createAccount(){
  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();

  if (name){
    bank.push({
      ...bankAccount,// шаблон
      accountNumber: `${bank.length + 1}`,
      accountHolderName: name
    });
    //alert("Account created successfully");  не нужно теперь
   // console.log(bank); не нужно теперь
   updateAccountsList();
    
    } else {
  alert("Enter your name");
}
nameInput.value = '';

}
function showAccounts(){
  updateAccountsList();
}
function updateAccountsList(){
  const accountList = document.getElementById('accountList');
  const showSection = document.getElementById('show');

  accountList.innerHTML = '';

  if (bank.length >0 ) {
    showSection.style.display = 'block'
    for (const account of bank) {
      const li =document.createElement('li');
      li.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;
      accountList.appendChild(li);
    }
  } else {
    showSection.style.display = 'none';
    
  }
}

//event listener

const withdrawBtn = document.getElementById('withdraw');
const depositBtn = document.getElementById('deposit');


withdrawBtn.onclick = function(){
  //TODO  ОПИСАНИЕ СОБЫТИЯ КЛИКА НА ДАННУЮ КНОПКУ
}

depositBtn.onclick = function () {
  // TODO (описание события клика на depositBtn)
}


