import { useState } from "react";
import rot13 from "../js/lib/rot13";
import "../style/_rot.scss";
import Card from "./Card";

const Rot = ({ object }) => {
  /**
   * State
   */
  const [rotInput, setRotInput] = useState("");
  const [rotFeedback, setRotFeedback] = useState([]);
  const [rotOutput, setRotOutput] = useState([]);

  /**
   * Event Handlers
   */
  const rotInputHandler = (event) => {
    setRotInput(event.target.value);
  };
  const submitRotHandler = () => {
    if (rotInput.length < 1 || rotInput.length > 200) {
      setRotFeedback("Should be between 1 and 200 characters in length");
    }
    else {
      setRotOutput([...rotOutput, rot13(rotInput)]);
      setRotFeedback([]);
      setRotInput("");
    }
    document.getElementById("rot-input").focus();
  }
  const clearRotHandler = () => {
    setRotInput("");
    setRotFeedback([]);
    setRotOutput([]);
    document.getElementById("rot-input").focus();
  };

  /**
   * Return object
   */
  return (
    <Card
      object={object}
      inputHandler={rotInputHandler}
      inputValue={rotInput}
      inputFeedback={rotFeedback}
      submitHandler={submitRotHandler}
      clearHandler={clearRotHandler}
      outputArray={rotOutput}
    >
    </Card>
  );
}

export default Rot;
