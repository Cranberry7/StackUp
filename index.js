// Bank Account class
class BankAccount {
    constructor(accountHolderName, accountType) {
        this.accountHolderName = accountHolderName;
        this.accountType = accountType;
        this.balance = 0;
        this.accountNumber = this.generateAccountNumber();
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        } else {
            throw new Error("Invalid amount");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        } else {
            throw new Error("Insufficient funds");
        }
    }

    generateAccountNumber() {
        const min = 10000000;
        const max = 99999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}

// Initialize account
let account;

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    const accountNameInput = document.getElementById("account-name");
    const accountTypeSelect = document.getElementById("account-type");
    const balanceDisplay = document.getElementById("balance-display");
    const amountInput = document.getElementById("amount");
    const depositButton = document.getElementById("deposit");
    const withdrawButton = document.getElementById("withdraw");
    const errorMessage = document.getElementById("error-message");

    depositButton.addEventListener("click", () => {
        try {
            const amount = parseFloat(amountInput.value);
            if (isNaN(amount)) throw new Error("Invalid input");
            account.deposit(amount);
            balanceDisplay.textContent = `$${account.balance.toFixed(2)}`;
            errorMessage.textContent = "";
        } catch (error) {
            errorMessage.textContent = error.message;
        } finally {
            amountInput.value = "";
        }
    });

    withdrawButton.addEventListener("click", () => {
        try {
            const amount = parseFloat(amountInput.value);
            if (isNaN(amount)) throw new Error("Invalid input");
            account.withdraw(amount);
            balanceDisplay.textContent = `$${account.balance.toFixed(2)}`;
            errorMessage.textContent = "";
        } catch (error) {
            errorMessage.textContent = error.message;
        } finally {
            amountInput.value = "";
        }
    });
    accountNumberDisplay.textContent = "Account Number: N/A";
    accountNameInput.addEventListener("input", () => {
        const accountHolderName = accountNameInput.value;
        if (accountHolderName) {
            account = new BankAccount(accountHolderName, accountTypeSelect.value);
            accountNumberDisplay.textContent = `Account Number: ${account.accountNumber}`;
        } else {
            accountNumberDisplay.textContent = "Account Number: N/A";
        }
    });
});

// Initialize the account when the page loads
account = new BankAccount(" ", "Savings");
