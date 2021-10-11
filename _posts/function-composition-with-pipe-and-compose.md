---
title: "Write better JavaScript, function composition with pipe and compose"
excerpt: "When I started my journey into functional programming I found myself thinking of it as both exciting and confusing. One of the core concepts I found useful in my everyday work is function composition, thanks to its intuitive nature it's not hard to introduce it even in a well-established codebase."
coverImage: "/images/blog/function-composition-with-pipe-and-compose.jpg"
date: "2021-10-11"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

When I started my journey into _functional programming_ I found myself thinking of it as both exciting and confusing. One of the core concepts I found useful in my everyday work is **function composition**, thanks to its intuitive nature it’s not hard to introduce it even in a well-established codebase.

## Compose

When speaking of function composition we can think of it as **a way of chaining multiple functions together to create a new function**, in other terms we are solving a problem reducing it into smaller solutions that **in themselves don’t accomplish much but together can solve complex tasks**.

Let’s take a look at an example, let’s say we want to calculate a 20% discount on a price, we can create three functions like so:

```javascript
const multiply20 = (price) => price * 20
const divide100 = (price) => price / 100
const normalizePrice = (price) => price.toFixed(2)
```

The code above is really simple, now we need to find a way to combine them, the more traditional way would be to **put functions as arguments of the next function**:

![alt text](https://res.cloudinary.com/dzhke1ez3/image/upload/v1633970966/FilippoRivolta-next/iyr1g5gzefjhzje269ks.jpg)

```javascript
// result = a(b(c(x)))
const discount = normalizePrice(divide100(multiply20(200))) // 40.00
```

This way **the result of the inner function is taken by the outer function as an argument** until the end of the chain:
We have now managed to chain our functions together, we can achieve the same result writing a **compose function** improving readability:

```javascript
const compose = (a, b, c) => (x) => a(b(c(x)))
```

![alt text](https://res.cloudinary.com/dzhke1ez3/image/upload/v1633970966/FilippoRivolta-next/uyvt6isdqvyjkpyfzlzl.jpg)

so our code becomes:

```javascript
const discount = compose(normalizePrice, divide100, multiply20)
discount(200.0) //40.00
```

Our compose function makes the code more readable and cleaner but we can improve it to **accept more than three functions** using the **higher-order** reduceRight function:

```javascript
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x)
```

what we are doing is that using the spread operator we are transforming the arguments (our functions) into an array and return a new function that takes an argument “X” that will be used as the initial value of the accumulator of our reduceRight function. **We are basically executing every function passed as an argument from right to left with the result of the previous one**.
So if we now want to add a new function to add a ‘$’ prefix to our discount we can simply add it to the compose arguments list

```javascript
const addPrefix = (price) => "$" + String(price) //$ 40.00
const discountWithPrefix = compose(
  addPrefix,
  normalizePrice,
  divide100,
  multiply20
)
discountWithPrefix(200.0) // '$40.00'
```

## Pipe

![alt text](https://res.cloudinary.com/dzhke1ez3/image/upload/v1633970966/FilippoRivolta-next/vtn0hvueiajhtonwedfw.jpg)

_Pipe_ works the exact same way as compose, the only difference is that i**nstead of executing arguments from right to left, it executes them from left to right**, we can implement a Pipe function like this:

```javascript
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x)
```

the only difference is that _reduceRight_ has become _reduce_. Personally, I prefer to _compose_ over _pipe_ even if it seems counterintuitive at first glance.
Our final code would be:

```javascript
const multiply20 = (price) => price * 20
const divide100 = (price) => price / 100
const normalizePrice = (price) => price.toFixed(2)
const addPrefix = (price) => "$" + String(price)

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x)
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x)

const discountPipe = pipe(multiply20, divide100, normalizePrice, addPrefix)
const discountCompose = compose(
  addPrefix,
  normalizePrice,
  divide100,
  multiply20
)

discountPipe(200) // '$40.00'
discountCompose(200) // '$40.00'
```

## Ramda

You don’t have to write your own version of _pipe_ or _compose_ every time you write a piece of code, you can use libraries such as [Ramda](https://ramdajs.com/docs/#compose) and focus on the implementation of your code.

## Conclusion

Hopefully, this article gave you an insight into the benefits of functions composition and how you can introduce it in your everyday work, **if you have any questions leave a comment**!
