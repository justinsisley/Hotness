# Hotness

## Dependencies

>Homebrew (optional but recommended)

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

>Node.js and NPM

```
brew install node
```

>Local dependencies

```
npm install
```

## Development

To run the application in development mode:

```
npm start
```

View the development application at [http://localhost:8743](http://localhost:8743).

## Production

To run the application in production mode:

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