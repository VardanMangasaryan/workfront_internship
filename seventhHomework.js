// 1.

class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    toString() {
        return `${this._name} is ${this._gender} and his mail is: ${this._email}`
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (value instanceof Author) {
            this._author = value;
        } else {
            throw new Error("Author's value should be instance of Author")
        }
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    getProfit() {
        return this._price * this._quantity
    }

    toString() {
        return `${this._author.toString()}. He wrote the book ${this._title}: Price is ${this._price} and the quantity is ${this._quantity}`
    }
}


// 2.

class Account {

    _id = Math.floor(Math.random() * 10000);

    constructor(name, balance) {
        this._name = name;
        this._balance = balance;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    get id() {
        return this._id;
    }

    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (amount > this.balance) {
            return "Amount exceeded balance";
        } else {
            this.balance -= amount;
            return this.balance;
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount > this.balance) {
            return "Amount exceeded balance";
        } else {
            this.balance -= amount;
            anotherAccount.credit(amount);
            return this.balance;
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return (accountFirst._id === accountSecond._id && accountSecond._name === accountSecond._name && accountFirst._balance === accountSecond._balance)
    }

}

// 3.

class Person {

    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    toString() {
        return `${this._firstName} ${this._lastName} is ${this._age} years old and the gender is ${this._gender}`
    }

}

class Student extends Person {

    _programAndGrade = {};

    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._year = year;
        this._fee = fee;
    }

    get program() {
        return this._program;
    }

    set program(value) {
        this._program = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get fee() {
        return this._fee;
    }

    set fee(value) {
        this._fee = value;
    }

    passExam(program, grade) {
        this._programAndGrade[program] = grade;
    }

    isAllExamPassed() {
        for (let value of Object.values(this._programAndGrade)) {
            if (value < 50) {
                return "You did not pass all exams"
            }
        }
        this._year += 1;
        this._programAndGrade = {};
        return `All exams are passed and the student's next yeas is ${this._year}`
    }
    toString() {
        return super.toString() + `: Current school year is ${this._year}`;
    }
}


class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._pay = pay;
    }

    get program() {
        return this._program;
    }

    set program(v) {
        this._program = v;
    }

    get pay() {
        return this._pay;
    }

    set pay(v) {
        this._pay = v;
    }

    toString() {
        return `${this._firstName} ${this._lastName} is a teacher of ${this._program} and earns ${this._pay}`;
    }
}
