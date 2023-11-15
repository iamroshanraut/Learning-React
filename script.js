import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{},"Namaste React 🚀");

// JSX is Syntax it is like html.
const heading = (
  <h1 id="heading" className="head">
    Namaste React 🚀🚀
  </h1>
); // className should follow camelCase

// ** React Component **
// Everything is Component in React.
// There are Two Type of Component in React.
// 1. Class Based Component
// 2. Functional Component

// ** Functional Component **
// - It just a JavaScript Function Which return some peace of jsx code.

// Example

// we can also write any js direclty into react using {}


const HeadingComponent = () => (
    <div id="container">
    {100+200}
    {<h1>Hello React!</h1>}
    <h1>Namaste React 🚀🚀🚀🚀🚀</h1>;
  </div>
);

const Title = () => (
    <div>
        <HeadingComponent/>
        <h1 className="heading1">Akshay Saini</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);
