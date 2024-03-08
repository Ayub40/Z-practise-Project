// 37-8 dot vs bracket notation
const person = {
    name: 'Lal Nil Holud mia',
    profession: 'Traffic Surgeon',
    age: 39,
    '25': 'Summer',
    'son-name': 'Sunny',
    address: 'Shahabag'
}
// ---------------------------------------------------------------------------
// dot natation
const prof1 = person.profession;
// console.log(prof1);
// --------------------------------------
// bracket notation
const prof2 = person['profession'];
// console.log(prof2);
// --------------------------------------
const pName = 'age';
const prof3 = person[pName];
// console.log(prof3);
// --------------------------------------
const season = person[25];
// console.log(season);
const son = person['son-name'];
console.log(son);