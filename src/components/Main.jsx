import Article from "./Article";
import Cards from "./Cards";
import Confirmation from "./Confirmation";
import FoundCard from "./FoundCard";
import Panel from "./Panel";

function Main(props) {
  return (
    <div className="Main">
      <Article />
      <Confirmation />
      <Panel
        handleFind={props.handleFind}
        isVisible={props.isVisible}
        // setFindNumber={props.setFindNumber}
        setCurrentNumber={props.setCurrentNumber}

        setIsShowIDs={props.setIsShowIDs}
        isShowIDs={props.isShowIDs}
        isSortByRandom={props.isSortByRandom}
        setIsSortByRandom={props.setIsSortByRandom}
        isSortByID={props.isSortByID}
        setIsSortByID={props.setIsSortByID}
        isSortByRecentMint={props.isSortByRecentMint}
        setIsSortByRecentMint={props.setIsSortByRecentMint}
      />
      {props.isVisible ? (
        <Cards
          setId={props.setId}
          onInfo={props.onInfo}
          setCurrentNumber={props.setCurrentNumber}
          minted={props.minted}
          hashes={props.hashes}
          isVisible={props.isVisible}
          isShowIDs={props.isShowIDs}
          isSortByRandom={props.isSortByRandom}
          setIsSortByRandom={props.setIsSortByRandom}
          isSortByID={props.isSortByID}
          setIsSortByID={props.setIsSortByID}
          isSortByRecentMint={props.isSortByRecentMint}
          setIsSortByRecentMint={props.setIsSortByRecentMint}
          cards={props.cards}
          randomCards={props.randomCards}
        />
      ) : (
        <FoundCard
          handleFind={props.handleFind}
          // findNumber={props.findNumber}
          cards={props.cards}
          cardsObject={props.cardsObject}
          onInfo={props.onInfo}
          number={props.number}
          minted={props.minted}
          hashes={props.hashes}
          isVisible={props.isVisible}
          isShowIDs={props.isShowIDs}
          currentNumber={props.currentNumber}
        />
      )}
    </div>
  );
}

export default Main;
