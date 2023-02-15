function Article() {
  return (
    <div className="Article">
      <p>
        Bitcoin Apes are the first byte-perfect uploads of the <a href="https://www.larvalabs.com/cryptopunks">original Ethereum CryptoApes</a> onto the Bitcoin Blockchain using <a href="https://ordinals.com/">Ordinals</a>.
      </p>
      <p className="paragraph">
        To make this site, we are checking the hash of every image uploaded to Ordinals and comparing it against the original 500 Apes images. The links to Bitcoin Apes are the first-seen inscriptions (lowest ID) that contain these hashes on
        Ordinals.
      </p>
    </div>
  );
}

export default Article;
