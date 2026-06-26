import {useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile(){

    const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

    /*---------------- State variables ----------------*/

    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);

    /*---------------- Handlers ----------------*/
    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleDescriptionChange(e){
        setDescription(e.target.value);
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
                    value={description}
                    onChange={handleDescriptionChange}
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