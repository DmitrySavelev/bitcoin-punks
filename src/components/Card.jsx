import { useEffect } from "react";

function Card(props) {
  const handleClick = () => {
    props.number(+`${String(props.id).padStart(4, "0")}`);
    props.onInfo();
  };

  useEffect(() => {});

  return (
    <div className="card-wrapper">
      <img key={props.id} className="card" src={props.src} />
      <div className="block">
        {/* <div className="layer-1"> */}
        {/* <div className={`layer-1 ${props.isShowIDs ? "layer-1_showed" : ""}`}> */}
        <div className={`${props.isShowIDs ? "layer-1_showed" : ""}`}>
          {props.isVisible == undefined ? (
            <span>#{String(props.findNumber).padStart(4, "0")}</span>
          ) : (
            <span>#{String(props.id).padStart(4, "0")}</span>
          )}
        </div>
        {/* <div
          className={`layer-2 ${props.isShowIDs ? "layer-2_showed" : ""}`}
        ></div>
        <div className={`layer-3 ${props.isShowIDs ? "layer-3_showed" : ""}`}> */}
        <div className={`${props.isShowIDs ? "layer-2" : ""}`}></div>
        <div className={`${props.isShowIDs ? "layer-3" : ""}`}>
          <a onClick={handleClick}>ORDS</a>
          <a>PFP</a>
        </div>
        {/* <div className="layer-2"></div>
        <div className="layer-3">
          <a onClick={handleClick}>ORDS</a>
          <a>PFP</a>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
