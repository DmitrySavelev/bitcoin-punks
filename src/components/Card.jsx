function Card(props) {
  return (
    <div className="card-wrapper">
      <img key={props.key} className="card" src={props.src} />
      <div class="block">
        <div className="layer-1">
          <span>#{String(props.id).padStart(4, '0')}</span>
        </div>
        <div className="layer-2"></div>
        <div className="layer-3">
          <a href="">ORDS</a>
          <a href="">PFP</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
