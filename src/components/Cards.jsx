const data = [
  { id: 1, name: "Spidy", src: "../images/Bapes1.jpg" },
  { id: 2, name: "Spidy", src: "../images/Bapes2.jpg" },
  { id: 3, name: "Spidy", src: "../images/Bapes3.jpg" },
  { id: 4, name: "Spidy", src: "../images/Bapes4.jpg" },
  { id: 5, name: "Spidy", src: "../images/Bapes5.jpg" },
  { id: 6, name: "Spidy", src: "../images/Bapes6.jpg" },
];
let img = "../images/Bapes1.jpg";
function Cards() {
  return (
    <div className="Cards">
      <div className="Cards-wrapper">
        <img className="card" src={require("../images/Bapes1.jpg")} />
        <img className="card" src={require("../images/Bapes2.jpg")} />
        <img className="card" src={require("../images/Bapes3.jpg")} />
        <img className="card" src={require("../images/Bapes4.jpg")} />
        <img className="card" src={require("../images/Bapes5.jpg")} />
        <img className="card" src={require("../images/Bapes6.jpg")} />
        <img className="card" src={require("../images/Bapes1.jpg")} />
        <img className="card" src={require("../images/Bapes2.jpg")} />
        <img className="card" src={require("../images/Bapes3.jpg")} />
        <img className="card" src={require("../images/Bapes4.jpg")} />
        <img className="card" src={require("../images/Bapes5.jpg")} />
        <img className="card" src={require("../images/Bapes6.jpg")} />
        <img className="card" src={require("../images/Bapes1.jpg")} />
        <img className="card" src={require("../images/Bapes2.jpg")} />
        <img className="card" src={require("../images/Bapes3.jpg")} />
        <img className="card" src={require("../images/Bapes4.jpg")} />
        <img className="card" src={require("../images/Bapes5.jpg")} />
        <img className="card" src={require("../images/Bapes6.jpg")} />
        <img className="card" src={require("../images/Bapes1.jpg")} />
        <img className="card" src={require("../images/Bapes2.jpg")} />
        <img className="card" src={require("../images/Bapes3.jpg")} />
        <img className="card" src={require("../images/Bapes4.jpg")} />
        <img className="card" src={require("../images/Bapes5.jpg")} />
        <img className="card" src={require("../images/Bapes6.jpg")} />
        <img className="card" src={require("../images/Bapes1.jpg")} />
        <img className="card" src={require("../images/Bapes2.jpg")} />
        <img className="card" src={require("../images/Bapes3.jpg")} />
        <img className="card" src={require("../images/Bapes4.jpg")} />
        <img className="card" src={require("../images/Bapes5.jpg")} />
        <img className="card" src={require("../images/Bapes6.jpg")} />
        <img className="card" src={require("../images/Bapes1.jpg")} />
        <img className="card" src={require("../images/Bapes2.jpg")} />
        <img className="card" src={require("../images/Bapes3.jpg")} />
        <img className="card" src={require("../images/Bapes4.jpg")} />
        <img className="card" src={require("../images/Bapes5.jpg")} />
        <img className="card" src={require("../images/Bapes6.jpg")} />
        <img className="card" src={require("../images/Bapes1.jpg")} />
        <img className="card" src={require("../images/Bapes2.jpg")} />
        <img className="card" src={require("../images/Bapes3.jpg")} />
        <img className="card" src={require("../images/Bapes4.jpg")} />
        <img className="card" src={require("../images/Bapes5.jpg")} />
        <img className="card" src={require("../images/Bapes6.jpg")} />
      </div>
      <button className="load-cards">Load more</button>
    </div>
  );
}

export default Cards;

{
  /* <div className="card" style={{ backgroundImage: `url(${data[0].src})` }} /> */
}
{
  /* {data.map((card) => (
       
      ))} */
}
