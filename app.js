// Why React is library
// Because it can work with small components in an application and fit at any place 

// Create element take three argument {HTML tag to be created, Attributes to the tags, Value inside HTML tag}
const heading = React.createElement('h1', {
    id: "heading"
}, 'Hello world from React')

// This gives an object, It has props which has attributes and value as children
console.log("heading", heading);

// createRoot is to create a root to do all DOM manupulation, take argument for place where to create root.
const Root = ReactDOM.createRoot(document.getElementById('root'))

// This is to render HI tag inside root, takes the H1 object and create the H1 tag that browser understands
Root.render(heading)

/**
 * 
 * <div id="parent">
 *      <div id="children">
 *          <h1>Testing</h1>      
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement(
    'div', { id: "parent" }, 
    [
        React.createElement(
            'div', { id: "children1" }, 
            [React.createElement('h1', { id: "test" }, "I am H1 tag."),
            React.createElement('h2', { id: "test" }, "I am H2 tag.")]
        ),
        React.createElement(
            'div', { id: "children2" }, 
            [React.createElement('h1', { id: "test" }, "I am H1 tag."),
            React.createElement('h2', { id: "test" }, "I am H2 tag.")]
        )
    ]
);

console.log(parent);

Root.render(parent);


