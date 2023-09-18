# StackUp
My Bank Account Management website is designed to help users simulate the management bank accounts with a user-friendly interface. This write up provides instructions on how to use the website and explains how I incorporated classes, switch statements, and try-catch-finally statements into its functionality.

Getting started:
Input Your Information: Begin by entering your "Account Holder Name" in the designated field. As you type, the website will automatically generate a random 8-digit "Account Number" for you.
Select Account Type: Choose your "Account Type" from the dropdown menu, either "Savings" or "Checking."

Managing Your Account:
Deposit Funds: Enter the amount you want to deposit into your account in the "Amount" field. Click the "Deposit" button. If you input a negative value or non-numeric characters, the website will detect it as an "Invalid Input" and display an error message.
Withdraw Funds: Similarly, you can withdraw funds by entering the amount and clicking the "Withdraw" button. If you try to withdraw more than your account balance or input an invalid amount, the website will catch this as an "Insufficient Funds" or "Invalid Input" error and notify you accordingly.

Code Structure:
The website utilizes a Bank Account class that encapsulates account-related properties and methods. We generate a random account number for each account upon creation.

We employ switch statements to handle deposit, withdrawal, and balance check operations efficiently. This structure enhances code readability and maintainability.

To ensure robust error handling, I implemented try-catch-finally statements. For example, if an exception occurs due to insufficient funds or invalid input, the website will handle the error and provide descriptive error messages.

In summary, the Bank Account Management website simplifies account management through an intuitive interface. It showcases the use of classes, switch statements, and error handling techniques which I have implemented with the knowledge I gained throughout the campaign.
