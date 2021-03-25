var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log("Imi\u0119: " + person.name + ", nazwisko: " + person.surname + ", wiek: " + person.age + ", rola: " + person.role);
}
function filterPersons(persons, criteria) {
    return persons.filter(function (person) { return (Object.keys(criteria).every(function (key) { return (criteria[key] === person[key]); })); });
}
// 1
var people1 = users.concat(admins);
people1.forEach(function (person) {
    logPerson(person);
});
// 2
var people2 = __spreadArray(__spreadArray([], users), admins);
people2.forEach(function (person) {
    logPerson(person);
});
// 3
var peopleOver25Years = people2.filter(function (person) { return person.age > 25; });
peopleOver25Years.forEach(function (person) { return logPerson(person); });
"";
// 4
var filtered = filterPersons(people1, { name: 'John' });
filtered.forEach(function (person) {
    logPerson(person);
});
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
