import {useState} from "react";

export default function RemoveCard(props){
    const {onDelete} = props;
    const handleSubmit = (e) =>{
        e.preventDefault();
        onDelete();
    } 

    return(
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <fieldset className="popup__fieldset">
                <button className="popup__save" type="submit">Sí</button>
            </fieldset>
        </form>
    )
}