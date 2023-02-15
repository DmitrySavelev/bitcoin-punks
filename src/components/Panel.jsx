function Panel() {
  return (
    <div className="Panel">
      <button className="view-punks">View your Apes</button>
      <div className="panel-row">
        <div>
          <span>Sort by:</span>
          <button className="btn btn-1">Random</button>
          <button className="btn btn-2">Apes ID</button>
          <button className="btn btn-3">Recent Mint</button>
        </div>
        <div className="finder">
          <form>
            <input className="showsIDs" id="showsIDs" type="checkbox" name="showsIDs" />
            <label htmlFor="showsIDs">Always shows IDs</label>
          </form>
          <input className="input-find" type="text" placeholder="Find Apes ID" />
          <button className="go" type="submit">Go</button>
        </div>
      </div>
    </div>
  );
}

export default Panel;
