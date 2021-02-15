import slugify from "../js/lib/slugify.js";

const Card = ({ name, heading, promptLink, inputLabel, inputHandler, inputValue, inputFeedback, submitHandler, submitButtonText, clearHandler, clearButtonText, outputArray, bgArtistLink, bgArtistName, bgPhotoLink, bgPhotoVendor }) => {
  return (
    <div className={`card ${slugify(name) ?? ""}`}>
      <header>
        <h2>
          {heading}
        </h2>
        <a href={promptLink}>
          Prompt
        </a>
      </header>
      <section>
        <div>
          <label htmlFor={`${slugify(name)}-input`}>
          {inputLabel}
          </label>
          <input type="text" id={`${slugify(name)}`} onChange={inputHandler} value={inputValue} />
          <span className="feedback">
          {inputFeedback}
          </span>
        </div>
        <div>
          <button className="button-input" onClick={submitHandler}>
            {submitButtonText}
          </button>
          <button className="button-clear" onClick={clearHandler}>
            {clearButtonText}
          </button>
        </div>
        <div className="output">
          {outputArray.map((str, idx) => (
            <p key={idx}>{str}</p>
          ))}
        </div>
        <div className="photo-credit">
          Photo by <a href={bgArtistLink}>{bgArtistName}</a> on <a href={bgPhotoLink}>{bgPhotoVendor}</a>
        </div>
      </section>
    </div>
  );
}

export default Card;
