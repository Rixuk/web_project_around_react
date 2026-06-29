import { useContext, useRef } from "react"
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext"

export default function EditAvatar(){

    const { currentUser, handleUpdateAvatar } = useContext(CurrentUserContext);

    const avatarRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        handleUpdateAvatar({ avatarLink: avatarRef.current.value });
    }

    return(
        <form className="popup__form" noValidate onSubmit = {handleSubmit}>
            <fieldset className="popup__fieldset">
                <input ref={avatarRef} type="text" name="avatar" placeholder="Enlace a la imagen" className="popup__avatar popup__style form__inputs" id="edit-avatar__link" required />
                <span
                    className="form__inputs-error_active"
                    id="edit-avatar__link-error"
                ></span>
                <button type="submit" className="popup__save popup__style">Guardar</button>
            </fieldset>
        </form>
    )
}