import { useState } from "react";
import convertToRoman from "../js/convertToRoman";
import "../style/_roman.scss";

const Roman = () => {
  /**
   * State
   */
  const [romanInput, setromanInput] = useState("");
  const [romanFeedback, setromanFeedback] = useState("");
  const [romanOutput, setromanOutput] = useState([]);

  /**
   * Event Handlers
   */
  const romanInputHandler = (event) => {
    setromanInput(event.target.value);
  };
  const submitRomanHandler = () => {
    if (romanInput.length < 1 || romanInput.length > 4) {
      setromanFeedback("Should be between 1 and 4 characters in length");
    }
    else {
      setromanOutput([...romanOutput, convertToRoman(romanInput)]);
      setromanFeedback("");
      setromanInput("");
    }
    document.getElementById("roman-input").focus();
  }
  const clearRomanHandler = () => {
    setromanInput("");
    setromanFeedback("");
    setromanOutput([]);
    document.getElementById("roman-input").focus();
  };

  /**
   * Return object
   */
  return (
    <div className="roman">
      <header>
        <h2>
          Convert a number less than 9999 to a Roman Numeral
        </h2>
        <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter">
          Read Exercise Prompt
        </a>
        <a href="https://github.com/hdevilbiss/js-capstone/blob/main/src/js/convertToRoman.js">
          Source Code
        </a>
      </header>
      <div>
        <label htmlFor="roman-input">
          Enter a number from 1 to 9999
        </label>
        <input type="text" id="roman-input" onChange={romanInputHandler} value={romanInput} />
        <span id="feedback-on-roman-input">{romanFeedback}</span>
      </div>
      <button id="button-input" onClick={submitRomanHandler}>
        Test the word
      </button>
      <button id="button-clear" onClick={clearRomanHandler}>
        Clear the output
      </button>
      <div id="roman-output">
        {romanOutput.map((str, idx) => (
          <p key={idx}>{str}</p>
        ))}
      </div>
    </div>
  );
}

export default Roman;