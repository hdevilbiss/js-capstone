import { useState } from "react";
import convertToRoman from "../js/lib/convertToRoman";
import "../style/_roman.scss";
import Card from "../components/Card";

const Roman = ({ object }) => {
  /**
   * State
   */
  const [romanInput, setRomanInput] = useState("");
  const [romanFeedback, setRomanFeedback] = useState([]);
  const [romanOutput, setRomanOutput] = useState([]);

  /**
   * Event Handlers
   */
  const romanInputHandler = (event) => {
    setRomanInput(event.target.value);
  };
  const submitRomanHandler = () => {
    if (romanInput.length < 1 || romanInput.length > 4) {
      setRomanFeedback("Should be between 1 and 4 characters in length");
    }
    else {
      setRomanOutput([...romanOutput, convertToRoman(romanInput)]);
      setRomanFeedback("");
      setRomanInput("");
    }
    document.getElementById("roman-input").focus();
  }
  const clearRomanHandler = () => {
    setRomanInput("");
    setRomanFeedback("");
    setRomanOutput([]);
    document.getElementById("roman-input").focus();
  };

  /**
   * Return object
   */
  return (
    <Card
      object={object}
      inputHandler={romanInputHandler}
      inputValue={romanInput}
      inputFeedback={romanFeedback}
      submitHandler={submitRomanHandler}
      clearHandler={clearRomanHandler}
      outputArray={romanOutput}
    >
    </Card>
  );
}

export default Roman;
