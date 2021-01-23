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
    palindromeInput.length <= 2 || palindromeInput.length > 20
      ? setPalindromeFeedback("Must be between 2 and 20 characters in length")
      : palindrome(palindromeInput) === true
        ? setPalindromeOutput(...palindromeOutput, `Yes, ${palindromeInput} is indeed a palindrome.`)
        : setPalindromeOutput(...palindromeOutput, `No, ${palindromeInput} is not a palindrome.`);
      setPalindromeFeedback("");
      setPalindromeInput("");
      document.getElementById("palindrome-input").focus();
    }
  const clearPalindromeHandler = () => {
    setPalindromeInput("");
    setPalindromeFeedback("");
    setPalindromeOutput("");
    document.getElementById("palindrome-input").focus();
  };

  /**
   * Return object
   */
  return (
    <div className="palindrome">
      <h2>
        Palindrome Tester
      </h2>
      <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker" alt="Link to the palindrome exercise on freeCodeCamp">
        Project #1 on freeCodeCamp
      </a>
      <div>
        <label htmlFor="palindrome-input">
          Input a word
        </label>
        <input type="text" id="palindrome-input" onChange={() => palindromeInputHandler()} value={palindromeInput} />
        <span id="feedback-on-palindrome-input" value={palindromeFeedback}></span>
      </div>
      <button id="button-input" onClick={submitPalindromeHandler}>
        Test the word
      </button>
      <button id="button-clear" onClick={clearPalindromeHandler}>
        Clear the output
      </button>
      <div id="palindrome-output" value={palindromeOutput}></div>
    </div>
  );
}

export default Palindrome;
