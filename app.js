import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement-JS object => HTMLElement(render)
const Title = () =>  (
    <h1 id="heading">
        Title : Namaste react using JSX 🚀
    </h1>
)

const Title2 = (
    <h2 id="heading">
        Title2 : Namaste react using JSX 🚀
    </h2>
)

// Components composition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {Title2}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);