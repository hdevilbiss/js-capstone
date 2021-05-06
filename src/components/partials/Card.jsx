import slugify from "../../js/lib/slugify.js";
import PhotoCredit from "./PhotoCredit";

const Card = ({ object, inputHandler, inputValue, inputFeedback, submitHandler, clearHandler, outputArray}) => {
  return (
    <div className={`card ${slugify(object.name) ?? ""}`}>
      <section>
        <header>
          <h2>
            {object.heading}
          </h2>
          <a href={object.promptLink}>
            Prompt
          </a>
        </header>
        <div>
          <label htmlFor={`${slugify(object.name)}-input`}>
          {object.inputLabel}
          </label>
          <input type={object.inputType} id={`${slugify(object.name)}-input`} onChange={inputHandler} value={inputValue} />
          <span className="feedback">
            {inputFeedback}
          </span>
        </div>
        <div>
          <button className="button-input" onClick={submitHandler}>
            {object.submitButtonText}
          </button>
          <button className="button-clear" onClick={clearHandler}>
            {object.clearButtonText}
          </button>
        </div>
        <div className="output">
          {outputArray.map((str, idx) => (
            <p key={idx}>{str}</p>
          ))}
        </div>
        <PhotoCredit
          bgArtistLink={object.bgArtistLink}
          bgArtistName={object.bgArtistName}
          bgPhotoLink={object.bgPhotoLink}
          bgPhotoVendor={object.bgPhotoVendor}
        />
      </section>
    </div>
  );
}

export default Card;
