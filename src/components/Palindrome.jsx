import { useState } from "react";
import palindrome from "../js/palindrome";

const Palindrome = () => {
  /**
   * State
   */
  const [palindromeInput, setPalindromeInput] = useState("");
  const [palindromeFeedback, setPalindromeFeedback] = useState("");
  const [palindromeOutput, setPalindromeOutput] = useState([]);

  /**
   * Event Handlers
   */
  const palindromeInputHandler = (event) => {
    setPalindromeInput(event.target.value);
  };
  const submitPalindromeHandler = () => {
    if (palindromeInput.length < 2 || palindromeInput.length > 20) {
      setPalindromeFeedback("Must be between 2 and 20 characters in length");
    }
    else {
      palindrome(palindromeInput) === true
      ? setPalindromeOutput([...palindromeOutput, `Yes, ${palindromeInput} is indeed a palindrome.`])
      : setPalindromeOutput([...palindromeOutput, `No, ${palindromeInput} is not a palindrome.`]);
      setPalindromeFeedback("");
      setPalindromeInput("");
    }
    document.getElementById("palindrome-input").focus();
  }
  const clearPalindromeHandler = () => {
    setPalindromeInput("");
    setPalindromeFeedback("");
    setPalindromeOutput([]);
    document.getElementById("palindrome-input").focus();
  };

  /**
   * Return object
   */
  return (
    <div className="palindrome card">
      <header>
        <h2>
          Palindrome Tester
        </h2>
        <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker">
          Exercise Prompt
        </a>
        <a href="https://github.com/hdevilbiss/js-capstone/blob/main/src/js/palindrome.js">
          Source Code
        </a>
      </header>
      <div>
        <label htmlFor="palindrome-input">
          Input a word
        </label>
        <input type="text" id="palindrome-input" onChange={palindromeInputHandler} value={palindromeInput} />
        <span className="feedback">{palindromeFeedback}</span>
      </div>
      <div>
        <button className="button-input" onClick={submitPalindromeHandler}>
          Test the word
        </button>
        <button className="button-clear" onClick={clearPalindromeHandler}>
          Clear the output
        </button>
      </div>
      <div className="output">
        {palindromeOutput.map((str, idx) => (
          <p key={idx}>{str}</p>
        ))}
      </div>
      <span className="photo-credit">
        Photo by <a href="https://unsplash.com/@andyjh07?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Andy Holmes</a> on <a href="https://unsplash.com/s/photos/night-sky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
      </span>
    </div>
  );
}

export default Palindrome;
