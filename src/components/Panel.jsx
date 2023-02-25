function Panel(props) {
  function handleChangeName(e) {
    e.preventDefault();
    props.setCurrentNumber(e.target.value);
  }
  function handleFindSubmit(e) {
    e.preventDefault();
    props.handleFind();
  }

  function handleShowsSubmit() {
    props.isShowIDs ? props.setIsShowIDs(false) : props.setIsShowIDs(true);
  }

  function makeRandomCards() {
    props.setIsSortByRandom(true);
    props.setIsSortByID(false);
    props.setIsSortByRecentMint(false);
  }
  function makeCardsByID() {
    props.setIsSortByRandom(false);
    props.setIsSortByID(true);
    props.setIsSortByRecentMint(false);
  }
  function makeCardsByRecentMint() {
    props.setIsSortByRandom(false);
    props.setIsSortByID(false);
    props.setIsSortByRecentMint(true);
  }

  return (
    <div className="Panel">
      <button className="view-punks">View your Apes</button>
      <div className={props.isVisible ? "panel-row" : "panel-row_center"}>
        <div>
          <span>Sort by:</span>
          <button
            className={`btn btn-1 ${
              props.isSortByRandom ? "btn_selected" : ""
            }`}
            onClick={makeRandomCards}
          >
            Random
          </button>
          <button
            className={`btn btn-2 ${props.isSortByID ? "btn_selected" : ""}`}
            onClick={makeCardsByID}
          >
            Apes ID
          </button>
          <button
            className={`btn btn-3 ${
              props.isSortByRecentMint ? "btn_selected" : ""
            }`}
            onClick={makeCardsByRecentMint}
          >
            Recent Mint
          </button>
        </div>
        <div className={props.isVisible ? "finder" : "finder_hide"}>
          <form>
            <input
              className="showsIDs"
              id="showsIDs"
              type="checkbox"
              name="showsIDs"
              onClick={handleShowsSubmit}
            />
            <label htmlFor="showsIDs">Always shows IDs</label>
          </form>
          <form onSubmit={handleFindSubmit}>
            <input
              className={`input-find ${
                props.cards && props.currentNumber > props.cards.length
                  ? "input-find_limit"
                  : ""
              }`}
              type="text"
              placeholder="Find Apes ID"
              onChange={handleChangeName}
            />
            <button
              className={`go ${
                props.cards && props.currentNumber > props.cards.length
                  ? "go_disabled"
                  : ""
              }`}
              type="submit"
              disabled={
                props.cards && props.currentNumber > props.cards.length
                  ? true
                  : false
              }
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Panel;
