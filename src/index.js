// import "./style.css";
// import "./style.scss";
// console.log("Hello webpack!");

// const path = require("path");

// module.exports = {
//   output: {
//     path: path.resolve(__dirname, "build")
//   }
// };
// import "./style.scss";
// console.log("Hello webpack!");

// const fancyFunc = () => {
//   return [1, 2];
// };

// const [a, b] = fancyFunc();
// import React, { useState } from "react";
// import { render } from "react-dom";

// function App() {
//     const [state, setState] = useState("CLICK ME");

//     return <button onClick={() => setState("CLICKED")}>{state}</button>;
// }

// render(<App />, document.getElementById("root"));

import { getUsers } from "./common/usersAPI";
import "./style.scss";
console.log("Hello webpack!");

getUsers().then(json => console.log(json));