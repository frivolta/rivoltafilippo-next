---
title: "pippo"
excerpt: "When I started my journey into functional programming I found myself thinking of it as both exciting and confusing. One of the core concepts I found useful in my everyday work is function composition, thanks to its intuitive nature it's not hard to introduce it even in a well-established codebase."
coverImage: "/images/blog/function-composition-with-pipe-and-compose.jpg"
date: "2021-10-11"
author:
name: JJ Kasper
picture: "/assets/blog/authors/jj.jpeg"
ogImage:
url: "/assets/blog/dynamic-routing/cover.jpg"
---
Function Composition in Large React Applications: Best Practices and Real-World Examples

Function composition is a powerful technique for building complex functionality by combining simple, reusable functions. In the context of React, function composition can be used to create more sophisticated and reusable components, improving the organization and structure of code in larger applications.

In this article, we will explore best practices for using function composition in large React applications, and we will look at some real-world examples of how this technique can be applied.

Best Practices for Function Composition in Large React Applications

When using function composition in large React applications, it's important to follow some best practices to ensure that our code is maintainable and scalable. Here are some guidelines to follow:

Use HoCs to abstract common functionality: Higher-Order Components (HoCs) are a powerful tool for abstracting common functionality in React. By wrapping a component with an HoC, we can add additional behavior or props without modifying the original component. This can be a useful way to encapsulate common tasks such as fetching data, handling authentication, or adding analytics tracking.

Combine HoCs using function composition: When using multiple HoCs, it can be tempting to nest them or use the withFoo(withBar(withBaz(Component))) pattern. However, this can quickly become unwieldy and hard to read. Instead, we can use function composition to combine multiple HoCs in a more declarative way. For example, we could use the compose function from the Ramda library to write compose(withFoo, withBar, withBaz)(Component).

Keep HoCs small and focused: It's important to keep HoCs small and focused on a single, well-defined task. If an HoC is trying to do too much, it can become difficult to understand and reuse. By keeping HoCs small and focused, we can make our code more modular and easier to understand.

Use custom Hooks for stateful logic: In addition to HoCs, React also provides a way to extract stateful logic into reusable functions called Hooks. Custom Hooks are functions that start with the word use and can call other Hooks or perform other logic. They are a useful tool for abstracting stateful logic that would otherwise need to be duplicated across multiple components.

Use functional programming techniques: Function composition is closely related to functional programming, and many of the principles of functional programming can be applied to React code as well. For example, we can use techniques such as currying and point-free style to make our code more concise and easier to understand.

Use a consistent naming convention: When using function composition, it's important to use a consistent naming convention for HoCs and custom Hooks. This will help to make our code more readable and easier to understand. A common convention is to use the with prefix for HoCs and the use prefix for custom Hooks.

Consider performance and reusability: As with any code optimization, it's important to consider the performance and reusability of our function compositions. When chaining multiple functions together, we need to be mindful of the potential for unnecessary calculations or wasted work. We can use techniques such as memoization to optimize the performance of our compositions, and we can also design our functions with reusability in mind.

Test your compositions: As with any code, it's important to test our function compositions to ensure that they are working as expected. We can use tools such as Jest and Enzyme to write unit tests for our HoCs and custom
Hooks, and we can also test the behavior of our composed functions by rendering them in the context of a React component.

Real-World Examples of Function Composition in React

Now that we've covered some best practices for using function composition in large React applications, let's look at some real-world examples of how this technique can be applied.

Example 1: Fetching Data with an HoC

One common use case for function composition in React is fetching data from an API. We can use an HoC to abstract this logic and reuse it across multiple components.

Here's an example of an HoC that fetches data from an API and passes it down as a prop to the wrapped component:
```javascript
const withData = (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(props.url);
        const json = await response.json();
        setData(json);
      }
      fetchData();
    }, [props.url]);

    return <WrappedComponent {...props} data={data} />;
  };
};
```
Now, we can use this HoC to fetch data for any component that needs it:

```javascript
const UserList = ({ data }) => {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const EnhancedUserList = withData(UserList);

// Now we can render the EnhancedUserList component and pass it a URL prop to fetch data from
<EnhancedUserList url="/api/users" />
```
Example 2: Adding Analytics Tracking with an HoC

Another common use case for function composition in React is adding analytics tracking to components. We can use an HoC to abstract this logic and reuse it across multiple components.

Here's an example of an HoC that adds analytics tracking to a component using the react-ga library:
```javascript
import ReactGA from "react-ga";

const withAnalytics = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      ReactGA.pageview(props.location.pathname);
    }, [props.location.pathname]);

    return <WrappedComponent {...props} />;
  };
};
```
Now, we can use this HoC to add analytics tracking to any component that needs it:
```javascript
const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
};

const EnhancedUserProfile = withAnalytics(UserProfile);

// Now when we render the EnhancedUserProfile component, it will send a pageview event to Google Analytics
<EnhancedUserProfile user={selectedUser} />
```
Example 3: Combining Multiple HoCs with Function Composition



In some cases, we may want to wrap a component with multiple HoCs to add multiple pieces of functionality. We can use function composition to combine these HoCs in a more declarative way.

For example, let's say we have an HoC that adds a loading indicator and an HoC that adds analytics tracking, and we want to use both of these HoCs on the same component. We can use the compose function from the Ramda library to combine these HoCs in a more readable way:

```javascript
import { compose } from "ramda";

const EnhancedComponent = compose(
  withLoadingIndicator,
  withAnalytics
)(Component);
```
Now, when we render the EnhancedComponent, it will have both the loading indicator and analytics tracking functionality.

Conclusion

Function composition is a powerful technique for building complex functionality by combining simple, reusable functions. In the context of React, function composition can be used to create more sophisticated and reusable components, improving the organization and structure of code in larger applications.

By following best practices such as using HoCs to abstract common functionality, combining HoCs with function composition, and using custom Hooks for stateful logic, we can make our code more modular, reusable, and easier to understand.

We've looked at some real-world examples of using function composition in React, including fetching data with an HoC and adding analytics tracking with an HoC. By applying these techniques in our own projects, we can build more maintainable and scalable applications with React.