---
title: "A fast React boilerplate and toolkit focusing on cutting edge technologies and tools."
excerpt: "The scope of this boilerplate is having the latest standards technologies, together with the right toolkit for both development, production with performance and analysis in mind."
coverImage: "/images/blog/react-boilerplate-tooling.jpg"
date: "2020-01-07"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

**You can find the repository for this article and project at: [this link](https://github.com/frivolta/react-boilerplate-tooling).**

**Current status: _Working / Prototype_**

## About / Synopsis

Starting a new **React application** could be overcomplicated, CRA is a fast prototyping tool but it misses many **'must have' dependency and configurations**, also I found it difficult to understand **the "magic" behind the scenes**. Don't get me wrong, CRA is useful when I start a fast project or I need of having a rapid prototype but in real applications where complexity easily grow over time and many people work together I learned at my expense that has a complete understanding of your package could be the difference between a successful project or a big **technical debt**.

The scope of this boilerplate is having the **latest standards technologies**, together with the **right toolkit** for both development, production with performance and analysis in mind.

## Installation

Using npm:

- Clone the repository: `git clone --depth=1 <url> <new folder>`
- From the command line: `npm install`

## Usage

### Available scripts

- Development: `npm run dev`
- Development with hot reloading: `npm run dev:hot`
- Production build with bundle size analysis: `npm run build`
- Test (default with Jest): `npm run test`
- Format with Prettier: `npm run format`
- Lint with ESLint: `npm run lint`

In this project Husky is enabled on pre-commit, meaning anytime you commit to your repo Husky automatically runs: prettier, lint and tests. All scripts must pass to commit.

## Features

### Limitations

This project is currently in progress. Future versions will include Trevis, Docker, Typescript and a production pipeline.

### Build

    npm run build

This will create a "dist" folder with minified code, also you will find `bundle_sizes.html` where you will find size analysis.

### Performance

- React and React DOM are served from CDN in the production build
- Babel polyfills are loaded only in older browser
- React Strict is enabled to avoid older syntax
- Source maps are available only in development for debugging purposes
- Future syntax is enabled (e.g. React Suspense)

### Accessibility

**React Axe and ESLint a11y checks accessibility and enforce best practices**. For example, you cannot use a `<img>` tag without the `alt` attribute. The same happens for common rules. You can disable this feature or trigger a "warning" instead of an error.

To remove React Axe, remove the following lines from `index.js`:

```javascript
if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe")
  axe(React, ReactDOM, 1000)
}
```

### Error Boundary

Currently error boundary is defined by the `DefaultErrorBoundary.js` component.

### Conclusion

That's it, this project is currently under development, future features includes TypeScript integration, Trevis, Docker Support, Cypress integration, and a CI / CD pipeline.
