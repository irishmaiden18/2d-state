// console.log("array & object destructuring!")

let strings = ["sun", "moon", "sky", "stars"]

// let str1 = strings[0];
// let str2 = strings[1];
// let str3 = strings[2];
// console.log(str1)

// array destructuring - pick out the items you want to access from an array and store them in variables
// the variables you create become assigned to their respective index. can name them whatever we want, doens't have to have numbers
// equivalent to above, don't have to use all elements of the array, just pick off what you want
// let [str1, str2, str3] = strings
// console.log(str1)

// can skip over items too
let [str1, ,str3] = strings;
// console.log(str3)

// to get just the last element
let [, , , str4] = strings
// console.log(str4)

strings.push("space")
// access the 2nd and 5th element
let [, str2, , , str5] = strings
// console.log(str2)
// console.log(str5)

strings.push("earth")
strings.push("comet")
strings.push("asteroid")
strings.push("satellite")

// ...
// rest parameter - used in destructuring, gives us the rest of all elements in the array after initial destructuring
let [item1, item2, , , , ,...items] = strings
// console.log(item1)
// console.log(item2)
// console.log(items)

// spread operator
// "spreads" out an array into its individual items
let nums1 = [5, 10, 15, 32]
// console.log(nums1)
// console.log(...nums1)

let nums2 = [100, 105, 110, 134]
let numsTotal = [...nums1,...nums2]
// console.log(numsTotal)

// Math.max() - gets largest number of group of numbers passed in
// doesn't work with arrays, works with a group of numbers
// to find the largest numbewr in an array with Math.max(), we can utilize the spread operator (...) to convert our array
// console.log("MAX: ")
// console.log(Math.max(10, 3, 12, 9, 4))

// console.log(Math.max(...numsTotal))

let person = {
    firstName: "Jim",
    lastName: "Walker",
    age: 35
}

// console.log(person.firstName)

// object destructuring
// allows us to specify the peroperties we want to access and utilize them as variables
/*
    in react with props, when passing to componenets, we're realling doing something like this:
    <Component prop1={value} prop 2={value2/>}
    {prop1, prop2} = props
*/
// property names must match the names of the actual properties, order doesn't matter
let {firstName, age, lastName} = person
// console.log(`destructured: ${firstName} ${lastName} - Age: ${age}`)

// const getFullName = (person) => {
//     return `${person.firstName} ${person.lastName}`
// }

const getFullName = ({firstName, lastName}) => {
    return `${firstName} ${lastName}`
}

// console.log(getFullName(person))

let person2= {
    firstName: "Joey",
    lastName: "Smith",
    age: 27
}

// naming conflict!!
// let {firstName, lastName, age} = person2;

// property names MUST match!!! Doesn't work
// let {firstName1, lastName1, age1} = person2;

// aliasing
// you CAN pick out the properties and overwrite the names with aliasing
// let {propertyName: aliasName}
let {firstName:p2firstName, age: p2age, lastName: p2lastName} = person2
// console.log(p2firstName)
// console.log(p2lastName)
// console.log(p2age)

// admin, same properties as person except with an isAdmin boolean

// const admin = {
//     firstName: person.firstName,
//     lastName: person.lastName,
//     age: person.age,
//     isAdmin: true
// }

// can copy properties of existing object with spread operator ... 
// you can add additional properties and overwrite the values of existing properties while retaining the other original properties of the obeject
const admin = {...person, lastName: "Lanier", isAdmin: true}

console.log(admin)