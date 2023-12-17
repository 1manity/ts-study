// // 泛型
//
// function take<T>(arr: T[], n: number): T[] {
//     if (n >= arr.length) {
//         return arr;
//     }
//     const newArr: T[] = [];
//     for (let i = 0; i < n; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
//
// const a = take([1, 2, 3, 4, 5], 3)
//
// type callback<T> = (n: T, i: number) => boolean
//
// function filter<T>(arr: T[], callback: callback<T>): T[] {
//     const newArr: T[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i)) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
//
// // 泛型约束
//
// interface hasNameProperty {
//     name: string;
// }
//
// function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
//     obj.name = obj.name.split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ')
//     return obj
// }
//
// // 多泛型
// function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
//     if (arr1.length !== arr2.length) {
//         throw new Error('arr1 and arr2 must have the same length')
//     }
//     return arr1.map((item, index) => {
//         return [item, arr2[index]]
//     }).flat()
// }
// console.log(mixinArray([1, 2, 3], ['4', '5', '6']))

import {Dictionary} from "./dictionary";

const d = new Dictionary<string,number>()
d.set('1',2)
d.set('2',3)

d.forEach((k,v)=> {
    console.log(k,v)
})
console.log(d.has('1'))
