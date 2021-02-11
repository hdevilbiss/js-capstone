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
    <div className="roman card">
      <header>
        <h2>
          Convert a number less than 9999 to a Roman Numeral
        </h2>
        <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter">
          Exercise Prompt
        </a>
        <a href="https://github.com/hdevilbiss/js-capstone/blob/main/src/js/convertToRoman.js">
          Source Code
        </a>
      </header>
      <div>
        <label htmlFor="roman-input">
          Enter a number from 1 to 9999
        </label>
        <input type="number" id="roman-input" onChange={romanInputHandler} value={romanInput} />
        <span className="feedback">{romanFeedback}</span>
      </div>
      <button className="button-input" onClick={submitRomanHandler}>
        Convert the number
      </button>
      <button className="button-clear" onClick={clearRomanHandler}>
        Clear the output
      </button>
      <div className="output">
        {romanOutput.map((str, idx) => (
          <p key={idx}>{str}</p>
        ))}
      </div>
      <span className="photo-credit">
        Photo by <a href="https://unsplash.com/@lilianovich?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lilian Dibbern</a> on <a href="https://unsplash.com/s/photos/roman?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
      </span>
    </div>
  );
}

export default Roman;
