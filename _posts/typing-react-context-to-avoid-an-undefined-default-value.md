---
title: "Typing React Context to avoid an undefined default value"
excerpt: "React Context API is really useful when it comes to sharing data between disconnected components without prop drilling, here is a way of correctly type the Context API to avoid a default value or a non-null TypeScript assertion."
coverImage: "/images/blog/typing-react-context-to-avoid-undefined.jpg"
tags: ["react", "typescript", "context api", "custom hooks"]
date: "2020-09-04"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

React Context API is really useful when it comes to sharing data between disconnected components without prop drilling.
In the last few days, I worked on a side project and I gave Context a shot to share my authenticated user information' between route components. Following a very useful pattern shared by **Kent C. Dodds** on his website with the title of <a href="https://kentcdodds.com/blog/how-to-use-react-context-effectively" target="_blank">How to user React Context effectively</a>
**I made a custom hook to handle the authentication flow logic and shared the returned value with context to be available throughout the whole application**.

_Note: I am not going through the basics of React Context API and React Hooks since is out of the scope of the article._

I made a simplified version of the pattern used on my project since the aim of this article is just to show you how I used Typescript to correctly type the pattern described above. In the example we want the application to be aware of a sidebar open/close status.

## The custom hook

The custom hook will take care of handling the sidebar state and will return the current state and the setState action used to trigger a state change:

**useSidebar.tsx**
`gist:frivolta/4851b9188a08f6484293d59b73515704`

## The Context API

Now we want to create provide our context with the custom hook's state, first we will declare our context:

```typescript
const SidebarContext = React.createContext<UseSidebar | undefined>(undefined)
```

Typing our context is a real pain since _createContext_ expects us to provide a default value which in some cases doesn't make sense to provide or we are not aware of, for this reason, we will end up using undefined as default. The main problem caused by this approach is we will have to check for _undefined_ every time we will try to consume our context. The simple solution is to use a non-null assertion "!" that will allow us to tell TypeScript that, during runtime, the parameter will not be null or undefined:

```typescript
const SidebarContext = React.createContext<UseSidebar>(undefined!)
```

this solution works fine but it is not ideal, also we are still passing a value to our _createContext_, we will keep this code for now and work on a more robust solution later.

We can now make a Provider component for our context:

```typescript
interface Props {
  children: React.ReactNode
}

const SidebarProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useSidebar<boolean>(true)

  return (
    <SidebarContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </SidebarContext.Provider>
  )
}
```

_isOpen_ and _setIsOpen_ will now be available and up to date for the provider children's.

We now just need a custom hook that will allow our components to consume the context and last we can export it together with the _SidebarProvider_:

```typescript
const useSidebarContext = () => {
  return React.useContext(SidebarContext)
}

export { SidebarProvider, useSidebarContext }
```

Here the whole code:

**useSidebarContext.tsx**

`gist:frivolta/9e082ee8c30c8037170a0aa4b6d27284`

## Consuming the context

We now need to place the Provider in the right position, so that all the provider children's have access to the context:

**index.tsx**

`gist:frivolta/9b162985396ab2b29e477287ab0092d7`

Our context will be now available to the App and his child components. For example, we can use it like this:

**ChildComponent.tsx**

`gist:frivolta/9e8c5f35df9c63e353eed60a364379f9`

You can have a look at the <a href="https://codesandbox.io/s/typing-react-context-v1-o2wns" target="_blank">whole code on Code Sandbox</a>

## Remove the non-null assertion and the default value

The last thing we are missing from the previous implementation is to remove the default value from the _createContext_ that is forcing us to pass an undefined value with a non-null assertion as default.

What we can do to achieve this is to create a generic function that wraps our context and takes care of checking if the value passed is undefined.

**createGenericContext.tsx**

`gist:frivolta/fbfd74c16cd62edab862f32a497bf48b`

**Note:** <a href="https://medium.com/@rivoltafilippo/why-you-should-use-generic-types-in-typescript-a-simple-example-4708e69a003b" target="_blank"> I wrote an introduction to TypeScript generic's if you already don't know how they work</a>

In this function we create a context with a generic type and undefined as the default value, we then create another function to check whether the generic context value is defined, if it is not defined we throw an error, for this reason, _useGenericContext_ will never return an undefined value. Lastly, since we want our _createGenericContext_ to return a tuple, we use "as const" after the returned array, making the number of elements fixed and with a defined type inferred by TypeScript.

## Using the createGenericContext function

With our new function we need to edit the _useSidebarContext_ file instead of using the _React.createContext_ the function we will use the generic function we made and then use the returned tuple inside our code:

**useSidebarContext.tsx**

`gist:frivolta/9a6a73f0857a90b6c53527602718ede2`

Here is the <a href="https://codesandbox.io/s/typing-react-context-v2-j1xwe" target="_blank">code sandbox link with the working code</a>.

**That’s it! Thank you if you arrived so far, understanding the concepts above gave me a great understanding of Context and TS world, I hope you found it helpful!**
