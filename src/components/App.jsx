import { useEffect, useState } from "react";
import Header from "./Header";
import InfoPopup from "./InfoPopup";
import Main from "./Main";
import { api } from "../utils/Api";
import { makeRandomArr } from "../utils/constants";
import React from "react";

function App() {
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [currentMinted, setCurrentMinted] = useState(null);
  const [currentHashes, setCurrentHashes] = useState({});
  const [currentSrc, setCurrentSrc] = useState("");
  const [isShowIDs, setIsShowIDs] = useState(true);

  const [isSortByRandom, setIsSortByRandom] = useState(true);
  const [isSortByID, setIsSortByID] = useState(false);
  const [isSortByRecentMint, setIsSortByRecentMint] = useState(false);

  const [cards, setCards] = useState([]);
  const [randomCards, setRandomCards] = useState([]);
  const [cardsObject, setCardsObject] = useState([]);

  const [pagination, setPagination] = useState(250);
  const [isLoading, setIsLoading] = useState(false);

  function handlePagination() {
    setPagination(pagination + 250);
  }
  useEffect(() => {
    setIsLoading(true);
    api
      .getData()
      .then((data) => {
        console.log(data['0001'])
        // console.log(Object.entries(data));
        setRandomCards(makeRandomArr(Object.entries(data)));
        setCards(Object.entries(data));
        setCardsObject(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    api
      .getData()
      .then((data) => {
        if (currentNumber) {
          setCurrentMinted(data[currentNumber].lowest);
          setCurrentHashes(data[currentNumber].hashes);
          setCurrentSrc(data[currentNumber].hashes[data[currentNumber].lowest]);
        }
      })
      .catch((error) => console.log(error));
  }, [isInfoPopupOpen]);

  function closePopup() {
    setIsInfoPopupOpen(false);
    if (isVisible) {
      setCurrentNumber(null);
    }
  }

  function handleFindByNumber() {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }

  const handleInfoClick = () => {
    setIsInfoPopupOpen(true);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onInfo={handleInfoClick}
        setCurrentNumber={setCurrentNumber}
        minted={setCurrentMinted}
        hashes={setCurrentHashes}
        handleFind={handleFindByNumber}
        isVisible={isVisible}
        currentNumber={currentNumber}
        setIsShowIDs={setIsShowIDs}
        isShowIDs={isShowIDs}
        isSortByRandom={isSortByRandom}
        setIsSortByRandom={setIsSortByRandom}
        isSortByID={isSortByID}
        setIsSortByID={setIsSortByID}
        isSortByRecentMint={isSortByRecentMint}
        setIsSortByRecentMint={setIsSortByRecentMint}
        cards={cards}
        randomCards={randomCards}
        cardsObject={cardsObject}
        pagination={pagination}
        handlePagination={handlePagination}
        isLoading={isLoading}
      />
      <InfoPopup
        isOpen={isInfoPopupOpen}
        onClose={closePopup}
        currentNumber={currentNumber}
        minted={currentMinted}
        hashes={currentHashes}
        src={currentSrc}
        isVisible={isVisible}
      />
    </div>
  );
}

export default App;
