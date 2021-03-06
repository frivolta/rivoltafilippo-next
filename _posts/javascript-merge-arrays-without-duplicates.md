---
title: "Javascript merge arrays without duplicates"
excerpt: "A few days ago I wrote a code that involved merging two large arrays without duplicates. My first reaction was to write a reduce function that initiated the accumulator, looped every element and checked whether it was already in the array"
coverImage: "/images/blog/javascript-merge-arrays-without-duplicates.jpg"
date: "2021-04-13"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

A few days ago I wrote a code that involved **merging two large arrays without duplicates**. My first reaction was to write a _reduce_ function that initiated the _accumulator_, looped every element and checked whether it was already in the array:

```javascript
const firstArr = new Array(200).fill(undefined).map((val, i) => `item${i}`)
const secondArr = new Array(250).fill(undefined).map((val, i) => `item${i}`)
const result = secondArr.reduce(
  (acc, item) => {
    return acc.includes(item) ? acc : [...acc, item]
  },
  [...firstArr]
)
```

_Performance speed: **0.2749999985098839** milliseconds._

This solution worked well for me, but I wondered if I could **improve the performance** a little more, and ended up with a few solutions.
_For testing purposes, each described method uses the same arrays:_

```javascript
const firstArr = new Array(200).fill(undefined).map((val, i) => `item${i}`)
const secondArr = new Array(250).fill(undefined).map((val, i) => `item${i}`)
```

also I will check the execution speed at the end of every function with **performance.now()**.

## First solution

The traditional way to accomplish the task is to **initialize an empty result array** that contains the result items, **create a loop for each array** that has to be merged, and **store the current element** in the result array if it is not present. The **presence is checked using indexOf** that will _return -1_ if not.

```javascript
const result = []
for (let i = 0; i < firstArr.length; i++) {
  if (result.indexOf(firstArr[i]) == -1) result.push(firstArr[i])
}
for (let i = 0; i < secondArr.length; i++) {
  if (result.indexOf(secondArr[i]) == -1) result.push(secondArr[i])
}
```

_Performance speed: **0.41500001680105925** milliseconds._

## Second solution

Using ES5 we can **merge the two input arrays without removing the duplicates** with _.concat()_ and then loop again through the result array and **remove duplicates using indexOf**.

```javascript
const concatArr = firstArr.concat(secondArr)
const result = concatArr.filter((item, idx) => concatArr.indexOf(item) === idx)
```

_Performance speed: **0.5300000193528831** milliseconds._

## Third solution

Overall, **the _reduce_ method at the beginning still has the better performance**. Between the last two solutions there is **no significant difference** in complexity and execution speed, but t**he second is cleaner and easier to read**. We can go a step further and take into account the **ES6 _Set_ feature**, which takes all values from an iterable object, in our case an array, but since every element in a set must be unique in the collection, **it skips the duplicates without any effort for us**.

**When creating a Set keep in mind that null is treated like undefined and that it is a different concept from an array: a Set is a _"keyed collection"_ while the second is an _"indexed collection"_**

Here is the code:

```javascript
const result = [...new Set([...firstArr, ...secondArr])]
```

_Performance speed: **0.13499998021870852** milliseconds._

**Since we don't want the result to be a new Set we will just destructure it into an array.**

## Conclusion

**The last solution is what I was looking for**, it is the most readable and it has the **lowest complexity**, which brings a **great performance** compared to the other two. I ended up bringing that piece of code into my application abstracting it into a new function. **Thanks, I hope this was helpful enough ;)**
