// Pierwszy sposób
// class Person {
//     constructor(
//         private firstName: string, 
//         private lastName: string, 
//         private age: number
//     ) {}
//     show(): void {
//         document.body.innerHTML = `<h1>Witaj ${this.firstName} ${this.lastName} mam ${this.age}</h1>`
//     }
// }
// const person = new Person('John', 'Blake', 11);
// person.show();

// Drugi sposób
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.show = function () {
        var heading = document.createElement('h1');
        heading.textContent = "Witaj " + this.firstName + " " + this.lastName + " mam " + this.age;
        document.body.appendChild(heading);
    };
    return Person;
}());
var person = new Person('John', 'Blake', 11);
person.show();
