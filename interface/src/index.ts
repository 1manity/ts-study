// 接口和类型兼容性
// TypeScript的接口：用于约束类、对象、函数的契约（标准）
import * as console from "console";

interface Person {
    name: string
    age: number

    sayHello(): void

    sayHello2: () => void
}

let u: Person = {
    name: 'Tom',
    age: 18,
    sayHello() {
        console.log('Hello')
    },
    sayHello2() {
        console.log('Hello2')
    }
}

function sum(numbers: number[], callback: (sum: number) => boolean) {
    let sum = 0
    numbers.forEach(num => {
        if (callback(num)) {
            sum += num
        }
    })
    return sum
}

console.log(sum([1, 2, 3, 4, 5],num => num % 2 === 0))

// 接口的继承

interface SuperSkill  {
    superSkill: string
}
interface SuperPerson extends Person,SuperSkill {

}

// readonly
interface ReadOnlyTest {
    readonly id: readonly string[]
}

// 类型兼容

interface Duck {
    sound: "嘎"
    swim(): void
}
let person = {
    name: "伪装成鸭子的人",
    age: 11,
    sound: '123' as '嘎',
    swim() {
        console.log('swim')
    }
}
let duck:Duck = person
console.log(duck)

require('./test1')
