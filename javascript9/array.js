// for each method
const numbers = [1, 2, 5, 6, 9];
numbers.forEach((number) => {
    console.log("rojit");
});

//map method 
const ojt = [1, 2, 3, 4];
const doubled = ojt.map(num => num * 2);
console.log(doubled);

// map method 
const names = ["Alice", "Bob", "Charlie"];
const newname = names.map(names => names.toLowerCase());
console.log(newname);

// filter method 
const num = [2, 4, 9, 7, 5, 13];
const newojt = ojt.filter(num => num % 2 == 0);
console.log(newojt);

// filter method 
const people = [
    {name : "tom", age : 19},
    {name : "ram", age : 12},
    {name : "hari", age : 41}
];
const ner = people.filter(person => person.age>=18);
console.log(ner);
