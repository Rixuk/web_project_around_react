import vector from "../../../images/Vector.png"

import { useState } from "react";

import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/form/NewCard/NewCard";

export default function Main () {
  const [popup, setPopup] = useState(null);
  
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  
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
            <button className="profile__add-button" type="button" onClick={() => handleOpenPopup(newCardPopup)}>+</button>
          </div>
          <div className="popups" id="popup-profile">
            <div className="popup__overlay"></div>
            <div className="popup__window">
              <h2 className="popup__title popup__style">Editar perfil</h2>
              <form className="popup__form" noValidate>
                <fieldset className="popup__fieldset">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="popup__name popup__style form__inputs"
                    id="popup__name"
                    required
                    minLength="2"
                    maxLength="40"
                  />
                  <span
                    className="form__inputs-error_active"
                    id="popup__name-error"
                  ></span>
                  <input
                    type="text"
                    name="about"
                    placeholder="Acerca de mí"
                    className="popup__aboutme popup__style form__inputs"
                    id="popup__job"
                    required
                    minLength="2"
                    maxLength="200"
                  />
                  <span
                    className="form__inputs-error_active"
                    id="popup__job-error"
                  ></span>
                  <button type="submit" className="popup__save popup__style">
                    Guardar
                  </button>
                </fieldset>
              </form>
              <button className="popups__close"></button>
            </div>
          </div>
          <div className="popups" id="popup-confirmation">
            <div className="popup__overlay"></div>
            <div className="popup__window">
              <h2 className="popup__title popup__style">¿Estás seguro?</h2>
              <form className="popup__form" noValidate>
                <fieldset className="popup__fieldset">
                  <button type="submit" className="popup__save popup__style">
                    Sí
                  </button>
                </fieldset>
              </form>
              <button className="popups__close"></button>
            </div>
          </div>
          <div className="popups" id="popup-edit-profile">
            <div className="popup__overlay"></div>
            <div className="popup__window">
              <h2 className="popup__title popup__style">Cambiar foto de perfil</h2>
              <form className="popup__form" noValidate>
                <fieldset className="popup__fieldset">
                  <input type="text" name="avatar" placeholder="Enlace a la imagen" className="popup__avatar popup__style form__inputs" id="edit-avatar__link" required />
                  <span
                    className="form__inputs-error_active"
                    id="edit-avatar__link-error"
                  ></span>
                  <button type="submit" className="popup__save popup__style">Guardar</button>
                </fieldset>
              </form>
              <button className="popups__close"></button>
            </div>
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