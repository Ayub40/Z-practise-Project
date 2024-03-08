// 37-3 Array methods (map, forEach, filter and find )

const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
]

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// forEach
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

// multi line arrow function er somy eta use korbo
products.forEach(product => {

})

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

const specificName2 = products.filter(p2 => p2.name.includes('a'));
// console.log(specificName2);

// find
const special = products.find(p => p.name.includes('n'));
console.log(special);



