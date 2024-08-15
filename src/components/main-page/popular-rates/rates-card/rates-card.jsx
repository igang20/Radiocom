import "./rates-card.css";

export default function RatesCard(props) {
  return (
    <div className="rates-card">
      <h4>{props.title}</h4>
      <div className="sped-section">
        <h5> <span>{props.speed}</span> Мбит/с</h5>
        <img src={props.img} alt='speedLine'></img>
      </div>
      <h5 id="price">{props.price} руб.</h5>
    </div>
  );
}
