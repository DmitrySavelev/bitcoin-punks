function Header() {
  function handleOpenMarket() {
    window.open("https://ordinals.market/", "_blank");
  }

  return (
    <div className="header">
      <div className="logo"></div>
      <div className="header-column">
        <div className="socials">
          <h1 className="title">BITCOIN APES ISLAND RETREAT</h1>
          <div className="discord-icon"></div>
          <div className="twitter-icon"></div>
        </div>
        <span className="desc">The first 500 NFT collection on Bitcoin</span>
        <div className="minted-row">
          <span className="minted">500 / 500 minted!</span>
          <button onClick={handleOpenMarket} className="check-listings">
            Verified Listings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
