export default function EditProfile(){
    return(
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
    )
}