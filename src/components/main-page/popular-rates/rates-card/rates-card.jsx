import "./rates-card.css";

export default function RatesCard(props) {

  const countedSpeed = props.speed * 2

  return (
    <div className="rates-card">
      <h4>{props.title}</h4>
      <div className="sped-section">
        <h5> <span>{props.speed}</span> Мбит</h5>
        <div className="speedLine">
          <div className={`speedMetr ${countedSpeed > 200 && "speedMetr-overheat "}`} style={{ width: `${countedSpeed}px` }}></div>
        </div>
      </div>
      <h5 id="price">{props.price} руб</h5>
    </div>
  );
}
