
let say: string = '123'

console.log(say)

// let name: string
//
// name = 123

function sum(a: number, b: number): number {
    return a + b
}

let num: number = sum(213, 321)

// let age
// console.log(age)

let nums: number[] // 语法糖
let nums2: Array<number>
nums = [1, 2, 3]

let obj: object = {} // 不够精准
obj = {
    name: 'tom',
    age: 18,
    say: 'hello'
}
printValue(obj)
function printValue(obj: object) {
    const vals: string[] = Object.values(obj)
    vals.forEach(val => {
        console.log(val)
    })
}

// const s:string = undefined

// 联合类型
let un: string | undefined = '123'
// 类型保护：当对某个变量进行类型判断之后，在判断的语句块中便可以确定它的确切类型，typeof可以触发类型保护。
if (typeof un === 'string') {
    console.log(un.length)
} else {
    console.log(un)
}

// never类型
function throwError(msg: string): never {
    throw new Error(msg)
}
function alwaysDoSomething(msg: string): never {
    while (true) {
        // console.log(msg)
    }
}

// 字面量类型
let za: 1 | 2 | 3 = 1
let zb: 'a' | 'b' | 'c' = 'a'
za = 3
zb = 'b'

// 元组类型
let tuple: [string, number] = ['tom', 18]

// any类型
let any: any = 123

// 类型别名 给一个类型取个别名
type Name = string

// 函数约束
// 函数重载：在函数实现之前，对函数调用的多种情况进行声明


/**
 * 得到一个数和一个字符串，返回一个数和一个字符串
 * @param a
 * @param b
 */
function combine(a: number, b: number): number
function combine(a: string, b: string): string
function combine(a: number | string, b: number | string): number | string {

    if (typeof a === 'number' && typeof b === 'number') {
        return a * b
    } else if (typeof a ==='string' && typeof b ==='string') {
        return a + b
    }
    throw new Error('类型不匹配')
}
const result = combine(1, 2)

// 可选参数：可以在某些参数名后加上问号，表示该参数可以不用传递。可选参数必须在参数列表的末尾。
function sum2(a:number, b:number,c?:number) {
    if (c) {
        return a + b + c
    } else {
        return a + b
    }
}

require('./test1')
