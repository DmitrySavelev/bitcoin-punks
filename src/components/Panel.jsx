function Panel(props) {
  function handleChangeName(e) {
    props.setNumber(e.target.value);
  }

  function handleFindSubmit(e) {
    e.preventDefault();
    props.handleFind();
  }

  function handleShowsSubmit() {
    if (props.isShowIDs) {
      props.setIsShowIDs(false);
    } else {
      props.setIsShowIDs(true);
    }
  }

  return (
    <div className="Panel">
      <button className="view-punks">View your Apes</button>
      <div className={props.isVisible ? "panel-row" : "panel-row_center"}>
        <div>
          <span>Sort by:</span>
          <button className="btn btn-1">Random</button>
          <button className="btn btn-2">Apes ID</button>
          <button className="btn btn-3">Recent Mint</button>
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
              className="input-find"
              type="text"
              placeholder="Find Apes ID"
              onChange={handleChangeName}
            />
            <button className="go" type="submit">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Panel;
