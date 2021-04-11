A few days ago I was writing a piece of code that involved merging two large arrays without duplicates, my first reaction was writing a reduce function initiating the accumulator looping every item and checking if it was already present in the array:

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

This solution was working fine for me but I wondered if I could improve the performance a little more, I ended up with a few solutions. For testing purposes each method described will use the same arrays:

```javascript
const firstArr = new Array(200).fill(undefined).map((val, i) => `item${i}`)
const secondArr = new Array(250).fill(undefined).map((val, i) => `item${i}`)
```

also I will check the execution speed at the end of every function with performance.now().

The traditional way to achieve the task is to initialize an empty result array that will contains the result items, create a loop for every array that needs to be merged storing the current item in the result array if not present. The presence is checked using indexOf that will return -1 if not.

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

Using ES5 we can merge the two input arrays without removing the duplicates with .concat() and then loop again through the concaten array and remove duplicates using indexOf.

```javascript
const concatArr = firstArr.concat(secondArr)
const result = concatArr.filter((item, idx) => concatArr.indexOf(item) === idx)
```

_Performance speed: **0.5300000193528831** milliseconds._

Overall the reduce method has still the better performance.
Between the last two solutions there is not a lot of difference in terms of complexity and execution speed but the second one is cleaner and more readable. We can take a step even further and try the ES6 Set feature that takes all the values from an iterable object, an array in our case, but since any element in a Set must be unique in the collection it will skip the duplicates without any effort for us.

** When creating a Set keep in mind that null is treated like undefined and that it is a different concept from an array: a Set is a "keyed collection" while the second is an "indexed collection"**

Here is the code:

```javascript
const result = [...new Set([...firstArr, ...secondArr])]
```

_Performance speed: **0.5300000193528831** milliseconds._

Since we don't want the result to be a new Set we will just destructure it into an array.

The last solution is what I was looking for, it is the most readable and it has the lowest complexity bringing a great performance in comparison with the other two. I ended up bringing that piece of code into my application abstracting it in a new function. Thanks, I hope this was helpful enough ;)
