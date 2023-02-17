import { useEffect, useState } from "react";
import Header from "./Header";
import InfoPopup from "./InfoPopup";
import Main from "./Main";
import { api } from "../utils/Api";

function App() {
  const dddd = {
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
      },
    },
  };
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);

  useEffect(() => {
    api
      .getData()
      .then((data) => {
        // console.log(data[1000]);
        // setCurrentUser(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleInfoClick() {
    setIsInfoPopupOpen(true);
  }

  function closePopup() {
    setIsInfoPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onInfo={handleInfoClick} />
      <InfoPopup isOpen={isInfoPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;

// fetch("https://api.bitcoinpunks.com/punk-inscriptions.json", {
//   headers: {
//     "content-type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
