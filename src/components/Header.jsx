function Header() {
  return ( 
    <div className="Header">
      <div className="logo"></div>
      <div className="header-column">
        <div className="socials">
          <h1 className="title">Bitcoin Punks</h1>
          <div className="discord-icon"></div>
          <div className="twitter-icon"></div>
        </div>
        <span className="desc">The first 10k NFT collection on Bitcoin</span>
        <span className="minted">10000 / 10000 minted!</span>
      </div>
    </div>
  );
}

export default Header;
