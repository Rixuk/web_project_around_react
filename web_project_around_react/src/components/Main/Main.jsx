import vector from "../../../images/Vector.png"
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/form/NewCard/NewCard";

import { useState } from "react";

export default function Main () {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children:  <NewCard />};

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

    return (
        <main className="content">
        <section className="profile">
          <div className="profile__picture">
            <img src=" " alt="avatar image" className="profile__avatar"/>
            <div className="profile__edit-icon-container">
              <img src={vector} alt="edit icon" className="profile__edit-icon"/>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__name-and-button">
              <h2 className="profile__name" id="profile__name"></h2>
              <button className="profile__button"></button>
            </div>
            <p className="profile__profession" id="profile__profession"></p>
          </div>
          <div className="profile__add">
            <button className="profile__add-button" type="button" onClick = {() => handleOpenPopup(newCardPopup)}>+</button>
          </div>

        </section>
        <section className="elements"></section>

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    );
}