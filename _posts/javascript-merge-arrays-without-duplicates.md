For testing purposes for each method i will use the same arrays.

```javascript
const firstArr = new Array(200).fill(undefined).map((val, i) => `item${i}`)
const secondArr = new Array(250).fill(undefined).map((val, i) => `item${i}`)
```

Looking throught documentations seems like the traditional way to achieve the task is to initialize an empty result array that will contains the result items, create a loop for every array that needs to be merged storing the current item in the result array if not present. The presence is checked using indexOf that will return -1 if not.

```javascript
// It took 0.6849999772384763 milliseconds.
const t0 = performance.now()
const firstArr = new Array(200).fill(undefined).map((val, i) => `item${i}`)
const secondArr = new Array(250).fill(undefined).map((val, i) => `item${i}`)
const result = []
for (let i = 0; i < firstArr.length; i++) {
  if (result.indexOf(firstArr[i]) == -1) result.push(firstArr[i])
}
for (let i = 0; i < secondArr.length; i++) {
  if (result.indexOf(secondArr[i]) == -1) result.push(secondArr[i])
}
const t1 = performance.now()
console.log(`It took ${t1 - t0} milliseconds.`)
console.log(result)
```
