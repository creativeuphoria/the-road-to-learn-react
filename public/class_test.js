class Test {

    constructor(forename, surname) {
        this.forename = forename;
        this.surname = surname;
    }

    getName() {
        return this.forename + ' ' + this.surname;
    }

}

const bob = new Test('Bob', 'Smith');

console.log(bob.getName());