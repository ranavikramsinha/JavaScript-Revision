class AccountHolder {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountBalance = 0;
    }

    static rateOfInterest = 4;

    static getRateOfInterest(){
        console.log(`The Rate of interest is ${this.rateOfInterest}%.`)
    }

    getAccountBalance(){
        console.log(`${this.firstName} ${this.lastName}'s account balance is ${this.accountBalance}.`);
    }

    credit(amount){
        this.accountBalance += amount;
    }

    debit(amount){
        this.accountBalance -= amount;
    }
}

let aryan = new AccountHolder('Aryan', 'Sinha');
aryan.getAccountBalance();
aryan.credit(1000);
aryan.getAccountBalance();
aryan.debit(200);
aryan.getAccountBalance();
AccountHolder.getRateOfInterest();