# Geo Addresses

This application gets address info and points on map from coordinate information using [Here Geocoding API](https://developer.here.com/products/geocoding-and-search)

Coordinate information can be provided from JSON file and format of the data can be found example below.

```JSON
[
  {
    "Name": "John Doe",
    "Latitude": 52.56222,
    "Longitude": 13.35125
  },
  {
    "Name": "Max Mustermann",
    "Latitude": 42.56222,
    "Longitude": 33.35125
  }
]
```

In this MVP version it always assumes users providing valid format of JSON data. Because it's using HTML5 drag & drop API it might not be working on older browsers.

Here Map API key provided on `HereMapService.js`. If it is not valid you can change with `API_KEY` constant with yours. `HereMapService` class is a wraps [Here API for JavaScript](https://developer.here.com/documentation/maps/3.1.20.0/dev_guide/index.html) to draw map and get address info with [geocoding](https://developer.here.com/documentation/maps/3.1.20.0/dev_guide/topics/geocoding.html)

`Store` is entry point component which provides simple redux like state management.

`StoreContext` holds top level state which acts single source of truth.

`MapContext` holds an instance of `HereMapService` class.

`DropZone` this component manage UI & behaviour for drag and drop files.

`ParseCoordinatesFromJSONFiles` this function parses JSON file data into applications's memory.

`AppContainer` Layouts components and invokes JSON parsing and geocoding with `handleDrop` function.

`AddressList` component connect to `StoreContext` and lists `AddressItem` regards the state.

`LoadingIndicator` is a component to which will be dipslayed on asynchronous process going on.

`Map` component displays Here Map. It uses `HereMapService` class for functionality.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm install`

Install npm dependencies
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Node version
Node v14.15.1 used while this application being developed

If you have nvm installed on you machine you can run `nvm use` on the project folder. Alternatively you can install it manually.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
