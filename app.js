console.log('Hello World');

function sum (a, b){
    return a+b;
}
// console.log(sum(7,8))

let sum2 = (a,b)=>a+b
// console.log(sum2(7,83))

//string literals
const username = 'Pratham'
// console.log(`${username} logged in`)

// & -> multiple params in URL

//objects
const person ={
    name: 'Pratham',
    place: 'Ahmedabad',
    height: 178,
    weight: 76,
    bmi: ()=>{
        return 
    }
}

console.log();

//arrays

// console.log(numbers);

//slicing -> copies start and end elements

//filter & every

//1. Filter -> returns a new array
const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

//2. Every  -> returns a boolean result

const marks = [34, 56, 78, 98, 123, 21];

const allPassed = marks.every((mark) => mark > 100);

console.log(allPassed);

//slice vs splice

const persons = [
    {
        name: 'Pratham',
        age: 20,
    },
    {
        name: 'Shibu',
        age: 20,
    },
    {
        name: 'Raj',
        age: 20,
    },

]

const arr2 = persons.map(person=>{
    return {...person, message: `Hello ${person.name}`}
})

// console.log(arr2)

const fruits = ['banana', 'orange', 'apple', 'mango'];

fruits.splice(fruits.indexOf('mango'), 1)

console.log(fruits);

const arr1= [1,2,3]

arr1.splice(arr1.length, )
//two arrays merge into one
//array of objects, pos where name is vrunda 
//string methods

//Reduce


//spread, rest[store in array] & Destructure

//rest -> we don't know how many args will be passed
function sum(...numbers) {
  return numbers[0].reduce((sum, value) => {
    return sum + value;
  }, 0);
}

console.log(sum([1,2,3,4,9]));

//Destructuring
//we don't bother about ordering
const printAbout = ({name, age})=>{ 
    console.log(`My name is ${name} and My age is ${age}`);
}

const person1 = {
    name: 'Pratham',
    age: 20,
    address: {
        city: 'Ahmedabad',
        state: 'GUJ'
    }
}

printAbout(person1);

const {city} = person1 ?. address
console.log(city)

const cars = ['ford', 'seltos', 'kia', 'maruti']
const[f,,kia,]= cars

console.log(kia+f);

