function Card(props) {
  function handleOpenImage(e) {
    e.preventDefault();
    const src = `https://cryptopunks.app/cryptopunks/cryptopunk${
      props.id ? props.id : props.currentNumber
    }.png?size=400&customColor=F7931A`;
    window
      .open("about:blank", "new image")
      .document.write(
        "<img class='image-open' src='" +
          src +
          "' style='margin:100px 400px' />"
      );
  }

  function handleInfoClick() {
    props.onInfo();
    if (props.id) {
      props.setCurrentNumber(props.id);
    }
  }

  return (
    <div className="card-wrapper">
      <img
        key={props.id}
        className="card"
        src={`https://ordinals.com/content/${props.src}`}
      />
      <div className={"block"}>
        <div className={`layer-1 ${props.isShowIDs ? "layer-1_showed" : ""}`}>
          {props.isVisible ? (
            <span>#{String(props.id).padStart(4, "0")}</span>
          ) : (
            <span>#{String(props.currentNumber).padStart(4, "0")}</span>
          )}
        </div>
        <div className="layer-2"></div>
        <div className={`layer-3 ${props.isShowIDs ? "layer-3_showed" : ""}`}>
          <a onClick={handleInfoClick}>ORDS</a>
          <a onClick={handleOpenImage}>PFP</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
