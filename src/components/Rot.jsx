import { useState } from "react";
import rot13 from "../js/lib/rot13";
import "../style/_rot.scss";

const Rot = () => {
  /**
   * State
   */
  const [rotInput, setrotInput] = useState("");
  const [rotFeedback, setrotFeedback] = useState("");
  const [rotOutput, setrotOutput] = useState([]);

  /**
   * Event Handlers
   */
  const rotInputHandler = (event) => {
    setrotInput(event.target.value);
  };
  const submitRotHandler = () => {
    if (rotInput.length < 1 || rotInput.length > 200) {
      setrotFeedback("Should be between 1 and 200 characters in length");
    }
    else {
      setrotOutput([...rotOutput, rot13(rotInput)]);
      setrotFeedback("");
      setrotInput("");
    }
    document.getElementById("rot-input").focus();
  }
  const clearRotHandler = () => {
    setrotInput("");
    setrotFeedback("");
    setrotOutput([]);
    document.getElementById("rot-input").focus();
  };

  /**
   * Return object
   */
  return (
    <div className="rot card">
      <header>
        <h2>
          Decode a rot13 ciphered string
        </h2>
        <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher">
          Exercise Prompt
        </a>
      </header>
      <div>
        <label htmlFor="rot-input">
          Enter a rot13-encoded string to decode it. Only UPPERCASE characters are applicable.
        </label>
        <input type="text" id="rot-input" onChange={rotInputHandler} value={rotInput} />
        <span className="feedback">{rotFeedback}</span>
      </div>
      <button className="button-input" onClick={submitRotHandler}>
        Decode the STRING
      </button>
      <button className="button-clear" onClick={clearRotHandler}>
        Clear the output
      </button>
      <div className="output">
        {rotOutput.map((str, idx) => (
          <p key={idx}>{str}</p>
        ))}
      </div>
      <div className="photo-credit">
        Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/binary?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
      </div>
    </div>
  );
}

export default Rot;
