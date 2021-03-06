---
title: "Write better React, compose multiple functional HoCs, Higher-Order Components"
---
In a [previous article](https://medium.com/r?url=https%3A%2F%2Fitnext.io%2Fwrite-better-javascript-function-composition-with-pipe-and-compose-93cc39ab16ee), I wrote about the concept of **chaining functions using pipe and compose**. Today I would like to extend this topic by providing you some scenarios where I found **function composition** can become really handy in the everyday life of a front-end developer using React **applying multiple Higher-Order Components in a more functional way!**

## What is a Higher-Order Function (HOF)
Before diving deep into Higher-Order Components you should be familiar with the meaning of **Higher Order Functions** that we can describe as a **function that does at least one of the followings**:
- Takes one or more functions as arguments
- Returns a function as its result

Let's take for example one of the standard ES Higher-Order Function you are probably already familiar with: **Array.prototype.map**, it takes a function as an argument which is used as a callback and applies it to every element of the array. A very quick reminder:
```
// Result is [2,3,4]
[1,2,3].map((number)=>number+1)

// Note that you can extract the callback function and pass it to the map function:
function addOne(arg){
    return arg+1
}

[1,2,3].map((number)=>addOne(number))
// or
[1,2,3].map(addOne)
```

We can now write a custom Higher-Order Function:

```
// We first define the function we will be using as an argument
const addOne = (arg)=>arg+1

// We than define our hof
const higherOrderFunction = (fn, arg) => fn(arg)*2
 
// The result will be 12
higherOrderFunction(addOne, 5)
```
Obviously, this is a dead-simple example but there are many applications for Higher-Order Functions, the benefit of this approach is that **you can reuse the HoF providing different operation functions**, reducing code duplication in favor of the [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle).

## Higher-Order Components with React
Higher-Order Components are **very similar to Higher-Order Functions**, here is the definition from the React documentation: "**Concretely, a higher-order component is a function that takes a component and returns a new component."**.

A simple example will be very useful here, let's first define a standard component that we will wrap later into a hoc:
```
// A page component that just render text
const App = (props) => {
  return (
    <div className="App">
      <h1>A component</h1>
    </div>
  );
};
export default App;
```
Imagine you want this component to be **enhanced with some kind of information**, in this very simple example we are passing a custom prop, a static user that in a real application you want to be fetched in some way:
```
export const withUser = (Component) => (props) => {
  // Passing the user that you fetched 
  const currentUser = { authtenticated: true, email: "email@email.com" };
  return <Component currentUser={currentUser} {...props} />;
};
```

Now we can wrap the App component with our newly created HoC:

```
// A page component that just render text
const App = (props) => {
  return (
    <div className="App">
      <h1>A component</h1>
      <h2>User: {props.currentUser.email}</h2>
    </div>
  );
};
// Wrapping with withUser function
export default withUser(App);
```
**Every component in your application wrapped by the "withUser" HoC, will have the currentUser prop**. If we have a very complex logic this could be a very good pattern to **avoid code duplication**. You can have a look at a lot of real-life examples of this in the **_Klarna repository_**:

 - [https://github.com/klarna/higher-Order-components](https://github.com/klarna/higher-Order-components)

## Composing multiple HoCs

What if we want a **Component to be wrapped by multiple HoCs**? Well, here we have **compose at the rescue** (they are explained in depth in my [previous article](https://medium.com/r?url=https%3A%2F%2Fitnext.io%2Fwrite-better-javascript-function-composition-with-pipe-and-compose-93cc39ab16ee)). Let's create another simple HoC:
```
export const withTitle = (Component) => (props) => {
  const title = "Custom title";
  return <Component title={title} {...props} />;
};
```
now we can wrap our two HoC's together (we can use the [Ramda function compose instead of creating our custom one](https://ramdajs.com/docs/#compose))
```
const App = (props) => {
  return (
    <div className="App">
      <h1>A component: {props.title}</h1>
      <h2>User: {props.customUser.email}</h2>
    </div>
  );
};
export default compose(withUser, withTitle)(App);
```
I created a _Code Sandbox_ so you can play around with the code:  [https://codesandbox.io/s/higher-order-components-54c7wl]( https://codesandbox.io/s/higher-order-components-54c7wl)

## Recap

Higher-order components are really useful for **abstracting logic**, for example, most of your pages will have the same layout, and maybe they share the same elements; **they are easy to handle, they make code more readable and they do not mutate the original component meaning they are pure functions**.

**Thanks for reading if you have come so far ???**

_During this post, we have used very simple components to explain some complex concepts and share a pattern that you may find useful.
Some references to go deeper into the main topics of this article:_

- [https://tommmyy.github.io/ramda-react-redux-patterns/pages/react-ramda.html#high-order-component-hoc](https://tommmyy.github.io/ramda-react-redux-patterns/pages/react-ramda.html#high-order-component-hoc)
- [https://it.reactjs.org/docs/higher-order-components](https://it.reactjs.org/docs/higher-order-components.html#:~:text=A%20higher-order%20component%20HOC,and%20returns%20a%20new%20component)
- [https://github.com/klarna/higher-Order-components](https://github.com/klarna/higher-Order-components)

