function InfoPopup() {
  return (
    <div className="InfoPopup">
      <div className="popup__container-info">
        <div className="popup__row">
          <span className="popup__number">#0001</span>
          <div className="popup__buttons">
            <button className="popup__buttons_report">Report Inaccuracy</button>
            <button className="popup__buttons_close">Close</button>
          </div>
        </div>
        <div className="popup__content">
          <img className="popup__image" src="./images/Bapes1.jpg" alt="" />

          <div className="popup__text-info">
            <div className="popup__text-info_minted">
              <div className="popup__figure">
                <div className="popup__figure_circle"></div>
                <div className="popup__figure_vertical-line"></div>
              </div>

              <div className="popup__text_value">
                <span className="white">Minted</span>
                <span>View inscription #24946</span>
                <span className="small">The first byte-perfect upload of this punk</span>
              </div>
            </div>

            <div className="popup__text-info_missed">
              <div className="popup__figure">
                <div className="popup__figure_circle"></div>
                <div className="popup__figure_vertical-line"></div>
              </div>
              <div className="popup__text_value">
                <span>Minted</span>
                <span>View inscription #25774</span>
                <span className="small">This appeared after the original upload of this punk.</span>
              </div>
            </div>

            <div className="popup__text-info_end">
              <div className="popup__figure">
                <div className="popup__figure_circle"></div>
              </div>
              <div className="popup__text_value">
                <span>No additional mint attempts</span>
                <span className="small">Recent mint attempts may take time to appear</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPopup;
