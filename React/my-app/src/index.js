import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  // MOST OF YOUR CODE GOES HERE

  const [age, setAge] = useState();
  const [name, setName] = useState();

  function ageSelection (e) {
    setAge(e.target.value)
    console.log(e.target.value);
  }

  function nameTyping (e) {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name: {name} </p>
        <p>Display Age: {age} </p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input className="input" type="text" placeholder="William" onChange={nameTyping} />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input className="input" type="number" placeholder="38" min="5" max="150" onChange={ageSelection} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
