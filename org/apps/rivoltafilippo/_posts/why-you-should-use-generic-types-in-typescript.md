---
title: "Why you should use generic types in TypeScript, a simple example"
excerpt: "TypeScript has a steep learning curve, at least for me, for a front-end developer used to write without types sometimes I struggled to change my way of thinking to my code."
coverImage: "/images/blog/why-you-should-use-generic-types-in-typescript.jpg"
date: "2020-01-10"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
tags: ["typescript", "generics", "guide"]
---

**Edit: This article was originally posted on my [Medium page](https://medium.com/@rivoltafilippo/why-you-should-use-generic-types-in-typescript-a-simple-example-4708e69a003b), if you liked it leave a clap! You can join the discussion on [Reddit](https://www.reddit.com/r/javascript/comments/emd65j/why_you_should_use_generic_types_in_typescript_a/) too.**

**TypeScript** has a steep learning curve, at least for me, for a front-end developer used to write without types sometimes I struggled to change my way of thinking to my code.
When people used syntax like **<T extends key of P>** in StackOverflow answers, I have always been fascinated yet scared so I decided to put down a simple example to help people like me to become a “cool guy”.

First of all, let’s say we want to have a **TypeScript function** which receives an array of objects and filters this array by a single property value:

```typescript
// Define a book type
type Book = {
  title: string
  genre: string
  publicationYear: number
}

// Define a list of types
const listOfBooks: Book[] = [
  { title: "Dragon Of The Titans", genre: "fantasy", publicationYear: 1992 },
  { title: "Queen Of Spring", genre: "drama", publicationYear: 2005 },
  { title: "Wolves Of The King", genre: "fantasy", publicationYear: 1988 },
]

// Use a common function to retrieve books
const filterArrayByValue = (
  items: Book[],
  propertyName: string,
  valueToFilter: string
): Book[] => {
  return items.filter((item) => item[propertyName] === valueToFilter)
}

// Call the function
// The result is an array with two books: "Dragon Of The Titans" and  "Wolves Of The King"
console.log(filterArrayByValue(listOfBooks, "genre", "fantasy"))
```

So now we have a function that filters an array of** Book **and returns a filtered array of **Book **based on the property and the value we pass in the second and third parameters.

Let’s say we have another type called **Car** and we want to use the same function to filter a list of **Car[]**, right now we will trigger an error.

Our function this way is **not reusable**, what we can do is use a **generic type T** instead of a defined type like **Book**:

```typescript
// Add a new generic type T
const filterArrayByValue = <T>(
  items: T[],
  propertyName: string,
  valueToFilter: string
): T[] => {
  return items.filter((item) => item[propertyName] === valueToFilter)
}
```

We now have a reusable function and we can use it with **any entity that meets our type condition**.

We can still write a better function, in our case we want the **propertyName** to be the **name of a property contained in the type of T**, plus we want the value to filter to be a **partial** value of the entity T. We can introduce **another generic type which extends T, called P** to tell TypeScript we want to use a property of T as the second parameter:

```typescript
// Add a new generic type P
const filterArrayByValue = <T, P extends keyof T>(
  items: T[],
  propertyName: P,
  valueToFilter: string
): T[] => {
  return items.filter((item) => item[propertyName] === valueToFilter)
}
```

Last we can now define the **valueToFilter** parameter as following:

`valueToFilter: T[P] `

in our case **valueToFilter** is a **partial value** of **T**, so we can also define it as follows:

`valueToFilter: Partial<T>`

Here is our **final function:**

```typescript
// Let's define our valueToFilter type
const filterArrayByValue = <T, P extends keyof T>(
  items: T[],
  propertyName: P,
  valueToFilter: T[P] //Partial<T>
): T[] => {
  return items.filter((item) => item[propertyName] === valueToFilter)
}
```

Here is our **final code:**

```typescript
type Book = {
  title: string
  genre: string
  publicationYear: number
}

type Car = {
  modelName: string
  type: string
  price: number
}

const listOfBooks: Book[] = [
  { title: "Dragon Of The Titans", genre: "fantasy", publicationYear: 1992 },
  { title: "Queen Of Spring", genre: "drama", publicationYear: 2005 },
  { title: "Wolves Of The King", genre: "fantasy", publicationYear: 1988 },
]

const listOfCars: Car[] = [
  { modelName: "Yellow Car", type: "coupe", price: 20000 },
  { modelName: "Blue Car", type: "SUV", price: 45000 },
  { modelName: "Green Car", type: "coupe", price: 18000 },
]

const filterArrayByValue = <T, P extends keyof T>(
  items: T[],
  propertyName: P,
  valueToFilter: T[P] //Partial<T>
): T[] => {
  return items.filter((item) => item[propertyName] === valueToFilter)
}

console.log(filterArrayByValue(listOfBooks, "genre", "fantasy"))
console.log(filterArrayByValue(listOfCars, "type", "SUV"))
```

That’s it! Thank you if you arrived so far, understanding the concepts above gave me a great understanding of TS world, **I hope you found it helpful!**
