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

**Edit: This article was originally posted on my <a href="https://medium.com/@rivoltafilippo/why-you-should-use-generic-types-in-typescript-a-simple-example-4708e69a003b" target="_blank">Medium page</a>, if you liked it leave a clap! You can join the discussion on <a href="https://www.reddit.com/r/javascript/comments/emd65j/why_you_should_use_generic_types_in_typescript_a/" target="_blank">Reddit</a> too.**

**TypeScript** has a steep learning curve, at least for me, for a front-end developer used to write without types sometimes I struggled to change my way of thinking to my code.
When people used syntax like **<T extends key of P>** in StackOverflow answers, I have always been fascinated yet scared so I decided to put down a simple example to help people like me to become a “cool guy”.

First of all, let’s say we want to have a **TypeScript function** which receives an array of objects and filters this array by a single property value:

`gist:frivolta/97b914df34ded3df736651c811dab392#initialFunction.ts`

So now we have a function that filters an array of** Book **and returns a filtered array of **Book **based on the property and the value we pass in the second and third parameters.

Let’s say we have another type called **Car** and we want to use the same function to filter a list of **Car[]**, right now we will trigger an error.

Our function this way is **not reusable**, what we can do is use a **generic type T** instead of a defined type like **Book**:

`gist:frivolta/2cb6f6cce5de2480d9c35bee6a519711#genericType.ts`

We now have a reusable function and we can use it with **any entity that meets our type condition**.

We can still write a better function, in our case we want the **propertyName** to be the **name of a property contained in the type of T**, plus we want the value to filter to be a **partial** value of the entity T. We can introduce **another generic type which extends T, called P** to tell TypeScript we want to use a property of T as the second parameter:

`gist:frivolta/4b45dd16c9cc33f98cab7bba8502fe6c#extendGenericType.ts`

Last we can now define the **valueToFilter** parameter as following:

`valueToFilter: T[P] `

in our case **valueToFilter** is a **partial value** of **T**, so we can also define it as follows:

`valueToFilter: Partial<T>`

Here is our **final function:**

`gist:frivolta/bbb5e4255b43ab41862163aafc20e7a6#finalFunction.ts`

Here is our **final code:**

`gist:frivolta/07e2d49d713c0394ddbc95c078e4b72d#finalCode.ts`

That’s it! Thank you if you arrived so far, understanding the concepts above gave me a great understanding of TS world, **I hope you found it helpful!**
