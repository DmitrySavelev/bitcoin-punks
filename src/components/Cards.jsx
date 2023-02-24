import Card from "./Card";

function Cards(props) {
  function handleChangeOrder(cards) {
    if (props.isSortByRandom) {
      return props.randomCards;
    } else if (props.isSortByID) {
      return cards;
    } else if (props.isSortByRecentMint) {
      return [...cards].sort((a, b) => b[1].lowest - a[1].lowest);
    }
  }

  return (
    <div className={props.isVisible ? "Cards" : "Cards_clean"}>
      {props.isLoading ? (
        <button className="loading">Loading data...</button>
      ) : (
        <>
          <div className="Cards-wrapper">
            {handleChangeOrder(props.cards)
              .slice(0, props.pagination)
              .map((card) => (
                <Card
                  key={card[0]}
                  src={card[1].hashes[card[1].lowest]}
                  id={card[0]}
                  onInfo={props.onInfo}
                  setCurrentNumber={props.setCurrentNumber}
                  minted={props.minted}
                  hashes={props.hashes}
                  isVisible={props.isVisible}
                  isShowIDs={props.isShowIDs}
                  handleClickORDS={props.handleClickORDS}
                  setId={props.setId}
                  currentNumber={props.currentNumber}
                />
              ))}
          </div>
          <button className="load-cards" onClick={props.handlePagination}>
            Load more
          </button>
        </>
      )}
    </div>
  );
}
export default Cards;
