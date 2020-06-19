import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

function App() {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
}

render(<App />, document.querySelector("#root"));
