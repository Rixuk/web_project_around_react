import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }){
  const [newName, setNewName] = useState("");
  const [newLink, setNewLink] = useState("");
  const [nameError, setNameError] = useState("");
  const [linkError, setLinkError] = useState("");

  /*---------------- Validation ----------------*/

  function esURL(cadena) {
    try {
        new URL(cadena);
        return true;
    } catch (error) {
        return false;
    }
    }

  /*---------------- Handlers ----------------*/
  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setNewName(nameValue);
    if (nameValue.length < 2 || nameValue.length > 30) {
      setNameError("El nombre debe tener entre 2 y 30 caracteres");
    }else{
      setNameError("");
    }
  }
  const handleLinkChange = (e) => {
    const linkValue = e.target.value;
    setNewLink(linkValue);
    if (!esURL(linkValue)) {
      setLinkError("El enlace no es válido");
    } else {
      setLinkError("");
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: newName, link: newLink };
    onAddPlaceSubmit(data);
  }

    return(
            <form className="popup__form" noValidate onSubmit={handleSubmit}>
                <fieldset className="popup__fieldset">
                  <input
                    type="text"
                    name="name"
                    value={newName}
                    onChange={handleNameChange}
                    placeholder="Título"
                    className="popup__name popup__style form__inputs"
                    id="new-cards__name"
                    required
                    minLength="2"
                    maxLength="30"
                  />
                  {nameError && (
                    <span
                      className="form__inputs-error_active"
                      id="new-cards__name-error"
                    >
                      {nameError}
                    </span>
                  )}
                  <input
                    type="url"
                    name="link"
                    value={newLink}
                    onChange={handleLinkChange}
                    placeholder="Enlace a la imagen"
                    className="popup__aboutme popup__style form__inputs"
                    id="new-cards__link"
                    required
                  />
                  {linkError && (
                    <span
                      className="form__inputs-error_active"
                      id="new-cards__link-error"
                    >
                      {linkError}
                    </span>
                  )}
                  <button type="submit" className={`popup__save ${nameError || linkError || !newName || !newLink ? 'popup__save_disabled' : ''}`} disabled={nameError || linkError || !newName || !newLink}>
                    Crear
                  </button>
                </fieldset>
            </form>
    )
}