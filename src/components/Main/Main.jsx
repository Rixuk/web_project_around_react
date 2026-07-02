import vector from "../../../images/Vector.png"
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/form/NewCard/NewCard";
import EditProfile from "./components/Popup/form/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Card/ImagePopup/ImagePopup";

import {api} from "../../utils/api";

import { useState, useEffect, useContext} from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Main ({ onOpenPopup, onClosePopup, popup, cards, onDeleteCards, onCardLike, onAddPlaceSubmit }) {
  
  /*---------------- Context ----------------*/

  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  /*---------------- State variables ----------------*/

  const [selectedCard, setSelectedCard] = useState(null);

  /*---------------- State Popups ----------------*/

  const newCardPopup = { title: "Nuevo lugar", children:  <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />};
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };

  /*----------------- HANDLERS -----------------*/

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCloseImagePopup() {
    setSelectedCard(null);
  }

/*---------------- Render ----------------*/
    return (
        <main className="content">
        <section className="profile">
          <div className="profile__picture">
            <img src={currentUser?.avatar || " "} alt="avatar image" className="profile__avatar"/>
            <div className="profile__edit-icon-container">
              <button className="profile__edit-button" type="button" onClick={() => onOpenPopup(editAvatarPopup)}>
                <img src={vector} alt="edit icon" className="profile__edit-icon"/>
              </button>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__name-and-button">
              <h2 className="profile__name" id="profile__name">{currentUser?.name || " "}</h2>
              <button className="profile__edit-button" type="button" onClick={() => onOpenPopup(editProfilePopup)}>
                <img src={vector} alt="edit icon" className="profile__edit-icon"/>
              </button>
            </div>
            <p className="profile__profession" id="profile__profession">{currentUser?.about || " "}</p>
          </div>
          <div className="profile__add">
            <button className="profile__add-button" type="button" onClick = {() => onOpenPopup(newCardPopup)}>+</button>
          </div>
        </section>
        <ul className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={handleCardClick} onCardLike={onCardLike} onCardDelete={onDeleteCards} />
          ))}
        </ul>
        
        {popup && (
          <Popup onClose={onClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}

        {selectedCard && (
          <ImagePopup onClose={handleCloseImagePopup} card={selectedCard} />
        )}
      </main>
    );
}