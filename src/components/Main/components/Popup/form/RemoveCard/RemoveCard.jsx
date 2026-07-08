import {useState} from "react";

export default function RemoveCard(props){
    const {onDelete, onClose} = props;
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (onDelete) {
            await onDelete();
        }
        if (onClose) {
            onClose();
        }
    } 

    return(
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <fieldset className="popup__fieldset">
                <button className="popup__save" type="submit">Sí</button>
            </fieldset>
        </form>
    )
}