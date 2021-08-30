// Object
// {}
// key:values

// literals object
let person = {
    firstName: 'Superman',
    lastName: 'Kent',
    age: 30,
    isSingle: true,
    hobbies: ['flying', 'save the world'],
    // ..Object
    // ..function
    'is happy': true
}

// key of single word: no quotes needeed
// key of multiple word: quotes needeed

// Object Accessing
console.log(person)

// display vlaue of key in an object 
// dot notation whe th key id a single world
console.log(person.firstName)

// braquet notation for single or multiple key word
console.log(person['firstName'])
console.log(person['lastName'])

// reassing value in an object
person.isSingle = false
console.log(person)
person.age = 40
console.log(person)

person.hobbies.push('football')
console.log(person)

//add new key and value 
person.city = 'NYC'
console.log(person)
person.isCool = true
person['I believe i can fly'] = true
console.log(person)

//delete key and value from object
delete person.isCool
console.log(person)

delete person.age
console.log(person)

// primitive data & reference data 
let num1 = 2
let num2 = num1
num1 = 1
console.log(num1) //1
console.log(num2) //2

//
let a = 'a'
let b = 'a'
console.log(a == b)

// 
let object1 = {}
let object2 = {}
let object3 = object1
console.log(object1 == object2)
object1.newElement = 'test'
console.log(object1)

// methods = (like function in global scope)
// object => properties (keys: value) + Methods (functions)
let user = {
    firstName: 'batman',
    city: 'Gotham',
    movies: ['The Dark Knight Rises ', 'Batman: Mask of the Phatnasm'],
    logIn: () => {
        console.log('arrow synthax')
        console.log('batman is logged In')
        console.log('1', this)
    },
    logOut: function () {
        console.log('function synthax')
        console.log('batman is logged Out')
        console.log('2', this)
    },
    subscribe() {
        console.log('function synthax')
        console.log('batman is subscriber')
        console.log('3', this)
        console.log(user.firstName)
        console.log(this.firstName)
    }
}

console.log(user)
user.logIn
user.logIn()

user.logOut()
user.subscribe()

console.log(this)
console.log(Math)
console.log(Math.PI)
console.log(Math.random())

// Object product 
// productName
// productPrice
// productYearProduction
// productDescription = > th productNAme cost ProductPrice & and was made 
// => the macbook M1 cost 1000$ and was made in 2020

let product = {
    productName: 'macbook M1',
    productPrice: '1000$',
    productYearProduction: 2020,
    productDescription() {
        return `the ${this.productName} cost ${this.productPrice} and was made in ${this.productYearProduction}`
    }
}

console.log(product.productDescription())

// Loops Object
// for in 

let newCar = {
    model: 'Audi',
    year: 2020,
    color: 'gold'
}
console.log(newCar.model)

for (let key in newCar) {
    console.log(key)
    console.log(newCar[key])
}

let grade = {
    math: 10,
    sport: 6,
    js: 9,
    css: 8,
    java: 1
}

// 10+6+9+8+1

let sum = 0

for (let key in grade) {
    console.log(grade[key])
    sum += grade[key]
}
console.log(sum)

// grade.sum()

// Array of all keys from an object 
let gradeKeys = Object.keys(grade)
console.log(gradeKeys)

// Array of all values from an object 
let gradeValues = Object.values(grade)
console.log(gradeValues)

// Array of array of key and values an Object
let gradeEntries = Object.entries(grade)
console.log(gradeEntries)

let victorHugo = {
    firstName: 'Victor',
    lastName: 'Hugo',
    books: ["le dernier jour d'un condamne", 'le Rhin'],
    description() {
        console.log(`I am ${this.firstName} ${this.lastName}, did write: `)
        this.books.forEach(elt => console.log('- ' + elt))
    }
}

victorHugo.description()

let georgeMartin = {
    firstName: 'George',
    lastName: 'Martin',
    books: ['Game of Thrones', 'book 2', 'book 3'],
    description() {
        console.log(`I am ${this.firstName} ${this.lastName}, did write: `)
        this.books.forEach(elt => console.log('- ' + elt))
    }
}

georgeMartin.description()

// Object constructor
// function Object Constructor
function Author(firstNameParam, lastNameParam, booksParam) {
    this.firstName = firstNameParam
    this.lastName = lastNameParam
    this.booksKeys = booksParam
    this.description = function () {
        console.log(`I am ${this.firstName} ${this.lastName}, did write: `)
        this.booksKeys.forEach(elt => console.log('- ' + elt))
    }
    this.logIn = function () {
        console.log('I am logged in')
    }
    this.logOut = function () {
        console.log('I am logged out')
    }
}

let michelleObama = new Author('Michelle', 'obama', ['becoming', 'American growt'])
let barackObama = new Author('Barack', 'Obama', ['A promised Land', 'A dream for my father'])
console.log(michelleObama)
michelleObama.description()
michelleObama.logOut()

console.log(barackObama)
console.log(barackObama.firstName)
barackObama.logOut()

// Object product 
// productName
// productPrice
// productYearProduction
// productDescription = > th productNAme cost ProductPrice & and was made 
// => the macbook M1 cost 1000$ and was made in 2020

// let product = {
//     productName: 'macbook M1',
//     productPrice: '1000$',
//     productYearProduction: 2020,
//     productDescription() {
//         console.log(`the ${this.productName} cost ${this.productPrice} and was made in ${this.productYearProduction}`)
//     }
// }

// product.productDescription()

let productConstructor = function Author(productName, productPrice, productYearProduction) {
    this.productName = productName
    this.productPrice = productPrice
    this.productYearProduction = productYearProduction
    this.productDescription = function () {
        console.log(`the ${this.productName} cost ${this.productPrice} and was made in ${this.productYearProduction}`)
    }
    this.productDescription1 = function () {
        console.log(`the ${this.productName} cost ${this.productPrice} and was made in ${this.productYearProduction}`)
    }
}

let tv = new productConstructor('Samsung', 500, 2021)
tv.productDescription()
tv.productDescription1()

let tv2 = new productConstructor('LG', 700, 2020)
tv2.productDescription()
tv2.productDescription1()