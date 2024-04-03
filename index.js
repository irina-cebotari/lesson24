// const person = {
//     name: 'Dima',
//     age: 27
// }

// console.log(Object.getOwnPropertyDescriptor(person, 'name'))
// console.log(Object.getOwnPropertyDescriptors(person))

// person.name = 'Andrei'

// for(let key in person) {
//     console.log(person[key])
// }

// Object.defineProperty(person, 'gender', {
//     value: 'male',
//     writable: true,
//     enumerable: true,
//     configurable: true
// })

// console.log(person)

// Object.defineProperty(person, 'gender', {
//     value: 'male',
//     writable: true,
//     enumerable: false,
//     configurable: true
// })

// console.log(Object.getOwnPropertyDescriptor(person, 'gender'))

// person.gender = 'female'

// console.log(Object.keys(person))
// console.log(Object.values(person))

// for(let key in person) console.log(person[key])

// console.log(person.gender)


// const person = {
//     name: 'Dima',
//     age: 27
// }

// person.city = 'Chisinau'

// console.log(person)

// Object.preventExtensions(person)

// person.job = 'developer'

// Object.prototype.func = () => console.log('test')

// person.func()

// console.log(Object.isExtensible(person))

// Object.seal(person)

// console.log(Object.isSealed(person))

// person.name = 'Victor'

// console.log(person)

// Object.defineProperty(person, 'name', {
//     value: 'Victor',
//     writable: true,
//     enumerable: false,
//     configurable: true
// })

// const person = {
//     name: 'Dima',
//     age: 27
// }

// Object.freeze(person)

// person.name = 'Alex'

// console.log(Object.isFrozen(person))

// Object.defineProperties(person, {
//     city: {
//         value: 'Chisinau',
//         writable: true
//     },
//     hobby: {
//         value: ['swimming', 'gaming'],
//     }
// })

// console.log(Object.getOwnPropertyDescriptors(person))



// const person = {
//     name: 'Dima',
//     age: 27,
//     a: {
//         b: {
//             c: {
//                 d: {
//                     e: 'value',
//                     func: () => console.log('test')
//                 }
//             }
//         }
//     }
// }

// const deepClone = (obj) => {
//     if(obj === null) return obj;
//     let clone;
//     if(Array.isArray(obj)) {
//         clone = [...obj]
//     } else {
//         clone = {...obj}
//     }

// Object.keys(clone).forEach((key) => {
//     clone[key] = typeof clone[key] === 'object' ? deepClone(clone[key]) : clone[key]
// })

//     for(let key in clone) {
//         clone[key] = typeof clone[key] === 'object' ? deepClone(clone[key]) : clone[key]
//     }

//     return clone;

// }

// const person2 = deepClone(person)

// person2.a.b.c.d.e = 'new value';

// console.log('person', person.a.b.c)
// console.log('person2', person2.a.b.c)


// person2.a.b.c.d.func()


// function greet(arg, arg2) {
//     return arg + ' My name is: ' + this.name + arg2
// }

// const obj1 = {
//     name: 'Dima',
//     greet: greet
// }

// const obj2 = {
//     name: 'Andrei',
//     greet
// }

// console.log(obj1.greet('Hi', "!"))
// console.log(obj2.greet.call(obj1, 'Hey', "?"))
// console.log(obj2.greet.apply(obj1, ['Hey', "?"]))

// const bound = greet.bind(obj1)

// console.log(bound('Ola', '!!!'))


// (function func(arg) {
//     console.log('test' + arg)
// }('1'))

// for (let i = 0; i < 5; i++) {
//     const btn = document.createElement('button')
//     btn.innerText = `Button ${i}`
//     btn.onclick = function() {
//         console.log(i)
//     }

// btn.onclick = (function (arg) {
//     return function() {
//         console.log(arg)
//     }
// })(i)

//     document.body.appendChild(btn)
// }


// const list = [1, 2, 3, 4]

// const result = list.reduce((acc, curr) => {
//     acc.push(curr + 1)
//     return acc
// }, [])

// console.log(result)


const list = [1, 2, 3, 4]
let item = 4

const customSum = (list, item) => {
    return result = list.reduce((acc, curr) => {
        if(acc) {
            return acc
        }
        return curr === item
    }, false)
}

console.log(customSum(list, item))