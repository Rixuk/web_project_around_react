import { useContext, useState } from "react"
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext"

export default function EditAvatar(){

    const { currentUser, handleUpdateAvatar } = useContext(CurrentUserContext);
    const [avatar, setAvatar] = useState("");
    const [avatarError, setAvatarError] = useState("");

    function esURL(cadena) {
    try {
        new URL(cadena);
        return true;
    } catch (error) {
        return false;
    }
    }

    const handleAvatarChange = (e) =>{
        const avatarValue = e.target.value;
        setAvatar(avatarValue);
        if (!esURL(avatarValue)) {
            setAvatarError("Por favor, introduce una URL válida");
        } else {
            setAvatarError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateAvatar({avatarLink: avatar});
    };

    return(
        <form className="popup__form" noValidate onSubmit = {handleSubmit}>
            <fieldset className="popup__fieldset">
                <input type="url" name="avatar" placeholder="Enlace a la imagen" className="popup__avatar popup__style form__inputs" id="edit-avatar__link" required value={avatar} onChange={handleAvatarChange}/>
                    {avatarError && (
                        <span
                            className="form__inputs-error_active"
                            id="edit-avatar__link-error"
                        >
                            {avatarError}
                        </span>
                    )}
                <button type="submit" className={`popup__save ${avatarError || !avatar ? 'popup__save_disabled' : ''}`} disabled={avatarError || !avatar}>
                    Guardar
                </button>
            </fieldset>
        </form>
    )
}