// Pierwszy sposób
class Person {
    constructor(
        private firstName: string, 
        private lastName: string, 
        private age: number
    ) {}

    public show(): void {
        document.body.innerHTML = `<h1>Witaj ${this.firstName} ${this.lastName} mam ${this.age}</h1>`
    }
}

const person = new Person('John', 'Blake', 11);
person.show();

// Drugi sposób
// class Person {
//     private firstName: string;
//     private lastName: string;
//     private age: number;

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     public show(): void {
//         const heading: HTMLHeadingElement = document.createElement('h1');
//         heading.textContent = `Witaj ${this.firstName} ${this.lastName} mam ${this.age}`;
//         document.body.appendChild(heading);

//     }
// }

// const person = new Person('John', 'Blake', 11);
// person.show();


