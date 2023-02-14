function Panel() {
  return (
    <div className="Panel">
      <button>View your punks</button>
      <div className="panel-row">
        <div>
          <span>Sort by:</span>
          <button>Random</button>
          <button>Pank ID</button>
          <button>Recent Mint</button>
        </div>
        <div>
          <input type="checkbox" name="showsIDs" />
          <input type="text" placeholder="Find Punk ID" />
          <button type="submit">Go</button>
        </div>
      </div>
    </div>
  );
}

export default Panel;
