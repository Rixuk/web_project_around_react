import {useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile(){

    const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

    /*---------------- State variables ----------------*/

    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);
    const [aboutError, setAboutError] = useState("");
    const [nameError, setNameError] = useState("");

    /*---------------- Validation ----------------*/


    /*---------------- Handlers ----------------*/
    function handleNameChange(e){
        const nameValue = e.target.value
        setName(nameValue);
        if (nameValue.length < 2 || nameValue.length > 40) {
            setNameError("El nombre debe tener entre 2 y 40 caracteres");
        } else{
            setNameError("");
        }
    }

    function handleDescriptionChange(e){
        const descriptionValue = e.target.value
        setDescription(descriptionValue);
        if (descriptionValue.length < 2 || descriptionValue.length > 200) {
            setAboutError("La descripción debe tener entre 2 y 200 caracteres");
        } else{
            setAboutError("");
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        handleUpdateUser({ newName: name, newAbout: description });
    }

    return(
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
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
                    value={name}
                    onChange={handleNameChange}
                />
                {nameError && <span className="form__inputs-error_active" id="popup__name-error">{nameError}</span>}
                <input
                    type="text"
                    name="about"
                    placeholder="Acerca de mí"
                    className="popup__aboutme popup__style form__inputs"
                    id="popup__job"
                    required
                    minLength="2"
                    maxLength="200"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                {aboutError && <span className="form__inputs-error_active" id="popup__job-error">{aboutError}</span>}
                <button type="submit" className={`popup__save ${nameError || aboutError || !name || !description ? 'popup__save_disabled' : ''}`} disabled={nameError || aboutError || !name || !description}>
                    Guardar
                </button>
            </fieldset>
        </form>
    )
}