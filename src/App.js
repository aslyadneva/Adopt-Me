import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

function App() {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="havanese" />
      <Pet name="Pepper" animal="Bird" breed="cockatiel" />
      <Pet name="Doink" animal="Cat" breed="mixed" />
    </div>
  );
}

render(<App />, document.querySelector("#root"));
