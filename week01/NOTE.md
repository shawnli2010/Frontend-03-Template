学习笔记

# JavaScript类型：关于类型，有哪些你不知道的细节？

### Undefined

1. undefined is a variable instead of a keyword, which is a design flaw of javascript; in order to avoid the undefined variable being modified, it is recommended to use **void 0** to get undefined value
2. null is a keyword, so it is safe to use the keyword null to get the null value
3. best practice: should avoid assigning *undefined* to declared variable, since undefined should be treated as the variable has never been declared / defined, like accessing an non-existing property on an object; instead we should assign null if we want to clear value of declared variable

### Number

1. don't use == or === to check whether two floating point numbers are equal or not. For example:

    ```jsx
    console.log( 0.1 + 0.2 == 0.3); // false
    console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON); // true
    ```

# 如何设计“狗咬人” — 行为改变状态

class Dog {

bite(human) { ... }

}

This is wrong, because after a Human is bitten, the state of Dog will not change; the state of Human will be changed, therefore we should create the method on the Human class as the following

class Human {

hurt(damage) { ... }

}

We can attach information about the damage that a human will receive while calling this method, like who hurt the human, how much damange does it cause on the human, etc. But we will definitely not pass in the Dog object into this hurt method, it violates the design principle of ''high aggregatino and low coupling" (高内聚 低耦合)