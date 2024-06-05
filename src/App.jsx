import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Greeting Message")
  const [addtext, setAddtext] = useState("")

  const handleAddtext = (event) => {
    setAddtext(event.target.value)
  }
  const handleUpdate = () => {
    setText(addtext)
  }

    
  return (
    <div className="App">
      <div className="greeting-container">{text}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={addtext} onChange={handleAddtext} />
        
      </div>

      <div className="buttons">
        <button  onClick={handleUpdate}  >Update text </button>
        
      </div>
    </div>
  );
}

export default App;
