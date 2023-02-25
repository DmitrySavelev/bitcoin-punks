import Missed from "./Missed";

function InfoPopup(props) {
  function handleOpenInscription(src) {
    window.open(`https://ordinals.com/inscription/${src}`, "_blank");
  }

  return (
    <div
      className={`InfoPopup ${props.isOpen ? "popup_opened" : ""}`}
      onClick={props.onOverlayClose}
    >
      <div className="popup__container-info">
        <div className="popup__row">
          <span className="popup__number">#{props.currentNumber}</span>
          <div className="popup__buttons">
            <button className="popup__buttons_report">Report Inaccuracy</button>
            <button className="popup__buttons_close" onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
        <div className="popup__content">
          <img
            className="popup__image"
            src={props.src ? `https://ordinals.com/content/${props.src}` : ""}
          />
          <div className="popup__text-info">
            <div className="popup__text-info_minted">
              <div className="popup__figure">
                <div className="popup__figure_circle popup__figure_circle_first"></div>
                <div className="popup__figure_vertical-line"></div>
              </div>
              <div className="popup__text_value">
                <span className="white">Minted</span>
                <a
                  onClick={() => handleOpenInscription(props.src)}
                  className="popup__view-minted"
                >
                  View inscription #{props.minted}
                </a>
                <span className="small">
                  The first byte-perfect upload of this punk
                </span>
              </div>
            </div>
            {Object.keys(props.hashes)
              .slice(1)
              .map((num) => (
                <Missed
                  key={num}
                  number={num}
                  handleOpenInscription={handleOpenInscription}
                  src={props.hashes[num]}
                />
              ))}
            <div className="popup__text-info_end">
              <div className="popup__figure">
                <div className="popup__figure_circle"></div>
              </div>
              <div className="popup__text_value">
                <span>No additional mint attempts</span>
                <span className="small">
                  Recent mint attempts may take time to appear
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPopup;
