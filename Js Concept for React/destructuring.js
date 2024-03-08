// 37-4 Array and object Destructuring

// 1. array destructuring
const numbers = [42, 65];
// egole old system
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = numbers;
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// console.log(boxify(90, 34));


const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

const [firstMovie, secondMovie] = student.movies;
// console.log(firstMovie, secondMovie);
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// object destructuring
const { name1, age1 } = { name: 'alu', age: 14 };
const { name2, age2 } = { id: 12, name: 'alu', salary: 3400, age: 14 };


const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'];
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;

