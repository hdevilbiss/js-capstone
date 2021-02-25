import { useState } from "react";
import palindrome from "../js/lib/palindrome";
import Card from "./partials/Card";

const Palindrome = ({ object }) => {
  /**
   * State
   */
  const [palindromeInput, setPalindromeInput] = useState("");
  const [palindromeFeedback, setPalindromeFeedback] = useState([]);
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
      setPalindromeFeedback([]);
      setPalindromeInput("");
    }
    document.getElementById("palindrome-input").focus();
  }
  const clearPalindromeHandler = () => {
    setPalindromeInput("");
    setPalindromeFeedback([]);
    setPalindromeOutput([]);
    document.getElementById("palindrome-input").focus();
  };

  /**
   * Return object
   */
  return (
      <Card
        object={object}
        inputHandler={palindromeInputHandler}
        inputValue={palindromeInput}
        inputFeedback={palindromeFeedback}
        submitHandler={submitPalindromeHandler}
        clearHandler={clearPalindromeHandler}
        outputArray={palindromeOutput}
      >
      </Card>
  );
}

export default Palindrome;
