import { useContext, useRef, useState } from "react"
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext"

export default function EditAvatar(){

    const { currentUser, handleUpdateAvatar } = useContext(CurrentUserContext);
    const [avatarError, setAvatarError] = useState("");

    const avatarRef = useRef();

    function esURL(cadena) {
    try {
        new URL(cadena);
        return true;
    } catch (error) {
        return false;
    }
    }

    function handleUrl(e){
        if (!esURL(e.target.value)) {
            setAvatarError("El enlace no es válido");
        } else {
            setAvatarError("");
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        handleUpdateAvatar({ avatarLink: avatarRef.current.value });
    }

    return(
        <form className="popup__form" noValidate onSubmit = {handleSubmit}>
            <fieldset className="popup__fieldset">
                <input ref={avatarRef} type="url" name="avatar" placeholder="Enlace a la imagen" className="popup__avatar popup__style form__inputs" id="edit-avatar__link" required onChange={handleUrl}/>
                    {avatarError && (
                        <span
                            className="form__inputs-error_active"
                            id="edit-avatar__link-error"
                        >
                            {avatarError}
                        </span>
                    )}
                <button type="submit"className={`popup__save ${avatarError ? 'popup__save_disabled' : ''}`} disabled={!!avatarError}>
                    Guardar
                </button>
            </fieldset>
        </form>
    )
}