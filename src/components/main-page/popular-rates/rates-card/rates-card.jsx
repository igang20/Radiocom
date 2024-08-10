import "./rates-card.css";

export default function RatesCard(props) {
  return (
    <div className="rates-card">
      <h4>{props.title}</h4>
      <p>Оптоволоконный интернет</p>
      <h5>{props.speed} Мбит/с</h5>
      <img src={props.img}></img>
      <h5 id="price">{props.price}руб</h5>
    </div>
  );
}
