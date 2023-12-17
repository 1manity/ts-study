// 类

import * as console from "console";

class Person {
    // 使用属性列表来描述属性
    age: number
    gender: "男" | "女"
    pid?: number
    private _privateName: string = ''

    // 构造函数 不允许动态添加属性
    // public 简写
    constructor(public name: string, age: number,gender: "男" | "女" = "男") {
        this.age = age
        this.gender = gender
    }

    set privateName(name: string) {
        this._privateName = name
    }

    get privateName() {
        return this._privateName
    }

    // 实例方法
    public sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }

    // 静态方法
    public static sayHi() {
        console.log('Hi, I am a static method');
    }
}

const u = new Person('asd',20)
u.sayHello()

require('./test1')
