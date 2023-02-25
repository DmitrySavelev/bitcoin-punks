function Confirmation() {
  function handleOpenDiscort() {
    window.open("https://discord.com/invite/RzvY6UyEes", "_blank");
  }
  return (
    <div className="Confirmation">
      <div className="info-image"></div>
      <div>
        <p>
          We are now kicking off a community review of the inscription set for
          the collection. Everybody is encouraged to inspect the public data
          source and use the tools on this page to verify that the inscriptions
          are correct for each apes.
        </p>
        <p>
          Please report any discrepancies via{" "}
          <a onClick={handleOpenDiscort}>Discord</a>!
        </p>
      </div>
    </div>
  );
}

export default Confirmation;
