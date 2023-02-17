import { useEffect, useRef } from "react";

function Card(props) {
  // function handleClick ()  {
  //   props.onInfo;
  //   console.log(props.id);
  // };
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
    console.log(String(props.id).padStart(4, "0"));
  }, []);

  return (
    <div className="card-wrapper">
      <img key={props.id} className="card" src={props.src} />
      <div class="block">
        <div className="layer-1">
          <span ref={ref}>#{String(props.id).padStart(4, "0")}</span>
        </div>
        <div className="layer-2"></div>
        <div className="layer-3">
          <a onClick={props.onInfo}>ORDS</a>
          <a>PFP</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
