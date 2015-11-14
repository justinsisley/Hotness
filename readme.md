# Hotness
[![Build Status](https://travis-ci.org/justinsisley/Hotness.svg?branch=master)](https://travis-ci.org/justinsisley/Hotness)
[![bitHound Score](https://www.bithound.io/github/justinsisley/Hotness/badges/score.svg)](https://www.bithound.io/github/justinsisley/Hotness)
[![bitHound Dependencies](https://www.bithound.io/github/justinsisley/Hotness/badges/dependencies.svg)](https://www.bithound.io/github/justinsisley/Hotness/master/dependencies/npm)

A clean React and Flux boilerplate that uses:
- [React](https://facebook.github.io/react/) / [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
- [React router](https://github.com/rackt/react-router)
- [Flux](https://facebook.github.io/flux/)
- [ES6](https://github.com/lukehoban/es6features)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.github.io/)
- [PostCSS](https://github.com/postcss/postcss)
- [CSS modules](http://glenmaddern.com/articles/css-modules)
- [ESLint](http://eslint.org/)
- [Hot module reloading](http://gaearon.github.io/react-hot-loader/)
- [Tape](https://github.com/substack/tape)
- [Nightwatch](http://nightwatchjs.org/)
- [ESDoc](https://esdoc.org/)

## Dependencies

This application requires Node.js and NPM.

```
npm install
```

To perform a clean install, in which the project is returned to a pre-built state with fresh dependencies installed, run:

```
npm run clean
```

## Development

Run the application in development mode:

```
npm start
```

View the development application at [http://localhost:8743](http://localhost:8743).

## Production

Run the application in production mode:

```
npm run production
```

View the production application at [http://localhost:8743](http://localhost:8743).

## Generate documentation

```
npm run docs
```

Then open `./esdoc/index.html` in a browser.

## Running tests

### Unit tests

Unit tests use [tape](https://github.com/substack/tape), and React components are tested using [shallow rendering](http://simonsmith.io/unit-testing-react-components-without-a-dom/).

Run unit tests with `npm test`.

### End-to-end tests

End-to-end tests use [Nightwatch](http://nightwatchjs.org/), and are used for testing page components.

Run end-to-end tests with `npm run e2e`. This will run tests in Firefox and Chrome in parallel. Make sure you have both Firefox and Chrome installed.

## Considerations

### Handling static assets
- https://github.com/shutterstock/postcss-copy-assets
- https://github.com/borodean/postcss-assets
- https://github.com/2createStudio/postcss-sprites
- https://github.com/bezoerb/postcss-image-inliner
