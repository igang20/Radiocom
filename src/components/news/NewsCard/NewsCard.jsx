import "./NewsCard.css";

export default function NewsCard(props) {
  return (
    <div className="NewsCard">
      <p className="NewsDate">{props.date}</p>

      <h3 className="NewsHeading">
        {props.title}
        <hr className="HeadigAccent" />
      </h3>

      <article className="NewsText">{props.text}</article>
    </div>
  );
}
