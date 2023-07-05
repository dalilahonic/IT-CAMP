// let unos = prompt('Unesite email');

const obj = {
    firstName: 'Dalila',
    lastName: 'Honic',
    god: 2005,
    get getName() {
        return this.firstName;
    },
    set setName(setNewName) {
        this.firstName = setNewName;
    },
    get getAge() {
        const year = new Date().getFullYear();
        return year - this.god;
    },
    email: 'email',
    get getEmail() {
        return this.email;
    },
    set setEmail(newEmail) {
        this.email = newEmail;
    }
};

console.log(obj.getName);
obj.setName = 'nije vise Dalila';
console.log(obj.getName);
console.log(obj.getEmail);

obj.setEmail = 'dalilahonic1@gmail.com';

console.log(obj.getEmail);

//.............................

