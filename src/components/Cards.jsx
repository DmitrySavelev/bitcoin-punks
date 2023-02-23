import Card from "./Card";
import { makeRandomArr } from "../utils/constants";

function Cards(props) {
  function handleChangeOrder(cards) {
    if (props.isSortByRandom) {
      return makeRandomArr(cards);
    } else if (props.isSortByID) {
      return cards;
    } else if (props.isSortByRecentMint) {
      return [...cards].sort((a, b) => b[1].lowest - a[1].lowest);
    }
  }

  return (
    <div>
      <div className={props.isVisible ? "Cards" : "Cards_clean"}>
        <div className="Cards-wrapper">
          {handleChangeOrder(props.cards)
            .slice(0, 100)
            .map((card) => (
              <Card
                key={card[0]}
                src={card[1].hashes[card[1].lowest]}
                id={card[0]}
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

const obj = {
  1000: {
    lowest: 14841,
    hashes: {
      14841:
        "60fc36ff9eff05bfe059de0c952bee06eca7acb43cf269e6ad8d84f99992f0f8i0",
      20080:
        "cfdad958f22d49bc84c9a8812cc70fad2d0cca9a061b18dbe7d77da0fd0bbf32i0",
    },
  },
  1001: {
    lowest: 20089,
    hashes: {
      20089:
        "eb570556440414df1f266bbc59fcfe24b1ddaaa159ce7b0d9e890eb35575295di0",
      165048:
        "3da16f92ce5e78f072247069588054e1b501b49ad39cccd13ec04dd387d67055i0",
    },
  },
  1002: {
    lowest: 20097,
    hashes: {
      20097:
        "01c0e58c0e03fd66dc5e1930e7bd29f2c52ff89d28ff3df5a495d8dec965147di0",
      165049:
        "5cbbc2ad805dece152b379bca7a942872d937ae7f47d415781d6f6b3fd24967ci0",
    },
  },
};
