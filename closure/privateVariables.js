function createBankAccount(){
    let balance = 0;
    return {
        deposit(amount){
            balance += amount;
            console.log("Deposited: 100, New Balance: " + balance);
        },
        withdraw(amount){
            if(balance >= amount){
                balance -= amount;
                console.log("Withdrew: "+amount+", New Balance: " + balance);
            } else {
                console.log("Insufficient balance to withdraw "+amount+". Current Balance: " + balance);
            }
        },
        currentBalance(){
            console.log("Current Balance : " + balance);
        }
    }
}

const bankAccount1 = createBankAccount();
bankAccount1.deposit(500);
bankAccount1.currentBalance();
bankAccount1.withdraw(200);
bankAccount1.currentBalance();
console.log(bankAccount1.balance); //undefined