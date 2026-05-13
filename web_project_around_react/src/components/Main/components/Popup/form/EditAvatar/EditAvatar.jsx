export default function EditAvatar(){
    return(
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
    )
}