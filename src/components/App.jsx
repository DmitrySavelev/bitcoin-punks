import { useEffect, useState } from "react";
import Header from "./Header";
import InfoPopup from "./InfoPopup";
import Main from "./Main";
import { api } from "../utils/Api";

function App() {
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [currentMinted, setCurrentMinted] = useState(null);
  const [currentHashes, setCurrentHashes] = useState({});
  const [findNumber, setFindNumber] = useState("");
  const [isShowIDs, setIsShowIDs] = useState(true);
  const [isSortByRandom, setIsSortByRandom] = useState(true);
  const [isSortByID, setIsSortByID] = useState(false);
  const [isSortByRecentMint, setIsSortByRecentMint] = useState(false);

  useEffect(() => {
    api
      .getData()
      .then((data) => {
        if (currentNumber) {
          setCurrentMinted(data[currentNumber].lowest);
          setCurrentHashes(data[currentNumber].hashes);
        }
      })
      .catch((error) => console.log(error));
  }, [isInfoPopupOpen]);

  function handleInfoClick() {
    setIsInfoPopupOpen(true);
  }

  function closePopup() {
    setIsInfoPopupOpen(false);
  }

  function handleFindByNumber() {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onInfo={handleInfoClick}
        number={setCurrentNumber}
        minted={setCurrentMinted}
        hashes={setCurrentHashes}
        handleFind={handleFindByNumber}
        isVisible={isVisible}
        setNumber={setFindNumber}
        findNumber={findNumber}
        setIsShowIDs={setIsShowIDs}
        isShowIDs={isShowIDs}
        isSortByRandom={isSortByRandom}
        setIsSortByRandom={setIsSortByRandom}
        isSortByID={isSortByID}
        setIsSortByID={setIsSortByID}
        isSortByRecentMint={isSortByRecentMint}
        setIsSortByRecentMint={setIsSortByRecentMint}
      />
      <InfoPopup
        isOpen={isInfoPopupOpen}
        onClose={closePopup}
        number={currentNumber}
        minted={currentMinted}
        hashes={currentHashes}
      />
    </div>
  );
}

export default App;

// const dddd = {
//   1000: {
//     lowest: 14841,
//     hashes: {
//       14841:
//         "60fc36ff9eff05bfe059de0c952bee06eca7acb43cf269e6ad8d84f99992f0f8i0",

//       20080:
//         "cfdad958f22d49bc84c9a8812cc70fad2d0cca9a061b18dbe7d77da0fd0bbf32i0",
//       20089:
//         "eb570556440414df1f266bbc59fcfe24b1ddaaa159ce7b0d9e890eb35575295di0",
//     },
//   },

//   1001: {
//     lowest: 20089,
//     hashes: {
//       20089:
//         "eb570556440414df1f266bbc59fcfe24b1ddaaa159ce7b0d9e890eb35575295di0",
//     },
//   },
// };

