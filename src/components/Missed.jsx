function Missed(props) {
  return (
    <div className="popup__text-info_missed">
      <div className="popup__figure">
        <div className="popup__figure_circle"></div>
        <div className="popup__figure_vertical-line"></div>
      </div>
      <div className="popup__text_value">
        <span>Minted</span>
        <a className="popup__view-missed">View inscription #{props.number}</a>
        <span className="small">
          This appeared after the original upload of this punk.
        </span>
      </div>
    </div>
  );
}

export default Missed;
