interface Person {
    name: string;
    surname: string;
    age: number;
    role: string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
        console.log(`Imię: ${person.name}, nazwisko: ${person.surname}, wiek: ${person.age}, rola: ${person.role}`)
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
        return persons.filter(person => (
            Object.keys(criteria).every(key => (
                criteria[key] === person[key]
            ))
        ))
    }

    // 1
    const people1: Person[] = users.concat(admins);
    people1.forEach(person => {
        logPerson(person);
    })

    // 2
    const people2: Person[] = [...users, ...admins];
    people2.forEach(person => {
        logPerson(person);
    })

    // 3
    const peopleOver25Years: Person[] = people2.filter(person => person.age > 25);
    peopleOver25Years.forEach(person => logPerson(person));
``
    // 4
    const filtered: Person[] = filterPersons(people1, { name: 'John' });
    filtered.forEach(person => {
        logPerson(person);
    })

    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });