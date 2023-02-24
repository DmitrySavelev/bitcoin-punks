import Card from "./Card";

function FoundCard({
  cardsObject,
  currentNumber,
  handleFind,
  onInfo,
  number,
  minted,
  hashes,
  isVisible,
  isShowIDs,
}) {
  return (
    <div className="found-card">
      <Card
        src={
          cardsObject[currentNumber].hashes[cardsObject[currentNumber].lowest]
        }
        currentNumber={currentNumber}
        onInfo={onInfo}
        number={number}
        minted={minted}
        hashes={hashes}
        isVisible={isVisible}
        isShowIDs={isShowIDs}
      />
      <button className="found-card__button" onClick={handleFind}>
        Clear Filter
      </button>
    </div>
  );
}
export default FoundCard;
