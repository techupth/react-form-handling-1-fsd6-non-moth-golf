import { useState } from "react";
import "./App.css";

function App() {
  const [greetingInput, setGreetingInput] = useState("Greeting Message");
  const [greetingMessage, setGreetingMessage] = useState("");

  function onChange(event) {
    setGreetingInput(event.target.value);
  }

  function onClick() {
    setGreetingMessage(greetingInput);
  }

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={onChange} />
      </div>

      <div className="buttons">
        <button onClick={onClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
