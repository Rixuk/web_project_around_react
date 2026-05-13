export default function NewCard(){
    return(
            <form className="popup__form" noValidate>
                <fieldset className="popup__fieldset">
                  <input
                    type="text"
                    name="name"
                    placeholder="Título"
                    className="popup__name popup__style form__inputs"
                    id="new-cards__name"
                    required
                    minLength="2"
                    maxLength="30"
                  />
                  <span
                    className="form__inputs-error_active"
                    id="new-cards__name-error"
                  ></span>
                  <input
                    type="url"
                    name="link"
                    placeholder="Enlace a la imagen"
                    className="popup__aboutme popup__style form__inputs"
                    id="new-cards__link"
                    required
                  />
                  <span
                    className="form__inputs-error_active"
                    id="new-cards__link-error"
                  ></span>
                  <button type="submit" className="popup__save popup__style">
                    Crear
                  </button>
                </fieldset>
            </form>
    )
}