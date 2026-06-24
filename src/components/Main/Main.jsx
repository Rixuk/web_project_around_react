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

export default function Main () {
  
  const currentUser = useContext(CurrentUserContext);

  /*---------------- Variables de estado ----------------*/
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [cards, setCards] = useState([]);

  /*---------------- Efectos ----------------*/
  useEffect(() => {
    api.getInitialCards()
    .then((cardsData) => {
      setCards(cardsData);
    })
    .catch((err) => console.log(err));
  }, []);

  const newCardPopup = { title: "Nuevo lugar", children:  <NewCard />};
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };
  
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCloseImagePopup() {
    setSelectedCard(null);
  }

    return (
        <main className="content">
        <section className="profile">
          <div className="profile__picture">
            <img src={currentUser?.avatar || " "} alt="avatar image" className="profile__avatar"/>
            <div className="profile__edit-icon-container">
              <button className="profile__edit-button" type="button" onClick={() => handleOpenPopup(editAvatarPopup)}>
                <img src={vector} alt="edit icon" className="profile__edit-icon"/>
              </button>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__name-and-button">
              <h2 className="profile__name" id="profile__name">{currentUser?.name || " "}</h2>
              <button className="profile__edit-button" type="button" onClick={() => handleOpenPopup(editProfilePopup)}>
                <img src={vector} alt="edit icon" className="profile__edit-icon"/>
              </button>
            </div>
            <p className="profile__profession" id="profile__profession">{currentUser?.about || " "}</p>
          </div>
          <div className="profile__add">
            <button className="profile__add-button" type="button" onClick = {() => handleOpenPopup(newCardPopup)}>+</button>
          </div>
        </section>
        <ul className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={handleCardClick} />
          ))}
        </ul>
        
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}

        {selectedCard && (
          <ImagePopup onClose={handleCloseImagePopup} card={selectedCard} />
        )}
      </main>
    );
}