class Api {
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // throw new Error('ошибка');
  }

  getData() {
    return fetch('https://api.bitcoinpunks.com/punk-inscriptions.json', {

    })
      .then(this._handleResponse)
  }



  // getData() {
  //   return fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', {
  //   // return fetch('https://api.bitcoinpunks.com/punk-inscriptions.json', {
  //     // mode: 'no-cors',
  //     headers: {
  //       "content-type": "application/json",
  //     }
  //   })
  //     .then(this._handleResponse)
  // }
}

export const api = new Api();