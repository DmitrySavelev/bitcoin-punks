function Article() {
  return (
    <div className="Article">
      <p>
        Bitcoin Punks are the first byte-perfect uploads of the <a href="https://www.larvalabs.com/cryptopunks">original Ethereum CryptoPunks</a> onto the Bitcoin Blockchain using <a href="https://ordinals.com/">Ordinals</a>.
      </p>
      <p className="paragraph">
        To make this site, we are checking the hash of every image uploaded to Ordinals and comparing it against the original 10k punk images. The links to Bitcoin Punks are the first-seen inscriptions (lowest ID) that contain these hashes on
        Ordinals.
      </p>
    </div>
  );
}

export default Article;
