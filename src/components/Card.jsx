import slugify from "../js/lib/slugify.js";

const Card = ({ title, promptLink }) => {
  return (
    <div className={`card ${slugify(title) ?? ""}`}>
      <header>
        <h2>
          {title}
        </h2>
        <a href={`${promptLink ?? ""}`}></a>
      </header>
    </div>
  );
}

export default Card;
