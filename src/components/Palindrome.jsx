const Palindrome = () => {
  /**
   * Event Handlers
   */
  const palindromeChecker = () => {
    const palindromeInput = document.getElementById("palindrome-input");
    const palindromeOutput = document.getElementById("palindrome-output");
    const strToCheck = palindromeInput.value;
    const feedback = document.getElementById("feedback-on-palindrome-input");
    if (strToCheck.length < 2) {
      feedback.innerHTML = "String too short; needs >= 2";
      return;
    }
    if (strToCheck.length > 20) {
      feedback.innerHTML = "String too long; needs <= 20";
      return;
    }
    let n = strToCheck.length;
    let str1 = "";
    let str2 = "";

    switch (n % 2) {
      case 0:
        str1 = strToCheck.slice(0, n / 2);
        str2 = strToCheck.slice(n / 2, n).split("").reverse().join("");
        break;
      case 1:
        str1 = strToCheck.slice(0, Math.floor(n / 2) + 1);
        str2 = strToCheck.slice(Math.floor(n / 2), n).split("").reverse().join("");
        break;
      default:
        break;
    }
    str1 === str2
      ? palindromeOutput.innerHTML += `<p>Yes, ${strToCheck} is a palindrome.</p>`
      : palindromeOutput.innerHTML += `<p>No, ${strToCheck} is not a palindrome.</p>`;
    feedback.innerHTML = "";
    palindromeInput.value = "";
  }
  const clearPalindromeOutput = () => {
    const palindromeOutput = document.getElementById("palindrome-output");
    while (palindromeOutput.firstChild) {
			palindromeOutput.removeChild(palindromeOutput.firstChild);
    }
    document.getElementById("palindrome-input").value = "";
    document.getElementById("feedback-on-palindrome-input").innerHTML = "";
  }

  return (
    <div className="palindrome">
      <h2>
        Palindrome Tester
      </h2>
      <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker" alt="Link to the exercise on freeCodeCamp">
        Project #1 on freeCodeCamp
      </a>
      <div>
        <label htmlFor="palindrome-input">
          Input a word
        </label>
        <input type="text" id="palindrome-input" />
        <span id="feedback-on-palindrome-input"></span>
      </div>
      <button id="button-input" onClick={palindromeChecker}>
        Test the word
      </button>
      <button id="button-clear" onClick={clearPalindromeOutput}>
        Clear the output
      </button>
      <div id="palindrome-output">

      </div>
    </div>
  );
}

export default Palindrome;
