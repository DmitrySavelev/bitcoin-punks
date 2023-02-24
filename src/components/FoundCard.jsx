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
  const formattedNumber = String(currentNumber).padStart(4, "0");
  return (
    <div className="found-card">
      <Card
        src={
          cardsObject[formattedNumber].hashes[
            cardsObject[formattedNumber].lowest
          ]
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
