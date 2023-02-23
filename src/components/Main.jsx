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
        setNumber={props.setNumber}
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
          onInfo={props.onInfo}
          number={props.number}
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
        />
      ) : (
        <FoundCard
          handleFind={props.handleFind}
          findNumber={props.findNumber}
        />
      )}
    </div>
  );
}

export default Main;
