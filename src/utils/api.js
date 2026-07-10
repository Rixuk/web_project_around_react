class Api {
  constructor(token, baseUrl) {
    this.url = baseUrl;
    this.token = token;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
  _checkError(error){
    console.log(error);
  }
  _fetchGet(path){
    return fetch(this.url + path, {
      headers: {
        authorization: this.token,
      },
    })
      .then(this._checkResponse)  
  }
  getData() {
    return this._fetchGet("/users/me");
  }
  getInitialCards(){
    return this._fetchGet("/cards");
  }
  patchUserInfo({ newName, newAbout }) {
    return fetch(this.url + "/users/me", {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newName,
        about: newAbout
      })
    }).then(this._checkResponse)
  }
  patchUserAvatar({ avatarLink }) {
    return fetch(this.url + "/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: avatarLink
      })
    }).then(this._checkResponse)  
  }
  newCard({ name, link }) {
    return fetch(this.url + "/cards", {
      method: "POST",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(this._checkResponse)
  }
  deleteCard(cardId){
    return fetch(this.url + "/cards/" + cardId,{
      method: "DELETE",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      }
    }).then(this._checkResponse)
     
  }
  toggleLike(cardId, isLiked){
    return fetch(this.url + "/cards/" + cardId + "/likes",{
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      }
    }).then(this._checkResponse)
  }
}

export const api = new Api(
  "98ceb637-6af7-4ed6-84f7-0abd0d26da19",
  "https://around-api.es.tripleten-services.com/v1"
);