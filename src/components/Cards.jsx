import Card from "./Card";
import { data, randomData } from "../utils/constants";

function Cards(props) {
  const renderedData = () => {
    if (props.isSortByID) {
      return data;
    } else {
      return randomData; 
    }
  };

  return (
    <div>
      <div className={props.isVisible ? "Cards" : "Cards_clean"}>
        <div className="Cards-wrapper">
          {renderedData().map((card) => (
            <Card
              key={card.id}
              src={card.src}
              id={card.id}
              onInfo={props.onInfo}
              number={props.number}
              minted={props.minted}
              hashes={props.hashes}
              isVisible={props.isVisible}
              isShowIDs={props.isShowIDs}
            />
          ))}
        </div>
        <button className="load-cards">Load more</button>
      </div>
    </div>
  );
}
export default Cards;
