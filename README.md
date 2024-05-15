# Namaste-React

## (Laying the foundation) Chapter-3 🚀
- Create script to build application, add tags ubder script in package.json to run build (e.g npm run start {for dev}, npm run build {for prod}).
- Npm start is equal to npm run start but not the same case with npm build(It will not work). Npm start is reserved keyword.
- React.createElement create object.
- Writing React.createElement everytime creating element is not developer friendly so Facebook created JSX.
- JSX is not HTML inside javascript. It is HTML like syntax. (e.g jsxHeading=<H1>Namaste react using JSX</H1>).
- Logging JSX or createElement gic=ves same object notation.
- JSX is not understood by browsers., so it gets transpiled using parcel and then goes to js engine.
- Even parcel does not do it itself, it is done by Babel(JSX => React.createElement-JS object => HTMLElement(render)).
- Attributes are given in camelCase inside JSX.
- Incase the HTML convers multiple line, then we have to rap it up in round brackets which help compiler to know the start and end of the code.
- React components are of two type, class and function based
- Function componet are normal javascript function which return JSX, there name start with capital letter.
- What is component composition? (Composing two components into one another)
- Any javascript code can be put inside {}
- As {} executes javascript, then it increases the chances of an attack. JSX handles this and sanitize your data
- 


## (Igniting your app) Chapter-2 🚀
- This tutorial shows how to make your application production ready.
- React doesn't make your application fast and production ready app, Lot of packages makes our application fast.
- Npm does not stand for node package manager.
- How npm is initialised? (npm init) This creats package.json used to install all the dependencies.
- What is a bundler? (bundles your app to ship to production) e.g. vite, parsel, etc.
- Installing parce (npm install -D parcel).
- There are two types of dependencies (dev{used for development} & normal{used for production}).
- Tilde (~) and caret (^) symbols are used for major and minor version.
- Package.json keeps approx version
- Package-lock.json is used to keep track of exact version that is being installed.
- Node modules contains all code from npm (Heaviest object in universe 😂😂😂)
- Transative dependencies
- Node modules does not need to be uploaded on git as this could be regenerated using package.json and package-lock.json
- Whatever that could be regenerated should not be put on git
- Used parcel to ignite app (npx parcel index.html)
- Npx means executing a package and npm is to install a package
- Cdn is not a preferred way to include react because we have to make network call, incase of update its tought to handle major changes. Preferred way is to have it as node module
- Npm is not installed at developer dependancy (npm install react, npm install react-dom)
- Now we no longer need the cdn
- Imports does not work in normal javascript file, it throws error ("Browser scripts cannot have imports or exports.")
- To fix this we need to tell that this is not a normal javascript file and define (type="module") in script tag for app.js
- Parcel is generating dev build, local server, HMR(HOT MODULE REPLACEMENT), file watching algorithm - c++, Caching - faster Builds(.parcel-cache), Image Optimization, Minification, Bundling, compress files, consistant hashing, code spliting, differential bundling(support older browsers), Diagnostic, error handling, tree shaking(remove unused code for you), Diff dev and prod build.
- Remove main from package.json when using parcel 
- browsersList is to have your app supported on older browsers. [explore package]