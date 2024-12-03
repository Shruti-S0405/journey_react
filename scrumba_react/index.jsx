import { createRoot } from "react-dom/client"

// Steps to create a simple react application
// 1. Create a root
// 2. Render some markup to the root

// 1. Create a root
const root = createRoot(document.getElementById("root"))

// 2. Render some markup to the root
root.render(<h1>This is a simple React App!</h1>);

//alternate codes

import ReactDom from "react-dom/client"

ReactDom.createRoot(document.getElementById("root")).render(<h1>Hello!</h1>)

//or using query selector also
ReactDom.createRoot(document.querySelector("#root")).render(<h1>Hello!</h1>)

/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */
import { createRoot } from "react-dom/client"

createRoot(document.querySelector("#root")).render(
    <ul>
        <li> Apple </li>
        <li> Orange </li>
        <li> Banana </li>
    </ul>
)