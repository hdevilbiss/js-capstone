import { useState } from "react";
import telephoneCheck from "../js/lib/telephoneCheck";
import Card from "./Card";

const Telephone = ({ object }) => {
    /**
   * State
   */
  const [telephoneInput, setTelephoneInput] = useState("");
  const [telephoneFeedback, setTelephoneFeedback] = useState("");
  const [telephoneOutput, setTelephoneOutput] = useState([]);

  /**
   * Event Handlers
   */
  const telephoneInputHandler = (event) => {
    setTelephoneInput(event.target.value);
  };
  const submitTelephoneHandler = () => {
    /**
     * Submit button onClick
     * If validation regex fails on input,
     *  set feedback == validation message
     * Else
     *  set output == ...output, specialFcn(input)
     *  set feedback []
     *  set input ""
     * Refocus the input
     */
    if (telephoneInput.length < 10) {
      setTelephoneFeedback(`Needs to be at least 10 chars...`);
    }
    else if (telephoneInput.match(/[A-Z][a-z]/) !== null) {
      setTelephoneFeedback(`No letters, only numbers, hyphens, or parentheses`);
    }
    else {
      telephoneCheck(telephoneInput) === true
        ? setTelephoneOutput([...telephoneOutput, `Yes, ${telephoneInput} is a valid U.S. phone number`])
        : setTelephoneOutput([...telephoneOutput, `No, ${telephoneInput} is not a valid U.S. phone number`]);
      setTelephoneFeedback("");
      setTelephoneInput("");
    }
    document.getElementById("telephone-input").focus();
  }
  const clearTelephoneHandler = () => {
    setTelephoneInput("");
    setTelephoneFeedback("");
    setTelephoneOutput([]);
    document.getElementById("telephone-input").focus();
  };
  return (
    <Card
      object={object}
      inputHandler={telephoneInputHandler}
      inputValue={telephoneInput}
      inputFeedback={telephoneFeedback}
      submitHandler={submitTelephoneHandler}
      clearHandler={clearTelephoneHandler}
      outputArray={telephoneOutput}
    >
    </Card>
  );
}

export default Telephone;
