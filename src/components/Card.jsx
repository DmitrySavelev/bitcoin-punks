function Card(props) {
  const handleClick = () => {
    props.number(+`${String(props.id).padStart(4, "0")}`);
    props.onInfo();
  };


// для добавления картинки в другой вкладке
// для добавления картинки в другой вкладке
// для добавления картинки в другой вкладке
// для добавления картинки в другой вкладке
  const img = document.getElementById("vzhuh"); // берем картинку по id
const src = img.src; // берем ее src
img.addEventListener('click', () => {
  const win = window.open('about:blank', 'new image'); // открываем окно
  win.document.write("<img src='" + src + "' alt='from old image' />"); //  вставляем картинку
});



  return (
    <div className="card-wrapper">
      <img
        key={props.id}
        className="card"
        src={`https://ordinals.com/content/${props.src}`}
      />
      <div className={"block"}>
        <div className={`layer-1 ${props.isShowIDs ? "layer-1_showed" : ""}`}>
          {props.isVisible == undefined ? (
            <span>#{String(props.findNumber).padStart(4, "0")}</span>
          ) : (
            <span>#{String(props.id).padStart(4, "0")}</span>
          )}
        </div>
        <div className="layer-2"></div>
        <div className={`layer-3 ${props.isShowIDs ? "layer-3_showed" : ""}`}>
          <a onClick={handleClick}>ORDS</a>
          <a>PFP</a>
        </div>
      </div>
    </div>
  );
}

export default Card;