import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

function App() {
  const [input, setInput] = useState("");
  const handlePress = (e: string) => {
    if (e === "{bksp}") {
      console.log("sliced");
      setInput(input.slice(0, -1));
    } else if (e.includes("{")) {
      return;
    } else {
      setInput(input + e);
    }
  };
  return (
    <>
      <div>
        <input type="text" value={input} />
        <Keyboard onKeyPress={handlePress} />
      </div>
    </>
  );
}

export default App;
