import slugify from "../js/lib/slugify.js";

const Card = ({ object, inputHandler, inputValue, inputFeedback, submitHandler, clearHandler, outputArray}) => {
  return (
    <div className={`card ${slugify(object.name) ?? ""}`}>
      <header>
        <h2>
          {object.heading}
        </h2>
        <a href={object.promptLink}>
          Prompt
        </a>
      </header>
      <section>
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
        <div className="photo-credit">
          Photo by <a href={object.bgArtistLink}>{object.bgArtistName}</a> on <a href={object.bgPhotoLink}>{object.bgPhotoVendor}</a>
        </div>
      </section>
    </div>
  );
}

export default Card;
