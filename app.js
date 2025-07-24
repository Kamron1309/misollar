// Massiv elementlarini bitta qiymatga qisqartirish (reduksiya qilish).
let number = [1, 2, 3, 4];
let sum = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 10
//  Massivdan berilgan shartga mos keladigan elementlarni filtrlab yangi massiv qaytarish.
let numberss = [1, 2, 3, 4, 5];
let evenNumbers = numberss.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
//  Massivning kamida bitta elementi berilgan shartni qanoatlantirishini tekshirish (true/false qaytaradi).
let numbersi = [1, 2, 3, 4, 5];
let hasEvenNumber = numbersi.some(num => num % 2 === 0);

console.log(hasEvenNumber); // true
// Massivning HAR BIR elementi berilgan shartni qanoatlantirishini tekshirish (true/false qaytaradi).
let numbers = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); // true
//  Massivda berilgan shartga mos keladigan BIRINCHI elementni topish (topilmasa undefined qaytaradi).
let users = [
  {id: 1, name: 'Ali'},
  {id: 2, name: 'Vali'},
  {id: 3, name: 'Hasan'}
];

let user = users.find(user => user.id === 2);
console.log(user); // {id: 2, name: 'Vali'}