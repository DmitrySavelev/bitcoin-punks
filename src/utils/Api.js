class Api {
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
  }

  getData() {
    return fetch('https://api.bitcoinpunks.com/punk-inscriptions.json', {
    })
      .then(this._handleResponse)
  }
}

export const api = new Api();